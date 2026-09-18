import type { MetadataRoute } from "next";
import { services } from "../data/services";
import { site } from "../data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/services", "/why-nri-sarthi", "/how-we-work", "/nri-property-guide", "/contact"];
  return [...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "/" ? 1 : .8 })), ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .7 }))];
}
