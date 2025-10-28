import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function ObservabilityConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("observability");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Defining Observability</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Observability extends beyond traditional monitoring by emphasizing the ability to interrogate systems and discover unknown failure modes. It draws from control theory: if you can model the internal state of a system through its outputs, you can control it.
        </p>

        <BigWordAlert
          term="High Cardinality"
          definition="Telemetry dimensions (user_id, experiment_id, device model) that explode the number of unique time-series. Observability platforms must handle high cardinality to support debugging of nuanced issues."
        />

        <p className="text-slate-300 text-lg leading-relaxed mt-6">
          Effective observability is opinionated about what signals matter (latency, traffic, errors, saturation) but flexible enough to slice them by any attribute. This balance keeps storage costs manageable while empowering engineers to answer new questions during incidents.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Telemetry Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-200 mb-3">Instrumentation</h3>
            <p className="text-slate-300 text-sm mb-3">
              Adopt OpenTelemetry for consistent semantics. Instrument every boundary: browser events, CDN edges, API gateways, queue consumers, and databases.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Semantic conventions standardize attribute names.</li>
              <li>Auto-instrumentation jump-starts coverage.</li>
              <li>Manual spans capture domain-specific milestones.</li>
            </ul>
          </div>
          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-200 mb-3">Pipelines</h3>
            <p className="text-slate-300 text-sm mb-3">
              The OpenTelemetry Collector (or similar agents) receive data, enrich it with resource attributes (team, environment, version), and fan it out to storage backends.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Tail-based sampling retains slow requests.</li>
              <li>Metrics exporters aggregate counters and histograms.</li>
              <li>Log processors redact sensitive information.</li>
            </ul>
          </div>
          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-200 mb-3">Storage & Query</h3>
            <p className="text-slate-300 text-sm mb-3">
              Choose storage based on query patterns: time-series databases for metrics, columnar stores for logs, trace backends optimized for span graphs.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Prometheus + Mimir/Thanos for metrics retention.</li>
              <li>Loki/Elastic with partitioning on service + team.</li>
              <li>Jaeger/Tempo with adaptive indexing for hot traces.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Signals and Analysis Techniques</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Golden Signals</h3>
            <p className="text-slate-300 text-sm">
              Latency, traffic, errors, and saturation create a minimal dashboard for every service. Pair them with service-level objectives to understand when customer experience is at risk.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Exploratory Queries</h3>
            <p className="text-slate-300 text-sm mb-3">
              Use tracing and logs to pivot across dimensions:
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Filter checkout traces by experiment variant to detect feature regressions.</li>
              <li>Correlate Core Web Vitals with backend latency percentiles.</li>
              <li>Cluster error logs by stack trace signature to prioritize fixes.</li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">SLO Alerts & Burn Rate</h3>
            <p className="text-slate-300 text-sm">
              Burn-rate alerts monitor how quickly the error budget is consumed (e.g., "2% of budget burned in 1 hour"). They catch runaway incidents faster than fixed thresholds.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Organizational Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Observability Guild</h3>
            <p className="text-slate-300 text-sm">
              Cross-team working group that curates instrumentation standards, reviews dashboards, and shares post-incident learnings. They maintain the schema registry for telemetry attributes.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-200 mb-2">Playbooks & Training</h3>
            <p className="text-slate-300 text-sm">
              Onboarding includes observability bootcamps: how to use query languages (PromQL, LogQL), how to interpret traces, and how to build runbooks that link to relevant dashboards.
            </p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
