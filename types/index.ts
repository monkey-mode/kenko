export type ServiceType = {
  name: string;
  image: string;
  subService: SubServiceType[];
};

export type SubServiceType = {
  en: string;
  th: string;
  img: string;
  price: PriceType[];
};

export type ColumnType = {
  key: string;
  label: string;
};

export type RowsType = {
  key: string;
  name: string;
  price: string;
};

export type PriceType = {
  period: string;
  price: string;
};
