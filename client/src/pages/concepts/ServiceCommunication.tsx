import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ServiceCommunicationConcept() {
  return (
    <ConceptPage
      title="Service Communication Patterns"
      subtitle="Synchronous and asynchronous communication in microservices"
      previousConcept={{ path: "/concepts/cap-theorem", label: "CAP Theorem" }}
      nextConcept={{ path: "/concepts/advanced-communication", label: "Advanced Communication" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Communication Fundamentals</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In microservices, services must communicate with each other. How they communicate—synchronously or asynchronously—has profound implications for system design, resilience, and scalability.
        </p>

        <BigWordAlert
          term="Service Communication"
          definition="The mechanism by which microservices exchange information. Can be synchronous (request-response, blocking) or asynchronous (event-driven, non-blocking), each with different trade-offs for latency, coupling, and resilience."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          There's no universally "best" communication pattern. The choice depends on your use case, consistency requirements, and resilience needs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Synchronous Communication</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In synchronous communication, a service makes a request and waits for a response. The caller is blocked until the called service responds.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-300 mb-4">REST/HTTP (Request-Response)</h3>
          <p className="text-slate-300 text-sm mb-4">
            The most common synchronous pattern. Services communicate over HTTP using REST APIs.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Synchronous REST call</div>
            <div className="mt-2">Order Service calls Product Service:</div>
            <div className="mt-2">GET /products/123</div>
            <div className="mt-2 text-slate-400">// Order Service WAITS for response</div>
            <div className="mt-2">Response: {`{`} id: 123, price: 99, stock: 50 {`}`}</div>
          </div>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Simple to understand and implement</li>
                <li>Immediate response (low latency)</li>
                <li>Easy to debug</li>
                <li>Strong consistency (caller knows if operation succeeded)</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Tight coupling (caller depends on callee being available)</li>
                <li>Cascading failures (if one service is slow, all callers are slow)</li>
                <li>Poor scalability (blocked threads waiting for responses)</li>
                <li>Network latency adds up (multiple hops)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4">gRPC (Remote Procedure Call)</h3>
          <p className="text-slate-300 text-sm mb-4">
            A high-performance RPC framework using Protocol Buffers and HTTP/2. Faster than REST but still synchronous.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// gRPC call (synchronous)</div>
            <div className="mt-2">const product = await productClient.getProduct(</div>
            <div className="ml-4">GetProductRequest {`{`} id: 123 {`}`}</div>
            <div>);</div>
            <div className="mt-2 text-slate-400">// Caller WAITS for response</div>
          </div>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Much faster than REST (binary protocol, HTTP/2)</li>
                <li>Strongly typed (Protocol Buffers)</li>
                <li>Bidirectional streaming support</li>
                <li>Low latency</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Still synchronous (same coupling issues as REST)</li>
                <li>Steeper learning curve</li>
                <li>Less human-readable than REST</li>
                <li>Requires code generation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Synchronous Communication Flow</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono">
            <div className="text-slate-400">Time →</div>
            <div className="mt-2">Order Service: [Request]────────────────────────────────────────────→</div>
            <div className="ml-4">Product Service: [Processing...] (1000ms)</div>
            <div>Order Service: ←────────────────────────────────────────────[Response]</div>
            <div className="mt-2 text-slate-400">// Order Service is BLOCKED for 1000ms waiting for response</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Asynchronous Communication</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In asynchronous communication, a service sends a message and continues immediately without waiting for a response. The message is processed later by another service.
        </p>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-300 mb-4">Message Queues (Pub-Sub)</h3>
          <p className="text-slate-300 text-sm mb-4">
            Services publish events to a message broker (e.g., RabbitMQ, Kafka). Other services subscribe to events they care about.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Asynchronous message publishing</div>
            <div className="mt-2">Order Service publishes:</div>
            <div>eventBus.publish('OrderCreatedEvent', {`{`}</div>
            <div className="ml-4">orderId: 123,</div>
            <div className="ml-4">customerId: 456,</div>
            <div className="ml-4">total: 99.99</div>
            <div>{`}`});</div>
            <div className="mt-2 text-slate-400">// Order Service continues immediately (doesn't wait)</div>
            <div className="mt-2 text-green-400">// Inventory Service subscribes:</div>
            <div>eventBus.subscribe('OrderCreatedEvent', (event) {`=>`} {`{`}</div>
            <div className="ml-4">// Decrease inventory (processed later)</div>
            <div className="ml-4">inventoryService.decrementStock(event.orderId);</div>
            <div>{`}`});</div>
          </div>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Loose coupling (services don't know about each other)</li>
                <li>High scalability (no blocked threads)</li>
                <li>Resilience (if subscriber is down, message is queued)</li>
                <li>Parallel processing (multiple subscribers process simultaneously)</li>
                <li>Easy to add new subscribers without changing publisher</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Eventual consistency (no immediate feedback)</li>
                <li>Harder to debug (message flow is implicit)</li>
                <li>Message ordering can be complex</li>
                <li>Requires message broker infrastructure</li>
                <li>Harder to handle errors (no immediate response)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-indigo-300 mb-4">Message Brokers</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">RabbitMQ</h4>
              <p>Traditional message broker. Good for point-to-point and pub-sub patterns. Guarantees message delivery.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-1">Apache Kafka</h4>
              <p>High-throughput event streaming platform. Stores events persistently. Good for event sourcing and analytics.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">AWS SNS/SQS</h4>
              <p>Cloud-native message services. SNS for pub-sub, SQS for queues. Managed infrastructure.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-1">Google Pub/Sub</h4>
              <p>Cloud-native pub-sub service. Scalable, managed, good for event-driven architectures.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Asynchronous Communication Flow</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono">
            <div className="text-slate-400">Time →</div>
            <div className="mt-2">Order Service: [Publish Event]──→ Message Broker</div>
            <div className="ml-4">(continues immediately)</div>
            <div className="mt-2">Message Broker: [Queue Event]</div>
            <div className="mt-2">Inventory Service: ←──[Consume Event]</div>
            <div className="ml-4">(processes asynchronously)</div>
            <div className="mt-2 text-slate-400">// Order Service is NOT BLOCKED (low latency)</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Comparison: Sync vs Async</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-blue-300">Aspect</th>
                <th className="text-left p-3 text-green-300">Synchronous</th>
                <th className="text-left p-3 text-purple-300">Asynchronous</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Latency</td>
                <td className="p-3">Low (immediate response)</td>
                <td className="p-3">High (delayed processing)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Coupling</td>
                <td className="p-3">Tight (caller depends on callee)</td>
                <td className="p-3">Loose (services independent)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Consistency</td>
                <td className="p-3">Strong (immediate)</td>
                <td className="p-3">Eventual (delayed)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Scalability</td>
                <td className="p-3">Limited (blocked threads)</td>
                <td className="p-3">High (non-blocking)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Resilience</td>
                <td className="p-3">Poor (cascading failures)</td>
                <td className="p-3">Good (decoupled failures)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Debugging</td>
                <td className="p-3">Easy (explicit flow)</td>
                <td className="p-3">Hard (implicit flow)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Best For</td>
                <td className="p-3">Real-time operations, strong consistency</td>
                <td className="p-3">High-volume events, loose coupling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Hybrid Approach</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Most real-world systems use both synchronous and asynchronous communication. The choice depends on the specific use case.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">E-Commerce Example</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">Synchronous: User Registration</h4>
              <p>User submits registration form. System immediately validates and responds with success/error. Requires immediate feedback.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">Synchronous: Product Search</h4>
              <p>User searches for products. System immediately returns results. Requires low latency.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-1">Asynchronous: Order Processing</h4>
              <p>User places order. System publishes OrderCreatedEvent. Inventory, Payment, Notification services process asynchronously.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-1">Asynchronous: Email Notifications</h4>
              <p>Order confirmation emails are sent asynchronously. User doesn't wait for email to be sent.</p>
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
              <span>Synchronous communication (REST, gRPC) provides immediate responses but tight coupling.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Asynchronous communication (message queues) provides loose coupling but eventual consistency.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Use synchronous for real-time operations requiring immediate feedback.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Use asynchronous for high-volume events and loose coupling.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Most systems use both patterns for different use cases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Message brokers (Kafka, RabbitMQ) enable scalable asynchronous communication.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

