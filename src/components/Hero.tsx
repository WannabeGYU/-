import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-12 h-12 mr-4" />
          <span className="text-5xl md:text-7xl">🎯</span>
        </div>
        
        <h1 className="text-center mb-6">
          <span className="block text-4xl md:text-6xl mb-2">COLLABEAT</span>
          <span className="block text-xl md:text-3xl opacity-90">콜라비트</span>
        </h1>
        
        <p className="text-center text-2xl md:text-3xl mb-8 opacity-95">
          브랜드 × 공간의 수익형 협업 플랫폼
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <p className="text-xl md:text-2xl text-center">
              💬 "콜라보는 연결이 아니라 운영이다."
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <p className="text-xl md:text-2xl text-center">
              💬 "전시, 팝업, 굿즈. 수익까지 우리가 정산한다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
