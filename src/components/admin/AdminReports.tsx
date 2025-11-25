import { TrendingUp, Users, DollarSign, Target, Calendar } from 'lucide-react';

export function AdminReports() {
  const weeklySignups = [
    { week: '1주차', count: 5 },
    { week: '2주차', count: 8 },
    { week: '3주차', count: 6 },
    { week: '4주차', count: 5 },
  ];

  const categoryData = [
    { category: '예술/작품', deals: 12, revenue: 4200000, percentage: 35 },
    { category: '의류', deals: 8, revenue: 2800000, percentage: 23 },
    { category: '향수', deals: 6, revenue: 1900000, percentage: 16 },
    { category: '액세서리', deals: 5, revenue: 1500000, percentage: 13 },
    { category: '기타', deals: 4, revenue: 1100000, percentage: 13 },
  ];

  const locationData = [
    { location: '성수동', deals: 8, revenue: 3200000 },
    { location: '연남동', deals: 7, revenue: 2800000 },
    { location: '홍대', deals: 6, revenue: 2400000 },
    { location: '이태원', deals: 5, revenue: 2100000 },
    { location: '기타', deals: 9, revenue: 3000000 },
  ];

  const monthlyRevenue = [
    { month: '8월', revenue: 1800000, deals: 8 },
    { month: '9월', revenue: 2400000, deals: 12 },
    { month: '10월', revenue: 3100000, deals: 15 },
    { month: '11월', revenue: 2450000, deals: 10 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">통계 리포트</h1>
        <p className="text-slate-600">플랫폼 운영 현황 및 성과 분석</p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white">
          <Users className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-3xl mb-1">24</p>
          <p className="text-sm opacity-90">신규 가입자 (이번 달)</p>
          <p className="text-xs opacity-75 mt-2">브랜드 14 • 공간 10</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
          <Target className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-3xl mb-1">64%</p>
          <p className="text-sm opacity-90">매칭 성공률</p>
          <p className="text-xs opacity-75 mt-2">35건 중 22건 성사</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
          <DollarSign className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-3xl mb-1">₩2.45M</p>
          <p className="text-sm opacity-90">총 정산 금액</p>
          <p className="text-xs opacity-75 mt-2">플랫폼 수수료: ₩196K</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl p-6 text-white">
          <TrendingUp className="w-10 h-10 mb-3 opacity-80" />
          <p className="text-3xl mb-1">+28%</p>
          <p className="text-sm opacity-90">전월 대비 성장률</p>
          <p className="text-xs opacity-75 mt-2">수익 및 협업 건수</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Signups */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">주간 신규 가입</h2>
            <Calendar className="w-5 h-5 text-slate-400" />
          </div>
          
          <div className="space-y-4">
            {weeklySignups.map((week, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">{week.week}</span>
                  <span className="text-sm font-medium">{week.count}명</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
                    style={{ width: `${(week.count / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Revenue Trend */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">월별 수익 추이</h2>
            <TrendingUp className="w-5 h-5 text-slate-400" />
          </div>
          
          <div className="space-y-4">
            {monthlyRevenue.map((month, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div>
                  <p className="font-medium">{month.month}</p>
                  <p className="text-sm text-slate-500">{month.deals}건</p>
                </div>
                <p className="text-lg font-medium text-green-600">
                  ₩{(month.revenue / 1000000).toFixed(1)}M
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl mb-6">카테고리별 성과</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-3 px-4 rounded-l-lg text-sm text-slate-600">카테고리</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">협업 수</th>
                <th className="text-left py-3 px-4 text-sm text-slate-600">총 수익</th>
                <th className="text-left py-3 px-4 rounded-r-lg text-sm text-slate-600">점유율</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((cat, index) => (
                <tr key={index} className="border-t border-slate-100">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ 
                          backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][index] 
                        }}
                      ></div>
                      <span className="font-medium">{cat.category}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-600">{cat.deals}건</td>
                  <td className="py-4 px-4 font-medium">₩{cat.revenue.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-100 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full"
                          style={{ 
                            width: `${cat.percentage}%`,
                            backgroundColor: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][index]
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-slate-600 w-12">{cat.percentage}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Location Performance */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl mb-6">지역별 협업 현황</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {locationData.map((loc, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-lg font-medium mb-1">{loc.location}</p>
                  <p className="text-sm text-slate-600">{loc.deals}건 협업</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
              </div>
              <p className="text-xl font-medium text-indigo-600">
                ₩{(loc.revenue / 1000000).toFixed(1)}M
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-100">
        <h3 className="text-lg font-medium mb-4">💡 인사이트</h3>
        <div className="space-y-2 text-sm text-slate-700">
          <p>• 예술/작품 카테고리가 전체 협업의 35%를 차지하며 가장 인기가 높습니다</p>
          <p>• 성수동 지역의 협업이 가장 활발하며, 평균 수익도 가장 높습니다</p>
          <p>• 매칭 성공률 64%로 업계 평균(45%)을 크게 상회하고 있습니다</p>
          <p>• 11월 대비 12월 신규 가입 예상: +35% (시즌 효과)</p>
        </div>
      </div>
    </div>
  );
}
