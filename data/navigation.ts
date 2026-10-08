import type { NavigationItem, SocialLink } from "@/types/portfolio";
import { profile } from "@/data/profile";

export const navigation: NavigationItem[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "approach", label: "Approach", href: "/#strengths" },
  { id: "case-studies", label: "Case Studies", href: "/#case-studies" },
  { id: "stack", label: "Stack", href: "/#stack" },
  { id: "experience", label: "Experience", href: "/#experience" },
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
