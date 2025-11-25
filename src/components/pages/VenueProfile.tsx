import { useState } from 'react';
import { Upload, MapPin, Image as ImageIcon, Percent } from 'lucide-react';
import type { VenueProfileData } from '../../App';

interface VenueProfileProps {
  onComplete: (profile: VenueProfileData) => void;
}

export function VenueProfile({ onComplete }: VenueProfileProps) {
  const [formData, setFormData] = useState<Partial<VenueProfileData>>({
    name: '',
    location: '',
    images: [],
    collaborationType: [],
    revenueShare: '',
    atmosphere: [],
    duration: '',
  });

  const collaborationTypes = ['전시', '판매', '소품', '팝업'];
  const atmospheres = ['미니멀', '레트로', '모던', '자연', '아트'];
  const durations = ['1주', '2주', '1개월', '협의 가능'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData as VenueProfileData);
  };

  const toggleSelection = (array: string[], value: string, field: keyof VenueProfileData) => {
    const newArray = array.includes(value)
      ? array.filter(item => item !== value)
      : [...array, value];
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              <span>공간 프로필</span>
            </div>
            <h1 className="text-3xl mb-2">공간 정보를 입력해주세요</h1>
            <p className="text-slate-600">브랜드 파트너가 보게 될 정보입니다</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Venue Name */}
            <div>
              <label className="block mb-2">공간명 <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="예: 성수 갤러리 카페"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2">위치 <span className="text-red-500">*</span></label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="서울 성동구 성수동"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Images Upload */}
            <div>
              <label className="block mb-2">내부 사진 (3장) <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num}
                    className="aspect-square border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center hover:border-pink-400 transition-colors cursor-pointer"
                  >
                    <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
                    <p className="text-xs text-slate-400">사진 {num}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration Type */}
            <div>
              <label className="block mb-3">가능한 협업 방식 <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2">
                {collaborationTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleSelection(formData.collaborationType || [], type, 'collaborationType')}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.collaborationType?.includes(type)
                        ? 'bg-pink-600 text-white border-pink-600'
                        : 'border-slate-300 hover:border-pink-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Share */}
            <div>
              <label className="block mb-2">수익 분배 선호 방식 <span className="text-red-500">*</span></label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-pink-400 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="revenueShare"
                    value="70:30"
                    onChange={(e) => setFormData({ ...formData, revenueShare: e.target.value })}
                    className="mr-3"
                  />
                  <span>70:30 (브랜드:공간)</span>
                </label>
                <label className="flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-pink-400 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="revenueShare"
                    value="60:40"
                    onChange={(e) => setFormData({ ...formData, revenueShare: e.target.value })}
                    className="mr-3"
                  />
                  <span>60:40 (브랜드:공간)</span>
                </label>
                <label className="flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-pink-400 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="revenueShare"
                    value="fixed"
                    onChange={(e) => setFormData({ ...formData, revenueShare: e.target.value })}
                    className="mr-3"
                  />
                  <span>공간료 고정</span>
                </label>
                <label className="flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-pink-400 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="revenueShare"
                    value="negotiable"
                    onChange={(e) => setFormData({ ...formData, revenueShare: e.target.value })}
                    className="mr-3"
                  />
                  <span>협의 가능</span>
                </label>
              </div>
            </div>

            {/* Optional: Atmosphere */}
            <div>
              <label className="block mb-3">공간 분위기 (선택)</label>
              <div className="flex flex-wrap gap-2">
                {atmospheres.map(atm => (
                  <button
                    key={atm}
                    type="button"
                    onClick={() => toggleSelection(formData.atmosphere || [], atm, 'atmosphere')}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.atmosphere?.includes(atm)
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'border-slate-300 hover:border-purple-400'
                    }`}
                  >
                    {atm}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional: Duration */}
            <div>
              <label className="block mb-3">협업 선호 기간 (선택)</label>
              <div className="flex flex-wrap gap-2">
                {durations.map(dur => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setFormData({ ...formData, duration: dur })}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.duration === dur
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-orange-600 text-white py-4 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              프로필 완성하고 시작하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
