import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function IncidentResponseConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("incident-response");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Incident Command Basics</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Incident response borrows from emergency management. Establishing clear roles and communication channels reduces cognitive overload when systems fail. The goal is to restore service quickly while preserving evidence for later analysis.
        </p>

        <BigWordAlert
          term="Incident Commander"
          definition="The single decision-maker during an incident. They coordinate response, delegate tasks, and maintain a shared timeline. The commander does not fix the issue directly—they orchestrate the responders."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Roles & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
          <div className="bg-rose-900/30 border border-rose-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Incident Commander</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Owns the decision log and status updates.</li>
              <li>Assigns communication leads and subject matter experts.</li>
              <li>Declares severity level and drives mitigation strategy.</li>
            </ul>
          </div>
          <div className="bg-rose-900/30 border border-rose-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Operations Lead</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Executes technical mitigations and coordinates responders.</li>
              <li>Tracks hypotheses, tests, and system state.</li>
              <li>Escalates when additional expertise is required.</li>
            </ul>
          </div>
          <div className="bg-rose-900/30 border border-rose-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Communications Lead</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Publishes updates to stakeholders (status page, Slack, executives).</li>
              <li>Maintains a public-facing timeline and expected next update.</li>
              <li>Coordinates with customer support and marketing if needed.</li>
            </ul>
          </div>
          <div className="bg-rose-900/30 border border-rose-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Scribe</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Documents events, decisions, and timestamps.</li>
              <li>Ensures logs and dashboards are captured for post-incident review.</li>
              <li>Supports post-mortem preparation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Communication Patterns</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 text-slate-300 text-sm space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Single Source of Truth</h3>
            <p>All updates flow through a dedicated incident channel with pinned status message. Side conversations are summarized back into the main channel.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Structured Updates</h3>
            <p>Use a template: <span className="font-mono">Status | Impact | Actions | Next Update</span>. Cadence depends on severity (every 15 minutes for SEV-1).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Handoff Protocol</h3>
            <p>Long incidents require shift changes. Document current mitigation steps, outstanding tasks, and decision context before handing off.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Learning from Incidents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Blameless Post-Mortems</h3>
            <p>Focus on system dynamics: what guardrails failed, what signals were missing, what processes slowed recovery. Assign action items with owners and due dates.</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-200 mb-2">Operational Reviews</h3>
            <p>Monthly forums review incident trends, error budget health, and on-call load. This is the feedback loop that funds reliability work.</p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
