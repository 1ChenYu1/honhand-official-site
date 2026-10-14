'use client'

import { useState, type FormEvent } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'

import { contactChannels } from '@/lib/contact'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { PageHero } from './ui/page-hero'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'
import { LinkButton } from './ui/link-button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type FieldErrors = Partial<Record<'name' | 'email' | 'phone' | 'subject' | 'message', string>>

const fields = [
  { name: 'name', label: '姓名', type: 'text', placeholder: '请输入您的姓名', required: true, autoComplete: 'name' },
  { name: 'email', label: '邮箱', type: 'email', placeholder: '请输入您的邮箱', required: true, autoComplete: 'email' },
  { name: 'phone', label: '电话', type: 'tel', placeholder: '选填，方便我们回电', required: false, autoComplete: 'tel' },
  { name: 'company', label: '公司名称', type: 'text', placeholder: '选填', required: false, autoComplete: 'organization' },
] as const

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrors({})
    setMessage('')

    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || !result.ok) {
        setStatus('error')
        setErrors(result.errors ?? {})
        setMessage(result.message ?? '提交失败，请稍后重试。')
        return
      }

      setStatus('success')
      setMessage(result.message)
      form.reset()
    } catch {
      setStatus('error')
      setMessage('网络异常，请稍后重试，或直接致电我们。')
    }
  }

  return (
    <>
      <PageHero
        eyebrow={{ icon: MessageCircle, label: '联系我们' }}
        title="把您的现场问题交给我们"
        description="无论是选型咨询、方案报价还是故障支持，直接说明情况，我们会安排对应产品的工程师对接。"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href={`tel:${site.phone.replace(/\s/g, '')}`} variant="secondary">
            <Phone className="h-4 w-4 text-primary-600" aria-hidden />
            {site.phone}
          </LinkButton>
          <LinkButton href={site.emailHref} variant="secondary">
            <Mail className="h-4 w-4 text-primary-600" aria-hidden />
            发送邮件
          </LinkButton>
        </div>
      </PageHero>

      {/* 联系方式 */}
      <section className="section relative bg-white pt-0">
        <div className="container-page">
          <div className="-mt-12 grid gap-4 sm:grid-cols-2 lg:-mt-16 lg:grid-cols-4">
            {contactChannels.map((channel, index) => {
              const inner = (
                <>
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${channel.iconBg} text-white shadow-corporate`}
                    aria-hidden
                  >
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-[13px] font-medium text-neutral-500">{channel.title}</p>
                  <p className="mt-1.5 text-[15px] font-bold leading-snug text-neutral-900">
                    {channel.value}
                  </p>
                  <p className="mt-1.5 text-[13px] text-neutral-400">{channel.description}</p>
                </>
              )

              const shell = `group h-full rounded-3xl border border-neutral-200/80 bg-white p-7 text-left shadow-corporate transition-all duration-500 ease-premium ${channel.wash}`

              return (
                <Reveal key={channel.title} delay={index * 0.08}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className={`${shell} block hover:-translate-y-1 hover:shadow-corporate-xl`}
                      {...(channel.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={shell}>{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 表单 */}
      <section id="contact-form" className="section scroll-mt-24 bg-neutral-50">
        <div className="container-page">
          <SectionHeading
            eyebrow={{ icon: Send, label: '发送消息' }}
            title="填写需求，我们来准备方案"
            description="带 * 为必填项。信息越具体，我们准备的方案越贴合您的现场。"
          />

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[2rem] border border-neutral-200/80 bg-white p-7 shadow-corporate-lg sm:p-10"
              >
                {/* 蜜罐 */}
                <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
                  <label htmlFor="website">请勿填写</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="label-corporate">
                        {field.label}
                        {field.required ? (
                          <span className="ml-0.5 text-primary-600" aria-hidden>
                            *
                          </span>
                        ) : (
                          <span className="ml-1.5 text-[12px] font-normal text-neutral-400">
                            选填
                          </span>
                        )}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        aria-invalid={errors[field.name as keyof FieldErrors] ? true : undefined}
                        aria-describedby={
                          errors[field.name as keyof FieldErrors]
                            ? `${field.name}-error`
                            : undefined
                        }
                        className={cn(
                          'input-corporate',
                          errors[field.name as keyof FieldErrors] &&
                            'border-red-300 focus:border-red-400 focus:ring-red-500/10'
                        )}
                      />
                      {errors[field.name as keyof FieldErrors] ? (
                        <p
                          id={`${field.name}-error`}
                          className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600"
                        >
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                          {errors[field.name as keyof FieldErrors]}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="label-corporate">
                    主题
                    <span className="ml-0.5 text-primary-600" aria-hidden>
                      *
                    </span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="例如：需要一套产线 HMI 监控系统"
                    aria-invalid={errors.subject ? true : undefined}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={cn(
                      'input-corporate',
                      errors.subject &&
                        'border-red-300 focus:border-red-400 focus:ring-red-500/10'
                    )}
                  />
                  {errors.subject ? (
                    <p id="subject-error" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="label-corporate">
                    需求描述
                    <span className="ml-0.5 text-primary-600" aria-hidden>
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="请说明现场情况、现有系统、期望达成的目标，以及大致的产线或设备规模。"
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={cn(
                      'textarea-corporate',
                      errors.message &&
                        'border-red-300 focus:border-red-400 focus:ring-red-500/10'
                    )}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden />
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                {/* 状态提示 */}
                {status === 'success' ? (
                  <div
                    role="status"
                    className="mt-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-[15px] text-green-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden />
                    <span>{message}</span>
                  </div>
                ) : null}

                {status === 'error' ? (
                  <div
                    role="alert"
                    className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-[15px] text-red-800"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
                    <span>
                      {message}
                      {!Object.keys(errors).length ? (
                        <>
                          {' '}
                          您也可以直接致电{' '}
                          <a href={site.phoneHref} className="font-semibold underline">
                            {site.phone}
                          </a>
                          。
                        </>
                      ) : null}
                    </span>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-corporate mt-7 w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      正在提交…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      发送消息
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[13px] text-neutral-400">
                  我们仅将您提供的信息用于本次需求沟通，不会对外分享。
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 位置 */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow={{ icon: MapPin, label: '我们的位置' }}
            title="欢迎您到访"
            description={`${site.address}（${site.hours}）`}
          />

          <Reveal delay={0.1}>
            <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-50 shadow-corporate-lg">
              <div
                aria-hidden
                className="absolute inset-0 bg-dots opacity-70"
              />
              <div className="relative grid gap-8 p-10 sm:grid-cols-[auto_1fr] sm:items-center sm:p-14">
                <span
                  className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-corporate-xl"
                  aria-hidden
                >
                  <MapPin className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-lg font-bold text-neutral-900">{site.name}</p>
                  <p className="mt-2 max-w-lg leading-relaxed text-neutral-600">{site.address}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <LinkButton href={site.mapHref} variant="secondary" size="sm">
                      在地图中打开
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </LinkButton>
                    <LinkButton href={site.phoneHref} variant="secondary" size="sm">
                      致电前台
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brand-gradient py-20 text-white md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-[90px]" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-neutral-900/20 blur-[90px]" />
        </div>

        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
                立即获取专业咨询
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-white/80">
                我们的专业团队随时准备为您解答疑问，提供最适合您的解决方案。
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href="#contact-form" variant="invert">
                  立即填写需求
                </LinkButton>
                <LinkButton
                  href={site.phoneHref}
                  variant="ghost"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {site.phone}
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
