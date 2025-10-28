import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function TeamTopologiesConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("team-topologies");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Why Team Topologies Matter</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Team Topologies is a socio-technical framework for designing software teams so that the communication structure of the organization supports the architecture it is trying to build. In micro-frontend programs, the topology of the team is as important as the topology of the runtime modules.
        </p>

        <BigWordAlert
          term="Team API"
          definition="An explicit contract that defines what a team owns, how to engage with them, what they promise, and how they communicate. Well-designed team APIs reduce coordination overhead and make organizations more predictable."
        />

        <p className="text-slate-300 text-lg leading-relaxed mt-6">
          Teams are not interchangeable resources. They are long-lived units that accumulate domain knowledge, delivery capabilities, and trust. Optimizing throughput requires aligning team boundaries with product streams so that changes can flow with minimal dependencies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Four Fundamental Team Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-200 mb-3">Stream-Aligned Teams</h3>
            <p className="text-slate-300 text-sm mb-3">
              Own a value stream end-to-end: a checkout journey, a seller portal, a marketing funnel. Stream-aligned teams ship user-facing changes daily because their dependencies are minimized.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Use product metrics as north star (conversion rate, retention).</li>
              <li>Expect to maintain their own deployment pipelines.</li>
              <li>Partner closely with product managers and designers.</li>
            </ul>
          </div>
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-200 mb-3">Platform Teams</h3>
            <p className="text-slate-300 text-sm mb-3">
              Provide self-service capabilities: observability, CI/CD, shared UI libraries. Their success metric is <span className="font-semibold text-indigo-100">reduced cognitive load</span> for stream-aligned teams.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Offer paved roads with clear defaults and documentation.</li>
              <li>Operate as an internal product team with roadmaps and SLAs.</li>
              <li>Measure platform adoption and satisfaction.</li>
            </ul>
          </div>
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-200 mb-3">Enabling Teams</h3>
            <p className="text-slate-300 text-sm mb-3">
              Short-lived specialists who unblock others. They do not ship features themselves; they teach skills (accessibility, security, performance) and then rotate out.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Run capability assessments and co-implement improvements.</li>
              <li>Create playbooks and training programs.</li>
              <li>Measure success by reduced dependency on their involvement.</li>
            </ul>
          </div>
          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-200 mb-3">Complicated-Subsystem Teams</h3>
            <p className="text-slate-300 text-sm mb-3">
              Own areas requiring deep specialist expertise—pricing engines, fraud detection, rendering pipelines. Their interface must hide complexity without blocking change.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Publish clear APIs and non-functional guarantees.</li>
              <li>Invest in documentation and enablement to avoid becoming bottlenecks.</li>
              <li>Collaborate with stream-aligned teams during critical initiatives.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Design Principles</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Cognitive Load as a Constraint</h3>
            <p className="text-slate-300 text-sm">
              Map the systems, domains, and tools a team must understand to deliver changes. When cognitive load is too high, split responsibilities or invest in platform abstractions.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Interaction Modes</h3>
            <p className="text-slate-300 text-sm mb-3">
              Teams collaborate in three canonical modes. Choosing the right mode prevents thrash:
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li><span className="font-semibold text-indigo-200">Collaboration:</span> Short burst of close work to design a new capability.</li>
              <li><span className="font-semibold text-indigo-200">X-as-a-Service:</span> Clear request/response interactions with defined SLOs.</li>
              <li><span className="font-semibold text-indigo-200">Facilitating:</span> One team mentors another to build long-term skills.</li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Team Lifecycles</h3>
            <p className="text-slate-300 text-sm">
              Teams evolve. Use quarterly topology reviews to examine whether new dependencies emerged, whether a team should spin off a sub-team, or whether a temporary enabling mission is complete.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Putting It Into Practice</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6 space-y-4 text-slate-300 text-sm">
          <div>
            <h3 className="text-lg font-semibold text-indigo-200 mb-2">Topology Design Workshop</h3>
            <p>Bring engineering, product, and operations leaders together with architecture diagrams. Identify bottlenecks, list dependencies between teams, and sketch the desired future interaction model.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-200 mb-2">Team Charter Template</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mission & value stream</li>
              <li>Key metrics and SLOs</li>
              <li>Interfaces owned (APIs, UI surfaces)</li>
              <li>Contact modes (Slack channel, office hours, escalation)</li>
              <li>Top 3 current risks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-200 mb-2">Continuous Improvement</h3>
            <p>Review charters and topology diagrams during quarterly planning. Link structural changes to business outcomes such as deployment frequency, lead time, and revenue impact.</p>
          </div>
        </div>
      </section>
    </ConceptPage>
  );
}
