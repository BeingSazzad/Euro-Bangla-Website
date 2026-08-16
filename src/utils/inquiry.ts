export type InquiryRecord = {
   ref: string;
   createdAt: string;
   service: string;
   name: string;
   email: string;
   phone: string;
   destination: string;
   dates: string;
   passengers: string;
   message: string;
};

const STORAGE_KEY = "ebt-inquiries";

export const generateInquiryRef = () => {
   const now = new Date();
   const date = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
   ].join("");
   const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
   return `EBT-${date}-${rand}`;
};

export const saveInquiry = (record: InquiryRecord) => {
   if (typeof window === "undefined") return;
   const current = readInquiries();
   window.localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...current].slice(0, 50)));
};

export const readInquiries = (): InquiryRecord[] => {
   if (typeof window === "undefined") return [];
   try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as InquiryRecord[]) : [];
   } catch {
      return [];
   }
};

export const buildInquiryMailto = (record: InquiryRecord, adminEmail: string) => {
   const subject = encodeURIComponent(`Inquiry ${record.ref} — ${record.service}`);
   const body = encodeURIComponent(
      [
         `Reference: ${record.ref}`,
         `Service: ${record.service}`,
         `Name: ${record.name}`,
         `Email: ${record.email}`,
         `Phone: ${record.phone}`,
         `Destination: ${record.destination || "-"}`,
         `Dates: ${record.dates || "-"}`,
         `Passengers: ${record.passengers || "-"}`,
         "",
         record.message,
      ].join("\n")
   );
   return `mailto:${adminEmail}?subject=${subject}&body=${body}`;
};

export const buildInquiryWhatsApp = (record: InquiryRecord) =>
   [
      `Euro Bangla Travels inquiry ${record.ref}`,
      `Service: ${record.service}`,
      `Name: ${record.name}`,
      `Phone: ${record.phone}`,
      record.destination ? `Destination: ${record.destination}` : "",
      record.dates ? `Dates: ${record.dates}` : "",
      record.message,
   ]
      .filter(Boolean)
      .join("\n");
