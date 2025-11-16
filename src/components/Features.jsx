import { Shield, CreditCard, Users2, ClipboardList, BarChart3, Cloud } from "lucide-react";

const features = [
  {
    icon: Users2,
    title: "Student & Faculty Management",
    desc: "Centralized profiles, roles, and permissions with secure access for all stakeholders.",
  },
  {
    icon: ClipboardList,
    title: "Academics & Attendance",
    desc: "Course planning, enrollment, attendance tracking, and assignments in one place.",
  },
  {
    icon: CreditCard,
    title: "Fees & Finance",
    desc: "Online payments, receipts, and financial reports integrated with major gateways.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    desc: "Granular access controls, audit logs, and data protections aligned with standards.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Real-time dashboards with KPIs for admissions, academics, and operations.",
  },
  {
    icon: Cloud,
    title: "Cloud-first & Scalable",
    desc: "Reliable performance with modern architecture ready for growth.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything your university needs</h2>
          <p className="mt-3 text-gray-600">From admissions to alumni, manage the complete academic lifecycle efficiently.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
