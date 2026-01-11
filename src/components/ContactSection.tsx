import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-muted/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-foreground" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how X-Labs can help you achieve your technology goals. Get in touch for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg">
                  Schedule a Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="lg">
                  hello@xlabs.io
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
