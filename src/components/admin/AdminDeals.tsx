import { useState } from 'react';
import { Search, Eye, CheckCircle, XCircle, AlertCircle, MessageSquare } from 'lucide-react';

export function AdminDeals() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeal, setSelectedDeal] = useState<any>(null);

  const deals = [
    {
      id: 1,
      brand: 'MINIMAL STUDIO',
      venue: '성수 갤러리 카페',
      type: '전시 + 판매',
      status: 'active',
      startDate: '2025-11-20',
      endDate: '2025-12-20',
      duration: '1개월',
      revenueShare: '70:30',
      expectedRevenue: '₩1,500,000',
      actualRevenue: '₩350,000',
      proposalDate: '2025-11-10',
      message: '미니멀한 의류 브랜드입니다. 1개월 전시 및 판매를 희망합니다.'
    },
    {
      id: 2,
      brand: 'Vintage Dreams',
      venue: '연남동 아트스페이스',
      type: '팝업',
      status: 'pending',
      startDate: '2025-12-01',
      endDate: '2025-12-15',
      duration: '2주',
      revenueShare: '60:40',
      expectedRevenue: '₩800,000',
      actualRevenue: '₩0',
      proposalDate: '2025-11-22',
      message: '빈티지 액세서리 팝업 스토어를 진행하고 싶습니다.'
    },
    {
      id: 3,
      brand: 'Urban Canvas',
      venue: '홍대 플래그십',
      type: '전시',
      status: 'completed',
      startDate: '2025-10-15',
      endDate: '2025-11-15',
      duration: '1개월',
      revenueShare: '50:50',
      expectedRevenue: '₩1,200,000',
      actualRevenue: '₩1,350,000',
      proposalDate: '2025-10-01',
      message: '도시적 감성의 아트 전시를 제안합니다.'
    },
    {
      id: 4,
      brand: 'Nature Scents',
      venue: '이태원 루프탑 갤러리',
      type: '판매 + 체험',
      status: 'dispute',
      startDate: '2025-11-01',
      endDate: '2025-11-30',
      duration: '1개월',
      revenueShare: '70:30',
      expectedRevenue: '₩900,000',
      actualRevenue: '₩650,000',
      proposalDate: '2025-10-20',
      message: '천연 향수 체험 및 판매 이벤트입니다.',
      disputeReason: '수익 분배 비율 관련 분쟁'
    },
  ];

  const filteredDeals = deals.filter(deal => {
    const statusMatch = selectedStatus === 'all' || deal.status === selectedStatus;
    const searchMatch = 
      deal.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">협업 관리</h1>
        <p className="text-slate-600">브랜드-공간 협업 요청 및 진행 상태 관리</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="브랜드 또는 공간 검색..."
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">전체 상태</option>
              <option value="pending">승인 대기</option>
              <option value="active">진행중</option>
              <option value="completed">완료</option>
              <option value="dispute">분쟁</option>
              <option value="cancelled">취소</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">전체</p>
          <p className="text-2xl">{deals.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">승인 대기</p>
          <p className="text-2xl text-yellow-600">{deals.filter(d => d.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">진행중</p>
          <p className="text-2xl text-green-600">{deals.filter(d => d.status === 'active').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">완료</p>
          <p className="text-2xl text-blue-600">{deals.filter(d => d.status === 'completed').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">분쟁</p>
          <p className="text-2xl text-red-600">{deals.filter(d => d.status === 'dispute').length}</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm text-slate-600">협업</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">타입</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">기간</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">수익 분배</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">예상/실제 수익</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">상태</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredDeals.map((deal) => (
                <tr key={deal.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-indigo-600">{deal.brand}</p>
                      <p className="text-sm text-slate-500">× {deal.venue}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{deal.type}</td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <p>{deal.startDate}</p>
                      <p className="text-slate-500">~ {deal.endDate}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{deal.revenueShare}</td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <p className="text-slate-500">{deal.expectedRevenue}</p>
                      <p className="font-medium">{deal.actualRevenue}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      deal.status === 'active' ? 'bg-green-100 text-green-700' :
                      deal.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      deal.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                      deal.status === 'dispute' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {deal.status === 'active' ? '진행중' :
                       deal.status === 'pending' ? '대기' :
                       deal.status === 'completed' ? '완료' :
                       deal.status === 'dispute' ? '분쟁' : '취소'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedDeal(deal)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="상세보기"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {deal.status === 'pending' && (
                        <>
                          <button
                            className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors"
                            title="승인"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                            title="거절"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {deal.status === 'dispute' && (
                        <button
                          className="p-2 hover:bg-orange-50 text-orange-600 rounded-lg transition-colors"
                          title="분쟁 처리"
                        >
                          <AlertCircle className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deal Detail Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">협업 상세 정보</h2>
                <button
                  onClick={() => setSelectedDeal(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Parties */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-xl p-4">
                  <p className="text-sm text-indigo-600 mb-1">브랜드</p>
                  <p className="text-lg font-medium">{selectedDeal.brand}</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <p className="text-sm text-pink-600 mb-1">공간</p>
                  <p className="text-lg font-medium">{selectedDeal.venue}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">협업 타입</p>
                  <p>{selectedDeal.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">기간</p>
                  <p>{selectedDeal.duration}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">시작일</p>
                  <p>{selectedDeal.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">종료일</p>
                  <p>{selectedDeal.endDate}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-1">수익 분배 비율</p>
                <p className="text-lg">{selectedDeal.revenueShare} (브랜드:공간)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">예상 수익</p>
                  <p className="text-lg text-slate-500">{selectedDeal.expectedRevenue}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">실제 수익</p>
                  <p className="text-lg font-medium">{selectedDeal.actualRevenue}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-1">제안 메시지</p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-slate-700">{selectedDeal.message}</p>
                </div>
              </div>

              {selectedDeal.disputeReason && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900 mb-1">분쟁 발생</p>
                      <p className="text-sm text-red-700">{selectedDeal.disputeReason}</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm text-slate-600 mb-1">제안일</p>
                <p>{selectedDeal.proposalDate}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                {selectedDeal.status === 'pending' && (
                  <>
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>협업 승인</span>
                    </button>
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5" />
                      <span>협업 거절</span>
                    </button>
                  </>
                )}
                {selectedDeal.status === 'active' && (
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                    협업 완료 처리
                  </button>
                )}
                {selectedDeal.status === 'dispute' && (
                  <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>분쟁 중재하기</span>
                  </button>
                )}
                <button className="px-6 py-3 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  메시지 확인
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
