import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.15),transparent_35%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-200">
              <Sparkles className="h-3.5 w-3.5" /> New: Unified portal for students & faculty
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Modern University Management System
            </h1>
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              Streamline admissions, academics, examinations, and campus operations in one intuitive platform. Secure, scalable, and built for modern institutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-700 transition">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 ring-1 ring-inset ring-blue-200 transition">
                Request a Demo
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                "Online admissions & fee payments",
                "Course & curriculum management",
                "Attendance & examination modules",
                "Parent & alumni portals"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-blue-100 blur-3xl opacity-60" />
            <div className="relative bg-white/80 backdrop-blur rounded-xl border border-gray-200 shadow-lg p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-900 font-semibold">Admissions</p>
                  <p className="text-gray-600 mt-1">Manage applications, merit lists, and online fees.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-900 font-semibold">Academics</p>
                  <p className="text-gray-600 mt-1">Timetables, syllabi, and course outcomes tracking.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-900 font-semibold">Examinations</p>
                  <p className="text-gray-600 mt-1">Grade entry, results, and transcripts generation.</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-gray-900 font-semibold">Analytics</p>
                  <p className="text-gray-600 mt-1">Dashboards for student success and operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
