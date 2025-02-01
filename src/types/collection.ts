export type Collection = {
  id: string;
  title: string;
  mainImage: {
    id: string;
    src: string;
    alt: string;
  };
  subImages: Array<{
    id: string;
    src: string;
    alt: string;
  }>;
  totalItems: number;
  artist: {
    id: string;
    name: string;
    avatar: string;
  };
};
