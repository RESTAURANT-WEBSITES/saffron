import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";

const gallery_images = [
  { src: g1, alt: "Gourmet dish" },
  { src: g2, alt: "Signature cocktail" },
  { src: g3, alt: "Restaurant interior" },
  { src: g4, alt: "Wagyu steak" },
  { src: g5, alt: "Panoramic view" },
  { src: g6, alt: "Dessert" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 lg:py-32 bg-background/20 backdrop-blur-md">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Visual Journey</span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Gallery</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery_images.map((img, i) => (
          <div key={i} className="relative overflow-hidden rounded-sm group aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
