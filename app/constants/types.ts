export interface FooterSection {
  id: string;
  title: string;
  links: {
    id: string;
    label: string;
    href?: string;
  }[];
}
