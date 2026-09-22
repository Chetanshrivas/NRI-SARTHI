"use client";

import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/919899220695";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let messageTimer: ReturnType<typeof setTimeout> | null = null;

    const clearMessageTimer = () => {
      if (messageTimer) {
        clearTimeout(messageTimer);
        messageTimer = null;
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;

      if (!isScrolled) {
        clearMessageTimer();
        setVisible(false);
        setShowMessage(false);
        return;
      }

      setVisible(true);

      if (!messageTimer && !showMessage) {
        messageTimer = setTimeout(() => {
          setShowMessage(true);
          messageTimer = null;
        }, 5000);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      clearMessageTimer();

      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMessage]);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* WhatsApp message */}
      <div
        role="status"
        aria-live="polite"
        className={`absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-full border border-white/15 bg-ink px-3.5 py-2 text-xs font-medium text-ivory shadow-xl backdrop-blur-md transition-all duration-500 sm:mb-4 sm:px-4 sm:py-2.5 sm:text-sm ${
          visible && showMessage
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <span className="relative z-10">Let's chat</span>

        <span
          aria-hidden="true"
          className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-white/15 bg-ink"
        />
      </div>

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NRI Sarthi on WhatsApp"
        title="Chat with NRI Sarthi on WhatsApp"
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-emerald-600 sm:h-16 sm:w-16 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-75 opacity-0"
        }`}
      >
        {/* Outer glow */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-emerald-400/35 opacity-80 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg"
        />

        {/* Glow ring */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full border border-emerald-300/40 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />

        {/* Inner border */}
        <span
          aria-hidden="true"
          className="absolute inset-1 rounded-full border border-white/20"
        />

        {/* WhatsApp icon */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
        >
          <path
            fill="currentColor"
            d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.59 4.39 1.72 6.26L3.1 28.8l6.7-1.75A12.72 12.72 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2Zm0 23.35c-2.1 0-4.16-.57-5.96-1.66l-.43-.26-3.98 1.04 1.06-3.88-.28-.45A10.48 10.48 0 1 1 16 26.55Z"
          />

          <path
            fill="currentColor"
            d="M21.1 18.24c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-1 .98-1 2.38s1.02 2.76 1.16 2.95c.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.11.55-.08 1.66-.68 1.89-1.34.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33Z"
          />
        </svg>

        {/* Hover highlight */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </a>
    </div>
  );
}