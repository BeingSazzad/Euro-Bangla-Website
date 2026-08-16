"use client";

import Link from "next/link";
import ServicePageShell from "@/components/common/ServicePageShell";
import { useT } from "@/i18n/LanguageProvider";
import { TERMS_INTRO, TERMS_SECTIONS, TERMS_UPDATED } from "@/data/termsContent";
import {
   PRIVACY_CLOSING,
   PRIVACY_INTRO,
   PRIVACY_SECTIONS,
   PRIVACY_UPDATED,
} from "@/data/privacyContent";

const renderParagraph = (
   text: string,
   t: (key: string) => string,
   key: string
) => {
   if (text.includes("please visit our Contact page")) {
      return (
         <p className="mb-15" key={key}>
            For current contact information, please visit our{" "}
            <Link href="/contact">{t("nav.contact")}</Link> page.
         </p>
      );
   }

   if (text.includes("phone number, email address, and other contact information")) {
      return (
         <p className="mb-15" key={key}>
            For our current phone number, email address, and other contact information, please visit our{" "}
            <Link href="/contact">{t("nav.contact")}</Link> page.
         </p>
      );
   }

   if (text.includes("Privacy Policy") && text.includes("accordance")) {
      return (
         <p className="mb-15" key={key}>
            Your personal information will be handled in accordance with our{" "}
            <Link href="/privacy">{t("footer.privacy")}</Link>.
         </p>
      );
   }

   return (
      <p className="mb-15" key={key}>
         {text}
      </p>
   );
};

const LegalPage = ({ kind }: { kind: "privacy" | "cookies" | "terms" }) => {
   const { t } = useT();

   if (kind === "terms") {
      return (
         <ServicePageShell title="legal.termsTitle" subTitle="nav.terms">
            <div className="tg-tour-about-area ebt-page-content">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div className="ebt-legal-doc">
                           <h2 className="mb-10">{t("legal.termsTitle")}</h2>
                           <p className="ebt-legal-updated mb-30">
                              {t("legal.lastUpdated")}: {TERMS_UPDATED}
                           </p>
                           {TERMS_INTRO.map((text) => (
                              <p className="mb-20" key={text}>
                                 {text}
                              </p>
                           ))}
                           {TERMS_SECTIONS.map((section) => (
                              <section className="ebt-legal-section" key={section.title}>
                                 <h3 className="ebt-legal-heading">{section.title}</h3>
                                 {section.blocks.map((block, index) => {
                                    if (block.type === "p") {
                                       return renderParagraph(block.text, t, `${section.title}-p-${index}`);
                                    }
                                    if (block.type === "ul") {
                                       return (
                                          <ul className="ebt-legal-list mb-20" key={`${section.title}-ul-${index}`}>
                                             {block.items.map((item) => (
                                                <li key={item}>{item}</li>
                                             ))}
                                          </ul>
                                       );
                                    }
                                    return (
                                       <ol className="ebt-legal-list ebt-legal-list-ol mb-20" key={`${section.title}-ol-${index}`}>
                                          {block.items.map((item) => (
                                             <li key={item}>{item}</li>
                                          ))}
                                       </ol>
                                    );
                                 })}
                              </section>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </ServicePageShell>
      );
   }

   if (kind === "privacy") {
      return (
         <ServicePageShell title="legal.privacyTitle" subTitle="nav.privacy">
            <div className="tg-tour-about-area ebt-page-content">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div className="ebt-legal-doc">
                           <h2 className="mb-10">{t("legal.privacyTitle")}</h2>
                           <p className="ebt-legal-updated mb-30">
                              {t("legal.lastUpdated")}: {PRIVACY_UPDATED}
                           </p>
                           {PRIVACY_INTRO.map((text) => (
                              <p className="mb-20" key={text}>
                                 {text}
                              </p>
                           ))}
                           {PRIVACY_SECTIONS.map((section) => (
                              <section className="ebt-legal-section" key={section.title}>
                                 <h3 className="ebt-legal-heading">{section.title}</h3>
                                 {section.blocks.map((block, index) => {
                                    if (block.type === "p") {
                                       return renderParagraph(block.text, t, `${section.title}-p-${index}`);
                                    }
                                    return (
                                       <ul className="ebt-legal-list mb-20" key={`${section.title}-ul-${index}`}>
                                          {block.items.map((item) => (
                                             <li key={item}>{item}</li>
                                          ))}
                                       </ul>
                                    );
                                 })}
                              </section>
                           ))}
                           <p className="mb-0 mt-40">
                              <strong>{PRIVACY_CLOSING}</strong>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </ServicePageShell>
      );
   }

   return (
      <ServicePageShell title="legal.cookiesTitle" subTitle="nav.cookies">
         <div className="tg-tour-about-area ebt-page-content">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <h2 className="mb-20">{t("legal.cookiesTitle")}</h2>
                     <p className="mb-30">{t("legal.cookiesLead")}</p>
                     <p className="mb-20">{t("legal.c1")}</p>
                     <p className="mb-20">{t("legal.c2")}</p>
                     <p className="mb-20">{t("legal.c3")}</p>
                     <p className="mb-20">{t("legal.c4")}</p>
                  </div>
               </div>
            </div>
         </div>
      </ServicePageShell>
   );
};

export default LegalPage;
