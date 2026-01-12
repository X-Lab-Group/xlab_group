import { useState, useEffect } from "react";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "X-Labs transformed our data infrastructure completely. Their expertise in data engineering helped us reduce processing time by 70%.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "TechCorp"
  },
  {
    quote: "The DevOps solutions they implemented streamlined our deployment process. We went from weekly releases to multiple deployments per day.",
    author: "Michael Roberts",
    role: "VP Engineering, CloudNine",
    company: "CloudNine"
  },
  {
    quote: "Their design team created a brand identity that perfectly captures our vision. The attention to detail was exceptional.",
    author: "Emma Thompson",
    role: "Founder, InnovateLab",
    company: "InnovateLab"
  },
  {
    quote: "Working with X-Labs on our web platform was seamless. They delivered ahead of schedule with outstanding quality.",
    author: "David Kim",
    role: "Product Manager, DigitalEdge",
    company: "DigitalEdge"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-muted/60">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-muted/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the teams we've partnered with
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative">
              {/* Testimonial Card */}
              <GlassCard className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
                <Quote className="w-12 h-12 text-muted-foreground/30 mb-6" />
                
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-lg font-bold">
                              {testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? "bg-foreground w-8" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 glass rounded-full hover:bg-muted/50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 glass rounded-full hover:bg-muted/50 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
