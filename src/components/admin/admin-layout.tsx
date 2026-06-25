import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/components/contexts/auth-context';
import { 
  Menu, 
  X, 
  Package, 
  Grid3X3, 
  Award, 
  LogOut,
  User,
  Home,
  Anchor,
  ShoppingCart,
  Settings as SettingsIcon
} from 'lucide-react';
import { MarineLoader } from '@/components/common/marine-loader';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [user, loading, pathname, router]);

  if (loading) return <MarineLoader />;
  if (!user && pathname !== '/admin/login') return null;

  // Don't show layout on login page
  if (pathname === '/admin/login') return <>{children}</>;

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: Home },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Categories', href: '/admin/categories', icon: Grid3X3 },
    { name: 'Brands', href: '/admin/brands', icon: Award },
    { name: 'Settings', href: '/admin/settings', icon: SettingsIcon },
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  const isActive = (path: string) => {
    if (path === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans text-slate-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-[#0A1F40] shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 border-r border-[#5B9BD5]/20 flex flex-col overflow-hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Marine Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(91,155,213,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(91,155,213,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1F40]/50 to-[#0A1F40] pointer-events-none" />
        
        <div className="flex flex-col items-center justify-center p-8 border-b border-[#5B9BD5]/10 bg-[#0A1F40]/80 backdrop-blur-md relative overflow-hidden">
          {/* HUD Brackets for logo area */}
          <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#5B9BD5]/40" />
          <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[#5B9BD5]/40" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[#5B9BD5]/40" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#5B9BD5]/40" />
          
          <div className="w-full flex items-center justify-between mb-4">
            <Link href="/">
              <a className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
                <img src="/aarfa-logo.png" alt="Aarfa Marine Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                <span className="ml-3 font-syne font-bold uppercase tracking-tight text-white text-sm">Aarfa Console</span>
              </a>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-white/50 hover:text-white transition-colors bg-transparent border-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex justify-between items-center px-1">
             <span className="text-[8px] font-mono text-[#5B9BD5]/60 tracking-[0.2em] uppercase">Vessel ID: AM-804</span>
             <span className="text-[8px] font-mono text-[#5B9BD5]/60 tracking-[0.2em] uppercase">Auth: L3</span>
          </div>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2 overflow-y-auto custom-scrollbar pb-8 relative z-10">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link key={item.name} href={item.href}>
                <a className={`flex items-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all group relative no-underline ${
                  active
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}>
                  {active && (
                    <>
                      <div className="absolute inset-0 bg-[#5B9BD5]/10 border-l-2 border-[#5B9BD5]" />
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#5B9BD5]/60" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#5B9BD5]/60" />
                    </>
                  )}
                  {!active && (
                     <div className="absolute left-0 w-0.5 h-full bg-white/5 group-hover:bg-[#5B9BD5]/20 transition-all" />
                  )}
                  <Icon className={`w-4 h-4 mr-4 transition-all duration-300 ${active ? 'text-[#5B9BD5] scale-110' : 'text-slate-500 group-hover:text-slate-300'}`} />
                  <span className="relative z-10 font-mono tracking-widest">{item.name}</span>
                  {active && (
                     <div className="ml-auto w-1 h-1 bg-[#5B9BD5] animate-pulse rounded-full shadow-[0_0_8px_#5B9BD5]" />
                  )}
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 bg-[#0A1F40]/80 backdrop-blur-md border-t border-[#5B9BD5]/10 relative z-10">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5B9BD5]/20 to-transparent" />
          
          <div className="bg-slate-950/40 rounded-sm p-4 mb-4 border border-[#5B9BD5]/10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#5B9BD5]/10 border-b border-l border-[#5B9BD5]/20">
               <span className="text-[7px] font-mono text-[#5B9BD5]/80">CORE_SYNC</span>
            </div>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-950 border border-[#5B9BD5]/30 rounded-sm flex items-center justify-center text-[#5B9BD5] font-black shadow-[0_0_15px_rgba(91,155,213,0.1)] relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--primary),transparent)]" />
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="ml-4 overflow-hidden">
                  <p className="text-[10px] font-mono font-black text-white uppercase tracking-tighter truncate m-0">
                      {user?.name || user?.email || 'Admin'}
                  </p>
                  <p className="text-[8px] text-[#5B9BD5]/60 font-mono uppercase tracking-[0.2em] mt-0.5 m-0">Fleet Commander</p>
                </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full px-4 py-3 border border-red-500/20 text-[10px] font-mono font-black uppercase tracking-[0.3em] text-red-400 hover:text-red-300 hover:bg-red-500/5 hover:border-red-500/40 transition-all relative overflow-hidden group cursor-pointer bg-transparent"
          >
            <div className="absolute inset-y-0 left-0 w-0 group-hover:w-1 bg-red-500 transition-all" />
            <LogOut className="w-3 h-3 mr-3 opacity-70 group-hover:opacity-100" />
            Termination
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-[280px]">
        <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 h-16 flex items-center justify-between px-8">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-[#5B9BD5] bg-transparent border-0 cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1" />
            <Link href="/">
              <a className="text-[10px] font-bold uppercase tracking-widest text-[#5B9BD5] hover:text-white transition-colors no-underline">
                View Public Site →
              </a>
            </Link>
        </header>

        <main className="p-8 min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}
