"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import "./step-flow.scss";
import { MobileFormProgress } from "./mobile-form-progress";
import { FormNotice, useFormNotice } from "./form-notice";

type Field = { label: string; value: string };
type FlowState = {
  step: number;
  labels: string[];
  next: () => void;
  back: () => void;
  save: () => void;
  fields: Field[];
  files: File[];
  setFiles: (files: File[]) => void;
  urls: string[];
  category: string;
  message: string;
  complete: boolean;
  notify: (message: string) => void;
};
const FlowContext = createContext<FlowState | null>(null);
function useFlow() {
  const flow = useContext(FlowContext);
  if (!flow) throw new Error("Missing flow context");
  return flow;
}
const fa = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
const controls = (root: HTMLElement) => [
  ...root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    'input:not([type="file"]):not([type="hidden"]), textarea',
  ),
];

export function StepFlow({
  children,
  labels,
  className,
  booking = false,
}: {
  children: ReactNode;
  labels: string[];
  className?: string;
  booking?: boolean;
}) {
  const [step, setStep] = useState(0);
  const [fields, setFields] = useState<Field[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const { notice, showNotice, dismissNotice } = useFormNotice();
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const draftKey = `shoppie-draft:${pathname}`;
  const urls = useMemo(
    () => files.map((file) => URL.createObjectURL(file)),
    [files],
  );
  useEffect(
    () => () => urls.forEach((url) => URL.revokeObjectURL(url)),
    [urls],
  );
  function snapshot() {
    if (!root.current) return;
    const entries = controls(root.current)
      .filter(
        (field) =>
          field.type !== "radio" &&
          field.type !== "checkbox" &&
          field.value.trim(),
      )
      .map((field) => ({
        label:
          field.getAttribute("aria-label") || field.placeholder || "اطلاعات",
        value: field.value,
      }));
    root.current
      .querySelectorAll<HTMLElement>(".custom-select")
      .forEach((select) => {
        if (
          select.querySelector<HTMLInputElement>('input[type="hidden"]')?.value
        )
          entries.push({
            label:
              select.querySelector("button")?.getAttribute("aria-label") ||
              "انتخاب",
            value: select.querySelector(".select-text")?.textContent || "",
          });
      });
    root.current
      .querySelectorAll<HTMLInputElement>('input[type="radio"]:checked')
      .forEach((input) => {
        const label = input.parentElement?.querySelector<HTMLLabelElement>(
          `label[for="${CSS.escape(input.id)}"]`,
        );
        const value =
          label?.querySelector("h3, h2")?.textContent ||
          label?.textContent?.trim().replace(/\s+/g, " ").slice(0, 100);
        if (value)
          entries.push({
            label:
              input.closest("[data-flow-step]")?.querySelector("h1")
                ?.textContent || "انتخاب",
            value,
          });
      });
    setFields(entries);
  }
  useEffect(() => {
    setStep(0);
    dismissNotice();
    setComplete(false);
    setFields([]);
    setFiles([]);
    const initialCategory =
      root.current
        ?.querySelector("[data-flow-choice].active-category")
        ?.textContent?.trim() || "";
    setCategory(initialCategory);
    setMessage("");
    try {
      const saved = JSON.parse(localStorage.getItem(draftKey) || "null");
      if (!saved || !root.current) return;
      controls(root.current).forEach((field, index) => {
        const value = saved.values?.[index];
        if (
          typeof value === "string" &&
          field.type !== "checkbox" &&
          field.type !== "radio"
        )
          field.value = value;
        else if (typeof value === "boolean")
          (field as HTMLInputElement).checked = value;
      });
      root.current
        .querySelectorAll(".custom-select")
        .forEach((select, index) => {
          if (saved.selects?.[index])
            select.dispatchEvent(
              new CustomEvent("flow-restore-select", {
                detail: saved.selects[index],
              }),
            );
        });
      setCategory(saved.category || initialCategory);
      setStep(
        Math.max(0, Math.min(Number(saved.step) || 0, labels.length - 1)),
      );
      setMessage("پیش‌نویس بازیابی شد. تصاویر را دوباره انتخاب کنید.");
      snapshot();
    } catch {
      /* A draft is optional when browser storage is unavailable. */
    }
  }, [draftKey]);
  useEffect(() => {
    const panel = root.current?.querySelector<HTMLElement>(
      `[data-flow-step="${step}"]`,
    );
    panel?.scrollTo({ top: 0 });
    const heading = panel?.querySelector<HTMLElement>(
      "h1, h2, [data-flow-heading]",
    );
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
    root.current
      ?.querySelector(".flow-progress")
      ?.scrollIntoView({ block: "nearest" });
    root.current
      ?.querySelector('.flow-progress [aria-current="step"]')
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [step, complete]);
  function save() {
    if (!root.current) return;
    dismissNotice();
    try {
      localStorage.setItem(
        draftKey,
        JSON.stringify({
          step,
          category,
          values: controls(root.current).map((field) =>
            field.type === "checkbox" || field.type === "radio"
              ? (field as HTMLInputElement).checked
              : field.value,
          ),
          selects: [
            ...root.current.querySelectorAll(
              '.custom-select input[type="hidden"]',
            ),
          ].map((input) => (input as HTMLInputElement).value),
        }),
      );
      setMessage("پیش‌نویس در این مرورگر ذخیره شد.");
    } catch {
      showNotice("ذخیره پیش‌نویس در مرورگر در دسترس نیست.");
    }
  }
  function next() {
    const panel = root.current?.querySelector<HTMLElement>(
      `[data-flow-step="${step}"]`,
    );
    const invalid = [
      ...(panel?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input:not([type="hidden"]), textarea',
      ) || []),
    ].find((field) => !field.disabled && !field.checkValidity());
    if (invalid) {
      const label =
        invalid.getAttribute("aria-label") || invalid.placeholder || "این قسمت";
      invalid.setAttribute("aria-invalid", "true");
      invalid.focus({ preventScroll: true });
      const scrollBehavior = matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth";
      const scrollPanel = invalid.closest<HTMLElement>(".flow-step");
      if (scrollPanel && scrollPanel.scrollHeight > scrollPanel.clientHeight) {
        const panelBounds = scrollPanel.getBoundingClientRect();
        const fieldBounds = invalid.getBoundingClientRect();
        scrollPanel.scrollBy({
          top:
            fieldBounds.top -
            panelBounds.top -
            (panelBounds.height - fieldBounds.height) / 2,
          behavior: scrollBehavior,
        });
      } else {
        invalid.scrollIntoView({ behavior: scrollBehavior, block: "center" });
      }
      showNotice(
        invalid.validity.valueMissing
          ? `لطفاً «${label}» را وارد کنید.`
          : `مقدار «${label}» را به‌درستی وارد کنید.`,
      );
      return;
    }
    if (panel?.querySelector("[data-flow-upload]") && !files.length) {
      showNotice("حداقل یک تصویر انتخاب کنید.");
      panel.querySelector<HTMLInputElement>('input[type="file"]')?.focus();
      return;
    }
    if (step === labels.length - 1 && !files.length) {
      const upload = root.current
        ?.querySelector("[data-flow-upload]")
        ?.closest<HTMLElement>("[data-flow-step]");
      if (upload) {
        setStep(Number(upload.dataset.flowStep));
        showNotice("تصاویر پیش‌نویس را دوباره انتخاب کنید.");
        return;
      }
    }
    snapshot();
    dismissNotice();
    setMessage("");
    if (step < labels.length - 1) setStep(step + 1);
    else {
      save();
      setComplete(true);
    }
  }
  const flow: FlowState = {
    step,
    labels,
    next,
    back: () => {
      dismissNotice();
      setMessage("");
      snapshot();
      setStep(Math.max(0, step - 1));
    },
    save,
    fields,
    files,
    setFiles,
    urls,
    category,
    message,
    complete,
    notify: showNotice,
  };
  return (
    <FlowContext.Provider value={flow}>
      <div
        key={pathname}
        ref={root}
        className={`step-flow ${className || ""}`}
        data-step-flow
        onChange={(event) => {
          const input = event.target as HTMLInputElement;
          if (input.type !== "file" && input.validity?.valid) {
            input.removeAttribute("aria-invalid");
            dismissNotice();
          }
          if (input.type === "checkbox") {
            let group = input.parentElement;
            for (let i = 0; group && i < 5; i++, group = group.parentElement) {
              const price = group.querySelector<HTMLInputElement>(
                'input[type="number"]',
              );
              if (price && group.textContent?.includes("توافقی")) {
                price.disabled = input.checked;
                break;
              }
            }
          }
          snapshot();
        }}
        onClick={(event) => {
          const button = (
            event.target as HTMLElement
          ).closest<HTMLButtonElement>("button[data-flow-choice]");
          if (button) {
            const panel = button.closest("[data-flow-step]");
            panel
              ?.querySelectorAll("button[data-flow-choice]")
              .forEach((item) => {
                item.classList.remove("active-category");
                item.setAttribute("aria-pressed", "false");
              });
            button.classList.add("active-category");
            button.setAttribute("aria-pressed", "true");
            setCategory(button.textContent?.trim() || "");
          }
          const action = (
            event.target as HTMLElement
          ).closest<HTMLButtonElement>("button[data-flow-action]")?.dataset
            .flowAction;
          if (action === "finish") next();
          if (action === "back") flow.back();
        }}
      >
        <FormNotice notice={notice} onDismiss={dismissNotice} />
        <nav className="flow-progress font-peyda" aria-label="مراحل تکمیل فرم">
          <MobileFormProgress
            current={step + 1}
            total={labels.length}
            label={labels[step]}
          />
          <span aria-live="polite">
            مرحله {fa(step + 1)} از {fa(labels.length)}
          </span>
          <ol>
            {labels.map((label, index) => (
              <li
                key={index}
                aria-current={index === step ? "step" : undefined}
                className={index <= step ? "is-reached" : ""}
              >
                <span>{fa(index + 1)}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </nav>
        <div hidden={complete} className="flow-content">
          {children}
        </div>
        {message && (
          <p role="status" className="flow-message font-peyda">
            {message}
          </p>
        )}
        {complete && (
          <section className="flow-complete font-peyda">
            <i className="icon icon-tick-circle" aria-hidden="true" />
            <h1 tabIndex={-1}>اطلاعات تکمیل شد</h1>
            <p>
              {booking
                ? "اطلاعات رزرو برای ثبت آماده است."
                : "پیش‌نویس شما برای ثبت آماده است."}
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setComplete(false)}
            >
              بازبینی اطلاعات
            </button>
          </section>
        )}
      </div>
    </FlowContext.Provider>
  );
}
export function FlowStep({
  index,
  className = "",
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const { step } = useFlow();
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    ref.current
      ?.querySelectorAll<HTMLInputElement>("input[id]")
      .forEach((input, field) => {
        const oldId = input.id;
        const newId = `flow-${index}-${field}-${oldId}`;
        input.parentElement
          ?.querySelectorAll<HTMLLabelElement>(
            `label[for="${CSS.escape(oldId)}"]`,
          )
          .forEach((label) => {
            label.htmlFor = newId;
          });
        input.id = newId;
      });
  }, [index]);
  return (
    <section
      ref={ref}
      data-flow-step={index}
      hidden={step !== index}
      className={`flow-step ${className
        .split(/\s+/)
        .filter((token) => token !== "remove")
        .join(" ")}`}
    >
      {children}
    </section>
  );
}
export function FlowNavigation({ draft = true }: { draft?: boolean }) {
  const flow = useFlow();
  return (
    <div className="flow-navigation font-peyda">
      <button
        type="button"
        className="btn-secondary"
        onClick={flow.back}
        disabled={flow.step === 0}
      >
        مرحله قبل
      </button>
      <button type="button" className="btn-primary" onClick={flow.next}>
        {flow.step === flow.labels.length - 1 ? "تأیید اطلاعات" : "مرحله بعدی"}
      </button>
      {draft && (
        <button
          type="button"
          className="btn-primary-light flow-save-draft"
          onClick={flow.save}
        >
          ذخیره پیش‌نویس
        </button>
      )}
    </div>
  );
}
export function FlowUploads({
  title = "تصاویر",
  max = 5,
}: {
  title?: string;
  max?: number;
}) {
  const { files, setFiles, urls, notify } = useFlow();
  function add(incoming: File[]) {
    if (
      incoming.some(
        (file) =>
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 5 * 1024 * 1024,
      )
    ) {
      notify("تصاویر باید JPG، PNG یا WEBP و کوچک‌تر از ۵ مگابایت باشند.");
      return;
    }
    if (files.length + incoming.length > max) {
      notify(`حداکثر ${fa(max)} تصویر انتخاب کنید.`);
      return;
    }
    setFiles([...files, ...incoming]);
    notify("");
  }
  return (
    <div
      data-flow-upload
      className="flow-upload"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        add([...e.dataTransfer.files]);
      }}
    >
      <label className="flow-upload-box">
        <i className="icon icon-upload" aria-hidden="true" />
        <strong>{title} را انتخاب کنید</strong>
        <span>
          حداکثر {fa(max)} تصویر · JPG، PNG، WEBP · هر تصویر تا ۵ مگابایت
        </span>
        <input
          type="file"
          aria-label={title}
          accept="image/jpeg,image/png,image/webp"
          multiple={max > 1}
          onChange={(e) => {
            add([...(e.target.files || [])]);
            e.target.value = "";
          }}
        />
      </label>
      <div className="flow-gallery">
        {urls.map((url, index) => (
          <div key={url}>
            <img src={url} alt={files[index].name} />
            <button
              type="button"
              aria-label={`حذف تصویر ${fa(index + 1)}`}
              onClick={() => setFiles(files.filter((_, i) => i !== index))}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export function FlowReview() {
  const { fields, category, files, urls } = useFlow();
  return (
    <div className="flow-review">
      <h2 className="text-md">مرور اطلاعات واردشده</h2>
      <dl>
        {fields.map((field, index) => (
          <div key={index}>
            <dt>{field.label}</dt>
            <dd>{fa(field.value)}</dd>
          </div>
        ))}
        {category && (
          <div>
            <dt>دسته‌بندی</dt>
            <dd>{category}</dd>
          </div>
        )}
        <div>
          <dt>تعداد تصاویر</dt>
          <dd>{fa(files.length)}</dd>
        </div>
      </dl>
      <div className="flow-gallery">
        {urls.map((url, index) => (
          <img key={url} src={url} alt={`تصویر ${fa(index + 1)}`} />
        ))}
      </div>
    </div>
  );
}
export function FlowPreview() {
  const { fields, urls, category } = useFlow();
  return (
    <aside className="flow-preview font-peyda">
      <div className="flow-preview-image">
        {urls[0] ? (
          <img src={urls[0]} alt="پیش‌نمایش تصویر انتخاب‌شده" />
        ) : (
          <i className="icon icon-image" aria-hidden="true" />
        )}
      </div>
      <h2>{fields[0]?.value || "پیش‌نمایش اطلاعات"}</h2>
      <p>{category || "دسته‌بندی انتخاب‌شده"}</p>
      <p>
        {fields.find((field) => /قیمت|مبلغ/.test(field.label))?.value || ""}
      </p>
    </aside>
  );
}
export function BookingWizard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <StepFlow
      className={className}
      booking
      labels={[
        "انتخاب جایگاه",
        "اطلاعات و تصویر بنر",
        "انتخاب تاریخ",
        "بررسی رزرو",
      ]}
    >
      {Children.toArray(children).map((child, index) => (
        <FlowStep index={index} key={index}>
          {child}
        </FlowStep>
      ))}
      <FlowNavigation draft={false} />
    </StepFlow>
  );
}
export function FlowBrandingUploads({ cover = true }: { cover?: boolean }) {
  return (
    <div className="flow-branding">
      <BrandingImage label="لوگو" />
      {cover && <BrandingImage label="تصویر کاور" />}
    </div>
  );
}
function BrandingImage({ label }: { label: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const { notify } = useFlow();
  useEffect(() => {
    if (!file) {
      setUrl("");
      return;
    }
    const next = URL.createObjectURL(file);
    setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [file]);
  return (
    <label className="flow-upload-box">
      <strong>{label}</strong>
      {url && (
        <img
          src={url}
          alt={`پیش‌نمایش ${label}`}
          style={{ maxWidth: 180, maxHeight: 120, objectFit: "contain" }}
        />
      )}
      <input
        type="file"
        aria-label={label}
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          const next = event.target.files?.[0];
          if (!next) return;
          if (
            !["image/jpeg", "image/png", "image/webp"].includes(next.type) ||
            next.size > 5 * 1024 * 1024
          ) {
            notify("تصویر JPG، PNG یا WEBP تا ۵ مگابایت انتخاب کنید.");
            return;
          }
          setFile(next);
          notify("");
        }}
      />
    </label>
  );
}
export function FlowCategoryName() {
  return (
    <span className="font-peyda text-sm semi-bold">
      {useFlow().category || "دسته‌بندی را انتخاب کنید"}
    </span>
  );
}
