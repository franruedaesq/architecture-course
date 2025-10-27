import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

export default function Module1() {
  return (
    <ModuleLayout
      moduleNumber={1}
      title="The Backend Divide"
      subtitle="Microservices & Backend for Frontend (BFF)"
      description="Understand why we broke the monolith into microservices and how the BFF acts as the perfect mediator between complex backends and simple frontends."
      previousModule={null}
      nextModule={2}
    >
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
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
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
            <span>The BFF is the mediator that hides microservice complexity from the frontend.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The BFF aggregates data from multiple services and transforms it for a specific UI.</span>
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

