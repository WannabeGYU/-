import { Users } from 'lucide-react';

export function TargetAudience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <span className="text-3xl">🧲</span>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4">타깃</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <p className="text-lg">인디 브랜드</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <p className="text-lg">로컬 소규모 카페</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <p className="text-lg">갤러리형 공간</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <p className="text-xl md:text-2xl">
              특히 <span className="text-yellow-300 underline">전시+판매 혼합 모델</span>을 원하는 공간
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
