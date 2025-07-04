import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Umrah() {
  const packages = [
    {
      title: "Basic Umrah",
      description: "Essential Umrah package for a meaningful spiritual journey",
      price: "1,499",
      duration: "7 days",
      features: [
        "Standard accommodations in Makkah & Madinah",
        "Transportation between cities",
        "Basic meal plan (breakfast only)",
        "Guide services",
        "Visa processing assistance",
        "MabrurX mobile app access"
      ]
    },
    {
      title: "Premium Umrah",
      description: "Enhanced comfort and services for your blessed journey",
      price: "2,799",
      duration: "10 days",
      popular: true,
      features: [
        "4-star accommodations in Makkah & Madinah",
        "Private transportation",
        "Full meal plan (3 meals daily)",
        "Dedicated guide services",
        "Expedited visa processing",
        "MabrurX premium app features",
        "Ziyarat (historical sites) tours"
      ]
    },
    {
      title: "Family Umrah",
      description: "Designed for families seeking a spiritual journey together",
      price: "1,999",
      duration: "10 days",
      perPerson: true,
      features: [
        "Family-friendly accommodations",
        "Spacious transportation options",
        "Full meal plan with kids options",
        "Family-oriented guides",
        "Child-friendly programs",
        "Family visa processing assistance",
        "Special family ziyarat tours"
      ]
    }
  ];

  const seasons = [
    {
      name: "Ramadan Umrah",
      description: "Experience the blessed month in the holy cities",
      highlight: "Perform Umrah during the most spiritually rewarding time"
    },
    {
      name: "Winter Umrah",
      description: "Pleasant weather for a comfortable pilgrimage experience",
      highlight: "Ideal conditions for elderly pilgrims and families with children"
    },
    {
      name: "Summer Umrah",
      description: "Less crowded with special accommodations for the heat",
      highlight: "Daytime air-conditioned rest areas and night rituals"
    },
    {
      name: "Spring/Fall Umrah",
      description: "Balanced weather and moderate crowds",
      highlight: "The perfect middle ground for a comfortable journey"
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
            Year-Round Availability
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Embark on Your Sacred <span className="text-mabrurx-gold">Umrah Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-mabrurx-cream/80 max-w-3xl mx-auto">
            Experience a spiritually fulfilling Umrah with comprehensive guidance, seamless logistics, and technology-enhanced worship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-black font-medium">
              View Packages
            </Button>
            <Button size="lg" variant="outline" className="border-mabrurx-cream/30 text-mabrurx-cream hover:bg-mabrurx-cream/10">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Umrah Packages */}
      <section className="py-16 bg-mabrurx-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Choose Your <span className="text-mabrurx-gold">Umrah Package</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Select from our thoughtfully designed packages to make your spiritual journey meaningful and comfortable.
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
                    <span className="text-sm text-muted-foreground ml-1">
                      {pkg.perPerson ? "per person" : ""}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {pkg.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* Umrah Seasons */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Umrah <span className="text-mabrurx-gold">Seasons</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Each season offers a unique Umrah experience with its own spiritual benefits and practical considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasons.map((season, index) => (
              <Card key={index} className="border border-mabrurx-gold/20 hover:border-mabrurx-gold/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-mabrurx-navy">{season.name}</CardTitle>
                  <CardDescription>{season.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm">{season.highlight}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-mabrurx-gold/40 text-mabrurx-navy hover:bg-mabrurx-gold/10">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah Guide */}
      <section className="py-16 bg-mabrurx-cream/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Your <span className="text-mabrurx-gold">Umrah Guide</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding each step of the sacred journey helps prepare you spiritually and practically.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="preparation" className="w-full">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="preparation">Preparation</TabsTrigger>
                <TabsTrigger value="rituals">Rituals</TabsTrigger>
                <TabsTrigger value="dua">Du'as & Prayers</TabsTrigger>
                <TabsTrigger value="etiquette">Etiquette</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preparation" className="p-6 bg-white rounded-lg mt-6 border border-mabrurx-gold/20">
                <h3 className="text-xl font-bold text-mabrurx-navy mb-4">Preparing for Umrah</h3>
                <div className="space-y-4">
                  <p>Before embarking on your sacred journey, proper preparation is essential for a fulfilling experience.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-mabrurx-navy mb-2">Spiritual Preparation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Learn the rituals and their significance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Memorize essential duas and prayers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Seek forgiveness and settle pending matters</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-mabrurx-navy mb-2">Practical Preparation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Ensure valid passport and visa requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Pack appropriate clothing and essentials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Prepare physically for the journey</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white">Download Preparation Checklist</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rituals" className="p-6 bg-white rounded-lg mt-6 border border-mabrurx-gold/20">
                <h3 className="text-xl font-bold text-mabrurx-navy mb-4">Umrah Rituals</h3>
                <div className="space-y-6">
                  <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-mabrurx-navy">Step 1: Ihram</h4>
                    <p className="text-sm mt-1">Enter the state of Ihram by wearing the prescribed garments and making the intention (niyyah) for Umrah.</p>
                  </div>
                  
                  <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-mabrurx-navy">Step 2: Tawaf</h4>
                    <p className="text-sm mt-1">Circumambulate the Kaaba seven times in a counterclockwise direction, beginning and ending at the Black Stone.</p>
                  </div>
                  
                  <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-mabrurx-navy">Step 3: Sa'i</h4>
                    <p className="text-sm mt-1">Walk seven times between the hills of Safa and Marwah, commemorating Hajar's search for water.</p>
                  </div>
                  
                  <div className="bg-mabrurx-cream/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-mabrurx-navy">Step 4: Taqsir/Halq</h4>
                    <p className="text-sm mt-1">Cut or shave the hair to mark the completion of Umrah and exit the state of Ihram.</p>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white">View Detailed Guide</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dua" className="p-6 bg-white rounded-lg mt-6 border border-mabrurx-gold/20">
                <h3 className="text-xl font-bold text-mabrurx-navy mb-4">Essential Du'as & Prayers</h3>
                <p className="mb-6">Learn the recommended supplications for each step of your Umrah journey.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border border-mabrurx-gold/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-mabrurx-navy">Talbiyah</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">The prayer recited upon entering Ihram and throughout the Umrah journey.</p>
                      <div className="mt-2 p-2 bg-mabrurx-cream/30 rounded text-sm font-medium text-mabrurx-navy text-right">
                        لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-mabrurx-gold/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-mabrurx-navy">Entering Masjid al-Haram</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">The supplication when entering the Sacred Mosque.</p>
                      <div className="mt-2 p-2 bg-mabrurx-cream/30 rounded text-sm font-medium text-mabrurx-navy text-right">
                        اللهم افتح لي أبواب رحمتك
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Button className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-white">Download Complete Du'a Guide</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="etiquette" className="p-6 bg-white rounded-lg mt-6 border border-mabrurx-gold/20">
                <h3 className="text-xl font-bold text-mabrurx-navy mb-4">Etiquette & Adab</h3>
                <p className="mb-4">Observe proper manners and conduct to enhance your spiritual experience.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-mabrurx-navy mb-2">At the Holy Sites</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Maintain reverence and focus on worship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Avoid raising your voice unnecessarily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Be mindful of others, especially during crowded times</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-mabrurx-navy mb-2">General Conduct</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Demonstrate patience and kindness to fellow pilgrims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Observe modesty in dress and behavior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mabrurx-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Respect local customs and regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
}