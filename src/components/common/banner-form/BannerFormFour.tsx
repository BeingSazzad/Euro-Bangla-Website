"use client";

import {
   FormEvent,
   JSX,
   useEffect,
   useMemo,
   useRef,
   useState,
} from "react";
import { useRouter } from "next/navigation";
import Flatpickr from "react-flatpickr";
import {
   Plane,
   Building2,
   MapPinned,
   Landmark,
   Bus,
   FileBadge2,
   MapPin,
   CalendarDays,
   Users,
   Minus,
   Plus,
} from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

type TabKey = "flight" | "hotel" | "tour" | "hajj" | "bus" | "visa";
type TripType = "oneWay" | "round";
type ScopeType = "domestic" | "international";

const iconProps = { size: 20, strokeWidth: 1.75, "aria-hidden": true as const };

const icons: Record<TabKey, JSX.Element> = {
   flight: <Plane {...iconProps} />,
   hotel: <Building2 {...iconProps} />,
   tour: <MapPinned {...iconProps} />,
   hajj: <Landmark {...iconProps} />,
   bus: <Bus {...iconProps} />,
   visa: <FileBadge2 {...iconProps} />,
};

const tabs: { key: TabKey; title: string }[] = [
   { key: "flight", title: "search.flight" },
   { key: "hotel", title: "search.hotel" },
   { key: "tour", title: "search.tour" },
   { key: "hajj", title: "search.hajj" },
   { key: "bus", title: "search.bus" },
   { key: "visa", title: "search.visa" },
];

const DESTINATIONS = [
   "Dhaka",
   "Chattogram",
   "Sylhet",
   "Dubai",
   "Abu Dhabi",
   "Istanbul",
   "Antalya",
   "Paris",
   "London",
   "Kuala Lumpur",
   "Jeddah",
   "Madinah",
   "Riyadh",
   "Doha",
   "Bangkok",
   "Singapore",
];

const VISA_DESTINATIONS = [
   "Schengen",
   "United Kingdom",
   "United States",
   "Canada",
   "Australia",
   "France",
   "Germany",
   "Turkey",
   "Malaysia",
   "UAE",
   "Qatar",
   "KSA",
];

const HAJJ_PACKAGES = ["Umrah", "Hajj", "Family Umrah", "Group Umrah"];

const formatDate = (value: Date | Date[] | undefined) => {
   const date = Array.isArray(value) ? value[0] : value;
   if (!date) return "";
   const day = String(date.getDate()).padStart(2, "0");
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const year = date.getFullYear();
   return `${day}/${month}/${year}`;
};

const ToggleGroup = ({
   options,
   value,
   onChange,
   name,
}: {
   options: { value: string; label: string }[];
   value: string;
   onChange: (value: string) => void;
   name: string;
}) => (
   <div className="ebt-booking-toggles" role="group">
      <input type="hidden" name={name} value={value} />
      {options.map((option) => (
         <button
            key={option.value}
            type="button"
            className={`ebt-booking-toggle ${value === option.value ? "is-active" : ""}`}
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
         >
            {option.label}
         </button>
      ))}
   </div>
);

const DestinationField = ({
   title,
   name,
   placeholder,
   options,
   value,
   onChange,
}: {
   title: string;
   name: string;
   placeholder: string;
   options: string[];
   value: string;
   onChange: (value: string) => void;
}) => {
   const { t } = useT();
   const [open, setOpen] = useState(false);
   const boxRef = useRef<HTMLDivElement>(null);

   const filtered = useMemo(() => {
      const q = value.trim().toLowerCase();
      if (!q) return options;
      return options.filter((item) => item.toLowerCase().includes(q));
   }, [options, value]);

   useEffect(() => {
      const onDoc = (event: MouseEvent) => {
         if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
   }, []);

   return (
      <div className="tg-booking-form-parent-inner ebt-booking-field tg-hero-quantity p-relative" ref={boxRef}>
         <span className="tg-booking-form-title mb-5">{title}</span>
         <div className={`tg-booking-add-input-field ${open ? "active" : ""}`}>
            <input
               className="input ebt-booking-dynamic-input"
               name={name}
               value={value}
               placeholder={placeholder}
               autoComplete="off"
               onFocus={() => setOpen(true)}
               onChange={(e) => {
                  onChange(e.target.value);
                  setOpen(true);
               }}
            />
            <span className="location" aria-hidden="true">
               <MapPin size={14} strokeWidth={1.75} />
            </span>
         </div>
         {open && (
            <div className="tg-booking-form-location-list tg-booking-quantity-active tg-list-open">
               <ul className="scrool-bar scrool-height pr-5">
                  {filtered.length === 0 && (
                     <li className="ebt-booking-empty">
                        <span>{t("search.noMatches")}</span>
                     </li>
                  )}
                  {filtered.map((item) => (
                     <li
                        key={item}
                        onClick={() => {
                           onChange(item);
                           setOpen(false);
                        }}
                     >
                        <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
                        <span>{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

const DateField = ({
   title,
   name,
   value,
   onChange,
   minDate,
}: {
   title: string;
   name: string;
   value: Date | undefined;
   onChange: (date: Date | undefined) => void;
   minDate?: Date | "today";
}) => (
   <div className="tg-booking-form-parent-inner ebt-booking-field">
      <span className="tg-booking-form-title mb-5">{title}</span>
      <div className="tg-booking-add-input-date p-relative">
         <span aria-hidden="true">
            <CalendarDays size={14} strokeWidth={1.75} />
         </span>
         <input type="hidden" name={name} value={formatDate(value)} />
         <Flatpickr
            value={value}
            onChange={(selected) => onChange(selected[0])}
            options={{
               dateFormat: "d/m/Y",
               minDate: minDate ?? "today",
               disableMobile: true,
               allowInput: false,
            }}
            className="input"
            placeholder="dd/mm/yyyy"
         />
      </div>
   </div>
);

const GuestField = ({
   title,
   rooms,
   adults,
   children,
   showRooms,
   onRooms,
   onAdults,
   onChildren,
   doneLabel,
}: {
   title: string;
   rooms: number;
   adults: number;
   children: number;
   showRooms: boolean;
   onRooms: (n: number) => void;
   onAdults: (n: number) => void;
   onChildren: (n: number) => void;
   doneLabel: string;
}) => {
   const { t } = useT();
   const [open, setOpen] = useState(false);
   const boxRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const onDoc = (event: MouseEvent) => {
         if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
   }, []);

   const summary = showRooms
      ? `${rooms} ${t("search.rooms")}, ${adults} ${t("search.adults")}${children ? `, ${children} ${t("search.children")}` : ""}`
      : `${adults + children} ${t("inquiry.passengers")}`;

   const rows = [
      ...(showRooms
         ? [{ key: "rooms", label: t("search.rooms"), value: rooms, set: onRooms, min: 1 }]
         : []),
      { key: "adults", label: t("search.adults"), value: adults, set: onAdults, min: 1 },
      { key: "children", label: t("search.children"), value: children, set: onChildren, min: 0 },
   ];

   return (
      <div className="tg-booking-form-parent-inner ebt-booking-field tg-hero-quantity p-relative" ref={boxRef}>
         <span className="tg-booking-form-title mb-5">{title}</span>
         {showRooms && <input type="hidden" name="rooms" value={rooms} />}
         <input type="hidden" name="adults" value={adults} />
         <input type="hidden" name="children" value={children} />
         <input type="hidden" name="passengers" value={String(adults + children)} />
         <button
            type="button"
            className={`tg-booking-add-input-field tg-booking-quantity-toggle ${open ? "active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
         >
            <span className="location" aria-hidden="true">
               <Users size={15} strokeWidth={1.75} />
            </span>
            <span className="tg-booking-title-value">{summary || t("search.addGuests")}</span>
         </button>
         {open && (
            <div className="tg-booking-form-location-list tg-quantity tg-booking-quantity-active tg-list-open">
               <ul>
                  {rows.map((row) => (
                     <li key={row.key}>
                        <span className="mr-20">{row.label}</span>
                        <div className="tg-booking-quantity-item">
                           <button
                              type="button"
                              className="decrement"
                              aria-label={`Decrease ${row.label}`}
                              onClick={() => row.set(Math.max(row.min, row.value - 1))}
                           >
                              <Minus size={14} strokeWidth={1.75} />
                           </button>
                           <input className="tg-quantity-input" type="text" readOnly value={row.value} />
                           <button
                              type="button"
                              className="increment"
                              aria-label={`Increase ${row.label}`}
                              onClick={() => row.set(row.value + 1)}
                           >
                              <Plus size={14} strokeWidth={1.75} />
                           </button>
                        </div>
                     </li>
                  ))}
               </ul>
               <div className="tg-booking-form-search-btn mt-15">
                  <button
                     className="bk-search-button bk-search-button-2 w-100"
                     type="button"
                     onClick={() => setOpen(false)}
                  >
                     {doneLabel}
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

const BannerFormFour = () => {
   const { t } = useT();
   const router = useRouter();
   const [active, setActive] = useState<TabKey>("flight");
   const [trip, setTrip] = useState<TripType>("round");
   const [scope, setScope] = useState<ScopeType>("international");

   const [from, setFrom] = useState("");
   const [to, setTo] = useState("");
   const [destination, setDestination] = useState("");
   const [depart, setDepart] = useState<Date | undefined>(undefined);
   const [ret, setRet] = useState<Date | undefined>(undefined);
   const [rooms, setRooms] = useState(1);
   const [adults, setAdults] = useState(1);
   const [children, setChildren] = useState(0);

   useEffect(() => {
      setFrom("");
      setTo("");
      setDestination("");
      setDepart(undefined);
      setRet(undefined);
      setRooms(1);
      setAdults(active === "hotel" || active === "tour" ? 2 : 1);
      setChildren(0);
   }, [active]);

   const goInquiry = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const query = new URLSearchParams({ service: active });
      data.forEach((value, key) => {
         if (String(value).trim()) query.set(key, String(value));
      });
      const dest = String(data.get("to") || data.get("destination") || "");
      if (dest) query.set("destination", dest);
      const pax = String(data.get("passengers") || data.get("adults") || "").trim();
      if (pax) query.set("passengers", pax);
      const dates = [data.get("depart"), trip === "round" || active === "hotel" ? data.get("return") : "", data.get("dates")]
         .filter(Boolean)
         .join(" - ");
      if (dates) query.set("dates", dates);
      router.push(`/inquiry?${query.toString()}`);
   };

   return (
      <div className="tg-booking-form-area tg-booking-4-form-area tg-grey-bg pb-80">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tg-booking-form-wrap tg-booking-form-space ebt-booking-wrap">
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
                                 {active === "flight" && (
                                    <div className="ebt-booking-options mb-20">
                                       <ToggleGroup
                                          name="scope"
                                          value={scope}
                                          onChange={(value) => setScope(value as ScopeType)}
                                          options={[
                                             { value: "domestic", label: t("svc.domestic") },
                                             { value: "international", label: t("svc.international") },
                                          ]}
                                       />
                                       <ToggleGroup
                                          name="trip"
                                          value={trip}
                                          onChange={(value) => setTrip(value as TripType)}
                                          options={[
                                             { value: "oneWay", label: t("search.oneWay") },
                                             { value: "round", label: t("search.round") },
                                          ]}
                                       />
                                    </div>
                                 )}

                                 <div className="tg-booking-form-input-group ebt-booking-row">
                                    {active === "flight" && (
                                       <>
                                          <DestinationField
                                             title={t("search.from")}
                                             name="from"
                                             placeholder={t("search.cityFrom")}
                                             options={DESTINATIONS}
                                             value={from}
                                             onChange={setFrom}
                                          />
                                          <DestinationField
                                             title={t("search.to")}
                                             name="to"
                                             placeholder={t("search.cityTo")}
                                             options={DESTINATIONS}
                                             value={to}
                                             onChange={setTo}
                                          />
                                          <DateField title={t("search.depart")} name="depart" value={depart} onChange={setDepart} />
                                          {trip === "round" && (
                                             <DateField
                                                title={t("search.return")}
                                                name="return"
                                                value={ret}
                                                onChange={setRet}
                                                minDate={depart ?? "today"}
                                             />
                                          )}
                                          <GuestField
                                             title={t("search.guest")}
                                             rooms={rooms}
                                             adults={adults}
                                             children={children}
                                             showRooms={false}
                                             onRooms={setRooms}
                                             onAdults={setAdults}
                                             onChildren={setChildren}
                                             doneLabel={t("search.ok") || "OK"}
                                          />
                                       </>
                                    )}

                                    {active === "hotel" && (
                                       <>
                                          <DestinationField
                                             title={t("search.destination")}
                                             name="destination"
                                             placeholder={t("search.going") || t("search.cityTo")}
                                             options={DESTINATIONS}
                                             value={destination}
                                             onChange={setDestination}
                                          />
                                          <DateField title={t("search.checkIn")} name="depart" value={depart} onChange={setDepart} />
                                          <DateField
                                             title={t("search.checkOut")}
                                             name="return"
                                             value={ret}
                                             onChange={setRet}
                                             minDate={depart ?? "today"}
                                          />
                                          <GuestField
                                             title={t("search.guest")}
                                             rooms={rooms}
                                             adults={adults}
                                             children={children}
                                             showRooms
                                             onRooms={setRooms}
                                             onAdults={setAdults}
                                             onChildren={setChildren}
                                             doneLabel={t("search.ok") || "OK"}
                                          />
                                       </>
                                    )}

                                    {active === "tour" && (
                                       <>
                                          <DestinationField
                                             title={t("search.destination")}
                                             name="destination"
                                             placeholder={t("search.going") || "Europe / Dubai / Turkey"}
                                             options={["Europe", "Dubai", "Turkey", "KSA", "France", "Malaysia", ...DESTINATIONS]}
                                             value={destination}
                                             onChange={setDestination}
                                          />
                                          <DateField title={t("search.date")} name="dates" value={depart} onChange={setDepart} />
                                          <GuestField
                                             title={t("search.guest")}
                                             rooms={rooms}
                                             adults={adults}
                                             children={children}
                                             showRooms={false}
                                             onRooms={setRooms}
                                             onAdults={setAdults}
                                             onChildren={setChildren}
                                             doneLabel={t("search.ok") || "OK"}
                                          />
                                       </>
                                    )}

                                    {active === "hajj" && (
                                       <>
                                          <DestinationField
                                             title={t("search.package")}
                                             name="destination"
                                             placeholder="Umrah / Hajj"
                                             options={HAJJ_PACKAGES}
                                             value={destination}
                                             onChange={setDestination}
                                          />
                                          <DateField title={t("search.date")} name="dates" value={depart} onChange={setDepart} />
                                          <GuestField
                                             title={t("search.pax")}
                                             rooms={rooms}
                                             adults={adults}
                                             children={children}
                                             showRooms={false}
                                             onRooms={setRooms}
                                             onAdults={setAdults}
                                             onChildren={setChildren}
                                             doneLabel={t("search.ok") || "OK"}
                                          />
                                       </>
                                    )}

                                    {active === "bus" && (
                                       <>
                                          <DestinationField
                                             title={t("search.from")}
                                             name="from"
                                             placeholder="Dhaka"
                                             options={["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Kolkata"]}
                                             value={from}
                                             onChange={setFrom}
                                          />
                                          <DestinationField
                                             title={t("search.to")}
                                             name="to"
                                             placeholder="Chattogram"
                                             options={["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Kolkata"]}
                                             value={to}
                                             onChange={setTo}
                                          />
                                          <DateField title={t("search.date")} name="depart" value={depart} onChange={setDepart} />
                                          <GuestField
                                             title={t("search.pax")}
                                             rooms={rooms}
                                             adults={adults}
                                             children={children}
                                             showRooms={false}
                                             onRooms={setRooms}
                                             onAdults={setAdults}
                                             onChildren={setChildren}
                                             doneLabel={t("search.ok") || "OK"}
                                          />
                                       </>
                                    )}

                                    {active === "visa" && (
                                       <>
                                          <DestinationField
                                             title={t("svc.destinations")}
                                             name="to"
                                             placeholder="Schengen / UK / KSA"
                                             options={VISA_DESTINATIONS}
                                             value={to}
                                             onChange={setTo}
                                          />
                                          <DestinationField
                                             title={t("search.visaType")}
                                             name="destination"
                                             placeholder={t("inquiry.services.visa")}
                                             options={["Tourist Visa", "Visit Visa", "Business Visa", "Student Visa"]}
                                             value={destination}
                                             onChange={setDestination}
                                          />
                                          <DateField title={t("search.date")} name="dates" value={depart} onChange={setDepart} />
                                       </>
                                    )}

                                    <div className="tg-booking-form-search-btn ebt-booking-submit">
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
