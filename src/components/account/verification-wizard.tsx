"use client";

import Link from "next/link";
import { MobileFormProgress } from "@/components/forms/mobile-form-progress";
import { FormNotice, useFormNotice } from "@/components/forms/form-notice";
import { useEffect, useRef, useState, type FormEvent } from "react";

const steps = ["اطلاعات شخصی", "بارگذاری مدارک", "بررسی اطلاعات"];
const documentLabels = [
  "تصویر روی کارت ملی",
  "تصویر پشت کارت ملی",
  "تصویر سلفی با کارت ملی",
];
const digits = (value: string) =>
  value.replace(/[۰-۹٠-٩]/g, (digit) =>
    String(
      "۰۱۲۳۴۵۶۷۸۹".indexOf(digit) >= 0
        ? "۰۱۲۳۴۵۶۷۸۹".indexOf(digit)
        : "٠١٢٣٤٥٦٧٨٩".indexOf(digit),
    ),
  );
const persian = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);

type Details = {
  name: string;
  nationalId: string;
  gender: string;
  birthday: string;
  phone: string;
  email: string;
};
function DocumentPreview({ file }: { file: File | null }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!file) {
      setUrl("");
      return;
    }
    const next = URL.createObjectURL(file);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [file]);
  return url ? (
    <img decoding="async" loading="lazy" src={url} alt="پیش‌نمایش مدرک انتخاب‌شده" />
  ) : (
    <i className="icon icon-image" aria-hidden="true" />
  );
}

export function VerificationWizard() {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<Details>({
    name: "",
    nationalId: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
  });
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { notice, showNotice, dismissNotice } = useFormNotice();
  const [accepted, setAccepted] = useState(false);
  const [complete, setComplete] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scroll.current?.scrollTo({ top: 0 });
    heading.current?.focus({ preventScroll: true });
  }, [step, complete]);

  function update(key: keyof Details, value: string) {
    dismissNotice();
    setDetails((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: "" }));
  }
  function advance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (step === 0) {
      if (details.name.trim().length < 3)
        nextErrors.name = "نام و نام خانوادگی را وارد کنید.";
      if (!/^\d{10}$/.test(digits(details.nationalId)))
        nextErrors.nationalId = "کد ملی باید ۱۰ رقم باشد.";
      if (!details.gender) nextErrors.gender = "جنسیت را انتخاب کنید.";
      if (
        !/^1[34]\d{2}[\/\-](0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12]\d|3[01])$/.test(
          digits(details.birthday),
        )
      )
        nextErrors.birthday = "تاریخ تولد را مانند ۱۳۷۵/۰۱/۰۱ وارد کنید.";
      if (!/^09\d{9}$/.test(digits(details.phone).replace(/\s/g, "")))
        nextErrors.phone = "شماره موبایل ۱۱ رقمی با ۰۹ وارد کنید.";
      if (details.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
        nextErrors.email = "ایمیل را به‌درستی وارد کنید.";
    } else if (step === 1) {
      files.forEach((file, index) => {
        if (!file)
          nextErrors[`file${index}`] = "تصویر این مدرک را انتخاب کنید.";
      });
    } else if (!accepted)
      nextErrors.accepted = "برای ادامه، صحت اطلاعات را تأیید کنید.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      showNotice(Object.values(nextErrors)[0]);
      requestAnimationFrame(() =>
        scroll.current
          ?.querySelector<HTMLElement>('[aria-invalid="true"]')
          ?.focus(),
      );
      return;
    }
    dismissNotice();
    if (step < 2) setStep(step + 1);
    else setComplete(true);
  }
  function selectFile(index: number, file?: File) {
    if (!file) return;
    const key = `file${index}`;
    if (
      !["image/jpeg", "image/png"].includes(file.type) ||
      file.size > 5 * 1024 * 1024
    ) {
      showNotice("یک تصویر JPG یا PNG با حجم حداکثر ۵ مگابایت انتخاب کنید.");
      setErrors((previous) => ({
        ...previous,
        [key]: "یک تصویر JPG یا PNG با حجم حداکثر ۵ مگابایت انتخاب کنید.",
      }));
      return;
    }
    setFiles((previous) =>
      previous.map((old, i) => (i === index ? file : old)),
    );
    dismissNotice();
    setErrors((previous) => ({ ...previous, [key]: "" }));
  }
  const field = (
    key: keyof Details,
    label: string,
    placeholder: string,
    inputMode?: "numeric" | "tel" | "email",
  ) => (
    <label className="verification-field" htmlFor={`verify-${key}`}>
      <span>
        {label}
        {key !== "email" && <span className="text-red"> *</span>}
      </span>
      <input
        id={`verify-${key}`}
        className="input-primary font-peyda"
        value={details[key]}
        onChange={(event) => update(key, event.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={
          key === "name"
            ? "name"
            : key === "phone"
              ? "tel"
              : key === "email"
                ? "email"
                : "off"
        }
        aria-required={key !== "email"}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `error-${key}` : undefined}
      />
      {errors[key] && (
        <small id={`error-${key}`} className="verification-error">
          {errors[key]}
        </small>
      )}
    </label>
  );
  return (
    <div
      ref={scroll}
      className="verification-page font-peyda primary-scrollbar"
    >
      <div className="verification-card">
        <FormNotice notice={notice} onDismiss={dismissNotice} />
        {!complete && (
          <MobileFormProgress
            current={step + 1}
            total={steps.length}
            label={steps[step]}
          />
        )}
        {!complete && (
          <ol className="verification-progress" aria-label="مراحل احراز هویت">
            {steps.map((label, index) => (
              <li
                key={label}
                className={index <= step ? "is-current" : ""}
                aria-current={index === step ? "step" : undefined}
              >
                <span>{persian(index + 1)}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        )}
        <h1 ref={heading} tabIndex={-1}>
          {complete ? "اطلاعات تکمیل شد" : steps[step]}
        </h1>
        {complete ? (
          <div className="verification-complete">
            <i
              className="icon icon-tick-circle text-primary"
              aria-hidden="true"
            />
            <p>اطلاعات و مدارک شما برای ارسال آماده است.</p>
            <p className="text-muted">
              ارسال درخواست و پیگیری نتیجه پس از اتصال سامانه بررسی هویت در
              دسترس خواهد بود.
            </p>
            <Link href="/account" className="btn-primary">
              بازگشت به حساب کاربری
            </Link>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setComplete(false)}
            >
              بازبینی اطلاعات
            </button>
          </div>
        ) : (
          <form onSubmit={advance} noValidate>
            <p className="verification-description text-muted">
              {
                [
                  "لطفاً اطلاعات شخصی خود را وارد کنید.",
                  "تصاویر باید واضح باشند و تمام جزئیات مدرک در آن‌ها دیده شود. فرمت JPG یا PNG، حداکثر ۵ مگابایت برای هر تصویر.",
                  "اطلاعات و مدارک انتخاب‌شده را بررسی کنید. برای اصلاح هر بخش می‌توانید به مرحله قبل برگردید.",
                ][step]
              }
            </p>
            {step === 0 && (
              <div className="verification-fields">
                {field("name", "نام و نام خانوادگی", "نام کامل شما")}
                {field("nationalId", "کد ملی", "کد ملی ۱۰ رقمی", "numeric")}
                <label className="verification-field" htmlFor="verify-gender">
                  <span>
                    جنسیت <span className="text-red">*</span>
                  </span>
                  <select
                    id="verify-gender"
                    className="input-primary font-peyda"
                    value={details.gender}
                    onChange={(event) => update("gender", event.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.gender)}
                    aria-describedby={
                      errors.gender ? "error-gender" : undefined
                    }
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                  </select>
                  {errors.gender && (
                    <small id="error-gender" className="verification-error">
                      {errors.gender}
                    </small>
                  )}
                </label>
                {field("birthday", "تاریخ تولد (شمسی)", "۱۳۷۵/۰۱/۰۱")}
                {field("phone", "شماره موبایل", "۰۹۱۲۱۲۳۴۵۶۷", "tel")}
                {field("email", "ایمیل (اختیاری)", "name@example.com", "email")}
              </div>
            )}
            {step === 1 && (
              <div className="verification-documents">
                {documentLabels.map((label, index) => (
                  <div className="verification-document" key={label}>
                    <div className="verification-preview">
                      <DocumentPreview file={files[index]} />
                    </div>
                    <div>
                      <label htmlFor={`verify-file-${index}`}>{label}</label>
                      <input
                        id={`verify-file-${index}`}
                        type="file"
                        accept="image/jpeg,image/png"
                        aria-invalid={Boolean(errors[`file${index}`])}
                        aria-describedby={
                          errors[`file${index}`]
                            ? `error-file-${index}`
                            : undefined
                        }
                        onChange={(event) => {
                          selectFile(index, event.target.files?.[0]);
                          event.target.value = "";
                        }}
                      />
                      {files[index] && (
                        <small className="verification-filename">
                          {files[index]!.name}
                        </small>
                      )}
                      {errors[`file${index}`] && (
                        <small
                          id={`error-file-${index}`}
                          className="verification-error"
                        >
                          {errors[`file${index}`]}
                        </small>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {step === 2 && (
              <>
                <dl className="verification-review">
                  {[
                    ["نام و نام خانوادگی", details.name],
                    ["کد ملی", persian(details.nationalId)],
                    ["جنسیت", details.gender === "male" ? "مرد" : "زن"],
                    ["تاریخ تولد", persian(details.birthday)],
                    ["شماره موبایل", persian(details.phone)],
                    ["ایمیل", details.email || "وارد نشده"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="verification-review-files">
                  {files.map((file, index) => (
                    <div key={index}>
                      <div className="verification-preview">
                        <DocumentPreview file={file} />
                      </div>
                      <span>{documentLabels[index]}</span>
                    </div>
                  ))}
                </div>
                <label className="verification-consent">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(event) => {
                      setAccepted(event.target.checked);
                      setErrors({});
                      dismissNotice();
                    }}
                    aria-invalid={Boolean(errors.accepted)}
                  />
                  <span>صحت اطلاعات و مدارک واردشده را تأیید می‌کنم.</span>
                </label>
                {errors.accepted && (
                  <p className="verification-error">{errors.accepted}</p>
                )}
              </>
            )}
            <div className="verification-actions">
              {step > 0 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    dismissNotice();
                    setErrors({});
                    setStep(step - 1);
                  }}
                >
                  مرحله قبل
                </button>
              )}
              <button type="submit" className="btn-primary">
                {step === 2 ? "تأیید اطلاعات" : "ادامه"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
