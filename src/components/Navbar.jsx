import { Menu, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-gray-900 text-lg">UniManage</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#departments" className="hover:text-gray-900 transition">Departments</a>
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Request demo</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-blue-700 transition">Get Started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#features" className="rounded-md px-2 py-2 hover:bg-gray-50">Features</a>
              <a href="#departments" className="rounded-md px-2 py-2 hover:bg-gray-50">Departments</a>
              <a href="#about" className="rounded-md px-2 py-2 hover:bg-gray-50">About</a>
              <a href="#contact" className="rounded-md px-2 py-2 hover:bg-gray-50">Contact</a>
              <div className="h-px bg-gray-200 my-2" />
              <a href="#demo" className="rounded-md px-2 py-2 hover:bg-gray-50">Request demo</a>
              <a href="#get-started" className="rounded-md px-2 py-2 bg-blue-600 text-white text-center">Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
