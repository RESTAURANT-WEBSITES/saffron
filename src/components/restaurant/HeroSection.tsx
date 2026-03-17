import heroBg from "@/assets/hero-bg.jpg";

const hero_bg_url = heroBg;

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src={hero_bg_url} alt="Saffron Restaurant" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
      <div className="w-16 h-px bg-gold mx-auto mb-8" />
      <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
        Elevated Dining,<br />
        <span className="gold-text-gradient">Unmatched Views.</span>
      </h1>
      <p className="font-sans text-lg text-white max-w-2xl mx-auto mb-10 leading-relaxed">
        Experience culinary artistry high above the city skyline. Where every dish tells a story and every view takes your breath away.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#reservation" className="px-10 py-4 btn-glass rounded-full text-sm inline-flex items-center justify-center">
          Reserve a Table
        </a>
        <a href="#menu" className="px-10 py-4 btn-glass rounded-full text-sm inline-flex items-center justify-center">
          View Menu
        </a>
      </div>
      <div className="w-16 h-px bg-gold mx-auto mt-12" />
    </div>
  </section>
);

export default HeroSection;
