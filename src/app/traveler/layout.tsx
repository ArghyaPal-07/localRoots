import Link from "next/link";
import { MapPin, Compass, Search, Map, Calendar, MessageSquare, User } from "lucide-react";

export default function TravelerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center space-x-2">
          <MapPin className="text-[#c25e3a]" size={28} />
          <span className="font-bold text-2xl tracking-tight text-[#1f3a2c]">LocalRoots</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2">
          <NavItem href="/traveler" icon={<Compass size={20} />} label="Home" active />
          <NavItem href="/traveler/match" icon={<Search size={20} />} label="AI Match" />
          <NavItem href="/traveler/map" icon={<Map size={20} />} label="Explore Map" />
          <NavItem href="#" icon={<Calendar size={20} />} label="My Trips" />
          <NavItem href="#" icon={<MessageSquare size={20} />} label="Messages" />
          <NavItem href="#" icon={<User size={20} />} label="Profile" />
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=random" alt="Rahul" />
            </div>
            <div>
              <p className="font-medium text-sm">Rahul Sharma</p>
              <p className="text-xs text-gray-500">Traveler</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="md:hidden bg-white p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2">
            <MapPin className="text-[#c25e3a]" size={24} />
            <span className="font-bold text-xl tracking-tight text-[#1f3a2c]">LocalRoots</span>
          </div>
          <User size={24} className="text-gray-600" />
        </div>
        {children}
      </main>
      
      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-40">
        <Link href="/traveler" className="flex flex-col items-center text-[#1f3a2c]"><Compass size={24} /><span className="text-[10px]">Home</span></Link>
        <Link href="/traveler/match" className="flex flex-col items-center text-gray-400"><Search size={24} /><span className="text-[10px]">Match</span></Link>
        <Link href="/traveler/map" className="flex flex-col items-center text-gray-400"><Map size={24} /><span className="text-[10px]">Map</span></Link>
        <Link href="#" className="flex flex-col items-center text-gray-400"><Calendar size={24} /><span className="text-[10px]">Trips</span></Link>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
        active 
          ? "bg-[#1f3a2c] text-white shadow-md" 
          : "text-gray-600 hover:bg-green-50 hover:text-[#1f3a2c]"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
