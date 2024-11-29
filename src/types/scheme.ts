export interface Scheme {
  id: string;
  name: string;
  description: string;
  eligibilityCriteria: string[];
  benefits: string[];
  documents: string[];
  category: SchemeCategory;
  state?: string;
  central: boolean;
}

export type SchemeCategory = 
  | 'education'
  | 'healthcare'
  | 'employment'
  | 'housing'
  | 'financial'
  | 'disability'
  | 'women'
  | 'scheduled-caste'
  | 'scheduled-tribe';