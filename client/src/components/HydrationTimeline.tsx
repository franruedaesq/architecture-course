import { useState } from "react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    id: 1,
    time: "0ms",
    label: "Request Sent",
    description: "Browser sends request to BFF",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    time: "200ms",
    label: "Server Responds (FCP)",
    description: "Server sends fully-formed HTML. User sees content!",
    color: "from-green-500 to-green-600",
    highlight: true,
  },
  {
    id: 3,
    time: "200-1000ms",
    label: "JavaScript Download",
    description: "Browser downloads the JavaScript bundle",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 4,
    time: "1000-2000ms",
    label: "HYDRATION (TBT)",
    description: "React wakes up the page. User can't interact!",
    color: "from-red-500 to-red-600",
    warning: true,
  },
  {
    id: 5,
    time: "2000ms+",
    label: "Fully Interactive",
    description: "Page is fully interactive and responsive",
    color: "from-green-500 to-green-600",
    highlight: true,
  },
];

export default function HydrationTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(2);

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
      <h3 className="text-lg font-semibold text-white mb-6">SSR/Hydration Timeline</h3>

      {/* Timeline */}
      <div className="space-y-4 mb-8">
        {timelineEvents.map((event, index) => (
          <div key={event.id}>
            <div
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                selectedEvent === event.id
                  ? `bg-gradient-to-r ${event.color} border-opacity-100 shadow-lg`
                  : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
              } ${event.warning ? "border-red-500" : ""} ${event.highlight ? "border-green-500" : ""}`}
              onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {event.id}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-mono text-slate-400">{event.time}</span>
                    <span className="font-semibold text-white">{event.label}</span>
                    {event.warning && <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">BLOCKING</span>}
                    {event.highlight && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">FAST</span>}
                  </div>
                  <p className="text-slate-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>

            {/* Details */}
            {selectedEvent === event.id && (
              <div className="mt-2 ml-16 p-4 bg-slate-700/30 border border-slate-600 rounded-lg animate-in fade-in text-slate-300 text-sm">
                {event.id === 1 && (
                  <p>The user's browser initiates a request to the BFF server for a page.</p>
                )}
                {event.id === 2 && (
                  <div>
                    <p className="mb-2">
                      The BFF has already fetched data from microservices and rendered the React component to an HTML string. It sends this complete HTML to the browser.
                    </p>
                    <p className="text-green-300 font-semibold">✓ First Contentful Paint (FCP) is achieved!</p>
                  </div>
                )}
                {event.id === 3 && (
                  <p>The browser parses the HTML and begins downloading the JavaScript bundle needed to make the page interactive. The page is visible but not yet interactive.</p>
                )}
                {event.id === 4 && (
                  <div>
                    <p className="mb-2">
                      React runs on the client side and "hydrates" the server-rendered HTML. It:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-2">
                      <li>Parses the JavaScript bundle</li>
                      <li>Reconstructs the component tree</li>
                      <li>Attaches event listeners</li>
                      <li>Verifies the HTML matches</li>
                    </ul>
                    <p className="text-red-300 font-semibold">✗ Total Blocking Time (TBT) is high. User clicks are ignored!</p>
                  </div>
                )}
                {event.id === 5 && (
                  <p>Hydration is complete. React has fully taken over. The page is now fully interactive and responsive to user input.</p>
                )}
              </div>
            )}

            {/* Connector */}
            {index < timelineEvents.length - 1 && (
              <div className="ml-6 h-4 border-l-2 border-slate-600"></div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4">
          <div className="text-sm font-semibold text-green-300 mb-2">✓ Benefit</div>
          <p className="text-slate-300 text-sm">Fast First Contentful Paint (FCP) - User sees content quickly</p>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4">
          <div className="text-sm font-semibold text-yellow-300 mb-2">⚠ Trade-off</div>
          <p className="text-slate-300 text-sm">High Total Blocking Time (TBT) - Page isn't interactive during hydration</p>
        </div>
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4">
          <div className="text-sm font-semibold text-blue-300 mb-2">→ Solution</div>
          <p className="text-slate-300 text-sm">Code-splitting - Reduce JS bundle size to speed up hydration</p>
        </div>
      </div>
    </div>
  );
}

