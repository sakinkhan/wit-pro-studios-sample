import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Mail } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

export const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Ready to Rock?
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-6">
            BOOK YOUR
            <br />
            <span className="text-gradient">SESSION TODAY</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Whether you need a space to rehearse, a studio to record, or just
            want to grab some gear from the Rocker-Locker, we've got you
            covered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="btn-primary text-lg px-8 py-6">
              Book Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61559309067424"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Facebook size={20} />
            </a>

            <a
              href="tel:0448109246"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FaPhoneAlt size={20} />
            </a>

            <a
              href="mailto:info@witprostudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
