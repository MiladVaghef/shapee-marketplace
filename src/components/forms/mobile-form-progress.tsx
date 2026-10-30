import "./mobile-form-progress.scss";

export function MobileFormProgress({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const number = (value: number) =>
    new Intl.NumberFormat("fa-IR").format(value);
  return (
    <div className="mobile-form-progress">
      <span aria-live="polite">
        مرحله {number(current)} از {number(total)}
      </span>
      <div
        className="mobile-form-progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
      >
        <span style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </div>
  );
}
