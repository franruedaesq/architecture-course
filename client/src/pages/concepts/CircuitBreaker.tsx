import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function CircuitBreakerConcept() {
  return (
    <ConceptPage
      title="Circuit Breaker Pattern"
      subtitle="Preventing cascading failures in distributed systems"
      previousConcept={{ path: "/concepts/service-discovery", label: "Service Discovery" }}
      nextConcept={{ path: "/module/1", label: "Back to Module 1" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Cascading Failure Problem</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In microservices, when one service fails, it can cause a cascading failure where other services that depend on it also fail. This is called a cascading failure or failure cascade.
        </p>

        <BigWordAlert
          term="Cascading Failure"
          definition="A chain reaction of failures where one service's failure causes dependent services to fail, which causes their dependents to fail, and so on. Can bring down an entire system."
        />

        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Example: Cascading Failure</h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Time 0: Payment Service Goes Down</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Payment Service: DOWN (database crashed)</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Time 1: Order Service Affected</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Order Service: Tries to call Payment Service</div>
                <div>Payment Service: No response (timeout after 30 seconds)</div>
                <div>Order Service: Threads pile up waiting for Payment Service</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Time 2: Order Service Runs Out of Threads</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Order Service: All threads blocked waiting for Payment</div>
                <div>Order Service: Can't process new requests</div>
                <div>Order Service: Effectively DOWN</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Time 3: BFF Affected</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>BFF: Tries to call Order Service</div>
                <div>Order Service: No available threads</div>
                <div>BFF: Threads pile up waiting for Order Service</div>
              </div>
            </div>

            <div className="bg-red-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-2">Time 4: Entire System Down</h4>
              <div className="font-mono text-xs text-slate-400">
                <div>Payment Service: DOWN</div>
                <div>Order Service: DOWN (due to Payment)</div>
                <div>BFF: DOWN (due to Order)</div>
                <div>Frontend: Shows error to user</div>
                <div className="mt-2 text-red-400">// One service failure brought down the entire system!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is a Circuit Breaker?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A circuit breaker is a design pattern that prevents cascading failures. It monitors calls to a remote service and "trips" (opens) if the service is failing, preventing further calls until the service recovers.
        </p>

        <BigWordAlert
          term="Circuit Breaker Pattern"
          definition="A pattern that prevents cascading failures by monitoring calls to a remote service. If the service is failing, the circuit breaker 'opens' and returns an error immediately without calling the service, giving it time to recover."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          It's inspired by electrical circuit breakers: when too much current flows, the breaker trips and cuts the circuit to prevent damage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Circuit Breaker States</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          A circuit breaker has three states:
        </p>

        <div className="space-y-6">
          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">1. CLOSED (Normal Operation)</h3>
            <p className="text-slate-300 text-sm mb-4">
              The circuit is closed. Requests flow normally to the service. The circuit breaker monitors for failures.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-green-400">// CLOSED state</div>
              <div className="mt-2">Client: [Request] → Service</div>
              <div>Service: [Response] → Client</div>
              <div className="mt-2 text-slate-400">// Circuit breaker counts successes</div>
              <div>successCount: 95/100</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Behavior</h4>
                <p>Requests pass through normally. Failures are counted.</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Transition</h4>
                <p>If failure rate exceeds threshold → OPEN</p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-300 mb-4">2. OPEN (Service Failing)</h3>
            <p className="text-slate-300 text-sm mb-4">
              The circuit is open. Requests are rejected immediately without calling the service. This gives the service time to recover.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-red-400">// OPEN state</div>
              <div className="mt-2">Client: [Request]</div>
              <div>Circuit Breaker: [Reject immediately]</div>
              <div className="mt-2 text-slate-400">// Service is NOT called</div>
              <div>Service: [Not called, can recover]</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-red-300 mb-1">Behavior</h4>
                <p>Requests are rejected immediately. Service is not called. Prevents cascading failures.</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Transition</h4>
                <p>After timeout (e.g., 30 seconds) → HALF_OPEN</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">3. HALF_OPEN (Testing Recovery)</h3>
            <p className="text-slate-300 text-sm mb-4">
              After a timeout, the circuit breaker enters half-open state. It allows a limited number of test requests to check if the service has recovered.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono mb-4">
              <div className="text-yellow-400">// HALF_OPEN state</div>
              <div className="mt-2">Client: [Request]</div>
              <div>Circuit Breaker: [Allow test request]</div>
              <div>Service: [Attempt to respond]</div>
              <div className="mt-2 text-slate-400">// If successful → CLOSED</div>
              <div className="mt-2 text-slate-400">// If fails → OPEN</div>
            </div>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-yellow-300 mb-1">Behavior</h4>
                <p>Limited requests are allowed. Used to test if service has recovered.</p>
              </div>
              <div className="bg-slate-700/50 p-2 rounded">
                <h4 className="font-semibold text-green-300 mb-1">Transition</h4>
                <p>If test succeeds → CLOSED. If test fails → OPEN.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Circuit Breaker Flow</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <div className="bg-slate-900 p-4 rounded text-xs font-mono">
            <div className="text-slate-400">State Transitions:</div>
            <div className="mt-3 text-green-400">CLOSED</div>
            <div className="text-slate-400">  ↓ (failure rate {`>`} threshold)</div>
            <div className="text-red-400">OPEN</div>
            <div className="text-slate-400">  ↓ (after timeout)</div>
            <div className="text-yellow-400">HALF_OPEN</div>
            <div className="text-slate-400">  ↓ (test succeeds)</div>
            <div className="text-green-400">CLOSED</div>
            <div className="mt-3 text-slate-400">OR</div>
            <div className="mt-2 text-yellow-400">HALF_OPEN</div>
            <div className="text-slate-400">  ↓ (test fails)</div>
            <div className="text-red-400">OPEN</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Implementation Example</h2>
        
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Circuit Breaker Configuration</h3>
          <div className="bg-slate-900 p-3 rounded text-xs font-mono">
            <div className="text-green-400">// Circuit Breaker Configuration</div>
            <div className="mt-2">const breaker = new CircuitBreaker({`{`}</div>
            <div className="ml-4">failureThreshold: 5, // Open after 5 failures</div>
            <div className="ml-4">successThreshold: 2, // Close after 2 successes in half-open</div>
            <div className="ml-4">timeout: 30000, // 30 seconds before trying again</div>
            <div className="ml-4">monitoringInterval: 10000, // Check every 10 seconds</div>
            <div className="ml-4">fallback: () {`=>`} ({`{`} error: 'Service unavailable' {`}`})</div>
            <div>{`}`});</div>
            <div className="mt-3 text-green-400">// Usage</div>
            <div>try {`{`}</div>
            <div className="ml-4">const response = await breaker.call(() {`=>`}</div>
            <div className="ml-8">paymentService.process(order)</div>
            <div className="ml-4">);</div>
            <div>{`}`} catch (error) {`{`}</div>
            <div className="ml-4">// Circuit is open or service failed</div>
            <div className="ml-4">console.error('Payment failed:', error);</div>
            <div>{`}`}</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Fallback Strategies</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          When the circuit breaker opens, you need a fallback strategy to handle the failure gracefully.
        </p>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Return Cached Data</h4>
            <p className="text-slate-300 text-sm mb-3">
              Return previously cached data instead of failing.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fallback: Return cached product</div>
              <div className="mt-2">fallback: (orderId) {`=>`} {`{`}</div>
              <div className="ml-4">return cache.get(`product-${`}orderId{`}`) ||</div>
              <div className="ml-8">{`{`} error: 'Service unavailable' {`}`};</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Return Default Value</h4>
            <p className="text-slate-300 text-sm mb-3">
              Return a sensible default value.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fallback: Return default recommendation</div>
              <div className="mt-2">fallback: () {`=>`} ({`{`}</div>
              <div className="ml-4">recommendations: [] // Empty list</div>
              <div>{`}`})</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. Degrade Gracefully</h4>
            <p className="text-slate-300 text-sm mb-3">
              Return partial data or reduced functionality.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fallback: Return product without recommendations</div>
              <div className="mt-2">fallback: (productId) {`=>`} ({`{`}</div>
              <div className="ml-4">product: cache.get(`product-${`}productId{`}`),</div>
              <div className="ml-4">recommendations: null // Omit recommendations</div>
              <div>{`}`})</div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">4. Queue for Later Processing</h4>
            <p className="text-slate-300 text-sm mb-3">
              Queue the request for later processing when the service recovers.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Fallback: Queue for later</div>
              <div className="mt-2">fallback: (order) {`=>`} {`{`}</div>
              <div className="ml-4">queue.push(order); // Queue for later</div>
              <div className="ml-4">return {`{`} status: 'queued' {`}`};</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Circuit Breaker Libraries</h2>
        
        <div className="space-y-3 text-slate-300 text-sm">
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-1">Resilience4j (Java)</h4>
            <p>Popular Java library for circuit breakers, retries, timeouts, and other resilience patterns.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-purple-300 mb-1">Polly (C#/.NET)</h4>
            <p>Resilience library for .NET. Provides circuit breakers, retries, timeouts, and bulkheads.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-1">Opossum (Node.js)</h4>
            <p>Circuit breaker library for Node.js. Simple and effective.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">Hystrix (Java)</h4>
            <p>Netflix's circuit breaker library. Provides isolation, timeouts, and monitoring.</p>
          </div>
          <div className="bg-slate-700/50 p-3 rounded">
            <h4 className="font-semibold text-indigo-300 mb-1">Istio (Service Mesh)</h4>
            <p>Service mesh that provides circuit breakers, retries, and timeouts at the infrastructure level.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Circuit breaker prevents cascading failures by stopping calls to failing services.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>CLOSED state: normal operation, requests pass through.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>OPEN state: service is failing, requests are rejected immediately.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>HALF_OPEN state: testing if service has recovered.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Fallback strategies handle failures gracefully (cache, defaults, degradation).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Circuit breaker is essential for building resilient microservices.</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

