import Link from "next/link";
import { accountNavigation } from "@/data/account-navigation";

export function ProfileHub() {
  const groups = [...new Set(accountNavigation.map((item) => item.group))];
  const shortcuts = [
    ["dashboard", "داشبورد", "account-layout-dashboard"],
    ["my-wallet", "کیف پول", "account-wallet"],
    ["chat", "پیام‌ها", "account-messages-square"],
    ["my-products", "آگهی‌ها", "account-layers"],
  ];
  return (
    <section
      className="account-home-mobile profile-hub font-peyda"
      aria-label="صفحه پروفایل"
    >
      <div className="profile-hub-inner">
        <div className="profile-hub-heading">
          <div>
            <span>شاپی من</span>
            <h1>حساب کاربری</h1>
          </div>
          <Link
            href="/account/edit-profile"
            aria-label="ویرایش پروفایل"
            className="profile-hub-edit"
          >
            <i className="icon icon-account-pencil" />
          </Link>
        </div>
        <Link href="/profile/user-profile" className="profile-hub-identity">
          <img decoding="async" loading="lazy"
            src="/assets/images/example/profile-picture.jpg"
            alt="علی محمدی"
          />
          <div>
            <h2>علی محمدی</h2>
            <span>مشاهده پروفایل من</span>
          </div>
          <i className="icon icon-account-chevron-left" />
        </Link>
        <nav className="profile-hub-shortcuts" aria-label="دسترسی سریع">
          {shortcuts.map(([slug, label, icon]) => (
            <Link key={slug} href={`/account/${slug}`}>
              <span>
                <i className={`icon icon-${icon}`} />
              </span>
              <strong>{label}</strong>
            </Link>
          ))}
        </nav>
        {groups.map((group) => (
          <section key={group} className="profile-hub-group">
            <h2>{group}</h2>
            <div>
              {accountNavigation
                .filter((item) => item.group === group)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/account/${item.slug}`}
                    className="profile-hub-row"
                  >
                    <i className={`icon icon-${item.icon}`} />
                    <span>{item.label}</span>
                    <i className="icon icon-account-chevron-left" />
                  </Link>
                ))}
            </div>
          </section>
        ))}
        <Link href="/login" className="profile-hub-logout">
          <i className="icon icon-account-log-out" />
          خروج از حساب کاربری
        </Link>
      </div>
    </section>
  );
}
