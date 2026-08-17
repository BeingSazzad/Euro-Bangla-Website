"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faqContent";
import { iconProps } from "@/data/icons";
import { useT } from "@/i18n/LanguageProvider";

const HOME_FAQ_COUNT = 5;

const HomeFaq = () => {
   const { t } = useT();
   const [open, setOpen] = useState<number | null>(null);
   const items = FAQ_ITEMS.slice(0, HOME_FAQ_COUNT);

   return (
      <section className="ebt-home-faq ebt-section">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="text-center mb-45">
                     <h5 className="tg-section-subtitle mb-15">{t("home.faqSubtitle")}</h5>
                     <h2 className="ebt-home-block-title mb-12">{t("home.faqTitle")}</h2>
                     <p className="ebt-home-block-text mb-0">{t("home.faqText")}</p>
                  </div>

                  <div className="ebt-faq-list">
                     {items.map((item) => {
                        const isOpen = open === item.id;
                        return (
                           <div key={item.id} className={`ebt-faq-item ${isOpen ? "is-open" : ""}`}>
                              <button
                                 type="button"
                                 className="ebt-faq-trigger"
                                 aria-expanded={isOpen}
                                 onClick={() => setOpen((prev) => (prev === item.id ? null : item.id))}
                              >
                                 <span className="ebt-faq-question">{item.question}</span>
                                 <span className="ebt-faq-icon" aria-hidden="true">
                                    <ChevronDown {...iconProps("md")} />
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

                  <div className="text-center mt-35">
                     <Link className="ebt-home-link-btn" href="/faq">
                        {t("home.faqMore")}
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomeFaq;
