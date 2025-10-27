import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import WebVitalsComparison from "@/components/WebVitalsComparison";

export default function Module3() {
  return (
    <ModuleLayout
      moduleNumber={3}
      title="Measuring Success"
      subtitle="Web Performance & Technical SEO"
      description="Deep dive into Core Web Vitals, Technical SEO, and the metrics that matter for modern web applications."
      previousModule={2}
      nextModule={4}
    >
      {/* Lesson 1: Core Web Vitals */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Core Web Vitals - The Performance Scorecard</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          In the Monolith days, "fast" meant "it loaded quickly." Today, "fast" is a complex, measurable science defined by Google's <span className="font-semibold">Core Web Vitals (CWV)</span>. Our micro-architecture directly impacts these three metrics.
        </p>

        <WebVitalsComparison />

        <Card className="bg-slate-800/50 border-slate-700 mt-6">
          <CardHeader>
            <CardTitle className="text-white">The Core Web Vitals in Detail</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-blue-300 mb-2">LCP (Largest Contentful Paint)</h4>
              <p className="text-slate-300 text-sm mb-3">
                Measures when the main content of the page has loaded. This is the metric that users perceive as "the page is ready."
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-green-300">✓ How SSR Helps:</span> Sending a fully-formed HTML page means the browser can paint the main content much faster than waiting for JavaScript to run.
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h4 className="font-semibold text-red-300 mb-2">FID/INP (First Input Delay / Interaction to Next Paint)</h4>
              <p className="text-slate-300 text-sm mb-3">
                The responsiveness of the page to user input. How long does the page take to respond when the user clicks a button?
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-red-300">✗ How Hydration Hurts:</span> While the browser is busy "waking up" the page, it can't respond to clicks, leading to a poor FID/INP score.
              </div>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h4 className="font-semibold text-yellow-300 mb-2">CLS (Cumulative Layout Shift)</h4>
              <p className="text-slate-300 text-sm mb-3">
                How much the content unexpectedly shifts around. A good user experience means the page is stable and predictable.
              </p>
              <div className="bg-slate-700/50 p-3 rounded text-sm text-slate-300">
                <span className="font-semibold text-yellow-300">⚠ How Micro-Frontends Can Hurt:</span> If the different pieces (header, product, reviews) load at different times and "stitch" together, the page will jump, causing a bad user experience and a poor CLS score.
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">The Tension</h3>
          <p className="text-slate-300">
            The <span className="font-semibold">weird part</span> is the tension between LCP (improved by SSR) and FID/INP (hurt by Hydration). Our whole architecture is a balancing act between these two. We're trying to make the page <span className="italic">look</span> fast while also making it <span className="italic">feel</span> responsive.
          </p>
        </div>
      </section>

      {/* Lesson 2: Technical SEO */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Technical SEO - The Business Driver</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Why did we go through all the trouble of SSR? For many companies, the answer is <span className="font-semibold text-blue-300">Technical SEO</span>. If Google can't read your page, you don't exist in search results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">The Old Way (CSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <p>Google had to:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Download your JavaScript</li>
                <li>Run it in a headless browser</li>
                <li>Wait for the page to render</li>
              </ol>
              <div className="bg-red-900/30 border border-red-700/50 rounded p-3 mt-4">
                <p className="font-semibold text-red-300">Result: Slow, unreliable, often failed</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">The New Way (SSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <p>Google gets:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>A complete HTML page</li>
                <li>Ready to read immediately</li>
                <li>All content visible</li>
              </ol>
              <div className="bg-green-900/30 border border-green-700/50 rounded p-3 mt-4">
                <p className="font-semibold text-green-300">Result: Fast, reliable, crawlable</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <BigWordAlert
          term="Structured Data (JSON-LD)"
          definition="A standardized format (often JSON) that you embed in your HTML to explicitly tell search engines what your content means—not just what it says. For example, 'This is a Product,' 'This is a Review,' 'This is the Price.'"
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          But with Micro-Frontends, the content is scattered across multiple independent applications. We need to tell Google how to put it all together.
        </p>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">JSON-LD Example: Product Page</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 p-4 rounded overflow-x-auto text-xs text-slate-300 font-mono">
{`{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Headphones",
  "description": "High-quality wireless headphones",
  "image": "https://example.com/headphones.jpg",
  "brand": {
    "@type": "Brand",
    "name": "AudioBrand"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product/123",
    "priceCurrency": "USD",
    "price": "99.99"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "89"
  }
}`}
            </pre>
          </CardContent>
        </Card>

        <p className="text-slate-300 text-lg leading-relaxed mt-6">
          The <span className="font-semibold text-yellow-300">weird part</span> is that the BFF now has to collect product data from the Product Service, review data from the Review Service, and then <span className="italic">combine</span> them into a single, comprehensive JSON-LD object to make a perfect SEO package for Google.
        </p>
      </section>

      {/* Lesson 3: Metadata Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Metadata Management - The Title & Meta Tags</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Every page needs the correct <code className="bg-slate-900 px-2 py-1 rounded text-sm">&lt;title&gt;</code> and <code className="bg-slate-900 px-2 py-1 rounded text-sm">&lt;meta&gt;</code> tags for SEO and social sharing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-base">Meta Tags for SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-300 text-sm font-mono">
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;title&gt;</span>Wireless Headphones | AudioBrand<span className="text-blue-400">&lt;/title&gt;</span>
              </div>
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;meta</span> name="description" content="..." <span className="text-blue-400">/&gt;</span>
              </div>
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;meta</span> name="keywords" content="..." <span className="text-blue-400">/&gt;</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-base">Meta Tags for Social Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-300 text-sm font-mono">
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;meta</span> property="og:title" content="..." <span className="text-blue-400">/&gt;</span>
              </div>
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;meta</span> property="og:image" content="..." <span className="text-blue-400">/&gt;</span>
              </div>
              <div className="bg-slate-900 p-2 rounded">
                <span className="text-blue-400">&lt;meta</span> property="og:description" content="..." <span className="text-blue-400">/&gt;</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed">
          The BFF is the perfect place to manage these tags because it has access to all the data from the microservices and can render the correct HTML with the correct metadata before sending it to the browser.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Core Web Vitals (LCP, FID/INP, CLS) are the metrics that matter for user experience and SEO.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>SSR improves LCP but Hydration hurts FID/INP—it's a trade-off we must optimize.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Technical SEO is a primary business driver for using SSR and the BFF architecture.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Structured Data (JSON-LD) and Metadata Management must be handled by the BFF.</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/4">
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

