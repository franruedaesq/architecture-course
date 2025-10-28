import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function VirtualDOMConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("virtual-dom");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is the Virtual DOM?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The Virtual DOM is React's in-memory representation of the actual DOM. It's a lightweight JavaScript object that mirrors the structure of the real DOM. When state changes, React updates the Virtual DOM first, then syncs changes to the actual DOM.
        </p>

        <BigWordAlert
          term="Virtual DOM"
          definition="A lightweight JavaScript representation of the actual DOM. React maintains a Virtual DOM tree in memory and compares it with the previous version to determine what changes need to be made to the actual DOM."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The Virtual DOM is not unique to React—it's a general concept. But React popularized it and made it performant through its diffing algorithm and Fiber architecture.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Why Virtual DOM?</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">The Problem: Direct DOM Manipulation is Slow</h3>
          <p className="text-slate-300 text-sm mb-4">
            The actual DOM is slow to manipulate. Every change triggers reflows and repaints.
          </p>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-red-400">// Slow: Direct DOM manipulation</div>
            <div className="mt-2">const list = document.getElementById('list');</div>
            <div>for (let i = 0; i {`<`} 1000; i++) {`{`}</div>
            <div className="ml-4">const item = document.createElement('li');</div>
            <div className="ml-4">item.textContent = {`Item \${i}`};</div>
            <div className="ml-4">list.appendChild(item); // Reflow every time!</div>
            <div>{`}`}</div>
            <div className="text-red-400">// 1000 reflows = very slow</div>
          </div>

          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-red-300 mb-1">Why it's slow</h4>
              <p>Each DOM operation triggers layout recalculation (reflow) and pixel rendering (repaint)</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">The Solution: Virtual DOM</h3>
          <p className="text-slate-300 text-sm mb-4">
            Update the Virtual DOM in memory (fast), then batch update the actual DOM (slow).
          </p>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Fast: Virtual DOM batching</div>
            <div className="mt-2">// React updates Virtual DOM in memory</div>
            <div>const vdom = [</div>
            <div className="ml-4">{`{`} type: 'li', text: 'Item 0' {`}`},</div>
            <div className="ml-4">{`{`} type: 'li', text: 'Item 1' {`}`},</div>
            <div className="ml-4">... // 1000 items</div>
            <div>];</div>
            <div className="mt-2 text-slate-400">// Then update actual DOM once</div>
            <div>list.innerHTML = vdom.map(item {`=>`} {`<li>`}...{`</li>`}).join('');</div>
            <div className="text-green-400">// 1 reflow instead of 1000!</div>
          </div>

          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
              <p>Batches DOM updates, minimizes reflows, improves performance dramatically</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">How Virtual DOM Works</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">Step 1: Create Virtual DOM</h3>
            <p className="text-slate-300 text-sm mb-4">
              When a component renders, React creates a Virtual DOM tree.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Component</div>
              <div className="mt-2">function App() {`{`}</div>
              <div className="ml-4">return (</div>
              <div className="ml-8">{`<div>`}</div>
              <div className="ml-12">{`<h1>Hello</h1>`}</div>
              <div className="ml-12">{`<p>World</p>`}</div>
              <div className="ml-8">{`</div>`}</div>
              <div className="ml-4">);</div>
              <div>{`}`}</div>
              <div className="mt-2 text-green-400">// Virtual DOM</div>
              <div className="mt-2">{`{`}</div>
              <div className="ml-4">type: 'div',</div>
              <div className="ml-4">props: {`{}`},</div>
              <div className="ml-4">children: [</div>
              <div className="ml-8">{`{`} type: 'h1', children: 'Hello' {`}`},</div>
              <div className="ml-8">{`{`} type: 'p', children: 'World' {`}`}</div>
              <div className="ml-4">]</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Step 2: Diffing Algorithm</h3>
            <p className="text-slate-300 text-sm mb-4">
              When state changes, React creates a new Virtual DOM and compares it with the old one.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Old Virtual DOM</div>
              <div className="mt-2">{`{`} type: 'h1', children: 'Hello' {`}`}</div>
              <div className="mt-2 text-green-400">// New Virtual DOM (after state change)</div>
              <div className="mt-2">{`{`} type: 'h1', children: 'Hello World' {`}`}</div>
              <div className="mt-2 text-green-400">// Diff: Only text content changed</div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <h4 className="font-semibold text-purple-300 mb-1">Diffing Rules</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>If element type changed, replace the entire element</li>
                <li>If props changed, update only those props</li>
                <li>If children changed, recursively diff children</li>
                <li>Use keys to match elements across renders</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">Step 3: Reconciliation</h3>
            <p className="text-slate-300 text-sm mb-4">
              React applies the minimal changes to the actual DOM.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Only update the text content</div>
              <div className="mt-2">const h1 = document.querySelector('h1');</div>
              <div>h1.textContent = 'Hello World'; // 1 operation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Virtual DOM vs Actual DOM</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-orange-300">Aspect</th>
                <th className="text-left p-3 text-blue-300">Virtual DOM</th>
                <th className="text-left p-3 text-purple-300">Actual DOM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Speed</td>
                <td className="p-3">Fast (in-memory)</td>
                <td className="p-3">Slow (triggers reflows)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Manipulation</td>
                <td className="p-3">Easy (JavaScript objects)</td>
                <td className="p-3">Complex (browser APIs)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Comparison</td>
                <td className="p-3">Can diff efficiently</td>
                <td className="p-3">Can't easily compare states</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Display</td>
                <td className="p-3">Not visible (in memory)</td>
                <td className="p-3">Visible to user</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Virtual DOM Structure</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono">
            <div className="text-green-400">// Simplified Virtual DOM node</div>
            <div className="mt-2">const vnode = {`{`}</div>
            <div className="ml-4">type: 'button', // HTML tag or component</div>
            <div className="ml-4">props: {`{`}</div>
            <div className="ml-8">className: 'btn',</div>
            <div className="ml-8">onClick: handleClick</div>
            <div className="ml-4">{`}`},</div>
            <div className="ml-4">children: 'Click me', // Text or more vnodes</div>
            <div className="ml-4">key: 'btn-1', // For list reconciliation</div>
            <div className="ml-4">ref: null // Reference to actual DOM</div>
            <div>{`}`};</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Reconciliation Concepts</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Keys</h4>
            <p className="text-slate-300 text-sm mb-3">
              Keys help React identify which items have changed, been added, or been removed.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-red-400">// Bad: No keys</div>
              <div className="mt-2">items.map(item =&gt; {`<li>{item}</li>`})</div>
              <div className="mt-2 text-green-400">// Good: With keys</div>
              <div className="mt-2">items.map(item =&gt; {`<li key={item.id}>{item}</li>`})</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Element Type Changes</h4>
            <p className="text-slate-300 text-sm mb-3">
              If element type changes, React replaces the entire element.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-red-400">// Old: {`<div>Hello</div>`}</div>
              <div className="text-red-400">// New: {`<span>Hello</span>`}</div>
              <div className="text-green-400">// React replaces entire element</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. Props Changes</h4>
            <p className="text-slate-300 text-sm mb-3">
              If only props change, React updates those props on the existing element.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Old: {`<button className="btn">Click</button>`}</div>
              <div className="text-green-400">// New: {`<button className="btn active">Click</button>`}</div>
              <div className="text-green-400">// React updates className prop</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Virtual DOM Performance</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Myth: Virtual DOM is Always Faster</h3>
          <p className="text-slate-300 text-sm mb-4">
            Virtual DOM is not always faster than direct DOM manipulation. It's faster when:
          </p>
          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-green-300 mb-1">When Virtual DOM Wins</h4>
              <p>Multiple updates to the same DOM, complex state management, large lists</p>
            </div>
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-red-300 mb-1">When Direct DOM is Faster</h4>
              <p>Single, simple updates, animations, real-time data (canvas, WebGL)</p>
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
              <span>Virtual DOM is React's in-memory representation of the actual DOM.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Enables efficient batching of DOM updates and minimizes reflows.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Diffing algorithm compares old and new Virtual DOM to find changes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Keys are essential for correct reconciliation in lists.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Virtual DOM is faster for complex state changes, not always for simple updates.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Fiber architecture makes Virtual DOM rendering interruptible.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

