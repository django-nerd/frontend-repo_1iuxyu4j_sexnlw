import { Building2, FlaskConical, Binary, Calculator, BookOpen, Stethoscope } from "lucide-react";

const departments = [
  { icon: Building2, name: "Management Studies", desc: "BBA, MBA, Executive programs" },
  { icon: FlaskConical, name: "Science & Research", desc: "Physics, Chemistry, Biology" },
  { icon: Binary, name: "Computer Science", desc: "B.Tech, M.Tech, AI/ML, Data Science" },
  { icon: Calculator, name: "Mathematics", desc: "Pure & Applied Mathematics" },
  { icon: BookOpen, name: "Arts & Humanities", desc: "Literature, History, Languages" },
  { icon: Stethoscope, name: "Health Sciences", desc: "Nursing, Pharmacy, Public Health" },
];

export default function Departments() {
  return (
    <section id="departments" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Departments</h2>
          <p className="mt-3 text-gray-600">A diverse range of programs designed for future-ready careers.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-purple-600/10 text-purple-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
