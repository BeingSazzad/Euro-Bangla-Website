import { COMPANY } from "@/data/company";
import type { VisaCopyBlock, VisaDestination } from "@/data/visaDestinations";
import { visaCopyFor } from "@/data/visaDestinations";
import type { Locale } from "@/i18n/locales";
import { tx } from "@/data/localized";

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

const blockHtml = (block: VisaCopyBlock, locale: Locale) => {
   if (block.type === "heading") return `<h2>${escapeHtml(tx(block.text, locale))}</h2>`;
   if (block.type === "paragraph") return `<p>${escapeHtml(tx(block.text, locale))}</p>`;
   const Tag = block.style === "number" ? "ol" : "ul";
   return `<${Tag}>${block.items.map((item) => `<li>${escapeHtml(tx(item, locale))}</li>`).join("")}</${Tag}>`;
};

export const downloadVisaChecklist = ({
   dest,
   locale,
   disclaimer,
}: {
   dest: VisaDestination;
   locale: Locale;
   disclaimer: string;
}) => {
   if (typeof window === "undefined") return;

   const country = tx(dest.name, locale);
   const body = visaCopyFor(dest).map((block) => blockHtml(block, locale)).join("");
   const html = `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(country)} — ${escapeHtml(COMPANY.name)}</title>
  <style>
    body { font-family: "Noto Sans Bengali", "Poppins", Arial, sans-serif; max-width: 720px; margin: 32px auto; padding: 0 20px 48px; color: #0f172a; line-height: 1.55; }
    h1 { font-size: 24px; margin: 0 0 8px; }
    h2 { font-size: 18px; margin: 24px 0 8px; }
    p, li { font-size: 15px; }
    .meta, .foot { color: #64748b; font-size: 14px; }
    .foot { margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <p class="meta">${escapeHtml(COMPANY.name)}</p>
  <h1>${escapeHtml(country)}</h1>
  <p class="meta">${escapeHtml(tx(dest.visaType, locale))} · ${escapeHtml(tx(dest.processing, locale))}</p>
  ${body}
  <p class="foot">${escapeHtml(disclaimer)}</p>
</body>
</html>`;

   const blob = new Blob([html], { type: "text/html;charset=utf-8" });
   const url = URL.createObjectURL(blob);
   const link = document.createElement("a");
   link.href = url;
   link.download = `Euro-Bangla-${fileSafe(country)}-requirements.html`;
   document.body.appendChild(link);
   link.click();
   link.remove();
   URL.revokeObjectURL(url);
};
