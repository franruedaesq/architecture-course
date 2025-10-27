import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";

export default function Module5() {
  return (
    <ModuleLayout
      moduleNumber={5}
      title="The Human Element"
      subtitle="Team Structure, Monitoring & Process"
      description="Learn how to organize teams, monitor distributed systems, and maintain quality at scale."
      previousModule={4}
      nextModule={null}
    >
      {/* Lesson 1: Team Organization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Team Organization & Conway's Law</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Here's a fundamental truth: <span className="font-semibold text-yellow-300">The architecture of your system mirrors the structure of your organization.</span> This is Conway's Law.
        </p>

        <BigWordAlert
          term="Conway's Law"
          definition="Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure. In other words, your code architecture reflects how your teams communicate."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          If you have a monolith with one team, that's fine. But if you have 50 teams sharing one codebase, you'll have chaos. Micro-frontends work best when you also restructure your teams.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Team Topology: From Monolith to Micro-Frontends</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Monolith Organization</h4>
              <div className="bg-slate-700/50 p-4 rounded text-sm">
                <div className="font-mono text-xs space-y-1">
                  <div>Frontend Team (20 people)</div>
                  <div className="ml-4">├─ Product Features</div>
                  <div className="ml-4">├─ Checkout</div>
                  <div className="ml-4">├─ Reviews</div>
                  <div className="ml-4">└─ Cart</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mt-2">Problem: All 20 people share the same codebase. Merge conflicts, coordination overhead, slow releases.</p>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">Micro-Frontend Organization</h4>
              <div className="bg-slate-700/50 p-4 rounded text-sm">
                <div className="font-mono text-xs space-y-1">
                  <div>Shell Team (3 people)</div>
                  <div className="ml-4">├─ Routing & Navigation</div>
                  <div className="ml-4">├─ Authentication</div>
                  <div className="ml-4">└─ Error Handling</div>
                  <div className="mt-2">Product Team (5 people)</div>
                  <div className="ml-4">└─ Product Micro-Frontend</div>
                  <div className="mt-2">Checkout Team (4 people)</div>
                  <div className="ml-4">└─ Checkout Micro-Frontend</div>
                  <div className="mt-2">Reviews Team (3 people)</div>
                  <div className="ml-4">└─ Reviews Micro-Frontend</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mt-2">Benefit: Each team owns their own codebase, deploys independently, no merge conflicts.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Developer Experience (DX) Best Practices</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">1. Local Development Setup</h4>
              <p className="text-sm mb-2">Developers should be able to run the entire system locally in under 5 minutes.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// docker-compose.yml - One command to run everything</div>
                <div>version: '3'</div>
                <div>services:</div>
                <div className="ml-4">shell:</div>
                <div className="ml-8">build: ./shell</div>
                <div className="ml-8">ports:</div>
                <div className="ml-12">- "3000:3000"</div>
              </div>
              <p className="text-slate-300 text-sm mt-2">Developer runs: docker-compose up</p>
            </div>
            <div className="border-t border-purple-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">2. Shared Component Library</h4>
              <p className="text-sm">Avoid duplicating UI components across micro-frontends. Use a shared component library.</p>
            </div>
            <div className="border-t border-purple-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">3. Consistent Tooling</h4>
              <p className="text-sm">All teams use the same linter, formatter, testing framework, and build tool.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2: Monitoring & Observability */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Monitoring & Observability at Scale</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With multiple micro-frontends deployed independently, you need to know what's happening in production. You need <span className="font-semibold text-blue-300">observability</span>.
        </p>

        <BigWordAlert
          term="Observability"
          definition="The ability to understand the internal state of a system by examining its outputs (logs, metrics, traces). Unlike monitoring, observability lets you ask new questions about your system."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">The Three Pillars of Observability</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">1. Logs</h4>
              <p className="text-sm mb-2">Detailed records of what happened. Useful for debugging specific issues.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Structured logging</div>
                <div>import winston from 'winston';</div>
                <div className="mt-2">const logger = winston.createLogger(</div>
                <div className="ml-4">format: winston.format.json(),</div>
                <div className="ml-4">transports: [</div>
                <div className="ml-8">new winston.transports.File(filename: 'error.log'),</div>
                <div className="ml-8">new winston.transports.File(filename: 'combined.log')</div>
                <div className="ml-4">]</div>
                <div>);</div>
              </div>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">2. Metrics</h4>
              <p className="text-sm mb-2">Quantitative measurements over time. Useful for tracking trends and alerting.</p>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">3. Traces</h4>
              <p className="text-sm mb-2">Distributed traces show the path a request takes through multiple services.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Real-World Example: Debugging a Slow Checkout</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Problem</h4>
              <p>Checkout is taking 5 seconds. Users are abandoning carts.</p>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Using Observability</h4>
              <div className="ml-4 space-y-2">
                <div><span className="font-semibold">Metrics:</span> Checkout latency = 5000ms (vs normal 800ms)</div>
                <div><span className="font-semibold">Traces:</span> Show the request path: Shell → Checkout MFE → Payment API</div>
                <div><span className="font-semibold">Logs:</span> Payment API is timing out</div>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
              <p>Scale up Payment API. Add circuit breaker to fail fast instead of timing out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 3: SLOs & Performance Budgets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: SLOs, SLIs & Performance Budgets</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          How do you define "good performance"? You need to set targets and measure against them.
        </p>

        <BigWordAlert
          term="SLO (Service Level Objective)"
          definition="A target level of service you commit to. Example: 99.9% uptime, or 95% of requests complete in under 200ms."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">SLO Examples for E-Commerce</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Availability SLO</h4>
              <div className="font-mono text-xs">99.95% uptime (52 minutes of downtime per year allowed)</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Latency SLO</h4>
              <div className="font-mono text-xs">95% of requests complete in under 200ms</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Error Rate SLO</h4>
              <div className="font-mono text-xs">Less than 0.1% of requests return errors</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Core Web Vitals SLO</h4>
              <div className="font-mono text-xs">LCP {`<`} 2.5s, FID {`<`} 100ms, CLS {`<`} 0.1</div>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Error Budgets</h3>
          <p className="text-slate-300 mb-4">
            If your SLO is 99.95% uptime, you have an <span className="font-semibold">error budget</span> of 0.05% downtime. You can "spend" this budget on deployments, experiments, or incidents.
          </p>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">Example: Monthly Error Budget</h4>
              <div className="font-mono text-xs space-y-1">
                <div>SLO: 99.95% uptime</div>
                <div>Monthly error budget: 21.6 minutes</div>
                <div className="mt-2">Spending the budget:</div>
                <div className="ml-4">• Deploy new feature: 5 minutes downtime</div>
                <div className="ml-4">• Database migration: 10 minutes downtime</div>
                <div className="ml-4">• Unexpected incident: 6 minutes downtime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 4: Incident Response */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 4: Incident Response & Post-Mortems</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Things will break. The question is: how quickly can you detect, respond, and recover?
        </p>

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Incident Response Playbook</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">1. Detection (0-5 minutes)</h4>
              <p className="text-sm">Automated alerts trigger when metrics exceed thresholds.</p>
              <div className="bg-slate-700/50 p-3 rounded text-xs mt-2">
                <div className="font-mono">Error rate {`>`} 1% → Page on-call engineer</div>
                <div className="font-mono">Latency p99 {`>`} 1s → Page on-call engineer</div>
                <div className="font-mono">Checkout MFE down → Page payments team lead</div>
              </div>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-orange-300 mb-2">2. Triage (5-15 minutes)</h4>
              <p className="text-sm">Determine severity and impact.</p>
              <div className="bg-slate-700/50 p-3 rounded text-xs mt-2">
                <div className="font-mono">SEV1: Complete outage, customer impact</div>
                <div className="font-mono">SEV2: Degraded performance, some users affected</div>
                <div className="font-mono">SEV3: Minor issue, no customer impact</div>
              </div>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-yellow-300 mb-2">3. Mitigation (15-60 minutes)</h4>
              <p className="text-sm">Stop the bleeding. Rollback, scale up, or disable feature.</p>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">4. Root Cause Analysis (Post-Incident)</h4>
              <p className="text-sm">Understand what happened and why.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Post-Mortem Template</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">What happened?</h4>
              <p className="text-xs text-slate-400">Timeline of events</p>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Why did it happen?</h4>
              <p className="text-xs text-slate-400">Root cause analysis</p>
            </div>
            <div className="border-t border-slate-700 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">What can we do to prevent this?</h4>
              <p className="text-xs text-slate-400">Action items and improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Conway's Law: Your architecture mirrors your organization. Structure teams to match your architecture.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Observability requires logs, metrics, and traces. Use structured logging and distributed tracing.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Define SLOs and track SLIs to measure success and maintain quality.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Error budgets allow teams to balance innovation with stability.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Incident response playbooks and post-mortems turn failures into learning opportunities.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Developer experience matters. Make local development easy and deployment fast.</span>
          </li>
        </ul>
      </section>

      {/* Final Section */}
      <section className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-white mb-4">You've Completed the Deep Dive</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          You now understand the weird parts of modern web architecture. You know why we broke up the monolith, how we compose micro-frontends, what metrics matter, and how to scale teams.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          Now go build something great. And when it breaks, you'll know exactly how to debug it.
        </p>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Link href="/module/4">
          <a>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous Module
            </Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Back to Home
            </Button>
          </a>
        </Link>
      </div>
    </ModuleLayout>
  );
}

