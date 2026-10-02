import { redirect } from "next/navigation";

/**
 * /inquiry is merged into /contact.
 * Preserve any query params (service, scope, etc.) for the contact form.
 */
const page = () => {
  redirect("/contact");
};

export default page;
