import { useState } from 'react'

const cities = [
  { name: '北京', rate: 0.85 },
  { name: '上海', rate: 0.83 },
]

function TaxCalculator() {
  const [salary, setSalary] = useState(10000)
  const [city, setCity] = useState(cities[0])
  return (
    <div className="tax-calculator bg-[#112244cc] rounded-xl p-6 shadow-lg flex flex-col gap-4 w-full max-w-md">
      <div className="font-heading text-xl mb-2">实时薪酬演示</div>
      <input type="range" min="5000" max="100000" step="100" value={salary} onChange={e => setSalary(Number(e.target.value))} className="w-full accent-neon-blue" />
      <div className="flex justify-between text-main-text text-sm">
        <span>¥5,000</span><span>¥100,000</span>
      </div>
      <select value={city.name} onChange={e => setCity(cities.find(c => c.name === e.target.value))} className="bg-[#223355] text-main-title rounded px-2 py-1">
        {cities.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
      </select>
      <div className="result text-lg mt-2">实发薪资: <span id="netSalary" className="text-neon-blue font-bold">¥{(salary * city.rate).toFixed(2)}</span></div>
    </div>
  )
}

function DraggableComponent({ type, x, y }) {
  // 简化：静态SVG元件
  if (type === 'pressure-gauge') {
    return <circle cx={x} cy={y} r="24" fill="#00e4ff" stroke="#fff" strokeWidth="3" />
  }
  if (type === 'motor-control') {
    return <rect x={x-20} y={y-20} width="40" height="40" rx="8" fill="#ff4d94" stroke="#fff" strokeWidth="3" />
  }
  return null
}

function HmiSimulator() {
  return (
    <div className="hmi-simulator bg-[#112244cc] rounded-xl p-6 shadow-lg w-full max-w-md flex flex-col gap-4">
      <div className="font-heading text-xl mb-2">HMI面板模拟</div>
      <svg width="320" height="200" className="bg-[#223355] rounded">
        <DraggableComponent type="pressure-gauge" x={100} y={50} />
        <DraggableComponent type="motor-control" x={200} y={150} />
      </svg>
      <button className="mt-2 px-4 py-2 bg-neon-pink text-main-title rounded-full shadow-[0_0_8px_#ff4d94] hover:bg-neon-blue hover:shadow-[0_0_16px_#00e4ff] transition">导出组态配置</button>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section id="product" className="w-full flex flex-col md:flex-row gap-8 items-center justify-center py-16 px-6">
      <div className="flex-1 flex justify-center"><TaxCalculator /></div>
      <div className="flex-1 flex justify-center"><HmiSimulator /></div>
    </section>
  )
} 