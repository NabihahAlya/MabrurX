import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Cta() {
  return (
    <section className="py-20 bg-mabrurx-cream">
      <div className="container">
        <div className="bg-mabrurx-gold rounded-2xl overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left space-y-4 md:max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Ready to Transform Your Pilgrimage Experience?
                </h2>
                <p className="text-white/90">
                  Join thousands of pilgrims who have enhanced their spiritual journey with MabrurX's innovative platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-mabrurx-navy hover:bg-white/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}