import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up and create your pilgrim profile with your personal details, preferences, and travel requirements."
    },
    {
      number: "02",
      title: "Choose Your Package",
      description: "Browse and select from our curated Hajj or Umrah packages, or customize your own journey with our AI recommendation engine."
    },
    {
      number: "03", 
      title: "Digital Documentation",
      description: "Upload and manage your documents securely using our blockchain verification system for visa processing and travel authorization."
    },
    {
      number: "04",
      title: "Prepare & Learn",
      description: "Access interactive learning materials, ritual guides, and language training to prepare for your spiritual journey."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mabrurx-navy">
            How <span className="text-mabrurx-gold">MabrurX</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process makes planning and performing Hajj and Umrah simple, secure, and spiritually fulfilling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-lg border border-mabrurx-gold/20 bg-white transition-all duration-300 hover:shadow-lg hover:border-mabrurx-gold/50"
            >
              <span className="absolute -top-4 left-6 bg-mabrurx-gold text-white text-lg font-bold py-1 px-3 rounded">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-mabrurx-navy mt-6 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mabrurx-gold">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/register">
            <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white">
              Start Your Journey Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}