export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  number: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string; // ISO date string
  author: string;
  category: string;
  readTime: number; // minutes
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
