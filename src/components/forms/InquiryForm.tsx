"use client";

import { FormEvent, ReactNode, useId, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CircleCheck } from "lucide-react";
import { COMPANY, whatsappLink } from "@/data/company";
import EbtButton, { EbtButtonLink } from "@/components/common/EbtButton";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";
import {
   buildInquiryMailto,
   buildInquiryWhatsApp,
   generateInquiryRef,
   saveInquiry,
   type InquiryRecord,
} from "@/utils/inquiry";

const SERVICES = ["flight", "hajj", "tour", "hotel", "bus", "visa", "other"] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "name" | "phone" | "email";
type FieldErrors = Partial<Record<FieldName, string>>;

type Props = {
   defaultService?: string;
   defaultDestination?: string;
   defaultDates?: string;
   defaultPassengers?: string;
   defaultMessage?: string;
   simple?: boolean;
   compact?: boolean;
   locked?: boolean;
};

const InquiryForm = ({
   defaultService,
   defaultDestination,
   defaultDates,
   defaultPassengers,
   defaultMessage,
   simple = false,
   compact = false,
   locked = false,
}: Props) => {
   const { t } = useT();
   const params = useSearchParams();
   const uid = useId();
   const [honeypot, setHoneypot] = useState("");
   const [errors, setErrors] = useState<FieldErrors>({});
   const [submitting, setSubmitting] = useState(false);
   const [record, setRecord] = useState<InquiryRecord | null>(null);

   const initial = useMemo(() => {
      if (locked) {
         return {
            service: defaultService || "other",
            destination: defaultDestination || "",
            dates: defaultDates || "",
            passengers: defaultPassengers || "",
            message: defaultMessage || "",
            from: "",
         };
      }
      return {
         service: defaultService || params.get("service") || "flight",
         destination: defaultDestination || params.get("destination") || params.get("to") || "",
         dates: defaultDates || params.get("dates") || params.get("depart") || "",
         passengers: defaultPassengers || params.get("passengers") || params.get("pax") || "",
         message: defaultMessage || params.get("message") || "",
         from: params.get("from") || "",
      };
   }, [defaultDates, defaultDestination, defaultMessage, defaultPassengers, defaultService, locked, params]);

   const fieldId = (name: string) => `${uid}-${name}`;

   const validate = (form: FormData): FieldErrors => {
      const next: FieldErrors = {};
      if (!String(form.get("name") || "").trim()) next.name = t("inquiry.errName");
      if (!String(form.get("phone") || "").trim()) next.phone = t("inquiry.errPhone");
      const email = String(form.get("email") || "").trim();
      if (!locked && !email) next.email = t("inquiry.errEmail");
      else if (email && !EMAIL_PATTERN.test(email)) next.email = t("inquiry.errEmail");
      return next;
   };

   const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (honeypot || submitting) return;
      const form = new FormData(event.currentTarget);
      const nextErrors = validate(form);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      setSubmitting(true);
      // Yield one frame so the pending button state paints before the reference
      // is generated and written to storage.
      await new Promise<void>((resolve) => {
         if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => resolve());
         else resolve();
      });

      const service = String(form.get("service") || initial.service || "other");
      const from = String(form.get("from") || initial.from);
      const destination = String(form.get("destination") || "");
      const next: InquiryRecord = {
         ref: generateInquiryRef(),
         createdAt: new Date().toISOString(),
         service: t(`inquiry.services.${service}`),
         name: String(form.get("name") || "").trim(),
         email: String(form.get("email") || "").trim(),
         phone: String(form.get("phone") || "").trim(),
         destination: [from, destination].filter(Boolean).join(" → ") || destination,
         dates: String(form.get("dates") || ""),
         passengers: String(form.get("passengers") || ""),
         message: String(form.get("message") || ""),
      };
      saveInquiry(next);
      setSubmitting(false);
      setRecord(next);
   };

   const Field = ({
      name,
      label,
      note,
      hint,
      required = false,
      full = false,
      children,
   }: {
      name: string;
      label: string;
      note?: string;
      hint?: string;
      required?: boolean;
      full?: boolean;
      children: ReactNode;
   }) => {
      const error = errors[name as FieldName];
      return (
         <div className={`ebt-field${full ? " ebt-form-grid--full" : ""}`}>
            <label className="ebt-label" htmlFor={fieldId(name)}>
               {label}
               {required && (
                  <span className="ebt-label-note" aria-hidden="true">
                     *
                  </span>
               )}
               {!required && note && <span className="ebt-label-note">{note}</span>}
            </label>
            {children}
            {error && (
               <p className="ebt-field-msg ebt-field-msg--error" id={`${fieldId(name)}-msg`}>
                  <AlertCircle {...iconProps("sm")} />
                  <span>{error}</span>
               </p>
            )}
            {!error && hint && (
               <p className="ebt-field-msg" id={`${fieldId(name)}-msg`}>
                  {hint}
               </p>
            )}
         </div>
      );
   };

   const describedBy = (name: string, hint?: string) =>
      errors[name as FieldName] || hint ? `${fieldId(name)}-msg` : undefined;

   if (record) {
      return (
         <div className={`ebt-inq-done${compact ? " ebt-inq-done--compact" : ""}`}>
            <p className="ebt-form-status ebt-form-status--success" role="status">
               <CircleCheck {...iconProps("md")} />
               <span>{t("inquiry.success")}</span>
            </p>
            <p className="ebt-inq-done-ref">
               {t("inquiry.refLabel")}: <strong>{record.ref}</strong>
            </p>
            <p className="ebt-inq-done-text">{locked ? t("inquiry.quoteHint") : t("inquiry.emailHint")}</p>
            <div className="ebt-inq-done-actions">
               <EbtButtonLink
                  variant="whatsapp"
                  href={whatsappLink(buildInquiryWhatsApp(record))}
                  external
                  target="_blank"
                  rel="noreferrer"
               >
                  {t("inquiry.whatsapp")}
               </EbtButtonLink>
               <EbtButtonLink variant="outline" href={buildInquiryMailto(record, COMPANY.email)} external>
                  {t("inquiry.emailUs")}
               </EbtButtonLink>
               <EbtButton variant="ghost" onClick={() => setRecord(null)}>
                  {t("inquiry.another")}
               </EbtButton>
            </div>
         </div>
      );
   }

   const errorCount = Object.keys(errors).length;

   return (
      <form
         className={`ebt-inq-form${compact ? " ebt-inq-form--compact" : ""}`}
         onSubmit={onSubmit}
         noValidate
      >
         <input
            className="d-none"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            aria-hidden="true"
         />
         <input type="hidden" name="from" defaultValue={initial.from} />
         {simple && !locked && <input type="hidden" name="service" value="other" />}
         {locked && (
            <>
               <input type="hidden" name="service" value={initial.service} />
               <input type="hidden" name="destination" value={initial.destination} />
               {initial.destination && (
                  <p className="ebt-inq-package">
                     <span>{t("inquiry.selectedPackage")}</span>
                     <strong>{initial.destination}</strong>
                  </p>
               )}
            </>
         )}

         <div className="ebt-form-grid">
            <Field name="name" label={t("inquiry.name")} required full={compact}>
               <input
                  id={fieldId("name")}
                  className="ebt-control"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={describedBy("name")}
               />
            </Field>

            <Field name="phone" label={t("inquiry.phone")} required full={compact}>
               <input
                  id={fieldId("phone")}
                  className="ebt-control"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={describedBy("phone")}
               />
            </Field>

            <Field
               name="email"
               label={t("inquiry.email")}
               required={!locked}
               note={locked ? t("inquiry.optionalNote") : undefined}
               full={compact || simple}
            >
               <input
                  id={fieldId("email")}
                  className="ebt-control"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={!locked}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={describedBy("email")}
               />
            </Field>

            {!simple && !locked && (
               <>
                  <Field name="service" label={t("inquiry.service")} full={compact}>
                     <select id={fieldId("service")} className="ebt-control" name="service" defaultValue={initial.service}>
                        {SERVICES.map((item) => (
                           <option key={item} value={item}>
                              {t(`inquiry.services.${item}`)}
                           </option>
                        ))}
                     </select>
                  </Field>

                  <Field name="destination" label={t("inquiry.destination")} full={compact}>
                     <input
                        id={fieldId("destination")}
                        className="ebt-control"
                        name="destination"
                        type="text"
                        defaultValue={initial.destination}
                     />
                  </Field>
               </>
            )}

            {!simple && (
               <>
                  <Field name="dates" label={t("inquiry.dates")} hint={t("inquiry.datesHint")}>
                     <input
                        id={fieldId("dates")}
                        className="ebt-control"
                        name="dates"
                        type="text"
                        defaultValue={initial.dates}
                        aria-describedby={describedBy("dates", t("inquiry.datesHint"))}
                     />
                  </Field>

                  <Field name="passengers" label={t("inquiry.passengers")} hint={t("inquiry.passengersHint")}>
                     <input
                        id={fieldId("passengers")}
                        className="ebt-control"
                        name="passengers"
                        type="text"
                        defaultValue={initial.passengers}
                        aria-describedby={describedBy("passengers", t("inquiry.passengersHint"))}
                     />
                  </Field>
               </>
            )}

            <Field name="message" label={t("inquiry.message")} note={t("inquiry.optionalNote")} full>
               <textarea
                  id={fieldId("message")}
                  className="ebt-control"
                  name="message"
                  defaultValue={initial.message}
               />
            </Field>
         </div>

         <div aria-live="polite">
            {errorCount > 0 && (
               <p className="ebt-form-status ebt-form-status--error">
                  <AlertCircle {...iconProps("md")} />
                  <span>{t("inquiry.fixFields")}</span>
               </p>
            )}
         </div>

         <EbtButton
            type="submit"
            variant="primary"
            size="lg"
            block={compact}
            loading={submitting}
            loadingLabel={t("inquiry.sending")}
         >
            {locked ? t("inquiry.requestQuote") : simple ? t("contact.send") : t("inquiry.submit")}
         </EbtButton>

         {locked && <p className="ebt-inq-note">{t("inquiry.requestHint")}</p>}
      </form>
   );
};

export default InquiryForm;
