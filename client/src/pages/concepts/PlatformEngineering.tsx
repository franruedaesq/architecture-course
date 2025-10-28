import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function PlatformEngineeringConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("platform-engineering");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">From DevOps to Platform Engineering</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Platform engineering builds reusable, self-service infrastructure that accelerates delivery. Instead of every product team reinventing CI/CD, observability, and deployment patterns, a dedicated platform group provides paved roads backed by reliability guarantees.
        </p>

        <BigWordAlert
          term="Internal Developer Platform (IDP)"
          definition="A curated set of tools, services, and workflows that enable developers to deliver value autonomously. An IDP is operated as a product: it has users (developers), SLOs, feature roadmaps, and feedback loops."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Provisioning & Environments</h3>
            <p className="text-slate-300 text-sm mb-3">
              Infrastructure as Code (Terraform, Pulumi) with guardrails ensures every micro-frontend gets the same baseline. Ephemeral environments spin up for pull requests so QA and designers can review changes quickly.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Blueprint templates for new services.</li>
              <li>Automated DNS, TLS, and secret rotation.</li>
              <li>Cost-aware quotas to prevent runaway spend.</li>
            </ul>
          </div>
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Delivery & Release Management</h3>
            <p className="text-slate-300 text-sm mb-3">
              CI pipelines enforce quality gates (lint, tests, accessibility) while CD pipelines handle blue/green or canary deployments. Feature flag integration allows safe experimentation.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Automated rollback triggered by SLO violations.</li>
              <li>Artifact provenance tracking (SBOM, signatures).</li>
              <li>Release analytics (deployment frequency, failure rate).</li>
            </ul>
          </div>
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Observability & Runtime Tooling</h3>
            <p className="text-slate-300 text-sm mb-3">
              Centralized logging, metrics, tracing, and alerting pipelines ship with sensible defaults. Teams extend them with domain-specific telemetry without repeating boilerplate.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Golden signal dashboards (latency, errors, saturation).</li>
              <li>Service catalog with ownership metadata.</li>
              <li>Runbook automation to codify incident responses.</li>
            </ul>
          </div>
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-3">Developer Experience & Support</h3>
            <p className="text-slate-300 text-sm mb-3">
              Platform teams act as product managers for internal tooling: onboarding flows, documentation portals, office hours, and customer feedback loops.
            </p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-2">
              <li>Support rotations with defined SLAs.</li>
              <li>Usage analytics to inform prioritization.</li>
              <li>Training programs and certification paths.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Operating the Platform as a Product</h2>
        <div className="space-y-4">
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">User Research & Feedback</h3>
            <p className="text-slate-300 text-sm">
              Conduct regular developer interviews, Net Promoter Score (NPS) surveys, and usability tests. Treat platform features like user-facing products—prototype, iterate, measure satisfaction.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Roadmapping & Prioritization</h3>
            <p className="text-slate-300 text-sm">
              Balance foundational work (security, compliance) with developer-facing improvements. Use cost-of-delay to decide which capabilities to build next.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Service Level Objectives</h3>
            <p className="text-slate-300 text-sm">
              Platform components have their own SLOs (build time, environment provisioning time, incident response). Publishing these builds trust with stream-aligned teams.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Maturity Roadmap</h2>
        <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-6">
          <table className="w-full text-left text-sm text-slate-300">
            <thead>
              <tr className="text-slate-200">
                <th className="py-2 pr-4">Stage</th>
                <th className="py-2 pr-4">Characteristics</th>
                <th className="py-2">Signals to Advance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="py-3 pr-4 font-semibold text-blue-200">Ad Hoc</td>
                <td className="py-3 pr-4">Each team builds its own pipelines and environments.</td>
                <td className="py-3">Deployments fail often; onboarding takes weeks.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-blue-200">Paved Roads</td>
                <td className="py-3 pr-4">Central templates, shared libraries, and guardrails.</td>
                <td className="py-3">Platform satisfaction improves, duplicated tooling declines.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-blue-200">Productized</td>
                <td className="py-3 pr-4">Dedicated product management, formal SLOs, developer portal.</td>
                <td className="py-3">Teams self-serve environments; platform usage metrics guide investment.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-blue-200">Ecosystem</td>
                <td className="py-3 pr-4">Extensible platform with plug-ins, APIs, and community contributions.</td>
                <td className="py-3">Internal hackathons produce new platform features; external audits praise governance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ConceptPage>
  );
}
