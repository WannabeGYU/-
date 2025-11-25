import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Handshake, 
  DollarSign, 
  BarChart3, 
  MessageSquare,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { AdminDashboard } from './AdminDashboard';
import { AdminMembers } from './AdminMembers';
import { AdminDeals } from './AdminDeals';
import { AdminPayments } from './AdminPayments';
import { AdminReports } from './AdminReports';
import { AdminSupport } from './AdminSupport';
import type { AdminPage } from '../../App';

export function AdminLayout() {
  const [currentPage, setCurrentPage] = useState<AdminPage>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: '대시보드', icon: LayoutDashboard },
    { id: 'members', label: '회원 관리', icon: Users },
    { id: 'deals', label: '협업 관리', icon: Handshake },
    { id: 'payments', label: '정산 관리', icon: DollarSign },
    { id: 'reports', label: '통계 리포트', icon: BarChart3 },
    { id: 'support', label: '고객센터', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } flex-shrink-0`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            {isSidebarOpen && (
              <div>
                <h1 className="text-xl mb-1">COLLABEAT</h1>
                <p className="text-xs text-slate-400">관리자 페이지</p>
              </div>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors ml-auto"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id as AdminPage)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-indigo-600 text-white' 
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors text-slate-300">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span>로그아웃</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {currentPage === 'dashboard' && <AdminDashboard />}
        {currentPage === 'members' && <AdminMembers />}
        {currentPage === 'deals' && <AdminDeals />}
        {currentPage === 'payments' && <AdminPayments />}
        {currentPage === 'reports' && <AdminReports />}
        {currentPage === 'support' && <AdminSupport />}
      </main>
    </div>
  );
}
