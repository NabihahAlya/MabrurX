import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      text: "MabrurX transformed my Hajj experience completely. The AR navigation helped me find my way even in the most crowded situations, and the AI assistant answered all my questions about rituals in real-time.",
      name: "Ahmed Hassan",
      role: "Hajj Pilgrim, 2024",
      avatar: "AH"
    },
    {
      text: "As a travel agency, integrating with MabrurX has revolutionized how we serve our clients. The blockchain verification system has made document processing seamless, and our pilgrims love the mobile app features.",
      name: "Sarah Johnson",
      role: "Al-Safar Travel Agency",
      avatar: "SJ"
    },
    {
      text: "The group management feature was a lifesaver for our family of 12. We could easily locate each other and coordinate meeting points. The personalized prayer schedules and ritual guides were incredibly helpful.",
      name: "Mahmoud Ali",
      role: "Umrah Pilgrim, 2024",
      avatar: "MA"
    }
  ];

  return (
    <section className="py-20 bg-mabrurx-navy text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pattern-grid"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pilgrims' <span className="text-mabrurx-gold">Experiences</span>
          </h2>
          <p className="text-lg text-mabrurx-cream/80">
            Hear from pilgrims and travel agencies who have experienced the MabrurX difference on their sacred journeys.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-mabrurx-gold/20">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="inline-block h-5 w-5 text-mabrurx-gold" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-mabrurx-cream mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-mabrurx-gold/20">
                    <AvatarFallback className="text-mabrurx-gold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-mabrurx-cream/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}