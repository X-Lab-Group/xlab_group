import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { ParallaxElement } from "@/components/ParallaxBackground";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

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
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four powerful products built to solve real-world problems for developers, businesses, students, and educators
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 150}>
              <GlassCard className="group h-full hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-5 group-hover:scale-110 transition-transform duration-300">
                    <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <span className="text-sm text-muted-foreground font-medium">{product.tagline}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {product.features.map((feature) => (
                      <span
                        key={feature.title}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>
                  <Button variant="hero-outline" size="sm" className="w-fit group/btn" asChild>
                    <Link to={`/products/${product.slug}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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
