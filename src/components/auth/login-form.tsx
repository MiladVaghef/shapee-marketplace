"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<"password" | "sms">("password");
  return (
    <form
      className="login-form flex column justify-content-center align-items-center full-height font-peyda"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/account/dashboard");
      }}
    >
      <img src="/assets/logo/shoppie.png" alt="لوگو شاپی" className="w-8" />
      <h1 className="mb-4 mt-1 text-xl">ورود به حساب کاربری</h1>
      <div className="flex row gap-3 mb-10">
        <button
          type="button"
          className={`btn-secondary text-sm ${mode === "sms" ? "btn-secondary-active" : ""}`}
          aria-pressed={mode === "sms"}
          onClick={() => setMode("sms")}
        >
          ورود با پیامک
        </button>
        <button
          type="button"
          className={`btn-secondary text-sm ${mode === "password" ? "btn-secondary-active" : ""}`}
          aria-pressed={mode === "password"}
          onClick={() => setMode("password")}
        >
          ورود با رمز عبور
        </button>
      </div>
      <label className="full-width text-xs mb-3">
        شماره تلفن همراه
        <input
          type="tel"
          inputMode="tel"
          autoComplete="off"
          placeholder="شماره تلفن همراه"
          className="login-phone-input input input-primary full-width mt-2"
        />
      </label>
      {mode === "password" && (
        <label className="full-width text-xs mb-3">
          رمز عبور
          <input
            type="password"
            autoComplete="off"
            placeholder="رمز عبور"
            className="input input-primary full-width mt-2"
          />
        </label>
      )}
      <button type="submit" className="btn-primary full-width mt-4">
        ورود به حساب کاربری
      </button>
    </form>
  );
}
