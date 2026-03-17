import aboutImg from "@/assets/about.jpg";

const about_img_url = aboutImg;

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-surface/20 backdrop-blur-md">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
          <img src={about_img_url} alt="Our Chef" className="w-full h-[500px] object-cover rounded-sm relative z-10" />
        </div>
        <div>
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Story
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="block text-foreground text-left text-lg">
              Welcome to
            </span>

            <span className="block text-white text-5xl lg:text-6xl tracking-wider text-center">
              SAFFRON
            </span>

            <span className="block text-[hsl(var(--gold))] text-center text-xl">
              Restaurant & Café
            </span>
          </h2>

          <div className="w-16 h-px bg-gold mb-8" />

          <p className="text-muted-foreground leading-relaxed mb-6">
            Welcome to Saffron Restaurant & Café, the ultimate destination for authentic Indian cuisine and a truly elevated dining experience. From the heart of India’s kitchens to your table, we bring you a perfect blend of tradition, taste, and hospitality.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Step inside our cozy yet elegant restaurant, where the aroma of freshly ground spices and sizzling grills greets you the moment you arrive. Whether it’s a family lunch, a romantic dinner, or a quick meal with friends — at Saffron, every bite tells a story.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Our chefs come with years of experience from some of India’s finest kitchens. They carefully select spices, marinate ingredients to perfection, and cook every dish with love. Whether it’s the smokiness of a tandoori grill or the creamy texture of a butter chicken, our dishes capture the soul of India.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[{ num: "15+", label: "Years" }, { num: "50+", label: "Awards" }, { num: "200K", label: "Guests" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl font-bold text-gold">{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
