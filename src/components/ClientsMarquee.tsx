import { useEffect, useState } from "react";

const clients = [
  "TechCorp", "DataFlow", "HostSpace Cloud Solutions", "InnovateLab", 
  "DigitalEdge", "FutureTech", "CodeStream", "ByteWorks"
];

const ClientsMarquee = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border/50 bg-muted/60">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider">
          Trusted by innovative companies
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="glass px-8 py-4 rounded-xl">
                <span className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
