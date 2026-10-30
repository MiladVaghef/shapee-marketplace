// Migrated from pages/account/comments.html; edit this React source directly.
import type { Metadata } from "next";
import { SearchInput } from "@/components/ui/search-input";

export const metadata: Metadata = { title: "شاپی | نظرات" };
export default function Page() {
  return (
    <>
      <div className="flex column overflow-y-auto h-70 full-width full-height main-container primary-scrollbar primary-scrollbar-space p-5 lg-hide-scrollbar lg-pb-30">
        <div className="flex column gap-5">
          <section className="pt-10 font-peyda">
            <div className="bg-background form overflow-hidden">
              <div className="flex md-column gap-4 border-bottom pb-4">
                <div className="w-p3 md-full-width md-order-1">
                  <SearchInput
                    type="text"
                    placeholder="جستجو در نظرات..."
                    className="full-width px-4 py-3 round-md font-peyda input-primary"
                  />
                </div>

                <div className="flex wrap gap-3 md-order-2">
                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" امتیاز برتر "}
                  </button>

                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" همه "}
                  </button>

                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" پاسخ داده شده "}
                  </button>

                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" بدون پاسخ "}
                  </button>

                  <button
                    className="btn-secondary flex align-items-center gap-2 px-4 py-3 font-peyda"
                    type="button"
                  >
                    {" بازه زمانی "}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="flex row justify-content-between py-4 px-5 bg-background-alt border-bottom text-muted text-sm md-remove">
                  <div className="">{"کاربر و نظر"}</div>

                  <div className="">{"آگهی / فروشگاه"}</div>

                  <div className="text-center">{"عملیات"}</div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" آیفون 13 پرو مکس "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: موبایل "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" ساعت هوشمند سامسونگ "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: ساعت "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" آیفون 13 پرو مکس "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: موبایل "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" ساعت هوشمند سامسونگ "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: ساعت "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" آیفون 13 پرو مکس "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: موبایل "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>

                <div className="flex md-column gap-5 py-6 border-bottom">
                  <div className="flex column gap-4 align-items-start full-width">
                    <div className="flex row gap-4">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="https://placehold.co/48"
                        alt=""
                        className="w-6 h-6 round-full"
                      />

                      <div className="flex column gap-1">
                        <div className="semi-bold flex row align-items-center gap-2">
                          {" محمد رضا یوسفی "}
                          <div className="flex round-full bg-primary h-18px w-18px justify-content-center align-items-center">
                            <i className="icon icon-tick text-inverse h-12px w-12px"></i>
                          </div>
                        </div>

                        <div className="text-muted flex row align-items-center gap-2 font-sans">
                          <div className="flex gap-1">
                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>

                            <i className="icon icon-star text-gold w-14px h-14px"></i>
                          </div>
                          {" 5.0 "}
                        </div>
                      </div>
                    </div>

                    <p className="text-text text-sm max-w-80 m-0">
                      {" محصول دقیقا مطابق توضیحات بود و ارسال سریع انجام شد. "}
                    </p>

                    <span className="flex gap-2 text-primary text-sm">
                      <i className="icon icon-reply"></i>
                      {" پاسخ داده شده "}
                    </span>
                  </div>

                  <div className="flex gap-4 align-items-center full-width">
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/assets/placeholders/60x60.svg"
                      alt=""
                      className="w-10 h-10 round-sm"
                    />

                    <div className="flex column gap-1">
                      <span className="semi-bold text-sm">
                        {" ساعت هوشمند سامسونگ "}
                      </span>

                      <span className="text-muted text-sm">
                        {" دسته: ساعت "}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 align-items-center md-full-width">
                    <button
                      className="flex justify-content-center gap-2 font-peyda btn-primary px-6 py-3 md-full-width"
                      type="button"
                    >
                      <i className="icon icon-eye"></i>
                      {" مشاهده "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex md-column gap-4 full-width justify-content-between align-items-center">
            <div className="flex justify-content-center align-items-center">
              <div className="flex align-items-center gap-2 p-2 bg-background-alt round-full border border-surface">
                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-muted hover-bg-background cursor-pointer"
                  type="button"
                >
                  <i className="icon icon-right-2 w-19px h-19px"></i>
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center bg-primary text-white semi-bold cursor-pointer text-inverse font-sans tranistion-all"
                  type="button"
                >
                  {" 1 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all"
                  type="button"
                >
                  {" 2 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all sm-remove"
                  type="button"
                >
                  {" 3 "}
                </button>

                <span className="pr-2 pl-2 opacity-5 sm-remove">{"..."}</span>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-text hover-bg-background cursor-pointer font-sans tranistion-all sm-remove"
                  type="button"
                >
                  {" 12 "}
                </button>

                <button
                  className="w-40px h-40px round-full flex justify-content-center align-items-center text-muted hover-bg-background cursor-pointer tranistion-all"
                  type="button"
                >
                  <i className="icon icon-left w-19px h-19px"></i>
                </button>
              </div>
            </div>

            <div className="text-muted text-sm font-sans">
              {" نمایش 1 تا 5 از 128 نظر "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
