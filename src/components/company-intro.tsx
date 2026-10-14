'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Building2, Calendar, MapPin, TrendingUp, Users } from 'lucide-react'

import { companyFacts, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Reveal } from './ui/reveal'

const factIcons = [Calendar, Award, MapPin, Users]
const factTones = [
  { chip: 'bg-primary-50 text-primary-600 ring-primary-100', value: 'text-lg' },
  { chip: 'bg-corporate-teal-50 text-corporate-teal-600 ring-corporate-teal-100', value: 'text-lg' },
  { chip: 'bg-accent-50 text-accent-600 ring-accent-100', value: 'text-base' },
  { chip: 'bg-green-50 text-green-600 ring-green-100', value: 'text-lg' },
]

const metrics = [
  { icon: TrendingUp, value: '10 年+', label: '行业深耕', gradient: 'from-primary-500 to-primary-700' },
  { icon: Users, value: '50+', label: '专业团队', gradient: 'from-corporate-teal-500 to-corporate-teal-700' },
]

export function CompanyIntro() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-50/70 blur-[110px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-corporate-teal-50/70 blur-[110px]" />
      </div>

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* 文案 */}
        <Reveal className="space-y-8">
          <div>
            <span className="eyebrow">
              <Building2 className="h-3.5 w-3.5" aria-hidden />
              关于我们
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold sm:text-4xl">
              {site.name}
            </h2>
            <div className="body-copy mt-5 space-y-4 text-[17px]">
              <p>
                {site.name}成立于{site.founded}，是一家专注于工控领域的智能化解决方案提供商。
                公司致力于工业自动化和数字化转型，为客户提供全方位的技术支持和产品服务。
              </p>
              <p>
                我们拥有专业的研发团队和丰富的行业经验，通过「四早机制」（风险早识别、问题早发现、
                隐患早预警、故障早处理）为客户提供可靠的产品和优质的服务。
              </p>
            </div>
          </div>

          {/* 公司信息 */}
          <dl className="grid grid-cols-2 gap-3">
            {companyFacts.map((fact, index) => {
              const Icon = factIcons[index]
              const tone = factTones[index]

              return (
                <div key={fact.label} className="card-corporate p-5">
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        'grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ring-inset transition-transform duration-500 ease-premium group-hover:scale-105',
                        tone.chip
                      )}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[13px] text-neutral-500">{fact.label}</dt>
                      <dd
                        className={cn(
                          'mt-1 font-bold leading-snug text-neutral-900',
                          tone.value
                        )}
                      >
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                </div>
              )
            })}
          </dl>

          {/* 指标 */}
          <dl className="flex items-center gap-6 border-t border-neutral-100 pt-8">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="flex items-center gap-3">
                {index > 0 ? <span className="h-10 w-px bg-neutral-200" aria-hidden /> : null}
                <span
                  className={cn(
                    'grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-corporate',
                    metric.gradient
                  )}
                  aria-hidden
                >
                  <metric.icon className="h-5 w-5" />
                </span>
                <div>
                  <dd className="text-xl font-bold tracking-tight text-neutral-900">
                    {metric.value}
                  </dd>
                  <dt className="text-[13px] text-neutral-500">{metric.label}</dt>
                </div>
              </div>
            ))}

            <Link
              href="/about"
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
            >
              了解我们
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </dl>
        </Reveal>

        {/* 图片 */}
        <Reveal>
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-100 to-corporate-teal-100 shadow-corporate-xl ring-1 ring-neutral-900/5 lg:aspect-[5/4]">
              <Image
                src="/images/company-intro.png"
                alt={`${site.name}办公环境`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/45 via-transparent to-transparent"
                aria-hidden
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <p className="text-sm font-semibold text-white drop-shadow">
                    专注工控领域
                  </p>
                  <p className="mt-1 text-xs text-white/75">智能化解决方案专家</p>
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  Since 2015
                </span>
              </figcaption>
            </div>

            <div
              className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-accent-200/50 to-primary-200/50"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-primary-200/50 to-corporate-teal-200/50"
              aria-hidden
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
