import { Star } from 'lucide-react';

export function Differentiators() {
  const points = [
    {
      emoji: "🎨",
      title: "우리는 연결 플랫폼이 아니라",
      subtitle: "오프라인 협업을 '시스템'으로 만든다."
    },
    {
      emoji: "🔒",
      title: "우회해도 결제/정산 때문에",
      subtitle: "플랫폼을 써야만 한다"
    },
    {
      emoji: "📈",
      title: "연결이 많아질수록",
      subtitle: "운영 서비스 매출이 증가한다"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
            <span className="text-3xl">📌</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">우리의 차별점</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {points.map((point, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
              <div className="text-5xl mb-4">{point.emoji}</div>
              <p className="text-xl mb-2 text-yellow-300">{point.title}</p>
              <p className="text-lg opacity-90">{point.subtitle}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-1">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="text-2xl md:text-3xl text-center text-yellow-400">
              우리는 연결 플랫폼이 아니라<br />
              오프라인 협업을 '시스템'으로 만든다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
