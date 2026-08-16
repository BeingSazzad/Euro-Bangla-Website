"use client"
import { useState } from "react";
import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider"
import { FAQ_ITEMS } from "@/data/faqContent"
import { COMPANY, whatsappLink } from "@/data/company"

const FaqArea = () => {
   const { t } = useT();
   const [open, setOpen] = useState<number | null>(1);

   const toggle = (id: number) => {
      setOpen((prev) => (prev === id ? null : id));
   };

   return (
      <div className="tg-pricing-area ebt-page-content p-relative">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="tg-faq-content-wrap">
                     <div className="tg-faq-section-title text-center mb-50">
                        <h5 className="tg-section-subtitle mb-15">{t("faq.subtitle")}</h5>
                        <h2 className="mb-0 text-capitalize">{t("faq.title")}</h2>
                     </div>
                     <div className="ebt-faq-list">
                        {FAQ_ITEMS.map((item) => {
                           const isOpen = open === item.id;
                           return (
                              <div key={item.id} className={`ebt-faq-item ${isOpen ? "is-open" : ""}`}>
                                 <button
                                    type="button"
                                    className="ebt-faq-trigger"
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(item.id)}
                                 >
                                    <span className="ebt-faq-question">{item.question}</span>
                                    <span className="ebt-faq-icon" aria-hidden="true">
                                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                          <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                       </svg>
                                    </span>
                                 </button>
                                 <div className={`ebt-faq-panel ${isOpen ? "is-open" : ""}`}>
                                    <div className="ebt-faq-answer">
                                       <p className="mb-0">{item.answer}</p>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                     <div className="ebt-faq-cta text-center mt-60">
                        <h3 className="ebt-faq-cta-title mb-10">{t("faq.helpTitle")}</h3>
                        <p className="ebt-faq-cta-text mb-25">{t("faq.helpText")}</p>
                        <div className="ebt-faq-cta-actions">
                           <Link className="tg-btn" href="/inquiry">
                              {t("faq.startInquiry")}
                           </Link>
                           <a
                              className="tg-btn tg-btn-transparent"
                              href={whatsappLink(`Hello ${COMPANY.name}, I need travel help.`)}
                              target="_blank"
                              rel="noreferrer"
                           >
                              {t("faq.whatsappUs")}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqArea
