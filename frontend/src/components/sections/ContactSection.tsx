import { Mail, Phone } from 'lucide-react';
import { contactConfig } from '../../config/contact';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Reach Out</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Begin a Conversation
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mb-6">
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let us collaborate on your next aerospace challenge. Reach out to explore how precision structural engineering can elevate your project — we respond with care and without delay.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <a
                href={`mailto:${contactConfig.email}`}
                className="flex flex-col items-center gap-4 p-8 bg-primary/5 border border-primary/15 rounded-lg hover:bg-primary/10 hover:border-primary/30 transition-all hover:scale-105 group"
                aria-label="Send email to Vayutaksha Consultancy"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="font-body text-muted-foreground text-sm">{contactConfig.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactConfig.phoneTel}`}
                className="flex flex-col items-center gap-4 p-8 bg-secondary/40 border border-border rounded-lg hover:bg-secondary/60 hover:border-primary/20 transition-all hover:scale-105 group"
                aria-label="Call Vayutaksha Consultancy"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="font-body text-muted-foreground text-sm">+91 {contactConfig.phone}</p>
                </div>
              </a>
            </div>

            {/* Closing note */}
            <div className="mt-10 text-center">
              <p className="font-display text-base italic text-muted-foreground">
                "Every great structure begins with a single, honest conversation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
