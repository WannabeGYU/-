import { Target, Zap } from 'lucide-react';

export function Features() {
  const mvpFeatures = [
    "브랜드 & 공간 프로필 등록",
    "협업 제안(전시/팝업/판매)",
    "QR 결제 기반 자동 수익 분배 \"미리보기\"",
    "계약/정산 옵션 선택"
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Core Hypothesis */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-10 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧾</span>
            </div>
            <h2 className="text-2xl md:text-3xl">핵심 가설(MVP)</h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-xl md:text-2xl leading-relaxed">
              카페와 브랜드는 <span className="text-yellow-300">'소개'</span>보다<br />
              계약/정산/결제까지 해결해주는 시스템에 비용을 지불한다
            </p>
          </div>
        </div>
        
        {/* MVP Scope */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-8 border-indigo-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <h2 className="text-2xl md:text-3xl">이번 MVP 범위</h2>
          </div>
          
          <p className="text-indigo-600 mb-6">(10일 버전)</p>
          
          <div className="space-y-3 mb-6">
            {mvpFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-4 border-l-4 border-amber-400">
            <p className="text-sm text-amber-800">
              👉 기능 존재 X, 흐름만 시각화
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
