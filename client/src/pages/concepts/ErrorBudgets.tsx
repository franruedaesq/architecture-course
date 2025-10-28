import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function ErrorBudgetsConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("error-budgets");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What Is an Error Budget?</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          An error budget quantifies how much unreliability you are willing to tolerate before feature work must slow down. It is the dual of your SLO: if your SLO is 99.9% availability, your error budget is 0.1% unavailability over the measurement window.
        </p>

        <BigWordAlert
          term="Burn Rate"
          definition="A rate-of-change measurement that expresses how quickly you are consuming your error budget. A 2x burn rate means you will exhaust the remaining budget in half the time."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Budget Math</h2>
        <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-6 space-y-4 text-slate-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Example</h3>
            <p>Monthly SLO: 99.9% → monthly budget = 43.2 minutes of allowed downtime.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Burn Rate Formula</h3>
            <p>Burn rate = (budget consumed in last X minutes) / (budget allowed in X minutes). Alert when burn rate &gt; 2 for 1 hour or &gt; 4 for 5 minutes.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Multi-Window Alerts</h3>
            <p>Short windows catch catastrophic outages, longer windows catch slow leaks. Combine 5-minute, 1-hour, and 24-hour windows.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Governance Playbook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Green Zone</h3>
            <p className="text-slate-300 text-sm">Error budget burn {"<"} 1. Ship features freely, experiment, and reduce reliability toil.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Yellow Zone</h3>
            <p className="text-slate-300 text-sm">Burn rate between 1 and 2. Require additional safeguards (canary releases, feature flags). Product managers and tech leads review risk.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Red Zone</h3>
            <p className="text-slate-300 text-sm">Burn rate &gt; 2. Freeze non-critical launches, allocate engineers to reliability work, and schedule executive updates.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Integrating with Delivery</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-4 text-slate-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Release Gates</h3>
            <p>Deployment pipelines check burn rates before promoting to production. If the budget is exhausted, the pipeline requires director approval.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Post-Incident Reviews</h3>
            <p>Every incident updates the burn-rate dashboard with root cause, remediation plan, and expected time to recover budget.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Portfolio Planning</h3>
            <p>Quarterly planning reserves 20-30% engineering capacity for reliability improvements when burn rates trend high.</p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
