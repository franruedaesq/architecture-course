import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ModuleLayout from "@/components/ModuleLayout";
import BigWordAlert from "@/components/BigWordAlert";
import HydrationTimeline from "@/components/HydrationTimeline";

export default function Module2() {
  return (
    <ModuleLayout
      moduleNumber={2}
      title="The Frontend Fragmentation"
      subtitle="Micro-Frontends & Server-Side Rendering"
      description="Explore how the frontend mirrors the backend architecture and the weird trade-offs of server-side rendering and hydration."
      previousModule={1}
      nextModule={3}
    >
      {/* Lesson 1: Micro-Frontends */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 1: Micro-Frontends - The UI Mirror</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          If the backend is split into Microservices, it only makes sense that the frontend should follow suit. This is the principle of architectural consistency.
        </p>

        <BigWordAlert
          term="Micro-Frontends"
          definition="An architectural style where a single large frontend application is composed of many smaller, independently developed, and independently deployable applications. Each micro-frontend is typically owned by the same team that owns the corresponding backend microservice."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          This is the UI's commitment to <span className="font-semibold text-blue-300">independent deployment</span>. The team that owns the "Review Service" microservice also owns the "Review Widget" micro-frontend. They can deploy a new feature to the review widget without the main product page team even knowing.
        </p>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Micro-Frontend Structure Example</h3>
          <div className="space-y-3 text-slate-300 font-mono text-sm">
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">header-mfe</span> (Navigation, Logo)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">product-mfe</span> (Product Details, Price)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">reviews-mfe</span> (Customer Reviews)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">├─</span>
              <span><span className="font-semibold">recommendations-mfe</span> (Related Products)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">└─</span>
              <span><span className="font-semibold">shell</span> (Stitches them all together)</span>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed">
          The <span className="font-semibold text-yellow-300">weird part</span> is: How do you stitch these pieces together into one seamless user experience? It's like trying to make a single webpage out of multiple separate websites. This "stitching" process is a core challenge we'll address in Module 4.
        </p>
      </section>

      {/* Lesson 2: Server-Side Rendering */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 2: Server-Side Rendering (SSR) - The Speed Trick</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Why do we render HTML on the server when the browser can do it perfectly well? The answer is two-fold: <span className="font-semibold text-blue-300">Speed</span> and <span className="font-semibold text-blue-300">Search Engines (SEO)</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Client-Side Rendering (CSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <div>
                <p className="font-semibold text-blue-400 mb-2">The Process:</p>
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Download tiny HTML file</li>
                  <li>Download huge JavaScript bundle</li>
                  <li>Browser runs JavaScript</li>
                  <li>Page is built and rendered</li>
                </ol>
              </div>
              <div className="bg-red-900/30 border border-red-700/50 rounded p-3">
                <p className="font-semibold text-red-300">Result: Slow initial load</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Server-Side Rendering (SSR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-300 text-sm">
              <div>
                <p className="font-semibold text-green-400 mb-2">The Process:</p>
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Server runs React code</li>
                  <li>Server sends complete HTML</li>
                  <li>Browser displays page immediately</li>
                  <li>JavaScript "wakes up" the page</li>
                </ol>
              </div>
              <div className="bg-green-900/30 border border-green-700/50 rounded p-3">
                <p className="font-semibold text-green-300">Result: Fast initial load</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          When a browser renders a React application with <span className="font-semibold">Client-Side Rendering (CSR)</span>, it first downloads a tiny HTML file, then a huge JavaScript bundle, and <span className="italic">then</span> it runs the JavaScript to build the entire page. This is slow.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With <span className="font-semibold">Server-Side Rendering (SSR)</span>, our BFF (the perfect place to put it!) takes the React code, runs it on the server, and sends a <span className="italic">fully formed HTML page</span> to the browser.
        </p>

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-800/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">The SSR Benefits</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">Speed (FCP):</span> The user sees content almost instantly. This dramatically improves the First Contentful Paint (FCP) metric.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span><span className="font-semibold">SEO:</span> Search engine crawlers (like Googlebot) see the complete page content immediately, which is crucial for technical SEO.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Lesson 3: Hydration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Lesson 3: Hydration - The Great Wake-Up Call</h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          This is arguably the <span className="font-semibold text-yellow-300">weirdest part</span> of Universal React.
        </p>

        <BigWordAlert
          term="Hydration"
          definition="The client-side process where a JavaScript framework (like React) 'wakes up' the server-rendered static HTML. It attaches event listeners, initializes the component state, and turns the static content into a fully interactive, dynamic application."
        />

        <p className="text-slate-300 text-lg leading-relaxed mb-6 mt-6">
          The browser receives a beautiful, static HTML page from the server (thanks, SSR!). It looks like a webpage, but it's dead—you can't click any buttons. The browser then downloads the JavaScript bundle and "hydrates" the page, making it interactive.
        </p>

        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">The Hydration Trade-Off (The Weird Part)</h3>
          <p className="text-slate-300 mb-4">
            SSR makes the page <span className="font-semibold">look</span> fast (great FCP), but Hydration is a massive, single-threaded JavaScript task. While the browser is busy "waking up" the page, the user can't interact with anything. This is the main contributor to a metric called <span className="font-semibold">Total Blocking Time (TBT)</span>.
          </p>
          <p className="text-slate-300">
            We traded a slow start for a potentially slow, non-interactive middle. This tension is the core of modern web performance optimization.
          </p>
        </div>

        {/* Hydration Timeline */}
        <div className="my-8">
          <HydrationTimeline />
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">The Hydration Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              During hydration, React must:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Parse and execute the entire JavaScript bundle</li>
              <li>Reconstruct the component tree in memory</li>
              <li>Attach event listeners to DOM elements</li>
              <li>Verify the server-rendered HTML matches the client-rendered version</li>
            </ul>
            <p className="mt-4 pt-4 border-t border-slate-700">
              All of this happens on the main thread, blocking user interactions. This is why <span className="font-semibold">code-splitting</span> (Module 4) is so important—it reduces the amount of JavaScript that needs to be hydrated.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-bold text-white mb-4">Key Takeaways</h3>
        <ul className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Micro-Frontends mirror the backend's microservices structure, enabling independent deployment.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Server-Side Rendering (SSR) improves First Contentful Paint (FCP) and enables Technical SEO.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>Hydration is the process that "wakes up" server-rendered HTML, making it interactive.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">→</span>
            <span>The Hydration cost (Total Blocking Time) is the trade-off for the SSR speed benefit.</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div></div>
        <Link href="/module/3">
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

