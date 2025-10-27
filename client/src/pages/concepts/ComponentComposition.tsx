import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ComponentCompositionConcept() {
  return (
    <ConceptPage
      title="Component Composition & Module Federation"
      subtitle="Composing applications from independently deployed components"
      previousConcept={{ path: "/concepts/streaming-rendering", label: "Streaming Rendering" }}
      nextConcept={{ path: "/concepts/performance-optimization", label: "Performance Optimization" }}
      backToModule={{ path: "/module/2", label: "Module 2: The Frontend Fragmentation" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Component Composition?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Component composition is the practice of building complex applications by combining smaller, reusable components. In the context of micro-frontends, it means composing applications from independently deployed components owned by different teams.
        </p>

        <BigWordAlert
          term="Component Composition"
          definition="The practice of building applications by combining smaller, self-contained components. Each component is independent, reusable, and can be developed, tested, and deployed separately."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the foundation of modern frontend architecture. Instead of one monolithic application, you build from composable pieces.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Composition Patterns</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">1. Props Drilling</h3>
            <p className="text-slate-300 text-sm mb-4">
              Pass data down through component hierarchy via props.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Parent passes data to children</div>
              <div className="mt-2">function App() {`{`}</div>
              <div className="ml-4">const [user, setUser] = useState(null);</div>
              <div className="ml-4">return {`<Header user={user} />`};</div>
              <div>{`}`}</div>
              <div className="mt-2">function Header({`{`}user{`}`}) {`{`}</div>
              <div className="ml-4">return {`<Nav user={user} />`};</div>
              <div>{`}`}</div>
              <div className="mt-2">function Nav({`{`}user{`}`}) {`{`}</div>
              <div className="ml-4">return {`<div>{user.name}</div>`};</div>
              <div>{`}`}</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ When to use</h4>
                <p>Simple applications with shallow hierarchies</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Problems</h4>
                <p>Deep hierarchies become unwieldy, intermediate components must know about data</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">2. Context API</h3>
            <p className="text-slate-300 text-sm mb-4">
              Share data across component tree without passing props.
            </p>
            <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Create context</div>
              <div className="mt-2">const UserContext = React.createContext();</div>
              <div className="mt-2 text-green-400">// Provider</div>
              <div className="mt-2">function App() {`{`}</div>
              <div className="ml-4">const [user, setUser] = useState(null);</div>
              <div className="ml-4">return (</div>
              <div className="ml-8">{`<UserContext.Provider value={user}>`}</div>
              <div className="ml-12">{`<Header />`}</div>
              <div className="ml-8">{`</UserContext.Provider>`}</div>
              <div className="ml-4">);</div>
              <div>{`}`}</div>
              <div className="mt-2 text-green-400">// Consumer</div>
              <div className="mt-2">function Nav() {`{`}</div>
              <div className="ml-4">const user = useContext(UserContext);</div>
              <div className="ml-4">return {`<div>{user.name}</div>`};</div>
              <div>{`}`}</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ When to use</h4>
                <p>Medium-sized applications, avoiding prop drilling</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Problems</h4>
                <p>Context changes cause all consumers to re-render, not ideal for large apps</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">3. State Management (Redux, Zustand)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Centralized state management for complex applications.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ When to use</h4>
                <p>Large applications with complex state, multiple teams</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Problems</h4>
                <p>Boilerplate code, learning curve, overkill for simple apps</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">4. Render Props & Higher-Order Components</h3>
            <p className="text-slate-300 text-sm mb-4">
              Advanced patterns for sharing component logic.
            </p>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Render Props</h4>
                <p>Component accepts a function as a child that returns JSX</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">HOCs</h4>
                <p>Function that takes a component and returns an enhanced component</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Module Federation</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Module Federation is a Webpack feature that enables runtime composition of independently built and deployed applications.
        </p>

        <BigWordAlert
          term="Module Federation"
          definition="A Webpack feature that allows multiple JavaScript applications to share code at runtime. Each application can expose modules and consume modules from other applications without rebuilding."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">How Module Federation Works</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">1. Host Application</h4>
              <p className="text-slate-300 text-sm">The main application that consumes modules from other applications</p>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">2. Remote Applications</h4>
              <p className="text-slate-300 text-sm">Independent applications that expose modules for consumption</p>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">3. Shared Dependencies</h4>
              <p className="text-slate-300 text-sm">Libraries shared between host and remotes (React, utilities, etc.)</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Module Federation Configuration</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// webpack.config.js - Remote Application (Header)</div>
            <div className="mt-2">module.exports = {`{`}</div>
            <div className="ml-4">plugins: [</div>
            <div className="ml-8">new ModuleFederationPlugin({`{`}</div>
            <div className="ml-12">name: 'header',</div>
            <div className="ml-12">filename: 'remoteEntry.js',</div>
            <div className="ml-12">exposes: {`{`}</div>
            <div className="ml-16">'./Header': './src/Header'</div>
            <div className="ml-12">{`}`},</div>
            <div className="ml-12">shared: ['react', 'react-dom']</div>
            <div className="ml-8">{`}`})</div>
            <div className="ml-4">]</div>
            <div>{`}`};</div>
            <div className="mt-3 text-green-400">// webpack.config.js - Host Application</div>
            <div className="mt-2">module.exports = {`{`}</div>
            <div className="ml-4">plugins: [</div>
            <div className="ml-8">new ModuleFederationPlugin({`{`}</div>
            <div className="ml-12">name: 'host',</div>
            <div className="ml-12">remotes: {`{`}</div>
            <div className="ml-16">header: 'header@http://localhost:3001/remoteEntry.js'</div>
            <div className="ml-12">{`}`},</div>
            <div className="ml-12">shared: ['react', 'react-dom']</div>
            <div className="ml-8">{`}`})</div>
            <div className="ml-4">]</div>
            <div>{`}`};</div>
            <div className="mt-3 text-green-400">// Usage in Host</div>
            <div className="mt-2">const Header = React.lazy(() {`=>`} import('header/Header'));</div>
          </div>

          <div className="space-y-2 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Benefits</h4>
              <p>True independent deployment, shared dependencies, runtime composition</p>
            </div>
            <div className="bg-slate-700/50 p-2 rounded">
              <h4 className="font-semibold text-red-300 mb-1">Challenges</h4>
              <p>Complexity, version conflicts, debugging, network latency</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Composition Best Practices</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">1. Clear Boundaries</h4>
            <p>Define clear interfaces between components. Document what each component expects and provides.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">2. Avoid Tight Coupling</h4>
            <p>Components should not depend on implementation details of other components.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">3. Version Management</h4>
            <p>Use semantic versioning. Document breaking changes. Plan for migrations.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">4. Testing</h4>
            <p>Test components in isolation and integration. Use contract testing.</p>
          </div>

          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">5. Error Handling</h4>
            <p>Handle failures gracefully. Provide fallbacks. Log errors for debugging.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Component composition is building apps from reusable, independent components.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Multiple patterns: props drilling, Context API, state management, render props, HOCs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Module Federation enables runtime composition of independently deployed apps.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Requires clear boundaries, good documentation, and careful version management.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Choose the right pattern based on application complexity and team structure.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

