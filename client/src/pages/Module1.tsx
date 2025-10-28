import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export default function Module1() {
  return (
    <ModuleLayout moduleId={1}>
      {/* Lesson 1: The Monolith Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: The Monolith's Downfall</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          For years, the standard approach was the <span className="font-semibold">Monolith</span>, often lovingly referred to as the "Big Ball of Mud." It was simple to start with, but as the team and codebase grew, it became a nightmare. One tiny change in the user profile code could bring down the entire e-commerce checkout system. The whole application was tightly coupled, meaning a change in one place required deploying <span className="italic">everything</span>.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            The Monolith Problem
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Tight coupling: Changes in one module affect the entire system</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Deployment risk: Must deploy the entire application for any change</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Team bottlenecks: Multiple teams can't work independently</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Scaling challenges: Must scale the entire application, not just the slow parts</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed">
          The modern web is built on a fundamental desire for <span className="font-semibold text-blue-300">decoupling</span> and <span className="font-semibold text-blue-300">independent deployment</span>. This is the single <span className="italic">why</span> behind every complex term we are about to explore.
        </p>
      </section>

      {/* Lesson 2: Microservices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Microservices - The Great Divorce</h2>

        <BigWordAlert
          term="Microservices"
          definition="Instead of a single, monolithic application, a Microservice architecture breaks the backend into a collection of small, independent services, each running in its own process and communicating via lightweight mechanisms, typically HTTP/REST or gRPC."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          Think of a traditional restaurant kitchen. A Monolith is like having a single, highly-stressed chef trying to cook every single dish on the menu—the appetizer, the main course, the dessert, and even wash the dishes. If the chef gets sick (a bug), the whole restaurant shuts down.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A <span className="font-semibold">Microservices</span> architecture, however, is a specialized assembly line. You have a "User Service" chef, a "Product Catalog Service" chef, an "Inventory Service" chef, and a "Payment Service" chef. Each one only knows how to do their one job perfectly.
        </p>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">The Microservices Advantage</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Independent deployment: Each service can be deployed separately</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Team autonomy: Different teams own different services</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Selective scaling: Scale only the services that need it</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Technology flexibility: Each service can use different tech stacks</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The <span className="font-semibold text-yellow-300">weird part</span> is that now, to load a single product page, your frontend might need to talk to the Product Catalog, the User Service (for personalization), and the Review Service. That's three separate network calls! This complexity is where our next concept comes in.
        </p>

        {/* Microservices Challenges */}
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">⚠️ The Microservices Challenges</h3>
          <p className="text-slate-300 mb-4">Before you jump into microservices, understand the real costs:</p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span><span className="font-semibold">Network Complexity:</span> Services communicate over the network. Network calls are slow and can fail. A single page might require 10+ service calls, introducing latency and failure points.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span><span className="font-semibold">Distributed Debugging:</span> A bug might span 3 services. Tracing a request through the system is exponentially harder than debugging a monolith.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span><span className="font-semibold">Data Consistency:</span> Each service has its own database. Keeping data in sync across services is a nightmare (eventual consistency).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span><span className="font-semibold">Operational Overhead:</span> You now have to deploy, monitor, and maintain 10+ services instead of 1. This requires mature DevOps practices.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span><span className="font-semibold">Team Coordination:</span> 10 services = 10 teams. Communication and coordination become critical and time-consuming.</span>
            </li>
          </ul>
        </div>

        {/* Advanced Concepts */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Advanced Concepts: Service Boundaries & Domain-Driven Design</h3>
          <p className="text-slate-300 mb-4">
            The key to successful microservices is defining clear service boundaries. This is where <span className="font-semibold">Domain-Driven Design (DDD)</span> comes in.
          </p>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Bounded Contexts</h4>
              <p className="text-sm mb-2">
                Each microservice is a "bounded context"—a specific business domain with its own language, rules, and database. The "Order Service" doesn't care about how the "Inventory Service" manages stock internally. They communicate through well-defined APIs.
              </p>
            </div>
            <div className="border-t border-blue-700/50 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">The CAP Theorem</h4>
              <p className="text-sm mb-2">
                In distributed systems, you can guarantee at most two of three properties:
              </p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li><span className="font-semibold">Consistency:</span> All nodes see the same data</li>
                <li><span className="font-semibold">Availability:</span> The system is always responsive</li>
                <li><span className="font-semibold">Partition Tolerance:</span> The system works even if network partitions occur</li>
              </ul>
              <p className="text-sm mt-2">Most microservices choose AP (Availability + Partition Tolerance) and accept eventual consistency.</p>
            </div>
          </div>
        </div>

        {/* When NOT to use Microservices */}
        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">When NOT to Use Microservices</h3>
          <p className="text-slate-300 mb-4">Microservices are not a silver bullet. Consider staying with a monolith if:</p>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Your team is small (less than 10 people)</li>
            <li>• Your application is simple and doesn't have clear domain boundaries</li>
            <li>• You don't have the operational maturity (CI/CD, monitoring, logging, distributed tracing)</li>
            <li>• Performance is not a critical concern</li>
            <li>• Your data is highly interconnected and requires frequent ACID transactions</li>
            <li>• You're building an MVP and need to move fast</li>
          </ul>
        </div>

        {/* Service Communication Patterns */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Service Communication Patterns</h3>
          <p className="text-slate-300 mb-4">Services need to talk to each other. There are two main patterns:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Synchronous (Request-Response)</h4>
              <p className="text-slate-300 text-sm mb-3">Service A calls Service B and waits for a response (HTTP/REST, gRPC).</p>
              <div className="space-y-2 text-slate-300 text-xs">
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Simple to understand and debug</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Slow if Service B is slow (cascading failures)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Tight coupling between services</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Asynchronous (Event-Driven)</h4>
              <p className="text-slate-300 text-sm mb-3">Service A publishes an event to a message queue. Service B listens and reacts (RabbitMQ, Kafka).</p>
              <div className="space-y-2 text-slate-300 text-xs">
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Loose coupling between services</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Fast and scalable</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Eventually consistent (harder to reason about)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Patterns */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Advanced Communication Patterns</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Circuit Breaker Pattern</h4>
              <p className="text-sm mb-2">
                If a service is failing, stop calling it immediately instead of waiting for timeouts. This prevents cascading failures.
              </p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// Pseudo-code</div>
                <div>if (failureRate {`>`} 50%) {`{`}</div>
                <div className="ml-4">circuitBreaker.open(); // Stop calling the service</div>
                <div>{`}`}</div>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-purple-300 mb-2">Service Discovery</h4>
              <p className="text-sm">
                In a microservices world, services are deployed and removed dynamically. Service discovery (Consul, Kubernetes DNS) automatically registers and discovers services so clients don't need hardcoded addresses.
              </p>
            </div>
            <div className="border-t border-slate-700 pt-4">
              <h4 className="font-semibold text-green-300 mb-2">API Gateway</h4>
              <p className="text-sm">
                A single entry point for all client requests. The API Gateway routes requests to the appropriate microservice, handles authentication, rate limiting, and request/response transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson 3: Backend for Frontend */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Backend for Frontend (BFF) - The Perfect Mediator</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          If the frontend had to make three or four calls to different services just to load a page, it would be slow, complex, and a maintenance nightmare. The frontend developer would have to know about all the backend services. We need a mediator.
        </p>

        <BigWordAlert
          term="Backend for Frontend (BFF)"
          definition="A server layer that sits between the UI and the complex Microservices. It is specifically designed to serve one or a few frontend experiences (e.g., the 'Product Page BFF' or the 'Checkout BFF'). Its job is to aggregate data from multiple microservices and transform it into a single, clean payload tailored for the UI."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The BFF is the <span className="font-semibold text-yellow-300">weird part</span> because it violates the "clean separation of concerns" rule. It's a backend service that knows a lot about the frontend. It is a <span className="italic">necessary compromise</span>. It acts as the <span className="font-semibold">waiter</span> in our restaurant analogy. The waiter (BFF) takes a single order from the customer (UI), goes back to the kitchen (Microservices), talks to the various specialized chefs (Product, Review, User), collects all the pieces, and delivers one perfect plate (the aggregated JSON payload) back to the customer.
        </p>

        {/* Architecture Diagram */}
        <div className="my-8">
          <ArchitectureDiagram />
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">The BFF Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-white">UI Request</p>
                  <p className="text-slate-400 text-sm">Frontend sends: <code className="bg-slate-900 px-2 py-1 rounded">GET /api/product/123</code></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-white">BFF Receives</p>
                  <p className="text-slate-400 text-sm">"I need data for the product page."</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-white">BFF Calls Microservices</p>
                  <p className="text-slate-400 text-sm">
                    <code className="bg-slate-900 px-2 py-1 rounded block mb-1">GET /product-catalog/123</code>
                    <code className="bg-slate-900 px-2 py-1 rounded block mb-1">GET /reviews/product/123</code>
                    <code className="bg-slate-900 px-2 py-1 rounded">GET /user-service/preferences</code>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <p className="font-semibold text-white">BFF Aggregates & Transforms</p>
                  <p className="text-slate-400 text-sm">Combines the three responses into a single, optimized JSON object.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">5</div>
                <div>
                  <p className="font-semibold text-white">BFF Responds</p>
                  <p className="text-slate-400 text-sm">Sends the single JSON payload back to the UI.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Case Study */}
        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Real-World Case Study: E-Commerce Product Page</h3>
          <p className="text-slate-300 mb-4">
            Let's trace a real request through a microservices architecture. A user visits <code className="bg-slate-900 px-2 py-1 rounded text-sm">amazon.com/dp/B0123456789</code>
          </p>

          <div className="bg-slate-900 p-4 rounded mb-4 text-sm text-slate-300 font-mono overflow-x-auto">
            <div className="text-blue-300 mb-2">// Frontend Request</div>
            <div>GET /api/product/B0123456789</div>
            <div>Headers: {`{`}</div>
            <div className="ml-4">Authorization: Bearer token_xyz</div>
            <div className="ml-4">User-ID: user_12345</div>
            <div>{`}`}</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Step 1: BFF Receives Request</h4>
              <p>The BFF validates the token and extracts the user ID from the JWT.</p>
            </div>
            <div className="border-t border-purple-700/50 pt-3">
              <h4 className="font-semibold text-purple-300 mb-2">Step 2: BFF Makes Parallel Requests</h4>
              <p className="mb-2">The BFF doesn't wait for one service to respond before calling the next. It makes all requests in parallel:</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono">
                <div className="text-green-400">// Parallel requests (not sequential!)</div>
                <div className="text-slate-400">Promise.all([</div>
                <div className="ml-4">productService.getProduct('B0123456789'),</div>
                <div className="ml-4">reviewService.getReviews('B0123456789'),</div>
                <div className="ml-4">inventoryService.getStock('B0123456789'),</div>
                <div className="ml-4">userService.getPreferences('user_12345')</div>
                <div className="text-slate-400">])</div>
              </div>
            </div>
            <div className="border-t border-purple-700/50 pt-3">
              <h4 className="font-semibold text-green-300 mb-2">Step 3: Services Respond</h4>
              <p className="mb-2">Each service responds with its own data format:</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// Product Service Response (100ms)</div>
                <div>{`{`}</div>
                <div className="ml-4">"id": "B0123456789",</div>
                <div className="ml-4">"name": "Premium Wireless Headphones",</div>
                <div className="ml-4">"price": 199.99,</div>
                <div className="ml-4">"description": "High-quality audio..."</div>
                <div>{`}`}</div>
              </div>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto mt-2">
                <div className="text-green-400">// Reviews Service Response (150ms)</div>
                <div>{`{`}</div>
                <div className="ml-4">"productId": "B0123456789",</div>
                <div className="ml-4">"averageRating": 4.5,</div>
                <div className="ml-4">"totalReviews": 2847,</div>
                <div className="ml-4">"reviews": [{`[...]`}]</div>
                <div>{`}`}</div>
              </div>
            </div>
            <div className="border-t border-purple-700/50 pt-3">
              <h4 className="font-semibold text-yellow-300 mb-2">Step 4: BFF Aggregates (Total: ~150ms)</h4>
              <p className="mb-2">The BFF waits for all responses (150ms is the slowest), then transforms and combines them:</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono overflow-x-auto">
                <div className="text-green-400">// BFF Response to Frontend</div>
                <div>{`{`}</div>
                <div className="ml-4">"product": {`{`}</div>
                <div className="ml-8">"id": "B0123456789",</div>
                <div className="ml-8">"name": "Premium Wireless Headphones",</div>
                <div className="ml-8">"price": 199.99</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"reviews": {`{`}</div>
                <div className="ml-8">"rating": 4.5,</div>
                <div className="ml-8">"count": 2847</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"inventory": {`{`}</div>
                <div className="ml-8">"inStock": true,</div>
                <div className="ml-8">"quantity": 1250</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">"userPreferences": {`{`}</div>
                <div className="ml-8">"currency": "USD",</div>
                <div className="ml-8">"language": "en"</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="bg-orange-900/30 border border-orange-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-300 mb-4">Performance Analysis: Sequential vs Parallel</h3>
          <p className="text-slate-300 mb-4">
            This is where the BFF design choice matters. Let's compare two approaches:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-red-300 mb-2">❌ Sequential Calls (Bad)</h4>
              <div className="text-slate-300 text-sm space-y-1 mb-3">
                <div>Product Service: 100ms</div>
                <div>Reviews Service: 150ms</div>
                <div>Inventory Service: 80ms</div>
                <div>User Service: 50ms</div>
                <div className="border-t border-slate-600 pt-2 font-semibold">Total: 380ms</div>
              </div>
              <p className="text-xs text-slate-400">Waiting for each response before calling the next.</p>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-green-300 mb-2">✓ Parallel Calls (Good)</h4>
              <div className="text-slate-300 text-sm space-y-1 mb-3">
                <div>All calls made simultaneously</div>
                <div>Slowest response: 150ms (Reviews)</div>
                <div className="border-t border-slate-600 pt-2 font-semibold">Total: 150ms</div>
              </div>
              <p className="text-xs text-slate-400">2.5x faster! This is the power of the BFF.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Concept Pages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📚 Deep Dive into Core Concepts</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Each concept mentioned in this module has a comprehensive university-level explanation. Click any concept below to explore in depth:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/concepts/microservices">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 hover:from-blue-900/60 hover:to-blue-800/40 border border-blue-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-blue-300 mb-2 text-lg">→ Microservices</h4>
              <p className="text-slate-400 text-sm">Definition, architecture patterns, challenges, when to use, and real-world examples</p>
            </div>
          </Link>
          <Link href="/concepts/service-boundaries">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 hover:from-green-900/60 hover:to-green-800/40 border border-green-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-green-300 mb-2 text-lg">→ Service Boundaries</h4>
              <p className="text-slate-400 text-sm">Defining boundaries, bounded contexts, cohesion, and design techniques</p>
            </div>
          </Link>
          <Link href="/concepts/domain-driven-design">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 hover:from-purple-900/60 hover:to-purple-800/40 border border-purple-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-purple-300 mb-2 text-lg">→ Domain-Driven Design</h4>
              <p className="text-slate-400 text-sm">DDD principles, ubiquitous language, aggregates, value objects, and entities</p>
            </div>
          </Link>
          <Link href="/concepts/cap-theorem">
            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 hover:from-yellow-900/60 hover:to-yellow-800/40 border border-yellow-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-yellow-300 mb-2 text-lg">→ CAP Theorem</h4>
              <p className="text-slate-400 text-sm">Consistency, availability, partition tolerance, and trade-offs in distributed systems</p>
            </div>
          </Link>
          <Link href="/concepts/service-communication">
            <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 hover:from-indigo-900/60 hover:to-indigo-800/40 border border-indigo-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-indigo-300 mb-2 text-lg">→ Service Communication</h4>
              <p className="text-slate-400 text-sm">Synchronous (REST, gRPC) vs asynchronous (message queues, events) patterns</p>
            </div>
          </Link>
          <Link href="/concepts/advanced-communication">
            <div className="bg-gradient-to-br from-pink-900/40 to-pink-800/20 hover:from-pink-900/60 hover:to-pink-800/40 border border-pink-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-pink-300 mb-2 text-lg">→ Advanced Communication</h4>
              <p className="text-slate-400 text-sm">Event-driven architecture, sagas, choreography vs orchestration patterns</p>
            </div>
          </Link>
          <Link href="/concepts/backend-for-frontend">
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 hover:from-cyan-900/60 hover:to-cyan-800/40 border border-cyan-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-cyan-300 mb-2 text-lg">→ Backend for Frontend</h4>
              <p className="text-slate-400 text-sm">BFF pattern, data aggregation, transformation, and composition strategies</p>
            </div>
          </Link>
          <Link href="/concepts/service-discovery">
            <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 hover:from-emerald-900/60 hover:to-emerald-800/40 border border-emerald-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-emerald-300 mb-2 text-lg">→ Service Discovery</h4>
              <p className="text-slate-400 text-sm">Service registries, health checks, load balancing, and dynamic service location</p>
            </div>
          </Link>
          <Link href="/concepts/circuit-breaker">
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 hover:from-orange-900/60 hover:to-orange-800/40 border border-orange-700/50 p-4 rounded-lg cursor-pointer transition duration-300">
              <h4 className="font-semibold text-orange-300 mb-2 text-lg">→ Circuit Breaker</h4>
              <p className="text-slate-400 text-sm">Preventing cascading failures, resilience patterns, and fallback strategies</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The Monolith was simple but became a bottleneck as teams grew.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Microservices enable independent deployment and team autonomy, but create complexity.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Domain-Driven Design and the CAP Theorem are foundational concepts for microservices.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The BFF is the mediator that hides microservice complexity from the frontend.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The BFF aggregates data from multiple services and transforms it for a specific UI.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Parallel requests in the BFF dramatically reduce latency compared to sequential calls.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Microservices are not a silver bullet—understand the challenges before adopting.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Choose between synchronous (simple) and asynchronous (scalable) communication patterns.</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/2">
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

