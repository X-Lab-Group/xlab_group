import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlassCard from "@/components/GlassCard";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Team Experts" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={stat.label}
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
