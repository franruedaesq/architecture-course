import { AlertCircle } from "lucide-react";

interface BigWordAlertProps {
  term: string;
  definition: string;
}

export default function BigWordAlert({ term, definition }: BigWordAlertProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-700/50 rounded-lg p-6 my-6">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-yellow-300 mb-2 flex items-center gap-2">
            <span className="inline-block px-2 py-1 bg-yellow-600/30 rounded text-sm font-semibold">BIG WORD ALERT</span>
            {term}
          </h3>
          <p className="text-slate-200 leading-relaxed">{definition}</p>
        </div>
      </div>
    </div>
  );
}

