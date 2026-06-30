export type HeroSection = {
  type: "hero";
  id: string;
  label: string;
  title: string;
  highlight?: string;
  subTitle?: string;
  image: string;
  buttonText?: string;
  secondaryButtonText?: string;
};

export type AboutSection = {
  type: "about";
  id: string;
  label: string;
  heading: string;
  description: string;
  image: string;
  buttonText?: string;
};

export type ServicesSection = {
  type: "services";
  id: string;
  label: string;
  heading: string;
  items: {
    image: string;
    title: string;
    description: string;
    buttonText?: string;
  }[];
};

export type GallerySection = {
  type: "gallery";
  id: string;
  heading: string;
  label: string;
  images: string[];
};

export type ContactSection = {
  type: "contact";
  id: string;
  label: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  buttonText?: string;
};

export type Section =
  | HeroSection
  | AboutSection
  | ServicesSection
  | GallerySection
  | ContactSection;
