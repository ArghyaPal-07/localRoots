import Link from "next/link";
import { UserCircle, Calendar, DollarSign, Star, LayoutDashboard, MessageSquare } from "lucide-react";

export default function HostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6">
          <div className="text-xs text-[#c25e3a] font-bold uppercase tracking-wider mb-1">LocalRoots Host</div>
          <span className="font-bold text-xl tracking-tight text-gray-900">Host Dashboard</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem href="/host" icon={<LayoutDashboard size={20} />} label="Dashboard" active />
          <NavItem href="#" icon={<Calendar size={20} />} label="My Experiences" />
          <NavItem href="#" icon={<MessageSquare size={20} />} label="Messages" />
          <NavItem href="#" icon={<DollarSign size={20} />} label="Earnings" />
          <NavItem href="#" icon={<UserCircle size={20} />} label="Profile" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
        active 
          ? "bg-[#1f3a2c] text-white" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
