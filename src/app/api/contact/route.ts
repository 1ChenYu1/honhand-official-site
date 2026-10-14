import { NextResponse } from 'next/server'
import { site } from '@/lib/site'

export const runtime = 'nodejs'

type Payload = {
  name?: string
  email?: string
  phone?: string
  company?: string
  subject?: string
  message?: string
  /** 蜜罐字段：真实用户不会填写，机器人会填 */
  website?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MAX_LEN = { name: 60, email: 120, phone: 40, company: 120, subject: 120, message: 4000 }

/* 极简内存限流：同一 IP 60 秒内最多 5 次 */
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }

  recent.push(now)
  hits.set(ip, recent)

  if (hits.size > 5000) hits.clear()
  return false
}

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: '提交过于频繁，请稍后再试或直接致电我们。' },
      { status: 429 }
    )
  }

  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: '请求格式不正确。' }, { status: 400 })
  }

  /* 蜜罐命中：静默当作成功，避免告诉机器人它被识别了 */
  if (body.website) {
    return NextResponse.json({ ok: true, message: '已收到您的留言，我们会尽快与您联系。' })
  }

  const data = {
    name: clean(body.name, MAX_LEN.name),
    email: clean(body.email, MAX_LEN.email),
    phone: clean(body.phone, MAX_LEN.phone),
    company: clean(body.company, MAX_LEN.company),
    subject: clean(body.subject, MAX_LEN.subject),
    message: clean(body.message, MAX_LEN.message),
  }

  const errors: Record<string, string> = {}

  if (!data.name) errors.name = '请填写您的姓名'
  if (!data.email) errors.email = '请填写您的邮箱'
  else if (!EMAIL_RE.test(data.email)) errors.email = '邮箱格式不正确'
  if (!data.subject) errors.subject = '请填写消息主题'
  if (!data.message) errors.message = '请描述您的需求或问题'
  else if (data.message.length < 10) errors.message = '请再多描述一些（至少 10 个字）'
  if (data.phone && !/^[\d\s+()-]{6,20}$/.test(data.phone)) errors.phone = '电话格式不正确'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: '请检查表单填写是否完整。', errors },
      { status: 422 }
    )
  }

  /*
   * ------------------------------------------------------------------
   * TODO: 在这里接入实际的通知渠道。
   * 目前仅写入服务端日志，请按需替换为 SMTP / 企业微信 / 飞书 Webhook。
   * ------------------------------------------------------------------
   */
  console.info('[contact] 收到新的客户留言', {
    ...data,
    receivedAt: new Date().toISOString(),
  })

  return NextResponse.json({
    ok: true,
    message: '已收到您的留言，我们的工程师会在一个工作日内与您联系。',
    fallback: { phone: site.phone, email: site.email },
  })
}
