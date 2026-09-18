"use client";

import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Toaster
        position="top-right"
        closeButton
        toastOptions={{
          classNames: {
            toast:
              "bg-ink text-white border border-white/10 shadow-2xl rounded-xl px-5 py-4",
            title: "text-base font-semibold text-white",
            description: "mt-1 text-sm leading-5 text-white/70",
            closeButton:
              "bg-transparent border-white/15 text-white/70 hover:bg-white/10 hover:text-white",
            success:
              "bg-ink text-white border-white/10",
            error:
              "bg-ink text-white border-white/10",
            warning:
              "bg-ink text-white border-white/10",
            info:
              "bg-ink text-white border-white/10",
          },
        }}
      />
    </>
  );
}