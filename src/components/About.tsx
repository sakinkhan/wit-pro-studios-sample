import { MapPin, Clock, Phone, Mail } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location",
    description: "Under Supercheap Auto, Wignall Place, Belconnen, Canberra",
  },
  {
    icon: Clock,
    title: "Hours",
    description: "Open 7 days a week. Flexible booking times available.",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Contact us for bookings and inquiries",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Drop us a line anytime",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,hsl(var(--primary))_35px,hsl(var(--primary))_70px)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-6">
              DECADES OF
              <br />
              <span className="text-gradient">MUSIC HISTORY</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Located in the heart of Belconnen, this studio has been serving Canberra's
              creative community for decades, under different names and owners.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              As Witness Protection Studios kicks into 2026, we continue to provide
              a top-quality facility for artists to practice and record. Whether you're
              a solo artist, a full band, or just looking to jam, we've got a space for you.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 glow-box">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <span className="font-display text-6xl lg:text-7xl text-gradient">20+</span>
                <p className="text-muted-foreground mt-2">Years of History</p>
              </div>
              <div className="text-center">
                <span className="font-display text-6xl lg:text-7xl text-gradient">5</span>
                <p className="text-muted-foreground mt-2">Rehearsal Rooms</p>
              </div>
              <div className="text-center">
                <span className="font-display text-6xl lg:text-7xl text-gradient">24/7</span>
                <p className="text-muted-foreground mt-2">Gear Access</p>
              </div>
              <div className="text-center">
                <span className="font-display text-6xl lg:text-7xl text-gradient">100+</span>
                <p className="text-muted-foreground mt-2">Bands Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
