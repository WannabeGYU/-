import { useState } from 'react';
import { Search, Eye, MessageSquare, AlertTriangle, CheckCircle, XCircle, Send } from 'lucide-react';

export function AdminSupport() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<any>(null);
  const [replyText, setReplyText] = useState('');

  const tickets = [
    {
      id: 1,
      type: 'inquiry',
      title: '협업 계약서 템플릿 문의',
      user: 'MINIMAL STUDIO',
      userType: 'brand',
      email: 'minimal@email.com',
      status: 'pending',
      priority: 'normal',
      createdAt: '2025-11-28 14:30',
      content: '협업 계약서 템플릿을 어디서 다운로드할 수 있나요? 전시와 판매를 함께 진행하는 경우 어떤 템플릿을 사용해야 하나요?',
      replies: []
    },
    {
      id: 2,
      type: 'report',
      title: '허위 프로필 신고',
      user: '성수 갤러리 카페',
      userType: 'venue',
      email: 'seongsu@email.com',
      status: 'in_progress',
      priority: 'high',
      createdAt: '2025-11-27 09:15',
      content: '특정 브랜드가 다른 브랜드의 사진을 도용하여 프로필을 만든 것 같습니다. 확인 부탁드립니다.',
      reportedUser: 'Fake Brand',
      replies: [
        {
          author: 'Admin',
          content: '신고 접수되었습니다. 현재 해당 프로필을 조사 중입니다.',
          timestamp: '2025-11-27 10:00'
        }
      ]
    },
    {
      id: 3,
      type: 'inquiry',
      title: 'QR 결제 시스템 설정 방법',
      user: '연남동 아트스페이스',
      userType: 'venue',
      email: 'yeonnam@email.com',
      status: 'resolved',
      priority: 'normal',
      createdAt: '2025-11-25 16:45',
      content: 'QR 결제 시스템을 설정하려고 하는데 계좌 정보 입력 후 다음 단계로 넘어가지 않습니다.',
      replies: [
        {
          author: 'Admin',
          content: '계좌 정보를 입력하신 후 "확인" 버튼을 눌러주셔야 합니다. 추가 문의사항이 있으시면 알려주세요.',
          timestamp: '2025-11-25 17:20'
        },
        {
          author: '연남동 아트스페이스',
          content: '해결되었습니다. 감사합니다!',
          timestamp: '2025-11-25 17:45'
        }
      ]
    },
    {
      id: 4,
      type: 'dispute',
      title: '정산 금액 오류',
      user: 'Nature Scents',
      userType: 'brand',
      email: 'nature@email.com',
      status: 'pending',
      priority: 'urgent',
      createdAt: '2025-11-28 11:20',
      content: '이번 달 정산 금액이 실제 판매 금액과 다릅니다. 70:30 비율로 정산되어야 하는데 60:40으로 계산된 것 같습니다.',
      dealId: 'D-004',
      replies: []
    },
    {
      id: 5,
      type: 'inquiry',
      title: '협업 기간 연장 가능 여부',
      user: 'Urban Canvas',
      userType: 'brand',
      email: 'urban@email.com',
      status: 'resolved',
      priority: 'normal',
      createdAt: '2025-11-20 13:00',
      content: '현재 진행 중인 협업을 1개월 더 연장하고 싶은데 가능한가요?',
      replies: [
        {
          author: 'Admin',
          content: '협업 기간 연장은 공간 측과 합의 후 가능합니다. 채팅을 통해 공간 측에 먼저 제안해보시기 바랍니다.',
          timestamp: '2025-11-20 14:30'
        }
      ]
    },
  ];

  const filteredTickets = tickets.filter(ticket => {
    const typeMatch = selectedType === 'all' || ticket.type === selectedType;
    const statusMatch = selectedStatus === 'all' || ticket.status === selectedStatus;
    const searchMatch = 
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && statusMatch && searchMatch;
  });

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    // In real app, this would send the reply
    setReplyText('');
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">고객센터</h1>
        <p className="text-slate-600">문의 및 신고 관리</p>
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">전체</p>
          <p className="text-2xl">{tickets.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">대기중</p>
          <p className="text-2xl text-yellow-600">{tickets.filter(t => t.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">처리중</p>
          <p className="text-2xl text-blue-600">{tickets.filter(t => t.status === 'in_progress').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">해결됨</p>
          <p className="text-2xl text-green-600">{tickets.filter(t => t.status === 'resolved').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">긴급</p>
          <p className="text-2xl text-red-600">{tickets.filter(t => t.priority === 'urgent').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="제목 또는 사용자 검색..."
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">전체 유형</option>
              <option value="inquiry">문의</option>
              <option value="report">신고</option>
              <option value="dispute">분쟁</option>
            </select>
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
              <option value="in_progress">처리중</option>
              <option value="resolved">해결됨</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm text-slate-600">우선순위</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">유형</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">제목</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작성자</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">상태</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작성일</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                      ticket.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      ticket.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {ticket.priority === 'urgent' ? '🔴 긴급' :
                       ticket.priority === 'high' ? '🟠 높음' : '🟢 보통'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      ticket.type === 'inquiry' ? 'bg-blue-100 text-blue-700' :
                      ticket.type === 'report' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {ticket.type === 'inquiry' ? '문의' :
                       ticket.type === 'report' ? '신고' : '분쟁'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium">{ticket.title}</p>
                    {ticket.dealId && (
                      <p className="text-xs text-slate-500">협업 ID: {ticket.dealId}</p>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm">{ticket.user}</p>
                      <p className="text-xs text-slate-500">
                        {ticket.userType === 'brand' ? '브랜드' : '공간'}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      ticket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                      ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {ticket.status === 'resolved' ? '해결됨' :
                       ticket.status === 'in_progress' ? '처리중' : '대기'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{ticket.createdAt}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => setSelectedTicket(ticket)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      title="상세보기"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl">{selectedTicket.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Ticket Info */}
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedTicket.type === 'inquiry' ? 'bg-blue-100 text-blue-700' :
                  selectedTicket.type === 'report' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {selectedTicket.type === 'inquiry' ? '문의' :
                   selectedTicket.type === 'report' ? '신고' : '분쟁'}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedTicket.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                  selectedTicket.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {selectedTicket.priority === 'urgent' ? '긴급' :
                   selectedTicket.priority === 'high' ? '높음' : '보통'}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedTicket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                  selectedTicket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {selectedTicket.status === 'resolved' ? '해결됨' :
                   selectedTicket.status === 'in_progress' ? '처리중' : '대기'}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">작성자</p>
                  <p>{selectedTicket.user}</p>
                  <p className="text-xs text-slate-500">{selectedTicket.email}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">작성일</p>
                  <p>{selectedTicket.createdAt}</p>
                </div>
              </div>

              {selectedTicket.dealId && (
                <div>
                  <p className="text-sm text-slate-600 mb-1">관련 협업</p>
                  <p className="font-mono text-indigo-600">{selectedTicket.dealId}</p>
                </div>
              )}

              {selectedTicket.reportedUser && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-600 mb-1">신고 대상</p>
                  <p className="font-medium text-red-900">{selectedTicket.reportedUser}</p>
                </div>
              )}

              {/* Original Content */}
              <div>
                <p className="text-sm text-slate-600 mb-2">문의 내용</p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-slate-700 whitespace-pre-wrap">{selectedTicket.content}</p>
                </div>
              </div>

              {/* Replies */}
              {selectedTicket.replies.length > 0 && (
                <div>
                  <p className="text-sm text-slate-600 mb-3">답변 내역</p>
                  <div className="space-y-3">
                    {selectedTicket.replies.map((reply: any, index: number) => (
                      <div 
                        key={index}
                        className={`rounded-xl p-4 ${
                          reply.author === 'Admin' 
                            ? 'bg-indigo-50 border-2 border-indigo-200' 
                            : 'bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{reply.author}</span>
                          <span className="text-xs text-slate-500">{reply.timestamp}</span>
                        </div>
                        <p className="text-sm text-slate-700">{reply.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reply Form */}
              {selectedTicket.status !== 'resolved' && (
                <div>
                  <p className="text-sm text-slate-600 mb-2">답변 작성</p>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="답변을 입력하세요..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none resize-none"
                  />
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={handleSendReply}
                      className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>답변 보내기</span>
                    </button>
                    {selectedTicket.status === 'pending' && (
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                        처리중으로 변경
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                {selectedTicket.status !== 'resolved' && (
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>해결됨으로 표시</span>
                  </button>
                )}
                {selectedTicket.type === 'report' && (
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>조치 취하기</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
