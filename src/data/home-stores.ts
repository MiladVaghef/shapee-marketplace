export type FeaturedStore = {
  id: string;
  name: string;
  category: string;
  city: string;
  rating: string;
  cover: string;
  logo: string;
  badge: string;
  count?: string;
  products?: string[];
  description?: string;
};
const example = "/assets/images/example/";
const studio = "/assets/images/products/";
const home = "/assets/images/home/";

export const topShops: FeaturedStore[] = [
  {
    id: "max-shoes",
    name: "مکس شوز",
    category: "کفش و کتانی",
    city: "تهران",
    rating: "۴٫۸",
    cover: example + "shoes-background.jpg",
    logo: "/assets/images/example/shoe-logo.avif",
    badge: "پرفروش",
    count: "۹۳",
    products: [
      example + "square-shoe-5.jpg",
      example + "square-shoe-2.webp",
      example + "square-shoe-3.avif",
    ],
  },
  {
    id: "boutique-mod",
    name: "بوتیک مد",
    category: "پوشاک و اکسسوری",
    city: "اصفهان",
    rating: "۴٫۷",
    cover: home + "fashion.webp",
    logo: "/assets/images/home/logos/boutique-mod.svg",
    badge: "کالکشن جدید",
    count: "۱۲۷",
    products: [
      studio + "studio-tshirt.webp",
      example + "tshirt.jpg",
      studio + "studio-backpack.webp",
    ],
  },
  {
    id: "mobile-seven",
    name: "موبایل سون",
    category: "گوشی و لوازم جانبی",
    city: "شیراز",
    rating: "۴٫۶",
    cover: example + "iphone-banner.jpg",
    logo: "/assets/images/home/logos/mobile-seven.svg",
    badge: "منتخب دیجیتال",
    count: "۱۵۲",
    products: [
      example + "black-iphone.jpg",
      example + "iPhone-16-Concept-R1.png",
      studio + "studio-watch.webp",
    ],
  },
  {
    id: "ketabro",
    name: "کتابرو",
    category: "کتاب و لوازم مطالعه",
    city: "تهران",
    rating: "۴٫۹",
    cover: home + "books.webp",
    logo: "/assets/images/home/logos/ketabro.svg",
    badge: "انتخاب اهل مطالعه",
    count: "۲۱۴",
    products: [
      home + "books.webp",
      studio + "studio-lamp.webp",
      studio + "studio-backpack.webp",
    ],
  },
  {
    id: "decor-khaneh",
    name: "دکورخانه",
    category: "دکوراسیون و چیدمان",
    city: "مشهد",
    rating: "۴٫۸",
    cover: home + "shops/decor-khaneh.webp",
    logo: "/assets/images/home/logos/decor-khaneh.svg",
    badge: "خانه‌ای متفاوت",
    count: "۸۶",
    products: [
      studio + "studio-vase.webp",
      studio + "studio-lamp.webp",
      example + "decorative.jpg",
    ],
  },
  {
    id: "techno-center",
    name: "تکنو سنتر",
    category: "صوتی و تجهیزات گیمینگ",
    city: "تبریز",
    rating: "۴٫۵",
    cover: home + "shops/techno-center.webp",
    logo: "/assets/images/home/logos/techno-center.svg",
    badge: "پیشنهاد ویژه",
    count: "۱۷۳",
    products: [
      studio + "studio-headphones.webp",
      studio + "studio-controller.webp",
      example + "headset.jpg",
    ],
  },
  {
    id: "sport-zone",
    name: "اسپرت زون",
    category: "پوشاک و تجهیزات روزمره",
    city: "کرج",
    rating: "۴٫۷",
    cover: home + "shops/sport-zone.webp",
    logo: "/assets/images/home/logos/sport-zone.svg",
    badge: "همراه حرکت",
    count: "۱۰۴",
    products: [
      studio + "studio-backpack.webp",
      studio + "studio-tshirt.webp",
      example + "square-shoe-4.jpg",
    ],
  },
];

export const topBrands: FeaturedStore[] = [
  {
    id: "nava-coffee",
    name: "قهوه نوا",
    category: "قهوه تخصصی",
    city: "تبریز",
    rating: "۴٫۹",
    cover: home + "shops/nava-coffee.webp",
    logo: "/assets/images/home/logos/nava-coffee.svg",
    badge: "رُست تازه",
    description:
      "دانه‌های منتخب و رُست تازه؛ از اسپرسوی روزانه تا قهوه دمی با عطر ماندگار.",
  },
  {
    id: "rouge",
    name: "روژ",
    category: "عطر و رایحه",
    city: "تهران",
    rating: "۴٫۸",
    cover: home + "shops/rouge.webp",
    logo: "/assets/images/home/logos/rouge.svg",
    badge: "رایحه منتخب",
    description:
      "رایحه‌های گرم، خنک و چوبی در شیشه‌هایی مینیمال؛ انتخابی برای هر سلیقه و فصل.",
  },
  {
    id: "ava",
    name: "آوا",
    category: "هدفون و تجهیزات صوتی",
    city: "شیراز",
    rating: "۴٫۷",
    cover: home + "shops/ava.webp",
    logo: "/assets/images/home/logos/ava.svg",
    badge: "صدای شفاف",
    description:
      "هدفون‌های بی‌سیم و لوازم صوتی با طراحی راحت برای موسیقی، کار و سفر.",
  },
  {
    id: "loom",
    name: "لوم",
    category: "روشنایی و دکور",
    city: "اصفهان",
    rating: "۴٫۸",
    cover: home + "shops/loom.webp",
    logo: "/assets/images/home/logos/loom.svg",
    badge: "طراحی مینیمال",
    description:
      "چراغ‌ها و اکسسوری‌های ساده و کاربردی برای ساختن گوشه‌ای گرم و روشن در خانه.",
  },
  {
    id: "zamano",
    name: "زمانو",
    category: "ساعت و ابزار هوشمند",
    city: "مشهد",
    rating: "۴٫۶",
    cover: home + "shops/zamano.webp",
    logo: "/assets/images/home/logos/zamano.svg",
    badge: "همراه هوشمند",
    description:
      "ساعت‌های هوشمند با ظاهر مدرن؛ همراه فعالیت‌های روزانه، ورزش و برنامه‌های شما.",
  },
  {
    id: "rahro",
    name: "رهرو",
    category: "کیف و کوله‌پشتی",
    city: "کرج",
    rating: "۴٫۹",
    cover: home + "shops/rahro.webp",
    logo: "/assets/images/home/logos/rahro.svg",
    badge: "ساخته برای سفر",
    description:
      "کوله‌های سبک و جادار با رنگ‌های طبیعی؛ برای مسیر دانشگاه، محل کار و سفرهای کوتاه.",
  },
];
