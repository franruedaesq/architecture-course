import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { ReactNode } from "react";
import { getModuleIndex, getModuleMeta, modules, totalModules } from "@shared/courseContent";

interface ModuleLayoutProps {
  moduleId: number;
  children: ReactNode;
}

export default function ModuleLayout({ moduleId, children }: ModuleLayoutProps) {
  const moduleMeta = getModuleMeta(moduleId);
  const moduleIndex = getModuleIndex(moduleId);
  const previousModule = modules[moduleIndex - 1];
  const nextModule = modules[moduleIndex + 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Link href="/">
              <a>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </a>
            </Link>
            <div className="text-sm font-semibold text-blue-400">
              Module {moduleMeta.id} of {totalModules}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{moduleMeta.title}</h1>
          <p className="text-blue-400 font-semibold mb-2">{moduleMeta.subtitle}</p>
          <p className="text-slate-300">{moduleMeta.description}</p>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-slate-800/30 h-1">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${((moduleIndex + 1) / totalModules) * 100}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-slate-800 bg-slate-900/50">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            {previousModule ? (
              <Link href={previousModule.path}>
                <a>
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous Module
                  </Button>
                </a>
              </Link>
            ) : (
              <div></div>
            )}

            <Link href="/">
              <a>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                  All Modules
                </Button>
              </a>
            </Link>

            {nextModule ? (
              <Link href={nextModule.path}>
                <a>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Next Module <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

