import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const vitals = [
  {
    id: "lcp",
    name: "LCP",
    fullName: "Largest Contentful Paint",
    description: "When the main content of the page has loaded",
    good: "< 2.5s",
    impact: "SSR ✓ (Positive)",
    detail: "Server sends fully-formed HTML, so the browser can paint main content faster",
    color: "from-green-500 to-green-600",
  },
  {
    id: "fid",
    name: "FID/INP",
    fullName: "First Input Delay / Interaction to Next Paint",
    description: "How responsive the page is to user input",
    good: "< 100ms",
    impact: "Hydration ✗ (Negative)",
    detail: "While the browser is hydrating, it can't respond to clicks",
    color: "from-red-500 to-red-600",
  },
  {
    id: "cls",
    name: "CLS",
    fullName: "Cumulative Layout Shift",
    description: "How much the content unexpectedly shifts around",
    good: "< 0.1",
    impact: "Micro-Frontends ⚠ (Risky)",
    detail: "If pieces load at different times and stitch together, the page jumps",
    color: "from-yellow-500 to-yellow-600",
  },
];

const vitalMap = new Map(vitals.map(vital => [vital.id, vital] as const));

export default function WebVitalsComparison() {
  const [selectedVital, setSelectedVital] = useState<string>("lcp");
  const activeVital = useMemo(() => {
    return vitalMap.get(selectedVital) ?? vitals[0];
  }, [selectedVital]);

  return (
    <div className="space-y-6">
      {/* Grid of Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vitals.map((vital) => (
          <div
            key={vital.id}
            className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
              selectedVital === vital.id
                ? `bg-gradient-to-br ${vital.color} border-opacity-100 shadow-lg`
                : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
            }`}
            onClick={() => setSelectedVital(vital.id)}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">{vital.name}</div>
              <div className="text-xs text-slate-300 mb-3">{vital.fullName}</div>
              <div className="text-sm font-semibold text-slate-200">Good: {vital.good}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Details */}
      {activeVital && (
        <Card className="bg-slate-800/50 border-slate-700 animate-in fade-in">
          <CardHeader>
            <CardTitle className="text-white">
              {activeVital.fullName}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-slate-300 mb-3">{activeVital.description}</p>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="text-sm font-semibold text-slate-300 mb-2">How Our Architecture Impacts It:</div>
              <p className="text-slate-300">
                <span className="font-semibold">{activeVital.impact}</span>
              </p>
              <p className="text-slate-400 text-sm mt-2">{activeVital.detail}</p>
            </div>

            {activeVital.id === "lcp" && (
              <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">How to Improve LCP</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Use SSR to send fully-formed HTML</li>
                  <li>• Optimize server response time</li>
                  <li>• Minimize render-blocking resources</li>
                  <li>• Preload critical images</li>
                </ul>
              </div>
            )}

            {activeVital.id === "fid" && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-red-300 mb-2">How to Improve FID/INP</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Use code-splitting to reduce bundle size</li>
                  <li>• Break up long JavaScript tasks</li>
                  <li>• Use web workers for heavy computations</li>
                  <li>• Defer non-critical JavaScript</li>
                </ul>
              </div>
            )}

            {activeVital.id === "cls" && (
              <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-300 mb-2">How to Improve CLS</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Reserve space for images and ads</li>
                  <li>• Avoid inserting content above existing content</li>
                  <li>• Ensure micro-frontends load synchronously</li>
                  <li>• Use CSS containment for isolated components</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

