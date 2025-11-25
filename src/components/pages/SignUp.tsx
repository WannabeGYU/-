import { useState } from 'react';
import { Mail, Lock, Store, Building2 } from 'lucide-react';
import type { UserRole } from '../../App';

interface SignUpProps {
  role: UserRole;
  onComplete: () => void;
}

export function SignUp({ role, onComplete }: SignUpProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Role Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-indigo-200">
            {role === 'brand' ? (
              <>
                <Store className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-600">Brand Selected</span>
              </>
            ) : (
              <>
                <Building2 className="w-5 h-5 text-pink-600" />
                <span className="text-pink-600">Venue Selected</span>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <h1 className="text-3xl text-center mb-8">회원가입</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm text-slate-600 mb-2">이메일</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm text-slate-600 mb-2">비밀번호</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              계속하기
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-sm text-slate-500">또는</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border-2 border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
              <span>카카오로 계속하기</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 border-2 border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
              <span>네이버로 계속하기</span>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            다음 단계: 프로필 작성
          </p>
        </div>
      </div>
    </div>
  );
}
