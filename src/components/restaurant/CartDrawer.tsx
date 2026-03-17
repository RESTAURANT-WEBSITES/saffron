


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
import { X, Minus, Plus, ShoppingBag, MapPin, Loader2, ExternalLink } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [locationLink, setLocationLink] = useState<string | null>(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  // SAVE SCROLL POSITION
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setScrollPosition(window.scrollY);
    }
  }, [isOpen]);

  const handleAddLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsFetchingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setLocationLink(mapsLink);
        setIsFetchingLocation(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to fetch location. Please ensure location services are enabled.");
        setIsFetchingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const validateForm = () => {
    if (!customerName.trim()) {
      alert("Please enter your name");
      return false;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits");
      return false;
    }

    if (!address.trim()) {
      alert("Please enter your delivery address");
      return false;
    }

    return true;
  };

  const sendWhatsAppOrder = () => {
    if (!validateForm()) return;

    const phoneNumber = "916238426420"; // replace with your WhatsApp number

    const orderItems = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} - $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `Hello Saffron Restaurant,

Customer Details
Name: ${customerName}
Phone: ${phone}
Address: ${address}

${locationLink ? `Customer Location:\n${locationLink}\n` : ""}
Order:
${orderItems}

Total: $${total.toFixed(2)}
`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(url, "_blank");
  };

  // RETURN TO PREVIOUS SCROLL POSITION
  const continueOrdering = () => {
    setIsOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-card border-border w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-xl text-foreground flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold" /> Delivery Order
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-surface-elevated border border-border rounded-sm p-4"
                >
                  <div className="flex-1">
                    <h4 className="font-serif text-sm font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <p className="text-gold text-sm font-semibold mt-1">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                    >
                      <Minus size={12} />
                    </button>

                    <span className="text-sm font-semibold text-foreground w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Section */}
            <div className="border-t border-border pt-4 space-y-4">

              {/* Customer Details */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => {
                    const numbersOnly = e.target.value.replace(/\D/g, "");
                    setPhone(numbersOnly);
                  }}
                  className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
                />

                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-sm text-sm"
                />

                {/* Optional Location Selection */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={handleAddLocation}
                    disabled={isFetchingLocation}
                    className="flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold-light transition-colors disabled:opacity-50"
                  >
                    {isFetchingLocation ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <MapPin size={14} />
                    )}
                    {locationLink ? "Location Added Successfully" : "Add My Location (Optional)"}
                  </button>

                  {locationLink && (
                    <div className="flex items-center gap-2 px-2 py-1 bg-surface-elevated border border-gold/20 rounded-sm">
                      <span className="text-[10px] text-muted-foreground truncate flex-1">
                        {locationLink}
                      </span>
                      <a
                        href={locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:underline text-[10px] flex items-center gap-1"
                      >
                        View <ExternalLink size={10} />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg text-foreground">Total</span>
                <span className="font-serif text-xl font-bold text-gold">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Continue Ordering */}
              <button
                onClick={continueOrdering}
                className="w-full py-3 border border-gold text-gold font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold hover:text-white transition-colors"
              >
                + Add More Items
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={sendWhatsAppOrder}
                className="w-full py-4 bg-gold text-primary-foreground font-sans font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors"
              >
                Order via WhatsApp
              </button>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear Cart
              </button>

            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;