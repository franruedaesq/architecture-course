import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { id: 1, label: "UI Request", color: "from-blue-500 to-blue-600" },
    { id: 2, label: "BFF", color: "from-purple-500 to-purple-600" },
    { id: 3, label: "Microservices", color: "from-green-500 to-green-600" },
  ];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-6">The BFF Architecture Flow</h3>

        {/* Desktop Diagram */}
        <div className="hidden md:flex items-center justify-between gap-4 mb-8">
          {/* UI */}
          <div
            className={`flex-1 p-4 rounded-lg border-2 transition-all cursor-pointer ${
              activeStep === 1
                ? "bg-blue-900/50 border-blue-400 shadow-lg shadow-blue-500/50"
                : "bg-slate-700/50 border-slate-600 hover:border-blue-500"
            }`}
            onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
          >
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-300 mb-2">Frontend</div>
              <div className="text-lg font-bold text-white">UI</div>
              <div className="text-xs text-slate-400 mt-2">React App</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-slate-400 text-2xl">→</div>

          {/* BFF */}
          <div
            className={`flex-1 p-4 rounded-lg border-2 transition-all cursor-pointer ${
              activeStep === 2
                ? "bg-purple-900/50 border-purple-400 shadow-lg shadow-purple-500/50"
                : "bg-slate-700/50 border-slate-600 hover:border-purple-500"
            }`}
            onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
          >
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-300 mb-2">API Layer</div>
              <div className="text-lg font-bold text-white">BFF</div>
              <div className="text-xs text-slate-400 mt-2">Aggregator</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-slate-400 text-2xl">→</div>

          {/* Microservices */}
          <div
            className={`flex-1 p-4 rounded-lg border-2 transition-all cursor-pointer ${
              activeStep === 3
                ? "bg-green-900/50 border-green-400 shadow-lg shadow-green-500/50"
                : "bg-slate-700/50 border-slate-600 hover:border-green-500"
            }`}
            onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
          >
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-300 mb-2">Backend</div>
              <div className="text-lg font-bold text-white">Services</div>
              <div className="text-xs text-slate-400 mt-2">Product, User, Review...</div>
            </div>
          </div>
        </div>

        {/* Mobile Diagram */}
        <div className="md:hidden space-y-4 mb-8">
          {[
            { id: 1, name: "Frontend", desc: "React App" },
            { id: 2, name: "BFF", desc: "Aggregator" },
            { id: 3, name: "Services", desc: "Product, User, Review..." },
          ].map((item) => (
            <div key={item.id}>
              <div
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  activeStep === item.id
                    ? "bg-blue-900/50 border-blue-400 shadow-lg shadow-blue-500/50"
                    : "bg-slate-700/50 border-slate-600"
                }`}
                onClick={() => setActiveStep(activeStep === item.id ? null : item.id)}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-300 mb-2">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
              {item.id < 3 && <div className="text-center text-slate-400 py-2">↓</div>}
            </div>
          ))}
        </div>

        {/* Details */}
        {activeStep && (
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 animate-in fade-in">
            {activeStep === 1 && (
              <div>
                <h4 className="font-semibold text-white mb-2">Frontend (UI)</h4>
                <p className="text-slate-300 text-sm">
                  The React application sends a single request to the BFF. Example: <code className="bg-slate-900 px-2 py-1 rounded text-xs">GET /api/product/123</code>
                </p>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <h4 className="font-semibold text-white mb-2">Backend for Frontend (BFF)</h4>
                <p className="text-slate-300 text-sm mb-3">
                  The BFF receives the request and orchestrates calls to multiple microservices:
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <code className="bg-slate-900 px-1 rounded">GET /product-catalog/123</code></li>
                  <li>• <code className="bg-slate-900 px-1 rounded">GET /reviews/product/123</code></li>
                  <li>• <code className="bg-slate-900 px-1 rounded">GET /user-service/preferences</code></li>
                </ul>
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <h4 className="font-semibold text-white mb-2">Microservices</h4>
                <p className="text-slate-300 text-sm mb-3">
                  Each microservice handles a specific domain:
                </p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <span className="font-semibold">Product Service</span>: Product details</li>
                  <li>• <span className="font-semibold">Review Service</span>: Customer reviews</li>
                  <li>• <span className="font-semibold">User Service</span>: User preferences</li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2 justify-center mt-6">
          {steps.map((step) => (
            <Button
              key={step.id}
              variant={activeStep === step.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              className={activeStep === step.id ? `bg-gradient-to-r ${step.color} border-0` : "border-slate-600"}
            >
              {step.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

