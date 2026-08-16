import type { StaticImageData } from "next/image";
import type { LText } from "@/data/localized";

import australia from "@/assets/img/visa/australia.jpg";
import canada from "@/assets/img/visa/canada.jpg";
import uk from "@/assets/img/visa/uk.jpg";
import usa from "@/assets/img/visa/usa.jpg";
import france from "@/assets/img/visa/france.jpg";
import germany from "@/assets/img/visa/germany.jpg";
import qatar from "@/assets/img/visa/qatar.jpg";
import switzerland from "@/assets/img/visa/switzerland.jpg";

const day = (en: string, bn: string, fr: string): LText => ({ en, bn, fr });

export type VisaDestination = {
   id: string;
   name: LText;
   processing: LText;
   image: StaticImageData;
};

export const visaDestinations: VisaDestination[] = [
   {
      id: "australia",
      name: day("Australia", "অস্ট্রেলিয়া", "Australie"),
      processing: day("15 – 30 Days", "১৫ – ৩০ দিন", "15 – 30 jours"),
      image: australia,
   },
   {
      id: "canada",
      name: day("Canada", "কানাডা", "Canada"),
      processing: day("20 – 45 Days", "২০ – ৪৫ দিন", "20 – 45 jours"),
      image: canada,
   },
   {
      id: "uk",
      name: day("United Kingdom", "যুক্তরাজ্য", "Royaume-Uni"),
      processing: day("15 – 30 Days", "১৫ – ৩০ দিন", "15 – 30 jours"),
      image: uk,
   },
   {
      id: "usa",
      name: day("United States", "যুক্তরাষ্ট্র", "États-Unis"),
      processing: day("2 – 4 Months", "২ – ৪ মাস", "2 – 4 mois"),
      image: usa,
   },
   {
      id: "france",
      name: day("France", "ফ্রান্স", "France"),
      processing: day("15 – 30 Days", "১৫ – ৩০ দিন", "15 – 30 jours"),
      image: france,
   },
   {
      id: "germany",
      name: day("Germany", "জার্মানি", "Allemagne"),
      processing: day("15 – 30 Days", "১৫ – ৩০ দিন", "15 – 30 jours"),
      image: germany,
   },
   {
      id: "qatar",
      name: day("Qatar", "কাতার", "Qatar"),
      processing: day("5 – 15 Days", "৫ – ১৫ দিন", "5 – 15 jours"),
      image: qatar,
   },
   {
      id: "switzerland",
      name: day("Switzerland", "সুইজারল্যান্ড", "Suisse"),
      processing: day("15 – 30 Days", "১৫ – ৩০ দিন", "15 – 30 jours"),
      image: switzerland,
   },
];
