"use client";

import { FormEvent, JSX, useState } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/i18n/LanguageProvider";

type TabKey = "flight" | "hotel" | "tour" | "hajj" | "bus" | "visa";

const icons: Record<TabKey, JSX.Element> = {
   flight: (
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
         <path d="M16.5 2.5L8.8 10.2M16.5 2.5L11.6 16.5L8.8 10.2M16.5 2.5L2.5 7.4L8.8 10.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   ),
   hotel: (
      <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
         <path d="M1.5 17.5H14.3M11.9 7.1H9.5M12.7 10.3H9.5M12.7 13.5H9.5M3.1 17.5V2.46C3.1 1.8392 3.4768 1.5 4.06 1.5C5.3976 1.5 6.0664 1.5 6.6264 1.588C8.12821 1.82593 9.51614 2.53322 10.5913 3.60848C11.6664 4.68373 12.3735 6.07176 12.6112 7.5736C12.7 8.1336 12.7 8.8024 12.7 10.14V17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   ),
   tour: (
      <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
         <path d="M6.5 17.5V9.5H11.5V17.5M1.5 7.1L9 1.5L16.5 7.1V15.9C16.5 16.3243 16.3244 16.7313 16.0118 17.0314C15.6993 17.3314 15.2754 17.5 14.8333 17.5H3.16667C2.72464 17.5 2.30072 17.3314 1.98816 17.0314C1.67559 16.7313 1.5 16.3243 1.5 15.9V7.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   ),
   hajj: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
         <path d="M12 3L4 8V21H20V8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
         <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
   ),
   bus: (
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
         <path d="M4.20913 0.5C3.45763 0.5 2.76351 0.8674 2.34557 1.47955L0.781259 3.7659C0.59716 4.03549 0.499257 4.35254 0.50001 4.6767V8.32045C0.498973 8.5646 0.581457 8.80209 0.734344 8.99513C0.887231 9.18817 1.10174 9.32568 1.34376 9.3858L2.80288 9.74715C2.90782 10.2415 3.18344 10.6854 3.58349 11.0046C3.98355 11.3238 4.48369 11.4987 5.00001 11.5C6.04176 11.5 6.91138 10.7955 7.16226 9.85H12.4003C12.6511 10.7955 13.5208 11.5 14.5625 11.5C15.6042 11.5 16.4739 10.7955 16.7247 9.85H17.375C17.9904 9.85 18.5 9.3517 18.5 8.75V6.7392C18.4995 6.24896 18.3314 5.77295 18.0225 5.38681C17.7136 5.00066 17.2816 4.72652 16.7951 4.60795L13.7536 3.8517L11.5565 1.2909C11.3463 1.04361 11.0831 0.844562 10.7854 0.707879C10.4877 0.571197 10.163 0.500226 9.83413 0.5H4.20913Z" fill="currentColor" />
      </svg>
   ),
   visa: (
      <svg width="16" height="18" viewBox="0 0 24 24" fill="none">
         <path d="M6 3H18C19.1 3 20 3.9 20 5V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19V5C4 3.9 4.9 3 6 3Z" stroke="currentColor" strokeWidth="1.5" />
         <path d="M8 8H16M8 12H16M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
   ),
};

const tabs: { key: TabKey; title: string }[] = [
   { key: "flight", title: "search.flight" },
   { key: "hotel", title: "search.hotel" },
   { key: "tour", title: "search.tour" },
   { key: "hajj", title: "search.hajj" },
   { key: "bus", title: "search.bus" },
   { key: "visa", title: "search.visa" },
];

const Field = ({ title, name, placeholder }: { title: string; name: string; placeholder: string }) => (
   <div className="tg-booking-form-parent-inner mr-15 mb-15">
      <span className="tg-booking-form-title mb-5">{title}</span>
      <div className="tg-booking-add-input-date p-relative">
         <input className="input" name={name} placeholder={placeholder} />
      </div>
   </div>
);

const BannerFormFour = () => {
   const { t } = useT();
   const router = useRouter();
   const [active, setActive] = useState<TabKey>("flight");
   const [trip, setTrip] = useState("round");
   const [scope, setScope] = useState("international");

   const goInquiry = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const query = new URLSearchParams({ service: active });
      data.forEach((value, key) => {
         if (String(value).trim()) query.set(key, String(value));
      });
      const dest = String(data.get("to") || data.get("destination") || "");
      if (dest) query.set("destination", dest);
      const pax = [data.get("adults"), data.get("children"), data.get("infants")].filter(Boolean).join(",");
      if (pax) query.set("passengers", pax);
      const dates = [data.get("depart"), data.get("return"), data.get("dates")].filter(Boolean).join(" - ");
      if (dates) query.set("dates", dates);
      router.push(`/inquiry?${query.toString()}`);
   };

   return (
      <div className="tg-booking-form-area tg-booking-4-form-area tg-grey-bg pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tg-booking-form-wrap tg-booking-form-space">
                     <div className="tg-booking-form-tabs">
                        <div className="nav nav-tab justify-content-center" role="tablist">
                           {tabs.map((tab) => (
                              <button
                                 key={tab.key}
                                 type="button"
                                 className={`nav-link ${active === tab.key ? "active" : ""}`}
                                 onClick={() => setActive(tab.key)}
                              >
                                 <span className="borders"></span>
                                 <span className="icon">{icons[tab.key]}</span>
                                 <span>{t(tab.title)}</span>
                              </button>
                           ))}
                        </div>
                     </div>
                     <div className="tab-content">
                        <div className="tab-pane fade show active">
                           <div className="tg-booking-form-item">
                              <form onSubmit={goInquiry}>
                                 <div className="tg-booking-form-input-group d-flex align-items-end justify-content-between flex-wrap">
                                    {active === "flight" && (
                                       <>
                                          <div className="tg-booking-form-parent-inner mr-15 mb-15">
                                             <span className="tg-booking-form-title mb-5">{t("search.scope")}</span>
                                             <select className="input" name="scope" value={scope} onChange={(e) => setScope(e.target.value)}>
                                                <option value="domestic">{t("svc.domestic")}</option>
                                                <option value="international">{t("svc.international")}</option>
                                             </select>
                                          </div>
                                          <div className="tg-booking-form-parent-inner mr-15 mb-15">
                                             <span className="tg-booking-form-title mb-5">{t("search.tripType")}</span>
                                             <select className="input" name="trip" value={trip} onChange={(e) => setTrip(e.target.value)}>
                                                <option value="oneWay">{t("search.oneWay")}</option>
                                                <option value="round">{t("search.round")}</option>
                                                <option value="multi">{t("search.multi")}</option>
                                             </select>
                                          </div>
                                          <Field title={t("search.from")} name="from" placeholder={t("search.cityFrom")} />
                                          <Field title={t("search.to")} name="to" placeholder={t("search.cityTo")} />
                                          <Field title={t("search.depart")} name="depart" placeholder="dd/mm/yyyy" />
                                          {trip !== "oneWay" && (
                                             <Field title={t("search.return")} name="return" placeholder="dd/mm/yyyy" />
                                          )}
                                          {trip === "multi" && (
                                             <>
                                                <Field title={`${t("search.from")} 2`} name="from2" placeholder={t("search.cityFrom")} />
                                                <Field title={`${t("search.to")} 2`} name="to2" placeholder={t("search.cityTo")} />
                                                <Field title={`${t("search.depart")} 2`} name="depart2" placeholder="dd/mm/yyyy" />
                                             </>
                                          )}
                                          <div className="tg-booking-form-parent-inner mr-15 mb-15">
                                             <span className="tg-booking-form-title mb-5">{t("search.class")}</span>
                                             <select className="input" name="class" defaultValue="economy">
                                                <option value="economy">{t("search.economy")}</option>
                                                <option value="premium">{t("search.premium")}</option>
                                                <option value="business">{t("search.business")}</option>
                                                <option value="first">{t("search.first")}</option>
                                             </select>
                                          </div>
                                          <Field title={t("search.adults")} name="adults" placeholder="1" />
                                       </>
                                    )}
                                    {active === "hotel" && (
                                       <>
                                          <Field title={t("search.destination")} name="destination" placeholder={t("search.cityTo")} />
                                          <Field title={t("search.checkIn")} name="depart" placeholder="dd/mm/yyyy" />
                                          <Field title={t("search.checkOut")} name="return" placeholder="dd/mm/yyyy" />
                                          <Field title={t("search.rooms")} name="rooms" placeholder="1" />
                                          <Field title={t("search.adults")} name="adults" placeholder="2" />
                                       </>
                                    )}
                                    {active === "tour" && (
                                       <>
                                          <Field title={t("search.destination")} name="destination" placeholder="Europe / Dubai / Turkey" />
                                          <Field title={t("search.date")} name="dates" placeholder="dd/mm/yyyy" />
                                          <Field title={t("search.pax")} name="adults" placeholder="2" />
                                       </>
                                    )}
                                    {active === "hajj" && (
                                       <>
                                          <Field title={t("search.package")} name="destination" placeholder="Umrah / Hajj" />
                                          <Field title={t("search.date")} name="dates" placeholder="Month / year" />
                                          <Field title={t("search.pax")} name="adults" placeholder="1" />
                                       </>
                                    )}
                                    {active === "bus" && (
                                       <>
                                          <Field title={t("search.from")} name="from" placeholder="Dhaka" />
                                          <Field title={t("search.to")} name="to" placeholder="Chattogram" />
                                          <Field title={t("search.date")} name="depart" placeholder="dd/mm/yyyy" />
                                          <Field title={t("search.pax")} name="adults" placeholder="1" />
                                       </>
                                    )}
                                    {active === "visa" && (
                                       <>
                                          <Field title={t("search.visaType")} name="destination" placeholder={t("inquiry.services.visa")} />
                                          <Field title={t("svc.destinations")} name="to" placeholder="Schengen / UK / KSA" />
                                          <Field title={t("search.date")} name="dates" placeholder="Travel month" />
                                       </>
                                    )}
                                    <div className="tg-booking-form-search-btn mb-10">
                                       <button className="bk-search-button" type="submit">
                                          {t("search.inquire")}
                                       </button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BannerFormFour;
