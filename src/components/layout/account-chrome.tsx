import Link from "next/link";

export function AccountHeader() {
  return (
    <>
      <header className="flex row justify-content-between full-width inline-space pt-4 pb-4 shadow-unset border-bottom">
        <div className="flex gap-8 justify-content-center align-items-center">
          <button
            id="account-menu-button"
            aria-label="فهرست حساب کاربری"
            aria-controls="account-menu"
            type="button"
          >
            <i className="icon icon-menu w-3 h-3 remove xl-block"></i>
          </button>

          <Link
            href="/"
            className="flex justify-content-center align-items-center"
          >
            <img
              className="w-14 md-w-10"
              src="/assets/logo/shapee.png"
              alt="لوگو شاپی"
            />
          </Link>
        </div>

        <div className="flex row align-items-center justify-content-center gap-3 relative">
          <button className="btn-primary p-3 relative" type="button">
            <span className="flex align-items-center justify-content-center round-full w-20px h-20px text-primary font-sans bg-background primary-border absolute -top-1 -right-1 text-xs">
              {" 4 "}
            </span>

            <i className="icon icon-bell text-inverse"></i>
          </button>

          <button
            className="flex gap-2 justify-content-center align-items-center btn-primary font-peyda w-20 pt-3 pb-3 h-40px xs-remove"
            type="button"
          >
            <i className="icon icon-plus-alt text-inverse mb-2px"></i>
            {" ثبت آگهی "}
          </button>

          <div className="flex column justify-content-center align-items-center bg-background round-sm shadow-sm absolute top-17 -right-34 w-40 remove">
            <div className="flex column overflow-y-auto full-width">
              <button
                className="hover-bg-background-alt flex align-items-center justify-content-between border-bottom font-peyda text-sm pt-4 pb-4 gap-2 p-2"
                type="button"
              >
                <i className="icon icon-attention-circle text-muted w-17px h-17px"></i>

                <p className="flex gap-1 align-items-center text-xs text-right full-width">
                  {" شما یک "}
                  <span className="text-primary semi-bold">{"اخطار"}</span>
                  {" دریافت کرده اید "}
                </p>

                <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
              </button>

              <button
                className="hover-bg-background-alt flex align-items-center justify-content-between border-bottom font-peyda text-sm pt-4 pb-4 gap-2 p-2 bg-primary-light"
                type="button"
              >
                <i className="icon icon-money text-muted w-17px h-17px"></i>

                <p className="flex gap-1 align-items-center text-xs text-right full-width">
                  {" حساب شما به مبلغ"}
                  <span className="text-primary semi-bold font-peyda">
                    {"350,000"}
                  </span>
                  {" شارژ شد. "}
                </p>

                <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
              </button>

              <button
                className="hover-bg-background-alt flex align-items-center justify-content-between font-peyda text-sm pt-4 pb-4 gap-2 p-2"
                type="button"
              >
                <i className="icon icon-profile text-muted w-17px h-17px"></i>

                <p className="flex gap-1 align-items-center text-xs text-right full-width">
                  {" محصول"}
                  <span className="text-primary semi-bold font-peyda">
                    {'"دکوری چوبی طرح گل"'}
                  </span>
                  {"به فروش رفت. "}
                </p>

                <i className="icon icon-left-2 opacity-3 w-3 h-3"></i>
              </button>

              <button
                className="btn-primary-light mb-4 mr-4 ml-4 flex align-items-center justify-content-center font-peyda text-sm pt-4 pb-4"
                type="button"
              >
                {" مشاهده همه نوتوفیکیشن ها "}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export function AccountFooters() {
  return (
    <>
      <footer className="full-width lg-remove">
        <div className="pt-4 pb-4 flex justify-content-center full-width border-top bg-background">
          <p className="text-text text-xs opacity-7 font-sans m-0">
            {" تمامی حقوق برای تیم شاپی محفوظ می باشد. "}
            <span dir="rtl">{"© ۱۴۰۵"}</span>
          </p>
        </div>
      </footer>
    </>
  );
}
