
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CTASection = () => {
  const handleContactClick = () => {
    window.open('https://neoversine.com/contact', '_blank');
  };

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-300">Want Your Own AI Tool?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                This Is Just the Beginning
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                <span className="text-blue-400 font-semibold">Neoversine</span> built barGo.ai to showcase what's possible. 
                Imagine having custom AI automations for YOUR business that:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Save 10+ Hours/Week</h4>
                    <p className="text-sm text-gray-400">Automate repetitive research, data entry, and analysis tasks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">10x Your Output</h4>
                    <p className="text-sm text-gray-400">Process leads, generate content, and handle queries instantly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Scale Without Limits</h4>
                    <p className="text-sm text-gray-400">Custom AI tools that grow with your business needs</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg cyber-glow"
                >
                  Get Your AI Tool Built
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg"
                  onClick={() => window.open('https://calendly.com/neoversine', '_blank')}
                >
                  Book Free Strategy Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary CTA */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800/30 border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">For Agencies & Consultants</h3>
              <p className="text-gray-400 mb-6">
                White-label AI tools for your clients. Increase retainers by $2-5K/month.
              </p>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white w-full"
                onClick={handleContactClick}
              >
                Partner With Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/30 border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">For Businesses</h3>
              <p className="text-gray-400 mb-6">
                Custom AI solutions that automate your unique workflows and processes.
              </p>
              <Button 
                variant="outline" 
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white w-full"
                onClick={handleContactClick}
              >
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
