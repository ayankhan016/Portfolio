export default function Work() {
  const projects = [
    {
      title: "Portfolio Website",
      desc:
        "A personal modern, responsive portfolio built using Next.js and Tailwind CSS to showcase skills, experience, and projects.",
      tag: "Next.js • Tailwind • TypeScript"
    },
    {
      title: "E-commerce Web Application ",
      desc:
        "Designed and developed clean a full-stack e-commerce platform featuring authentication, cart, checkout, and admin management.",
      tag: "Asp.NET Core • SQL Server • C#"
    },
    {
      title: "Travel Booking Platform",
      desc:
        "A full-stack tour and travel platform designed to showcase destinations, manage tour packages, and allow users to book and manage travel experiences with ease.",
      tag: "Html • Css • UI Design "
    },
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-9 pt-0 pb-32">

      <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">
        <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
           Work
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

  {projects.map((p, i) => {
    const card = (
      <div
        key={p.title}
        className="group relative rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 p-10 hover:border-cyan-400/40 hover:shadow-cyan-400/30 hover:shadow-2xl transition-all duration-500"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 transition" />

        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            {p.title}
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            {p.desc}
          </p>

          <span className="inline-block text-sm px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300">
            {p.tag}
          </span>
        </div>
      </div>
    );

    // Center the 3rd card
    if (i === 2) {
      return (
        <div key={p.title} className="md:col-span-2 flex justify-center">
          <div className="max-w-xl w-full">{card}</div>
        </div>
      );
    }

    return card;
  })}

</div>

    </section>
  );
}
