import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The structural analysis provided was exceptional. The detailed FEA results and optimization recommendations helped us reduce component weight by 30% while maintaining safety margins. Truly outstanding engineering work.",
    author: "Engineering Manager",
    role: "Senior Technical Lead",
    company: "Aerospace Manufacturer",
  },
  {
    quote: "Their expertise in thermal management simulations was crucial for our electric vehicle project. The AI-driven optimization approach identified design improvements we hadn't considered, saving months of development time.",
    author: "Project Director",
    role: "Chief Engineer",
    company: "Automotive OEM",
  },
  {
    quote: "Impressive depth of knowledge in nonlinear FEA and composite materials. The fatigue analysis conducted was thorough and well-documented, giving us confidence in our product's durability and reliability.",
    author: "Technical Specialist",
    role: "R&D Manager",
    company: "Industrial Equipment Manufacturer",
  },
  {
    quote: "The multi-physics simulations delivered exceeded expectations. Their ability to couple structural, thermal, and fluid dynamics analyses provided insights that were critical for our product certification process.",
    author: "Lead Engineer",
    role: "Simulation Team Lead",
    company: "Defense Contractor",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Feedback
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What engineering teams say about our work
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
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
