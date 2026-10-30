export function toPersianDigits(value: string): string {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

export function formatPersianPrice(value: string): string {
  return toPersianDigits(value).replace(/,/g, "٬");
}
