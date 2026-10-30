import Link from "next/link";
import { properties } from "@/data/properties";
export function HomePropertyCard({
  property,
}: {
  property: (typeof properties)[number];
}) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="flex column round-md overflow-hidden md-mr-3 md-ml-3"
    >
      <div>
        <img decoding="async" loading="lazy"
          src={property.image}
          alt={property.title}
          className="full-width round-lg"
        />
      </div>

      <div className="flex column gap-3 mt-3">
        <div className="flex column pr-3 pl-3 gap-2">
          <span className="semi-bold extra-text-md">{property.title}</span>

          <span className="flex row align-items-center gap-3 text-sm text-text w-fit">
            <i className="icon icon-map-point-rotate text-primary w-2 h-2"></i>
            {property.location}
          </span>
        </div>

        <div className="flex column gap-2 font-sans text-accent opacity-8 text-sm gap-3 -alt p-5 round-md light-border">
          <div className="flex row align-items-center justify-content-between">
            <span className="flex row align-items-center gap-3 text-sm text-text w-fit">
              <i className="icon icon-floors-light text-primary w-2 h-2"></i>
              {" 2 طبقه "}
            </span>

            <span className="flex row align-items-center gap-3 text-sm text-text w-fit">
              <i className="icon icon-door-open text-primary w-2 h-2"></i>
              {" ۳ اتاق "}
            </span>
          </div>

          <div className="flex row align-items-center justify-content-between">
            <span className="flex row align-items-center gap-3 text-sm text-text">
              <i className="icon icon-pool-water text-primary w-2 h-2"></i>
              {" دارای استخر "}
            </span>

            <span className="flex row align-items-center gap-3 text-sm text-text">
              <i className="icon icon-parking text-primary w-2 h-2"></i>
              {" پارکینگ دار "}
            </span>
          </div>
        </div>

        <div className="flex row justify-content-between mt-1 pr-3 pl-3">
          <div className="flex row gap-2 align-items-center">
            <span className="font-peyda">{"قیمت:"}</span>
          </div>

          <div className="flex row gap-1 font-sans text-primary semi-bold">
            <span>{property.price}</span>

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
            {" مشاهده کامل "}
            <i className="icon icon-left-2 absolute left-3"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
