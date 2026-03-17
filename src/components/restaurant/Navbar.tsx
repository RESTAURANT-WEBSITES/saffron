import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logoImg from "/image.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logoImg} alt="Saffron Restaurant and Cafe" className="h-12" />

          <div className="hidden sm:flex flex-col items-center leading-tight">
            <span className="font-serif text-2xl font-bold text-gold tracking-wider">
              SAFFRON
            </span>
            <span className="text-sm text-gold">
              Restaurant & Cafe
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-sans tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground hover:text-gold transition"
          >
            <ShoppingBag size={22} />

            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <a href="#reservation" className="hidden md:inline-flex items-center px-6 py-2.5 bg-gold text-primary-foreground font-sans text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-gold-light transition-colors duration-300">
            Reserve a Table
          </a>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors py-2">
                {link.label}
              </a>
            ))}
            <a href="#reservation" onClick={() => setMobileOpen(false)} className="mt-2 text-center px-6 py-3 bg-gold text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-sm">
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
