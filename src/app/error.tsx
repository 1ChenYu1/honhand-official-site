'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RotateCcw } from 'lucide-react'

import { LinkButton } from '@/components/ui/link-button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 接入你们的监控平台（如 Sentry）时可在此上报
    console.error(error)
  }, [error])

  return (
    <div className="relative isolate flex min-h-[calc(100svh-var(--nav-height))] items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-slate-50" />
        <div className="absolute inset-0 bg-grid mask-fade-y" />
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary-200/40 blur-[100px]" />
      </div>

      <div className="container-page flex flex-col items-center gap-6 py-24 text-center">
        <span
          className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100"
          aria-hidden
        >
          <AlertTriangle className="h-7 w-7" />
        </span>

        <h1 className="text-balance text-3xl font-bold text-neutral-900 sm:text-4xl">
          页面出了点问题
        </h1>
        <p className="max-w-prose text-neutral-600">
          加载过程中发生了意外错误。您可以重试，或者直接联系我们协助处理。
        </p>

        {error.digest ? (
          <p className="font-mono text-xs text-neutral-400">错误编号：{error.digest}</p>
        ) : null}

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-corporate">
            <RotateCcw className="h-4 w-4" aria-hidden />
            重试
          </button>
          <LinkButton href="/" variant="secondary">
            <Home className="h-4 w-4" aria-hidden />
            返回首页
          </LinkButton>
        </div>

        <Link
          href="/contact"
          className="mt-4 text-sm font-medium text-primary-700 underline-offset-4 hover:underline"
        >
          还是不行？联系我们
        </Link>
      </div>
    </div>
  )
}
