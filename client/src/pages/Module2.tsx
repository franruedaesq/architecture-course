import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import HydrationTimeline from "@/components/HydrationTimeline";

export default function Module2() {
  return (
    <ModuleLayout
      moduleNumber={2}
      title="The Frontend Fragmentation"
      subtitle="Micro-Frontends & Server-Side Rendering"
      description="Explore how the frontend mirrors the backend architecture and the weird trade-offs of server-side rendering and hydration."
      previousModule={1}
      nextModule={3}
    >
      {/* Lesson 1: Micro-Frontends */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Micro-Frontends - The UI Mirror</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          If the backend is split into Microservices, it only makes sense that the frontend should follow suit. This is the principle of architectural consistency.
        </p>

        <BigWordAlert
          term="Micro-Frontends"
          definition="An architectural style where a single large frontend application is composed of many smaller, independently developed, and independently deployable applications. Each micro-frontend is typically owned by the same team that owns the corresponding backend microservice."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the UI's commitment to <span className="font-semibold text-blue-300">independent deployment</span>. The team that owns the "Review Service" microservice also owns the "Review Widget" micro-frontend. They can deploy a new feature to the review widget without the main product page team even knowing.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Micro-Frontend Structure Example</h3>
          <div className="space-y-3 text-slate-300 font-mono text-sm">
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">header-mfe</span> (Navigation, Logo)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">product-mfe</span> (Product Details, Price)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">reviews-mfe</span> (Customer Reviews)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">recommendations-mfe</span> (Related Products)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">└─</span>
              <span><span className="font-semibold">shell</span> (Stitches them all together)</span>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed">
          The <span className="font-semibold text-yellow-300">weird part</span> is: How do you stitch these pieces together into one seamless user experience? It's like trying to make a single webpage out of multiple separate websites. This "stitching" process is a core challenge we'll address in Module 4.
        </p>
      </section>

      {/* Lesson 2: Server-Side Rendering Deep Dive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Server-Side Rendering (SSR) - The Speed Trick</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Why do we render HTML on the server when the browser can do it perfectly well? The answer is two-fold: <span className="font-semibold text-blue-300">Speed</span> and <span className="font-semibold text-blue-300">Search Engines (SEO)</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Client-Side Rendering (CSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <div>
                <p className="font-semibold text-blue-400 mb-2">The Process:</p>
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Download tiny HTML file</li>
                  <li>Download huge JavaScript bundle</li>
                  <li>Browser runs JavaScript</li>
                  <li>Page is built and rendered</li>
                </ol>
              </div>
              <div className="bg-red-900/30 border border-red-700/50 rounded p-3">
                <p className="font-semibold text-red-300">Result: Slow initial load</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Server-Side Rendering (SSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <div>
                <p className="font-semibold text-green-400 mb-2">The Process:</p>
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Server runs React code</li>
                  <li>Server sends complete HTML</li>
                  <li>Browser displays page immediately</li>
                  <li>JavaScript "wakes up" the page</li>
                </ol>
              </div>
              <div className="bg-green-900/30 border border-green-700/50 rounded p-3">
                <p className="font-semibold text-green-300">Result: Fast initial load</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          When a browser renders a React application with <span className="font-semibold">Client-Side Rendering (CSR)</span>, it first downloads a tiny HTML file, then a huge JavaScript bundle, and <span className="italic">then</span> it runs the JavaScript to build the entire page. This is slow.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With <span className="font-semibold">Server-Side Rendering (SSR)</span>, our BFF (the perfect place to put it!) takes the React code, runs it on the server, and sends a <span className="italic">fully formed HTML page</span> to the browser.
        </p>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">The SSR Benefits</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Speed (FCP):</span> The user sees content almost instantly. This dramatically improves the First Contentful Paint (FCP) metric.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">SEO:</span> Search engine crawlers (like Googlebot) see the complete page content immediately, which is crucial for technical SEO.</span>
            </li>
          </ul>
        </div>

        {/* React Internals */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Advanced Concept: React Fiber Architecture & Reconciliation</h3>
          <p className="text-slate-300 mb-4">
            To understand SSR deeply, you need to understand how React renders. React uses a <span className="font-semibold">Fiber architecture</span> to manage rendering.
          </p>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">The Fiber Tree</h4>
              <p className="text-sm mb-2">
                React maintains a tree of "Fibers"—work units that represent components. During SSR, React walks this tree and calls each component's render function to produce HTML strings.
              </p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Simplified React SSR flow</div>
                <div>function renderToString(element) {`{`}</div>
                <div className="ml-4">const fiber = createFiber(element);</div>
                <div className="ml-4">const html = walkFiberTree(fiber);</div>
                <div className="ml-4">return html;</div>
                <div>{`}`}</div>
              </div>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">Reconciliation Algorithm</h4>
              <p className="text-sm">
                When the client hydrates, React must reconcile the server-rendered tree with the client-rendered tree. This is where mismatches occur. React uses a diffing algorithm to determine which parts of the DOM need to be updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 3: Hydration - The Great Wake-Up Call */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Hydration - The Great Wake-Up Call</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          This is arguably the <span className="font-semibold text-yellow-300">weirdest part</span> of Universal React.
        </p>

        <BigWordAlert
          term="Hydration"
          definition="The client-side process where a JavaScript framework (like React) 'wakes up' the server-rendered static HTML. It attaches event listeners, initializes the component state, and turns the static content into a fully interactive, dynamic application."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The browser receives a beautiful, static HTML page from the server (thanks, SSR!). It looks like a webpage, but it's dead—you can't click any buttons. The browser then downloads the JavaScript bundle and "hydrates" the page, making it interactive.
        </p>

        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">The Hydration Trade-Off (The Weird Part)</h3>
          <p className="text-slate-300 mb-4">
            SSR makes the page <span className="font-semibold">look</span> fast (great FCP), but Hydration is a massive, single-threaded JavaScript task. While the browser is busy "waking up" the page, the user can't interact with anything. This is the main contributor to a metric called <span className="font-semibold">Total Blocking Time (TBT)</span>.
          </p>
          <p className="text-slate-300">
            We traded a slow start for a potentially slow, non-interactive middle. This tension is the core of modern web performance optimization.
          </p>
        </div>

        {/* Hydration Timeline */}
        <div className="my-8">
          <HydrationTimeline />
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">The Hydration Problem - Technical Deep Dive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              During hydration, React must:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Parse and execute the entire JavaScript bundle</li>
              <li>Reconstruct the component tree in memory (Fiber tree)</li>
              <li>Attach event listeners to DOM elements</li>
              <li>Verify the server-rendered HTML matches the client-rendered version</li>
            </ul>
            <p className="mt-4 pt-4 border-t border-slate-700">
              All of this happens on the main thread, blocking user interactions. This is why <span className="font-semibold">code-splitting</span> (Module 4) is so important—it reduces the amount of JavaScript that needs to be hydrated.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto mt-4">
              <div className="text-green-400">// React hydration process</div>
              <div>const root = ReactDOM.hydrateRoot(</div>
              <div className="ml-4">document.getElementById('root'),</div>
              <div className="ml-4">&lt;App /&gt;</div>
              <div>);</div>
              <div className="mt-2 text-slate-400">// React now walks the Fiber tree and</div>
              <div className="text-slate-400">// reconciles with existing DOM</div>
            </div>
          </CardContent>
        </Card>

        {/* Hydration Pitfalls */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">⚠️ Common Hydration Pitfalls & Debugging</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-red-300 mb-2">Hydration Mismatch Errors</h4>
              <p className="text-sm mb-2">The server renders one thing, but the client renders something different. React throws an error and falls back to full client-side rendering, losing all the SSR benefits.</p>
              <p className="text-xs text-slate-400 mb-2"><span className="font-semibold">Example:</span> Server renders based on UTC time, client renders based on local time. Mismatch!</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Bad: Time-dependent rendering</div>
                <div>function TimeComponent() {`{`}</div>
                <div className="ml-4">const time = new Date().toLocaleString();</div>
                <div className="ml-4">return &lt;div&gt;{`{time}`}&lt;/div&gt;;</div>
                <div>{`}`}</div>
                <div className="mt-2 text-red-400">// Server renders: "10/27/2025, 6:40:33 PM UTC"</div>
                <div className="text-red-400">// Client renders: "10/27/2025, 2:40:33 PM EST"</div>
                <div className="text-red-400">// MISMATCH!</div>
              </div>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-orange-300 mb-2">Debugging Hydration Mismatches</h4>
              <p className="text-sm mb-2">Use React's built-in warnings in development:</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Chrome DevTools Console will show:</div>
                <div className="text-red-400">Warning: Expected server HTML to contain a matching &lt;div&gt;</div>
                <div className="text-red-400">in &lt;TimeComponent&gt;</div>
              </div>
              <p className="text-sm mt-2">Check the actual HTML in DevTools and compare with what React renders on the client.</p>
            </div>
            <div className="border-t border-red-700/50 pt-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Hydration Blocking User Input</h4>
              <p className="text-sm">The user clicks a button while hydration is happening. The click is ignored because React is too busy reconstructing the component tree.</p>
            </div>
          </div>
        </div>

        {/* Progressive Hydration */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Progressive Hydration - The Solution</h3>
          <p className="text-slate-300 mb-4">
            Instead of hydrating the entire page at once, hydrate only the parts the user is interacting with. This reduces the initial hydration cost and makes the page feel interactive faster.
          </p>
          <div className="bg-slate-700/50 p-4 rounded text-sm text-slate-300 space-y-2 mb-4">
            <p><span className="font-semibold text-blue-300">Step 1:</span> Server renders the entire page</p>
            <p><span className="font-semibold text-blue-300">Step 2:</span> Browser shows the page (looks interactive but isn't)</p>
            <p><span className="font-semibold text-blue-300">Step 3:</span> Hydrate critical components first (header, navigation, above-the-fold content)</p>
            <p><span className="font-semibold text-blue-300">Step 4:</span> Hydrate less critical components later (sidebar, comments, below-the-fold)</p>
          </div>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
            <div className="text-green-400">// Progressive hydration with React.lazy</div>
            <div>const HeavyComponent = React.lazy(() =&gt;</div>
            <div className="ml-4">import('./HeavyComponent')</div>
            <div>);</div>
            <div className="mt-2">function App() {`{`}</div>
            <div className="ml-4">return (</div>
            <div className="ml-8">&lt;Suspense fallback={`{`}&lt;Skeleton /&gt;{`}`}&gt;</div>
            <div className="ml-12">&lt;HeavyComponent /&gt;</div>
            <div className="ml-8">&lt;/Suspense&gt;</div>
            <div className="ml-4">);</div>
            <div>{`}`}</div>
          </div>
        </div>

        {/* Islands Architecture */}
        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Islands Architecture - The Alternative</h3>
          <p className="text-slate-300 mb-4">
            What if we didn't hydrate the entire page? What if we only hydrated the interactive "islands" and left the rest as static HTML?
          </p>
          <div className="bg-slate-700/50 p-4 rounded text-sm text-slate-300 space-y-3 mb-4">
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Much less JavaScript to download and execute</span>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Faster hydration of interactive parts</span>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Requires a different mental model (not all components are hydrated)</span>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Islands can't easily share state</span>
            </div>
          </div>
          <p className="text-slate-300 text-sm mb-4"><span className="font-semibold">Used by:</span> Astro, Fresh, and other modern frameworks that prioritize performance.</p>
          
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
            <div className="text-green-400">// Islands Architecture Example (Astro)</div>
            <div>---</div>
            <div className="text-slate-400">// Static HTML - NOT hydrated</div>
            <div>const products = await getProducts();</div>
            <div>---</div>
            <div>&lt;div&gt;</div>
            <div className="ml-4">&lt;h1&gt;Products&lt;/h1&gt;</div>
            <div className="ml-4">{`{products.map(p => (`}</div>
            <div className="ml-8">&lt;ProductCard product={`{p}`} /&gt;</div>
            <div className="ml-4">{`)}`}</div>
            <div className="ml-4">&lt;ShoppingCart client:load /&gt; {`{/* Island - hydrated */}`}</div>
            <div>&lt;/div&gt;</div>
          </div>
        </div>

        {/* Real-World Case Study */}
        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4">Real-World Case Study: Netflix SSR Architecture</h3>
          <p className="text-slate-300 mb-4">
            Netflix uses SSR for their landing pages to improve SEO and initial load time. Here's how they handle hydration at scale:
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Challenge: Rendering 10,000+ Movies</h4>
              <p>Netflix's homepage needs to render thousands of movie cards. Hydrating all of them would block the main thread for seconds.</p>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Solution: Selective Hydration</h4>
              <p className="mb-2">Netflix hydrates only the "above the fold" content (first 3-4 rows) immediately. Below-the-fold content is hydrated on-demand when the user scrolls.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Pseudo-code: Netflix approach</div>
                <div>const aboveFold = movies.slice(0, 12);</div>
                <div>const belowFold = movies.slice(12);</div>
                <div className="mt-2">// Hydrate above-fold immediately</div>
                <div>ReactDOM.hydrateRoot(root, &lt;MovieGrid movies={`{aboveFold}`} /&gt;);</div>
                <div className="mt-2">// Hydrate below-fold on scroll</div>
                <div>window.addEventListener('scroll', () =&gt; {`{`}</div>
                <div className="ml-4">if (isNearBottom()) {`{`}</div>
                <div className="ml-8">hydrateElement(belowFoldContainer, belowFold);</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`});</div>
              </div>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">Result</h4>
              <p>Initial hydration time: 200ms (instead of 2000ms)</p>
              <p>Time to Interactive (TTI): Improved by 80%</p>
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
            <span>Micro-Frontends mirror the backend's microservices structure, enabling independent deployment.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Server-Side Rendering (SSR) improves First Contentful Paint (FCP) and enables Technical SEO.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>React Fiber architecture enables efficient rendering on both server and client.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Hydration is the process that "wakes up" server-rendered HTML, making it interactive.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The Hydration cost (Total Blocking Time) is the trade-off for the SSR speed benefit.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Progressive Hydration reduces blocking time by hydrating only critical components first.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Islands Architecture is an alternative that hydrates only interactive parts.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Hydration mismatches occur when server and client render different content—debug with React warnings.</span>
          </li>
        </ul>
      </section>

      {/* Deep-Dive Concept Pages */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-8">Explore Deeper: Concept Deep-Dives</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Want to understand these concepts at university level? Explore our comprehensive concept pages:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/concepts/micro-frontends">
            <a className="group">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-700/50 rounded-lg p-6 hover:border-blue-600/80 hover:from-blue-900/60 hover:to-blue-800/60 transition-all">
                <h4 className="text-lg font-bold text-blue-300 group-hover:text-blue-200 mb-2">Micro-Frontends</h4>
                <p className="text-slate-400 text-sm">Architecture, composition patterns, challenges, and real-world implementations</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/server-side-rendering">
            <a className="group">
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-700/50 rounded-lg p-6 hover:border-purple-600/80 hover:from-purple-900/60 hover:to-purple-800/60 transition-all">
                <h4 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 mb-2">Server-Side Rendering</h4>
                <p className="text-slate-400 text-sm">Why SSR matters, implementation strategies, and performance trade-offs</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/react-fiber">
            <a className="group">
              <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-700/50 rounded-lg p-6 hover:border-green-600/80 hover:from-green-900/60 hover:to-green-800/60 transition-all">
                <h4 className="text-lg font-bold text-green-300 group-hover:text-green-200 mb-2">React Fiber</h4>
                <p className="text-slate-400 text-sm">Reconciliation algorithm, DOM concepts, and rendering optimization</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/hydration">
            <a className="group">
              <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/40 border border-yellow-700/50 rounded-lg p-6 hover:border-yellow-600/80 hover:from-yellow-900/60 hover:to-yellow-800/60 transition-all">
                <h4 className="text-lg font-bold text-yellow-300 group-hover:text-yellow-200 mb-2">Hydration</h4>
                <p className="text-slate-400 text-sm">The hydration process, challenges, selective hydration, and debugging</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/islands-architecture">
            <a className="group">
              <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/40 border border-pink-700/50 rounded-lg p-6 hover:border-pink-600/80 hover:from-pink-900/60 hover:to-pink-800/60 transition-all">
                <h4 className="text-lg font-bold text-pink-300 group-hover:text-pink-200 mb-2">Islands Architecture</h4>
                <p className="text-slate-400 text-sm">Modern approach to web architecture combining static HTML with interactive components</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/virtual-dom">
            <a className="group">
              <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/40 border border-indigo-700/50 rounded-lg p-6 hover:border-indigo-600/80 hover:from-indigo-900/60 hover:to-indigo-800/60 transition-all">
                <h4 className="text-lg font-bold text-indigo-300 group-hover:text-indigo-200 mb-2">Virtual DOM</h4>
                <p className="text-slate-400 text-sm">In-memory representation, diffing algorithm, and performance implications</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/streaming-rendering">
            <a className="group">
              <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-700/50 rounded-lg p-6 hover:border-cyan-600/80 hover:from-cyan-900/60 hover:to-cyan-800/60 transition-all">
                <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 mb-2">Streaming Rendering</h4>
                <p className="text-slate-400 text-sm">Progressive HTML delivery, Suspense, and modern streaming APIs</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/component-composition">
            <a className="group">
              <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/40 border border-orange-700/50 rounded-lg p-6 hover:border-orange-600/80 hover:from-orange-900/60 hover:to-orange-800/60 transition-all">
                <h4 className="text-lg font-bold text-orange-300 group-hover:text-orange-200 mb-2">Component Composition</h4>
                <p className="text-slate-400 text-sm">Composition patterns, Module Federation, and best practices</p>
              </div>
            </a>
          </Link>
          <Link href="/concepts/performance-optimization">
            <a className="group">
              <div className="bg-gradient-to-br from-red-900/40 to-red-800/40 border border-red-700/50 rounded-lg p-6 hover:border-red-600/80 hover:from-red-900/60 hover:to-red-800/60 transition-all">
                <h4 className="text-lg font-bold text-red-300 group-hover:text-red-200 mb-2">Performance Optimization</h4>
                <p className="text-slate-400 text-sm">Code splitting, caching, image optimization, and performance budgets</p>
              </div>
            </a>
          </Link>
        </div>
      </section>
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/3">
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

