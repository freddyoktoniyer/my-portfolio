import type { NavigationItem, SocialLink } from "@/types/portfolio";
import { profile } from "@/data/profile";

export const navigation: NavigationItem[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "engineering", label: "Engineering", href: "/#engineering" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "in/freddy-oktoniyer-s-9b3408182",
    href: profile.linkedin,
    external: true,
  },
];
