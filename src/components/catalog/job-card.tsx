import Link from "next/link";
import { jobHref, type JobAd } from "@/data/jobs";
import "./jobs.scss";

export function JobCard({ job }: { job: JobAd }) {
  return (
    <Link
      href={jobHref(job.id)}
      className="job-card"
      aria-labelledby={"job-title-" + job.id}
    >
      <div className="job-card__company">
        <img
          className="job-mark"
          src={job.logo}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
        />
        <div>
          <span className="job-card__employer">{job.company}</span>
          <span className="job-card__category">{job.category}</span>
        </div>
      </div>
      <h3 id={"job-title-" + job.id}>{job.title}</h3>
      <div className="job-card__meta">
        <span>
          <i className="icon icon-map-point" aria-hidden="true" />
          {job.location}
        </span>
        <span>
          <i className="icon icon-clock" aria-hidden="true" />
          {job.employment}
        </span>
        <span className={job.workplace === "دورکاری" ? "job-card__remote" : ""}>
          {job.workplace}
        </span>
      </div>
      <div className="job-card__footer">
        <div>
          <span className="job-card__salary-label">حقوق و مزایا</span>
          <strong>{job.salary}</strong>
        </div>
        <span className="job-card__link">
          مشاهده فرصت
          <i className="icon icon-left-2" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
