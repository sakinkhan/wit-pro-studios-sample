import { ServiceCard } from "./ServiceCard";
import rehearsalImage from "@/assets/rehearsal-room.jpg";
import recordingImage from "@/assets/recording-studio.jpg";
import rockerLockerImage from "@/assets/rocker-locker.jpg";
import merchImage from "@/assets/merch.jpg";

const services = [
  {
    title: "Rehearsal Spaces",
    description: "Professional rehearsal rooms fully equipped with backline, PA systems, and drum kits. Perfect for bands of all sizes.",
    image: rehearsalImage,
    href: "#rehearsal",
  },
  {
    title: "Recording Studio",
    description: "State-of-the-art recording facilities with experienced engineers to capture your sound perfectly.",
    image: recordingImage,
    href: "#recording",
  },
  {
    title: "Rocker-Locker",
    description: "24/7 access to essential gear. Guitar strings, sticks, cables, and more at competitive prices when you need it.",
    image: rockerLockerImage,
    href: "#rocker-locker",
  },
  {
    title: "Merch Store",
    description: "Rep the studio with our exclusive merchandise. T-shirts, hoodies, and more from your favorite local music hub.",
    image: merchImage,
    href: "#merch",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground mb-6">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to create, practice, and perform. All under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
