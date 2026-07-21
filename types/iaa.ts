export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface PostDate {
  day: string;
  month: string;
}

export interface IaaPost {
  title: string;
  href: string;
  image: string;
  alt: string;
  excerpt?: string;
  date?: PostDate;
}
