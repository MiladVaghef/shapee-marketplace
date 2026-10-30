import { redirect } from "next/navigation";
export default function Page() {
  redirect("/inner-category/products-category?type=tours");
}
