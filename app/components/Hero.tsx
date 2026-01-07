export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-8 overflow-hidden">

      
      {/* Glow background only for hero */}
      <div className="hero-glow" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
            Hello, I’m
          </p>

          <h1 className="text-6xl md:text-7xl font-semibold leading-tight mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ayaan Khan
            </span>
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed max-w-xl font-medium">
            I’m a computer science student passionate about building modern,
            responsive, and user friendly web applications with clean design
            and efficient logic.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <a
              href="/my resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black rounded-full hover:opacity-80 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – CODE RAIN */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden hidden md:block pointer-events-none font-mono text-sm text-white/40">

          <div className="absolute left-10 top-0 whitespace-pre animate-[fall_20s_linear_infinite]">
{`const app = () => {}
let data = fetch()
function build()
React
Next
Node
SQL`}
          </div>

          <div className="absolute left-1/3 top-0 whitespace-pre animate-[fall_25s_linear_infinite]">
{`if (success)
render()
useState()
useEffect()
API
JSON
CSS`}
          </div>

          <div className="absolute left-2/3 top-0 whitespace-pre animate-[fall_30s_linear_infinite]">
{`<Component />
async await
Promise
Server
Client
Logic
UI`}
          </div>

        </div>
      </div>
    </section>
  );
}
