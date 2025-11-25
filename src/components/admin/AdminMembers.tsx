import { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, Ban, MoreVertical } from 'lucide-react';

export function AdminMembers() {
  const [selectedType, setSelectedType] = useState<'all' | 'brand' | 'venue'>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const members = [
    {
      id: 1,
      name: 'MINIMAL STUDIO',
      type: 'brand',
      category: '의류',
      contact: 'minimal@email.com',
      phone: '010-1234-5678',
      status: 'active',
      joinDate: '2025-11-01',
      collaborations: 3,
      link: 'instagram.com/minimal_studio'
    },
    {
      id: 2,
      name: '성수 갤러리 카페',
      type: 'venue',
      category: '카페',
      contact: 'seongsu@email.com',
      phone: '010-2345-6789',
      status: 'active',
      joinDate: '2025-10-15',
      collaborations: 5,
      location: '서울 성동구 성수동'
    },
    {
      id: 3,
      name: 'Vintage Dreams',
      type: 'brand',
      category: '액세서리',
      contact: 'vintage@email.com',
      phone: '010-3456-7890',
      status: 'pending',
      joinDate: '2025-11-20',
      collaborations: 0,
      link: 'instagram.com/vintage_dreams'
    },
    {
      id: 4,
      name: '연남동 아트스페이스',
      type: 'venue',
      category: '갤러리',
      contact: 'yeonnam@email.com',
      phone: '010-4567-8901',
      status: 'active',
      joinDate: '2025-09-20',
      collaborations: 8,
      location: '서울 마포구 연남동'
    },
    {
      id: 5,
      name: 'Urban Canvas',
      type: 'brand',
      category: '예술',
      contact: 'urban@email.com',
      phone: '010-5678-9012',
      status: 'suspended',
      joinDate: '2025-08-10',
      collaborations: 2,
      link: 'urbancanvas.com'
    },
  ];

  const filteredMembers = members.filter(member => {
    const typeMatch = selectedType === 'all' || member.type === selectedType;
    const statusMatch = selectedStatus === 'all' || member.status === selectedStatus;
    const searchMatch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       member.contact.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && statusMatch && searchMatch;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">회원 관리</h1>
        <p className="text-slate-600">브랜드 및 공간 회원 관리</p>
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
                placeholder="이름 또는 이메일 검색..."
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">전체 타입</option>
              <option value="brand">브랜드</option>
              <option value="venue">공간</option>
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
              <option value="active">활성</option>
              <option value="pending">승인 대기</option>
              <option value="suspended">정지</option>
              <option value="banned">차단</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">전체 회원</p>
          <p className="text-2xl">{members.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">브랜드</p>
          <p className="text-2xl text-indigo-600">{members.filter(m => m.type === 'brand').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">공간</p>
          <p className="text-2xl text-pink-600">{members.filter(m => m.type === 'venue').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-sm text-slate-600 mb-1">승인 대기</p>
          <p className="text-2xl text-yellow-600">{members.filter(m => m.status === 'pending').length}</p>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 text-sm text-slate-600">이름</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">타입</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">카테고리</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">연락처</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">상태</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">협업 수</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">가입일</th>
                <th className="text-left py-4 px-6 text-sm text-slate-600">작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-slate-500">{member.contact}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      member.type === 'brand' 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      {member.type === 'brand' ? '브랜드' : '공간'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{member.category}</td>
                  <td className="py-4 px-6 text-slate-600 text-sm">{member.phone}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      member.status === 'active' ? 'bg-green-100 text-green-700' :
                      member.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      member.status === 'suspended' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {member.status === 'active' ? '활성' :
                       member.status === 'pending' ? '대기' :
                       member.status === 'suspended' ? '정지' : '차단'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{member.collaborations}</td>
                  <td className="py-4 px-6 text-slate-600 text-sm">{member.joinDate}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="상세보기"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {member.status === 'pending' && (
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
                      <button
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="더보기"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl">회원 상세 정보</h2>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm text-slate-600 mb-1">이름</p>
                <p className="text-lg">{selectedMember.name}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">타입</p>
                  <p>{selectedMember.type === 'brand' ? '브랜드' : '공간'}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">카테고리</p>
                  <p>{selectedMember.category}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-1">이메일</p>
                <p>{selectedMember.contact}</p>
              </div>

              <div>
                <p className="text-sm text-slate-600 mb-1">전화번호</p>
                <p>{selectedMember.phone}</p>
              </div>

              {selectedMember.location && (
                <div>
                  <p className="text-sm text-slate-600 mb-1">위치</p>
                  <p>{selectedMember.location}</p>
                </div>
              )}

              {selectedMember.link && (
                <div>
                  <p className="text-sm text-slate-600 mb-1">링크</p>
                  <a href={`https://${selectedMember.link}`} className="text-indigo-600 hover:underline">
                    {selectedMember.link}
                  </a>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">가입일</p>
                  <p>{selectedMember.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">협업 수</p>
                  <p>{selectedMember.collaborations}</p>
                </div>
              </div>

              <div className="flex gap-3">
                {selectedMember.status === 'pending' && (
                  <>
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors">
                      승인하기
                    </button>
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors">
                      거절하기
                    </button>
                  </>
                )}
                {selectedMember.status === 'active' && (
                  <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl hover:bg-orange-700 transition-colors">
                    계정 정지
                  </button>
                )}
                {selectedMember.status === 'suspended' && (
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors">
                    정지 해제
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
