import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

interface ParallaxElementProps {
  className?: string;
  speed?: number;
  children?: React.ReactNode;
}

export const ParallaxElement = ({ className, speed = 0.3, children }: ParallaxElementProps) => {
  const offset = useParallax(speed);

  return (
    <div
      className={cn("will-change-transform", className)}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

interface ParallaxBackgroundProps {
  variant?: "hero" | "section" | "contact";
}

const ParallaxBackground = ({ variant = "section" }: ParallaxBackgroundProps) => {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <ParallaxElement
          speed={0.15}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-muted rounded-full blur-3xl opacity-60"
        />
        <ParallaxElement
          speed={0.25}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-40"
        />
        <ParallaxElement
          speed={0.1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl opacity-30"
        />
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <>
        <ParallaxElement
          speed={0.2}
          className="absolute top-0 left-0 w-32 h-32 bg-muted/50 rounded-full blur-3xl"
        />
        <ParallaxElement
          speed={0.15}
          className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/50 rounded-full blur-3xl"
        />
      </>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <ParallaxElement
        speed={0.2}
        className="absolute top-1/2 left-0 w-96 h-96 bg-muted rounded-full blur-3xl opacity-40 -translate-x-1/2"
      />
      <ParallaxElement
        speed={0.15}
        className="absolute bottom-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-30 translate-x-1/4"
      />
    </div>
  );
};

export default ParallaxBackground;
