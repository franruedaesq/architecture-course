import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function HydrationConcept() {
  return (
    <ConceptPage
      title="Hydration"
      subtitle="Attaching interactivity to server-rendered HTML"
      previousConcept={{ path: "/concepts/react-fiber", label: "React Fiber" }}
      nextConcept={{ path: "/concepts/islands-architecture", label: "Islands Architecture" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Hydration?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Hydration is the process of attaching JavaScript event listeners and state to server-rendered HTML. It's the bridge between server-side rendering and client-side interactivity.
        </p>

        <BigWordAlert
          term="Hydration"
          definition="The process where React takes server-rendered HTML and 'hydrates' it with JavaScript, attaching event listeners, state management, and making the UI interactive. The HTML is already there; hydration adds the 'water' (JavaScript interactivity)."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          Think of it like a dried plant. The server renders the HTML (the dried plant structure). Hydration adds water (JavaScript) to bring it to life and make it interactive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Hydration Timeline</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Step-by-Step Process</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-blue-300">Server Renders HTML</h4>
                  <p className="text-slate-400 text-sm mt-1">Server executes React components and generates HTML string</p>
                  <div className="bg-slate-900 p-2 rounded text-xs font-mono mt-2">
                    <div>const html = ReactDOMServer.renderToString({`<App />`});</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-blue-300">Browser Receives HTML</h4>
                  <p className="text-slate-400 text-sm mt-1">Browser downloads and parses HTML, renders it immediately</p>
                  <p className="text-slate-400 text-sm mt-2 text-green-400">✓ User sees content (First Contentful Paint)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-blue-300">Browser Downloads JavaScript</h4>
                  <p className="text-slate-400 text-sm mt-1">Browser downloads and parses React bundle</p>
                  <p className="text-slate-400 text-sm mt-2">This can take several seconds on slow networks</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-blue-300">React Hydrates</h4>
                  <p className="text-slate-400 text-sm mt-1">React runs on the client and attaches event listeners</p>
                  <div className="bg-slate-900 p-2 rounded text-xs font-mono mt-2">
                    <div>ReactDOM.hydrateRoot(</div>
                    <div className="ml-4">document.getElementById('root'),</div>
                    <div className="ml-4">{`<App />`}</div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <div className="flex items-start gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <h4 className="font-semibold text-blue-300">UI is Interactive</h4>
                  <p className="text-slate-400 text-sm mt-1">Buttons work, forms respond, state updates work</p>
                  <p className="text-slate-400 text-sm mt-2 text-green-400">✓ Time to Interactive (TTI)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-300 mb-4">Timeline Visualization</h3>
          <div className="space-y-2 text-slate-300 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="w-20">0ms</span>
              <div className="flex-1 h-2 bg-green-600 rounded"></div>
              <span>User requests page</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-20">100ms</span>
              <div className="flex-1 h-2 bg-green-600 rounded"></div>
              <span>Server renders HTML</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-20">150ms</span>
              <div className="flex-1 h-2 bg-blue-600 rounded"></div>
              <span>Browser receives HTML (FCP)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-20">200ms</span>
              <div className="flex-1 h-2 bg-purple-600 rounded"></div>
              <span>Browser downloads JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-20">2500ms</span>
              <div className="flex-1 h-2 bg-purple-600 rounded"></div>
              <span>JavaScript loaded</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-20">2600ms</span>
              <div className="flex-1 h-2 bg-yellow-600 rounded"></div>
              <span>React hydrates (TTI)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Hydration Mismatch Problem</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Hydration mismatch occurs when the server renders different HTML than the client. React expects them to match exactly.
        </p>

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Example: Hydration Mismatch</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">❌ Problem Code</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// Component that renders different content on server vs client</div>
                <div className="mt-2">export default function Greeting() {`{`}</div>
                <div className="ml-4">const isMounted = useRef(false);</div>
                <div className="mt-2 text-slate-400">// This effect runs only on client</div>
                <div className="ml-4">useEffect(() {`=>`} {`{`}</div>
                <div className="ml-8">isMounted.current = true;</div>
                <div className="ml-4">{`}`}, []);</div>
                <div className="mt-2 text-slate-400">// Server renders "Loading", client renders "Hello"</div>
                <div className="ml-4">return {`<div>`}</div>
                <div className="ml-8">{`{isMounted.current ? 'Hello' : 'Loading'}`}</div>
                <div className="ml-4">{`</div>`};</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">What Happens</h4>
              <div className="space-y-1 text-slate-300 text-sm">
                <div>1. Server renders: {`<div>Loading</div>`}</div>
                <div>2. Browser displays: "Loading"</div>
                <div>3. JavaScript loads</div>
                <div>4. React hydrates and renders: {`<div>Hello</div>`}</div>
                <div className="text-red-400 mt-2">5. React sees mismatch: "Loading" vs "Hello"</div>
                <div className="text-red-400">6. React throws error and re-renders entire component</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">✓ Solutions</h3>
          
          <div className="space-y-3">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">1. Render Same Content on Server and Client</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// ✓ Correct</div>
                <div className="mt-2">export default function Greeting() {`{`}</div>
                <div className="ml-4">// Both server and client render "Hello"</div>
                <div className="ml-4">return {`<div>Hello</div>`};</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">2. Use suppressHydrationWarning</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// For minor differences (timestamps, random values)</div>
                <div className="mt-2">{`<div suppressHydrationWarning>`}</div>
                <div className="ml-4">{`{new Date().toISOString()}`}</div>
                <div>{`</div>`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">3. Only Render on Client</h4>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// Don't render on server, only on client</div>
                <div className="mt-2">export default function ClientOnly() {`{`}</div>
                <div className="ml-4">const [mounted, setMounted] = useState(false);</div>
                <div className="mt-2 text-slate-400">// Only render after hydration</div>
                <div className="ml-4">useEffect(() {`=>`} setMounted(true), []);</div>
                <div className="mt-2 text-slate-400">// Return null on server</div>
                <div className="ml-4">if (!mounted) return null;</div>
                <div className="mt-2 text-slate-400">// Render on client</div>
                <div className="ml-4">return {`<div>{new Date().toISOString()}</div>`};</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Selective Hydration</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Modern approach: only hydrate the parts of the page that need interactivity. This is called "selective hydration" or "partial hydration".
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Example: Selective Hydration</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Only hydrate the interactive button, not the static header</div>
            <div className="mt-2">{`<header><!-- Static, no hydration needed --></header>`}</div>
            <div className="mt-2">{`<button id="interactive">Click me</button>`}</div>
            <div className="mt-2 text-slate-400">// Only hydrate the button</div>
            <div>ReactDOM.hydrateRoot(</div>
            <div className="ml-4">document.getElementById('interactive'),</div>
            <div className="ml-4">{`<InteractiveButton />`}</div>
            <div>);</div>
          </div>

          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
              <p>Faster TTI, less JavaScript to download and execute</p>
            </div>
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">Used by</h4>
              <p>Astro, Qwik, and other modern frameworks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Performance Impact</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-orange-300">Metric</th>
                <th className="text-left p-3 text-blue-300">CSR</th>
                <th className="text-left p-3 text-purple-300">SSR</th>
                <th className="text-left p-3 text-green-300">Selective Hydration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">FCP</td>
                <td className="p-3">Slow (500ms+)</td>
                <td className="p-3">Fast (150ms)</td>
                <td className="p-3">Fast (150ms)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">TTI</td>
                <td className="p-3">Slow (2500ms)</td>
                <td className="p-3">Slower (2600ms)</td>
                <td className="p-3">Fast (1800ms)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Bundle Size</td>
                <td className="p-3">Large</td>
                <td className="p-3">Large</td>
                <td className="p-3">Small</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">SEO</td>
                <td className="p-3">Poor</td>
                <td className="p-3">Good</td>
                <td className="p-3">Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Hydration attaches JavaScript interactivity to server-rendered HTML.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>User sees content immediately (FCP), but can't interact until TTI.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Hydration mismatch occurs when server and client render different HTML.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Selective hydration only hydrates interactive parts, improving performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Modern frameworks like Astro use selective hydration by default.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

