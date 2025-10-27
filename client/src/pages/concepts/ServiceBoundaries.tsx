import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function ServiceBoundariesConcept() {
  return (
    <ConceptPage
      title="Service Boundaries & Bounded Contexts"
      subtitle="Defining where one service ends and another begins"
      previousConcept={{ path: "/concepts/microservices", label: "Microservices" }}
      nextConcept={{ path: "/concepts/domain-driven-design", label: "Domain-Driven Design" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Service Boundary Problem</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The hardest part of microservices is not the technology—it's deciding where to draw the boundaries. Where does one service end and another begin? If you get this wrong, you end up with services that are too tightly coupled or too fragmented.
        </p>

        <BigWordAlert
          term="Service Boundary"
          definition="The logical and physical separation between microservices. A well-defined boundary means a service has a clear responsibility, owns its data, and communicates with other services only through well-defined APIs."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          Consider an e-commerce system. Where do you draw the boundaries?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-300 mb-4">❌ Bad Boundaries (Too Fine-Grained)</h3>
            <div className="space-y-2 text-slate-300 text-sm font-mono">
              <div>• User Service</div>
              <div>• Address Service</div>
              <div>• Email Service</div>
              <div>• Phone Service</div>
              <div>• Payment Service</div>
              <div>• Invoice Service</div>
              <div>• Receipt Service</div>
            </div>
            <p className="text-slate-300 text-sm mt-4">
              <span className="font-semibold text-red-300">Problem:</span> Too many services. Creating a user requires calling 4 services. Massive network overhead.
            </p>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">✓ Good Boundaries (Business-Aligned)</h3>
            <div className="space-y-2 text-slate-300 text-sm font-mono">
              <div>• User Service</div>
              <div>  (users, addresses, preferences)</div>
              <div>• Product Service</div>
              <div>  (products, inventory, pricing)</div>
              <div>• Order Service</div>
              <div>  (orders, cart, checkout)</div>
              <div>• Payment Service</div>
              <div>  (payments, invoices, receipts)</div>
            </div>
            <p className="text-slate-300 text-sm mt-4">
              <span className="font-semibold text-green-300">Benefit:</span> Aligned with business domains. Each service has a clear responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Bounded Contexts from Domain-Driven Design</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The best way to define service boundaries is using <span className="font-semibold">Bounded Contexts</span> from Domain-Driven Design. A bounded context is a boundary within which a particular domain model applies.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Example: E-Commerce Bounded Contexts</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">User Context</h4>
              <p className="text-slate-300 text-sm mb-2">
                Responsible for user accounts, authentication, profiles, and preferences.
              </p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono text-slate-400">
                <div>Entities: User, Profile, Address, Preference</div>
                <div>Aggregates: User (root) + Profile + Addresses</div>
                <div>Database: user_db</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Product Context</h4>
              <p className="text-slate-300 text-sm mb-2">
                Responsible for product information, pricing, and inventory.
              </p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono text-slate-400">
                <div>Entities: Product, Variant, Inventory, Price</div>
                <div>Aggregates: Product (root) + Variants + Inventory</div>
                <div>Database: product_db</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Order Context</h4>
              <p className="text-slate-300 text-sm mb-2">
                Responsible for orders, cart, and checkout logic.
              </p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono text-slate-400">
                <div>Entities: Order, OrderLine, Cart, CartItem</div>
                <div>Aggregates: Order (root) + OrderLines, Cart (root) + CartItems</div>
                <div>Database: order_db</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Payment Context</h4>
              <p className="text-slate-300 text-sm mb-2">
                Responsible for payment processing, billing, and financial records.
              </p>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono text-slate-400">
                <div>Entities: Payment, Invoice, Receipt, Transaction</div>
                <div>Aggregates: Payment (root) + Transactions, Invoice (root)</div>
                <div>Database: payment_db</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Defining Service Boundaries</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Here are practical techniques for identifying good service boundaries:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Business Capability Mapping</h4>
            <p className="text-slate-300 text-sm mb-3">
              Identify the key business capabilities of your organization. Each capability becomes a service.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// E-commerce business capabilities</div>
              <div>- User Management (register, login, profile)</div>
              <div>- Product Catalog (search, browse, details)</div>
              <div>- Shopping Cart (add, remove, update)</div>
              <div>- Order Processing (checkout, payment, confirmation)</div>
              <div>- Inventory Management (stock, reservations)</div>
              <div>- Shipping & Fulfillment (tracking, delivery)</div>
              <div>- Customer Support (tickets, chat, returns)</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Data Cohesion Analysis</h4>
            <p className="text-slate-300 text-sm mb-3">
              Group entities that are frequently accessed together. If two entities are always queried together, they should be in the same service.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// High cohesion (same service)</div>
              <div>User + Address + Preferences → User Service</div>
              <div>Product + Variant + Price → Product Service</div>
              <div className="mt-2 text-red-400">// Low cohesion (different services)</div>
              <div>User ≠ Product (rarely accessed together)</div>
              <div>Product ≠ Payment (different concerns)</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. Team Ownership</h4>
            <p className="text-slate-300 text-sm mb-3">
              Each service should be owned by a single team. If a service requires coordination between teams, it's a sign of a bad boundary.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Good: Clear ownership</div>
              <div>Payment Service → Payments Team (3 engineers)</div>
              <div>Product Service → Product Team (5 engineers)</div>
              <div className="mt-2 text-red-400">// Bad: Shared ownership</div>
              <div>Checkout Service → Payments Team + Product Team</div>
              <div>(Requires coordination, slow releases)</div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">4. Scalability Requirements</h4>
            <p className="text-slate-300 text-sm mb-3">
              If different parts of your system have different scalability requirements, separate them into different services.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Different scaling needs</div>
              <div>Product Service: High reads, low writes → Read replicas</div>
              <div>Order Service: Medium reads/writes → Standard replicas</div>
              <div>Payment Service: Low volume, high consistency → Single master</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Common Service Boundary Mistakes</h2>
        
        <div className="space-y-4">
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">1. Shared Database</h4>
            <p className="text-slate-300 text-sm mb-3">
              Multiple services sharing a database defeats the purpose of microservices. Services become tightly coupled through the database schema.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-red-400">// ❌ Bad: Shared database</div>
              <div>User Service → shared_db.users</div>
              <div>Order Service → shared_db.orders</div>
              <div className="mt-2 text-green-400">// ✓ Good: Separate databases</div>
              <div>User Service → user_db.users</div>
              <div>Order Service → order_db.orders</div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">2. Chatty Services</h4>
            <p className="text-slate-300 text-sm mb-3">
              If services need to make many API calls to each other to complete a single request, the boundary is wrong. This creates high latency and tight coupling.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-red-400">// ❌ Bad: Chatty services</div>
              <div>GET /checkout</div>
              <div className="ml-4">→ User Service (get user)</div>
              <div className="ml-4">→ Product Service (get products)</div>
              <div className="ml-4">→ Inventory Service (check stock)</div>
              <div className="ml-4">→ Price Service (get prices)</div>
              <div className="ml-4">→ Discount Service (calculate discount)</div>
              <div className="ml-4">→ Tax Service (calculate tax)</div>
              <div className="ml-4">→ Shipping Service (calculate shipping)</div>
              <div className="mt-2 text-slate-400">(7 API calls for one request!)</div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3">3. Boundaries That Change</h4>
            <p className="text-slate-300 text-sm mb-3">
              If you frequently need to move code between services, your boundaries are wrong. Good boundaries are stable.
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
              <span>Service boundaries are the most important decision in microservices architecture.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Use business capabilities and bounded contexts to define boundaries.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Each service should have a clear, single responsibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Each service owns its own database. No shared databases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Avoid chatty services. If services need many API calls, reconsider the boundary.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Boundaries should align with team ownership and organizational structure.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

