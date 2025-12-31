export default function Education() {
  const education = [
    {
      school: "Interface Learning School, Srinagar",
      period: "2024 – 2027",
      title: "Diploma in Software Engineering & Computer Science",
      desc:
        "A hands-on diploma program focused on modern software development and web technologies. Gaining strong practical experience through real-world projects, coding labs, and collaborative learning.",
      skills: "Front End Development • Web Apps • JavaScript • UI Design",
      url: "https://ilssrinagar.com/"
    },
    {
      school: "Sri Pratap Higher Secondary School",
      period: "2024 – 2025",
      title: "Higher Secondary Education (Class 11 & 12)",
      desc:
        "Completed higher secondary education with a strong focus on computer science, programming fundamentals, and logical thinking, building a solid foundation for a career in software development.",
      skills: "Computer Science • Logic • Mathematics",
    },
  ];

  return (
    <section id="education" className="pt-16 pb-32">

      <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">
        <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
          Education
        </span>
      </h2>

      {/* THIS is what fixes the spacing */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {education.map((e) => (
          <div
            key={e.school}
            className="relative group rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 p-10 hover:border-cyan-400/40 hover:shadow-cyan-400/30 hover:shadow-2xl transition-all duration-500"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 transition" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-white hover:text-cyan-400 transition underline-offset-4 hover:underline"
                  >
                    {e.school}
                  </a>
                ) : (
                  <span className="text-2xl font-semibold text-white">
                    {e.school}
                  </span>
                )}

                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  {e.period}
                </span>
              </div>

              <h4 className="text-cyan-300 text-lg font-medium mb-4">
                {e.title}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-6">
                {e.desc}
              </p>

              <span className="inline-block text-sm px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300">
                {e.skills}
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
