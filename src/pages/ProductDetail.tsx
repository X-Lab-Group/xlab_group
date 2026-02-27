import { useParams, Link } from "react-router-dom";
import { getProductBySlug } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { ParallaxElement } from "@/components/ParallaxBackground";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
            <ParallaxElement speed={0.1} className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <ParallaxElement speed={0.15} className="absolute bottom-10 left-20 w-56 h-56 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6">
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0">
                <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <AnimatedSection>
                  <span className="text-sm text-muted-foreground font-medium">{product.tagline}</span>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-1 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    {product.longDescription}
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={100}>
                  <div className="flex gap-4 mt-8">
                    <Button variant="hero" size="xl">
                      {product.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <Button variant="hero-outline" size="xl">
                      Contact Sales
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Key Features
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Everything you need, thoughtfully designed and built
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {product.features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 100}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ParallaxElement speed={0.1} className="absolute bottom-20 right-10 w-64 h-64 bg-muted/50 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Why <span className="text-gradient">{product.name}</span>?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Built with care, designed for real-world use, and constantly improving based on user feedback.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="space-y-4">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-foreground" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Join the growing number of teams and individuals using {product.name} to work smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  {product.cta}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/#contact">Get in Touch</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
