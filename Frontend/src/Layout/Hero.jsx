import {
  ArrowRight,
  Brain,
  Bot,
  Database,
  Sparkles,
  Play,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 backdrop-blur-lg">

              <Sparkles className="text-cyan-400" size={18} />

              <span className="text-sm font-medium text-blue-200">
                AI • Cloud • Data • Enterprise Solutions
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Build

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Intelligent AI

              </span>

              For Your Business

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              We design and develop enterprise AI platforms powered by
              AI Agents, Large Language Models, RAG, Machine Learning,
              Cloud Infrastructure, and Data Engineering to automate
              business operations and accelerate digital transformation.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">

                Let's Talk

                <ArrowRight
                  className="transition group-hover:translate-x-1"
                  size={20}
                />

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-lg transition hover:bg-white hover:text-black">

                <Play size={18} />

                Watch Demo

              </button>

            </div>

            {/* Tech Tags */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "AI Agents",
                "LLMs",
                "RAG",
                "FastAPI",
                "Cloud",
                "Machine Learning",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-lg transition hover:bg-blue-600"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

                <h2 className="text-4xl font-bold text-cyan-400">
                  150+
                </h2>

                <p className="mt-2 text-slate-300">
                  AI Projects
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

                <h2 className="text-4xl font-bold text-cyan-400">
                  50+
                </h2>

                <p className="mt-2 text-slate-300">
                  Enterprise Clients
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

                <h2 className="text-4xl font-bold text-cyan-400">
                  98%
                </h2>

                <p className="mt-2 text-slate-300">
                  Client Satisfaction
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">

                <h2 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h2>

                <p className="mt-2 text-slate-300">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            {/* Main Card */}

            <div className="rounded-[35px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900"
                alt="Artificial Intelligence"
                className="rounded-3xl transition duration-500 hover:scale-105"
              />

            </div>

            {/* Card 1 */}

            <div className="absolute -left-6 bottom-8 rounded-2xl border border-white/10 bg-blue-600 px-5 py-4 shadow-2xl">

              <div className="flex items-center gap-3">

                <Brain />

                <div>

                  <h3 className="font-bold">
                    Enterprise AI
                  </h3>

                  <p className="text-sm text-blue-100">
                    Smart Business Solutions
                  </p>

                </div>

              </div>

            </div>

            {/* Card 2 */}

            <div className="absolute -right-8 top-8 rounded-2xl bg-white p-5 text-black shadow-2xl">

              <div className="flex items-center gap-3">

                <Bot className="text-blue-600" />

                <div>

                  <h3 className="font-bold">
                    AI Agents
                  </h3>

                  <p className="text-sm text-gray-500">
                    Autonomous Automation
                  </p>

                </div>

              </div>

            </div>

            {/* Card 3 */}

            <div className="absolute right-0 bottom-40 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg shadow-xl">

              <div className="flex items-center gap-3">

                <Database className="text-cyan-400" />

                <div>

                  <h3 className="font-bold">
                    Data Engineering
                  </h3>

                  <p className="text-sm text-slate-300">
                    ETL • Analytics • Cloud
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Circle */}

            <div className="absolute left-1/2 top-0 h-5 w-5 animate-ping rounded-full bg-cyan-400"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;