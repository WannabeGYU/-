import { Store, Building2, Sparkles, Shield } from 'lucide-react';
import type { UserRole } from '../../App';

interface LandingProps {
  <Sparkles className = "w-12 h-12" />
          </div >
          
          <h1 className="text-5xl md:text-7xl mb-4">COLLABEAT</h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-6">콜라비트</p>
          <p className="text-xl md:text-2xl opacity-80">브랜드 × 공간의 수익형 협업 플랫폼</p>
        </div >

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Brand Button */}
          <button
            onClick={() => onRoleSelect('brand')}
            className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Store className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl mb-4">브랜드로<br />시작하기</h2>
              
              <p className="text-lg opacity-80">
                전시, 팝업, 판매를 통해<br />
                공간과 협업하세요
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>시작하기</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </button>

          {/* Venue Button */}
          <button
            onClick={() => onRoleSelect('venue')}
            className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                <Building2 className="w-10 h-10" />
              </div>
              
              <h2 className="text-3xl mb-4">공간으로<br />시작하기</h2>
              
              <p className="text-lg opacity-80">
                카페, 유휴공간에서<br />
                브랜드와 협업하세요
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <span>시작하기</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </button>
        </div>

        <div className="text-center mt-12 opacity-70">
          <p className="text-sm">역할을 선택하면 회원가입이 시작됩니다</p>
        </div>
      </div >
    </div >
  );
}