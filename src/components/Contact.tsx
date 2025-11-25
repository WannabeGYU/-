import { Mail, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
            <span className="text-3xl">📎</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">연락처</h2>
          <p className="text-xl opacity-80">(공유용 섹션)</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-indigo-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">이메일</p>
                  <a href="mailto:collabeat.team@gmail.com" className="text-xl hover:text-indigo-300 transition-colors">
                    collabeat.team@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">위치</p>
                  <p className="text-xl">Seoul, Korea</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-pink-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">Figma MVP Demo</p>
                  <a href="#" className="text-xl hover:text-pink-300 transition-colors">
                    this link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full px-8 py-4">
            <p className="text-2xl">COLLABEAT</p>
            <p className="text-sm opacity-90">브랜드 × 공간의 수익형 협업 플랫폼</p>
          </div>
        </div>
      </div>
    </section>
  );
}
