import { ServiceType } from "../types";

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
      { en: "Thai balm Massage", th: "นวดแผนไทยยาหม่อง" },
      { en: "Aromatherapy Massage", th: "นวดน้ำมันอโรม่า" },
      { en: "Aloe vera masage", th: "นวดเจลว่านหางจรเข้" },
      { en: "Foot massage", th: "นวดเท้า" },
      { en: "Herbal compress massage", th: "นวดประคบสมุนไพร" },
      { en: "Hot stone massage", th: "นวดหินร้อน" },
    ],
  },
  {
    name: "Wax",
    image: "/services/Wax.jpg",
    subService: [],
  },
];

export const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];
export const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];
// [
//   "Body Skin Care",
//   "Facail Treatment",
//   "Massage",
//   "Parafin",
//   "Gigi Waxing",
// ];
