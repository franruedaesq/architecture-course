import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import CodeSplittingVisualization from "@/components/CodeSplittingVisualization";

export default function Module4() {
  return (
    <ModuleLayout
      moduleNumber={4}
      title="The Implementation Playbook"
      subtitle="Migration, Code-Splitting & Module Federation"
      description="Learn the Strangler Fig Pattern, Module Federation, and how to compose the pieces together."
      previousModule={3}
      nextModule={5}
    >
      {/* Lesson 1: Strangler Fig Pattern */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: The Strangler Fig Pattern - The Gentle Migration</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          How do you move from the Monolith to the Micro-Architecture without shutting down the business for a year? You use the <span className="font-semibold">Strangler Fig Pattern</span>.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Imagine a giant, old tree (the Monolith). A strangler fig seed lands on it and begins to grow, wrapping its vines around the host tree. Eventually, the fig becomes a new, strong tree, and the old host tree dies and rots away inside the fig's embrace.
        </p>

        <BigWordAlert
          term="Strangler Fig Pattern"
          definition="A migration strategy where you gradually replace a legacy system's functionality with new applications and services. The new system 'strangles' the old one until the old system can be safely decommissioned."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-base">Phase 1: Coexistence</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <p>Old monolith and new micro-architecture run in parallel. A routing layer directs traffic.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-base">Phase 2: Gradual Replacement</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <p>New micro-frontends handle more routes. Old monolith handles fewer routes.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-base">Phase 3: Full Migration</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 text-sm">
              <p>All traffic goes to new architecture. Old monolith is decommissioned.</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The <span className="font-semibold text-yellow-300">weird part</span> is that for a long time, you have <span className="italic">two</span> systems running in production: the old Monolith handling some routes (e.g., <code className="bg-slate-900 px-2 py-1 rounded text-sm">/admin</code>) and the new Micro-Frontends handling others (e.g., <code className="bg-slate-900 px-2 py-1 rounded text-sm">/product</code>). The BFF and a routing layer act as the traffic cop, directing users to the right place.
        </p>

        {/* Rollback Strategies */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Rollback Strategies</h3>
          <p className="text-slate-300 mb-4">
            During migration, you need a quick way to rollback if something goes wrong:
          </p>
          <div className="space-y-3 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Feature Flags</h4>
              <p className="text-sm">Use feature flags to control which system handles which routes. If the new system breaks, flip a flag to route traffic back to the monolith instantly.</p>
            </div>
            <div className="border-t border-blue-700/50 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Canary Deployments</h4>
              <p className="text-sm">Route only 5% of traffic to the new system first. Monitor for errors. If all looks good, increase to 25%, then 50%, then 100%.</p>
            </div>
            <div className="border-t border-blue-700/50 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">Database Synchronization</h4>
              <p className="text-sm">Keep the monolith database and new system databases in sync. If you need to rollback, you don't lose data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2: Code-Splitting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Code-Splitting - The TBT Fix</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          We learned that <span className="font-semibold">Hydration</span> is the cause of high <span className="font-semibold">TBT (Total Blocking Time)</span>. The browser is blocked while executing a massive JavaScript bundle. The fix? Don't send a massive bundle!
        </p>

        <BigWordAlert
          term="Code-Splitting"
          definition="A technique that breaks your large JavaScript bundle into smaller, on-demand chunks. Instead of loading all the code for the entire site on the homepage, you only load the code needed for the homepage."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is a direct attack on the TBT problem. By sending less JavaScript initially, the browser spends less time hydrating, and the page becomes interactive faster.
        </p>

        {/* Code-Splitting Visualization */}
        <div className="my-8">
          <CodeSplittingVisualization />
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Code-Splitting Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Route-Based Splitting</h4>
              <p className="text-slate-300 text-sm mb-3">
                Load only the code needed for the current route. When the user navigates to a new route, load that route's code.
              </p>
              <pre className="bg-slate-900 p-3 rounded text-xs text-slate-300 font-mono overflow-x-auto">
{`const ProductPage = React.lazy(() => 
  import('./pages/Product')
);

<Suspense fallback={<Loading />}>
  <ProductPage />
</Suspense>`}
              </pre>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">Component-Based Splitting</h4>
              <p className="text-slate-300 text-sm mb-3">
                Load heavy components (like a chart library) only when they're needed.
              </p>
              <pre className="bg-slate-900 p-3 rounded text-xs text-slate-300 font-mono overflow-x-auto">
{`const Chart = React.lazy(() => 
  import('./components/Chart')
);

{showChart && (
  <Suspense fallback={<Skeleton />}>
    <Chart data={data} />
  </Suspense>
)}`}
              </pre>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">Vendor Splitting</h4>
              <p className="text-slate-300 text-sm">
                Separate third-party libraries (like React, lodash) into their own chunks. These change less frequently and can be cached longer.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Performance Budgets */}
        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">Performance Budgets</h3>
          <p className="text-slate-300 mb-4">
            Set a budget for JavaScript bundle size. If a new feature would exceed the budget, you must code-split it or remove something else.
          </p>
          <div className="bg-slate-700/50 p-4 rounded text-sm text-slate-300 space-y-2">
            <p><span className="font-semibold text-yellow-300">Example Budget:</span></p>
            <p>• Initial bundle: 150 KB (gzipped)</p>
            <p>• Per-route chunk: 50 KB (gzipped)</p>
            <p>• Third-party libraries: 100 KB (gzipped)</p>
          </div>
        </div>
      </section>

      {/* Lesson 3: Module Federation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Module Federation - The Glue</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Micro-Frontends are independently deployed. What happens when the "Header Micro-Frontend" and the "Product Micro-Frontend" both want to use the same version of React? If they both load their own copy, the user downloads React twice, wasting bandwidth and hurting TBT.
        </p>

        <BigWordAlert
          term="Module Federation"
          definition="A Webpack feature that allows multiple separate builds (Micro-Frontends) to form a single application. It enables applications to dynamically load code from any other application, and most importantly, it allows them to share dependencies at runtime."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the <span className="font-semibold text-yellow-300">weirdest part</span> of the whole setup. It allows the Product Micro-Frontend to say, "Hey, Header Micro-Frontend, are you already using React version X? Great, I'll use your copy instead of downloading my own." It's the technical glue that makes Micro-Frontends efficient.
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Module Federation Configuration (Webpack)</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 p-4 rounded overflow-x-auto text-xs text-slate-300 font-mono">
{`// webpack.config.js - Header Micro-Frontend
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
      }
    })
  ]
};

// webpack.config.js - Product Micro-Frontend
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      remotes: {
        header: 'header@http://localhost:3001/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
      }
    })
  ]
};`}
            </pre>
          </CardContent>
        </Card>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">Module Federation Benefits</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Shared dependencies: React is downloaded once, shared by all micro-frontends</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Independent deployment: Each micro-frontend can be deployed separately</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Runtime composition: Micro-frontends are loaded and composed at runtime</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Reduced bundle size: Shared libraries aren't duplicated in each micro-frontend</span>
            </li>
          </ul>
        </div>

        {/* Version Management */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">⚠️ Version Management & Breaking Changes</h3>
          <p className="text-slate-300 mb-4">
            With Module Federation, you have multiple versions of the same library running at the same time. This can cause issues:
          </p>
          <div className="space-y-3 text-slate-300">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Breaking Changes</h4>
              <p className="text-sm">If the Header Micro-Frontend updates React from 18 to 19, but the Product Micro-Frontend still expects React 18, you have a problem. Use semantic versioning and careful testing.</p>
            </div>
            <div className="border-t border-red-700/50 pt-3">
              <h4 className="font-semibold text-orange-300 mb-2">Deprecation Policy</h4>
              <p className="text-sm">Establish clear deprecation timelines. "React 18 will be deprecated in Q2 2025. All micro-frontends must upgrade by then."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 4: Composition & Error Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 4: Composition, Error Handling & Shared State</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          All the pieces (SSR, client-side, static) must be combined into one seamless page. This is the "stitching" process. But what happens when one piece fails?
        </p>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Stitching Strategies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">1. Server-Side Composition (SSR)</h4>
              <p className="text-slate-300 text-sm mb-3">
                The BFF renders all micro-frontends on the server and sends a single HTML page.
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-green-300">✓ Pros:</span> Fast FCP, SEO-friendly, no layout shifts
              </div>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300 mt-2">
                <span className="font-semibold text-red-300">✗ Cons:</span> Complex to implement, high server load
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">2. Client-Side Composition</h4>
              <p className="text-slate-300 text-sm mb-3">
                The shell app loads micro-frontends dynamically in the browser using Module Federation.
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-green-300">✓ Pros:</span> Simple to implement, independent deployment
              </div>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300 mt-2">
                <span className="font-semibold text-red-300">✗ Cons:</span> Slower FCP, potential layout shifts, SEO challenges
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">3. Edge Composition (Hybrid)</h4>
              <p className="text-slate-300 text-sm mb-3">
                Use a CDN edge server to compose micro-frontends from multiple origins.
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-green-300">✓ Pros:</span> Fast, flexible, can combine SSR and client-side
              </div>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300 mt-2">
                <span className="font-semibold text-red-300">✗ Cons:</span> Requires edge computing infrastructure
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Handling */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Error Handling in Composed Applications</h3>
          <p className="text-slate-300 mb-4">
            When a micro-frontend fails to load or crashes, what happens to the entire page?
          </p>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Graceful Degradation</h4>
              <p className="text-sm">If the Reviews Micro-Frontend fails, show a placeholder or skeleton loader instead of breaking the entire page.</p>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-orange-300 mb-2">Error Boundaries</h4>
              <p className="text-sm mb-2">Use React Error Boundaries to catch errors in a micro-frontend and prevent them from crashing the entire page.</p>
              <pre className="bg-slate-900 p-2 rounded text-xs text-slate-300 font-mono overflow-x-auto">
{`class MicroFrontendErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('MFE failed:', error);
    // Show fallback UI
  }
  render() {
    return this.props.children;
  }
}`}
              </pre>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Timeout Handling</h4>
              <p className="text-sm">If a micro-frontend takes too long to load, show a timeout error instead of waiting forever.</p>
            </div>
          </div>
        </div>

        {/* Shared State Management */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Shared State Management Between Micro-Frontends</h3>
          <p className="text-slate-300 mb-4">
            Sometimes, micro-frontends need to share state (e.g., the user's shopping cart). How do you manage this without tight coupling?
          </p>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Option 1: Shared Store (Redux, Zustand)</h4>
              <p className="text-sm mb-2">All micro-frontends share a single state store. Simple but creates tight coupling.</p>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">Option 2: Event-Driven Communication</h4>
              <p className="text-sm mb-2">Micro-frontends communicate via events (e.g., "user-added-to-cart"). Loose coupling but harder to debug.</p>
              <pre className="bg-slate-900 p-2 rounded text-xs text-slate-300 font-mono overflow-x-auto">
{`// Product MFE
window.dispatchEvent(new CustomEvent('cart:add', {
  detail: { productId: 123, quantity: 1 }
}));

// Cart MFE
window.addEventListener('cart:add', (e) => {
  addToCart(e.detail);
});`}
              </pre>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">Option 3: Shared Service Layer</h4>
              <p className="text-sm">All micro-frontends call the same BFF API to fetch/update shared state. Clean separation of concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The Strangler Fig Pattern allows gradual migration from monolith to micro-architecture.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Use feature flags and canary deployments for safe rollbacks during migration.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Code-Splitting reduces the JavaScript bundle size, improving Hydration performance.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Module Federation allows micro-frontends to share dependencies at runtime.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Composition can be done on the server, client, or edge, each with trade-offs.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Use Error Boundaries and graceful degradation to handle micro-frontend failures.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Manage shared state carefully—event-driven communication is often the best approach.</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/5">
          <a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Next Module <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </Link>
      </div>
    </ModuleLayout>
  );
}

