import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function AdvancedCommunicationConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("advanced-communication");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Event-Driven Architecture</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Event-driven architecture is a design pattern where services communicate by publishing and consuming events. Instead of services calling each other directly, they emit events when something important happens, and other services react to those events.
        </p>

        <BigWordAlert
          term="Event-Driven Architecture"
          definition="An architectural pattern where services communicate through events. When something happens in one service, it publishes an event. Other services subscribe to events they care about and react asynchronously."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-300 mb-4">Event-Driven Flow</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-slate-400">Traditional Synchronous:</div>
            <div className="mt-2">Order Service → [Call] → Inventory Service</div>
            <div className="ml-4">→ [Call] → Payment Service</div>
            <div className="ml-4">→ [Call] → Notification Service</div>
            <div className="mt-3 text-slate-400">Event-Driven Asynchronous:</div>
            <div className="mt-2">Order Service: [Publish OrderCreatedEvent]</div>
            <div className="ml-4">↓</div>
            <div className="ml-4">Message Broker (Event Bus)</div>
            <div className="ml-4">↓</div>
            <div className="mt-2">Inventory Service: [Consume OrderCreatedEvent]</div>
            <div>Payment Service: [Consume OrderCreatedEvent]</div>
            <div>Notification Service: [Consume OrderCreatedEvent]</div>
            <div className="mt-2 text-slate-400">// All services process independently and asynchronously</div>
          </div>

          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Loose coupling (services don't know about each other)</li>
                <li>Scalability (non-blocking, parallel processing)</li>
                <li>Extensibility (add new subscribers without changing publisher)</li>
                <li>Resilience (failures are isolated)</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Eventual consistency (delayed processing)</li>
                <li>Harder to debug (implicit message flow)</li>
                <li>Message ordering challenges</li>
                <li>Requires event broker infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Saga Pattern</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A saga is a sequence of local transactions coordinated across multiple services. When one service completes, it triggers the next service in the chain. If a step fails, compensating transactions undo previous steps.
        </p>

        <BigWordAlert
          term="Saga Pattern"
          definition="A pattern for managing distributed transactions across multiple services. A saga is a sequence of local transactions where each step publishes an event that triggers the next step. If a step fails, compensating transactions undo previous steps."
        />

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-300 mb-4">Saga Example: Order Processing</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Step 1: Order Service</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>1. Create order (status: PENDING)</div>
                <div>2. Publish: OrderCreatedEvent</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Step 2: Inventory Service</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>1. Consume: OrderCreatedEvent</div>
                <div>2. Reserve inventory</div>
                <div>3. Publish: InventoryReservedEvent (or InventoryReservationFailedEvent)</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Step 3: Payment Service</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>1. Consume: InventoryReservedEvent</div>
                <div>2. Process payment</div>
                <div>3. Publish: PaymentProcessedEvent (or PaymentFailedEvent)</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Step 4: Notification Service</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>1. Consume: PaymentProcessedEvent</div>
                <div>2. Send confirmation email</div>
                <div>3. Publish: NotificationSentEvent</div>
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Failure Scenario: Payment Fails</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>1. Payment Service: PaymentFailedEvent</div>
                <div>2. Inventory Service: Consume PaymentFailedEvent</div>
                <div>3. Inventory Service: Release reserved inventory (compensating transaction)</div>
                <div>4. Order Service: Consume PaymentFailedEvent</div>
                <div>5. Order Service: Cancel order (compensating transaction)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Choreography vs Orchestration</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          There are two ways to implement sagas: choreography (decentralized) and orchestration (centralized).
        </p>

        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Choreography (Decentralized)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Each service knows what events to listen for and what events to publish. Services coordinate through events without a central coordinator.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Choreography: Services coordinate through events</div>
              <div className="mt-2">Order Service:</div>
              <div className="ml-4">publish(OrderCreatedEvent)</div>
              <div className="mt-2">Inventory Service:</div>
              <div className="ml-4">subscribe(OrderCreatedEvent)</div>
              <div className="ml-4">reserve(inventory)</div>
              <div className="ml-4">publish(InventoryReservedEvent)</div>
              <div className="mt-2">Payment Service:</div>
              <div className="ml-4">subscribe(InventoryReservedEvent)</div>
              <div className="ml-4">process(payment)</div>
              <div className="ml-4">publish(PaymentProcessedEvent)</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Loose coupling (no central coordinator)</li>
                  <li>Simple to understand (each service is independent)</li>
                  <li>Scalable (no bottleneck)</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Hard to track saga flow (implicit dependencies)</li>
                  <li>Hard to debug (message flow is distributed)</li>
                  <li>Cyclic dependencies possible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Orchestration (Centralized)</h3>
            <p className="text-slate-300 text-sm mb-4">
              A central orchestrator (saga coordinator) controls the flow. It tells each service what to do and when to do it.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// Orchestration: Central coordinator controls flow</div>
              <div className="mt-2">OrderSaga (Orchestrator):</div>
              <div className="ml-4">1. orderService.createOrder()</div>
              <div className="ml-4">2. inventoryService.reserve()</div>
              <div className="ml-4">3. paymentService.process()</div>
              <div className="ml-4">4. notificationService.send()</div>
              <div className="mt-2 text-slate-400">// If any step fails, orchestrator triggers compensations</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">✓ Advantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Easy to understand (explicit flow)</li>
                  <li>Easy to debug (central point of control)</li>
                  <li>Easy to add compensations</li>
                </ul>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">✗ Disadvantages</h4>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li>Tight coupling (orchestrator depends on all services)</li>
                  <li>Orchestrator becomes a bottleneck</li>
                  <li>Orchestrator is a single point of failure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Handling Failures in Sagas</h2>
        
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Compensating Transactions</h3>
          <p className="text-slate-300 text-sm mb-4">
            When a saga step fails, compensating transactions undo previous steps to maintain consistency.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
            <div className="text-green-400">// Compensating transactions</div>
            <div className="mt-2">Order created → [Inventory reserved]</div>
            <div className="ml-4">→ [Payment failed]</div>
            <div className="mt-2 text-red-400">// Compensations (undo in reverse order)</div>
            <div>Release inventory (undo step 1)</div>
            <div>Cancel order (undo step 0)</div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Idempotency</h3>
          <p className="text-slate-300 text-sm mb-4">
            Saga steps must be idempotent: calling them multiple times produces the same result. This handles retries and duplicate messages.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono">
            <div className="text-green-400">// Idempotent operation</div>
            <div className="mt-2">processPayment(orderId: '123', idempotencyKey: 'abc-123')</div>
            <div className="mt-2 text-slate-400">// First call: Process payment, store idempotencyKey</div>
            <div className="mt-2 text-slate-400">// Second call (retry): Check idempotencyKey, return same result</div>
            <div className="mt-2 text-slate-400">// Result: Payment is only charged once</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Event-driven architecture enables loose coupling and scalability.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Sagas coordinate distributed transactions across multiple services.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Choreography is decentralized but harder to debug.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Orchestration is centralized but creates coupling.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Compensating transactions undo failed steps to maintain consistency.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Idempotency is critical for handling retries and duplicate messages.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

