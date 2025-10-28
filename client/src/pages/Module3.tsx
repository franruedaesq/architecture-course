import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import WebVitalsComparison from "@/components/WebVitalsComparison";

export default function Module3() {
  return (
    <ModuleLayout moduleId={3}>
      {/* Lesson 1: Core Web Vitals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Core Web Vitals - The Holy Trinity</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Google has decided that three metrics matter most for user experience. These are the <span className="font-semibold text-blue-300">Core Web Vitals</span>. If your site performs poorly on these, Google will rank you lower. Period.
        </p>

        <BigWordAlert
          term="Core Web Vitals"
          definition="Three key metrics that Google uses to measure user experience: Largest Contentful Paint (LCP) for loading performance, First Input Delay (FID) for interactivity, and Cumulative Layout Shift (CLS) for visual stability."
        />

        <div className="my-8">
          <WebVitalsComparison />
        </div>

        {/* LCP Deep Dive */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Largest Contentful Paint (LCP) - The Speed Metric</h3>
          <p className="text-slate-300 mb-4">
            <span className="font-semibold">LCP</span> measures when the largest visible element on the page finishes rendering. This could be a hero image, a large text block, or a video.
          </p>
          
          <div className="bg-slate-700/50 p-4 rounded mb-4">
            <p className="text-slate-300 font-semibold mb-2">Good LCP: &lt; 2.5 seconds</p>
            <p className="text-slate-300 font-semibold mb-2">Poor LCP: &gt; 4 seconds</p>
          </div>

          <p className="text-slate-300 mb-4">
            The <span className="font-semibold text-yellow-300">weird part</span>: LCP changes as the page loads. If a large image loads after 3 seconds, LCP becomes 3 seconds. If a larger image loads after 4 seconds, LCP becomes 4 seconds. LCP is the <span className="italic">last</span> large element to load.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold text-white mb-4">LCP Optimization Strategies</h4>
            <div className="space-y-4 text-slate-300">
              <div>
                <h5 className="font-semibold text-blue-300 mb-2">1. Optimize the Critical Rendering Path</h5>
                <p className="text-sm mb-2">Reduce the time it takes to download and parse CSS and JavaScript before rendering starts.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-green-400">// Bad: Render-blocking CSS</div>
                  <div>&lt;link rel="stylesheet" href="styles.css"&gt;</div>
                  <div className="mt-2 text-green-400">// Good: Preload critical CSS</div>
                  <div>&lt;link rel="preload" href="critical.css" as="style"&gt;</div>
                  <div>&lt;link rel="stylesheet" href="critical.css"&gt;</div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-purple-300 mb-2">2. Lazy Load Below-the-Fold Images</h5>
                <p className="text-sm mb-2">Don't load images the user can't see yet. Use the Intersection Observer API.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-green-400">// Lazy load images</div>
                  <div>&lt;img src="placeholder.jpg" data-src="real.jpg" loading="lazy" /&gt;</div>
                  <div className="mt-2 text-slate-400">// Browser automatically defers loading</div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-green-300 mb-2">3. Server-Side Rendering (SSR)</h5>
                <p className="text-sm">Send HTML with the largest content already rendered. No waiting for JavaScript to build the page.</p>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-yellow-300 mb-2">4. Use a CDN for Static Assets</h5>
                <p className="text-sm">Serve images and CSS from servers geographically close to users. Reduces latency significantly.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-300 mb-2">Real-World Example: Amazon Product Page</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold">Without optimization:</span> LCP = 3.8 seconds</div>
              <div><span className="font-semibold">With SSR:</span> LCP = 1.2 seconds (hero image server-rendered)</div>
              <div><span className="font-semibold">With CDN:</span> LCP = 0.8 seconds (images served from edge)</div>
              <div className="mt-2 pt-2 border-t border-indigo-700/50"><span className="font-semibold text-green-400">Result:</span> 4.75x faster LCP</div>
            </div>
          </div>
        </div>

        {/* FID/INP Deep Dive */}
        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">First Input Delay (FID) & Interaction to Next Paint (INP) - The Responsiveness Metrics</h3>
          <p className="text-slate-300 mb-4">
            <span className="font-semibold">FID</span> measures the delay between when a user first interacts with the page (clicks a button, types in a field) and when the browser responds. <span className="font-semibold">INP</span> is the newer, more comprehensive metric that measures all interactions.
          </p>
          
          <div className="bg-slate-700/50 p-4 rounded mb-4">
            <p className="text-slate-300 font-semibold mb-2">Good FID/INP: &lt; 100ms</p>
            <p className="text-slate-300 font-semibold mb-2">Poor FID/INP: &gt; 500ms</p>
          </div>

          <p className="text-slate-300 mb-4">
            The <span className="font-semibold text-yellow-300">weird part</span>: The browser can't respond to user input while it's busy running JavaScript. If hydration is taking 2 seconds, and the user clicks a button at 1.5 seconds, they have to wait 0.5 seconds for the browser to finish hydration before it can respond. This is the <span className="font-semibold">Total Blocking Time (TBT)</span>.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold text-white mb-4">FID/INP Optimization Strategies</h4>
            <div className="space-y-4 text-slate-300">
              <div>
                <h5 className="font-semibold text-blue-300 mb-2">1. Break Up Long Tasks (Main Thread)</h5>
                <p className="text-sm mb-2">Instead of running 5 seconds of JavaScript in one go, break it into 50ms chunks. This allows the browser to respond to user input between chunks.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-green-400">// Bad: Long task blocks main thread</div>
                  <div>for (let i = 0; i &lt; 1000000; i++) {`{`}</div>
                  <div className="ml-4">expensiveCalculation();</div>
                  <div>{`}`}</div>
                  <div className="mt-2 text-green-400">// Good: Break into chunks</div>
                  <div>function processInChunks(items, chunkSize = 100) {`{`}</div>
                  <div className="ml-4">let index = 0;</div>
                  <div className="ml-4">function processChunk() {`{`}</div>
                  <div className="ml-8">for (let i = 0; i &lt; chunkSize && index &lt; items.length; i++) {`{`}</div>
                  <div className="ml-12">expensiveCalculation(items[index++]);</div>
                  <div className="ml-8">{`}`}</div>
                  <div className="ml-8">if (index &lt; items.length) {`{`}</div>
                  <div className="ml-12">setTimeout(processChunk, 0);</div>
                  <div className="ml-8">{`}`}</div>
                  <div className="ml-4">{`}`}</div>
                  <div className="ml-4">processChunk();</div>
                  <div>{`}`}</div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-purple-300 mb-2">2. Code-Splitting & Lazy Loading</h5>
                <p className="text-sm">Only load JavaScript for features the user needs right now. (More in Module 4)</p>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-green-300 mb-2">3. Web Workers for Heavy Computation</h5>
                <p className="text-sm mb-2">Move expensive calculations off the main thread into a Web Worker.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-green-400">// main.js</div>
                  <div>const worker = new Worker('heavy-task.js');</div>
                  <div>worker.postMessage({`{data: largeDataset}`});</div>
                  <div>worker.onmessage = (e) =&gt; {`{`}</div>
                  <div className="ml-4">console.log('Result:', e.data);</div>
                  <div>{`}`};</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-300 mb-2">Real-World Example: Netflix Hydration Blocking</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold">Hydration time:</span> 2.3 seconds</div>
              <div><span className="font-semibold">User clicks play button at:</span> 1.5 seconds</div>
              <div><span className="font-semibold">Browser responds at:</span> 2.3 seconds (after hydration)</div>
              <div><span className="font-semibold">FID:</span> 800ms (POOR!)</div>
              <div className="mt-2 pt-2 border-t border-indigo-700/50"><span className="font-semibold text-green-400">Solution:</span> Progressive hydration (hydrate play button first)</div>
              <div><span className="font-semibold text-green-400">Result:</span> FID = 50ms (GOOD!)</div>
            </div>
          </div>
        </div>

        {/* CLS Deep Dive */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Cumulative Layout Shift (CLS) - The Stability Metric</h3>
          <p className="text-slate-300 mb-4">
            <span className="font-semibold">CLS</span> measures how much the page layout shifts unexpectedly as it loads. If you're reading an article and suddenly an ad loads and pushes the text down, that's a layout shift.
          </p>
          
          <div className="bg-slate-700/50 p-4 rounded mb-4">
            <p className="text-slate-300 font-semibold mb-2">Good CLS: &lt; 0.1</p>
            <p className="text-slate-300 font-semibold mb-2">Poor CLS: &gt; 0.25</p>
          </div>

          <p className="text-slate-300 mb-4">
            CLS is calculated as the sum of all unexpected layout shifts. A shift of 0.1 means 10% of the viewport moved unexpectedly.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-4">
            <h4 className="text-lg font-semibold text-white mb-4">Common CLS Culprits & Prevention</h4>
            <div className="space-y-4 text-slate-300">
              <div>
                <h5 className="font-semibold text-red-300 mb-2">Problem: Images Without Dimensions</h5>
                <p className="text-sm mb-2">The browser doesn't know how much space to reserve for the image, so it renders at 0x0 initially, then shifts when the image loads.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-red-400">// Bad: No dimensions</div>
                  <div>&lt;img src="hero.jpg" /&gt;</div>
                  <div className="mt-2 text-green-400">// Good: Explicit dimensions</div>
                  <div>&lt;img src="hero.jpg" width="1200" height="600" /&gt;</div>
                  <div className="mt-2 text-green-400">// Even better: Aspect ratio</div>
                  <div>&lt;img src="hero.jpg" width="1200" height="600" style="aspect-ratio: 2/1" /&gt;</div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-red-300 mb-2">Problem: Ads & Dynamic Content</h5>
                <p className="text-sm mb-2">Ads load after the page, pushing content down. Reserve space for ads even if they're not loaded yet.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-red-400">// Bad: Ad appears and shifts content</div>
                  <div>&lt;div id="ad-container"&gt;&lt;/div&gt;</div>
                  <div className="mt-2 text-green-400">// Good: Reserve space</div>
                  <div>&lt;div id="ad-container" style="height: 250px"&gt;&lt;/div&gt;</div>
                </div>
              </div>
              <div className="border-t border-slate-700 pt-4">
                <h5 className="font-semibold text-red-300 mb-2">Problem: Fonts Causing FOUT/FOIT</h5>
                <p className="text-sm mb-2">Custom fonts load and change text size, causing layout shifts. Use font-display: swap to show fallback font immediately.</p>
                <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                  <div className="text-green-400">@font-face {`{`}</div>
                  <div className="ml-4">font-family: 'CustomFont';</div>
                  <div className="ml-4">src: url('font.woff2') format('woff2');</div>
                  <div className="ml-4">font-display: swap;</div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-4">
            <h4 className="font-semibold text-indigo-300 mb-2">Real-World Example: Medium Article Page</h4>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold">Initial CLS:</span> 0.35 (POOR)</div>
              <div><span className="font-semibold">Issues:</span> Images without dimensions, ads loading, font swap</div>
              <div className="mt-2 pt-2 border-t border-indigo-700/50"><span className="font-semibold text-green-400">Fixes applied:</span></div>
              <div className="ml-4">• Added width/height to all images: -0.15</div>
              <div className="ml-4">• Reserved space for ads: -0.10</div>
              <div className="ml-4">• Used font-display: swap: -0.05</div>
              <div className="mt-2 pt-2 border-t border-indigo-700/50"><span className="font-semibold text-green-400">Final CLS:</span> 0.05 (GOOD!)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 2: Technical SEO */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Technical SEO - Making Search Engines Happy</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Google crawls your website to understand what it's about. If your website is a Client-Side Rendered (CSR) Single Page App (SPA), Google sees an empty page with just a &lt;div id="root"&gt;&lt;/div&gt; and no content.
        </p>

        <BigWordAlert
          term="Technical SEO"
          definition="The practice of optimizing your website's technical aspects (site speed, mobile-friendliness, structured data, crawlability) to help search engines understand and rank your content."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Why SSR Matters for SEO</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">CSR Problem</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-red-400">// What Google sees with CSR</div>
                <div>&lt;!DOCTYPE html&gt;</div>
                <div>&lt;html&gt;</div>
                <div className="ml-4">&lt;head&gt;&lt;title&gt;Product Page&lt;/title&gt;&lt;/head&gt;</div>
                <div className="ml-4">&lt;body&gt;</div>
                <div className="ml-8">&lt;div id="root"&gt;&lt;/div&gt;</div>
                <div className="ml-4">&lt;/body&gt;</div>
                <div>&lt;/html&gt;</div>
                <div className="mt-2 text-red-400">// No content! Google can't understand the page</div>
              </div>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">SSR Solution</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// What Google sees with SSR</div>
                <div>&lt;!DOCTYPE html&gt;</div>
                <div>&lt;html&gt;</div>
                <div className="ml-4">&lt;head&gt;</div>
                <div className="ml-8">&lt;title&gt;Premium Wireless Headphones - $199.99&lt;/title&gt;</div>
                <div className="ml-8">&lt;meta name="description" content="High-quality audio..."&gt;</div>
                <div className="ml-4">&lt;/head&gt;</div>
                <div className="ml-4">&lt;body&gt;</div>
                <div className="ml-8">&lt;h1&gt;Premium Wireless Headphones&lt;/h1&gt;</div>
                <div className="ml-8">&lt;p&gt;Price: $199.99&lt;/p&gt;</div>
                <div className="ml-8">&lt;p&gt;Rating: 4.5/5 stars&lt;/p&gt;</div>
                <div className="ml-4">&lt;/body&gt;</div>
                <div>&lt;/html&gt;</div>
                <div className="mt-2 text-green-400">// Full content! Google understands everything</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Structured Data (Schema.org)</h3>
          <p className="text-slate-300 mb-4">
            Use JSON-LD to tell search engines exactly what your content is. This enables rich snippets in search results.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
            <div className="text-green-400">// Product structured data</div>
            <div>&lt;script type="application/ld+json"&gt;</div>
            <div>{`{`}</div>
            <div className="ml-4">"@context": "https://schema.org/",</div>
            <div className="ml-4">"@type": "Product",</div>
            <div className="ml-4">"name": "Premium Wireless Headphones",</div>
            <div className="ml-4">"image": "https://example.com/photo.jpg",</div>
            <div className="ml-4">"description": "High-quality audio...",</div>
            <div className="ml-4">"brand": {`{`}</div>
            <div className="ml-8">"@type": "Brand",</div>
            <div className="ml-8">"name": "AudioBrand"</div>
            <div className="ml-4">{`}`},</div>
            <div className="ml-4">"offers": {`{`}</div>
            <div className="ml-8">"@type": "Offer",</div>
            <div className="ml-8">"price": "199.99",</div>
            <div className="ml-8">"priceCurrency": "USD"</div>
            <div className="ml-4">{`}`},</div>
            <div className="ml-4">"aggregateRating": {`{`}</div>
            <div className="ml-8">"@type": "AggregateRating",</div>
            <div className="ml-8">"ratingValue": "4.5",</div>
            <div className="ml-8">"reviewCount": "2847"</div>
            <div className="ml-4">{`}`}</div>
            <div>{`}`}</div>
            <div>&lt;/script&gt;</div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Core Web Vitals & SEO Ranking</h3>
          <p className="text-slate-300 mb-4">
            Google officially uses Core Web Vitals as a ranking factor. Websites with poor Core Web Vitals are ranked lower.
          </p>
          <div className="space-y-2 text-slate-300 text-sm">
            <div><span className="font-semibold">LCP &gt; 4s:</span> Significant ranking penalty</div>
            <div><span className="font-semibold">FID &gt; 300ms:</span> Ranking penalty</div>
            <div><span className="font-semibold">CLS &gt; 0.25:</span> Ranking penalty</div>
            <div className="mt-4 pt-4 border-t border-purple-700/50"><span className="font-semibold text-green-400">Result:</span> Good Core Web Vitals = better search rankings</div>
          </div>
        </div>
      </section>

      {/* Lesson 3: Performance Monitoring */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Performance Monitoring in Production</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          You can't optimize what you don't measure. You need to monitor your Core Web Vitals in production, with real users, on real devices, with real network conditions.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Web Vitals API</h3>
          <p className="text-slate-300 mb-4">
            Use the Web Vitals API to measure Core Web Vitals in your application and send the data to your analytics backend.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
            <div className="text-green-400">// Measure Core Web Vitals</div>
            <div>import {`{`} getCLS, getFID, getFCP, getLCP, getTTFB {`}`} from 'web-vitals';</div>
            <div className="mt-2">getCLS(metric =&gt; {`{`}</div>
            <div className="ml-4">console.log('CLS:', metric.value);</div>
            <div className="ml-4">sendToAnalytics('CLS', metric.value);</div>
            <div>{`}`});</div>
            <div className="mt-2">getLCP(metric =&gt; {`{`}</div>
            <div className="ml-4">console.log('LCP:', metric.value);</div>
            <div className="ml-4">sendToAnalytics('LCP', metric.value);</div>
            <div>{`}`});</div>
            <div className="mt-2">getFID(metric =&gt; {`{`}</div>
            <div className="ml-4">console.log('FID:', metric.value);</div>
            <div className="ml-4">sendToAnalytics('FID', metric.value);</div>
            <div>{`}`});</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Performance Profiling Tools</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Chrome DevTools Performance Tab</h4>
              <p className="text-sm">Record a page load and see exactly where time is spent. Identify render-blocking resources, long tasks, and layout shifts.</p>
            </div>
            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">React Profiler</h4>
              <p className="text-sm mb-2">Measure which React components are slow to render.</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Wrap components with Profiler</div>
                <div>&lt;Profiler id="ProductCard" onRender={`{onRenderCallback}`}&gt;</div>
                <div className="ml-4">&lt;ProductCard /&gt;</div>
                <div>&lt;/Profiler&gt;</div>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">Lighthouse</h4>
              <p className="text-sm">Automated audits that measure performance, accessibility, SEO, and best practices. Available in Chrome DevTools.</p>
            </div>
            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-yellow-300 mb-2">WebPageTest</h4>
              <p className="text-sm">Detailed performance analysis with real devices and network conditions. Waterfall charts show exactly what's slow.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-300 mb-4">Real-World Case Study: Airbnb Performance Optimization</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Initial Metrics</h4>
              <div className="ml-4">LCP: 4.2s | FID: 280ms | CLS: 0.18</div>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Identified Issues</h4>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Large hero image not optimized</li>
                <li>Hydration blocking user interactions</li>
                <li>Fonts causing layout shifts</li>
              </ul>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">Optimizations Applied</h4>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Served WebP images with fallbacks</li>
                <li>Implemented progressive hydration</li>
                <li>Used font-display: swap</li>
              </ul>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-400 mb-2">Final Metrics</h4>
              <div className="ml-4">LCP: 1.8s (-57%) | FID: 85ms (-70%) | CLS: 0.05 (-72%)</div>
            </div>
            <div className="border-t border-indigo-700/50 pt-3">
              <h4 className="font-semibold text-green-400 mb-2">Business Impact</h4>
              <div className="ml-4">Conversion rate increased by 8%</div>
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
            <span>Core Web Vitals (LCP, FID/INP, CLS) are Google's official ranking factors.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>LCP measures loading speed; optimize with SSR, CDN, and lazy loading.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>FID/INP measures interactivity; optimize by breaking up long tasks and code-splitting.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>CLS measures visual stability; prevent with explicit dimensions and reserved ad space.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>SSR is critical for both performance and SEO.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Use structured data (JSON-LD) to help search engines understand your content.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Monitor performance in production with the Web Vitals API and real user data.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Use Chrome DevTools, Lighthouse, and WebPageTest to identify bottlenecks.</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/4">
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

