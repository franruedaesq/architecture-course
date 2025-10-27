import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function PerformanceOptimizationConcept() {
  return (
    <ConceptPage
      title="Performance Optimization"
      subtitle="Strategies for optimizing frontend performance in modern applications"
      previousConcept={{ path: "/concepts/component-composition", label: "Component Composition" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Performance Optimization Overview</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Performance optimization is the practice of making applications faster and more efficient. This includes reducing bundle size, minimizing network requests, optimizing rendering, and improving user experience metrics.
        </p>

        <BigWordAlert
          term="Performance Optimization"
          definition="The process of improving application speed and efficiency through techniques like code splitting, lazy loading, caching, compression, and rendering optimization."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          Performance directly impacts user experience, SEO rankings, and conversion rates. A 1-second delay can reduce conversions by 7%.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Core Optimization Strategies</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">1. Code Splitting</h3>
            <p className="text-slate-300 text-sm mb-4">
              Split code into smaller chunks and load only what's needed.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Route-based code splitting</div>
              <div className="mt-2">const Home = React.lazy(() {`=>`} import('./pages/Home'));</div>
              <div>const About = React.lazy(() {`=>`} import('./pages/About'));</div>
              <div className="mt-2 text-green-400">// Component-based code splitting</div>
              <div className="mt-2">const Modal = React.lazy(() {`=>`} import('./Modal'));</div>
              <div className="mt-2 text-green-400">// Dynamic imports</div>
              <div className="mt-2">const module = await import('./heavy-library');</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
                <p>Smaller initial bundle, faster TTI, better caching</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">Trade-offs</h4>
                <p>Increased complexity, loading delays for lazy-loaded chunks</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">2. Tree Shaking</h3>
            <p className="text-slate-300 text-sm mb-4">
              Remove unused code from bundles.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Good: Named imports (tree-shakeable)</div>
              <div className="mt-2">import {`{`} Button {`}`} from '@/components';</div>
              <div className="mt-2 text-red-400">// Bad: Default import (not tree-shakeable)</div>
              <div className="mt-2">import Components from '@/components';</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
                <p>Smaller bundle size, faster parsing and execution</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">3. Minification & Compression</h3>
            <p className="text-slate-300 text-sm mb-4">
              Reduce file sizes through minification and compression.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Minification</h4>
                <p>Remove whitespace, shorten variable names, optimize code</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Compression</h4>
                <p>Gzip or Brotli compression reduces file size by 60-80%</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">4. Caching Strategies</h3>
            <p className="text-slate-300 text-sm mb-4">
              Leverage browser and server caching.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Browser Caching</h4>
                <p>Cache-Control headers tell browsers how long to cache assets</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Content Hash</h4>
                <p>Include hash in filename (app.3fa9b2e4.js) for cache busting</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Service Workers</h4>
                <p>Cache assets offline, enable offline functionality</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-indigo-300 mb-4">5. Image Optimization</h3>
            <p className="text-slate-300 text-sm mb-4">
              Optimize images for web.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-indigo-300 mb-1">Formats</h4>
                <p>Use WebP for modern browsers, JPEG/PNG fallbacks</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-indigo-300 mb-1">Responsive Images</h4>
                <p>Serve different sizes for different devices</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-indigo-300 mb-1">Lazy Loading</h4>
                <p>Load images only when they're about to be visible</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-900/30 border border-pink-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-pink-300 mb-4">6. Rendering Optimization</h3>
            <p className="text-slate-300 text-sm mb-4">
              Optimize React rendering.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Memoization</div>
              <div className="mt-2">const MemoizedComponent = React.memo(Component);</div>
              <div className="mt-2 text-green-400">// useMemo for expensive computations</div>
              <div className="mt-2">const value = useMemo(() {`=>`} expensiveCalculation(), [deps]);</div>
              <div className="mt-2 text-green-400">// useCallback for stable functions</div>
              <div className="mt-2">const handleClick = useCallback(() {`=>`} {`{`}...{`}`}, [deps]);</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Performance Metrics</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-orange-300">Metric</th>
                <th className="text-left p-3 text-blue-300">What it measures</th>
                <th className="text-left p-3 text-green-300">Good Target</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">FCP</td>
                <td className="p-3">First Contentful Paint</td>
                <td className="p-3">less 1.8s</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">LCP</td>
                <td className="p-3">Largest Contentful Paint</td>
                <td className="p-3">less 2.5s</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">FID</td>
                <td className="p-3">First Input Delay</td>
                <td className="p-3">less 100ms</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">CLS</td>
                <td className="p-3">Cumulative Layout Shift</td>
                <td className="p-3">less 0.1</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">TTI</td>
                <td className="p-3">Time to Interactive</td>
                <td className="p-3">less 3.8s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Performance Tools</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">Lighthouse</h4>
            <p>Google's automated tool for auditing performance, accessibility, SEO</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">WebPageTest</h4>
            <p>Detailed performance analysis with waterfall charts and filmstrips</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">Chrome DevTools</h4>
            <p>Browser's built-in performance profiler and network analyzer</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">Bundle Analyzer</h4>
            <p>Webpack plugin to visualize bundle composition</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-pink-300 mb-1">Web Vitals Library</h4>
            <p>Measure Core Web Vitals in production</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Performance Budget</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A performance budget is a limit on metrics that matter to your business. It helps teams make decisions about features and optimizations.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Example Budget</h3>
          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded flex justify-between">
              <span>JavaScript Bundle</span>
              <span className="font-mono">less 150KB</span>
            </div>
            <div className="bg-slate-700/50 p-2 rounded flex justify-between">
              <span>CSS Bundle</span>
              <span className="font-mono">less 50KB</span>
            </div>
            <div className="bg-slate-700/50 p-2 rounded flex justify-between">
              <span>LCP</span>
              <span className="font-mono">less 2.5s</span>
            </div>
            <div className="bg-slate-700/50 p-2 rounded flex justify-between">
              <span>FID</span>
              <span className="font-mono">less 100ms</span>
            </div>
            <div className="bg-slate-700/50 p-2 rounded flex justify-between">
              <span>CLS</span>
              <span className="font-mono">less 0.1</span>
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
              <span>Performance directly impacts user experience and business metrics.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Code splitting, tree shaking, and minification reduce bundle size.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Caching and compression strategies improve load times.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Image optimization and lazy loading reduce network requests.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>React memoization and rendering optimization prevent unnecessary re-renders.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Use performance budgets to maintain standards across the team.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

