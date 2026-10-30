import Link from "next/link";
import type { Tour } from "@/data/tours";
export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="flex column round-md overflow-hidden md-mr-3 md-ml-3"
    >
      <div>
        <img
          decoding="async"
          loading="lazy"
          src={tour.image}
          alt={tour.title}
          className="full-width round-lg"
        />
      </div>
      <div className="flex column gap-3 mt-3">
        <div className="flex justify-content-between align-items-center gap-2">
          <span className="semi-bold font-peyda extra-text-sm">
            {tour.title}
          </span>
          <span className="bg-primary text-inverse pl-3 pr-3 text-xs round-lg">
            {"تور منتخب"}
          </span>
        </div>
        <div className="flex row justify-content-between align-items-center font-peyda gap-2">
          <span>{"تهران"}</span>
          <i className="icon icon-airplane-air-plane-fly text-primary flip-x"></i>
          <span className="bg-primary full-width h-px"></span>
          <span>{tour.destination}</span>
        </div>
        <div className="flex column gap-2 font-sans text-accent opacity-8 text-sm gap-3 -alt p-5 round-md light-border">
          <div className="flex row align-items-center justify-content-between">
            <span className="flex row align-items-center gap-3 text-xs text-text w-fit">
              <i className="icon icon-hotel-room-travel text-primary w-2 h-2"></i>
              {tour.hotel}
            </span>
            <span className="flex row align-items-center gap-3 text-xs text-text w-fit">
              <i className="icon icon-van-passanger text-primary w-2 h-2"></i>
              {
                "\n                          ترانسفر شخصی\n                        "
              }
            </span>
          </div>
          <div className="flex row align-items-center justify-content-between">
            <span className="flex row align-items-center gap-3 text-xs text-text">
              <i className="icon icon-time-success text-primary w-2 h-2"></i>
              {tour.nights}
            </span>
            <span className="flex row align-items-center gap-3 text-xs text-text">
              <i className="icon icon-visa text-primary w-2 h-2"></i>
              {"هماهنگی مدارک سفر"}
            </span>
          </div>
          <div className="flex row align-items-center justify-content-between">
            <span className="flex row align-items-center gap-3 text-xs text-text">
              <i className="icon icon-food-restaurant text-primary w-2 h-2"></i>
              {"خدمات اقامت"}
            </span>
            <span className="flex row align-items-center gap-3 text-xs text-text">
              <i className="icon icon-service-territory-policy text-primary w-2 h-2"></i>
              {"برنامه گردش"}
            </span>
          </div>
        </div>
        <div className="flex row justify-content-between mt-1">
          <div className="flex row gap-2 align-items-center">
            <span className="font-peyda">{"شروع از:"}</span>
          </div>
          <div className="flex row gap-1 font-sans text-primary semi-bold">
            <span>{tour.price}</span>
            <i className="icon icon-toman-bold w-3 h-3"></i>
          </div>
        </div>
      </div>
      <div className="column row justify-content-center align-items-center mb-3 gap-2 mt-3">
        <div className="flex row justify-content-center align-items-center gap-2 full-width md-remove">
          <span className="btn-primary-light p-3">
            <i className="icon icon-qr-code w-2 h-2"></i>
          </span>
          <span className="btn-primary full-width font-peyda relative">
            {"\n                        مشاهده کامل\n                        "}
            <i className="icon icon-left-2 absolute left-3"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
