import { SubServiceType } from "./../types/index";
import { ColumnType, RowsType, ServiceType, PriceType } from "../types";

export const servicesList: ServiceType[] = [
  {
    name: "Body Skin Care",
    image: "/services/BodyScrub.jpg",
  },
  {
    name: "Facial Treatments",
    image: "/services/FacialTreatments.jpg",
  },
  {
    name: "Massage",
    image: "/services/Massage.jpg",
  },
  {
    name: "Wax",
    image: "/services/Wax.jpg",
  },
];

export const massageService: SubServiceType[] = [
  {
    en: "Thai balm Massage",
    th: "นวดแผนไทยยาหม่อง",
    img: "/massage-menu/balm-massage.jpg",
    desc: `Thai Balm Massage implements traditional Thai massage
    strokes and using herbal balm to efficiently relief
    muscle soreness by the heating sensation.`,
    price: [
      { period: "60 MINS", price: "350 THB" },
      { period: "90 MINS", price: "450 THB" },
      { period: "120 MINS", price: "600 THB" },
    ],
  },
  {
    en: "Aromatherapy Massage",
    th: "นวดน้ำมันอโรม่า",
    img: "/massage-menu/aromatherapy-massage.jpg",
    desc: "Aromatherapy centers around holistic medicine that utilizes extracts from natural plants for health and wellbeing. Many massage therapists apply aromatic essential oils medicinally combined with their massage techniques to improve their client’s physical and emotional health.",
    price: [
      { period: "60 MINS", price: "600 THB" },
      { period: "90 MINS", price: "800 THB" },
      { period: "120 MINS", price: "1,000 THB" },
    ],
  },
  {
    en: "Aloe vera masage",
    th: "นวดเจลว่านหางจรเข้",
    img: "/massage-menu/aloe-vera-masage.jpg",
    desc: `Aloe Vera massage is a type of massage that uses Aloe Vera gel. 
    One of the most common uses of Aloe Vera massage is to treat a sunburn or any other skin irritations. 
    Aloe Vera gel has numerous benefits for your skin and can help heal a cut or a rash on the skin.`,
    price: [
      { period: "60 MINS", price: "600 THB" },
      { period: "90 MINS", price: "800 THB" },
      { period: "120 MINS", price: "1,000 THB" },
    ],
  },
  {
    en: "Foot massage",
    th: "นวดเท้า",
    img: "/massage-menu/foot-massage.jpg",
    desc: `A foot massage involves working on the feet with pressure, 
    either manually or with mechanical aids to promote relaxation and health. 
    A professional foot massage from a spa can be a treat, 
    but a do-it-yourself self-massage or simply a rubdown of your feet can also ease pain and help you relax.`,
    price: [
      { period: "60 MINS", price: "300 THB" },
      { period: "90 MINS", price: "400 THB" },
      { period: "120 MINS", price: "500 THB" },
    ],
  },
  {
    en: "Herbal compress massage",
    th: "นวดประคบสมุนไพร",
    img: "/massage-menu/herbal-compress-massage.jpg",
    desc: `Herbal compress massage, which originated in Thailand, 
    is the type of alternative therapy treatment which is applied on your soft tissues such as muscles and fascia to help you to relieve the stress, 
    improve your sleep, improve general well-being, promotes blood circulation, 
    stimulate the lymphatic system which helps to remove the waste products from your body and manage pain including non-specific lower back pain and neck and shoulder pains and aches.`,
    price: [
      { period: "90 MINS", price: "1,000 THB" },
      { period: "120 MINS", price: "1,300 THB" },
    ],
  },
  {
    en: "Hot stone massage",
    th: "นวดหินร้อน",
    img: "/massage-menu/hot-stone-massage.jpg",
    desc: `This type of massage involves the use and placement of basalt River rock on different points of the body. 
    The rocks are heated before use and the massage therapist can then apply deeper pressure to areas of concern without causing any discomfort.`,
    price: [
      { period: "90 MINS", price: "1,200 THB" },
      { period: "120 MINS", price: "1,500 THB" },
    ],
  },
];

export const waxService: SubServiceType[] = [
  {
    en: "Bikini Waxing",
    th: "บิกินี่ แว็กซ์",
    img: "/wax-menu/bikini-wax.jpg",
    icon: "https://img.icons8.com/ios-glyphs/45/ffffff/underwear.png",
    desc: "",
    price: [{ period: "", price: "1,500 THB" }],
  },
  {
    en: "Hollywood Waxing",
    th: "ฮอลลิวูด แว็กซ์",
    img: "/wax-menu/hollywood-wax.jpg",
    icon: "https://img.icons8.com/ios-glyphs/45/ffffff/swim-suit.png",
    desc: "",
    price: [{ period: "", price: "1,500 THB" }],
  },
  {
    en: "Full Arms Waxing",
    th: "แว็กซ์ ส่วนแขนทั้งหมด",
    img: "/wax-menu/arms-wax.jpg",
    icon: "https://img.icons8.com/ios-filled/45/ffffff/arm-massage-area.png",
    desc: "",
    price: [{ period: "", price: "1,000 THB" }],
  },
  {
    en: "Full Legs Waxing",
    th: "แว็กซ์ ส่วนขาทั้งหมด",
    icon: "https://img.icons8.com/ios-glyphs/45/ffffff/waxing.png",
    img: "/wax-menu/legs-wax.jpg",
    desc: "",
    price: [{ period: "", price: "1,200 THB" }],
  },
  {
    en: "Back Waxing",
    th: "แว็กซ์แผ่นหลัง",
    icon: "https://img.icons8.com/ios-filled/45/ffffff/back-massage-area.png",
    img: "/massage-menu/foot-massage.jpg",
    desc: "",
    price: [{ period: "", price: "1,200 THB" }],
  },
  {
    en: "Chest Waxing",
    th: "แว็กซ์หน้าอก",
    img: "/wax-menu/chest-wax.jpg",
    icon: "https://img.icons8.com/ios-filled/45/ffffff/torso.png",
    desc: "",
    price: [{ period: "", price: "1,200 THB" }],
  },
  {
    en: "Under Arms Waxing",
    th: "แว็กซ์ขนรักแร้",
    icon: "https://img.icons8.com/external-others-pike-picture/45/ffffff/external-Armpit-Hair-Removal-laser-others-pike-picture-2.png",
    img: "/wax-menu/under-arms-wax.jpg",
    desc: "",
    price: [{ period: "", price: "500 THB" }],
  },
  {
    en: "Face Waxing",
    th: "แว็กซ์ใบหน้า",
    img: "/massage-menu/foot-massage.jpg",
    icon: "https://img.icons8.com/ios-filled/50/000000/facepalm.png",
    desc: "",
    price: [{ period: "", price: "1,200 THB" }],
  },
  {
    en: "Eyebrow Waxing",
    th: "แว็กซ์ขนคิ้ว",
    icon: "https://img.icons8.com/plumpy/45/ffffff/eyebrow-piercing.png",
    img: "/wax-menu/eyebrow-wax.jpg",
    desc: "",
    price: [{ period: "", price: "400 THB" }],
  },
];
