import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function MicroservicesConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("microservices");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      backToModule={backToModule}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What Are Microservices?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Microservices is an architectural approach to building applications as a collection of small, independent services that communicate over well-defined APIs. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.
        </p>

        <BigWordAlert
          term="Microservices Architecture"
          definition="An architectural style that structures an application as a collection of loosely coupled, independently deployable services that communicate via well-defined APIs. Each service encapsulates a specific business capability and can be developed in different programming languages and technologies."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-blue-300 mb-4">Core Characteristics</h3>
          <div className="space-y-4 text-slate-300">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">1. Single Responsibility</h4>
              <p className="text-sm">Each microservice handles one specific business capability. A product service manages products, a cart service manages shopping carts, etc.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">2. Independent Deployment</h4>
              <p className="text-sm">Services can be deployed without affecting other services. The product team can deploy 10 times per day while the cart team deploys once per week.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">3. Technology Diversity</h4>
              <p className="text-sm">Different services can use different programming languages, databases, and frameworks. The product service might use Node.js, while the payment service uses Java.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">4. Decentralized Data Management</h4>
              <p className="text-sm">Each service owns its own database. There's no shared database across services, preventing tight coupling.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">5. API-First Communication</h4>
              <p className="text-sm">Services communicate through well-defined APIs (REST, gRPC, message queues) rather than direct database access.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Monolith Problem</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          To understand why microservices exist, we need to understand the problems they solve. Traditional monolithic applications have fundamental limitations that become critical as systems scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-300 mb-4">Monolith Problems</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">→</span>
                <span><span className="font-semibold">Tight Coupling:</span> All code lives in one codebase. Changing one feature risks breaking others.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">→</span>
                <span><span className="font-semibold">Scaling Inefficiency:</span> Must scale the entire application even if only one feature needs more resources.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">→</span>
                <span><span className="font-semibold">Technology Lock-in:</span> All services must use the same technology stack.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">→</span>
                <span><span className="font-semibold">Deployment Risk:</span> One bug in any feature can bring down the entire system.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">→</span>
                <span><span className="font-semibold">Team Bottlenecks:</span> Teams block each other due to shared codebase and deployment cycles.</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">Microservices Solutions</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span><span className="font-semibold">Loose Coupling:</span> Services are independent. Changes in one don't affect others.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span><span className="font-semibold">Independent Scaling:</span> Scale only the services that need it.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span><span className="font-semibold">Technology Freedom:</span> Each service chooses its own tech stack.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span><span className="font-semibold">Fault Isolation:</span> One service failure doesn't crash the entire system.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span><span className="font-semibold">Team Autonomy:</span> Teams deploy independently without coordination.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Microservices Architecture Patterns</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Typical Microservices Architecture</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono overflow-x-auto">
            <div className="text-slate-400">┌─────────────────────────────────────────────────┐</div>
            <div className="text-slate-400">│                  API Gateway                      │</div>
            <div className="text-slate-400">│         (Routing, Auth, Rate Limiting)           │</div>
            <div className="text-slate-400">└────────────────┬────────────────────────────────┘</div>
            <div className="text-slate-400">                 │</div>
            <div className="text-slate-400">    ┌────────────┼────────────┬────────────┐</div>
            <div className="text-slate-400">    │            │            │            │</div>
            <div className="text-slate-400">┌───▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐</div>
            <div className="text-slate-400">│Product │ │  Cart  │ │Checkout│ │Payment │</div>
            <div className="text-slate-400">│Service │ │Service │ │Service │ │Service │</div>
            <div className="text-slate-400">└───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘</div>
            <div className="text-slate-400">    │         │         │         │</div>
            <div className="text-slate-400">┌───▼─┐   ┌───▼─┐   ┌───▼─┐   ┌───▼─┐</div>
            <div className="text-slate-400">│ DB  │   │ DB  │   │ DB  │   │ DB  │</div>
            <div className="text-slate-400">└─────┘   └─────┘   └─────┘   └─────┘</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">API Gateway Pattern</h4>
            <p className="text-slate-300 text-sm mb-3">
              A single entry point for all client requests. The gateway handles routing, authentication, rate limiting, and request/response transformation.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Client request</div>
              <div>GET /api/products/123</div>
              <div className="mt-2 text-green-400">// API Gateway routes to:</div>
              <div>GET http://product-service:3001/products/123</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">Service Registry & Discovery</h4>
            <p className="text-slate-300 text-sm mb-3">
              Services register themselves with a service registry. Other services query the registry to find available instances.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Service registers itself</div>
              <div>POST /register</div>
              <div>{`{`}</div>
              <div className="ml-4">"name": "product-service",</div>
              <div className="ml-4">"host": "product-service-1",</div>
              <div className="ml-4">"port": 3001,</div>
              <div className="ml-4">"health": "/health"</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">Load Balancing</h4>
            <p className="text-slate-300 text-sm mb-3">
              Distribute requests across multiple instances of a service to improve availability and performance.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Multiple instances of product service</div>
              <div>product-service-1: 192.168.1.10:3001</div>
              <div>product-service-2: 192.168.1.11:3001</div>
              <div>product-service-3: 192.168.1.12:3001</div>
              <div className="mt-2 text-green-400">// Load balancer distributes requests</div>
              <div>Request 1 → product-service-1</div>
              <div>Request 2 → product-service-2</div>
              <div>Request 3 → product-service-3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Microservices Challenges</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Microservices solve the monolith problem but introduce new challenges. Understanding these trade-offs is critical for deciding whether microservices are right for your organization.
        </p>

        <div className="space-y-4">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">Distributed System Complexity</h4>
            <p className="text-slate-300 text-sm">
              Microservices are inherently distributed systems. Network calls are slower and less reliable than function calls. You must handle network failures, timeouts, and partial failures.
            </p>
          </div>

          <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-orange-300 mb-3">Data Consistency Challenges</h4>
            <p className="text-slate-300 text-sm">
              With decentralized databases, maintaining data consistency across services is difficult. You can't use traditional ACID transactions. You must use eventual consistency and compensating transactions.
            </p>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">Operational Complexity</h4>
            <p className="text-slate-300 text-sm">
              Running dozens or hundreds of services requires sophisticated DevOps infrastructure. You need container orchestration (Kubernetes), service meshes, distributed logging, and monitoring.
            </p>
          </div>

          <div className="bg-pink-900/30 border border-pink-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-pink-300 mb-3">Debugging Difficulty</h4>
            <p className="text-slate-300 text-sm">
              Tracing a request across 10 services is much harder than debugging a monolith. You need distributed tracing tools and strong observability practices.
            </p>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">Testing Complexity</h4>
            <p className="text-slate-300 text-sm">
              Integration testing becomes complex. You need to test service interactions, handle service failures, and manage test data across multiple databases.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">When to Use Microservices</h2>
        
        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">Good Fit for Microservices</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Large, complex applications with multiple independent features</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Multiple teams working on different features</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Different services have different scaling requirements</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Need to use different technologies for different services</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Mature organization with DevOps expertise</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Poor Fit for Microservices</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span>Small, simple applications with few features</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span>Single team or small team</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span>Early-stage startup still figuring out product</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span>Limited DevOps or infrastructure expertise</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">✗</span>
              <span>Strict consistency requirements (financial transactions)</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Microservices decompose monoliths into independent, deployable services.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Each service owns its own database and communicates via APIs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Benefits: independent scaling, technology diversity, team autonomy, fault isolation.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Challenges: distributed complexity, data consistency, operational overhead, debugging difficulty.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Microservices are best for large, complex applications with multiple teams.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Start with a monolith. Only move to microservices when the pain justifies the complexity.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

