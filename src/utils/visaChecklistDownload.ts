import { COMPANY } from "@/data/company";
import type { VisaDestination, VisaDocGroupId } from "@/data/visaDestinations";
import { visaDocGroups, visaDocItemsFor } from "@/data/visaDestinations";
import type { Locale } from "@/i18n/locales";
import { tx } from "@/data/localized";

type GroupBlock = {
   id: VisaDocGroupId;
   title: string;
   items: string[];
};

const escapeHtml = (value: string) =>
   value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

const fileSafe = (value: string) =>
   value
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);

export const visaChecklistGroups = (dest: VisaDestination, locale: Locale): GroupBlock[] =>
   visaDocGroups
      .map((group) => ({
         id: group.id,
         title: tx(group.title, locale),
         items: visaDocItemsFor(dest, group.id).map((item) => tx(item, locale)),
      }))
      .filter((group) => group.items.length > 0);

const checklistHtml = ({
   country,
   visaType,
   processing,
   groups,
   locale,
   disclaimer,
}: {
   country: string;
   visaType: string;
   processing: string;
   groups: GroupBlock[];
   locale: Locale;
   disclaimer: string;
}) => {
   const sections = groups
      .map(
         (group) => `
      <h2>${escapeHtml(group.title)}</h2>
      <ol>
        ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>`
      )
      .join("");

   return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(country)} — ${escapeHtml(COMPANY.name)}</title>
  <style>
    body { font-family: "Noto Sans Bengali", "Poppins", Arial, sans-serif; max-width: 720px; margin: 32px auto; padding: 0 20px 48px; color: #0f172a; line-height: 1.55; }
    .brand { color: #0047AB; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; font-size: 12px; margin: 0 0 8px; }
    h1 { font-size: 26px; margin: 0 0 8px; }
    .meta { color: #475569; font-size: 14px; margin: 0 0 24px; }
    h2 { font-size: 18px; margin: 28px 0 10px; color: #0047AB; }
    ol { margin: 0; padding-left: 22px; }
    li { margin-bottom: 8px; }
    .foot { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 13px; }
  </style>
</head>
<body>
  <p class="brand">${escapeHtml(COMPANY.name)}</p>
  <h1>${escapeHtml(country)}</h1>
  <p class="meta">${escapeHtml(visaType)} · ${escapeHtml(processing)}<br />${escapeHtml(COMPANY.address)} · ${escapeHtml(COMPANY.phone)}</p>
  ${sections}
  <p class="foot">${escapeHtml(disclaimer)}</p>
</body>
</html>`;
};

export const downloadVisaChecklist = ({
   dest,
   locale,
   groups,
   filenameLabel,
   disclaimer,
}: {
   dest: VisaDestination;
   locale: Locale;
   groups: GroupBlock[];
   filenameLabel: string;
   disclaimer: string;
}) => {
   if (typeof window === "undefined") return;

   const country = tx(dest.name, locale);
   const html = checklistHtml({
      country,
      visaType: tx(dest.visaType, locale),
      processing: tx(dest.processing, locale),
      groups,
      locale,
      disclaimer,
   });
   const blob = new Blob([html], { type: "text/html;charset=utf-8" });
   const url = URL.createObjectURL(blob);
   const link = document.createElement("a");
   link.href = url;
   link.download = `Euro-Bangla-${fileSafe(country)}-${fileSafe(filenameLabel)}.html`;
   document.body.appendChild(link);
   link.click();
   link.remove();
   URL.revokeObjectURL(url);
};
