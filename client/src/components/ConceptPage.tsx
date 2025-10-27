import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface ConceptPageProps {
  title: string;
  subtitle: string;
  previousConcept?: {
    path: string;
    label: string;
  };
  nextConcept?: {
    path: string;
    label: string;
  };
  backToModule?: {
    path: string;
    label: string;
  };
  children: React.ReactNode;
}

export default function ConceptPage({
  title,
  subtitle,
  previousConcept,
  nextConcept,
  backToModule,
  children,
}: ConceptPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border-b border-blue-800/50 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-3">
            {backToModule && (
              <Link href={backToModule.path}>
                <a className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" />
                  {backToModule.label}
                </a>
              </Link>
            )}
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-slate-300 text-lg">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-12 border-t border-slate-800">
        <div className="flex justify-between items-center">
          {previousConcept ? (
            <Link href={previousConcept.path}>
              <a>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  {previousConcept.label}
                </Button>
              </a>
            </Link>
          ) : (
            <div></div>
          )}

          {nextConcept ? (
            <Link href={nextConcept.path}>
              <a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                  {nextConcept.label}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

