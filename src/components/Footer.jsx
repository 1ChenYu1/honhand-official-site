export default function Footer() {
  return (
    <footer className="w-full bg-[#001a33] text-main-text py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-heading text-lg text-main-title mb-2">产品矩阵</div>
          <ul className="space-y-1">
            <li>HR云平台</li>
            <li>工控组态HMI</li>
            <li>数据中台</li>
          </ul>
        </div>
        <div>
          <div className="font-heading text-lg text-main-title mb-2">技术支持</div>
          <ul className="space-y-1">
            <li>API文档</li>
            <li>SDK下载</li>
            <li>社区论坛</li>
          </ul>
        </div>
        <div>
          <div className="font-heading text-lg text-main-title mb-2">法律声明</div>
          <ul className="space-y-1">
            <li>隐私政策</li>
            <li>服务条款</li>
            <li>知识产权</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        浙ICP备2023010<span className="blink text-neon-pink animate-pulse">X</span>号
      </div>
    </footer>
  )
} 