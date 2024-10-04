export interface BraceletCustomizerProps {
    ratingCount: number;
    productTitle: string;
    isOutOfStock: boolean;
    currentPrice: string;
    originalPrice: string;
    viewersCount: number;
    beadOptions: { label: string; value: number }[];
    colorAndSizeOptions: { label: string; value: string }[];
    engravingDetails: string[];
  }