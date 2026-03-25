const PHONE_NUMBER = "917592899202";

const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
    {/* Call Button */}
    <a
      href={`tel:+${PHONE_NUMBER}`}
      aria-label="Call us"
      className="group w-13 h-13 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(100,180,255,0.5)]"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        width: "52px",
        height: "52px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7ec8ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>

    {/* WhatsApp Button */}
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        width: "52px",
        height: "52px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="#25D366"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.469-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.027 1.19 1.212-4.903-.317-.502A13.274 13.274 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.3-9.953c-.4-.2-2.366-1.167-2.732-1.3-.366-.133-.633-.2-.9.2s-1.033 1.3-1.267 1.567c-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.224-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013a1.47 1.47 0 0 0-1.067.5c-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.034.955.413 1.7.66 2.282.845.958.305 1.832.262 2.52.159.769-.115 2.366-.967 2.7-1.9.333-.934.333-1.734.233-1.9-.1-.167-.367-.267-.767-.467z" />
      </svg>
    </a>
  </div>
);

export default WhatsAppButton;