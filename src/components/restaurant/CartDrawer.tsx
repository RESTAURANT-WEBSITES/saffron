


// import { useState } from "react";
// import { X, Minus, Plus, ShoppingBag } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";



// const CartDrawer = () => {
//   const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

//   const [customerName, setCustomerName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const validateForm = () => {
//     if (!customerName.trim()) {
//       alert("Please enter your name");
//       return false;
//     }

//     if (!phone.trim()) {
//       alert("Please enter your phone number");
//       return false;
//     }

//     if (!/^[0-9]{10}$/.test(phone)) {
//       alert("Phone number must be exactly 10 digits");
//       return false;
//     }

//     if (!address.trim()) {
//       alert("Please enter your delivery address");
//       return false;
//     }

//     return true;
//   };

//   const sendWhatsAppOrder = () => {
//     if (!validateForm()) return;

//     const phoneNumber = "91XXXXXXXXXX"; // replace with your WhatsApp number

//     const orderItems = items
//       .map(
//         (item, index) =>
//           `${index + 1}. ${item.name} x${item.quantity} - $${(
//             item.price * item.quantity
//           ).toFixed(2)}`
//       )
//       .join("\n");

//     const message = `Hello Highrise Restaurant,

// Customer Details
// Name: ${customerName}
// Phone: ${phone}
// Address: ${address}

// Order:
// ${orderItems}

// Total: $${total.toFixed(2)}
// `;

//     const encoded = encodeURIComponent(message);
//     const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

//     window.open(url, "_blank");
//   };

//   const [scrollPosition, setScrollPosition] = useState(0);



//   // button for more ordering
//   const continueOrdering = () => {
//     setIsOpen(false);

//     const menuSection = document.getElementById("menu");
//     if (menuSection) {
//       menuSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetContent className="bg-card border-border w-full sm:max-w-md flex flex-col">
//         <SheetHeader className="border-b border-border pb-4">
//           <SheetTitle className="font-serif text-xl text-foreground flex items-center gap-2">
//             <ShoppingBag size={20} className="text-gold" /> Delivery Order
//           </SheetTitle>
//         </SheetHeader>

//         {items.length === 0 ? (
//           <div className="flex-1 flex items-center justify-center">
//             <p className="text-muted-foreground text-sm">Your cart is empty</p>
//           </div>
//         ) : (
//           <>
//             {/* Cart Items */}
//             <div className="flex-1 overflow-y-auto py-4 space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-4 bg-surface-elevated border border-border rounded-sm p-4"
//                 >
//                   <div className="flex-1">
//                     <h4 className="font-serif text-sm font-semibold text-foreground">
//                       {item.name}
//                     </h4>
//                     <p className="text-gold text-sm font-semibold mt-1">
//                       ${item.price}
//                     </p>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
//                     >
//                       <Minus size={12} />
//                     </button>

//                     <span className="text-sm font-semibold text-foreground w-6 text-center">
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
//                     >
//                       <Plus size={12} />
//                     </button>
//                   </div>

//                   {/* Remove Item */}
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-muted-foreground hover:text-destructive transition-colors"
//                   >
//                     <X size={16} />
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Checkout Section */}
//             <div className="border-t border-border pt-4 space-y-4">

//               {/* Customer Details */}
//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={phone}
//                   maxLength={10}
//                   onChange={(e) => {
//                     const numbersOnly = e.target.value.replace(/\D/g, "");
//                     setPhone(numbersOnly);
//                   }}
//                   className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
//                 />

//                 <textarea
//                   placeholder="Delivery Address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
//                 />
//               </div>

//               {/* Total */}
//               <div className="flex justify-between items-center">
//                 <span className="font-serif text-lg text-foreground">Total</span>
//                 <span className="font-serif text-xl font-bold text-gold">
//                   ${total.toFixed(2)}
//                 </span>
//               </div>

//               {/* Continue Ordering */}
//               <button
//                 onClick={continueOrdering}
//                 className="w-full py-3 border border-gold text-gold font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold hover:text-white transition-colors"
//               >
//                 + Add More Items
//               </button>
//               {/* WhatsApp Order Button */}
//               <button
//                 onClick={sendWhatsAppOrder}
//                 className="w-full py-4 bg-gold text-primary-foreground font-sans font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors"
//               >
//                 Order via WhatsApp
//               </button>

//               {/* Clear Cart */}
//               <button
//                 onClick={clearCart}
//                 className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Clear Cart
//               </button>

//             </div>
//           </>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default CartDrawer;





import { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingBag, MapPin, Loader2, Navigation } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

/* â”€â”€â”€ tiny inline styles kept out of tailwind to avoid purging â”€â”€â”€ */
const mapCardStyle: React.CSSProperties = {
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.08)",
};

const mapBgStyle: React.CSSProperties = {
  height: "90px",
  background:
    "linear-gradient(135deg,#1a2233 0%,#1e2d3d 40%,#243040 60%,#1a2233 100%)",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/* fake street-map SVG pattern */
const MapSvgBg = () => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* horizontal streets */}
    {[15, 35, 55, 75].map((y) => (
      <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#8cafc8" strokeWidth="1" />
    ))}
    {/* vertical streets */}
    {[12, 30, 50, 68, 85].map((x) => (
      <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#8cafc8" strokeWidth="1" />
    ))}
    {/* block fills */}
    <rect x="13%" y="16%" width="16%" height="18%" fill="#c8dbb0" opacity="0.4" rx="2" />
    <rect x="51%" y="36%" width="16%" height="18%" fill="#c8dbb0" opacity="0.4" rx="2" />
    <rect x="31%" y="56%" width="16%" height="18%" fill="#c8dbb0" opacity="0.35" rx="2" />
  </svg>
);

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [locationLink, setLocationLink] = useState<string | null>(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) setScrollPosition(window.scrollY);
  }, [isOpen]);

  const handleAddLocation = () => {
    if (!navigator.geolocation) { alert("Geolocation is not supported by your browser"); return; }
    setIsFetchingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocationLink(`https://www.google.com/maps?q=${latitude},${longitude}`);
        setIsFetchingLocation(false);
      },
      (err) => {
        console.error("Error fetching location:", err);
        alert("Unable to fetch location. Please ensure location services are enabled.");
        setIsFetchingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const validateForm = () => {
    if (!customerName.trim()) { alert("Please enter your name"); return false; }
    if (!phone.trim()) { alert("Please enter your phone number"); return false; }
    if (!/^[0-9]{10}$/.test(phone)) { alert("Phone number must be exactly 10 digits"); return false; }
    if (!address.trim()) { alert("Please enter your delivery address"); return false; }
    return true;
  };

  const sendWhatsAppOrder = () => {
    if (!validateForm()) return;
    const waNumber = "916238426420";
    const orderItems = items
      .map((item, i) => `${i + 1}. ${item.name} x${item.quantity} - â‚¹${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");
    const message = `Hello Saffron Restaurant,\n\nCustomer Details\nName: ${customerName}\nPhone: ${phone}\nAddress: ${address}\n${locationLink ? `Location: ${locationLink}\n` : ""}${notes ? `Notes: ${notes}\n` : ""}\nOrder:\n${orderItems}\n\nTotal: â‚¹${total.toFixed(2)}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const continueOrdering = () => {
    setIsOpen(false);
    setTimeout(() => window.scrollTo({ top: scrollPosition, behavior: "smooth" }), 100);
  };

  /* â”€â”€â”€ shared input style â”€â”€â”€ */
  const inputCls =
    "w-full bg-[#1a1f2b] border border-white/10 rounded-lg text-xs text-white placeholder-white/30 px-3 py-2.5 focus:outline-none focus:border-yellow-500/50 transition-colors";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="flex flex-col p-0 border-0"
        style={{ background: "#111520", width: "100%", maxWidth: "420px" }}
      >
        {/* â”€â”€ Header â”€â”€ */}
        <SheetHeader
          className="flex-shrink-0 flex flex-row items-center gap-3 px-5 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)" }}
          >
            <ShoppingBag size={17} className="text-red-500" />
          </div>
          <SheetTitle className="text-white font-bold text-base tracking-widest uppercase">
            Delivery Order
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-white/30">
            <ShoppingBag size={40} />
            <p className="text-sm">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-4 py-4">

            {/* â”€â”€ Cart Items â”€â”€ */}
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl p-3"
                  style={{ background: "#1a1f2b", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* thumbnail placeholder */}
                  <div
                    className="w-14 h-14 rounded-lg flex-shrink-0 overflow-hidden"
                    style={{ background: "#242836" }}
                  >
                    {(item as any).image ? (
                      <img src={(item as any).image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 text-lg">ðŸ½</div>
                    )}
                  </div>

                  {/* name + description */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-tight truncate">{item.name}</p>
                    {(item as any).description && (
                      <p className="text-white/40 text-[11px] mt-0.5 truncate">{(item as any).description}</p>
                    )}
                    <p className="text-yellow-400 text-sm font-bold mt-1">â‚¹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  {/* qty controls */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
                    >
                      <Minus size={11} />
                    </button>
                    <span className="text-white text-sm font-bold w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
                    >
                      <Plus size={11} />
                    </button>
                  </div>

                  {/* remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-1 text-white/25 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* â”€â”€ Browse Menu button â”€â”€ */}
            <button
              onClick={continueOrdering}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold tracking-wide transition-colors"
              style={{ background: "#1a1f2b", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Browse Menu
            </button>

            {/* â”€â”€ Order Notes â”€â”€ */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: "#1a1f2b", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="px-3 pt-3 pb-1">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Order Notes</p>
              </div>
              <textarea
                placeholder="Order notes"
                value={notes}
                rows={2}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-transparent px-3 pb-3 text-xs text-white placeholder-white/25 focus:outline-none resize-none"
              />
            </div>

            {/* â”€â”€ Contact Details â”€â”€ */}
            <div>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">Contact Details</p>
              <div
                className="flex rounded-xl overflow-hidden"
                style={{ background: "#1a1f2b", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Name */}
                <div className="flex-1 flex items-center gap-2 px-3 py-3" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-white/30 text-base">ðŸ‘¤</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/35 text-[9px] font-bold tracking-widest uppercase">Name</p>
                    <input
                      type="text"
                      placeholder="Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-transparent w-full text-white text-xs placeholder-white/25 focus:outline-none mt-0.5"
                    />
                  </div>
                </div>
                {/* Phone */}
                <div className="flex-1 flex items-center gap-2 px-3 py-3">
                  <span className="text-white/30 text-base">ðŸ“ž</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/35 text-[9px] font-bold tracking-widest uppercase">Phone Number</p>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phone}
                      maxLength={10}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="bg-transparent w-full text-white text-xs placeholder-white/25 focus:outline-none mt-0.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* â”€â”€ Order Delivery â”€â”€ */}
            <div>
              <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">Order Delivery</p>

              {/* Map card */}
              <div style={mapCardStyle}>
                <div style={mapBgStyle}>
                  <MapSvgBg />
                  {/* pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <MapPin size={28} className="text-red-500 drop-shadow-lg" fill="rgba(220,38,38,0.25)" />
                  </div>
                  {/* SET FROM MAP button */}
                  <button
                    type="button"
                    onClick={handleAddLocation}
                    disabled={isFetchingLocation}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all disabled:opacity-60"
                    style={{
                      background: locationLink ? "rgba(34,197,94,0.15)" : "rgba(220,38,38,0.85)",
                      border: locationLink ? "1px solid rgba(34,197,94,0.5)" : "1px solid rgba(220,38,38,0.4)",
                      color: locationLink ? "#4ade80" : "#fff",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {isFetchingLocation ? (
                      <Loader2 size={11} className="animate-spin" />
                    ) : (
                      <Navigation size={11} />
                    )}
                    {locationLink ? "Location Set âœ“" : "Set from Map"}
                  </button>
                </div>

                {/* Address bar */}
                <div
                  className="flex items-center"
                  style={{ background: "#1a1f2b", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <input
                    type="text"
                    placeholder="Delivery Address (Apartment, Street...)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddLocation}
                    disabled={isFetchingLocation}
                    className="flex items-center gap-1 pr-3 text-[10px] text-white/40 hover:text-yellow-400 transition-colors disabled:opacity-50 flex-shrink-0"
                  >
                    <MapPin size={11} />
                    Use current location
                  </button>
                </div>
              </div>
            </div>

            {/* â”€â”€ Totals â”€â”€ */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span className="text-white">â‚¹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Delivery Fee</span>
                <span className="text-green-400 font-semibold">FREE</span>
              </div>
              <div
                className="flex justify-between text-base font-bold text-white pt-1"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span>Total</span>
                <span>â‚¹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* â”€â”€ CTA Buttons â”€â”€ */}
            <div className="space-y-2 pb-2">
              {/* + Add More Items */}
              <button
                onClick={continueOrdering}
                className="w-full py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
                style={{ background: "#fff", color: "#111520" }}
              >
                + Add More Items
              </button>

              {/* Proceed via WhatsApp */}
              <button
                onClick={sendWhatsAppOrder}
                className="w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all"
                style={{ background: "linear-gradient(135deg,#c0392b,#e74c3c)", color: "#fff" }}
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Proceed via WhatsApp
              </button>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full py-2 text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-2 tracking-widest uppercase"
              >
                Clear Cart
              </button>
            </div>

          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
