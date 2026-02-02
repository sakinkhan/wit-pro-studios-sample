import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Studio space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-widest uppercase mb-6 animate-fade-up opacity-0 [animation-delay:200ms]">
            Canberra's Premier Music Facility
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-up opacity-0 [animation-delay:400ms] glow-text">
            WITNESS
            <br />
            <span className="text-gradient">PROTECTION</span>
            <br />
            STUDIOS
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 [animation-delay:600ms]">
            Rehearse. Record. Rock. Located in the heart of Belconnen,
            we've been serving Canberra's creative community for decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 [animation-delay:800ms]">
            <Button size="lg" className="btn-primary text-lg px-8 py-6">
              Book a Room
            </Button>
            <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-6">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
