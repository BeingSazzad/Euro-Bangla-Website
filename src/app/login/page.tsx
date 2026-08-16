import { redirect } from "next/navigation";

/** Customer accounts are Future Phase (PDF). Keep login UI code; hide from live product. */
export default function page() {
  redirect("/inquiry");
}
