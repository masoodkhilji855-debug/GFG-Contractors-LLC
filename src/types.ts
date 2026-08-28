export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  imageUrl: string;
  iconName: string;
  emergencyAvailable: boolean;
  estPrice: string;
  estTime: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  serviceCategory: string;
  comment: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  author: string;
  imageUrl: string;
  category: string;
  fullContent: string[];
}

export interface QuoteRequestData {
  serviceType: string;
  urgency: string;
  propertyType: string;
  address: string;
  zipCode: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
  projectType: string;
  address: string;
  description: string;
}
