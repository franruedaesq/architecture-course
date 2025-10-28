import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";
import { getConceptPageMetadata } from "@shared/courseContent";

export default function DomainDrivenDesignConcept() {
  const { title, subtitle, backToModule, previousConcept, nextConcept } =
    getConceptPageMetadata("domain-driven-design");

  return (
    <ConceptPage
      title={title}
      subtitle={subtitle}
      previousConcept={previousConcept}
      nextConcept={nextConcept}
      backToModule={backToModule}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Domain-Driven Design?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Domain-Driven Design (DDD) is a software design philosophy that emphasizes understanding and modeling the business domain. Instead of starting with technology, you start with the business problem and let that guide your architecture.
        </p>

        <BigWordAlert
          term="Domain-Driven Design (DDD)"
          definition="A software design approach that prioritizes understanding the business domain and aligning software architecture with business concepts. The goal is to create software that directly reflects how the business works."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          DDD was introduced by Eric Evans in his book <span className="font-semibold italic">"Domain-Driven Design: Tackling Complexity in the Heart of Software"</span> (2003). It's particularly useful for building microservices because it provides a clear framework for defining service boundaries.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Core DDD Concepts</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Ubiquitous Language</h4>
            <p className="text-slate-300 text-sm mb-3">
              A shared vocabulary between business stakeholders and developers. Everyone uses the same terms to describe concepts.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// E-commerce ubiquitous language</div>
              <div>- Product: An item for sale</div>
              <div>- SKU: Stock Keeping Unit (unique identifier)</div>
              <div>- Order: A customer's purchase request</div>
              <div>- Fulfillment: The process of packing and shipping</div>
              <div>- Return: A customer sending back a product</div>
            </div>
            <p className="text-slate-300 text-sm">
              <span className="font-semibold">Why it matters:</span> If developers call it "Order" but business calls it "Purchase," miscommunication happens. Ubiquitous language prevents this.
            </p>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Bounded Context</h4>
            <p className="text-slate-300 text-sm mb-3">
              A boundary within which a particular domain model applies. Different contexts can have different meanings for the same term.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// "Product" means different things in different contexts</div>
              <div className="mt-2">Catalog Context:</div>
              <div className="ml-4">Product = {`{`} id, name, description, price, images {`}`}</div>
              <div className="mt-2">Inventory Context:</div>
              <div className="ml-4">Product = {`{`} id, sku, quantity, warehouse_location {`}`}</div>
              <div className="mt-2">Pricing Context:</div>
              <div className="ml-4">Product = {`{`} id, price, discount, tax_category {`}`}</div>
            </div>
            <p className="text-slate-300 text-sm">
              <span className="font-semibold">Why it matters:</span> Each context has its own model. Contexts communicate through well-defined APIs.
            </p>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. Aggregates</h4>
            <p className="text-slate-300 text-sm mb-3">
              A cluster of related entities treated as a single unit. One entity is the root (Aggregate Root) and others are accessed through it.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Order Aggregate</div>
              <div>Order (Aggregate Root)</div>
              <div className="ml-4">├─ OrderLine (child entity)</div>
              <div className="ml-4">├─ OrderLine (child entity)</div>
              <div className="ml-4">└─ ShippingAddress (value object)</div>
              <div className="mt-2 text-green-400">// Access pattern</div>
              <div>// Always access through Order root</div>
              <div>order = OrderRepository.findById(123)</div>
              <div>order.addLine(product, quantity)</div>
              <div>// Never access OrderLine directly</div>
              <div>// orderLine = OrderLineRepository.findById(456) ❌</div>
            </div>
            <p className="text-slate-300 text-sm">
              <span className="font-semibold">Why it matters:</span> Aggregates enforce consistency boundaries. Changes within an aggregate are atomic.
            </p>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">4. Value Objects</h4>
            <p className="text-slate-300 text-sm mb-3">
              Objects that have no identity and are defined by their attributes. They're immutable and compared by value, not identity.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Value Objects</div>
              <div>class Money {`{`}</div>
              <div className="ml-4">constructor(amount: number, currency: string) {`{`}</div>
              <div className="ml-8">this.amount = amount;</div>
              <div className="ml-8">this.currency = currency;</div>
              <div className="ml-4">{`}`}</div>
              <div className="ml-4">equals(other: Money): boolean {`{`}</div>
              <div className="ml-4">return this.amount {`===`} other.amount {`&&`}</div>
              <div className="ml-12">this.currency {`===`} other.currency;</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
              <div className="mt-2 text-green-400">// Usage</div>
              <div>const price1 = new Money(100, 'USD');</div>
              <div>const price2 = new Money(100, 'USD');</div>
              <div>price1.equals(price2) // true (same value)</div>
            </div>
            <p className="text-slate-300 text-sm">
              <span className="font-semibold">Why it matters:</span> Value objects are immutable and safe to share. They make code more expressive.
            </p>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">5. Entities</h4>
            <p className="text-slate-300 text-sm mb-3">
              Objects with identity that persists over time. Two entities are different if they have different identities, even if all attributes are the same.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Entity: Order (has identity)</div>
              <div>class Order {`{`}</div>
              <div className="ml-4">constructor(id: string, customerId: string) {`{`}</div>
              <div className="ml-8">this.id = id; // Identity</div>
              <div className="ml-8">this.customerId = customerId;</div>
              <div className="ml-4">{`}`}</div>
              <div className="ml-4">equals(other: Order): boolean {`{`}</div>
              <div className="ml-4">return this.id {`===`} other.id; // Compare by identity</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
              <div className="mt-2 text-green-400">// Usage</div>
              <div className="ml-4">const order1 {`=`} new Order('123', 'customer-1');</div>
              <div>const order2 {`=`} new Order('123', 'customer-1');</div>
              <div>order1.equals(order2) // true (same identity)</div>
            </div>
          </div>

          <div className="bg-pink-900/30 border border-pink-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-pink-300 mb-3">6. Domain Events</h4>
            <p className="text-slate-300 text-sm mb-3">
              Events that represent something important that happened in the domain. They're immutable records of domain state changes.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-3">
              <div className="text-green-400">// Domain Events</div>
              <div>class OrderCreatedEvent {`{`}</div>
              <div className="ml-4">constructor(orderId, customerId, total) {`{`}</div>
              <div className="ml-8">this.orderId = orderId;</div>
              <div className="ml-8">this.customerId = customerId;</div>
              <div className="ml-8">this.total = total;</div>
              <div className="ml-8">this.timestamp = new Date();</div>
              <div className="ml-4">{`}`}</div>
              <div>{`}`}</div>
              <div className="mt-2 text-green-400">// Publishing events</div>
              <div>const order = new Order(...);</div>
              <div>eventBus.publish(new OrderCreatedEvent(...));</div>
              <div className="mt-2 text-green-400">// Other services listen</div>
              <div>eventBus.subscribe('OrderCreatedEvent', (event) {`=>`} {`{`}</div>
              <div className="ml-4">// Inventory service decrements stock</div>
              <div className="ml-4">// Notification service sends email</div>
              <div>{`}`});</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">DDD and Microservices</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          DDD and microservices are complementary. Bounded contexts naturally map to microservices. Each service owns a bounded context and implements its own domain model.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">E-Commerce Example: Bounded Contexts → Microservices</h3>
          
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Catalog Bounded Context</h4>
              <div className="font-mono text-xs">
                <div>Service: Product Service</div>
                <div>Entities: Product, Category, Review</div>
                <div>Value Objects: Price, Rating</div>
                <div>Aggregates: Product (root) + Reviews</div>
                <div>Domain Events: ProductCreated, ProductUpdated, ReviewAdded</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Order Bounded Context</h4>
              <div className="font-mono text-xs">
                <div>Service: Order Service</div>
                <div>Entities: Order, OrderLine</div>
                <div>Value Objects: Money, ShippingAddress</div>
                <div>Aggregates: Order (root) + OrderLines</div>
                <div>Domain Events: OrderCreated, OrderConfirmed, OrderShipped</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Payment Bounded Context</h4>
              <div className="font-mono text-xs">
                <div>Service: Payment Service</div>
                <div>Entities: Payment, Transaction</div>
                <div>Value Objects: Money, PaymentMethod</div>
                <div>Aggregates: Payment (root) + Transactions</div>
                <div>Domain Events: PaymentInitiated, PaymentSucceeded, PaymentFailed</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Inventory Bounded Context</h4>
              <div className="font-mono text-xs">
                <div>Service: Inventory Service</div>
                <div>Entities: InventoryItem, Reservation</div>
                <div>Value Objects: Quantity, Location</div>
                <div>Aggregates: InventoryItem (root) + Reservations</div>
                <div>Domain Events: StockReserved, StockReleased, StockUpdated</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Context Mapping: How Bounded Contexts Interact</h3>
          <p className="text-slate-300 text-sm mb-4">
            Bounded contexts communicate through context maps. These define how one context's model translates to another's.
          </p>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono">
            <div className="text-green-400">// Order Service creates an order</div>
            <div>OrderCreatedEvent {`{`}</div>
            <div className="ml-4">orderId: '123',</div>
            <div className="ml-4">customerId: '456',</div>
            <div className="ml-4">items: [{`{`} productId: '789', quantity: 2 {`}`}]</div>
            <div>{`}`}</div>
            <div className="mt-2 text-green-400">// Inventory Service listens and translates</div>
            <div>eventBus.subscribe('OrderCreatedEvent', (event) {`=>`} {`{`}</div>
            <div className="ml-4">// Translate Order Service's model to Inventory Service's model</div>
            <div className="ml-4">const reservation = new Reservation(</div>
            <div className="ml-8">event.items.map(item {`=>`} ({`{`}</div>
            <div className="ml-12">productId: item.productId,</div>
            <div className="ml-12">quantity: item.quantity,</div>
            <div className="ml-12">reservedAt: new Date()</div>
            <div className="ml-8">{`}`})</div>
            <div className="ml-4">);</div>
            <div className="ml-4">inventoryService.reserve(reservation);</div>
            <div>{`}`});</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">DDD Patterns for Microservices</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Aggregate Pattern</h4>
            <p className="text-slate-300 text-sm mb-3">
              Design aggregates to be small and focused. Aggregates define consistency boundaries. Changes within an aggregate are atomic; changes across aggregates are eventually consistent.
            </p>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Event Sourcing</h4>
            <p className="text-slate-300 text-sm mb-3">
              Store the state of aggregates as a sequence of domain events. Reconstruct state by replaying events. Provides audit trail and enables temporal queries.
            </p>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. CQRS (Command Query Responsibility Segregation)</h4>
            <p className="text-slate-300 text-sm mb-3">
              Separate read and write models. Commands modify state; queries read state. Allows independent optimization of reads and writes.
            </p>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">4. Saga Pattern</h4>
            <p className="text-slate-300 text-sm mb-3">
              Coordinate transactions across multiple aggregates/services using a sequence of local transactions and compensating transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>DDD aligns software architecture with business domains.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Ubiquitous language ensures shared understanding between business and developers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Bounded contexts define clear boundaries for domain models.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Aggregates enforce consistency boundaries within a bounded context.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Bounded contexts naturally map to microservices.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Domain events enable loose coupling between bounded contexts.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

