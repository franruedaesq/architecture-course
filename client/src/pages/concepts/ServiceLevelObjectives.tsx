import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function ServiceLevelObjectivesConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("service-level-objectives");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Reliability Mathematics</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Service Level Objectives (SLOs) translate user experience expectations into measurable targets. They provide a common language for engineering, product, and business stakeholders to reason about reliability trade-offs.
        </p>

        <BigWordAlert
          term="Service Level Indicator (SLI)"
          definition="A carefully defined metric that approximates the user's experience—such as the percentage of successful requests or the latency of the 95th percentile of checkout calls."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Designing SLIs</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Event Selection</h3>
            <p className="text-slate-300 text-sm">
              Identify the discrete events that map to user journeys: "checkout request" or "render product page". Ensure the event is observable with existing telemetry or plan instrumentation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Success Criteria</h3>
            <p className="text-slate-300 text-sm">
              Define what counts as "good." For latency metrics, set a threshold (e.g., 95% of checkout requests complete in {"<"} 800ms). For error rate, choose acceptable HTTP status codes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Windowing</h3>
            <p className="text-slate-300 text-sm">
              SLIs are calculated over rolling windows (last 30 days, last 1 hour). Different windows serve different purposes: long windows for reporting, short windows for alerting.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Setting Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Choosing the Target</h3>
            <p className="text-slate-300 text-sm">
              Balance ambition with feasibility. Start with historical performance plus a margin: if uptime has been 99.7%, set the initial SLO at 99.6% and improve iteratively.
            </p>
          </div>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Hierarchical SLOs</h3>
            <p className="text-slate-300 text-sm">
              Compose SLOs across layers: product SLO (checkout success rate) depends on micro-frontend SLOs, BFF SLOs, and downstream API SLOs. This mapping highlights where to invest reliability effort.
            </p>
          </div>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Customer Commitments</h3>
            <p className="text-slate-300 text-sm">
              Service Level Agreements (SLAs) often lag SLOs by a small margin. For premium customers you might promise 99.9% uptime while internally targeting 99.95% to maintain a buffer.
            </p>
          </div>
          <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-200 mb-3">Alerting Strategy</h3>
            <p className="text-slate-300 text-sm">
              Burn-rate alerts detect when the objective is at risk. Use multiple windows (5 minutes, 1 hour, 6 hours) to capture both acute failures and slow degradations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Governance Loop</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-4 text-slate-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Review Cadence</h3>
            <p>Quarterly reviews assess whether SLOs still represent user expectations. Sunsetting or tightening an SLO requires cross-functional sign-off.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Data Quality</h3>
            <p>Telemetry outages or sampling errors can corrupt SLI calculations. Monitor "SLO coverage"—the percentage of events successfully measured.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">Decision Making</h3>
            <p>When error budgets are healthy, ship faster. When budgets are exhausted, prioritize reliability work and communicate trade-offs to stakeholders.</p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
