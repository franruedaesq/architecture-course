import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ReactFiberConcept() {
  return (
    <ConceptPage
      title="React Fiber Architecture"
      subtitle="Understanding React's reconciliation algorithm and rendering engine"
      previousConcept={{ path: "/concepts/server-side-rendering", label: "Server-Side Rendering" }}
      nextConcept={{ path: "/concepts/hydration", label: "Hydration" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is React Fiber?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          React Fiber is the new reconciliation engine introduced in React 16. It's a complete rewrite of React's core algorithm that determines how to update the DOM when component state changes. Fiber is the "weird part" that makes React so powerful and performant.
        </p>

        <BigWordAlert
          term="React Fiber"
          definition="React's reconciliation engine that breaks rendering work into small units called 'fibers'. It can pause, resume, and prioritize work, enabling features like concurrent rendering, suspense, and better performance on low-end devices."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          Before Fiber, React used a 'stack reconciler' that would process the entire component tree synchronously. If rendering took 100ms, the browser couldn't do anything else for 100ms—no animations, no user input. Fiber fixes this by making rendering interruptible.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Problem: Stack Reconciler</h2>
        
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">How Stack Reconciler Works</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-slate-400">// Stack Reconciler (React 15 and earlier)</div>
            <div className="mt-2 text-green-400">1. Component updates (setState)</div>
            <div className="text-green-400">2. React traverses entire component tree</div>
            <div className="text-green-400">3. Calls render() on each component</div>
            <div className="text-green-400">4. Compares old and new virtual DOM</div>
            <div className="text-green-400">5. Updates actual DOM</div>
            <div className="mt-2 text-red-400">// All synchronously - can't be interrupted!</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Timeline Example</h4>
              <div className="font-mono text-xs">
                <div className="text-slate-400">0ms: User clicks button</div>
                <div>5ms: setState() called</div>
                <div>5ms: React starts rendering</div>
                <div>105ms: React finishes rendering (100ms of work)</div>
                <div className="text-red-400">// Browser is blocked for 100ms!</div>
                <div className="text-red-400">// Animations stutter, input is delayed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-300 mb-4">The Problem</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span><span className="font-semibold">Blocking:</span> Rendering blocks the main thread</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span><span className="font-semibold">Janky animations:</span> 60fps requires ~16ms per frame. 100ms of rendering = dropped frames</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span><span className="font-semibold">Unresponsive UI:</span> User input is delayed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span><span className="font-semibold">No prioritization:</span> All updates are treated equally</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Solution: Fiber Architecture</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Fiber breaks rendering work into small units and can pause, resume, and prioritize work. This allows React to:
        </p>

        <div className="space-y-4">
          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">1. Interruptible Rendering</h4>
            <p className="text-slate-300 text-sm mb-3">
              React can pause rendering, let the browser handle animations and input, then resume.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fiber Timeline</div>
              <div className="mt-2">0ms: User clicks button</div>
              <div>5ms: setState() called</div>
              <div>5ms: React starts rendering (Fiber 1)</div>
              <div>10ms: React pauses (16ms frame deadline)</div>
              <div>16ms: Browser renders animation frame</div>
              <div>17ms: React resumes rendering (Fiber 2)</div>
              <div>22ms: React pauses again</div>
              <div>33ms: Browser renders next frame</div>
              <div className="text-green-400">// Smooth 60fps animation!</div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">2. Work Prioritization</h4>
            <p className="text-slate-300 text-sm mb-3">
              Different updates have different priorities. User input should be prioritized over background updates.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fiber Priorities</div>
              <div className="mt-2">Immediate: User input (onClick, onChange)</div>
              <div>High: Animations, transitions</div>
              <div>Normal: Regular state updates</div>
              <div>Low: Data fetching, analytics</div>
              <div>Idle: Non-urgent background work</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">3. Error Boundaries</h4>
            <p className="text-slate-300 text-sm mb-3">
              If rendering a component fails, Fiber can catch the error and render a fallback without crashing the entire app.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Understanding the DOM</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          To understand Fiber, you need to understand the DOM (Document Object Model) and why directly manipulating it is slow.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">What is the DOM?</h3>
          <p className="text-slate-300 text-sm mb-4">
            The DOM is a tree representation of the HTML document. Each HTML element is a node in the tree.
          </p>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// HTML</div>
            <div className="mt-2">{`<html>`}</div>
            <div className="ml-2">{`<body>`}</div>
            <div className="ml-4">{`<div id="root">`}</div>
            <div className="ml-6">{`<h1>Hello</h1>`}</div>
            <div className="ml-6">{`<p>World</p>`}</div>
            <div className="ml-4">{`</div>`}</div>
            <div className="ml-2">{`</body>`}</div>
            <div>{`</html>`}</div>
            <div className="mt-3 text-green-400">// DOM Tree</div>
            <div className="mt-2">html</div>
            <div className="ml-2">├── body</div>
            <div className="ml-4">│   └── div#root</div>
            <div className="ml-8">│       ├── h1 (text: "Hello")</div>
            <div className="ml-8">│       └── p (text: "World")</div>
          </div>
        </div>

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Why Direct DOM Manipulation is Slow</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">1. Reflow (Layout Recalculation)</h4>
              <p>When you change a DOM element's size or position, the browser must recalculate the layout of the entire page.</p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono mt-2">
                <div className="text-red-400">// ❌ Slow: Causes reflow</div>
                <div>element.style.width = '100px'; // Reflow</div>
                <div>element.style.height = '100px'; // Reflow</div>
                <div>element.style.color = 'red'; // Repaint</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">2. Repaint</h4>
              <p>When you change a DOM element's appearance (color, background), the browser must repaint the pixels.</p>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">3. Thrashing</h4>
              <p>Reading and writing DOM properties in a loop causes repeated reflows.</p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono mt-2">
                <div className="text-red-400">// ❌ Very slow: DOM thrashing</div>
                <div>for (let i = 0; i {`<`} 1000; i++) {`{`}</div>
                <div className="ml-4">const width = element.offsetWidth; // Read (reflow)</div>
                <div className="ml-4">element.style.width = (width + 1) + 'px'; // Write (reflow)</div>
                <div>{`}`}</div>
                <div className="text-red-400">// 1000 reflows!</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">How React Optimizes DOM Updates</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">1. Virtual DOM</h4>
              <p>React keeps a JavaScript representation of the DOM (Virtual DOM). Changes are made in memory first.</p>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">2. Diffing</h4>
              <p>React compares old and new Virtual DOM to find minimal changes needed.</p>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">3. Batching</h4>
              <p>React batches DOM updates and applies them all at once, minimizing reflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Fiber Data Structure</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A Fiber is a JavaScript object representing a unit of work. Each component instance and DOM node has a corresponding Fiber.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Fiber Object Structure</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono">
            <div className="text-green-400">// Simplified Fiber structure</div>
            <div className="mt-2">const fiber = {`{`}</div>
            <div className="ml-4">// Component info</div>
            <div className="ml-4">type: MyComponent, // Function or class</div>
            <div className="ml-4">key: 'item-1',</div>
            <div className="ml-4">props: {`{`} title: 'Hello' {`}`},</div>
            <div className="ml-4">state: {`{`} count: 0 {`}`},</div>
            <div className="mt-2 text-slate-400">// Tree structure</div>
            <div className="ml-4">parent: parentFiber,</div>
            <div className="ml-4">child: childFiber,</div>
            <div className="ml-4">sibling: siblingFiber,</div>
            <div className="mt-2 text-slate-400">// Work tracking</div>
            <div className="ml-4">pendingProps: {`{`} title: 'Hello' {`}`},</div>
            <div className="ml-4">memoizedProps: {`{`} title: 'Hello' {`}`},</div>
            <div className="ml-4">memoizedState: {`{`} count: 0 {`}`},</div>
            <div className="mt-2 text-slate-400">// Effect hooks</div>
            <div className="ml-4">hooks: [useEffect, useState, ...],</div>
            <div className="mt-2 text-slate-400">// Rendering</div>
            <div className="ml-4">alternate: oldFiber, // Previous version</div>
            <div className="ml-4">effectTag: 'UPDATE', // What to do with this fiber</div>
            <div>{`}`};</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Fiber Phases</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          React's rendering process has two main phases:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Render Phase (Can be paused)</h4>
            <p className="text-slate-300 text-sm mb-3">
              React traverses the Fiber tree, calls render() on components, and determines what changes are needed. This phase can be interrupted.
            </p>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <p className="text-slate-300">Tasks: Call render(), call useState(), compare old and new Virtual DOM</p>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Commit Phase (Cannot be paused)</h4>
            <p className="text-slate-300 text-sm mb-3">
              React applies the changes to the actual DOM. This phase must complete without interruption to maintain consistency.
            </p>
            <div className="bg-slate-700/50 p-3 rounded text-sm">
              <p className="text-slate-300">Tasks: Update DOM, run useEffect, run useLayoutEffect</p>
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
              <span>Fiber is React's reconciliation engine that makes rendering interruptible.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Breaks rendering into small units that can be paused and resumed.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Enables work prioritization: user input {`>`} animations {`>`} normal updates {`>`} background work.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Render phase can be interrupted, commit phase cannot.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Enables features like Suspense, Error Boundaries, and Concurrent Rendering.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Direct DOM manipulation is slow due to reflows and repaints.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

