"use client";

import { motion } from "framer-motion";
import { Clock3, Eye, Handshake, ShieldCheck } from "lucide-react";

export function HomeTrust() {
  const items = [
    [ShieldCheck, "Trusted handling", "Responsible India-side coordination."],
    [Handshake, "One point of contact", "Multiple requirements, clearly organised."],
    [Eye, "Transparent updates", "Clear communication at each stage."],
    [Clock3, "Timely follow-up", "Prompt local coordination where needed."],
  ] as const;

  return (
    <section className="border-y border-ink/10 bg-paper-2">
      <div className="site-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`border-ink/10 px-2 py-7 sm:px-5 lg:px-6 ${
                index < 3 ? "lg:border-r" : ""
              } ${index < 2 ? "border-b sm:border-b" : ""} ${
                index === 2 ? "sm:border-b-0" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-sage-deep/20 bg-sage/15 text-sage-deep">
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-5 text-ink-soft">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
