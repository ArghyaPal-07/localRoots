"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings, User, Building, UserCircle, Shield, X, Map } from "lucide-react";
import { usePathname } from "next/navigation";

export function DemoSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 mb-4 w-64 overflow-hidden">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-gray-800 text-sm">Demo Mode</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
              <X size={16} />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
            <DemoLink href="/" icon={<Map size={16} />} label="Landing Page" active={pathname === "/"} />
            <DemoLink href="/traveler" icon={<User size={16} />} label="Traveler View" active={pathname.startsWith("/traveler")} />
            <DemoLink href="/hotel" icon={<Building size={16} />} label="Hotel Concierge" active={pathname.startsWith("/hotel")} />
            <DemoLink href="/host" icon={<UserCircle size={16} />} label="Student Host" active={pathname.startsWith("/host")} />
            <DemoLink href="/admin" icon={<Shield size={16} />} label="Admin Panel" active={pathname.startsWith("/admin")} />
          </div>
        </div>
      ) : null}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center ml-auto"
        title="Toggle Demo Mode"
      >
        <Settings size={20} className={isOpen ? "animate-spin-slow" : ""} />
      </button>
    </div>
  );
}

function DemoLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm ${
        active ? "bg-[#1f3a2c] text-white" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
