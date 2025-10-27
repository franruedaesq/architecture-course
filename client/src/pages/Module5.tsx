import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import { CheckCircle2 } from "lucide-react";

export default function Module5() {
  return (
    <ModuleLayout
      moduleNumber={5}
      title="The Human Element"
      subtitle="Team & Process"
      description="Discover how to maintain developer experience, consistency, and quality in a complex architecture."
      previousModule={4}
      nextModule={null}
    >
      {/* Lesson 1: Developer Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Developer Experience (DX) - The Efficiency Engine</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A complex architecture is only sustainable if the <span className="font-semibold">Developer Experience (DX)</span> is simple. If it takes a week for a new developer to set up the 15 microservices and 5 micro-frontends locally, the architecture will fail.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The <span className="font-semibold text-yellow-300">weird part</span> is that in this setup, DX is not a luxury; it's a <span className="font-semibold text-blue-300">core non-functional requirement</span>. Tools must be in place to allow a developer to spin up <span className="italic">just</span> the one micro-frontend they are working on, while mocking or pointing to the production versions of all the others.
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">DX Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Monorepo Setup</h4>
                <p className="text-slate-300 text-sm">Use a monorepo (pnpm, yarn workspaces, or Nx) to manage all micro-frontends and shared libraries in one place.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Local Development Mode</h4>
                <p className="text-slate-300 text-sm">Developers should be able to run a single micro-frontend locally with mocked dependencies.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Shared Development Tools</h4>
                <p className="text-slate-300 text-sm">ESLint, Prettier, TypeScript, and testing frameworks should be consistent across all teams.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-1">Documentation</h4>
                <p className="text-slate-300 text-sm">Clear documentation on how to set up, develop, test, and deploy each micro-frontend.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lesson 2: Shared Component Libraries */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Shared Component Libraries - The Consistency Enforcer</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With different teams owning different Micro-Frontends, how do you ensure the website looks like one cohesive product? The answer is a <span className="font-semibold">Shared Component Library</span>.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A central package of UI components (buttons, inputs, navigation bars) that all teams are <span className="italic">required</span> to use. This ensures a consistent look and feel across the entire stitched-together application.
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Shared Component Library Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 p-4 rounded overflow-x-auto text-xs text-slate-300 font-mono">
{`@company/ui/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Navigation.tsx
│   └── ...
├── hooks/
│   ├── useTheme.ts
│   ├── useMediaQuery.ts
│   └── ...
├── styles/
│   ├── colors.css
│   ├── typography.css
│   └── variables.css
├── package.json
└── README.md`}
            </pre>
          </CardContent>
        </Card>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">Benefits of Shared Components</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Consistency:</span> All teams use the same UI components</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Efficiency:</span> Developers don't reinvent the wheel</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Accessibility:</span> Components are tested once, used everywhere</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Design System:</span> Single source of truth for design tokens</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Lesson 3: CI/CD & Deployment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: CI/CD & Deployment - The Independent Flow</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The entire point of Microservices and Micro-Frontends is <span className="font-semibold text-blue-300">independent deployment</span>.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The <span className="font-semibold">CI/CD (Continuous Integration/Continuous Deployment)</span> pipeline must be set up so that Team A can deploy a change to their "Review Micro-Frontend" at 3 PM on a Tuesday without having to coordinate with any other team. This high-velocity deployment is the ultimate measure of success for the entire architecture.
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">CI/CD Pipeline for Micro-Frontends</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-white">Developer Push</p>
                  <p className="text-slate-400 text-sm">Developer pushes code to the feature branch</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-white">Automated Tests</p>
                  <p className="text-slate-400 text-sm">Unit tests, integration tests, and linting run automatically</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-white">Build</p>
                  <p className="text-slate-400 text-sm">Code is built and bundled (with code-splitting)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <p className="font-semibold text-white">Deploy to Staging</p>
                  <p className="text-slate-400 text-sm">Micro-frontend is deployed to a staging environment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <p className="font-semibold text-white">E2E Tests</p>
                  <p className="text-slate-400 text-sm">End-to-end tests run against the stitched application</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">6</div>
                <div>
                  <p className="font-semibold text-white">Deploy to Production</p>
                  <p className="text-slate-400 text-sm">Approved changes are deployed to production independently</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">CI/CD Challenges</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-yellow-400 font-bold">⚠</span>
              <span><span className="font-semibold">Dependency Management:</span> Ensure all micro-frontends are compatible with the shared libraries</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 font-bold">⚠</span>
              <span><span className="font-semibold">Staging Environment:</span> Maintain a staging environment that mirrors production</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 font-bold">⚠</span>
              <span><span className="font-semibold">Rollback Strategy:</span> Be able to quickly rollback a broken deployment</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Lesson 4: Testing Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 4: Testing Strategy - The Quality Gate</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Testing is now a two-part problem:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">Testing in Isolation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <p>Each team must be able to test their Micro-Frontend or Microservice independently.</p>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-blue-300">Unit Tests</p>
                <p>Test individual components and functions</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-purple-300">Integration Tests</p>
                <p>Test how components work together</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-green-300">Visual Tests</p>
                <p>Test UI appearance across browsers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">End-to-End (E2E) Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <p>Test the final, "stitched" application to ensure all the independently deployed pieces work together seamlessly.</p>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-blue-300">User Flows</p>
                <p>Test complete user journeys (browse → add to cart → checkout)</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-purple-300">Integration Tests</p>
                <p>Test how micro-frontends interact with each other</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded space-y-2">
                <p className="font-semibold text-green-300">Performance Tests</p>
                <p>Test Core Web Vitals and performance metrics</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Testing Pyramid for Micro-Frontends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm mb-4">
                The testing pyramid shows the recommended distribution of tests:
              </p>

              <div className="flex flex-col-reverse items-center gap-2">
                {/* E2E Tests */}
                <div className="w-full max-w-sm">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded text-center text-white font-semibold text-sm">
                    E2E Tests (10%)
                  </div>
                  <p className="text-slate-400 text-xs mt-2 text-center">Test complete user flows in the stitched application</p>
                </div>

                {/* Integration Tests */}
                <div className="w-full max-w-2xl">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded text-center text-white font-semibold text-sm">
                    Integration Tests (30%)
                  </div>
                  <p className="text-slate-400 text-xs mt-2 text-center">Test how components and services work together</p>
                </div>

                {/* Unit Tests */}
                <div className="w-full max-w-4xl">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded text-center text-white font-semibold text-sm">
                    Unit Tests (60%)
                  </div>
                  <p className="text-slate-400 text-xs mt-2 text-center">Test individual components and functions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Takeaway */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The Final Takeaway</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Modern web architecture is a complex series of trade-offs. We broke the Monolith to gain speed and independent deployment, but we created new problems—Hydration cost, stitching complexity, and distributed testing.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Understanding the "weird parts" is understanding these trade-offs. It's understanding that:
        </p>
        <ul className="space-y-3 text-slate-300 mb-6">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>SSR makes the page <span className="italic">look</span> fast, but Hydration makes it <span className="italic">feel</span> slow</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Micro-Frontends enable independent deployment, but require careful stitching and composition</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The BFF is a necessary compromise that violates clean separation of concerns</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Developer Experience and team processes are as important as the technical architecture</span>
          </li>
        </ul>
        <p className="text-slate-300 text-lg leading-relaxed">
          The goal is not to build the "perfect" architecture—it's to build the architecture that best serves your business goals, your team's capabilities, and your users' needs.
        </p>
      </section>

      {/* Back to Home */}
      <div className="flex justify-center">
        <Link href="/">
          <a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg">
              Back to Course Home
            </Button>
          </a>
        </Link>
      </div>
    </ModuleLayout>
  );
}

