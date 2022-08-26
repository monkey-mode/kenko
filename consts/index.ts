import { ColumnType, RowsType, ServiceType, PriceType } from "../types";

export const servicesList: ServiceType[] = [
  {
    name: "Body Skin Care",
    image: "/services/BodyScrub.jpg",
    subService: [],
  },
  {
    name: "Facial Treatments",
    image: "/services/FacialTreatments.jpg",
    subService: [],
  },
  {
    name: "Massage",
    image: "/services/Massage.jpg",
    subService: [
      {
        en: "Thai balm Massage",
        th: "นวดแผนไทยยาหม่อง",
        img: "/massage-menu/balm-massage.jpg",
        price: [
          { period: "1 Hour", price: "350 THB" },
          { period: "1.5 Hours", price: "450 THB" },
          { period: "2 Hours", price: "600 THB" },
        ],
      },
      {
        en: "Aromatherapy Massage",
        th: "นวดน้ำมันอโรม่า",
        img: "/massage-menu/aromatherapy-massage.jpg",
        price: [
          { period: "1 Hour", price: "600 THB" },
          { period: "1.5 Hours", price: "800 THB" },
          { period: "2 Hours", price: "1000 THB" },
        ],
      },
      {
        en: "Aloe vera masage",
        th: "นวดเจลว่านหางจรเข้",
        img: "/massage-menu/aloe-vera-masage.jpg",
        price: [
          { period: "1 Hour", price: "600 THB" },
          { period: "1.5 Hours", price: "800 THB" },
          { period: "2 Hours", price: "1000 THB" },
        ],
      },
      {
        en: "Foot massage",
        th: "นวดเท้า",
        img: "/massage-menu/foot-massage.jpg",
        price: [
          { period: "1 Hour", price: "300 THB" },
          { period: "1.5 Hours", price: "400 THB" },
          { period: "2 Hours", price: "500 THB" },
        ],
      },
      {
        en: "Herbal compress massage",
        th: "นวดประคบสมุนไพร",
        img: "/massage-menu/herbal-compress-massage.jpg",
        price: [
          { period: "1.5 Hours", price: "1000 THB" },
          { period: "2 Hours", price: "1300 THB" },
        ],
      },
      {
        en: "Hot stone massage",
        th: "นวดหินร้อน",
        img: "/massage-menu/hot-stone-massage.jpg",
        price: [
          { period: "1.5 Hours", price: "1200 THB" },
          { period: "2 Hours", price: "1500 THB" },
        ],
      },
    ],
  },
  {
    name: "Wax",
    image: "/services/Wax.jpg",
    subService: [
      {
        en: "Bikini Waxing",
        th: "นวดแผนไทยยาหม่อง",
        img: "/massage-menu/balm-massage.jpg",
        price: [
          { period: "1 Hour", price: "350 THB" },
          { period: "1.5 Hours", price: "450 THB" },
          { period: "2 Hours", price: "600 THB" },
        ],
      },
      {
        en: "Hollywood Waxing",
        th: "นวดน้ำมันอโรม่า",
        img: "/massage-menu/aromatherapy-massage.jpg",
        price: [
          { period: "1 Hour", price: "600 THB" },
          { period: "1.5 Hours", price: "800 THB" },
          { period: "2 Hours", price: "1000 THB" },
        ],
      },
      {
        en: "Full Arms Waxing",
        th: "นวดเจลว่านหางจรเข้",
        img: "/massage-menu/aloe-vera-masage.jpg",
        price: [
          { period: "1 Hour", price: "600 THB" },
          { period: "1.5 Hours", price: "800 THB" },
          { period: "2 Hours", price: "1000 THB" },
        ],
      },
      {
        en: "Full Legs Waxing",
        th: "นวดเท้า",
        img: "/massage-menu/foot-massage.jpg",
        price: [
          { period: "1 Hour", price: "300 THB" },
          { period: "1.5 Hours", price: "400 THB" },
          { period: "2 Hours", price: "500 THB" },
        ],
      },
    ],
  },
];

export const columns: ColumnType[] = [
  {
    key: "period",
    label: "PERIOD",
  },
  {
    key: "price",
    label: "PRICE",
  },
];
export const rows: RowsType[] = [
  {
    key: "1",
    name: "1 Hour",
    price: "350 THB",
  },
  {
    key: "2",
    name: "1.5 Hours",
    price: "450 THB",
  },
  {
    key: "3",
    name: "2 Hours",
    price: "600 THB",
  },
];
// [
//   "Body Skin Care",
//   "Facail Treatment",
//   "Massage",
//   "Parafin",
//   "Gigi Waxing",
// ];
