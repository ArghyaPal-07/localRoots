import Link from "next/link";
import { LayoutDashboard, Users, Map, Building2, Flag, Settings, Database } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-gray-800">
          <div className="text-xs text-red-400 font-bold uppercase tracking-wider mb-1">LocalRoots Admin</div>
          <span className="font-bold text-xl tracking-tight">Superuser Panel</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-auto">
          <NavItem href="/admin" icon={<LayoutDashboard size={20} />} label="Overview" active />
          
          <div className="pt-4 pb-2 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Verification</div>
          <NavItem href="#" icon={<Users size={20} />} label="Student Hosts" badge="12" />
          <NavItem href="#" icon={<Building2 size={20} />} label="Hotels" />
          
          <div className="pt-4 pb-2 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Platform</div>
          <NavItem href="#" icon={<Map size={20} />} label="Experiences" />
          <NavItem href="#" icon={<Flag size={20} />} label="Moderation" />
          <NavItem href="#" icon={<Database size={20} />} label="Analytics" />
          <NavItem href="#" icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-10">
          <div className="font-bold text-lg md:hidden">Admin</div>
          <div className="flex-1"></div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">Admin User</span>
            <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">AD</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active = false, badge }: { href: string, icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
  return (
    <Link 
      href={href}
      className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all text-sm font-medium ${
        active 
          ? "bg-white/10 text-white" 
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{badge}</span>
      )}
    </Link>
  );
}
