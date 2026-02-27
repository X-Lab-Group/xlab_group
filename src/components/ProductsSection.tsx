import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { ParallaxElement } from "@/components/ParallaxBackground";
import { Bot, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Bot,
    name: "Jato AI",
    tagline: "AI Coding Assistant",
    description:
      "An intelligent coding companion that accelerates development workflows. Jato AI understands your codebase, suggests improvements, generates boilerplate, and helps you write better code faster.",
    features: ["Code Generation", "Smart Autocomplete", "Bug Detection", "Code Reviews"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: FileText,
    name: "Zuribills",
    tagline: "Invoicing App",
    description:
      "A modern invoicing platform designed for freelancers and small businesses. Create professional invoices, track payments, manage clients, and stay on top of your finances effortlessly.",
    features: ["Invoice Creation", "Payment Tracking", "Client Management", "Financial Reports"],
    gradient: "from-secondary/40 to-secondary/10",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ParallaxElement speed={0.1} className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <ParallaxElement speed={0.15} className="absolute bottom-20 right-20 w-56 h-56 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two powerful products built to solve real-world problems for developers and businesses
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 150}>
              <GlassCard className="group h-full hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Icon & Name */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <span className="text-sm text-muted-foreground font-medium">{product.tagline}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="hero-outline" size="sm" className="w-fit group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
