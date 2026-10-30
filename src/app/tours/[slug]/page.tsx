import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tours, getTour } from "@/data/tours";
import { TourCard } from "@/components/tours/tour-card";
import { DetailImage } from "@/components/ui/detail-image";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return tours.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTour((await params).slug);
  return {
    title: tour ? tour.title + " | شاپی" : "تور پیدا نشد",
    description: tour?.description,
  };
}
export default async function TourPage({ params }: Props) {
  const tour = getTour((await params).slug);
  if (!tour) notFound();
  return (
    <main className="tour-page tour-detail font-peyda">
      <nav aria-label="مسیر صفحه">
        <Link href="/">خانه</Link>
        <span>/</span>
        <Link href="/inner-category/products-category?type=tours">تورها</Link>
        <span>/</span>
        <span aria-current="page">{tour.destination}</span>
      </nav>
      <div className="tour-hero">
        <section className="tour-summary">
          <span className="tour-eyebrow">تهران ← {tour.destination}</span>
          <h1>{tour.title}</h1>
          <p className="tour-lead">{tour.nights} برای کشف یک مقصد تازه</p>
          <div className="tour-facts">
            {[
              ["مدت سفر", tour.nights],
              ["اقامت", tour.hotel],
              ["رفت و برگشت", tour.transport],
              ["مبدأ", "تهران"],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="tour-price">
            <span>شروع قیمت برای هر نفر</span>
            <p>
              <strong>{tour.price}</strong> تومان
            </p>
          </div>
          <a className="tour-primary" href="#tour-organizer">
            اطلاعات رزرو و برگزارکننده{" "}
            <i className="icon icon-left-2" aria-hidden="true" />
          </a>
          <p className="tour-note">
            زمان حرکت، ظرفیت و قیمت نهایی هنگام هماهنگی با برگزارکننده مشخص
            می‌شود.
          </p>
        </section>
        <DetailImage image={tour.image} title={tour.title} />
      </div>
      <div className="tour-body">
        <div className="tour-sections">
          <section className="tour-panel">
            <h2>درباره این سفر</h2>
            <p>{tour.description}</p>
            <h3>تجربه‌هایی که در انتظار شماست</h3>
            <ul>
              {tour.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="tour-panel">
            <h2>برنامه سفر</h2>
            <ol className="tour-itinerary">
              {tour.itinerary.map((item, index) => (
                <li key={item}>
                  <span>{(index + 1).toLocaleString("fa-IR")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="tour-panel">
            <h2>خدمات تور</h2>
            <ul className="tour-services">
              {tour.services.map((item) => (
                <li key={item}>
                  <i
                    className="icon icon-tick text-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <h3>پیش از رزرو</h3>
            <p>
              ورودی جاذبه‌ها، وعده‌های غذایی خارج از برنامه، مدارک لازم و شرایط
              لغو را پیش از نهایی‌کردن سفر با برگزارکننده هماهنگ کنید.
            </p>
          </section>
        </div>
        <aside id="tour-organizer" className="tour-panel tour-organizer">
          <span className="tour-eyebrow">برگزارکننده سفر</span>
          <h2>{tour.agency}</h2>
          <p>برای هماهنگی تاریخ حرکت، نوع اتاق و تعداد مسافران پیام بفرستید.</p>
          <Link
            href={`/account/chat?tour=${tour.slug}`}
            className="tour-primary"
          >
            <i className="icon icon-chat-sms" aria-hidden="true" /> گفتگو درباره
            سفر
          </Link>
          <p className="tour-note">
            رزرو پس از تأیید ظرفیت و شرایط سفر توسط برگزارکننده نهایی می‌شود.
          </p>
        </aside>
      </div>
      <section>
        <div className="tour-section-heading">
          <h2>مقصدهای دیگر</h2>
          <Link href="/inner-category/products-category?type=tours">
            همه تورها
          </Link>
        </div>
        <div className="tour-grid tour-related">
          {tours
            .filter((item) => item.slug !== tour.slug)
            .map((item) => (
              <TourCard key={item.slug} tour={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
