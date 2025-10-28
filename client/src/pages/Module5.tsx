import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";

export default function Module5() {
  return (
    <ModuleLayout moduleId={5}>
      {/* Lesson 1: Team Organization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Team Organization & Conway's Law</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Here's a fundamental truth: <span className="font-semibold text-yellow-300">The architecture of your system mirrors the structure of your organization.</span> This is Conway's Law, and it is the reason organizational design is a technical decision. If two teams rarely talk, expect the APIs between their services to be brittle. If your platform team is swamped, deployment tooling will lag behind the needs of product teams.
        </p>

        <BigWordAlert
          term="Conway's Law"
          definition="Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure. In other words, your code architecture reflects how your teams communicate."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          If you have a monolith with one team, that's fine. But if you have 50 teams sharing one codebase, you'll have chaos. Micro-frontends work best when you also restructure your teams. Mature organizations design <span className="font-semibold text-blue-200">team APIs</span>: clear interfaces, service ownership, and escalation paths that mirror the software architecture.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-300 mb-3">Research-Backed Team Structures</h3>
            <p className="text-slate-300 text-sm mb-3">
              Team Topologies identifies four canonical team types. High-performing organizations deliberately compose them:
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><span className="font-semibold text-indigo-200">Stream-Aligned:</span> Own a user or business workflow end-to-end. Optimized for flow and fast delivery.</li>
              <li><span className="font-semibold text-indigo-200">Platform:</span> Provide paved roads and reusable capabilities (CI/CD, design systems) to reduce cognitive load.</li>
              <li><span className="font-semibold text-indigo-200">Enabling:</span> Short-lived consultants that unblock teams by transferring skills (e.g., accessibility, observability).</li>
              <li><span className="font-semibold text-indigo-200">Complicated-Subsystem:</span> Guard specialized knowledge (e.g., recommendation engine, payment risk modeling).</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Operationalizing Conway's Law</h3>
            <p className="text-sm text-slate-300 mb-3">
              Map your communication structure to architecture using lightweight governance:
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="bg-slate-900/60 border border-slate-700 rounded p-3">
                <div className="font-semibold text-blue-200 mb-1">Architecture Sync (weekly)</div>
                <p>Representatives from each stream-aligned team share roadmap changes; platform team surfaces breaking changes.</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-700 rounded p-3">
                <div className="font-semibold text-blue-200 mb-1">Runbooks & Contracts</div>
                <p>Every micro-frontend publishes its API contracts, SLOs, and on-call schedule in a shared repository.</p>
              </div>
              <div className="bg-slate-900/60 border border-slate-700 rounded p-3">
                <div className="font-semibold text-blue-200 mb-1">RACI for Shared Components</div>
                <p>Define who is Responsible, Accountable, Consulted, and Informed for each shared asset (design tokens, auth flows).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-3">Measuring Team Health</h3>
          <p className="text-slate-300 text-sm mb-3">
            Use socio-technical metrics to ensure architecture choices are sustainable:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="bg-slate-800/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">DORA Metrics</div>
              <ul className="space-y-1">
                <li>Deployment frequency per team</li>
                <li>Lead time for changes</li>
                <li>Change fail rate</li>
                <li>Mean time to recovery</li>
              </ul>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">Cognitive Load Surveys</div>
              <p>Quarterly surveys ask engineers to rate the mental effort required to work on their stack. Rising scores signal a need for platform support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2: Monitoring & Observability */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Monitoring & Observability at Scale</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With multiple micro-frontends deployed independently, you need to know what's happening in production. You need <span className="font-semibold text-blue-300">observability</span>. Monitoring tells you when something you predicted would happen occurs; observability lets you ask <span className="italic">new</span> questions in the middle of an incident.
        </p>

        <BigWordAlert
          term="Observability"
          definition="The ability to understand the internal state of a system by examining its outputs (logs, metrics, traces). Unlike monitoring, observability lets you ask new questions about your system."
        />

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-white mb-3">Building the Telemetry Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-300 mb-2">Instrumentation</div>
              <p>Frontend: Web Vitals API + custom business events. Backend: OpenTelemetry auto-instrumentation. Infrastructure: kube-state-metrics, Envoy access logs.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-purple-300 mb-2">Collection & Transport</div>
              <p>Use the OpenTelemetry Collector to receive data over OTLP, enrich with metadata (team owner, git SHA), and forward to storage backends.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-emerald-300 mb-2">Storage & Analysis</div>
              <p>Logs → Loki/Elastic, Metrics → Prometheus/Mimir, Traces → Jaeger/Tempo. Unified querying enables cross-cutting analysis.</p>
            </div>
          </div>
        </div>

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

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Instrumentation Example: Frontend + Backend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-slate-900/60 border border-slate-800 rounded-lg p-4">
            <div>
              <div className="text-green-400 mb-2">// React micro-frontend: Web Vitals</div>
              <pre className="bg-slate-950/60 border border-slate-800 rounded p-3 whitespace-pre-wrap overflow-x-auto">
                {`import { onCLS, onINP, onLCP } from "web-vitals";

const emit = (metric) => {
  fetch("/telemetry", {
    method: "POST",
    body: JSON.stringify({ metric, team: "checkout" }),
  });
};

onCLS(emit);
onINP(emit);
onLCP(emit);`}
              </pre>
            </div>
            <div>
              <div className="text-green-400 mb-2">// Node BFF: OpenTelemetry tracer</div>
              <div>
                import {"{"} trace {"}"} from "@opentelemetry/api";
              </div>
              <div>const tracer = trace.getTracer("checkout-bff");</div>
              <div className="mt-2">export async function placeOrder(req, res) {`{`}</div>
              <div className="ml-4">return tracer.startActiveSpan("http.place_order", span {`=>`} {`{`}</div>
              <div className="ml-8">span.setAttribute("team", "checkout");</div>
              <div className="ml-8">span.setAttribute("cart.value", req.body.total);</div>
              <div className="ml-8">// call downstream services...</div>
              <div className="ml-8">span.end();</div>
              <div className="ml-4">{`}`});</div>
              <div>{`}`}</div>
            </div>
          </div>
          <p className="text-slate-300 text-sm mt-4">
            Consistent semantic conventions (service name, team, customer segment) make it possible to filter telemetry for a specific ownership group when paged in the middle of the night.
          </p>
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

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Telemetry Governance</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Sampling Strategy</h4>
              <p>100% of errors, 20% of slow traces (&gt; 1s), 1% baseline traffic. Dynamic sampling preserves signal while controlling storage cost.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Schema Governance</h4>
              <p>Schema registry enforces naming conventions (service.name, deployment.environment, customer.tier). Breaking changes require an RFC.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-emerald-300 mb-2">Dashboards & Notebooks</h4>
              <p>Standard dashboard templates (Golden Signals, Release Health) accelerate incident triage and provide objective measures for go/no-go decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 3: SLOs & Performance Budgets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: SLOs, SLIs & Performance Budgets</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          How do you define "good performance"? You need to set targets and measure against them. In reliability engineering we speak in a trio: <span className="font-semibold text-blue-200">Service Level Indicators (SLIs)</span> are the measurements, <span className="font-semibold text-blue-200">Service Level Objectives (SLOs)</span> are the targets, and <span className="font-semibold text-blue-200">Service Level Agreements (SLAs)</span> are the contractual promises made to customers.
        </p>

        <BigWordAlert
          term="SLO (Service Level Objective)"
          definition="A target level of service you commit to. Example: 99.9% uptime, or 95% of requests complete in under 200ms."
        />

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 my-6">
          <h3 className="text-lg font-semibold text-white mb-3">Quantifying SLIs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-300 mb-2">Availability</div>
              <p>SLI formula: <span className="font-mono">(Total good requests) / (Total requests)</span>. Source metrics: HTTP status codes from API gateway.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-300 mb-2">Latency</div>
                <p>Measure percentiles (p50, p95, p99). Use histogram buckets in Prometheus. Align with user-perceived thresholds (checkout {"<"} 1s).</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-300 mb-2">Quality</div>
              <p>Use business SLIs: successful orders / attempted orders, or pixel-perfect render rate for design system components.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700 rounded p-4">
              <div className="font-semibold text-blue-300 mb-2">Freshness</div>
              <p>Contentful micro-frontends measure "time since last sync" for personalization data. High freshness drives conversion.</p>
            </div>
          </div>
        </div>

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

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">SLO Governance Loop</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-slate-300">
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">1. Define</div>
              <p>Co-create SLOs with product, engineering, and customer success. Document rationale and user journey impact.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">2. Measure</div>
              <p>Automate SLI computation via Prometheus recording rules or Looker dashboards. Publish weekly scorecards.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">3. Decide</div>
              <p>Use error budget burn rate to gate releases. If burn &gt; 2x steady state, freeze risky deployments and focus on reliability.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <div className="font-semibold text-blue-200 mb-2">4. Learn</div>
              <p>Post-incident reviews feed reliability work into quarterly planning. Track reliability debt like product debt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 4: Incident Response */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 4: Incident Response & Post-Mortems</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Things will break. The question is: how quickly can you detect, respond, and recover? Reliability is an organizational competency that blends human factors, automation, and psychological safety.
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">On-Call Readiness</h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li>Shadowing program: new engineers shadow two incidents before taking primary on-call.</li>
              <li>Game days: quarterly chaos drills validate runbooks and communication channels.</li>
                <li>Pager fatigue guardrails: limit overnight pages to {"<"} 2/week per engineer, rotate supporting staff.</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-200 mb-3">Blameless Culture Checklist</h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li>Focus on systemic causes (tooling, process, clarity) rather than the individual who triggered the failure.</li>
              <li>Document hypotheses, not assumptions. Capture what responders believed to be true during the incident.</li>
              <li>Assign action items with owners and due dates; follow up in operations review meetings.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lesson 5: Platform Engineering & Governance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 5: Platform Engineering & Change Management</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Micro-frontends without a strong platform are just distributed headaches. Platform engineering creates paved roads that balance autonomy with guardrails. The goal is to reduce <span className="font-semibold text-indigo-200">cognitive load</span> so that product teams can focus on user value instead of infrastructure trivia.
        </p>

        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-indigo-200 mb-4">Platform Capabilities Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Golden Paths</h4>
              <p>Opinionated templates for new micro-frontends (CI/CD pipeline, observability config, design system setup). Generated via <span className="font-mono">pnpm create mfe</span>.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Internal Developer Portal</h4>
              <p>Catalog of services, owners, SLOs, runbooks, and recent deployments. Backstage, Cortex, or custom dashboards work well.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Continuous Verification</h4>
              <p>Automated smoke tests and canary analysis detect regressions before full rollout. Integrate feature flags with observability to rollback automatically.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Change Management</h4>
              <p>RFC process with template: context, proposal, alternatives, blast radius, rollout plan. Decisions archived for future teams.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Balancing Autonomy & Compliance</h3>
          <div className="space-y-4 text-slate-300 text-sm">
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Guardrails</h4>
              <p>Policy-as-code (OPA, Conftest) enforces security baselines (dependency scanning, TLS, PII handling). Violations block merges until remediated.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Feedback Loops</h4>
              <p>Monthly platform council reviews adoption metrics, developer satisfaction surveys, and backlog priorities.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded p-4">
              <h4 className="font-semibold text-indigo-200 mb-2">Knowledge Sharing</h4>
              <p>Brown-bag sessions, architecture decision records (ADRs), and internal conferences keep institutional knowledge from siloing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Concept Pages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📚 Deep Dive into Core Concepts</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Ready to study the socio-technical foundations behind this module? Each concept below explores the university-level theory and applied practices that support resilient teams and operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/concepts/team-topologies">
            <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 hover:from-indigo-900/60 hover:to-indigo-800/40 border border-indigo-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-indigo-200 mb-2 text-lg">→ Team Topologies</h4>
              <p className="text-slate-400 text-sm">Explore stream-aligned, enabling, platform, and complicated-subsystem teams with case studies and communication patterns.</p>
            </div>
          </Link>
          <Link href="/concepts/platform-engineering">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 hover:from-blue-900/60 hover:to-blue-800/40 border border-blue-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-blue-200 mb-2 text-lg">→ Platform Engineering</h4>
              <p className="text-slate-400 text-sm">Understand how internal platforms create paved roads, golden paths, and self-service governance.</p>
            </div>
          </Link>
          <Link href="/concepts/observability">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 hover:from-purple-900/60 hover:to-purple-800/40 border border-purple-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-purple-200 mb-2 text-lg">→ Observability Engineering</h4>
              <p className="text-slate-400 text-sm">Dive into telemetry pipelines, signal-to-noise ratios, and distributed tracing analysis techniques.</p>
            </div>
          </Link>
          <Link href="/concepts/service-level-objectives">
            <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 hover:from-emerald-900/60 hover:to-emerald-800/40 border border-emerald-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-emerald-200 mb-2 text-lg">→ Service Level Objectives</h4>
              <p className="text-slate-400 text-sm">Statistical rigor for SLIs, budget burn alerts, and multi-dimensional SLO hierarchies.</p>
            </div>
          </Link>
          <Link href="/concepts/error-budgets">
            <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/20 hover:from-amber-900/60 hover:to-amber-800/40 border border-amber-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-amber-200 mb-2 text-lg">→ Error Budgets</h4>
              <p className="text-slate-400 text-sm">Link product velocity to reliability risk using burn-rate models and governance playbooks.</p>
            </div>
          </Link>
          <Link href="/concepts/incident-response">
            <div className="bg-gradient-to-br from-rose-900/40 to-rose-800/20 hover:from-rose-900/60 hover:to-rose-800/40 border border-rose-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-rose-200 mb-2 text-lg">→ Incident Response</h4>
              <p className="text-slate-400 text-sm">Study incident command systems, communication archetypes, and resilience engineering research.</p>
            </div>
          </Link>
          <Link href="/concepts/developer-experience">
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 hover:from-cyan-900/60 hover:to-cyan-800/40 border border-cyan-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-cyan-200 mb-2 text-lg">→ Developer Experience</h4>
              <p className="text-slate-400 text-sm">Metrics, internal product management, and UX research techniques for engineering tooling.</p>
            </div>
          </Link>
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

