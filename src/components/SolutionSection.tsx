import { CheckCircle2, XCircle } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      problem: "연결만 해주고 끝 → 우회하면 플랫폼 불필요",
      solution: "협업 후 수익 정산·QR 결제를 플랫폼이 담당"
    },
    {
      problem: "수익 분배/보험/책임 불명확",
      solution: "자동 정산 + 계약 템플릿 + 파손 책임 옵션"
    },
    {
      problem: "카페 부담 (판매 운영 X)",
      solution: "판매·정산 시스템을 외부화 (우리)"
    },
    {
      problem: "무임승차 브랜드",
      solution: "프로필 · 제안 시스템으로 신뢰도 확보"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">우리가 해결하는 문제</h2>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-red-50 p-6 md:p-8 flex items-center border-b md:border-b-0 md:border-r-4 border-red-300">
                  <div className="flex items-start gap-4 w-full">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-red-600 mb-1">기존 문제</p>
                      <p className="text-lg">{item.problem}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 md:p-8 flex items-center">
                  <div className="flex items-start gap-4 w-full">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-green-600 mb-1">우리는 이렇게 해결</p>
                      <p className="text-lg">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
