import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Hajj() {
  const packages = [
    {
      title: "Essential Hajj",
      description: "Basic Hajj package with standard accommodations and essential services",
      price: "4,999",
      features: [
        "Standard accommodations in Makkah & Madinah",
        "Transportation between sites",
        "Basic meal plan (breakfast only)",
        "Guide services",
        "Visa processing assistance",
        "MabrurX mobile app access"
      ],
      popular: false,
      days: "14",
      accommodationRating: 3
    },
    {
      title: "Premium Hajj",
      description: "Enhanced Hajj experience with premium services and accommodations",
      price: "7,999",
      features: [
        "4-star accommodations in Makkah & Madinah",
        "Private transportation between sites",
        "Full meal plan (3 meals daily)",
        "Dedicated guide services",
        "Visa processing & documentation",
        "MabrurX mobile app with premium features",
        "Group leader coordination services"
      ],
      popular: true,
      days: "18",
      accommodationRating: 4
    },
    {
      title: "VIP Hajj",
      description: "Luxury Hajj experience with 5-star accommodations and personalized services",
      price: "12,999",
      features: [
        "5-star accommodations in Makkah & Madinah",
        "Private luxury transportation",
        "Gourmet meal plan with dietary options",
        "Personal guide and translator",
        "Premium visa fast-track processing",
        "MabrurX mobile app with VIP features",
        "Dedicated concierge service",
        "Priority access where available",
        "Extended stay options"
      ],
      popular: false,
      days: "21",
      accommodationRating: 5
    }
  ];
  
  const faqs = [
    {
      question: "When should I register for Hajj 2025?",
      answer: "We recommend registering at least 10-12 months in advance to secure your spot and ensure smooth visa processing. Early registration also allows for better preparation and flexible payment plans."
    },
    {
      question: "What documents are required for Hajj visa?",
      answer: "Required documents include a valid passport with at least 6 months validity beyond your return date, completed visa application form, passport-sized photographs with white background, proof of vaccination including meningitis and seasonal vaccines, and proof of relationship with your mahram (for women under 45)."
    },
    {
      question: "How physically demanding is the Hajj journey?",
      answer: "Hajj requires moderate physical ability as it involves walking significant distances, standing for long periods, and navigating crowds in potentially hot weather. Our packages include preparation guidance and options for those with limited mobility."
    },
    {
      question: "How does the MabrurX app enhance the Hajj experience?",
      answer: "Our app provides real-time ritual guidance with AR navigation, translation services, group tracking features, offline maps, spiritual content, emergency assistance, and personalized notifications to optimize your journey."
    },
    {
      question: "What payment options and plans are available?",
      answer: "We offer flexible payment plans including installment options spread over 3-9 months. Payment methods include credit/debit cards, bank transfers, and secure online payments through our blockchain-secured payment portal."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-mabrurx-navy to-mabrurx-navy/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid"></div>
        <div 
          className="absolute inset-0 bg-geometric-pattern bg-repeat opacity-5"
          style={{ backgroundSize: "200px" }}
        ></div>
        
        <div className="container relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="border-mabrurx-gold text-mabrurx-gold px-4 py-1">
            Hajj 2025 - Registration Open
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Embark on Your Sacred <span className="text-mabrurx-gold">Hajj Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-mabrurx-cream/80 max-w-3xl mx-auto">
            Experience the pilgrimage of a lifetime with our AI-powered guidance, immersive preparation, and seamless logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-black font-medium">
              Explore Packages
            </Button>
            <Button size="lg" variant="outline" className="border-mabrurx-cream/30 text-mabrurx-cream hover:bg-mabrurx-cream/10">
              Request Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Hajj Packages */}
      <section className="py-16 bg-mabrurx-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Hajj Packages for <span className="text-mabrurx-gold">2025</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Select from our carefully designed packages that cater to different needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`border ${pkg.popular ? 'border-mabrurx-gold shadow-lg' : 'border-mabrurx-gold/20'} transition-all hover:shadow-md relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <Badge className="bg-mabrurx-gold text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-mabrurx-navy">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-mabrurx-gold">${pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">per person</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{pkg.days} Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-sm text-muted-foreground">
                        {Array(pkg.accommodationRating).fill(0).map((_, i) => (
                          <span key={i} className="text-mabrurx-gold">★</span>
                        ))}
                        {Array(5 - pkg.accommodationRating).fill(0).map((_, i) => (
                          <span key={i} className="text-mabrurx-gold/30">★</span>
                        ))}
                        {' Accommodation'}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 pt-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full ${pkg.popular ? 'bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white' : 'bg-mabrurx-navy hover:bg-mabrurx-navy/90 text-white'}`}>
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-mabrurx-cream/50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Frequently Asked <span className="text-mabrurx-gold">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our Hajj services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border border-mabrurx-gold/20 rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="text-left py-4 text-mabrurx-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Didn't find what you're looking for?
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-mabrurx-gold text-mabrurx-gold hover:bg-mabrurx-gold/10">
                Contact Our Support Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}