import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
          <span className="text-3xl">💡</span>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4">왜 이 서비스가 필요한가?</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-yellow-500">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-xl md:text-2xl mb-4">
                브랜드와 카페는 서로 협업하고 싶지만<br />
                <span className="text-yellow-600">연결 이후의 운영·정산·파손 책임이 부담이다.</span>
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
            <p className="text-lg md:text-xl text-center">
              그래서 대부분 <span className="text-yellow-700">'알아서 해라'</span>식 연결 플랫폼은 실패했다.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t-2 border-yellow-200">
            <p className="text-2xl md:text-3xl text-center text-indigo-600">
              우리는 연결이 아니라 <span className="underline decoration-wavy decoration-indigo-400">협업 운영</span>을 서비스화한다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
