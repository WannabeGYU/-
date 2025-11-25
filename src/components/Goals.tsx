import { Target, TrendingUp } from 'lucide-react';

export function Goals() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
          <span className="text-3xl">🤝</span>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4">현재 목표</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-10 h-10" />
              <p className="text-2xl md:text-3xl">핵심 목표</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 mb-8">
              <p className="text-2xl md:text-3xl text-center mb-6">
                📌 카페 <span className="text-yellow-300">5곳</span> + 브랜드 <span className="text-yellow-300">10곳</span> 리쿠르팅
              </p>
              <div className="h-1 bg-white/30 rounded-full mb-6"></div>
              <p className="text-2xl md:text-3xl text-center">
                협업 <span className="text-yellow-300">3건</span> 성사
              </p>
            </div>
            
            <div className="bg-green-500/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/50 flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl">
                  👉 협업만 실제로 일어나면 성공
                </p>
                <p className="text-lg opacity-90 mt-2">
                  (정산은 수기로 해도 OK)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
