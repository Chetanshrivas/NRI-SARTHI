"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { services } from "../../data/services";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send enquiry."
        );
      }

      toast.success("Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send enquiry."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t-2 border-ivory bg-ivory px-7 py-8 sm:px-9 sm:py-9 lg:px-10 lg:py-10"
    >
      <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Full name

          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink">
          Email

          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink">
          Phone

          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink">
          Country of residence

          <input
            name="country"
            type="text"
            autoComplete="country-name"
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
          Service

          <select
            name="service"
            defaultValue=""
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          >
            <option value="">Select a service</option>

            {services.map((service) => (
              <option
                key={service.slug}
                value={service.title}
              >
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
          Property / matter location

          <input
            name="location"
            type="text"
            className="h-13 w-full border border-ink/10 bg-paper-2 px-4 text-sm font-normal text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
          Tell us briefly about the matter

          <textarea
            required
            name="message"
            rows={6}
            className="w-full resize-y border border-ink/10 bg-paper-2 px-4 py-3 text-sm font-normal leading-7 text-ink outline-none transition-colors duration-200 focus:border-champagne"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <LoaderCircle
              size={16}
              className="animate-spin"
              aria-hidden="true"
            />
            Sending
          </>
        ) : (
          <>
            Send enquiry
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
}