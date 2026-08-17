"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY, whatsappLink } from "@/data/company";
import { useT } from "@/i18n/LanguageProvider";
import {
   buildInquiryMailto,
   buildInquiryWhatsApp,
   generateInquiryRef,
   saveInquiry,
   type InquiryRecord,
} from "@/utils/inquiry";

const SERVICES = ["flight", "hajj", "tour", "hotel", "bus", "visa", "other"] as const;

type Props = {
   defaultService?: string;
   defaultDestination?: string;
   defaultDates?: string;
   defaultPassengers?: string;
   defaultMessage?: string;
   simple?: boolean;
   compact?: boolean;
};

const InquiryForm = ({
   defaultService,
   defaultDestination,
   defaultDates,
   defaultPassengers,
   defaultMessage,
   simple = false,
   compact = false,
}: Props) => {
   const { t } = useT();
   const params = useSearchParams();
   const [honeypot, setHoneypot] = useState("");
   const [error, setError] = useState("");
   const [record, setRecord] = useState<InquiryRecord | null>(null);

   const initial = useMemo(
      () => ({
         service: defaultService || params.get("service") || "flight",
         destination: defaultDestination || params.get("destination") || params.get("to") || "",
         dates: defaultDates || params.get("dates") || params.get("depart") || "",
         passengers: defaultPassengers || params.get("passengers") || params.get("pax") || "",
         message: defaultMessage || params.get("message") || "",
         from: params.get("from") || "",
      }),
      [defaultDates, defaultDestination, defaultMessage, defaultPassengers, defaultService, params]
   );

   const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (honeypot) return;
      const form = new FormData(event.currentTarget);
      const name = String(form.get("name") || "").trim();
      const email = String(form.get("email") || "").trim();
      const phone = String(form.get("phone") || "").trim();
      const service = String(form.get("service") || "other");
      if (!name || !email || !phone) {
         setError(t("inquiry.required"));
         return;
      }
      const from = String(form.get("from") || initial.from);
      const destination = String(form.get("destination") || "");
      const next: InquiryRecord = {
         ref: generateInquiryRef(),
         createdAt: new Date().toISOString(),
         service: t(`inquiry.services.${service}`),
         name,
         email,
         phone,
         destination: [from, destination].filter(Boolean).join(" → ") || destination,
         dates: String(form.get("dates") || ""),
         passengers: String(form.get("passengers") || ""),
         message: String(form.get("message") || ""),
      };
      saveInquiry(next);
      setError("");
      setRecord(next);
   };

   if (record) {
      return (
         <div className={`tg-contact-form tg-tour-about-review-form${compact ? " ebt-inq" : ""}`}>
            <h4 className="mb-10">{t("inquiry.success")}</h4>
            <p className="mb-10">
               {t("inquiry.refLabel")}: <strong>{record.ref}</strong>
            </p>
            <p className="mb-25">{t("inquiry.emailHint")}</p>
            <div className="d-flex flex-wrap" style={{ gap: 12 }}>
               <a className="tg-btn" href={whatsappLink(buildInquiryWhatsApp(record))} target="_blank" rel="noreferrer">
                  {t("inquiry.whatsapp")}
               </a>
               <a className="tg-btn" href={buildInquiryMailto(record, COMPANY.email)}>
                  {t("inquiry.emailUs")}
               </a>
               <button type="button" className="tg-btn" onClick={() => setRecord(null)}>
                  {t("inquiry.another")}
               </button>
            </div>
         </div>
      );
   }

   return (
      <form className={`tg-contact-form tg-tour-about-review-form${compact ? " ebt-inq" : ""}`} onSubmit={onSubmit}>
         <input
            className="d-none"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            aria-hidden="true"
         />
         <input type="hidden" name="from" defaultValue={initial.from} />
         {simple && <input type="hidden" name="service" value="other" />}
         {compact ? (
            <>
               <input className="input" name="name" type="text" placeholder={t("inquiry.name")} />
               <input className="input" name="email" type="email" placeholder={t("inquiry.email")} />
               <input className="input" name="phone" type="tel" placeholder={t("inquiry.phone")} />
               <select className="input" name="service" defaultValue={initial.service}>
                  {SERVICES.map((item) => (
                     <option key={item} value={item}>
                        {t(`inquiry.services.${item}`)}
                     </option>
                  ))}
               </select>
               <input className="input" name="destination" type="text" defaultValue={initial.destination} placeholder={t("inquiry.destination")} />
               <div className="ebt-inq-split">
                  <input className="input" name="dates" type="text" defaultValue={initial.dates} placeholder={t("inquiry.dates")} />
                  <input className="input" name="passengers" type="text" defaultValue={initial.passengers} placeholder={t("inquiry.passengers")} />
               </div>
               <textarea className="textarea" name="message" defaultValue={initial.message} placeholder={t("inquiry.message")} />
               {error && <p className="form_error">{error}</p>}
               <button type="submit" className="tg-btn">
                  {t("inquiry.submit")}
               </button>
            </>
         ) : (
            <div className="row">
               <div className="col-lg-6 mb-25">
                  <input className="input" name="name" type="text" placeholder={t("inquiry.name")} />
               </div>
               <div className="col-lg-6 mb-25">
                  <input className="input" name="email" type="email" placeholder={t("inquiry.email")} />
               </div>
               <div className={`${simple ? "col-lg-12" : "col-lg-6"} mb-25`}>
                  <input className="input" name="phone" type="tel" placeholder={t("inquiry.phone")} />
               </div>
               {!simple && (
                  <>
                     <div className="col-lg-6 mb-25">
                        <select className="input" name="service" defaultValue={initial.service} style={{ height: 56 }}>
                           {SERVICES.map((item) => (
                              <option key={item} value={item}>
                                 {t(`inquiry.services.${item}`)}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className="col-lg-6 mb-25">
                        <input className="input" name="destination" type="text" defaultValue={initial.destination} placeholder={t("inquiry.destination")} />
                     </div>
                     <div className="col-lg-3 mb-25">
                        <input className="input" name="dates" type="text" defaultValue={initial.dates} placeholder={t("inquiry.dates")} />
                     </div>
                     <div className="col-lg-3 mb-25">
                        <input className="input" name="passengers" type="text" defaultValue={initial.passengers} placeholder={t("inquiry.passengers")} />
                     </div>
                  </>
               )}
               <div className="col-lg-12 mb-25">
                  <textarea className="textarea" name="message" defaultValue={initial.message} placeholder={t("inquiry.message")}></textarea>
               </div>
               {error && (
                  <div className="col-12">
                     <p className="form_error">{error}</p>
                  </div>
               )}
               <div className="col-12">
                  <button type="submit" className="tg-btn">
                     {simple ? t("contact.send") : t("inquiry.submit")}
                  </button>
               </div>
            </div>
         )}
      </form>
   );
};

export default InquiryForm;
