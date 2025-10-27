import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function CAPTheoremConcept() {
  return (
    <ConceptPage
      title="The CAP Theorem"
      subtitle="Understanding the fundamental trade-offs in distributed systems"
      previousConcept={{ path: "/concepts/domain-driven-design", label: "Domain-Driven Design" }}
      nextConcept={{ path: "/concepts/service-communication", label: "Service Communication" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is the CAP Theorem?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          The CAP Theorem, also known as Brewer's Theorem (named after Eric Brewer who proposed it in 2000), states that a distributed system can guarantee at most two of three properties: Consistency, Availability, and Partition tolerance.
        </p>

        <BigWordAlert
          term="CAP Theorem"
          definition="A fundamental principle in distributed systems stating that any distributed system can provide at most two of three guarantees: Consistency (all nodes see the same data), Availability (the system remains operational), and Partition Tolerance (the system continues despite network failures)."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is not a limitation of current technology—it's a mathematical impossibility. Understanding CAP is critical for designing microservices because every architectural decision involves trade-offs between these three properties.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Three Properties</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">C - Consistency</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              All nodes in the system see the same data at the same time. If you write a value to one node, all other nodes immediately reflect that change.
            </p>
            <div className="bg-slate-900 p-4 rounded text-sm font-mono mb-4">
              <div className="text-green-400">// Consistency Example</div>
              <div className="mt-2">User A writes: account_balance = 1000</div>
              <div className="mt-2">User B reads immediately after</div>
              <div>User B sees: account_balance = 1000</div>
              <div className="mt-2 text-slate-400">// User B NEVER sees the old value (999)</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-blue-300">Real-world example:</span> Banking systems require strong consistency. If you transfer $100 from account A to account B, you can't have a state where both accounts have been debited but neither credited.
              </p>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-green-300 mb-4">A - Availability</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Every request receives a response (success or failure), without guarantee that the response contains the most recent write. The system is always operational and responsive.
            </p>
            <div className="bg-slate-900 p-4 rounded text-sm font-mono mb-4">
              <div className="text-green-400">// Availability Example</div>
              <div className="mt-2">User A requests: GET /user/123</div>
              <div>Server responds immediately (even if data is stale)</div>
              <div className="mt-2 text-slate-400">// The system NEVER rejects requests</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-green-300">Real-world example:</span> Social media platforms prioritize availability. If you can't see the latest likes on a post, that's okay—the system is still responsive.
              </p>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">P - Partition Tolerance</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              The system continues to operate despite arbitrary partitions (network failures) between nodes. Even if the network is broken, the system doesn't crash.
            </p>
            <div className="bg-slate-900 p-4 rounded text-sm font-mono mb-4">
              <div className="text-green-400">// Partition Tolerance Example</div>
              <div className="mt-2">Network splits: Node A ↔️ [BROKEN] ↔️ Node B</div>
              <div className="mt-2">Node A continues serving requests</div>
              <div>Node B continues serving requests</div>
              <div className="mt-2 text-slate-400">// System doesn't crash, but data may diverge</div>
            </div>
            <div className="bg-slate-700/50 p-4 rounded">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-yellow-300">Real-world example:</span> In a microservices system, if the network between the payment service and inventory service is down, both services should continue operating independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The CAP Trade-offs</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Since you can only guarantee two of three properties, there are three possible combinations:
        </p>

        <div className="space-y-6">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">CP (Consistency + Partition Tolerance)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Sacrifice availability. When a network partition occurs, the system blocks requests to maintain consistency.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// CP Example: Traditional Relational Databases</div>
              <div className="mt-2">Network partition detected</div>
              <div>System: "I can't guarantee consistency, so I'll reject all writes"</div>
              <div className="mt-2 text-red-400">// Availability is sacrificed</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold text-blue-300">When to use:</span> Financial systems, banking, healthcare</div>
              <div><span className="font-semibold text-red-300">Trade-off:</span> System becomes unavailable during network failures</div>
              <div><span className="font-semibold text-yellow-300">Examples:</span> PostgreSQL, MySQL, traditional ACID databases</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">AP (Availability + Partition Tolerance)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Sacrifice consistency. The system remains available during partitions, but data may be inconsistent.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// AP Example: Distributed NoSQL Databases</div>
              <div className="mt-2">Network partition detected</div>
              <div>System: "I'll keep serving requests, but data might diverge"</div>
              <div className="mt-2 text-yellow-400">// Consistency is eventually achieved</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold text-green-300">When to use:</span> Social media, caching, real-time analytics</div>
              <div><span className="font-semibold text-yellow-300">Trade-off:</span> Data may be stale or inconsistent temporarily</div>
              <div><span className="font-semibold text-blue-300">Examples:</span> DynamoDB, Cassandra, MongoDB (eventual consistency mode)</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">CA (Consistency + Availability)</h3>
            <p className="text-slate-300 text-sm mb-4">
              Sacrifice partition tolerance. Impossible in a distributed system. Only possible in single-node systems.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// CA Example: Single-Node Database</div>
              <div className="mt-2">No network partitions possible (single node)</div>
              <div>Consistency: Guaranteed (ACID transactions)</div>
              <div>Availability: Guaranteed (always responsive)</div>
              <div className="mt-2 text-red-400">// Not applicable to distributed systems</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div><span className="font-semibold text-purple-300">When to use:</span> Single-node systems only</div>
              <div><span className="font-semibold text-red-300">Trade-off:</span> No fault tolerance, single point of failure</div>
              <div><span className="font-semibold text-slate-400">Examples:</span> Single PostgreSQL instance (not distributed)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">CAP in Microservices</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In microservices architecture, you must choose between CP and AP for each service or data store. This choice has profound implications for how services communicate and maintain data consistency.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">E-Commerce Example: CAP Choices</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">User Service (CP)</h4>
              <p className="text-slate-300 text-sm mb-2">
                Requires strong consistency. User credentials must be consistent across all nodes.
              </p>
              <div className="font-mono text-xs text-slate-400">
                <div>Choice: CP (Consistency + Partition Tolerance)</div>
                <div>Database: PostgreSQL with replication</div>
                <div>Trade-off: During network partition, user service becomes read-only</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Product Catalog (AP)</h4>
              <p className="text-slate-300 text-sm mb-2">
                Can tolerate eventual consistency. Slight delays in product updates are acceptable.
              </p>
              <div className="font-mono text-xs text-slate-400">
                <div>Choice: AP (Availability + Partition Tolerance)</div>
                <div>Database: DynamoDB or Cassandra</div>
                <div>Trade-off: Product prices might be slightly stale</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-yellow-300 mb-2">Order Service (CP)</h4>
              <p className="text-slate-300 text-sm mb-2">
                Requires strong consistency. Orders must be atomic (all-or-nothing).
              </p>
              <div className="font-mono text-xs text-slate-400">
                <div>Choice: CP (Consistency + Partition Tolerance)</div>
                <div>Database: PostgreSQL with transactions</div>
                <div>Trade-off: Order service becomes unavailable during network partitions</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Analytics Service (AP)</h4>
              <p className="text-slate-300 text-sm mb-2">
                Can tolerate eventual consistency. Slightly delayed analytics are acceptable.
              </p>
              <div className="font-mono text-xs text-slate-400">
                <div>Choice: AP (Availability + Partition Tolerance)</div>
                <div>Database: NoSQL or data warehouse</div>
                <div>Trade-off: Analytics data is eventually consistent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Eventual Consistency</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          When you choose AP (Availability + Partition Tolerance), you sacrifice immediate consistency. Instead, you accept <span className="font-semibold">eventual consistency</span>: the system guarantees that all nodes will eventually see the same data, but not immediately.
        </p>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Eventual Consistency Example</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">Time 0: User writes data</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div>User writes: product_price = 99</div>
                <div>Node A: product_price = 99 ✓</div>
                <div>Node B: product_price = 100 (stale)</div>
                <div>Node C: product_price = 100 (stale)</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2">Time 100ms: Replication begins</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div>Node A: product_price = 99 ✓</div>
                <div>Node B: product_price = 99 ✓ (replicated)</div>
                <div>Node C: product_price = 100 (still replicating)</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">Time 200ms: Consistency achieved</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div>Node A: product_price = 99 ✓</div>
                <div>Node B: product_price = 99 ✓</div>
                <div>Node C: product_price = 99 ✓ (eventually consistent)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Handling Eventual Consistency</h3>
          <p className="text-slate-300 text-sm mb-4">
            Eventual consistency requires careful design to handle temporary inconsistencies:
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-1">1. Conflict Resolution</h4>
              <p>When two nodes have conflicting writes, how do you resolve them? Last-write-wins? Vector clocks?</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-1">2. Read Repair</h4>
              <p>When reading stale data, update it in the background to catch up with other nodes.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">3. Compensating Transactions</h4>
              <p>If an operation fails after partial completion, undo it across all nodes.</p>
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
              <span>The CAP Theorem states you can guarantee at most two of: Consistency, Availability, Partition Tolerance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>CP systems prioritize consistency over availability (e.g., banking, financial systems).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>AP systems prioritize availability over consistency (e.g., social media, caching).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>CA systems are impossible in distributed systems (only single-node systems).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>In microservices, choose CP or AP for each service based on business requirements.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Eventual consistency requires careful design to handle temporary inconsistencies.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

