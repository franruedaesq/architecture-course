import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function DeveloperExperienceConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("developer-experience");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Treat DX as a Product</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Developer Experience (DX) is the usability of the engineering ecosystem. When workflows are slow or confusing, features ship slower and reliability degrades. High-performing organizations assign product managers, designers, and engineers to build internal tools intentionally.
        </p>

        <BigWordAlert
          term="InnerSource"
          definition="Applying open-source collaboration patterns within a company. Teams share reusable tooling, accept contributions via pull requests, and publish documentation openly."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">DX Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
          <div className="bg-cyan-900/30 border border-cyan-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">System Metrics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Build duration (p50, p95).</li>
              <li>Time from git push to production.</li>
              <li>Flake rate of automated tests.</li>
            </ul>
          </div>
          <div className="bg-cyan-900/30 border border-cyan-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Perception Metrics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Developer Satisfaction (DevSat) surveys.</li>
              <li>System Usability Scale (SUS) for internal tools.</li>
              <li>Support ticket volume and time-to-resolution.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Experience Principles</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-4 text-slate-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Golden Paths</h3>
            <p>Provide opinionated templates that cover 80% of use cases: repository structure, linting, deployment pipeline, observability, feature flags.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Self-Service</h3>
            <p>Developers can create environments, request secrets, and deploy without filing tickets. Access management is automated through policy-as-code.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Feedback Loops</h3>
            <p>Integrate product analytics into internal tools (funnel drop-off, task completion time) and review results in a monthly DX council.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Operationalizing DX</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">Support Model</h3>
            <p>Offer office hours, a dedicated support channel, and escalation SLOs (e.g., respond to P1 tooling incidents in 30 minutes). Rotate platform engineers to stay close to customer pain points.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-200 mb-2">InnerSource Governance</h3>
            <p>Publish contribution guidelines, code review expectations, and maintainers for each internal package. Recognize contributors publicly to encourage participation.</p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
