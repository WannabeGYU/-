import { useState } from 'react';
import { Upload, Link as LinkIcon, Tag, DollarSign } from 'lucide-react';
import type { BrandProfileData } from '../../App';

interface BrandProfileProps {
  onComplete: (profile: BrandProfileData) => void;
}

export function BrandProfile({ onComplete }: BrandProfileProps) {
  const [formData, setFormData] = useState<Partial<BrandProfileData>>({
    name: '',
    category: '',
    link: '',
    image: '',
    collaborationType: [],
    priceRange: '',
    purpose: '',
    atmosphere: [],
  });

  const categories = ['의류', '소품', '예술', '향수', '액세서리', '홈데코', '기타'];
  const collaborationTypes = ['전시', '팝업', '판매', '소품 배치'];
  const purposes = ['판매', '브랜딩', '체험'];
  const atmospheres = ['미니멀', '빈티지', '팝', '다크', '로컬', '모던'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData as BrandProfileData);
  };

  const toggleSelection = (array: string[], value: string, field: keyof BrandProfileData) => {
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
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full mb-4">
              <Tag className="w-4 h-4" />
              <span>브랜드 프로필</span>
            </div>
            <h1 className="text-3xl mb-2">브랜드 정보를 입력해주세요</h1>
            <p className="text-slate-600">공간 파트너가 보게 될 정보입니다</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Brand Name */}
            <div>
              <label className="block mb-2">브랜드명 <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="예: MINIMAL STUDIO"
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2">카테고리 <span className="text-red-500">*</span></label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              >
                <option value="">선택해주세요</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Link */}
            <div>
              <label className="block mb-2">인스타그램 또는 홈페이지 <span className="text-red-500">*</span></label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://instagram.com/yourbrand"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block mb-2">대표 이미지 <span className="text-red-500">*</span></label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-600 mb-1">클릭하여 이미지 업로드</p>
                <p className="text-sm text-slate-400">JPG, PNG (최대 5MB)</p>
              </div>
            </div>

            {/* Collaboration Type */}
            <div>
              <label className="block mb-3">협업 희망 방식 <span className="text-red-500">*</span></label>
              <div className="flex flex-wrap gap-2">
                {collaborationTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleSelection(formData.collaborationType || [], type, 'collaborationType')}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.collaborationType?.includes(type)
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block mb-2">평균 가격대 <span className="text-red-500">*</span></label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={formData.priceRange}
                  onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                  placeholder="예: 30,000 - 80,000원"
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Optional: Purpose */}
            <div>
              <label className="block mb-3">협업 목적 (선택)</label>
              <div className="flex flex-wrap gap-2">
                {purposes.map(purpose => (
                  <button
                    key={purpose}
                    type="button"
                    onClick={() => setFormData({ ...formData, purpose })}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.purpose === purpose
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'border-slate-300 hover:border-purple-400'
                    }`}
                  >
                    {purpose}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional: Atmosphere */}
            <div>
              <label className="block mb-3">선호 장소 분위기 (선택)</label>
              <div className="flex flex-wrap gap-2">
                {atmospheres.map(atm => (
                  <button
                    key={atm}
                    type="button"
                    onClick={() => toggleSelection(formData.atmosphere || [], atm, 'atmosphere')}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      formData.atmosphere?.includes(atm)
                        ? 'bg-pink-600 text-white border-pink-600'
                        : 'border-slate-300 hover:border-pink-400'
                    }`}
                  >
                    {atm}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              프로필 완성하고 시작하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
