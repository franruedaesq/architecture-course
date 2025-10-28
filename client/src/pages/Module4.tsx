import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import CodeSplittingVisualization from "@/components/CodeSplittingVisualization";

export default function Module4() {
  return (
    <ModuleLayout moduleId={4}>
      {/* Lesson 1: Code-Splitting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Code-Splitting - Breaking Up the Bundle</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Remember when we talked about FID/INP and hydration blocking the main thread? The root cause is often a massive JavaScript bundle. If you download 5MB of JavaScript just to show a button, that's a problem. Code-splitting solves this.
        </p>

        <BigWordAlert
          term="Code-Splitting"
          definition="The practice of breaking a single large JavaScript bundle into multiple smaller bundles that are loaded on-demand. Only the code needed for the current page/feature is downloaded and executed immediately; other code is loaded later when needed."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          There are three main strategies for code-splitting:
        </p>

        <div className="my-8">
          <CodeSplittingVisualization />
        </div>

        {/* Route-Based Code-Splitting */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Strategy 1: Route-Based Code-Splitting</h3>
          <p className="text-slate-300 mb-4">
            Split your bundle by route. The product page gets its own bundle, the checkout page gets its own, etc.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto mb-4">
            <div className="text-green-400">// React Router with code-splitting</div>
            <div>import {`{`} lazy, Suspense {`}`} from 'react';</div>
            <div>import {`{`} BrowserRouter, Routes, Route {`}`} from 'react-router-dom';</div>
            <div className="mt-2">const ProductPage = lazy(() =&gt; import('./pages/ProductPage'));</div>
            <div>const CheckoutPage = lazy(() =&gt; import('./pages/CheckoutPage'));</div>
            <div>const ReviewsPage = lazy(() =&gt; import('./pages/ReviewsPage'));</div>
            <div className="mt-2">function App() {`{`}</div>
            <div className="ml-4">return (</div>
            <div className="ml-8">&lt;BrowserRouter&gt;</div>
            <div className="ml-12">&lt;Suspense fallback={`{`}&lt;Skeleton /&gt;{`}`}&gt;</div>
            <div className="ml-16">&lt;Routes&gt;</div>
            <div className="ml-20">&lt;Route path="/product/:id" element={`{`}&lt;ProductPage /&gt;{`}`} /&gt;</div>
            <div className="ml-20">&lt;Route path="/checkout" element={`{`}&lt;CheckoutPage /&gt;{`}`} /&gt;</div>
            <div className="ml-20">&lt;Route path="/reviews" element={`{`}&lt;ReviewsPage /&gt;{`}`} /&gt;</div>
            <div className="ml-16">&lt;/Routes&gt;</div>
            <div className="ml-12">&lt;/Suspense&gt;</div>
            <div className="ml-8">&lt;/BrowserRouter&gt;</div>
            <div className="ml-4">);</div>
            <div>{`}`}</div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded text-sm text-slate-300">
            <p className="font-semibold text-blue-300 mb-2">Bundle Result:</p>
            <div className="space-y-1 font-mono text-xs">
              <div>main.js: 50KB (shared code, routing)</div>
              <div>product.chunk.js: 150KB (only loaded when user visits /product)</div>
              <div>checkout.chunk.js: 200KB (only loaded when user visits /checkout)</div>
              <div>reviews.chunk.js: 100KB (only loaded when user visits /reviews)</div>
            </div>
            <p className="mt-3 text-green-300">User visiting only product page downloads: 50KB + 150KB = 200KB (not 500KB!)</p>
          </div>
        </div>

        {/* Component-Based Code-Splitting */}
        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Strategy 2: Component-Based Code-Splitting</h3>
          <p className="text-slate-300 mb-4">
            Split by component. Heavy components (like a video player, image editor, or 3D viewer) are loaded on-demand.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto mb-4">
            <div className="text-green-400">// Lazy load heavy components</div>
            <div>const VideoPlayer = lazy(() =&gt; import('./components/VideoPlayer'));</div>
            <div>const ImageEditor = lazy(() =&gt; import('./components/ImageEditor'));</div>
            <div className="mt-2">function ProductPage() {`{`}</div>
            <div className="ml-4">const [showVideo, setShowVideo] = useState(false);</div>
            <div className="ml-4">return (</div>
            <div className="ml-8">&lt;div&gt;</div>
            <div className="ml-12">&lt;h1&gt;Product&lt;/h1&gt;</div>
            <div className="ml-12">&lt;button onClick={`{`}() =&gt; setShowVideo(true){`}`}&gt;</div>
            <div className="ml-16">Watch Demo Video</div>
            <div className="ml-12">&lt;/button&gt;</div>
            <div className="ml-12">{`{showVideo && (`}</div>
            <div className="ml-16">&lt;Suspense fallback={`{`}&lt;div&gt;Loading video...&lt;/div&gt;{`}`}&gt;</div>
            <div className="ml-20">&lt;VideoPlayer /&gt;</div>
            <div className="ml-16">&lt;/Suspense&gt;</div>
            <div className="ml-12">{`)}`}</div>
            <div className="ml-8">&lt;/div&gt;</div>
            <div className="ml-4">);</div>
            <div>{`}`}</div>
          </div>
          <p className="text-slate-300 text-sm">
            The VideoPlayer component is only downloaded when the user clicks the button. If they never click it, they never download it.
          </p>
        </div>

        {/* Real-World Case Study */}
        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4">Real-World Case Study: Spotify Web Player</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Initial Bundle Size</h4>
              <div className="ml-4">Total: 2.5MB (main.js)</div>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Code-Splitting Strategy</h4>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Route-based: Home, Search, Playlist, Library</li>
                <li>Component-based: Player, Queue, Lyrics (heavy components)</li>
                <li>Vendor split: React, Redux, UI libraries</li>
              </ul>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">Final Bundle Breakdown</h4>
              <div className="space-y-1 font-mono text-xs ml-4">
                <div>main.js: 150KB (core routing, player controls)</div>
                <div>vendor.js: 400KB (React, Redux, UI libs)</div>
                <div>home.chunk.js: 80KB (lazy loaded)</div>
                <div>search.chunk.js: 120KB (lazy loaded)</div>
                <div>playlist.chunk.js: 100KB (lazy loaded)</div>
                <div>lyrics.chunk.js: 250KB (lazy loaded on demand)</div>
              </div>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-400 mb-2">Result</h4>
              <div className="ml-4">Initial load: 150KB + 400KB = 550KB (vs 2.5MB)</div>
              <div className="ml-4">Time to Interactive: 2.1s → 0.8s (-62%)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2: Module Federation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Module Federation - The Micro-Frontend Glue</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Code-splitting solves the bundle size problem within a single application. But what if you have multiple independent teams, each building their own micro-frontend? How do they share code and compose together?
        </p>

        <BigWordAlert
          term="Module Federation"
          definition="A Webpack 5+ feature that allows JavaScript applications to dynamically load code from other applications at runtime. Each micro-frontend can be built, deployed, and versioned independently, then composed together in a shell application."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the <span className="font-semibold text-yellow-300">weird part</span>: You're essentially loading JavaScript from different servers at runtime and stitching them together. It's like having multiple websites that pretend to be one.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Module Federation Architecture</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Host Application (Shell)</h4>
              <p className="text-sm mb-2">The main application that loads and composes micro-frontends.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// webpack.config.js - Shell Application</div>
                <div>const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');</div>
                <div className="mt-2">module.exports = {`{`}</div>
                <div className="ml-4">plugins: [</div>
                <div className="ml-8">new ModuleFederationPlugin({`{`}</div>
                <div className="ml-12">name: 'shell',</div>
                <div className="ml-12">filename: 'remoteEntry.js',</div>
                <div className="ml-12">remotes: {`{`}</div>
                <div className="ml-16">// Load micro-frontends from remote URLs</div>
                <div className="ml-16">productMfe: 'product@http://localhost:3001/remoteEntry.js',</div>
                <div className="ml-16">reviewsMfe: 'reviews@http://localhost:3002/remoteEntry.js',</div>
                <div className="ml-16">cartMfe: 'cart@http://localhost:3003/remoteEntry.js'</div>
                <div className="ml-12">{`}`},</div>
                <div className="ml-12">shared: ['react', 'react-dom']</div>
                <div className="ml-8">{`}`})</div>
                <div className="ml-4">]</div>
                <div>{`}`};</div>
              </div>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">Remote Application (Micro-Frontend)</h4>
              <p className="text-sm mb-2">Independent application that exposes components for the shell to load.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// webpack.config.js - Product Micro-Frontend</div>
                <div>new ModuleFederationPlugin({`{`}</div>
                <div className="ml-4">name: 'productMfe',</div>
                <div className="ml-4">filename: 'remoteEntry.js',</div>
                <div className="ml-4">exposes: {`{`}</div>
                <div className="ml-8">// Expose components for shell to load</div>
                <div className="ml-8">'./ProductCard': './src/components/ProductCard',</div>
                <div className="ml-8">'./ProductPage': './src/pages/ProductPage'</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">shared: ['react', 'react-dom']</div>
                <div>{`}`})</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Case Study */}
        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4">Real-World Case Study: Uber's Micro-Frontend Architecture</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Challenge</h4>
              <p>100+ teams building different features (Payments, Ratings, Support, Analytics) all need to work together in one app.</p>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-400 mb-2">Result</h4>
              <div className="ml-4">Teams deploy independently without coordinating releases</div>
              <div className="ml-4">Payments team can deploy 10x/day without affecting other teams</div>
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
            <span>Code-splitting reduces initial bundle size by splitting into route-based, component-based, or dynamic chunks.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Module Federation enables true micro-frontend architecture with independent deployment.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Real-world implementations show 60%+ improvements in Time to Interactive.</span>
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

