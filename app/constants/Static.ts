import { FooterSection } from "./types";

export const NavLInks = [
  "collection",
  "new",
  "forever Week",
  "plus size",
  "sustainability",
];

export const footerInfo: FooterSection[] = [
  {
    id: "about",
    title: "About forever",
    links: [
      { id: "collection", label: "Collection" },
      { id: "sustainability", label: "Sustainability" },
      { id: "privacy", label: "Privacy Policy" },
      { id: "support", label: "Support System" },
      { id: "terms", label: "Terms & Condition" },
      { id: "copyright", label: "Copyright Notice" },
    ],
  },
  {
    id: "help",
    title: "Help & Support",
    links: [
      { id: "order", label: "Order & Shopping" },
      { id: "refund", label: "Return & Refund" },
      { id: "faq", label: "FAQs" },
      { id: "contact", label: "Contact Us" },
    ],
  },
  {
    id: "join",
    title: "Join Up",
    links: [
      { id: "club", label: "Forever Club" },
      { id: "careers", label: "Careers" },
      { id: "visit", label: "Visit Us" },
    ],
  },
];
