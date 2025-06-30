
import { useState } from "react";
import { Search, Copy, Zap, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SearchResult } from "@/components/SearchResult";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Array<{
    query: string;
    explanation: string;
    category: string;
  }>>([]);
  const { toast } = useToast();

  const generateQueries = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Enter a search query",
        description: "Type something you want to search for!",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate AI processing with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults = [
      {
        query: `site:reddit.com "${searchQuery}" OR "${searchQuery} tips"`,
        explanation: "Search Reddit discussions for real user experiences and tips",
        category: "Community Insights"
      },
      {
        query: `"${searchQuery}" filetype:pdf OR "${searchQuery}" tutorial`,
        explanation: "Find comprehensive guides, tutorials, and PDF resources",
        category: "Educational Content"
      },
      {
        query: `intitle:"${searchQuery}" OR "${searchQuery} guide" -ads`,
        explanation: "Locate authoritative guides while excluding promotional content",
        category: "Expert Resources"
      }
    ];
    
    setResults(mockResults);
    setIsLoading(false);
    
    toast({
      title: "🔥 Queries Generated!",
      description: "Your optimized search queries are ready to use",
    });
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Query copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 py-16 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-space">barGo.ai</span>
            </div>
            
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://neoversine.com', '_blank')}
            >
              by Neoversine
            </Button>
          </div>

          {/* Main Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Transform Lazy Searches → Expert Queries</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
              Stop Googling Like
              <br />
              <span className="neon-text text-blue-400">an Amateur</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Enter your lazy search. Get 3 expert-level Google queries with advanced operators. 
              <span className="text-blue-400 font-semibold"> Copy, paste, dominate.</span>
            </p>

            {/* Search Interface */}
            <div className="gradient-border max-w-2xl mx-auto mb-8">
              <div className="gradient-border-content p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="e.g., how to hack netflix, best ai resume tools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-14 text-lg bg-slate-800/50 border-slate-700 focus:border-blue-500 transition-all duration-300"
                      onKeyPress={(e) => e.key === 'Enter' && generateQueries()}
                    />
                  </div>
                  <Button
                    onClick={generateQueries}
                    disabled={isLoading}
                    className="h-14 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 cyber-glow"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Optimizing...
                      </div>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Optimize Search
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              ⚡ Powered by advanced AI • Used by 10,000+ smart searchers
            </p>
          </div>

          {/* Results Section */}
          {results.length > 0 && (
            <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
              <h2 className="text-2xl font-bold text-center mb-8 text-blue-300">
                🔥 Your Optimized Search Queries
              </h2>
              <div className="grid gap-6">
                {results.map((result, index) => (
                  <SearchResult
                    key={index}
                    result={result}
                    onCopy={copyToClipboard}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Search Like Everyone Else?</h2>
            <p className="text-xl text-gray-400">Join the smart searchers who get better results in less time</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={Target}
              title="Laser-Focused Results"
              description="Advanced operators like site:, filetype:, and intitle: cut through the noise"
            />
            <FeatureCard
              icon={Zap}
              title="Instant Optimization"
              description="AI transforms your lazy queries into expert searches in seconds"
            />
            <FeatureCard
              icon={Rocket}
              title="10x Your Research"
              description="Find hidden gems, PDFs, and expert discussions others miss"
            />
          </div>
        </div>
      </div>

      {/* CTA Sections */}
      <CTASection />

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold font-space">barGo.ai</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                Built by <span className="text-blue-400 font-semibold">Neoversine</span> - AI Automation Agency
              </p>
              <Button 
                variant="link" 
                className="text-blue-400 hover:text-blue-300 p-0"
                onClick={() => window.open('https://neoversine.com', '_blank')}
              >
                Get Your Own AI Tool Built <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
