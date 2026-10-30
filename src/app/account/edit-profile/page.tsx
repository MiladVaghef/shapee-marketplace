// Migrated from pages/account/edit-profile.html; edit this React source directly.
import type { Metadata } from "next";
import { SelectField } from "@/components/ui/select-field";
import { ProfileDraft } from "@/components/account/profile-draft";

export const metadata: Metadata = { title: "شاپی | ویرایش پروفایل" };
export default function Page() {
  return (
    <>
      <ProfileDraft>
        <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30 md-pb-20">
          <div className="flex column gap-5 full-height">
            <div className="flex lg-column row gap-3 lg-gap-4 full-width font-peyda">
              <div className="form md-shadow-unset md-p-0 p-6 font-peyda w-p7 lg-full-width mb-10 lg-mb-0">
                <div className="flex column gap-5">
                  <div className="mt-0">
                    <h3 className="text-lg bold mb-5 mt-0">
                      {"تصویر پروفایل"}
                    </h3>

                    <div className="flex sm-column justify-content-between gap-6">
                      <div className="flex align-items-center gap-5">
                        <img decoding="async" loading="lazy"
                          src="/assets/images/example/profile-picture.jpg"
                          alt=""
                          className="w-15 h-15 round-full object-cover"
                        />

                        <div>
                          <p className="text-sm text-muted mb-4">
                            {" تصویر مناسب و واضح انتخاب کنید. "}
                          </p>

                          <div className="full-width">
                            <label className="input-primary full-width flex justify-content-between align-items-center font-peyda pointer">
                              <input
                                type="file"
                                className="hidden"
                                accept=".jpg,.jpeg,.png"
                              />

                              <span className="text-sm">{"انتخاب فایل"}</span>

                              <i className="icon icon-upload text-primary text-lg"></i>
                            </label>
                          </div>

                          <div className="text-xs text-muted mt-3 font-sans">
                            {" JPG, PNG - حداکثر حجم 2MB "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm-column gap-5">
                    <div className="full-width">
                      <label className="block text-sm mb-2 semi-bold">
                        {" نام "}
                      </label>

                      <input
                        type="text"
                        defaultValue="محمد"
                        className="input-primary full-width font-peyda"
                      />
                    </div>

                    <div className="full-width">
                      <label className="block text-sm semi-bold mb-2">
                        {" نام خانوادگی "}
                      </label>

                      <input
                        type="text"
                        defaultValue="کریمی"
                        className="input-primary full-width font-peyda"
                      />
                    </div>
                  </div>

                  <div className="flex sm-column gap-5">
                    <div className="full-width">
                      <label className="flex row justify-content-between text-sm semi-bold mb-2">
                        {" شماره تماس "}
                        <span className="bg-red-light text-red px-3 py-1 round-full text-xs semi-bold flex align-items-center gap-1">
                          <i className="icon icon-cross"></i>
                          {" تایید نشده "}
                        </span>
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="09123742932"
                          className="input-primary full-width font-sans pl-15"
                        />
                      </div>
                    </div>

                    <div className="full-width">
                      <label className="flex row justify-content-between text-sm semi-bold mb-2">
                        {" ایمیل "}
                        <span className="bg-green-light text-green px-3 py-1 round-full text-xs semi-bold flex align-items-center gap-1">
                          <i className="icon icon-tick-circle"></i>
                          {" تایید شده "}
                        </span>
                      </label>

                      <div className="relative">
                        <input
                          type="email"
                          defaultValue="mohammad@example.com"
                          className="input-primary full-width font-sans pl-15"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex sm-column gap-5">
                    <div className="full-width">
                      <label className="block text-sm semi-bold mb-2">
                        {" جنسیت "}
                      </label>

                      <SelectField
                        className="custom-select"
                        name=""
                        placeholder="مرد"
                        options={[
                          { value: "مرد", label: "مرد" },
                          { value: "زن", label: "زن" },
                        ]}
                      />
                    </div>

                    <div className="full-width">
                      <label className="block text-sm semi-bold mb-2">
                        {" تاریخ تولد "}
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="۱۳۷۵/۰۸/۲۰"
                          className="input-primary full-width font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm semi-bold mb-2">
                      {" شهر "}
                    </label>

                    <SelectField
                      className="custom-select"
                      name=""
                      placeholder="تهران"
                      options={[
                        { value: "تهران", label: "تهران" },
                        { value: "اصفهان", label: "اصفهان" },
                        { value: "شیراز", label: "شیراز" },
                        { value: "تبریز", label: "تبریز" },
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 semi-bold">
                      {" درباره شما "}
                    </label>

                    <textarea
                      className="text-area-primary no-resize full-width font-peyda h-20 resize-none"
                      maxLength={160}
                      defaultValue="علاقه‌مند به تکنولوژی، طراحی و توسعه کسب و کارهای آنلاین."
                    />

                    <div className="text-left text-xs text-muted mt-2 font-sans">
                      {" ۰/۱۶۰ "}
                    </div>
                  </div>
                </div>

                <div className="flex md-column gap-4 mt-8">
                  <button className="btn-primary px-8 font-peyda" type="button">
                    {" ذخیره تغییرات "}
                  </button>

                  <button
                    className="btn-secondary px-8 font-peyda"
                    type="button"
                  >
                    {"انصراف"}
                  </button>
                </div>
              </div>

              <div className="w-p3 lg-full-width">
                <div className="flex column lg-row xs-column gap-5 lg-mb-30 sticky top-0">
                  <div className="form p-5 full-width bg-primary-light">
                    <div className="flex row gap-3 align-items-center full-width">
                      <span className="bg-primary w-34px h-34px flex justify-content-center align-items-center round-full">
                        <i className="icon icon-shield-tick text-primary text-inverse w-15px h-15px"></i>
                      </span>

                      <h3 className="m-0 semi-bold text-md">
                        {"نیاز به کمک دارید؟"}
                      </h3>
                    </div>

                    <div className="flex column gap-5 mt-8">
                      <div className="flex align-items-start gap-3">
                        <i className="icon icon-attention-circle text-primary mt-1"></i>

                        <p className="m-0 text-muted text-sm line-height-2">
                          {" اطلاعات شما نزد ما محفوظ و امن است. "}
                        </p>
                      </div>

                      <div className="flex align-items-start gap-3">
                        <i className="icon icon-attention-circle text-primary mt-1"></i>

                        <p className="m-0 text-muted text-sm line-height-2">
                          {
                            " شماره موبایل و ایمیل برای بازیابی حساب استفاده استفاده می‌شود. "
                          }
                        </p>
                      </div>

                      <div className="flex align-items-start gap-3">
                        <i className="icon icon-attention-circle text-primary mt-1"></i>

                        <p className="m-0 text-muted text-sm line-height-2">
                          {" از اطلاعات صحیح و بروز استفاده کنید. "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="form p-5 full-width bg-primary-light">
                    <div className="flex column align-items-center text-align-center full-height justify-content-between">
                      <div className="flex row gap-3 align-items-center full-width">
                        <span className="bg-primary w-34px h-34px flex justify-content-center align-items-center round-full">
                          <i className="icon icon-headphone text-primary text-inverse w-15px h-15px"></i>
                        </span>

                        <h3 className="m-0 semi-bold text-md">
                          {"نیاز به کمک دارید؟"}
                        </h3>
                      </div>

                      <p className="text-muted text-sm line-height-2 mb-5 full-width">
                        {" تیم پشتیبانی شاپی آماده کمک به شماست "}
                      </p>

                      <button
                        className="btn-primary-light full-width font-peyda"
                        type="button"
                      >
                        {" تماس با پشتیبانی "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileDraft>
    </>
  );
}
