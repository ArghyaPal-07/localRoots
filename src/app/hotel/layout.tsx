import Link from "next/link";
import { Building, Users, Calendar, Map, Activity, Settings, Bell, Search } from "lucide-react";

export default function HotelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f3a2c] text-white hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6">
          <div className="text-xs text-green-300 font-bold uppercase tracking-wider mb-1">LocalRoots for Partners</div>
          <span className="font-bold text-2xl tracking-tight">Heritage Hotel</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem href="/hotel" icon={<Activity size={20} />} label="Overview" active />
          <NavItem href="#" icon={<Users size={20} />} label="Guests" />
          <NavItem href="#" icon={<Map size={20} />} label="Experiences" />
          <NavItem href="#" icon={<Calendar size={20} />} label="Bookings" />
          <NavItem href="#" icon={<Settings size={20} />} label="Settings" />
        </nav>
        
        <div className="p-4 bg-black/20 m-4 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
              <span className="font-bold">HC</span>
            </div>
            <div>
              <p className="font-medium text-sm">Head Concierge</p>
              <Link href="#" className="text-xs text-green-300 hover:underline">View Profile</Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-4 md:px-8 flex justify-between items-center sticky top-0 z-10">
          <div className="font-bold text-xl md:hidden">Heritage Hotel</div>
          <div className="hidden md:flex relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search guests, bookings..." className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1f3a2c]" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#1f3a2c] text-white flex items-center justify-center text-xs font-bold md:hidden">HC</div>
          </div>
        </header>
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
          ? "bg-white/10 text-white" 
          : "text-green-100/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
