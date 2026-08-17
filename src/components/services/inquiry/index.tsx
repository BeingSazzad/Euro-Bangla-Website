"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import ServicePageShell from "@/components/common/ServicePageShell";
import InquiryForm from "@/components/forms/InquiryForm";
import { EbtButtonLink } from "@/components/common/EbtButton";
import { COMPANY, whatsappLink } from "@/data/company";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";
import panelImage from "@/assets/img/destination/des.jpg";

const InquiryPage = () => {
   const { t } = useT();

   return (
      <ServicePageShell title="inquiry.title" subTitle="nav.inquiry">
         <div className="ebt-inq-page ebt-page-content">
            <div className="container">
               <div className="ebt-inq-split-card">
                  <aside className="ebt-inq-aside">
                     <Image src={panelImage} alt="" fill sizes="(max-width: 991px) 100vw, 42vw" />
                     <div className="ebt-inq-aside-shade" aria-hidden="true" />
                     <div className="ebt-inq-aside-copy">
                        <p className="ebt-inq-aside-kicker">{t("inquiry.panelKicker")}</p>
                        <h2>{t("inquiry.panelTitle")}</h2>
                        <p className="ebt-inq-aside-text">{t("inquiry.panelText")}</p>
                        <ul className="ebt-inq-aside-list">
                           <li>
                              <Phone {...iconProps("sm")} />
                              <Link href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phone}</Link>
                           </li>
                           <li>
                              <Mail {...iconProps("sm")} />
                              <Link href={`mailto:${COMPANY.email}`}>{COMPANY.email}</Link>
                           </li>
                           <li>
                              <MapPin {...iconProps("sm")} />
                              <Link href={COMPANY.mapLink}>{COMPANY.addressLine1}</Link>
                           </li>
                        </ul>
                        <EbtButtonLink href={whatsappLink()} variant="whatsapp" external target="_blank" rel="noreferrer">
                           {t("wa.label")}
                        </EbtButtonLink>
                     </div>
                  </aside>
                  <div className="ebt-inq-card">
                     <div className="ebt-inq-card-head">
                        <h2>{t("inquiry.formTitle")}</h2>
                        <p>{t("inquiry.subtitle")}</p>
                     </div>
                     <Suspense>
                        <InquiryForm />
                     </Suspense>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default InquiryPage;
