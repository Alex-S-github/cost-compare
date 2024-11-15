export interface IProduct {
  weight: number;
  price: number;
  pricePerUnit?: number;
  isBestPrice?: boolean;
  description?: string;
  priceDifference?: number;
}
