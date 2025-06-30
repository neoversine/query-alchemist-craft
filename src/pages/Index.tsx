
import { useState } from "react";
import { Search, Copy, Zap, ArrowRight, Sparkles, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { SearchResult } from "@/components/SearchResult";
import { FeatureCard } from "@/components/FeatureCard";
import { CTASection } from "@/components/CTASection";
import { Particles } from "@/components/Particles";

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
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Particles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>

      {/* Main Content - Centered Card */}
      <div className="center-card">
        <div className="gradient-gold-border">
          <div className="gradient-gold-content glass-card p-8 md:p-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center gold-glow">
                  <Zap className="w-7 h-7 text-black" />
                </div>
                <span className="text-3xl font-bold font-space text-gold-400 neon-text-gold">barGo.ai</span>
              </div>
              
              <Button 
                variant="outline" 
                className="glass-button border-red-orange-500 text-gold-400 hover:bg-gold-500/20 transition-all duration-300"
                onClick={() => window.open('https://neoversine.com', '_blank')}
              >
                by Neoversine
              </Button>
            </div>

            {/* Main Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 glass-card rounded-full border border-red-orange-500/30 mb-8">
                <Sparkles className="w-5 h-5 text-gold-400 mr-3" />
                <span className="text-gold-300">Transform Lazy Searches → Expert Queries</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent animate-fade-in neon-text-gold">
                Stop Googling Like
                <br />
                <span className="text-red-orange-400">an Amateur</span>
              </h1>
              
              <p className="text-xl text-gold-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Enter your lazy search. Get 3 expert-level Google queries with advanced operators. 
                <span className="text-gold-400 font-semibold"> Copy, paste, dominate.</span>
              </p>

              {/* Search Interface */}
              <div className="glass-card p-6 mb-6 border border-red-orange-500/30">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-400 w-6 h-6" />
                    <Input
                      placeholder="e.g., how to hack netflix, best ai resume tools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="glass-input pl-12 h-16 text-lg text-gold-100 placeholder:text-gold-400/60 focus:border-gold-400 transition-all duration-300"
                      onKeyPress={(e) => e.key === 'Enter' && generateQueries()}
                    />
                  </div>
                  <Button
                    onClick={generateQueries}
                    disabled={isLoading}
                    className="glass-button h-16 px-8 bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-500 hover:to-red-orange-500 text-black font-bold transition-all duration-300 gold-glow"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                        Optimizing...
                      </div>
                    ) : (
                      <>
                        <Zap className="w-6 h-6 mr-3" />
                        Optimize Search
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gold-400/80">
                ⚡ Powered by advanced AI • Used by 10,000+ smart searchers
              </p>
            </div>

            {/* Results Section */}
            {results.length > 0 && (
              <div className="animate-slide-up">
                <h2 className="text-2xl font-bold text-center mb-6 text-gold-300">
                  🔥 Your Optimized Search Queries
                </h2>
                <div className="grid gap-4 max-h-96 overflow-y-auto">
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

            {/* Mini Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-card p-6 text-center border border-red-orange-500/20">
                <Target className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gold-300 mb-2">Laser-Focused</h4>
                <p className="text-sm text-gold-400/80">Advanced operators cut through noise</p>
              </div>
              <div className="glass-card p-6 text-center border border-red-orange-500/20">
                <Zap className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gold-300 mb-2">Instant AI</h4>
                <p className="text-sm text-gold-400/80">Transform queries in seconds</p>
              </div>
              <div className="glass-card p-6 text-center border border-red-orange-500/20">
                <Rocket className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gold-300 mb-2">10x Research</h4>
                <p className="text-sm text-gold-400/80">Find hidden gems others miss</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="glass-card p-8 border border-gold-500/30">
                <h3 className="text-2xl font-bold text-gold-300 mb-4">Want Your Own AI Tool?</h3>
                <p className="text-gold-400/90 mb-6">
                  <span className="text-gold-400 font-semibold">Neoversine</span> builds custom AI automations that save 10+ hours/week
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open('https://neoversine.com/contact', '_blank')}
                    className="glass-button bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-500 hover:to-red-orange-500 text-black font-bold px-8 py-3 gold-glow"
                  >
                    Get Your AI Tool Built
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-button border-gold-500 text-gold-400 hover:bg-gold-500/20 px-8 py-3"
                    onClick={() => window.open('https://calendly.com/neoversine', '_blank')}
                  >
                    Book Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-gold-400/60 text-sm">
          Built by <span className="text-gold-400 font-semibold">Neoversine</span> - AI Automation Agency
        </p>
      </div>
    </div>
  );
};

export default Index;
