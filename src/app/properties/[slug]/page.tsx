import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/data/properties";
import { DetailImage } from "@/components/ui/detail-image";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return properties.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  return {
    title: property ? property.title + " | شاپی" : "اقامتگاه پیدا نشد",
  };
}
export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();
  return (
    <main className="tour-page font-peyda">
      <nav aria-label="مسیر صفحه">
        <Link href="/">خانه</Link> /{" "}
        <span aria-current="page">{property.title}</span>
      </nav>
      <div className="tour-hero">
        <section className="tour-summary">
          <span className="tour-eyebrow">{property.location}</span>
          <h1>{property.title}</h1>
          <p className="tour-lead">
            اقامت در فضایی آرام، همراه خانواده و دوستان
          </p>
          <div className="tour-facts">
            {[
              ["نوع اقامتگاه", "ویلا"],
              ["طبقات", "۲ طبقه"],
              ["استخر", "دارد"],
              ["پارکینگ", "دارد"],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="tour-price">
            <span>قیمت آگهی</span>
            <p>
              <strong>{property.price}</strong> تومان
            </p>
          </div>
          <a href="#property-host" className="tour-primary">
            هماهنگی با میزبان
          </a>
          <p className="tour-note">
            قیمت نهایی و ظرفیت برای تاریخ مورد نظر با میزبان هماهنگ می‌شود.
          </p>
        </section>
        <DetailImage image={property.image} title={property.title} />
      </div>
      <div className="tour-body">
        <div className="tour-sections">
          <section className="tour-panel">
            <h2>درباره اقامتگاه</h2>
            <p>
              ویلایی در جواهردشت گیلان برای اقامت و استراحت در کنار خانواده. این
              آگهی دارای استخر، پارکینگ و فضای مستقل است. امکانات دقیق و وضعیت
              دسترسی را پیش از رزرو با میزبان هماهنگ کنید.
            </p>
          </section>
          <section className="tour-panel">
            <h2>امکانات و ویژگی‌ها</h2>
            <ul className="tour-services">
              {["استخر", "پارکینگ", "ساختمان دو طبقه", "فضای مستقل"].map(
                (item) => (
                  <li key={item}>
                    <i className="icon icon-tick text-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </section>
          <section className="tour-panel">
            <h2>موقعیت و شرایط اقامت</h2>
            <p>{property.location}</p>
            <p>
              زمان ورود و خروج، تعداد مهمان‌ها، قوانین استفاده از استخر و شرایط
              لغو را پیش از نهایی‌کردن اقامت از میزبان بپرسید. نشانی دقیق پس از
              هماهنگی ارائه می‌شود.
            </p>
          </section>
        </div>
        <aside id="property-host" className="tour-panel tour-organizer">
          <span className="tour-eyebrow">میزبان اقامتگاه</span>
          <h2>علی محمدی</h2>
          <Link href="/profile/user-profile">مشاهده پروفایل میزبان</Link>
          <p>برای اطلاع از تاریخ‌های آزاد و شرایط اقامت پیام بفرستید.</p>
          <Link href="/account/chat" className="tour-primary">
            گفتگو با میزبان
          </Link>
        </aside>
      </div>
      <section>
        <div className="tour-section-heading">
          <h2>اقامتگاه‌های دیگر</h2>
        </div>
        <div className="tour-grid">
          {properties
            .filter((p) => p.slug !== slug)
            .map((p) => (
              <Link
                className="tour-card"
                href={`/properties/${p.slug}`}
                key={p.slug}
              >
                <img decoding="async" src={p.image} alt={p.title} loading="lazy" />
                <div>
                  <span className="tour-eyebrow">{p.location}</span>
                  <h3>{p.title}</h3>
                  <p>{p.price} تومان</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
