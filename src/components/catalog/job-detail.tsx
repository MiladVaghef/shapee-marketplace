import Link from "next/link";
import { StorefrontLayout } from "@/components/layout/storefront-layout";
import type { JobAd } from "@/data/jobs";
import "./jobs.scss";

export function JobDetail({ job }: { job: JobAd }) {
  return (
    <StorefrontLayout>
      <main className="job-detail main-container inline-space">
        <nav className="job-detail__breadcrumb" aria-label="مسیر صفحه">
          <Link href="/">خانه</Link>
          <span>/</span>
          <Link href="/inner-category/hire-ads-category">فرصت‌های شغلی</Link>
          <span>/</span>
          <span>{job.title}</span>
        </nav>
        <div className="job-detail__layout">
          <article className="job-detail__content">
            <div className="job-detail__company">
              <img
                className="job-mark"
                src={job.logo}
                alt=""
                width={48}
                height={48}
              />
              <span>{job.company}</span>
            </div>
            <h1>{job.title}</h1>
            <div className="job-detail__tags">
              <span>{job.category}</span>
              <span>{job.location}</span>
              <span>{job.employment}</span>
              <span>{job.workplace}</span>
            </div>
            <h2>درباره این فرصت</h2>
            <p>{job.summary}</p>
            <h2>مهارت‌ها و شرایط همکاری</h2>
            <ul>
              {job.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
          <aside className="job-detail__aside" aria-label="اطلاعات همکاری">
            <dl>
              {[
                ["حقوق و مزایا", job.salary],
                ["موقعیت مکانی", job.location],
                ["نوع همکاری", job.employment],
                ["شیوه همکاری", job.workplace],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p>این آگهی نمونه است و امکان ارسال درخواست استخدام ندارد.</p>
            <Link
              href="/inner-category/hire-ads-category"
              className="job-detail__back"
            >
              همه فرصت‌های شغلی
              <i className="icon icon-left-2" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </main>
    </StorefrontLayout>
  );
}
