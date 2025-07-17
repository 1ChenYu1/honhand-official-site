const cases = [
  {
    year: 2023,
    client: "某汽车制造集团",
    logo: "/assets/auto-group.png",
    highlight: "工控系统降低故障停机时间40%"
  },
  {
    year: 2022,
    client: "某电子厂",
    logo: "/assets/electronics.png",
    highlight: "HR系统助力员工效率提升30%"
  }
]

export default function CaseStudies() {
  return (
    <section id="cases" className="w-full py-16 px-6 bg-[#0a1f3a]/80">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl text-main-title mb-8">客户案例</h2>
        <div className="relative border-l-4 border-neon-blue pl-8">
          {cases.map((item, idx) => (
            <div key={item.year+item.client} className="mb-10 flex items-center group">
              <div className="absolute -left-6 w-12 h-12 bg-[#001a33] rounded-full border-4 border-neon-blue flex items-center justify-center shadow-lg">
                <img src={item.logo} alt={item.client} className="w-8 h-8 object-contain" />
              </div>
              <div className="ml-8">
                <div className="font-heading text-xl text-main-title">{item.client} <span className="text-main-text text-base ml-2">{item.year}</span></div>
                <div className="text-neon-pink font-bold mt-1">{item.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 