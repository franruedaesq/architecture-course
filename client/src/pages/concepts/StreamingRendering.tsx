import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function StreamingRenderingConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("streaming-rendering");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Streaming Rendering?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Streaming rendering is a technique where the server sends HTML to the browser in chunks as it's being rendered, instead of waiting for the entire page to be rendered before sending it. This allows the browser to start displaying content immediately while the server is still working on rendering the rest of the page.
        </p>

        <BigWordAlert
          term="Streaming Rendering"
          definition="A server-side rendering technique where HTML is sent to the browser progressively in chunks. The browser can start displaying and parsing HTML while the server is still rendering other parts of the page."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the opposite of traditional SSR where the server renders everything, then sends the complete HTML at once. Streaming is faster because the user sees content sooner.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Traditional SSR vs Streaming SSR</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-300 mb-4">Traditional SSR (Blocking)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Server renders entire page, then sends it all at once.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Traditional SSR</div>
              <div className="mt-2">app.get('/', async (req, res) {`=>`} {`{`}</div>
              <div className="ml-4">const html = ReactDOMServer.renderToString({`<App />`});</div>
              <div className="ml-4">res.send(html); // Send entire HTML at once</div>
              <div>{`}`});</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">Timeline</h4>
                <div className="font-mono text-xs">
                  <div>0ms: Request</div>
                  <div>500ms: Server finishes rendering</div>
                  <div>600ms: Browser receives HTML (FCP)</div>
                  <div>2500ms: JavaScript loads (TTI)</div>
                </div>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">Problem</h4>
                <p>User waits 500ms before seeing anything</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">Streaming SSR (Progressive)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Server sends HTML in chunks as it renders.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Streaming SSR</div>
              <div className="mt-2">app.get('/', (req, res) {`=>`} {`{`}</div>
              <div className="ml-4">const stream = ReactDOMServer.renderToNodeStream({`<App />`});</div>
              <div className="ml-4">stream.pipe(res); // Send HTML as it's rendered</div>
              <div>{`}`});</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Timeline</h4>
                <div className="font-mono text-xs">
                  <div>0ms: Request</div>
                  <div>100ms: Browser receives header HTML (FCP)</div>
                  <div>200ms: Browser receives main content</div>
                  <div>300ms: Browser receives footer</div>
                  <div>2500ms: JavaScript loads (TTI)</div>
                </div>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Benefit</h4>
                <p>User sees content immediately (100ms vs 500ms)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">How Streaming Works</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">1. Server Starts Rendering</h3>
            <p className="text-slate-300 text-sm mb-4">
              Server begins rendering the component tree.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Server renders header first</div>
              <div className="mt-2">{`<html>`}</div>
              <div className="ml-2">{`<head>...</head>`}</div>
              <div className="ml-2">{`<body>`}</div>
              <div className="ml-4">{`<header>...</header>`}</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">2. Send First Chunk</h3>
            <p className="text-slate-300 text-sm mb-4">
              As soon as the header is rendered, send it to the browser.
            </p>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <p className="text-slate-300">Browser receives HTML and starts parsing and rendering</p>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">3. Server Continues Rendering</h3>
            <p className="text-slate-300 text-sm mb-4">
              Server continues rendering the rest of the page.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Server renders main content</div>
              <div className="mt-2">{`<main>`}</div>
              <div className="ml-2">{`<!-- Slow data fetching -->`}</div>
              <div className="ml-2">{`</main>`}</div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">4. Send More Chunks</h3>
            <p className="text-slate-300 text-sm mb-4">
              As each section is rendered, send it to the browser.
            </p>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">5. Hydration</h3>
            <p className="text-slate-300 text-sm mb-4">
              After JavaScript loads, React hydrates the entire page.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Streaming with Suspense</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          React's Suspense API enables streaming by allowing components to "suspend" rendering while waiting for data.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Example: Streaming with Suspense</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Component that suspends during data fetching</div>
            <div className="mt-2">function PostList() {`{`}</div>
            <div className="ml-4">const posts = use(fetchPosts()); // Suspends here</div>
            <div className="ml-4">return {`<ul>{posts.map(p => <li>{p.title}</li>)}</ul>`};</div>
            <div>{`}`}</div>
            <div className="mt-2 text-green-400">// Server renders with fallback</div>
            <div className="mt-2">{`<Suspense fallback={<div>Loading posts...</div>}>`}</div>
            <div className="ml-4">{`<PostList />`}</div>
            <div>{`</Suspense>`}</div>
            <div className="mt-2 text-slate-400">// Timeline:</div>
            <div className="mt-2 text-slate-400">// 1. Server sends header + "Loading posts..." fallback</div>
            <div className="text-slate-400">// 2. Browser displays immediately</div>
            <div className="text-slate-400">// 3. Server finishes fetching posts</div>
            <div className="text-slate-400">// 4. Server sends actual posts HTML</div>
            <div className="text-slate-400">// 5. Browser replaces fallback with actual posts</div>
          </div>

          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
              <p>User sees header immediately, then posts appear as they're ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Streaming APIs</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">renderToNodeStream (Deprecated)</h4>
            <p>Old API for streaming SSR. Works with Node.js streams.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">renderToReadableStream (Modern)</h4>
            <p>Modern streaming API. Works with Web Streams API, compatible with edge runtimes.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">renderToPipeableStream</h4>
            <p>Latest API combining benefits of both. Recommended for new projects.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Frameworks with Streaming</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">Next.js</h4>
            <p>Built-in streaming support with Suspense. App Router enables streaming by default.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">Remix</h4>
            <p>Streaming is a first-class feature. Automatically streams data and HTML.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">Astro</h4>
            <p>Streams HTML progressively. Works with Islands Architecture.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Streaming sends HTML to the browser progressively instead of all at once.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Users see content sooner, improving perceived performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Suspense enables streaming by allowing components to suspend rendering.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Browser can start parsing and rendering while server is still working.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Modern frameworks like Next.js and Remix have built-in streaming support.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

