import { useState } from 'react';
import { Search, Eye, CheckCircle, AlertCircle, Download, Receipt } from 'lucide-react';

export function AdminPayments() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const payments = [
    {
      id: 1,
      dealId: 'D-001',
      brand: 'MINIMAL STUDIO',
      venue: '성수 갤러리 카페',
      totalAmount: 350000,
      brandShare: 245000,
      venueShare: 105000,
      platformFee: 28000,
      status: 'completed',
      paymentDate: '2025-11-25',
      settlementDate: '2025-11-27',
      method: 'QR 결제',
      transactionCount: 8
    },
    {
      id: 2,
      dealId: 'D-002',
      brand: 'Vintage Dreams',
      venue: '연남동 아트스페이스',
      totalAmount: 0,
      brandShare: 0,
      venueShare: 0,
      platformFee: 0,
      status: 'pending',
      paymentDate: '-',
      settlementDate: '-',
      method: '대기중',
      transactionCount: 0
    },
    {
      id: 3,
      dealId: 'D-003',
      brand: 'Urban Canvas',
      venue: '홍대 플래그십',
      totalAmount: 1350000,
      brandShare: 675000,
      venueShare: 675000,
      platformFee: 108000,
      status: 'completed',
      paymentDate: '2025-11-15',
      settlementDate: '2025-11-17',
      method: 'QR 결제',
      transactionCount: 23
    },
    {
      id: 4,
      dealId: 'D-004',
      brand: 'Nature Scents',
      venue: '이태원 루프탑 갤러리',
      totalAmount: 650000,
      brandShare: 455000,
      venueShare: 195000,
      platformFee: 52000,
      status: 'dispute',
      paymentDate: '2025-11-30',
      settlementDate: '-',
      method: 'QR 결제',
      transactionCount: 12,
      disputeReason: '수익 분배 비율 확인 필요'
    },
    {
      id: 5,
      dealId: 'D-005',
      brand: 'MINIMAL STUDIO',
      venue: '이태원 루프탑 갤러리',
      totalAmount: 520000,
      brandShare: 364000,
      venueShare: 156000,
      platformFee: 41600,
      status: 'processing',
      paymentDate: '2025-11-28',
      settlementDate: '예정',
      method: 'QR 결제',
      transactionCount: 11
    },
  ];

  const filteredPayments = payments.filter(payment => {
    const statusMatch = selectedStatus === 'all' || payment.status === selectedStatus;
    const searchMatch = 
      payment.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.dealId.toLowerCase().includes(searchQuery.toLowerCase());
    return statusMatch && searchMatch;
  });

  const totalRevenue = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.platformFee, 0);

  const pendingRevenue = payments
    .filter(p => p.status === 'processing' || p.status === 'pending')
    .reduce((sum, p) => sum + p.platformFee, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">정산 관리</h1>
        <p className="text-slate-600">협업별 수익 및 정산 내역 관리</p>
      </div>

      {/* Revenue Summary */}
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
          <p className="text-sm opacity-90 mb-1">총 플랫폼 수수료</p>
          <p className="text-3xl mb-2">₩{totalRevenue.toLocaleString()}</p>
          <p className="text-xs opacity-75">완료된 정산 기준</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">처리중 수수료</p>
          <p className="text-3xl text-yellow-600 mb-2">₩{pendingRevenue.toLocaleString()}</p>
          <p className="text-xs text-slate-500">정산 예정</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">완료된 정산</p>
          <p className="text-3xl text-blue-600 mb-2">{payments.filter(p => p.status === 'completed').length}</p>
          <p className="text-xs text-slate-500">건</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-sm text-slate-600 mb-1">분쟁 건수</p>
          <p className="text-3xl text-red-600 mb-2">{payments.filter(p => p.status === 'dispute').length}</p>
          <p className="text-xs text-slate-500">즉시 처리 필요</p>
        </div>
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
                placeholder="협업 ID, 브랜드 또는 공간 검색..."
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
              <option value="pending">대기중</option>
              <option value="processing">처리중</option>
              <option value="completed">완료</option>
              <option value="dispute">분쟁</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm text-slate-600">협업 ID</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">협업</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">총 금액</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">브랜드 수익</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">공간 수익</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">플랫폼 수수료</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">상태</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-indigo-600">{payment.dealId}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm font-medium">{payment.brand}</p>
                      <p className="text-xs text-slate-500">× {payment.venue}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium">₩{payment.totalAmount.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">{payment.transactionCount}건</p>
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ₩{payment.brandShare.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ₩{payment.venueShare.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-green-600">₩{payment.platformFee.toLocaleString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      payment.status === 'completed' ? 'bg-green-100 text-green-700' :
                      payment.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                      payment.status === 'dispute' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {payment.status === 'completed' ? '완료' :
                       payment.status === 'processing' ? '처리중' :
                       payment.status === 'dispute' ? '분쟁' : '대기'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPayment(payment)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="상세보기"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="영수증 다운로드"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Detail Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Receipt className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl">정산 상세 내역</h2>
                </div>
                <button
                  onClick={() => setSelectedPayment(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Deal Info */}
              <div>
                <p className="text-sm text-slate-600 mb-2">협업 ID</p>
                <p className="text-lg font-mono text-indigo-600">{selectedPayment.dealId}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-xl p-4">
                  <p className="text-sm text-indigo-600 mb-1">브랜드</p>
                  <p className="font-medium">{selectedPayment.brand}</p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4">
                  <p className="text-sm text-pink-600 mb-1">공간</p>
                  <p className="font-medium">{selectedPayment.venue}</p>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">총 판매 금액</span>
                  <span className="text-2xl font-medium">₩{selectedPayment.totalAmount.toLocaleString()}</span>
                </div>
                
                <div className="h-px bg-slate-200"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600">브랜드 수익</span>
                  <span className="text-xl text-indigo-600">₩{selectedPayment.brandShare.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-pink-600">공간 수익</span>
                  <span className="text-xl text-pink-600">₩{selectedPayment.venueShare.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-600">플랫폼 수수료 (8%)</span>
                  <span className="text-xl text-green-600">₩{selectedPayment.platformFee.toLocaleString()}</span>
                </div>
              </div>

              {/* Transaction Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">결제 방식</p>
                  <p>{selectedPayment.method}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">거래 건수</p>
                  <p>{selectedPayment.transactionCount}건</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">결제일</p>
                  <p>{selectedPayment.paymentDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">정산일</p>
                  <p>{selectedPayment.settlementDate}</p>
                </div>
              </div>

              {selectedPayment.disputeReason && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-900 mb-1">분쟁 사유</p>
                      <p className="text-sm text-red-700">{selectedPayment.disputeReason}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                {selectedPayment.status === 'processing' && (
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>정산 완료 처리</span>
                  </button>
                )}
                {selectedPayment.status === 'dispute' && (
                  <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition-colors">
                    분쟁 해결하기
                  </button>
                )}
                <button className="px-6 py-3 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  <span>영수증 다운로드</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
