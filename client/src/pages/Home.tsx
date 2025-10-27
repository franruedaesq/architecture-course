import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Code2, Zap, Users, Layers, BarChart3 } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "The Backend Divide",
    subtitle: "Microservices & BFF",
    description: "Understand why we broke the monolith into microservices and how the BFF acts as the perfect mediator.",
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "The Frontend Fragmentation",
    subtitle: "Micro-Frontends & SSR/Hydration",
    description: "Explore how the frontend mirrors the backend architecture and the weird trade-offs of server-side rendering.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Measuring Success",
    subtitle: "Performance & SEO",
    description: "Deep dive into Core Web Vitals, Technical SEO, and the metrics that matter for modern web applications.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "The Implementation Playbook",
    subtitle: "Migration & Code-Splitting",
    description: "Learn the Strangler Fig Pattern, Module Federation, and how to compose the pieces together.",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "The Human Element",
    subtitle: "Team & Process",
    description: "Discover how to maintain developer experience, consistency, and quality in a complex architecture.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Understanding the Weird Parts</h1>
          </div>
          <p className="text-slate-400 mt-2">A Deep Dive into Modern Web Architecture</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Deep Dive</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              We're not here to learn <span className="italic">what</span> a microservice is; we're here to understand the <span className="font-semibold text-blue-300">why</span>—the core problem it solves and the new, weirder problems it creates.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              For years, the standard approach was the <span className="font-semibold">Monolith</span>, often lovingly referred to as the "Big Ball of Mud." It was simple, but as teams grew, it became a nightmare. Modern web architecture is built on a fundamental desire for <span className="font-semibold text-purple-300">decoupling</span> and <span className="font-semibold text-purple-300">independent deployment</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-sm font-semibold text-blue-400 mb-2">5 Modules</div>
              <div className="text-2xl font-bold text-white">25+ Concepts</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-sm font-semibold text-purple-400 mb-2">Interactive</div>
              <div className="text-2xl font-bold text-white">Diagrams & Examples</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <div className="text-sm font-semibold text-pink-400 mb-2">Deep Dive</div>
              <div className="text-2xl font-bold text-white">Trade-offs & Why</div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Course Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Link key={module.id} href={`/module/${module.id}`}>
                  <a className="group">
                    <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 cursor-pointer">
                      <CardHeader>
                        <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                        <CardDescription className="text-slate-400 font-semibold">{module.subtitle}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{module.description}</p>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                          Explore Module
                        </Button>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Ready to understand the weird parts? Start with Module 1.</p>
          <Link href="/module/1">
            <a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg">
                Start Learning
              </Button>
            </a>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 mt-16">
        <div className="container max-w-6xl mx-auto px-4 py-8 text-center text-slate-400 text-sm">
          <p>Understanding the Weird Parts of Modern Web Architecture © 2025</p>
          <p className="mt-2">Inspired by Tony Alicea's teaching style</p>
        </div>
      </footer>
    </div>
  );
}

