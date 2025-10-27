import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ServiceDiscoveryConcept() {
  return (
    <ConceptPage
      title="Service Discovery"
      subtitle="How services find and communicate with each other in dynamic environments"
      previousConcept={{ path: "/concepts/backend-for-frontend", label: "Backend for Frontend" }}
      nextConcept={{ path: "/concepts/circuit-breaker", label: "Circuit Breaker" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Service Discovery Problem</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In a monolithic application, all code runs in a single process. You know exactly where everything is. But in microservices, services are distributed across multiple servers, containers, or cloud instances. Services need to find each other dynamically.
        </p>

        <BigWordAlert
          term="Service Discovery"
          definition="The process by which services locate and communicate with each other in a distributed system. As services are deployed, scaled, and replaced, the system must automatically track their locations."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          In traditional monoliths, you hardcode IP addresses. But in microservices, services are constantly being deployed, scaled up/down, and replaced. You can't hardcode addresses.
        </p>

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">The Problem</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-red-400">// ❌ Hardcoding addresses (doesn't work in microservices)</div>
            <div className="mt-2">const productService = 'http://192.168.1.100:3001';</div>
            <div className="mt-2 text-slate-400">// Problems:</div>
            <div className="mt-2 text-slate-400">// 1. Service moves to different IP → breaks</div>
            <div>// 2. Service scales to 3 instances → which IP to use?</div>
            <div>// 3. Service is replaced → old IP is dead</div>
            <div>// 4. Manual updates required → error-prone</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Service Discovery Patterns</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Client-Side Discovery</h3>
            <p className="text-slate-300 text-sm mb-4">
              The client is responsible for discovering service locations. The client queries a service registry to find available instances.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Client-Side Discovery Flow</div>
              <div className="mt-2">1. Client queries Service Registry</div>
              <div className="ml-4">GET /registry/product-service</div>
              <div className="mt-2">2. Registry returns list of instances</div>
              <div className="ml-4">[</div>
              <div className="ml-8">{`{`} host: '192.168.1.100', port: 3001 {`}`},</div>
              <div className="ml-8">{`{`} host: '192.168.1.101', port: 3001 {`}`},</div>
              <div className="ml-8">{`{`} host: '192.168.1.102', port: 3001 {`}`}</div>
              <div className="ml-4">]</div>
              <div className="mt-2">3. Client picks one (load balancing)</div>
              <div className="ml-4">const instance = instances[Math.random() * instances.length];</div>
              <div className="mt-2">4. Client calls the service</div>
              <div className="ml-4">GET http://192.168.1.100:3001/products</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Simple to understand</li>
                  <li>No extra infrastructure (no service mesh)</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Client must implement discovery logic</li>
                  <li>Client must implement load balancing</li>
                  <li>Client must handle service failures</li>
                  <li>Logic duplicated across all clients</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Server-Side Discovery</h3>
            <p className="text-slate-300 text-sm mb-4">
              A load balancer or API gateway handles service discovery. The client doesn't know about the registry; it just calls the load balancer.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Server-Side Discovery Flow</div>
              <div className="mt-2">1. Client calls Load Balancer</div>
              <div className="ml-4">GET http://load-balancer/products</div>
              <div className="mt-2">2. Load Balancer queries Service Registry</div>
              <div className="ml-4">GET /registry/product-service</div>
              <div className="mt-2">3. Load Balancer picks an instance</div>
              <div className="ml-4">const instance = instances[roundRobin()];</div>
              <div className="mt-2">4. Load Balancer forwards request</div>
              <div className="ml-4">GET http://192.168.1.100:3001/products</div>
              <div className="mt-2">5. Load Balancer returns response to client</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Client doesn't need discovery logic</li>
                  <li>Load balancing is centralized</li>
                  <li>Simpler client code</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Load balancer is a single point of failure</li>
                  <li>Extra network hop (client → LB → service)</li>
                  <li>Load balancer must be highly available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Service Registry</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A service registry is a database of available service instances. Services register themselves when they start and deregister when they stop.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">How Service Registration Works</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">1. Service Starts</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Product Service instance starts on 192.168.1.100:3001</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">2. Service Registers</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>POST /registry/register</div>
                <div>{`{`}</div>
                <div className="ml-4">serviceName: 'product-service',</div>
                <div className="ml-4">host: '192.168.1.100',</div>
                <div className="ml-4">port: 3001,</div>
                <div className="ml-4">healthCheck: 'http://192.168.1.100:3001/health'</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">3. Registry Stores Entry</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>product-service: [</div>
                <div className="ml-4">{`{`} host: '192.168.1.100', port: 3001, healthy: true {`}`}</div>
                <div>]</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">4. Registry Health Checks</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Periodically: GET /health on each instance</div>
                <div>If unhealthy → remove from registry</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">5. Service Deregisters</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>When service shuts down:</div>
                <div>POST /registry/deregister</div>
                <div>{`{`} serviceName: 'product-service', host: '192.168.1.100' {`}`}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Service Registries</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">Consul</h4>
              <p>HashiCorp's service mesh and service registry. Provides health checking, key-value store, and DNS interface.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-1">Eureka</h4>
              <p>Netflix's service registry. Built for AWS. Provides client-side and server-side discovery.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Kubernetes Service Discovery</h4>
              <p>Built into Kubernetes. Services are automatically discovered via DNS (service-name.namespace.svc.cluster.local).</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-1">etcd</h4>
              <p>Distributed key-value store. Can be used as a service registry. Used by Kubernetes internally.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-indigo-300 mb-1">AWS Service Discovery</h4>
              <p>AWS Cloud Map. Managed service discovery for AWS resources.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Load Balancing Strategies</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Once you have a list of available service instances, you need to decide which one to use. Load balancing strategies distribute requests across instances.
        </p>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Round Robin</h4>
            <p className="text-slate-300 text-sm mb-3">
              Distribute requests equally across all instances in order.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Round Robin</div>
              <div className="mt-2">instances = [A, B, C]</div>
              <div>request 1 → A</div>
              <div>request 2 → B</div>
              <div>request 3 → C</div>
              <div>request 4 → A (cycle repeats)</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Least Connections</h4>
            <p className="text-slate-300 text-sm mb-3">
              Route requests to the instance with the fewest active connections.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Least Connections</div>
              <div className="mt-2">A: 10 connections</div>
              <div>B: 5 connections ← Route here</div>
              <div>C: 8 connections</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">Random</h4>
            <p className="text-slate-300 text-sm mb-3">
              Randomly select an instance. Simple but effective.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Random</div>
              <div className="mt-2">const instance = instances[Math.random() * instances.length];</div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">IP Hash</h4>
            <p className="text-slate-300 text-sm mb-3">
              Hash the client IP to determine which instance to use. Same client always goes to same instance (session affinity).
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// IP Hash</div>
              <div className="mt-2">hash(clientIP) % instances.length = instance index</div>
              <div className="mt-2 text-slate-400">// Same client always routes to same instance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Health Checks</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Service registries periodically check if services are healthy. Unhealthy instances are removed from the registry.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Types of Health Checks</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">HTTP Health Check</h4>
              <p>Call a health endpoint. If it returns 200, service is healthy.</p>
              <div className="font-mono text-xs text-slate-400 mt-1">GET /health → {`{`} status: 'healthy' {`}`}</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">TCP Health Check</h4>
              <p>Try to establish a TCP connection. If successful, service is healthy.</p>
              <div className="font-mono text-xs text-slate-400 mt-1">TCP connect to 192.168.1.100:3001 → success</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-1">Heartbeat Health Check</h4>
              <p>Service periodically sends a heartbeat. If heartbeat stops, service is unhealthy.</p>
              <div className="font-mono text-xs text-slate-400 mt-1">Service sends heartbeat every 10 seconds</div>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-1">Custom Health Check</h4>
              <p>Check specific dependencies (database, cache, external APIs).</p>
              <div className="font-mono text-xs text-slate-400 mt-1">Check: database connected, cache available, API responding</div>
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
              <span>Service discovery enables services to find each other dynamically.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Client-side discovery: client queries registry and picks an instance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Server-side discovery: load balancer handles discovery and routing.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Service registry stores available service instances and their health status.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Load balancing strategies (round robin, least connections) distribute requests.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Health checks remove unhealthy instances from the registry.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

