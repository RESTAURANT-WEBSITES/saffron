import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 lg:py-32 bg-background/20 backdrop-blur-md">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Contact & Location</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-gold" size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-1">Address</h4>
              <p className="text-muted-foreground">
                Kongad<br />
                Palakkad<br />
                Kerala 678592
              </p>            </div>
          </div><br />
          <a href="tel:+916238426420">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+91 6238426420</p>
              </div>
            </div></a>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-gold" size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-1">Email</h4>
              <p className="text-muted-foreground">reservations@saffron.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Clock className="text-gold" size={20} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-1">Opening Hours</h4>
              <div className="text-muted-foreground space-y-1">
                <p>Open Daily: 10:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        {/* Map Placeholder */}
        <div className="bg-surface-elevated border border-border rounded-sm overflow-hidden min-h-[400px] flex items-center justify-center">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4125579974593!2d76.51903748200071!3d10.856192858161354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8770018ff6013%3A0x60226035aa7a4ef2!2sSAFFRON%20Bakes%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1773767343111!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: "400px",
              filter: "invert(90%) hue-rotate(180deg) brightness(1.2) contrast(1.2)"
            }} allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section >
);

export default ContactSection;
