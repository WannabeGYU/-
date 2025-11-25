import { DollarSign } from 'lucide-react';

export function RevenueModel() {
  const revenueStreams = [
    {
      title: "협업 계약 성사 수수료",
      description: "제안 → 계약 시 고정 비용"
    },
    {
      title: "QR 결제 수수료",
      description: "판매 발생 시 자동 정산 + 수익 분배"
    },
    {
      title: "보험/파손 옵션",
      description: "협업 리스크 상품화"
    },
    {
      title: "유료 템플릿",
      description: "계약/정산/분배 문서 키트 판매"
    },
    {
      title: "팝업/전시 키트 판매",
      description: "QR 스탠드/가격표/포스터 패키지"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">예상 수익 모델</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg pt-2">{stream.title}</h3>
              </div>
              <p className="text-slate-600 pl-13">{stream.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
