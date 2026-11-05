import { SITE, SERVICES, PROJECTS } from "@/lib/site";
export default function sitemap() {
  const pages = ["", "/about", "/services", "/solutions", "/projects", "/technologies", "/how-we-work", "/contact", "/start-project", "/privacy-policy", "/terms-and-conditions"];
  const all = [...pages, ...SERVICES.map((s) => `/services/${s.slug}`), ...PROJECTS.map((p) => `/projects/${p.slug}`)];
  return all.map((p) => ({ url: SITE.url + p, lastModified: new Date() }));
}
