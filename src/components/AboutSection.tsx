import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-muted rounded-full blur-3xl opacity-40 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-30 translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Building the
              <br />
              <span className="text-gradient">Future Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Xtraordinary Labs Ltd is a forward-thinking tech consulting firm dedicated to empowering businesses through innovative technology solutions. We bridge the gap between complex technical challenges and practical, scalable results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team brings together expertise in data, development, infrastructure, and design to deliver holistic solutions that drive real business value.
            </p>
          </AnimatedSection>

          {/* Values Cards */}
          <div className="grid gap-4">
            {[
              {
                title: "Innovation First",
                description: "We stay ahead of the curve, leveraging cutting-edge technologies to deliver forward-thinking solutions.",
              },
              {
                title: "Client Partnership",
                description: "Your success is our success. We work closely with you to understand and achieve your goals.",
              },
              {
                title: "Excellence Driven",
                description: "Quality is non-negotiable. Every project receives our full attention and expertise.",
              },
            ].map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <GlassCard className="p-5">
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
