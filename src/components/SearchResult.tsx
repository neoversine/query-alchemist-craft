
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
    <div className="glass-card border border-red-orange-500/30 hover:border-gold-500/50 transition-all duration-300 animate-slide-up" 
          style={{ animationDelay: `${index * 0.1}s` }}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <span className="px-3 py-1 glass-card border border-gold-500/30 text-gold-300 text-xs rounded-full">
                {result.category}
              </span>
            </div>
            <code className="block p-4 glass-card border border-red-orange-500/20 rounded-lg text-sm text-gold-300 font-mono mb-3 overflow-x-auto">
              {result.query}
            </code>
            <p className="text-gold-400/80 text-sm">{result.explanation}</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => onCopy(result.query)}
            variant="outline"
            size="sm"
            className="flex-1 glass-button border-gold-500/50 text-gold-300 hover:bg-gold-500/20"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Query
          </Button>
          <Button
            onClick={openInGoogle}
            size="sm"
            className="flex-1 glass-button bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-500 hover:to-red-orange-500 text-black font-semibold"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Search Google
          </Button>
        </div>
      </CardContent>
    </div>
  );
};
