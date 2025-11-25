import { useState } from 'react';
import { Calendar, Tag, DollarSign, QrCode, ArrowLeft, Send } from 'lucide-react';
import type { UserRole, BrandProfileData, VenueProfileData, MatchingData } from '../../App';

interface MatchingProposalProps {
  userRole: UserRole;
  userProfile: BrandProfileData | VenueProfileData;
  selectedCard: any;
  onSendProposal: (data: MatchingData) => void;
  onBack: () => void;
}

export function MatchingProposal({ userRole, userProfile, selectedCard, onSendProposal, onBack }: MatchingProposalProps) {
  const [duration, setDuration] = useState('');
  const [collaborationType, setCollaborationType] = useState('');
  const [revenueModel, setRevenueModel] = useState('');
  const [useQRPayment, setUseQRPayment] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const matchingData: MatchingData = {
      brand: userRole === 'brand' ? userProfile : selectedCard,
      venue: userRole === 'venue' ? userProfile : selectedCard,
    };
    
    onSendProposal(matchingData);
  };

  const durations = ['1주', '2주', '3주', '1개월', '2개월', '3개월'];
  const collaborationTypes = ['전시', '팝업', '판매', '소품 배치', '복합'];
  const revenueModels = [
    '70:30 (브랜드:공간)',
    '60:40 (브랜드:공간)',
    '50:50 (브랜드:공간)',
    '공간료 고정',
    '협의 필요'
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl">협업 제안서 작성</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Cards Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* User Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
              <span className="text-sm text-indigo-600">
                {userRole === 'brand' ? '내 브랜드' : '내 공간'}
              </span>
            </div>
            <h2 className="text-2xl mb-2">{userProfile.name}</h2>
            <div className="flex flex-wrap gap-1">
              {userProfile.collaborationType.map((type, idx) => (
                <span key={idx} className="px-2 py-1 bg-white text-indigo-600 text-xs rounded-full">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Selected Card */}
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 border-2 border-pink-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
              <span className="text-sm text-pink-600">
                {userRole === 'brand' ? '제안할 공간' : '제안할 브랜드'}
              </span>
            </div>
            <h2 className="text-2xl mb-2">{selectedCard.name}</h2>
            <div className="flex flex-wrap gap-1">
              {selectedCard.tags.map((tag: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-white text-pink-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Proposal Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Duration */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>협업 기간 선택 <span className="text-red-500">*</span></span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              {durations.map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setDuration(dur)}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${
                    duration === dur
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'border-slate-200 hover:border-indigo-400'
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          {/* Collaboration Type */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <Tag className="w-5 h-5 text-indigo-600" />
              <span>협업 방식 선택 <span className="text-red-500">*</span></span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {collaborationTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCollaborationType(type)}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${
                    collaborationType === type
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'border-slate-200 hover:border-purple-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Revenue Model */}
          <div>
            <label className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-indigo-600" />
              <span>판매/수익 정산 방식 <span className="text-red-500">*</span></span>
            </label>
            <select
              value={revenueModel}
              onChange={(e) => setRevenueModel(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            >
              <option value="">선택해주세요</option>
              {revenueModels.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* QR Payment Toggle */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <label className="flex items-start gap-4 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={useQRPayment}
                  onChange={(e) => setUseQRPayment(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-8 bg-slate-300 peer-checked:bg-green-600 rounded-full transition-colors"></div>
                <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <QrCode className="w-5 h-5 text-green-600" />
                  <span className="text-green-900">QR 정산 포함</span>
                </div>
                <p className="text-sm text-green-700">
                  고객이 QR 코드로 직접 결제하면 자동으로 수익이 분배됩니다
                </p>
              </div>
            </label>

            {useQRPayment && (
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-sm text-green-800">
                  💳 플랫폼 수수료: <span className="text-green-600">결제 발생 시 8%</span>
                </p>
                <p className="text-xs text-green-600 mt-1">
                  정산은 자동으로 처리되며 우회 방지를 위한 필수 기능입니다
                </p>
              </div>
            )}
          </div>

          {/* Additional Message */}
          <div>
            <label className="block mb-2">제안 메시지 (선택)</label>
            <textarea
              placeholder="협업에 대한 추가 설명이나 희망사항을 적어주세요..."
              rows={4}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!duration || !collaborationType || !revenueModel}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            <span>제안 보내기</span>
          </button>

          <p className="text-center text-sm text-slate-500">
            제안이 수락되면 채팅이 열립니다
          </p>
        </form>
      </div>
    </div>
  );
}
