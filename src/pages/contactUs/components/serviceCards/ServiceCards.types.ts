interface Feature {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
  actionText: string;
}

export interface ServiceCardsProps {
  features: Feature[];
  sectionTitle: string;
}
