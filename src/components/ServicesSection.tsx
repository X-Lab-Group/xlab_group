import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { ParallaxElement } from "@/components/ParallaxBackground";
import { Database, Cloud, Code, Palette, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Transform raw data into actionable insights. We build scalable data pipelines, warehouses, and analytics solutions that drive informed decision-making.",
    features: ["ETL Pipelines", "Data Warehousing", "BI Dashboards"]
  },
  {
    icon: Cloud,
    title: "DevOps Engineering",
    description:
      "Streamline your development lifecycle with CI/CD pipelines, cloud infrastructure, and automation that accelerates delivery and ensures reliability.",
    features: ["CI/CD", "Cloud Migration", "Infrastructure as Code"]
  },
  {
    icon: Code,
    title: "Software & Web Development",
    description:
      "Custom software solutions and modern web applications built with cutting-edge technologies. From MVPs to enterprise systems.",
    features: ["Full-Stack Apps", "API Development", "Mobile Apps"]
  },
  {
    icon: Palette,
    title: "Branding & Graphics Design",
    description:
      "Create memorable brand identities and stunning visuals that capture your essence and resonate with your audience.",
    features: ["Brand Identity", "UI/UX Design", "Marketing Assets"]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <ParallaxElement speed={0.1} className="absolute top-20 right-20 w-64 h-64 bg-muted/50 rounded-full blur-3xl" />
        <ParallaxElement speed={0.15} className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
      </div>
      
      {/* Floating decorative elements */}
      <ParallaxElement speed={0.2} className="absolute top-40 left-10 glass w-8 h-8 rounded-lg rotate-12 opacity-40" />
      <ParallaxElement speed={0.25} className="absolute bottom-40 right-10 glass w-10 h-10 rounded-xl -rotate-12 opacity-30" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions tailored to elevate your business
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <GlassCard className="group h-full hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
