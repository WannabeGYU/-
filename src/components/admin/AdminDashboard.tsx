import { TrendingUp, Users, Handshake, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { 
      label: '신규 가입자 (이번 달)', 
      value: '24', 
      change: '+12%', 
      icon: Users, 
      color: 'bg-blue-500' 
    },
    { 
      label: '활성 협업', 
      value: '8', 
      change: '+3', 
      icon: Handshake, 
      color: 'bg-green-500' 
    },
    { 
      label: '이번 달 총 정산', 
      value: '₩2,450,000', 
      change: '+28%', 
      icon: DollarSign, 
      color: 'bg-purple-500' 
    },
    { 
      label: '매칭 성공률', 
      value: '64%', 
      change: '+8%', 
      icon: TrendingUp, 
      color: 'bg-pink-500' 
    },
  ];

  const recentAlerts = [
    { id: 1, type: 'warning', message: '정산 분쟁: 브랜드 A - 공간 B', time: '10분 전' },
    { id: 2, type: 'info', message: '신규 브랜드 승인 대기 중 (3건)', time: '1시간 전' },
    { id: 3, type: 'warning', message: '미응답 사용자: 성수 갤러리', time: '2시간 전' },
    { id: 4, type: 'success', message: '협업 완료: MINIMAL STUDIO x 연남카페', time: '5시간 전' },
  ];

  const recentDeals = [
    { 
      id: 1, 
      brand: 'MINIMAL STUDIO', 
      venue: '성수 갤러리 카페', 
      status: 'active', 
      startDate: '2025-11-20',
      revenue: '₩350,000'
    },
    { 
      id: 2, 
      brand: 'Vintage Dreams', 
      venue: '연남동 아트스페이스', 
      status: 'pending', 
      startDate: '2025-12-01',
      revenue: '₩280,000'
    },
    { 
      id: 3, 
      brand: 'Urban Canvas', 
      venue: '홍대 플래그십', 
      status: 'completed', 
      startDate: '2025-10-15',
      revenue: '₩520,000'
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">대시보드</h1>
        <p className="text-slate-600">COLLABEAT 플랫폼 현황</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
              <p className="text-3xl mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Alerts */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">최근 알림</h2>
            <AlertCircle className="w-5 h-5 text-slate-400" />
          </div>
          
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div 
                key={alert.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 ${
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  alert.type === 'success' ? 'bg-green-50 border-green-200' :
                  'bg-blue-50 border-blue-200'
                }`}
              >
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  alert.type === 'warning' ? 'bg-yellow-500' :
                  alert.type === 'success' ? 'bg-green-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm mb-1">{alert.message}</p>
                  <p className="text-xs text-slate-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl mb-6">인기 카테고리</h2>
          
          <div className="space-y-4">
            {[
              { name: '예술/작품', count: 12, percentage: 85 },
              { name: '의류', count: 8, percentage: 65 },
              { name: '향수', count: 6, percentage: 50 },
              { name: '액세서리', count: 5, percentage: 40 },
            ].map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{category.name}</span>
                  <span className="text-sm text-slate-600">{category.count}개</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Deals */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl mb-6">최근 협업</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm text-slate-600">브랜드</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">공간</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">상태</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">시작일</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">예상 수익</th>
              </tr>
            </thead>
            <tbody>
              {recentDeals.map((deal) => (
                <tr key={deal.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4">{deal.brand}</td>
                  <td className="py-4 px-4">{deal.venue}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      deal.status === 'active' ? 'bg-green-100 text-green-700' :
                      deal.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {deal.status === 'active' ? '진행중' :
                       deal.status === 'pending' ? '대기중' : '완료'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600">{deal.startDate}</td>
                  <td className="py-4 px-4">{deal.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
