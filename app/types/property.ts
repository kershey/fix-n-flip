export type PropertyType = 'Single Family' | 'Multi Family' | 'Townhouse';
export type PriceRange = 'Any' | '$100k - $200k' | '$200k - $300k' | '$300k+';
export type BedroomCount = 'Any' | '2+' | '3+' | '4+';
export type SortOption =
  | 'Potential ROI'
  | 'Price: Low to High'
  | 'Price: High to Low'
  | 'Recently Added';

export interface Property {
  id: number;
  title: string;
  type: PropertyType;
  price: number;
  afterRepairValue: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  estimatedROI: number;
  image: string;
  status: string;
  dateAdded: string;
}
