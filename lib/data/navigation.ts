export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Technologies", href: "/technologies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServicesLinks: NavLink[] = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "AI & Machine Learning", href: "/services/ai-ml-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Data Science & Analytics", href: "/services/data-science" },
  { label: "Technical Project Guidance", href: "/services/technical-project-guidance" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Project Portfolio", href: "/projects" },
  { label: "Technology Stack", href: "/technologies" },
  { label: "Start Your Project", href: "/start-project" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const companyDetails = {
  name: "Vectryx Technologies",
  positioning: "Engineering Digital Excellence.",
  tagline: "Build Smarter. Automate Better. Scale Faster.",
  email: "inquiries@vectryx.com",
  github: "https://github.com/subhamoy05/Vectryx",
  linkedin: "https://linkedin.com/company/vectryx-technologies",
  address: "India",
  foundedYear: 2024,
};
