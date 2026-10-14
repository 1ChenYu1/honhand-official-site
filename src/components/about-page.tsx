'use client'

import Image from 'next/image'
import {
  Award,
  Compass,
  Globe2,
  HeartHandshake,
  HelpingHand,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

import { companyFacts, site } from '@/lib/site'
import { PageHero } from './ui/page-hero'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'
import { LinkButton } from './ui/link-button'

const stats = [
  { icon: Users, value: '500+', label: '服务客户' },
  { icon: Target, value: '50+', label: '行业解决方案' },
  { icon: Award, value: '99.9%', label: '系统稳定性' },
  { icon: Globe2, value: '24/7', label: '技术支持' },
]

const values = [
  {
    icon: Lightbulb,
    title: '创新驱动',
    description: '持续投入研发，把前沿技术转化为现场可用的工程能力。',
    accent: 'text-primary-600',
    chip: 'bg-primary-50 text-primary-700 ring-primary-100',
    bar: 'from-primary-500 to-primary-700',
  },
  {
    icon: ShieldCheck,
    title: '质量至上',
    description: '严格的质量管理体系，每一个交付节点都有可追溯的验收标准。',
    accent: 'text-corporate-teal-600',
    chip: 'bg-corporate-teal-50 text-corporate-teal-700 ring-corporate-teal-100',
    bar: 'from-corporate-teal-500 to-corporate-teal-700',
  },
  {
    icon: HeartHandshake,
    title: '客户为本',
    description: '从现场调研开始做方案，而不是从产品清单开始做方案。',
    accent: 'text-accent-600',
    chip: 'bg-accent-50 text-accent-700 ring-accent-100',
    bar: 'from-accent-400 to-accent-600',
  },
  {
    icon: HelpingHand,
    title: '合作共赢',
    description: '与客户、伙伴建立长期关系，把一次交付变成长期运维。',
    accent: 'text-neutral-700',
    chip: 'bg-neutral-100 text-neutral-700 ring-neutral-200',
    bar: 'from-neutral-600 to-neutral-900',
  },
]

const teams = [
  {
    icon: Compass,
    title: '研发团队',
    description: '工控领域开发经验，负责产品内核、协议接入与持续迭代。',
    gradient: 'from-primary-500 to-primary-700',
    points: ['自研采集与组态引擎', '多品牌 PLC 协议适配', '边缘侧算法优化'],
  },
  {
    icon: Users,
    title: '服务团队',
    description: '驻场与远程双通道，提供全天候的技术支持与培训。',
    gradient: 'from-corporate-teal-500 to-corporate-teal-700',
    points: ['7×24 故障响应', '上线陪跑与培训', '预防性巡检计划'],
  },
  {
    icon: Target,
    title: '管理团队',
    description: '负责战略方向与交付质量，保障项目长期稳定运行。',
    gradient: 'from-accent-500 to-accent-700',
    points: ['标准化交付流程', '项目全周期跟踪', '持续经营与复盘'],
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={{ icon: Users, label: '关于我们' }}
        title={
          <>
            十一年专注工控现场，
            <br className="hidden sm:block" />
            只做<span className="text-gradient-brand">能落地</span>的智能化
          </>
        }
        description={`${site.name}成立于${site.founded}，注册资本${site.registeredCapital}。我们把工业现场的可靠性问题当作核心命题，用软件与数据把风险挡在故障之前。`}
      />

      {/* 公司简介 */}
      <section className="section bg-white">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="space-y-7">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
              Company Profile
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">公司简介</h2>

            <div className="body-copy space-y-4 text-[17px]">
              <p>
                {site.name}成立于{site.founded}，是一家专注于工控领域的智能化解决方案提供商。
                公司致力于工业自动化和数字化转型，为客户提供全方位的技术支持和产品服务。
              </p>
              <p>
                我们拥有专业的研发团队和丰富的行业经验，通过「四早机制」（风险早识别、问题早发现、
                隐患早预警、故障早处理）为客户提供可靠的产品和优质的服务。
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 pt-2">
              {companyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="card-corporate px-5 py-4"
                >
                  <dt className="text-[13px] font-medium text-neutral-500">{fact.label}</dt>
                  <dd className="mt-1.5 text-[17px] font-bold text-neutral-900">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-100 to-corporate-teal-100 shadow-corporate-xl ring-1 ring-neutral-900/5">
                <Image
                  src="/images/company-intro.png"
                  alt={`${site.name}办公环境`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/35 via-transparent to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-semibold text-white drop-shadow">
                    {site.addressShort} · 南汇新城
                  </p>
                  <p className="mt-1 text-xs text-white/75">
                    研发 · 交付 · 运维一体化团队
                  </p>
                </figcaption>
              </div>

              {/* 悬浮数据卡 */}
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-neutral-200/80 bg-white/95 p-5 shadow-corporate-xl backdrop-blur-md sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                  Since
                </p>
                <p className="mt-1 text-2xl font-bold tracking-tightest text-neutral-900">2015</p>
                <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-full bg-gradient-to-r from-primary-500 to-corporate-teal-500" />
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-5 -top-5 -z-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-primary-200/50 to-corporate-teal-200/50"
                aria-hidden
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 数据 */}
      <section className="section relative overflow-hidden bg-neutral-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow={{ icon: Award, label: '我们的成就' }}
            title="用数据说话"
            description="十年间我们把这些数字一个个做实，它们来自真实上线项目的长期统计。"
          />

          <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="card-corporate h-full p-7 text-center">
                  <span
                    className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 ring-1 ring-inset ring-primary-100"
                    aria-hidden
                  >
                    <stat.icon className="h-6 w-6" />
                  </span>
                  <dd className="mt-5 text-3xl font-bold tracking-tightest text-neutral-900">
                    {stat.value}
                  </dd>
                  <dt className="mt-1.5 text-sm text-neutral-500">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 价值观 */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow={{ icon: Award, label: '核心价值观' }}
            title="我们如何做决定"
            description="这四条准则决定了我们在方案取舍、交付标准与合作方式上的取舍。"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="card-corporate group h-full p-8">
                  <div className="flex items-start gap-5">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ring-inset ${value.chip}`}
                      aria-hidden
                    >
                      <value.icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-neutral-900">{value.title}</h3>
                      <p className="body-copy mt-2.5 text-[15px]">{value.description}</p>
                    </div>
                  </div>
                  <div
                    className={`mt-6 h-0.5 w-full rounded-full bg-neutral-100 bg-gradient-to-r ${value.bar} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    aria-hidden
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className="section relative overflow-hidden bg-neutral-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow={{ icon: Users, label: '专业团队' }}
            title="一支懂现场的队伍"
            description="研发、服务与管理三条线协同，让方案能落地、也能长期稳定运行。"
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {teams.map((team, index) => (
              <Reveal key={team.title} delay={index * 0.1}>
                <article className="card-corporate group flex h-full flex-col p-8">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${team.gradient} text-white shadow-corporate`}
                    aria-hidden
                  >
                    <team.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-neutral-900">{team.title}</h3>
                  <p className="body-copy mt-2.5 text-[15px]">{team.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-6">
                    {team.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-neutral-600">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-200/80 bg-white px-8 py-8 text-center shadow-card sm:flex-row sm:text-left">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">想更了解我们的落地案例？</h3>
                <p className="mt-2 text-neutral-500">
                  留下您的现场情况，我们安排对应行业的工程师与您沟通。
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <LinkButton href="/contact">联系我们</LinkButton>
                <LinkButton href="/products" variant="secondary">
                  浏览产品
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
