"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "../../data/services";

const mobileLinks = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Why NRI Sarthi", "/why-nri-sarthi"],
  ["How We Work", "/how-we-work"],
  ["NRI Property Guide", "/nri-property-guide"],
  ["Contact", "/contact"],
] as const;

const desktopLinks = [
  ["About", "/about"],
  ["Why NRI Sarthi", "/why-nri-sarthi"],
  ["How We Work", "/how-we-work"],
  ["Guide", "/nri-property-guide"],
] as const;

function NavLink({
  label,
  href,
  active,
  scrolled,
}: {
  label: string;
  href: string;
  active: boolean;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      data-active={active}
      className={`group relative flex items-center py-2 text-sm font-semibold tracking-tight transition-colors duration-300 ${
        scrolled
          ? "text-ink/70 hover:text-ink"
          : "text-white/85 hover:text-white"
      }`}
    >
      <span>{label}</span>

      {/* Single underline */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-champagne transition-transform duration-300 ${
          active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      {/* Active dot */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-champagne"
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const headerHeight = useTransform(
    scrollY,
    [0, 80],
    [72, 62]
  );

  const logoHeight = useTransform(
    scrollY,
    [0, 80],
    [42, 36]
  );

  useEffect(() => {
    return scrollY.on("change", (value) => {
      const next = value > 24;

      setScrolled((current) => {
        if (current === next) {
          return current;
        }

        return next;
      });
    });
  }, [scrollY]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main Navbar */}
      <motion.div
        style={{ height: headerHeight }}
        className={`relative flex items-center transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/10 bg-white shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="site-container flex h-full w-full items-center justify-between gap-5">
          {/* Logo */}
          <Link
            href="/"
            aria-label="NRI Sarthi home"
            onClick={() => setMobileOpen(false)}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <motion.div
              style={{ height: logoHeight }}
              className="relative w-auto shrink-0"
            >
              <Image
                src="/images/nri-sarthi-logo.png"
                alt="NRI Sarthi logo"
                width={84}
                height={64}
                priority
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            <span className="hidden flex-col leading-none sm:flex">
              <span
                className={`font-display text-lg font-semibold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                NRI SARTHI
              </span>

              <span
                className={`mt-1 text-xs font-medium uppercase tracking-widest transition-colors duration-500 ${
                  scrolled
                    ? "text-ink-soft"
                    : "text-white/70"
                }`}
              >
                Property & Asset Advisors
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary navigation"
          >
            {/* About */}
            {desktopLinks.slice(0, 1).map(([label, href]) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                active={isActive(href)}
                scrolled={scrolled}
              />
            ))}

            {/* Services */}
            <div
              className="group relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`relative inline-flex items-center gap-1 py-2 text-sm font-semibold tracking-tight transition-colors duration-300 ${
                  scrolled
                    ? isActive("/services")
                      ? "text-ink"
                      : "text-ink/70 hover:text-ink"
                    : isActive("/services")
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                }`}
              >
                <span>Services</span>

                <ChevronDown
                  size={13}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />

                {/* Single underline */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-champagne transition-transform duration-300 ${
                    isActive("/services")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                {/* Active dot */}
                {isActive("/services") && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-champagne"
                  />
                )}
              </Link>

              {/* Services Dropdown */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="absolute left-1/2 top-full mt-2 w-screen max-w-3xl -translate-x-1/2"
                  >
                    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ivory p-2.5 shadow-2xl">
                      {/* Dropdown Header */}
                      <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3.5">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                            What we handle
                          </span>

                          <p className="mt-0.5 font-display text-xl font-medium text-ink">
                            India-side advisory
                          </p>
                        </div>

                        <Link
                          href="/services"
                          aria-label="View all services"
                          className="group flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-sage-deep transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-white"
                        >
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.6}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      </div>

                      {/* Services */}
                      <div className="grid grid-cols-2 gap-1 p-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group/item flex min-w-0 items-start gap-3 rounded-xl p-3.5 transition-all duration-300 hover:bg-paper-2"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne/10 text-xs font-bold text-champagne transition-colors duration-300 group-hover/item:bg-champagne group-hover/item:text-white">
                              {service.number}
                            </span>

                            <span className="min-w-0">
                              <strong className="block font-display text-base font-medium leading-tight text-ink">
                                {service.shortTitle}
                              </strong>

                              <span className="mt-1 block line-clamp-2 text-xs leading-5 text-ink-soft">
                                {service.description}
                              </span>

                              <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-sage-deep transition-all duration-300 group-hover/item:translate-x-1">
                                Explore

                                <ArrowUpRight
                                  size={11}
                                  strokeWidth={1.7}
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Desktop Links */}
            {desktopLinks.slice(1).map(([label, href]) => (
              <NavLink
                key={href}
                label={label}
                href={href}
                active={isActive(href)}
                scrolled={scrolled}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
<Link
  href="/contact"
  className={`group/btn relative hidden items-center justify-center gap-2.5 overflow-hidden rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-500 ease-out hover:-translate-y-0.5 lg:inline-flex ${
    scrolled
      ? "border-ink bg-ink text-ivory shadow-lg hover:border-champagne hover:bg-champagne"
      : "border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-md hover:border-champagne hover:bg-champagne hover:text-ink"
  }`}
>
  {/* Premium shine sweep */}
  <span
    aria-hidden="true"
    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
  />

  {/* Button Content */}
  <span className="relative">
    Request a Consultation
  </span>

  <ArrowUpRight
    size={14}
    strokeWidth={1.7}
    aria-hidden="true"
    className="relative transition-transform duration-500 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5"
  />
</Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 lg:hidden ${
              scrolled
                ? "border-ink/15 bg-white text-ink shadow-sm hover:border-champagne"
                : "border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-md hover:border-champagne"
            }`}
          >
            {mobileOpen ? (
              <X size={19} strokeWidth={1.7} />
            ) : (
              <Menu size={19} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="absolute inset-x-3 top-16 overflow-hidden rounded-2xl border border-ink/10 bg-ivory p-2.5 text-ink shadow-2xl lg:hidden"
          >
            <div className="border-b border-ink/10 px-4 py-3.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage-deep">
                Navigation
              </span>

              <p className="mt-0.5 font-display text-xl font-medium text-ink">
                NRI Sarthi
              </p>
            </div>

            <div className="grid gap-1 py-2">
              {mobileLinks.map(([label, href]) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-paper-2 text-ink"
                        : "text-ink/75 hover:bg-paper-2 hover:text-ink"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                          active
                            ? "bg-champagne"
                            : "bg-ink/20 group-hover:bg-champagne"
                        }`}
                      />

                      {label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="text-sage-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="group mt-1 flex h-11 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-ivory transition-all duration-300 hover:bg-champagne"
            >
              <span>Request a Consultation</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}