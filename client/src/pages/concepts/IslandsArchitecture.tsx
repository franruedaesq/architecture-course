import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function IslandsArchitectureConcept() {
  return (
    <ConceptPage
      title="Islands Architecture"
      subtitle="A modern approach to web architecture combining static HTML with interactive components"
      previousConcept={{ path: "/concepts/hydration", label: "Hydration" }}
      nextConcept={{ path: "/concepts/virtual-dom", label: "Virtual DOM" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Islands Architecture?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Islands Architecture is a modern web architecture pattern where a page consists of mostly static HTML with small "islands" of interactivity. Instead of hydrating the entire page, only the interactive components are hydrated.
        </p>

        <BigWordAlert
          term="Islands Architecture"
          definition="A web architecture pattern where a page is rendered as static HTML with isolated, interactive components ('islands'). Each island is independently hydrated with JavaScript, allowing the rest of the page to remain static and lightweight."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The name comes from the visual metaphor: islands of interactivity in a sea of static content. This is the opposite of traditional SPAs where everything is interactive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Problem: Over-Hydration</h2>
        
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Traditional SSR/SPA Approach</h3>
          <p className="text-slate-300 text-sm mb-4">
            In traditional SSR, the entire page is hydrated, even parts that don't need interactivity.
          </p>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Traditional SSR: Hydrate everything</div>
            <div className="mt-2">{`<html>`}</div>
            <div className="ml-2">{`<body>`}</div>
            <div className="ml-4">{`<header><!-- Static, but still hydrated --></header>`}</div>
            <div className="ml-4">{`<nav><!-- Static, but still hydrated --></nav>`}</div>
            <div className="ml-4">{`<main>`}</div>
            <div className="ml-8">{`<article><!-- Static, but still hydrated --></article>`}</div>
            <div className="ml-8">{`<button><!-- Interactive --></button>`}</div>
            <div className="ml-4">{`</main>`}</div>
            <div className="ml-4">{`<footer><!-- Static, but still hydrated --></footer>`}</div>
            <div className="ml-2">{`</body>`}</div>
            <div>{`</html>`}</div>
            <div className="mt-2 text-red-400">// React hydrates entire page: 2.5MB JavaScript!</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">Problems</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Large JavaScript bundle (hydrating static content)</li>
                <li>Slow TTI (must download and execute all JavaScript)</li>
                <li>Wasted CPU cycles hydrating non-interactive content</li>
                <li>Poor performance on low-end devices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">Islands Architecture Solution</h3>
          <p className="text-slate-300 text-sm mb-4">
            Only hydrate the interactive parts. The rest stays static.
          </p>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Islands Architecture: Hydrate only islands</div>
            <div className="mt-2">{`<html>`}</div>
            <div className="ml-2">{`<body>`}</div>
            <div className="ml-4">{`<header><!-- Static HTML, no JavaScript --></header>`}</div>
            <div className="ml-4">{`<nav><!-- Static HTML, no JavaScript --></nav>`}</div>
            <div className="ml-4">{`<main>`}</div>
            <div className="ml-8">{`<article><!-- Static HTML, no JavaScript --></article>`}</div>
            <div className="ml-8">{`<div id="interactive-button">`}</div>
            <div className="ml-12">{`<!-- Island: Interactive button -->`}</div>
            <div className="ml-8">{`</div>`}</div>
            <div className="ml-4">{`</main>`}</div>
            <div className="ml-4">{`<footer><!-- Static HTML, no JavaScript --></footer>`}</div>
            <div className="ml-2">{`</body>`}</div>
            <div>{`</html>`}</div>
            <div className="mt-2 text-green-400">// React hydrates only the button: 50KB JavaScript!</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Smaller JavaScript bundle (50x smaller!)</li>
                <li>Faster TTI (less to download and execute)</li>
                <li>Better performance on low-end devices</li>
                <li>Better SEO (static HTML is crawlable)</li>
                <li>Progressive enhancement (works without JavaScript)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Islands Architecture Patterns</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">1. Static-First with Islands</h3>
            <p className="text-slate-300 text-sm mb-4">
              Render the entire page as static HTML, then add islands of interactivity.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Astro example</div>
              <div className="mt-2">---</div>
              <div>// Server-side code</div>
              <div>const posts = await getAllPosts();</div>
              <div>---</div>
              <div className="mt-2">{`<html>`}</div>
              <div className="ml-2">{`<body>`}</div>
              <div className="ml-4">{`{posts.map(post => (`}</div>
              <div className="ml-8">{`<article>{post.title}</article>`}</div>
              <div className="ml-4">{`))}`}</div>
              <div className="mt-2 text-slate-400">// Island: Interactive search</div>
              <div className="ml-4">{`<SearchComponent client:load />`}</div>
              <div className="ml-2">{`</body>`}</div>
              <div>{`</html>`}</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-green-300 mb-1">Use Case</h4>
              <p className="text-slate-300">Blogs, documentation sites, marketing pages with a few interactive components</p>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">2. Partial Hydration</h3>
            <p className="text-slate-300 text-sm mb-4">
              Render components on the server, hydrate only the interactive ones on the client.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-purple-300 mb-1">Benefits</h4>
                <p>Combines SSR benefits with selective hydration</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-purple-300 mb-1">Used by</h4>
                <p>Astro, Qwik, Fresh</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">3. Resumability (Qwik)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Instead of hydration, Qwik uses "resumability": the app can resume from where the server left off without re-executing code.
            </p>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-green-300 mb-1">Key Difference</h4>
              <p className="text-slate-300">No hydration needed. JavaScript is only loaded when needed (lazy loading at the event level).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Frameworks Using Islands Architecture</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">Astro</h4>
            <p>The most popular Islands Architecture framework. Renders everything as static HTML by default, with optional interactive islands.</p>
            <div className="bg-slate-900 p-2 rounded text-xs font-mono mt-1">
              <div>{`<SearchComponent client:load />`}</div>
            </div>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">Qwik</h4>
            <p>Uses resumability instead of hydration. Achieves instant-on interactivity with minimal JavaScript.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">Fresh (Deno)</h4>
            <p>Islands Architecture for Deno. Server-renders components, hydrates only interactive islands.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">Marko</h4>
            <p>eBay's framework with built-in Islands Architecture support.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Islands vs Traditional Approaches</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-orange-300">Aspect</th>
                <th className="text-left p-3 text-blue-300">CSR (SPA)</th>
                <th className="text-left p-3 text-purple-300">SSR</th>
                <th className="text-left p-3 text-green-300">Islands</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Bundle Size</td>
                <td className="p-3">Large (entire app)</td>
                <td className="p-3">Large (entire app)</td>
                <td className="p-3">Small (only islands)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">FCP</td>
                <td className="p-3">Slow</td>
                <td className="p-3">Fast</td>
                <td className="p-3">Fast</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">TTI</td>
                <td className="p-3">Slow</td>
                <td className="p-3">Slower</td>
                <td className="p-3">Fast</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">SEO</td>
                <td className="p-3">Poor</td>
                <td className="p-3">Good</td>
                <td className="p-3">Good</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Interactivity</td>
                <td className="p-3">Full</td>
                <td className="p-3">Full</td>
                <td className="p-3">Selective</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Best For</td>
                <td className="p-3">Apps</td>
                <td className="p-3">Apps</td>
                <td className="p-3">Content + Islands</td>
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
              <span>Islands Architecture combines static HTML with small interactive components.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Only hydrate interactive islands, leaving the rest as static HTML.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Dramatically reduces JavaScript bundle size and improves performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Best for content-heavy sites with selective interactivity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Astro is the most popular Islands Architecture framework.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Qwik takes it further with resumability, eliminating hydration entirely.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

