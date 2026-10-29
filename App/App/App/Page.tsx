"use client";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="flex justify-between p-6 max-w-6xl mx-auto border-b border-zinc-800">
        <h1 className="font-black text-xl">FARI.DEV</h1>
        <div className="flex gap-6 text-sm text-zinc-400">
          <span>Work</span><span>Services</span><span>Pricing</span>
          <a href="https://wa.me/923000000000" className="bg-white text-black px-4 py-1 rounded-full font-bold">Hire Me</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 text-center mt-10">
        <p className="text-xs tracking-widest text-zinc-500 border border-zinc-800 inline-block px-3 py-1 rounded-full">AVAILABLE FOR NEW PROJECTS WORLDWIDE</p>
        <h1 className="text-5xl md:text-7xl font-black mt-6 leading-[0.9] tracking-tighter">I BUILD WEBSITES<br/>THAT MAKE<br/><span className="text-zinc-500">$10K+ MRR</span></h1>
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">Next.js 14 | AI Integration | SaaS | For USA, UAE, UK Startups. Ex-KAST Fellow Applicant, Peshawar to Global.</p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-white text-black px-8 py-4 rounded-full font-black">View My Work ↓</button>
          <button className="border border-zinc-700 px-8 py-4 rounded-full">Book a Call</button>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-4 mt-12">
        {[
          { title: "AI Resume Builder Pro", stack: "Next.js + OpenAI", revenue: "$250k Jobs Tool" },
          { title: "Dubai Real Estate SaaS", stack: "Next.js + Stripe", revenue: "$5k/mo Client" },
          { title: "USA Startup Landing", stack: "Next.js + Framer", revenue: "YC Startup" },
        ].map(p=>(
          <div key={p.title} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:bg-zinc-800 transition">
            <div className="h-32 bg-gradient-to-br from-zinc-800 to-black rounded-xl mb-4"></div>
            <p className="text-xs text-zinc-500">{p.stack} • {p.revenue}</p>
            <h3 className="font-bold text-lg mt-2">{p.title}</h3>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto p-6 mt-20">
        <h2 className="text-3xl font-black">SERVICES FOR GLOBAL CLIENTS 🌍</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border border-zinc-800 p-8 rounded-2xl"><h3 className="font-bold">1. SaaS Development - $3000+</h3><p className="text-zinc-500 text-sm mt-2">Full-stack Next.js SaaS with Auth, Payments, AI. Like your Resume Builder.</p></div>
          <div className="border border-zinc-800 p-8 rounded-2xl"><h3 className="font-bold">2. Landing Page that Converts - $800+</h3><p className="text-zinc-500 text-sm mt-2">For USA/UAE startups. 10x faster, SEO optimized.</p></div>
        </div>
      </div>

      <footer className="text-center text-zinc-600 text-xs p-12 border-t border-zinc-900 mt-20">© 2026 Fari Mazhar - Peshawar to Global | Open Source Developer</footer>
    </div>
  )
}
