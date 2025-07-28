"use client";

import { useState } from "react";
import { Home, Flame, Settings, User } from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={20} /> },
  { label: "Flame", icon: <Flame size={20} /> },
  { label: "Settings", icon: <Settings size={20} /> },
  { label: "User", icon: <User size={20} /> },
];

export default function GlowMenu() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="flex items-center justify-center py-6 bg-black">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setActive(item.label)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg
                text-white font-medium transition-all duration-300 
                border border-zinc-800 ${
                  active === item.label ? "glow border-blue-500" : "hover:glow"
                }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
