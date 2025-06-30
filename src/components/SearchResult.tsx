
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SearchResultProps {
  result: {
    query: string;
    explanation: string;
    category: string;
  };
  onCopy: (text: string) => void;
  index: number;
}

export const SearchResult = ({ result, onCopy, index }: SearchResultProps) => {
  const openInGoogle = () => {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(result.query)}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 animate-slide-up" 
          style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                {result.category}
              </span>
            </div>
            <code className="block p-4 bg-slate-900 border border-slate-700 rounded-lg text-sm text-green-400 font-mono mb-3 overflow-x-auto">
              {result.query}
            </code>
            <p className="text-gray-300 text-sm">{result.explanation}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={() => onCopy(result.query)}
            variant="outline"
            size="sm"
            className="flex-1 border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Query
          </Button>
          <Button
            onClick={openInGoogle}
            size="sm"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Search Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
