import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this consultant transformed our approach to digital transformation. The strategic roadmap delivered was both visionary and practical, leading to a 40% increase in operational efficiency.",
    author: "Sarah Chen",
    role: "CEO, TechVentures Inc.",
    company: "Fortune 500 Technology Company",
  },
  {
    quote: "The depth of analysis and clarity of recommendations exceeded our expectations. We successfully entered three new markets within 18 months, directly attributable to the go-to-market strategy developed.",
    author: "Michael Rodriguez",
    role: "VP of Strategy",
    company: "Global Retail Corporation",
  },
  {
    quote: "Exceptional ability to navigate complex organizational dynamics while driving results. The interim leadership provided during our restructuring was invaluable and set us up for long-term success.",
    author: "Jennifer Park",
    role: "Board Member",
    company: "Healthcare Innovation Startup",
  },
  {
    quote: "Data-driven insights combined with practical implementation support. The analytics framework established has become the foundation for all our strategic decisions, delivering measurable ROI.",
    author: "David Thompson",
    role: "Chief Operating Officer",
    company: "Financial Services Firm",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What clients say about working together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
