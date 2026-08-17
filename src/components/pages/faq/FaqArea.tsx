"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import EbtButton, { EbtButtonLink } from "@/components/common/EbtButton";
import { useT } from "@/i18n/LanguageProvider";
import { FAQ_ITEMS } from "@/data/faqContent";
import { COMPANY, whatsappLink } from "@/data/company";
import { ICON_SIZE, iconProps } from "@/data/icons";
import { WhatsAppIcon } from "@/components/common/SocialIcons";

const INITIAL_VISIBLE = 6;

const FaqArea = () => {
   const { t } = useT();
   const [open, setOpen] = useState<number | null>(null);
   const [expanded, setExpanded] = useState(false);
   const listRef = useRef<HTMLDivElement>(null);

   const hasMore = FAQ_ITEMS.length > INITIAL_VISIBLE;
   const visibleItems = expanded ? FAQ_ITEMS : FAQ_ITEMS.slice(0, INITIAL_VISIBLE);
   const hiddenCount = Math.max(FAQ_ITEMS.length - INITIAL_VISIBLE, 0);

   const toggle = (id: number) => {
      setOpen((prev) => (prev === id ? null : id));
   };

   const onToggleList = () => {
      if (expanded) {
         setExpanded(false);
         setOpen(null);
         listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
         return;
      }
      setExpanded(true);
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

                     <div className="ebt-faq-list" ref={listRef}>
                        {visibleItems.map((item) => {
                           const isOpen = open === item.id;
                           const panelId = `faq-panel-${item.id}`;
                           return (
                              <div key={item.id} className={`ebt-faq-item ${isOpen ? "is-open" : ""}`}>
                                 <button
                                    type="button"
                                    className="ebt-faq-trigger"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(item.id)}
                                 >
                                    <span className="ebt-faq-question">{item.question}</span>
                                    <span className="ebt-faq-icon" aria-hidden="true">
                                       <ChevronDown {...iconProps("md")} />
                                    </span>
                                 </button>
                                 <div
                                    id={panelId}
                                    className={`ebt-faq-panel ${isOpen ? "is-open" : ""}`}
                                    role="region"
                                 >
                                    <div className="ebt-faq-answer">
                                       <p className="mb-0">{item.answer}</p>
                                    </div>
                                 </div>
                              </div>
                           );
                        })}
                     </div>

                     {hasMore && (
                        <div className="ebt-faq-more text-center">
                           <EbtButton variant="ghost" onClick={onToggleList} aria-expanded={expanded}>
                              {expanded
                                 ? t("faq.showLess")
                                 : `${t("faq.showMore")} (${hiddenCount})`}
                              <ChevronDown
                                 className={`ebt-faq-more-chevron ${expanded ? "is-up" : ""}`}
                                 {...iconProps("sm")}
                              />
                           </EbtButton>
                        </div>
                     )}

                     <div className="ebt-faq-cta text-center mt-60">
                        <h3 className="ebt-faq-cta-title mb-10">{t("faq.helpTitle")}</h3>
                        <p className="ebt-faq-cta-text mb-25">{t("faq.helpText")}</p>
                        <div className="ebt-faq-cta-actions">
                           <EbtButtonLink variant="primary" size="lg" href="/inquiry">
                              {t("faq.startInquiry")}
                           </EbtButtonLink>
                           <EbtButtonLink
                              variant="whatsapp"
                              size="lg"
                              href={whatsappLink(`Hello ${COMPANY.name}, I need travel help.`)}
                              external
                              target="_blank"
                              rel="noreferrer"
                           >
                              <WhatsAppIcon size={ICON_SIZE.md} />
                              {t("faq.whatsappUs")}
                           </EbtButtonLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FaqArea;
