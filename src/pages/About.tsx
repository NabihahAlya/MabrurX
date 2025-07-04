import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      title: "Excellence in Service",
      description: "We strive to provide the highest quality service to all pilgrims, ensuring a seamless and spiritually fulfilling journey.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Technological Innovation",
      description: "We leverage cutting-edge technology to enhance the Hajj and Umrah experience, making it more accessible and enriching.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Cultural Respect",
      description: "We honor and respect the cultural and religious significance of the pilgrimage, ensuring all our services are conducted with utmost reverence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Inclusivity",
      description: "We are committed to making the pilgrimage accessible to all Muslims, regardless of background, language, or physical ability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Ahmed Rahman",
      role: "Founder & CEO",
      bio: "Dr. Rahman holds a PhD in Computer Science and has 15+ years of experience in tech innovation. His vision for technology-enhanced pilgrimage drives MabrurX's mission.",
      image: ""
    },
    {
      name: "Sarah Al-Faisal",
      role: "Chief Technology Officer",
      bio: "Sarah leads our tech development with expertise in AI and blockchain. She previously led technology initiatives at major tech firms and has a passion for spiritual tech.",
      image: ""
    },
    {
      name: "Omar Hassan",
      role: "Hajj & Umrah Services Director",
      bio: "With over 20 years of experience organizing pilgrimages, Omar ensures that all our services meet the highest standards of religious authenticity and practical convenience.",
      image: ""
    },
    {
      name: "Fatima Zahir",
      role: "Customer Experience Manager",
      bio: "Fatima's background in hospitality and religious tourism helps her design exceptional pilgrim experiences that balance spiritual fulfillment with comfort and convenience.",
      image: ""
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-mabrurx-gold">MabrurX</span>
          </h1>
          <p className="text-lg md:text-xl text-mabrurx-cream/80 max-w-3xl mx-auto">
            Transforming the pilgrimage experience through technology, compassion, and deep spiritual understanding.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-mabrurx-cream">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-mabrurx-gold text-mabrurx-gold mb-4">Our Journey</Badge>
              <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
                Our <span className="text-mabrurx-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MabrurX was born from a simple yet profound vision: to make the sacred pilgrimages of Hajj and Umrah more accessible, meaningful, and spiritually enriching through the thoughtful application of technology.
                </p>
                <p>
                  Founded in 2022 by a team of tech innovators with deep roots in Islamic scholarship, we recognized the challenges faced by pilgrims in an increasingly complex world. From navigating crowded spaces to understanding the proper performance of rituals, many pilgrims were seeking additional guidance and support.
                </p>
                <p>
                  We saw an opportunity to harness cutting-edge technologies like artificial intelligence, augmented reality, and blockchain to create a comprehensive ecosystem that would support pilgrims through every step of their journey.
                </p>
                <p>
                  Today, MabrurX stands as a pioneer in Hajj and Umrah services, blending technological innovation with deep respect for tradition and spirituality.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-black">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-mabrurx-gold/20">
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-mabrurx-gold/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-mabrurx-navy text-lg">Our Mission</h3>
                    <p className="text-muted-foreground">To facilitate a deeply spiritual and seamless pilgrimage experience through innovative technology and compassionate service.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="bg-mabrurx-gold/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-mabrurx-navy text-lg">Our Vision</h3>
                    <p className="text-muted-foreground">To be the global leader in pilgrimage services, making sacred journeys accessible to Muslims worldwide through technological innovation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="bg-mabrurx-gold/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-mabrurx-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-mabrurx-navy text-lg">Our Approach</h3>
                    <p className="text-muted-foreground">We combine technological expertise with deep religious understanding to create solutions that enhance rather than detract from the spiritual experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-mabrurx-gold text-mabrurx-gold mb-4">Our Principles</Badge>
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Our Core <span className="text-mabrurx-gold">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at MabrurX, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-mabrurx-gold/20">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="bg-mabrurx-gold/10 p-4 rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-mabrurx-navy mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-mabrurx-cream/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-mabrurx-gold text-mabrurx-gold mb-4">Our Leadership</Badge>
            <h2 className="text-3xl font-bold mb-6 text-mabrurx-navy">
              Meet Our <span className="text-mabrurx-gold">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind MabrurX's mission to transform the pilgrimage experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-mabrurx-gold/20">
                <CardContent className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : (
                      <AvatarFallback className="bg-mabrurx-gold/20 text-mabrurx-navy text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="mt-4 text-xl font-bold text-mabrurx-navy">{member.name}</h3>
                  <p className="text-mabrurx-gold font-medium">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mabrurx-navy text-white">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your <span className="text-mabrurx-gold">Pilgrimage Experience?</span>
          </h2>
          <p className="text-lg text-mabrurx-cream/80 max-w-3xl mx-auto mb-8">
            Join thousands of pilgrims who have enhanced their spiritual journey with MabrurX's innovative technology and compassionate service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hajj">
              <Button size="lg" className="bg-mabrurx-gold hover:bg-mabrurx-gold/90 text-black font-medium">
                Explore Hajj Packages
              </Button>
            </Link>
            <Link to="/umrah">
              <Button size="lg" variant="outline" className="border-mabrurx-cream/30 text-mabrurx-cream hover:bg-mabrurx-cream/10">
                View Umrah Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}