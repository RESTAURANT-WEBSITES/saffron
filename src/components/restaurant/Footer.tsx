import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-surface/30 backdrop-blur-md border-t border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-serif text-2xl font-bold text-gold mb-4">SAFFRON</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">Elevated dining experiences with panoramic city views. Where culinary artistry meets breathtaking heights.</p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Menu", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-gold transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Instagram, href: "https://www.instagram.com/saffron.restaurant?igsh=bHR4ZGFoY3h6cWJq&utm_source=qr", label: "Instagram" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-all duration-300">
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-8 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Saffron Restaurant & Cafe. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
//hi
export default Footer;
