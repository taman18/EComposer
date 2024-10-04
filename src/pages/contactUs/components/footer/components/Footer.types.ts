export interface FooterCopyrightProps {
  copyrightText: string;
  imageUrl: string;
}

interface ContactItem {
  id: number;
  type: string;
  content: string;
}

export interface ContactItemsProps {
  links: ContactItem[];
}

interface LinkItem {
  id: number;
  title: string;
}

export interface NavigationLinksProps {
  links: LinkItem[];
  sectionTitle: string;
}

interface ContactOption {
  id: number;
  icon: string;
  type: string;
  value: string;
}

export interface CustomerSupportProps {
  contactOptions: ContactOption[];
}
