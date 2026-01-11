import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Database, Cloud, Code, Palette } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Transform raw data into actionable insights. We build scalable data pipelines, warehouses, and analytics solutions that drive informed decision-making.",
  },
  {
    icon: Cloud,
    title: "DevOps Engineering",
    description:
      "Streamline your development lifecycle with CI/CD pipelines, cloud infrastructure, and automation that accelerates delivery and ensures reliability.",
  },
  {
    icon: Code,
    title: "Software & Web Development",
    description:
      "Custom software solutions and modern web applications built with cutting-edge technologies. From MVPs to enterprise systems.",
  },
  {
    icon: Palette,
    title: "Branding & Graphics Design",
    description:
      "Create memorable brand identities and stunning visuals that capture your essence and resonate with your audience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

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
              <GlassCard className="group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
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
