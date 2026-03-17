import { Eye, ChefHat, Wine } from "lucide-react";

const features = [
  { icon: Eye, title: "Panoramic Views", description: "Floor-to-ceiling windows offering 360° views of the city skyline. Watch the sunset paint the sky as you dine." },
  { icon: ChefHat, title: "Gourmet Cuisine", description: "Our Michelin-starred chefs craft extraordinary dishes using the finest locally-sourced and international ingredients." },
  { icon: Wine, title: "Signature Cocktails", description: "Our award-winning mixologists create bespoke cocktails that are as visually stunning as they are delicious." },
];

const WhyDineSection = () => (
  <section className="py-24 lg:py-32 bg-background/20 backdrop-blur-md">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">The Experience</span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Why Dine With Us</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="group bg-surface-elevated border border-border rounded-sm p-10 text-center hover:border-gold/40 transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
              <f.icon className="text-gold" size={28} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDineSection;
