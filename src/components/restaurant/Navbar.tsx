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
    <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo Module */}
        <a href="#home" className={`pointer-events-auto flex items-center gap-3 pr-6 pl-2 py-2 rounded-full border shadow-lg transition-all duration-500 hover:bg-surface/50 ${scrolled ? "bg-surface/40 backdrop-blur-md border-border/50 shadow-black/20" : "bg-surface/20 backdrop-blur-sm border-transparent shadow-none"}`}>
          <div className="bg-white rounded-full p-1 h-10 w-10 flex items-center justify-center">
            <img src={logoImg} alt="Saffron Restaurant and Cafe" className="h-full w-full object-contain" />
          </div>

          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="font-serif text-lg font-bold text-gold tracking-wider">
              SAFFRON
            </span>
          </div>
        </a>

        {/* Desktop Links Module */}
        <div className={`hidden md:flex items-center gap-6 px-8 py-3 rounded-full border shadow-lg pointer-events-auto transition-all duration-500 ${scrolled ? "bg-surface/40 backdrop-blur-md border-border/50 shadow-black/20" : "bg-surface/20 backdrop-blur-sm border-transparent shadow-none"}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-sans font-medium tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions Module */}
        <div className={`flex items-center gap-3 px-4 py-2 rounded-full border shadow-lg pointer-events-auto transition-all duration-500 ${scrolled ? "bg-surface/40 backdrop-blur-md border-border/50 shadow-black/20" : "bg-surface/20 backdrop-blur-sm border-transparent shadow-none"}`}>
          {/* Cart Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-[#EAB308] hover:text-[#FCD34D] transition pr-2 md:pr-0 transform hover:scale-110 duration-200"
          >
            <ShoppingBag size={28} />

            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#EAB308] text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          
          <button className="md:hidden text-foreground pr-1 pl-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden pointer-events-auto mt-4 mx-4 rounded-xl bg-surface/80 backdrop-blur-md border border-border/50 animate-fade-in overflow-hidden shadow-xl shadow-black/30">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="px-6 py-4 text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-gold hover:bg-white/5 transition-colors border-b border-border/30 last:border-0">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
