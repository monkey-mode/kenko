export type ServiceType = {
  name: string;
  image: string;
  subService: SubServiceType[];
};

export type SubServiceType = {
  en: string;
  th: string;
};
