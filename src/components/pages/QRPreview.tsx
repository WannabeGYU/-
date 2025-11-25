import { ArrowLeft, QrCode, DollarSign, TrendingUp, Shield } from 'lucide-react';

interface QRPreviewProps {
  onBack: () => void;
}

export function QRPreview({ onBack }: QRPreviewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl">QR 결제 미리보기</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <QrCode className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl mb-2">QR 코드 결제 시스템</h2>
          <p className="text-slate-600">이 기능은 MVP에서 시각화만 제공됩니다</p>
        </div>

        {/* QR Code Display */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <div className="max-w-md mx-auto">
            {/* Mock Product */}
            <div className="mb-8">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-4 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80"
                  alt="Product"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl mb-2">미니멀 티셔츠</h3>
              <p className="text-slate-600 mb-4">심플한 디자인의 오버핏 티셔츠</p>
              <p className="text-3xl text-indigo-600">₩45,000</p>
            </div>

            {/* Mock QR Code */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-6">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center mb-4 border-2 border-slate-200">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-white" />
                </div>
              </div>
              <p className="text-center text-sm text-slate-600">
                고객이 이 QR 코드를 스캔하여 결제합니다
              </p>
            </div>

            {/* Payment Button (Non-functional) */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all opacity-50 cursor-not-allowed">
              결제하기 (동작하지 않음)
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="mb-2">자동 정산</h3>
            <p className="text-sm text-slate-600">
              결제 시 수익이 자동으로 브랜드와 공간에 분배됩니다
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-2">실시간 추적</h3>
            <p className="text-sm text-slate-600">
              판매 현황과 수익을 실시간으로 확인할 수 있습니다
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="mb-2">안전한 거래</h3>
            <p className="text-sm text-slate-600">
              플랫폼을 통한 안전한 결제와 정산 시스템
            </p>
          </div>
        </div>

        {/* Settlement Info */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
          <h3 className="text-2xl mb-6 text-center">결제 시 자동 정산</h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span>결제 금액</span>
              <span className="text-xl">₩45,000</span>
            </div>
            <div className="h-px bg-white/20"></div>
            <div className="flex justify-between items-center text-green-300">
              <span>브랜드 수익 (70%)</span>
              <span className="text-xl">₩31,500</span>
            </div>
            <div className="flex justify-between items-center text-blue-300">
              <span>공간 수익 (30%)</span>
              <span className="text-xl">₩13,500</span>
            </div>
            <div className="h-px bg-white/20"></div>
            <div className="flex justify-between items-center text-yellow-300">
              <span>플랫폼 수수료 (8%)</span>
              <span className="text-xl">₩3,600</span>
            </div>
          </div>

          <p className="text-center text-sm opacity-80 mt-6">
            모든 정산은 자동으로 처리되며 투명하게 공개됩니다
          </p>
        </div>

        {/* MVP Notice */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
          <p className="text-center text-yellow-800">
            💡 <span>이 페이지는 MVP 버전으로, QR 결제 기능의 존재를 보여주기 위한 미리보기입니다.</span>
          </p>
          <p className="text-center text-sm text-yellow-700 mt-2">
            실제 기능은 다음 단계에서 구현됩니다
          </p>
        </div>
      </div>
    </div>
  );
}
