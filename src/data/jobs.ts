export type JobAd = {
  id: string;
  title: string;
  company: string;
  logo: string;
  category: string;
  location: string;
  employment: string;
  workplace: string;
  salary: string;
  summary: string;
  skills: string[];
};

/** Demo listings, with fictional employers; not live recruitment offers. */
export const jobAds: JobAd[] = [
  {
    id: "frontend-developer",
    title: "توسعه‌دهنده فرانت‌اند React",
    company: "توسعه نرم‌افزار هور",
    logo: "/assets/logo/employers/hoor.svg",
    category: "برنامه‌نویسی",
    location: "تهران",
    employment: "تمام‌وقت",
    workplace: "دورکاری",
    salary: "۴۵ تا ۶۰ میلیون تومان",
    summary:
      "برای توسعه رابط کاربری محصولات وب و ساخت تجربه‌ای سریع و دسترس‌پذیر، به تیم فنی هور بپیوندید.",
    skills: [
      "تسلط به React و TypeScript",
      "آشنایی با طراحی واکنش‌گرا و دسترس‌پذیری",
      "تجربه کار با Git و APIهای REST",
    ],
  },
  {
    id: "product-designer",
    title: "طراح محصول UI/UX",
    company: "استودیو طراحی مدار",
    logo: "/assets/logo/employers/madar.svg",
    category: "طراحی و گرافیک",
    location: "اصفهان",
    employment: "تمام‌وقت",
    workplace: "ترکیبی",
    salary: "۳۵ تا ۵۰ میلیون تومان",
    summary:
      "در طراحی مسیرهای کاربری، ساخت نمونه‌های تعاملی و بهبود تجربه محصولات دیجیتال با تیم مدار همکاری کنید.",
    skills: [
      "تسلط به Figma و طراحی کامپوننت",
      "آشنایی با تحقیق کاربر و آزمون کاربردپذیری",
      "توانایی مستندسازی و ارائه تصمیم‌های طراحی",
    ],
  },
  {
    id: "digital-marketer",
    title: "کارشناس دیجیتال مارکتینگ",
    company: "رسانه آوان",
    logo: "/assets/logo/employers/avan.svg",
    category: "بازاریابی و فروش",
    location: "شیراز",
    employment: "تمام‌وقت",
    workplace: "حضوری",
    salary: "۲۵ تا ۳۵ میلیون تومان",
    summary:
      "برای برنامه‌ریزی کمپین‌ها، تحلیل عملکرد کانال‌های دیجیتال و رشد مخاطبان به تیم بازاریابی آوان بپیوندید.",
    skills: [
      "آشنایی با تحلیل داده و گزارش کمپین",
      "تجربه مدیریت شبکه‌های اجتماعی",
      "آشنایی با اصول SEO و بازاریابی محتوایی",
    ],
  },
  {
    id: "network",
    title: "متخصص شبکه و زیرساخت IT",
    company: "فناوری زیرساخت سپهر",
    logo: "/assets/logo/employers/sepehr.svg",
    category: "فناوری اطلاعات",
    location: "تهران",
    employment: "تمام‌وقت",
    workplace: "حضوری",
    salary: "۴۰ تا ۵۵ میلیون تومان",
    summary:
      "در نگهداری شبکه، پایش سرویس‌ها و بهبود پایداری زیرساخت‌های سازمانی با سپهر همکاری کنید.",
    skills: [
      "آشنایی با شبکه‌های TCP/IP و تجهیزات شبکه",
      "تجربه مدیریت سرورهای Linux",
      "توانایی عیب‌یابی و مستندسازی زیرساخت",
    ],
  },
  {
    id: "content-writer",
    title: "نویسنده و کارشناس تولید محتوا",
    company: "نشر دیجیتال واژه",
    logo: "/assets/logo/employers/vajeh.svg",
    category: "محتوا و ترجمه",
    location: "مشهد",
    employment: "پاره‌وقت",
    workplace: "دورکاری",
    salary: "۱۵ تا ۲۲ میلیون تومان",
    summary:
      "برای نوشتن محتوای آموزشی و مقاله‌های کاربردی فارسی، به تیم تحریریه واژه ملحق شوید.",
    skills: [
      "نگارش و ویرایش روان فارسی",
      "توانایی تحقیق و ارجاع به منابع معتبر",
      "آشنایی با اصول تولید محتوای وب",
    ],
  },
  {
    id: "accountant",
    title: "حسابدار مالی",
    company: "بازرگانی نیکان",
    logo: "/assets/logo/employers/nikan.svg",
    category: "مالی و حسابداری",
    location: "کرج",
    employment: "تمام‌وقت",
    workplace: "حضوری",
    salary: "۲۵ تا ۳۸ میلیون تومان",
    summary:
      "برای ثبت اسناد، تهیه گزارش‌های مالی و رسیدگی به حساب‌های روزانه با واحد مالی نیکان همکاری کنید.",
    skills: [
      "آشنایی با نرم‌افزارهای حسابداری",
      "تسلط به Excel و تهیه گزارش",
      "دقت در ثبت اسناد و پیگیری مغایرت‌ها",
    ],
  },
  {
    id: "backend-developer",
    title: "توسعه‌دهنده بک‌اند Node.js",
    company: "توسعه نرم‌افزار هور",
    logo: "/assets/logo/employers/hoor.svg",
    category: "برنامه‌نویسی",
    location: "تهران",
    employment: "تمام‌وقت",
    workplace: "ترکیبی",
    salary: "۵۰ تا ۷۰ میلیون تومان",
    summary:
      "در طراحی API، توسعه سرویس‌های سمت سرور و بهینه‌سازی پایگاه داده محصولات هور نقش داشته باشید.",
    skills: [
      "تسلط به Node.js و TypeScript",
      "تجربه کار با PostgreSQL",
      "آشنایی با تست و امنیت API",
    ],
  },
  {
    id: "customer-support",
    title: "کارشناس پشتیبانی مشتریان",
    company: "خدمات آنلاین پیوند",
    logo: "/assets/logo/employers/peyvand.svg",
    category: "پشتیبانی مشتریان",
    location: "شیراز",
    employment: "تمام‌وقت",
    workplace: "دورکاری",
    salary: "۲۰ تا ۲۸ میلیون تومان",
    summary:
      "برای پاسخ‌گویی به پرسش‌ها، پیگیری درخواست‌ها و بهتر کردن تجربه مشتریان به پیوند بپیوندید.",
    skills: [
      "مهارت گفت‌وگو و ارتباط نوشتاری",
      "صبوری و توانایی حل مسئله",
      "آشنایی با ابزارهای ثبت و پیگیری درخواست",
    ],
  },
  {
    id: "graphic-designer",
    title: "طراح گرافیک و هویت بصری",
    company: "استودیو طراحی مدار",
    logo: "/assets/logo/employers/madar.svg",
    category: "طراحی و گرافیک",
    location: "اصفهان",
    employment: "پاره‌وقت",
    workplace: "ترکیبی",
    salary: "۲۰ تا ۳۰ میلیون تومان",
    summary:
      "برای طراحی هویت بصری، محتوای گرافیکی و اقلام تبلیغاتی برندها با تیم خلاق مدار همراه شوید.",
    skills: [
      "تسلط به Illustrator و Photoshop",
      "آشنایی با تایپوگرافی و ترکیب‌بندی",
      "ارائه نمونه‌کارهای مرتبط",
    ],
  },
  {
    id: "sales-specialist",
    title: "کارشناس فروش سازمانی",
    company: "راهکارهای کسب‌وکار رسا",
    logo: "/assets/logo/employers/rasa.svg",
    category: "بازاریابی و فروش",
    location: "مشهد",
    employment: "تمام‌وقت",
    workplace: "حضوری",
    salary: "حقوق توافقی + پورسانت",
    summary:
      "در شناسایی مشتریان سازمانی، ارائه راهکار و پیگیری مذاکرات فروش با رسا همکاری کنید.",
    skills: [
      "توانایی مذاکره و ارائه محصول",
      "تجربه پیگیری فرایند فروش",
      "آشنایی با ابزارهای CRM",
    ],
  },
  {
    id: "data-analyst",
    title: "تحلیلگر داده",
    company: "داده‌پردازان بینش",
    logo: "/assets/logo/employers/binesh.svg",
    category: "فناوری اطلاعات",
    location: "تهران",
    employment: "تمام‌وقت",
    workplace: "ترکیبی",
    salary: "۴۰ تا ۵۵ میلیون تومان",
    summary:
      "با تحلیل داده‌ها و ساخت داشبوردهای کاربردی، به تصمیم‌گیری دقیق‌تر تیم‌های محصول و کسب‌وکار کمک کنید.",
    skills: [
      "تسلط به SQL و تحلیل داده",
      "آشنایی با Python یا ابزارهای هوش تجاری",
      "توانایی ارائه روشن یافته‌های تحلیلی",
    ],
  },
  {
    id: "frontend-intern",
    title: "کارآموز برنامه‌نویسی وب",
    company: "آکادمی فناوری جوانه",
    logo: "/assets/logo/employers/javaneh.svg",
    category: "برنامه‌نویسی",
    location: "کرج",
    employment: "کارآموزی",
    workplace: "حضوری",
    salary: "کمک‌هزینه توافقی",
    summary:
      "در کنار راهنمای فنی، روی پروژه‌های کوچک وب کار کنید و مهارت‌های توسعه رابط کاربری خود را گسترش دهید.",
    skills: [
      "آشنایی مقدماتی با HTML، CSS و JavaScript",
      "علاقه به یادگیری و کار تیمی",
      "امکان همکاری حداقل سه روز در هفته",
    ],
  },
];

export const jobHref = (id: string) => `/inner-ads/inner-hire-ad?job=${id}`;
