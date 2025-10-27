import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bundleData = [
  {
    id: "no-split",
    name: "Without Code-Splitting",
    chunks: [
      { name: "React", size: 40, color: "from-blue-500 to-blue-600" },
      { name: "React-DOM", size: 35, color: "from-purple-500 to-purple-600" },
      { name: "Homepage Code", size: 15, color: "from-green-500 to-green-600" },
      { name: "Product Page Code", size: 20, color: "from-yellow-500 to-yellow-600" },
      { name: "Checkout Code", size: 25, color: "from-red-500 to-red-600" },
      { name: "Other Libraries", size: 30, color: "from-pink-500 to-pink-600" },
    ],
    totalSize: 165,
    description: "All code is bundled together. User downloads 165KB even if they only view the homepage.",
  },
  {
    id: "with-split",
    name: "With Code-Splitting",
    chunks: [
      { name: "React (Shared)", size: 40, color: "from-blue-500 to-blue-600" },
      { name: "React-DOM (Shared)", size: 35, color: "from-purple-500 to-purple-600" },
      { name: "Homepage Code", size: 15, color: "from-green-500 to-green-600" },
      { name: "Product Page Code (Lazy)", size: 20, color: "from-yellow-500 to-yellow-600" },
      { name: "Checkout Code (Lazy)", size: 25, color: "from-red-500 to-red-600" },
      { name: "Other Libraries (Lazy)", size: 30, color: "from-pink-500 to-pink-600" },
    ],
    initialSize: 90,
    description: "Only essential code is loaded initially. User downloads 90KB for homepage, then lazy-loads other chunks as needed.",
  },
];

export default function CodeSplittingVisualization() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>("no-split");

  const data = bundleData.find((d) => d.id === selectedStrategy);
  if (!data) return null;

  const isWithSplit = selectedStrategy === "with-split";
  const displaySize = isWithSplit ? data.initialSize : data.totalSize;

  return (
    <div className="space-y-6">
      {/* Strategy Selection */}
      <div className="flex gap-4 mb-6">
        {bundleData.map((strategy) => (
          <button
            key={strategy.id}
            onClick={() => setSelectedStrategy(strategy.id)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedStrategy === strategy.id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {strategy.name}
          </button>
        ))}
      </div>

      {/* Bundle Visualization */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">{data.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-300">{data.description}</p>

          {/* Bar Chart */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-300">
                  {isWithSplit ? "Initial Bundle" : "Total Bundle"}
                </span>
                <span className="text-sm font-bold text-blue-400">{displaySize}KB</span>
              </div>
              <div className="flex h-12 rounded-lg overflow-hidden gap-1 bg-slate-900">
                {data.chunks.map((chunk, index) => {
                  const percentage = (chunk.size / (isWithSplit ? 90 : 165)) * 100;
                  const isLazy = isWithSplit && (chunk.name.includes("Lazy") || chunk.name.includes("Shared"));

                  return (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${chunk.color} flex items-center justify-center text-xs font-bold text-white transition-all hover:opacity-80 cursor-pointer relative group`}
                      style={{
                        width: `${percentage}%`,
                        opacity: isLazy && chunk.name.includes("Lazy") ? 0.5 : 1,
                      }}
                      title={`${chunk.name}: ${chunk.size}KB`}
                    >
                      {percentage > 8 && <span className="text-xs">{chunk.size}KB</span>}
                      {isLazy && chunk.name.includes("Lazy") && (
                        <span className="absolute -top-8 left-0 bg-slate-900 text-yellow-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                          Lazy Loaded
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {data.chunks.map((chunk, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded bg-gradient-to-r ${chunk.color}`}></div>
                  <span className="text-xs text-slate-300">
                    {chunk.name} ({chunk.size}KB)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          {isWithSplit && (
            <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-green-300 mb-3">Benefits of Code-Splitting</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><span className="font-semibold">45% smaller initial bundle</span> (90KB vs 165KB)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><span className="font-semibold">Faster hydration</span> - Less JavaScript to parse and execute</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><span className="font-semibold">Lower TBT</span> - User can interact sooner</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span><span className="font-semibold">Lazy loading</span> - Load code only when needed</span>
                </li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-300 font-semibold">Metric</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-semibold">Without Splitting</th>
                  <th className="text-left py-3 px-4 text-slate-300 font-semibold">With Splitting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4 text-slate-300">Initial Bundle Size</td>
                  <td className="py-3 px-4 text-red-400 font-semibold">165KB</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">90KB</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4 text-slate-300">Hydration Time</td>
                  <td className="py-3 px-4 text-red-400 font-semibold">~2000ms</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">~1200ms</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-3 px-4 text-slate-300">Time to Interactive</td>
                  <td className="py-3 px-4 text-red-400 font-semibold">~2500ms</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">~1700ms</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">TBT (Total Blocking Time)</td>
                  <td className="py-3 px-4 text-red-400 font-semibold">High</td>
                  <td className="py-3 px-4 text-green-400 font-semibold">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

