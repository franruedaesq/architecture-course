import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function MicroFrontendsConcept() {
  return (
    <ConceptPage
      title="Micro-Frontends"
      subtitle="Breaking the frontend into independently deployable applications"
      previousConcept={{ path: "/module/2", label: "Back to Module 2" }}
      nextConcept={{ path: "/concepts/server-side-rendering", label: "Server-Side Rendering" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What are Micro-Frontends?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Micro-frontends apply the microservices philosophy to the frontend. Instead of a single monolithic frontend application, you break it into smaller, independently deployable frontend applications that work together to form a complete user interface.
        </p>

        <BigWordAlert
          term="Micro-Frontends"
          definition="An architectural approach where a frontend application is decomposed into smaller, semi-independent 'micro' applications that work together. Each micro-frontend is owned by a team, can be developed independently, and can be deployed without coordinating with other teams."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The key insight is that just as microservices allow backend teams to work independently, micro-frontends allow frontend teams to work independently on different parts of the UI.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Problem Micro-Frontends Solve</h2>
        
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Monolithic Frontend Problems</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">1. Team Bottlenecks</h4>
              <p>100 developers working on a single codebase. Merge conflicts, coordination overhead, slow deployments.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">2. Technology Lock-in</h4>
              <p>Entire frontend must use the same framework (React, Vue, Angular). Can't adopt new technologies without rewriting everything.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">3. Deployment Risk</h4>
              <p>One bug in the header breaks the entire application. Must deploy everything together.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">4. Bundle Size</h4>
              <p>All code is bundled together. Users download code for features they never use.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">5. Scaling Challenges</h4>
              <p>Can't scale different parts of the UI independently. If the header is slow, the entire app feels slow.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">Micro-Frontends Benefits</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Team Independence</h4>
              <p>Each team owns a micro-frontend. Can deploy independently without coordinating.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Technology Flexibility</h4>
              <p>Each micro-frontend can use different frameworks (React, Vue, Svelte, etc.).</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Selective Deployment</h4>
              <p>Deploy only the micro-frontend that changed. No need to redeploy the entire app.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Smaller Bundles</h4>
              <p>Each micro-frontend is bundled separately. Users only download what they need.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Fault Isolation</h4>
              <p>If one micro-frontend crashes, others continue working.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Micro-Frontend Composition Patterns</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">1. Build-Time Composition</h3>
            <p className="text-slate-300 text-sm mb-4">
              Micro-frontends are combined at build time. Each micro-frontend is a package that gets imported and bundled together.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Build-time composition</div>
              <div className="mt-2">import Header from '@company/header';</div>
              <div>import Sidebar from '@company/sidebar';</div>
              <div>import Content from '@company/content';</div>
              <div className="mt-2">export default function App() {`{`}</div>
              <div className="ml-4">return (</div>
              <div className="ml-8">{`<>`}</div>
              <div className="ml-12">{`<Header />`}</div>
              <div className="ml-12">{`<Sidebar />`}</div>
              <div className="ml-12">{`<Content />`}</div>
              <div className="ml-8">{`</>`}</div>
              <div className="ml-4">);</div>
              <div>{`}`}</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>Simple, easy to understand, shared dependencies</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>Must redeploy entire app for any change, tight coupling</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">2. Runtime Composition (Module Federation)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Micro-frontends are loaded at runtime. Each micro-frontend is deployed separately and loaded dynamically.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Runtime composition with Module Federation</div>
              <div className="mt-2">const Header = React.lazy(() {`=>`}</div>
              <div className="ml-4">import('@company/header/Header')</div>
              <div>);</div>
              <div className="mt-2">export default function App() {`{`}</div>
              <div className="ml-4">return (</div>
              <div className="ml-8">{`<Suspense fallback={<div>Loading...</div>}>`}</div>
              <div className="ml-12">{`<Header />`}</div>
              <div className="ml-8">{`</Suspense>`}</div>
              <div className="ml-4">);</div>
              <div>{`}`}</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>Independent deployment, runtime flexibility, shared dependencies</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>More complex, runtime overhead, potential version conflicts</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">3. Server-Side Composition</h3>
            <p className="text-slate-300 text-sm mb-4">
              The server assembles the page from multiple micro-frontend services. Each service renders its part of the HTML.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Server-side composition</div>
              <div className="mt-2">app.get('/', async (req, res) {`=>`} {`{`}</div>
              <div className="ml-4">const header = await fetch('header-service/render');</div>
              <div className="ml-4">const sidebar = await fetch('sidebar-service/render');</div>
              <div className="ml-4">const content = await fetch('content-service/render');</div>
              <div className="mt-2 text-slate-400">// Combine HTML</div>
              <div className="ml-4">const html = `</div>
              <div className="ml-8">{`<html>`}</div>
              <div className="ml-12">{`<body>`}</div>
              <div className="ml-16">{`\${header}`}</div>
              <div className="ml-16">{`\${sidebar}`}</div>
              <div className="ml-16">{`\${content}`}</div>
              <div className="ml-12">{`</body>`}</div>
              <div className="ml-8">{`</html>`}</div>
              <div className="ml-4">`;</div>
              <div className="ml-4">res.send(html);</div>
              <div>{`}`});</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>True independence, can use different tech stacks, easy to scale</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>Server latency (must wait for all services), no client-side interactivity</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">4. Edge Composition</h3>
            <p className="text-slate-300 text-sm mb-4">
              Micro-frontends are composed at the edge (CDN) using edge computing. Combines benefits of server-side and client-side composition.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <p>Low latency, independent deployment, global distribution</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <p>Requires edge computing infrastructure, complex caching</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Micro-Frontend Challenges</h2>
        
        <div className="space-y-4">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">1. Shared State Management</h4>
            <p className="text-slate-300 text-sm mb-3">
              How do micro-frontends share state? If the header changes the user's theme, how does the sidebar know?
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Solution: Event-based communication</div>
              <div className="mt-2">// Header micro-frontend</div>
              <div>window.dispatchEvent(new CustomEvent('theme-changed', {`{`}</div>
              <div className="ml-4">detail: {`{`} theme: 'dark' {`}`}</div>
              <div>{`}`}));</div>
              <div className="mt-2">// Sidebar micro-frontend</div>
              <div>window.addEventListener('theme-changed', (e) {`=>`} {`{`}</div>
              <div className="ml-4">setTheme(e.detail.theme);</div>
              <div>{`}`});</div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">2. Dependency Management</h4>
            <p className="text-slate-300 text-sm mb-3">
              If Header uses React 18 and Sidebar uses React 17, you'll have two copies of React in the bundle.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Solution: Shared dependencies with Module Federation</div>
              <div className="mt-2">shared: {`{`}</div>
              <div className="ml-4">react: {`{`}</div>
              <div className="ml-8">singleton: true, // Only one instance</div>
              <div className="ml-8">requiredVersion: '^18.0.0',</div>
              <div className="ml-8">strictVersion: false</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">3. Routing & Navigation</h4>
            <p className="text-slate-300 text-sm mb-3">
              How do micro-frontends handle routing? If the user clicks a link in Header, which micro-frontend handles the navigation?
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Solution: Centralized router</div>
              <div className="mt-2">const router = new Router();</div>
              <div>router.on('/products', () {`=>`} {`{`}</div>
              <div className="ml-4">loadMicroFrontend('products-mfe');</div>
              <div>{`}`});</div>
              <div>router.on('/checkout', () {`=>`} {`{`}</div>
              <div className="ml-4">loadMicroFrontend('checkout-mfe');</div>
              <div>{`}`});</div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">4. Performance & Bundle Size</h4>
            <p className="text-slate-300 text-sm mb-3">
              Multiple bundles mean more JavaScript to download. How do you optimize?
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-blue-300 mb-1">Solutions</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Code splitting: Only load micro-frontends when needed</li>
                  <li>Lazy loading: Load below-the-fold micro-frontends later</li>
                  <li>Shared dependencies: Use Module Federation to share libraries</li>
                  <li>Caching: Cache micro-frontend bundles aggressively</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">5. Testing & Debugging</h4>
            <p className="text-slate-300 text-sm mb-3">
              How do you test micro-frontends together? How do you debug issues that span multiple micro-frontends?
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-blue-300 mb-1">Solutions</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Integration tests: Test micro-frontends together in a test environment</li>
                  <li>Contract testing: Test communication between micro-frontends</li>
                  <li>Distributed tracing: Track requests across micro-frontends</li>
                  <li>Error tracking: Centralized error monitoring (Sentry, Rollbar)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Real-World Example: E-Commerce Platform</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Architecture</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-slate-400">Shell Application (Container)</div>
            <div className="mt-2">├── Header Micro-Frontend (Team A)</div>
            <div>│   └── React 18, TypeScript</div>
            <div>├── Product Catalog Micro-Frontend (Team B)</div>
            <div>│   └── Vue 3, TypeScript</div>
            <div>├── Shopping Cart Micro-Frontend (Team C)</div>
            <div>│   └── React 18, TypeScript</div>
            <div>└── Checkout Micro-Frontend (Team D)</div>
            <div>    └── Svelte, TypeScript</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Benefits</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Team A can deploy header changes without affecting other teams</li>
                <li>Team B can use Vue while others use React</li>
                <li>If checkout crashes, users can still browse products</li>
                <li>Each team can scale their micro-frontend independently</li>
              </ul>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Challenges</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Shared state: How does cart know when user adds a product?</li>
                <li>Dependencies: Each MFE bundles its own React copy</li>
                <li>Routing: How does checkout know when to show?</li>
                <li>Testing: Must test all MFEs together</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Micro-frontends apply microservices principles to the frontend.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Enable team independence, technology flexibility, and independent deployment.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Four composition patterns: build-time, runtime, server-side, and edge.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Major challenges: shared state, dependency management, routing, performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Module Federation is the most popular runtime composition pattern.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Micro-frontends add complexity—only use if you have multiple teams.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

