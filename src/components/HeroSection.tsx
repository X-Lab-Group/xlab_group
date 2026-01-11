import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParallaxBackground, { ParallaxElement } from "@/components/ParallaxBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements with Parallax */}
      <ParallaxBackground variant="hero" />

      {/* Glass Floating Elements with Parallax */}
      <ParallaxElement speed={0.35} className="absolute top-32 left-10 md:left-20 glass w-16 h-16 md:w-24 md:h-24 rounded-2xl rotate-12 animate-float opacity-60" />
      <ParallaxElement speed={0.2} className="absolute bottom-32 right-10 md:right-32 glass w-20 h-20 md:w-32 md:h-32 rounded-3xl -rotate-12 animate-float-delayed opacity-60" />
      <ParallaxElement speed={0.4} className="absolute top-1/2 right-10 md:right-20 glass w-12 h-12 md:w-16 md:h-16 rounded-xl rotate-45 animate-float opacity-40" />
      <ParallaxElement speed={0.25} className="absolute top-40 right-1/4 glass w-8 h-8 md:w-12 md:h-12 rounded-lg rotate-6 animate-float-delayed opacity-30" />
      <ParallaxElement speed={0.3} className="absolute bottom-40 left-1/4 glass w-14 h-14 md:w-20 md:h-20 rounded-2xl -rotate-6 animate-float opacity-40" />

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-40 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
      <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-border to-transparent opacity-60" />

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Tech Consulting Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Xtraordinary
            <br />
            <span className="text-gradient">Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We transform complex challenges into elegant solutions. From data engineering to brand design, we deliver innovation that drives growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 md:mt-24 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "4", label: "Core Services" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
