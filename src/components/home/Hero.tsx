import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mabrurx-navy to-mabrurx-navy/90 py-20 md:py-32 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-grid"></div>
      <div 
        className="absolute inset-0 bg-geometric-pattern bg-repeat opacity-5"
        style={{ backgroundSize: "200px" }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block mb-4">
              <span className="bg-mabrurx-gold/20 text-mabrurx-gold px-4 py-1.5 rounded-full text-sm font-medium">
                AI-Powered Hajj Ecosystem
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Complete Digital Platform for <span className="text-mabrurx-gold">Hajj & Umrah</span>
            </h1>
            
            <p className="text-lg md:text-xl text-mabrurx-cream/80 max-w-2xl mx-auto lg:mx-0">
              Experience a seamless pilgrimage journey powered by AI, blockchain, and augmented reality technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link to="/register">
                <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-black font-medium w-full sm:w-auto">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-mabrurx-cream/30 text-mabrurx-cream hover:bg-mabrurx-cream/10 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-mabrurx-cream/70">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>AI Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Blockchain Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>AR Navigation</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              {/* Main image placeholder - would be replaced with actual images */}
              <div className="bg-mabrurx-gold/20 rounded-lg overflow-hidden aspect-[4/3] animate-float shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-mabrurx-gold/20 to-transparent"></div>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 rounded-full bg-mabrurx-gold/30 mx-auto mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Kaaba AR Experience</h3>
                    <p className="text-mabrurx-cream/70 mt-2">
                      Interactive visualization with augmented reality guidance
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-mabrurx-gold/20 rounded-lg"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-mabrurx-emerald/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}