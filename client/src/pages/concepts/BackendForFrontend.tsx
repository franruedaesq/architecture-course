import ConceptPage from "@/components/ConceptPage";
import BigWordAlert from "@/components/BigWordAlert";

export default function BackendForFrontendConcept() {
  return (
    <ConceptPage
      title="Backend for Frontend (BFF)"
      subtitle="Tailoring backend services for specific frontend clients"
      previousConcept={{ path: "/concepts/advanced-communication", label: "Advanced Communication" }}
      nextConcept={{ path: "/concepts/service-discovery", label: "Service Discovery" }}
      backToModule={{ path: "/module/1", label: "Module 1: The Backend Divide" }}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">What is Backend for Frontend?</h2>
        
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Backend for Frontend (BFF) is an architectural pattern where you create separate backend services tailored to the needs of specific frontend clients (web, mobile, desktop). Instead of having a single generic backend API, each frontend has its own dedicated backend.
        </p>

        <BigWordAlert
          term="Backend for Frontend (BFF)"
          definition="An architectural pattern where each frontend client (web, mobile, etc.) has its own dedicated backend service. The BFF aggregates data from multiple microservices and presents it in a format optimized for the specific frontend."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The BFF acts as a facade or adapter layer between the frontend and the microservices. It solves the problem of having a single generic API that doesn't fit the needs of different clients.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">The Problem BFF Solves</h2>
        
        <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-300 mb-4">Without BFF: One Generic API</h3>
          <p className="text-slate-300 text-sm mb-4">
            A single generic API tries to serve all clients (web, mobile, desktop). This leads to problems:
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">1. Over-fetching</h4>
              <p>Mobile client needs only 3 fields but receives 20 fields. Wastes bandwidth and battery.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">2. Under-fetching</h4>
              <p>Web client needs data from 5 different endpoints. Requires 5 separate API calls.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">3. Client-side Logic</h4>
              <p>Frontend must handle data transformation, aggregation, and filtering. Complex and error-prone.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">4. Versioning Nightmare</h4>
              <p>Changing the API breaks all clients. Requires coordinating updates across multiple teams.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-red-300 mb-1">5. Different Needs</h4>
              <p>Web needs pagination, mobile needs infinite scroll. Desktop needs different caching strategies.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-300 mb-4">With BFF: Tailored APIs</h3>
          <p className="text-slate-300 text-sm mb-4">
            Each frontend has its own BFF optimized for its specific needs:
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">1. Optimized Data</h4>
              <p>Each BFF returns only the fields needed by its client. No over-fetching.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">2. Aggregation</h4>
              <p>BFF aggregates data from multiple microservices. Frontend makes single API call.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">3. Server-side Logic</h4>
              <p>Transformation and filtering happen on the server. Frontend is simpler.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">4. Independent Evolution</h4>
              <p>Each BFF can evolve independently. Frontend and backend teams work independently.</p>
            </div>
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-1">5. Client-Specific Features</h4>
              <p>Mobile BFF can handle offline caching, web BFF can handle real-time updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">BFF Architecture</h2>
        
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Typical BFF Architecture</h3>
          <div className="bg-slate-900 p-4 rounded text-xs font-mono mb-4">
            <div className="text-slate-400">Frontend Layer:</div>
            <div className="mt-2">Web App ──→ Web BFF</div>
            <div>Mobile App ──→ Mobile BFF</div>
            <div>Desktop App ──→ Desktop BFF</div>
            <div className="mt-3 text-slate-400">Backend Layer:</div>
            <div className="mt-2">Web BFF ──→ User Service</div>
            <div className="ml-4">──→ Product Service</div>
            <div className="ml-4">──→ Order Service</div>
            <div className="mt-2">Mobile BFF ──→ User Service</div>
            <div className="ml-4">──→ Product Service (lightweight)</div>
            <div className="mt-2">Desktop BFF ──→ User Service</div>
            <div className="ml-4">──→ Analytics Service</div>
            <div className="ml-4">──→ Reporting Service</div>
          </div>
        </div>

        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">E-Commerce Example: Product Page</h3>
          <div className="space-y-4 text-slate-300 text-sm">
            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-blue-300 mb-2">Web BFF Response</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div className="text-green-400">{`{`}</div>
                <div className="ml-4">product: {`{`}</div>
                <div className="ml-8">id, name, description, price,</div>
                <div className="ml-8">images, reviews (10 items),</div>
                <div className="ml-8">recommendations (5 items)</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">relatedProducts: [{`...`}],</div>
                <div className="ml-4">userRating: {`...`},</div>
                <div className="ml-4">inventory: {`...`}</div>
                <div className="text-green-400">{`}`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-purple-300 mb-2">Mobile BFF Response</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div className="text-green-400">{`{`}</div>
                <div className="ml-4">product: {`{`}</div>
                <div className="ml-8">id, name, price,</div>
                <div className="ml-8">mainImage, reviews (3 items)</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">inStock: boolean</div>
                <div className="text-green-400">{`}`}</div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-3 rounded">
              <h4 className="font-semibold text-green-300 mb-2">Desktop BFF Response</h4>
              <div className="bg-slate-900 p-2 rounded text-xs font-mono">
                <div className="text-green-400">{`{`}</div>
                <div className="ml-4">product: {`{`}</div>
                <div className="ml-8">id, name, description, price,</div>
                <div className="ml-8">images, reviews (all),</div>
                <div className="ml-8">specifications, variants</div>
                <div className="ml-4">{`}`},</div>
                <div className="ml-4">analytics: {`{`} views, conversions {`}`},</div>
                <div className="ml-4">inventory: {`{`} detailed warehouse info {`}`}</div>
                <div className="text-green-400">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">BFF Responsibilities</h2>
        
        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-300 mb-3">1. Data Aggregation</h4>
            <p className="text-slate-300 text-sm mb-3">
              Call multiple microservices and combine their responses into a single response.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// BFF aggregates data from multiple services</div>
              <div className="mt-2">async getProductPage(productId) {`{`}</div>
              <div className="ml-4">const product = await productService.get(productId);</div>
              <div className="ml-4">const reviews = await reviewService.get(productId);</div>
              <div className="ml-4">const inventory = await inventoryService.get(productId);</div>
              <div className="ml-4">const recommendations = await recommendationService.get(productId);</div>
              <div className="mt-2 text-slate-400">// Combine and return</div>
              <div className="ml-4">return {`{`} product, reviews, inventory, recommendations {`}`};</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-300 mb-3">2. Data Transformation</h4>
            <p className="text-slate-300 text-sm mb-3">
              Transform data from microservice format to frontend-specific format.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Transform microservice response to mobile format</div>
              <div className="mt-2">const mobileProduct = {`{`}</div>
              <div className="ml-4">id: product.id,</div>
              <div className="ml-4">title: product.name, // Rename field</div>
              <div className="ml-4">price: product.price.toFixed(2), // Format</div>
              <div className="ml-4">image: product.images[0], // Select first image only</div>
              <div className="ml-4">rating: reviews.average, // Calculate</div>
              <div>{`}`};</div>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-300 mb-3">3. Filtering & Pagination</h4>
            <p className="text-slate-300 text-sm mb-3">
              Filter, sort, and paginate data according to frontend needs.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Mobile: Infinite scroll (return 20 items)</div>
              <div className="mt-2">const reviews = allReviews.slice(0, 20);</div>
              <div className="mt-2 text-green-400">// Web: Pagination (return page info)</div>
              <div>const page = {`{`}</div>
              <div className="ml-4">items: allReviews.slice(offset, offset + limit),</div>
              <div className="ml-4">total: allReviews.length,</div>
              <div className="ml-4">hasMore: offset + limit {`<`} allReviews.length</div>
              <div>{`}`};</div>
            </div>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">4. Authentication & Authorization</h4>
            <p className="text-slate-300 text-sm mb-3">
              Handle authentication for the frontend and pass credentials to microservices.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// BFF validates JWT and calls services</div>
              <div className="mt-2">app.get('/api/user/profile', (req, res) {`=>`} {`{`}</div>
              <div className="ml-4">const user = validateJWT(req.headers.authorization);</div>
              <div className="ml-4">const profile = await userService.get(user.id);</div>
              <div className="ml-4">res.json(profile);</div>
              <div>{`}`});</div>
            </div>
          </div>

          <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-indigo-300 mb-3">5. Caching</h4>
            <p className="text-slate-300 text-sm mb-3">
              Cache responses to reduce calls to microservices and improve performance.
            </p>
            <div className="bg-slate-900 p-3 rounded text-xs font-mono">
              <div className="text-green-400">// Cache product data (changes infrequently)</div>
              <div className="mt-2">const product = cache.get(`product-${`}id{`}`) ||</div>
              <div className="ml-4">await productService.get(id);</div>
              <div className="mt-2">cache.set(`product-${`}id{`}`, product, 3600); // 1 hour</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">BFF vs API Gateway</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-slate-300">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-3 text-blue-300">Aspect</th>
                <th className="text-left p-3 text-green-300">BFF</th>
                <th className="text-left p-3 text-purple-300">API Gateway</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Purpose</td>
                <td className="p-3">Tailored for specific frontend</td>
                <td className="p-3">Generic entry point for all clients</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Data Aggregation</td>
                <td className="p-3">Yes (frontend-specific)</td>
                <td className="p-3">No (just routes requests)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Transformation</td>
                <td className="p-3">Yes (heavy)</td>
                <td className="p-3">No (minimal)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Coupling</td>
                <td className="p-3">Tight to frontend</td>
                <td className="p-3">Loose (generic)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-3 font-semibold">Scaling</td>
                <td className="p-3">Scale per frontend</td>
                <td className="p-3">Single scale point</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Best For</td>
                <td className="p-3">Multiple diverse clients</td>
                <td className="p-3">Cross-cutting concerns (auth, logging)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Key Takeaways</h2>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8">
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>BFF solves the problem of having a single generic API for multiple clients.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Each frontend (web, mobile, desktop) has its own tailored BFF.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>BFF aggregates data from multiple microservices into a single response.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>BFF handles data transformation, filtering, caching, and authentication.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>BFF enables independent evolution of frontend and backend teams.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>BFF is different from API Gateway (BFF is specific, Gateway is generic).</span>
            </li>
          </ul>
        </div>
      </section>
    </ConceptPage>
  );
}

