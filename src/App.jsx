import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Departments from "./components/Departments";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Departments />
        <CTA />
        <footer id="contact" className="py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} UniManage. All rights reserved.</p>
            <div className="text-sm text-gray-600">Built for modern universities.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
