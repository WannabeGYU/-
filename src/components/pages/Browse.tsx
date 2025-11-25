import { useState } from 'react';
import { Filter, MapPin, Tag, Search } from 'lucide-react';
import type { UserRole, BrandProfileData, VenueProfileData } from '../../App';

interface BrowseProps {
  userRole: UserRole;
  userProfile: BrandProfileData | VenueProfileData;
  onCardSelect: (card: any) => void;
}

// Mock data for demonstration
const mockVenues = [
  {
    id: 1,
    name: '성수 갤러리 카페',
    location: '서울 성수동',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    tags: ['미니멀', '전시', '판매'],
    description: '넓은 전시 공간과 자연광이 풍부한 카페'
  },
  {
    id: 2,
    name: '연남동 아트스페이스',
    location: '서울 연남동',
    image: 'https://images.unsplash.com/photo-1445620466293-e6a5e92a9c9b?w=800&q=80',
    tags: ['빈티지', '팝업', '전시'],
    description: '복층 구조의 독립적인 전시 공간'
  },
  {
    id: 3,
    name: '홍대 플래그십 스토어',
    location: '서울 홍대',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
    tags: ['모던', '판매', '팝업'],
    description: '유동인구가 많은 1층 상가'
  },
  {
    id: 4,
    name: '이태원 루프탑 갤러리',
    location: '서울 이태원',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    tags: ['아트', '전시', '이벤트'],
    description: '야외 루프탑과 실내 갤러리 공간'
  },
];

const mockBrands = [
  {
    id: 1,
    name: 'MINIMAL STUDIO',
    category: '의류',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    tags: ['미니멀', '판매', '전시'],
    description: '심플하고 기능적인 디자인의 의류 브랜드'
  },
  {
    id: 2,
    name: 'Vintage Dreams',
    category: '액세서리',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    tags: ['빈티지', '판매', '팝업'],
    description: '빈티지 감성의 핸드메이드 액세서리'
  },
  {
    id: 3,
    name: 'Urban Canvas',
    category: '예술',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80',
    tags: ['아트', '전시', '브랜딩'],
    description: '도시적 감성의 일러스트와 아트 프린트'
  },
  {
    id: 4,
    name: 'Nature Scents',
    category: '향수',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    tags: ['자연', '판매', '체험'],
    description: '천연 재료로 만든 니치 향수 브랜드'
  },
];

export function Browse({ userRole, userProfile, onCardSelect }: BrowseProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const cards = userRole === 'brand' ? mockVenues : mockBrands;
  const filterOptions = ['전체', '전시', '팝업', '판매', '소품'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl mb-2">
            {userRole === 'brand' ? '협업할 공간 찾기' : '협업할 브랜드 찾기'}
          </h1>
          <p className="opacity-90">
            마음에 드는 {userRole === 'brand' ? '공간' : '브랜드'}을 찾아 협업을 제안하세요
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`${userRole === 'brand' ? '공간' : '브랜드'} 검색...`}
              className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onCardSelect(card)}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl mb-2">{card.name}</h3>
                
                <div className="flex items-center gap-2 text-slate-600 mb-3">
                  {'location' in card ? (
                    <>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{card.location}</span>
                    </>
                  ) : (
                    <>
                      <Tag className="w-4 h-4" />
                      <span className="text-sm">{card.category}</span>
                    </>
                  )}
                </div>

                <p className="text-sm text-slate-600 mb-3">{card.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No Chat Notice */}
      <div className="fixed bottom-6 right-6 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-4 shadow-lg max-w-sm">
        <p className="text-sm">
          💡 <span className="text-yellow-800">채팅은 매칭 수락 후에만 가능합니다</span>
        </p>
      </div>
    </div>
  );
}
