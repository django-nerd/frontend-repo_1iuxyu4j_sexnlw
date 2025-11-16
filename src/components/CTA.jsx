export default function CTA() {
  return (
    <section id="get-started" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur p-8 md:p-12 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to modernize your campus?</h2>
              <p className="mt-3 text-white/90">Launch your university portal with a secure, scalable platform. Manage admissions, academics, and operations — all in one place.</p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-50 transition">Request a Demo</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-500 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-400 transition">Contact Sales</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
