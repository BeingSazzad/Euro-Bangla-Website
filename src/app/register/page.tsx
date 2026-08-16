import { redirect } from "next/navigation";

/** Customer accounts are Future Phase (PDF). Keep register UI code; hide from live product. */
export default function page() {
  redirect("/inquiry");
}
