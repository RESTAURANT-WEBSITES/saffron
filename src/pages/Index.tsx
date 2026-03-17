import Navbar from "@/components/restaurant/Navbar";
import HeroSection from "@/components/restaurant/HeroSection";
import AboutSection from "@/components/restaurant/AboutSection";
import WhyDineSection from "@/components/restaurant/WhyDineSection";
import MenuSection from "@/components/restaurant/MenuSection";
import GallerySection from "@/components/restaurant/GallerySection";
import ReservationSection from "@/components/restaurant/ReservationSection";
import ContactSection from "@/components/restaurant/ContactSection";
import Footer from "@/components/restaurant/Footer";
import CartDrawer from "@/components/restaurant/CartDrawer";
import WhatsAppButton from "@/components/restaurant/WhatsAppButton";
import LightPillar from "@/components/ui/LightPillar";

const Index = () => (
  <div className="min-h-screen relative z-0">
    {/* Global Background */}
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10 pointer-events-none" />
      <LightPillar
        topColor="#D39E36"
        bottomColor="#350000"
        intensity={1}
        rotationSpeed={0.4}
        glowAmount={0.002}
        pillarWidth={4.6}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive
        mixBlendMode="screen"
        quality="high"
      />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyDineSection />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </div>
  </div>
);

export default Index;
