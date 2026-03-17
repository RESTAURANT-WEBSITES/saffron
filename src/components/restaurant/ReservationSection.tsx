import { useState } from "react";
import { CalendarDays, Clock, Users, User } from "lucide-react";
import { toast } from "sonner";

const GUEST_OPTIONS = [
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
  { value: "5", label: "5 Guests" },
  { value: "10", label: "10 Guests" },
  { value: "custom", label: "Add custom number of guests" },
];

const ReservationSection = () => {
  const [form, setForm] = useState({ date: "", time: "", guests: "2", name: "", email: "", phone: "" });
  const [customGuests, setCustomGuests] = useState("");

  const isCustomGuests = form.guests === "custom";

  const handleGuestsChange = (value: string) => {
    if (value === "custom") {
      setForm({ ...form, guests: "custom" });
      setCustomGuests(customGuests || "");
    } else {
      setForm({ ...form, guests: value });
      setCustomGuests("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.time || !form.name) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (isCustomGuests && (!customGuests || parseInt(customGuests, 10) < 1)) {
      toast.error("Please enter a valid number of guests.");
      return;
    }
    const guestCount = isCustomGuests ? customGuests : form.guests;
    toast.success(`Table reserved for ${form.name} on ${form.date} at ${form.time} for ${guestCount} guests.`);
    setForm({ date: "", time: "", guests: "2", name: "", email: "", phone: "" });
    setCustomGuests("");
  };

  const inputClass = "w-full bg-surface-elevated border border-border rounded-sm px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="reservation" className="py-24 lg:py-32 bg-surface/20 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Reservations</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Book a Table</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>
        <form onSubmit={handleSubmit} className="bg-surface-elevated border border-border rounded-sm p-8 lg:p-12 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <CalendarDays size={14} className="text-gold" /> Date *
              </label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <Clock size={14} className="text-gold" /> Time *
              </label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass} required />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <Users size={14} className="text-gold" /> Guests
              </label>
              {isCustomGuests ? (
                <div className="space-y-2">
                  <select value="custom" onChange={(e) => handleGuestsChange(e.target.value)} className={inputClass}>
                    {GUEST_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    placeholder="Enter number of guests"
                    value={customGuests}
                    onChange={(e) => setCustomGuests(e.target.value.replace(/^0+(?=\d)/, "") || "")}
                    className={inputClass}
                  />
                </div>
              ) : (
                <select value={form.guests} onChange={(e) => handleGuestsChange(e.target.value)} className={inputClass}>
                  {GUEST_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2 font-sans">
                <User size={14} className="text-gold" /> Name *
              </label>
              <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required maxLength={100} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Email</label>
              <input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block font-sans">Phone</label>
              <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={20} />
            </div>
          </div>
          <button type="submit" className="w-full py-4 btn-glass rounded-full text-sm">
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
