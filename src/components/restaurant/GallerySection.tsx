const gallery_images = [
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Gourmet dish",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    alt: "Signature cocktail",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    alt: "Wagyu steak",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Panoramic view",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    alt: "Dessert",
  },
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
