export interface CustomerSupportOption {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
  actionText: string;
}

export interface TrackingReturnCardProps {
  customerSupportOptions: CustomerSupportOption[];
}
