import { useCounter } from "@/hooks/use-counter";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", label }: AnimatedCounterProps) => {
  const { count, ref } = useCounter({ end, duration: 2500 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-3xl md:text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
