import { Mail, Calendar, Linkedin, Github } from 'lucide-react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { SafeExternalLink } from '../SafeExternalLink';
import { contactConfig } from '../../config/contact';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Get in touch to discuss how we can collaborate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${contactConfig.email}`}
              className="group bg-card border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Email Me
              </h3>
              <p className="text-muted-foreground mb-4">
                Send me a message and I'll respond within 24 hours
              </p>
              <p className="text-primary font-medium">{contactConfig.email}</p>
            </a>

            {contactConfig.calendlyUrl && (
              <SafeExternalLink
                href={contactConfig.calendlyUrl}
                className="group bg-card border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-1 block"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Schedule a Call
                </h3>
                <p className="text-muted-foreground mb-4">
                  Book a free 30-minute consultation to discuss your needs
                </p>
                <p className="text-primary font-medium">View availability →</p>
              </SafeExternalLink>
            )}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Connect on Social
            </h3>
            <div className="flex justify-center gap-6">
              {contactConfig.social.linkedin && (
                <SafeExternalLink
                  href={contactConfig.social.linkedin}
                  className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                  aria-label="LinkedIn profile"
                >
                  <SiLinkedin className="w-6 h-6 text-foreground" />
                </SafeExternalLink>
              )}
              
              {contactConfig.social.github && (
                <SafeExternalLink
                  href={contactConfig.social.github}
                  className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                  aria-label="GitHub profile"
                >
                  <SiGithub className="w-6 h-6 text-foreground" />
                </SafeExternalLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
