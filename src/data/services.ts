import type { StaticImageData } from "next/image";
import type { LText } from "./localized";

import listing1 from "@/assets/img/listing/listing-1.jpg";
import listing2 from "@/assets/img/listing/listing-2.jpg";
import listing3 from "@/assets/img/listing/listing-3.jpg";
import listing5 from "@/assets/img/listing/listing-5.jpg";
import listing6 from "@/assets/img/listing/listing-6.jpg";
import listing7 from "@/assets/img/listing/listing-8.jpg";
import des1 from "@/assets/img/destination/des.jpg";
import des2 from "@/assets/img/destination/des-2.jpg";
import des3 from "@/assets/img/destination/des-3.jpg";
import des4 from "@/assets/img/destination/des-4.jpg";
import kaaba from "@/assets/img/chose/chose-2/thumb-2.jpg";
import plane from "@/assets/img/chose/chose-2/thumb-1.jpg";
import visaTourist from "@/assets/img/visa/switzerland.jpg";
import visaVisit from "@/assets/img/visa/uk.jpg";
import visaBusiness from "@/assets/img/visa/usa.jpg";
import visaStudent from "@/assets/img/visa/canada.jpg";

export type PackageItem = {
   slug: string;
   thumb: StaticImageData;
   title: LText;
   location: LText;
   days: number;
   price: number;
   tag?: LText;
   summary: LText;
   includes: LText[];
   excludes: LText[];
   itinerary: { day: number; title: LText; text: LText }[];
   terms: LText;
   category?: "family" | "honeymoon" | "group";
   region?: "europe" | "dubai" | "ksa" | "turkey" | "bd";
   gallery?: StaticImageData[];
   facilities?: LText[];
   highlights?: LText[];
   mapEmbed?: string;
   hotelName?: LText;
};

const day = (en: string, bn: string, fr: string): LText => ({ en, bn, fr });

export const hajjPackages: PackageItem[] = [
   {
      slug: "economy-umrah-14",
      thumb: des4,
      title: day("Economy Umrah 14 Days", "ইকোনমি ওমরাহ ১৪ দিন", "Omra économique 14 jours"),
      location: day("Makkah & Madinah", "মক্কা ও মদিনা", "La Mecque et Médine"),
      days: 14,
      price: 145000,
      tag: day("Popular", "জনপ্রিয়", "Populaire"),
      summary: day(
         "Our most-booked Umrah trip: 14 days split between Madinah and Makkah, in shared four-bed rooms a short walk from each Haram. Group flights leave Dhaka together and a Bangla-speaking guide stays with the group from the airport to the final departure.",
         "আমাদের সবচেয়ে বেশি বুক হওয়া ওমরাহ ট্রিপ: ১৪ দিন মদিনা ও মক্কায় ভাগ করা, হারাম থেকে হাঁটা দূরত্বে শেয়ার্ড চার-বেড রুম। ঢাকা থেকে একসাথে গ্রুপ ফ্লাইট, আর এয়ারপোর্ট থেকে শেষ দিন পর্যন্ত সাথে থাকেন বাংলাভাষী গাইড।",
         "Notre Omra la plus réservée : 14 jours partagés entre Médine et La Mecque, en chambres de quatre à quelques minutes à pied du Haram. Vols de groupe depuis Dhaka et guide bangladais présent du début à la fin."
      ),
      includes: [
         day("Return group air ticket from Dhaka", "ঢাকা থেকে রিটার্ন গ্রুপ এয়ার টিকিট", "Billet de groupe aller-retour depuis Dhaka"),
         day("Umrah visa and processing", "ওমরাহ ভিসা ও প্রসেসিং", "Visa Omra et traitement du dossier"),
         day("13 nights, 4-bed shared rooms", "১৩ রাত, ৪-বেড শেয়ার্ড রুম", "13 nuits en chambres partagées de 4"),
         day("Breakfast and dinner daily", "প্রতিদিন ব্রেকফাস্ট ও ডিনার", "Petit-déjeuner et dîner quotidiens"),
         day("All coach transfers and Makkah–Madinah leg", "সব কোচ ট্রান্সফার ও মক্কা–মদিনা যাত্রা", "Transferts en autocar, dont Médine–La Mecque"),
         day("Ziyarah tours in both cities", "দুই শহরেই জিয়ারত ট্যুর", "Visites ziyarah dans les deux villes"),
         day("Bangla-speaking guide throughout", "পুরো সময় বাংলাভাষী গাইড", "Guide bangladais tout au long du séjour"),
      ],
      excludes: [
         day("Personal expenses and shopping", "ব্যক্তিগত খরচ ও কেনাকাটা", "Dépenses personnelles et achats"),
         day("Lunch", "লাঞ্চ", "Déjeuner"),
         day("Travel insurance upgrade", "ট্রাভেল ইনস্যুরেন্স আপগ্রেড", "Assurance voyage supérieure"),
         day("Room upgrade to double or triple", "ডাবল বা ট্রিপল রুমে আপগ্রেড", "Surclassement en chambre double ou triple"),
         day("Qurbani or extra ziyarah trips", "কুরবানি বা অতিরিক্ত জিয়ারত", "Qurbani ou ziyarah supplémentaires"),
      ],
      highlights: [
         day("Group flights from Dhaka with Umrah visa", "ঢাকা থেকে গ্রুপ ফ্লাইট ও ওমরাহ ভিসা", "Vols de groupe depuis Dhaka et visa Omra"),
         day("Hotels in Makkah and Madinah near Haram", "মক্কা ও মদিনায় হারামের কাছে হোটেল", "Hôtels près du Haram à La Mecque et Médine"),
         day("Guided Tawaf, Sa’i and ziyarah", "গাইডেড তাওয়াফ, সাঈ ও জিয়ারত", "Tawaf, Sa’i et ziyarah accompagnés"),
      ],
      gallery: [des4, kaaba, plane],
      itinerary: [
         { day: 1, title: day("Dhaka to Madinah", "ঢাকা থেকে মদিনা", "Dhaka – Médine"), text: day("Group briefing at the airport, flight out, then coach transfer and hotel check-in.", "এয়ারপোর্টে গ্রুপ ব্রিফিং, ফ্লাইট, এরপর কোচ ট্রান্সফার ও হোটেল চেক-ইন।", "Briefing à l’aéroport, vol, puis transfert en autocar et enregistrement.") },
         { day: 2, title: day("Days at Masjid an-Nabawi", "মসজিদে নববীতে দিনগুলো", "Journées à la mosquée du Prophète"), text: day("Prayers at the Prophet’s Mosque with free time between each salah.", "মসজিদে নববীতে নামাজ, প্রতি ওয়াক্তের মাঝে অবসর সময়।", "Prières à la mosquée du Prophète avec du temps libre entre chaque salat.") },
         { day: 4, title: day("Madinah ziyarah", "মদিনা জিয়ারত", "Ziyarah à Médine"), text: day("Quba Mosque, Mount Uhud and Masjid al-Qiblatayn with the group guide.", "গ্রুপ গাইড সহ কুবা মসজিদ, উহুদ পাহাড় ও মসজিদুল কিবলাতাইন।", "Mosquée Quba, mont Uhud et mosquée Al-Qiblatayn avec le guide.") },
         { day: 6, title: day("Travel to Makkah in ihram", "ইহরাম বেঁধে মক্কায় যাত্রা", "Départ vers La Mecque en ihram"), text: day("Ihram at Dhul-Hulayfah, coach to Makkah, then Tawaf and Sa’i on arrival.", "যুল-হুলাইফায় ইহরাম, কোচে মক্কা, পৌঁছেই তাওয়াফ ও সাঈ।", "Ihram à Dhul-Hulayfah, autocar vers La Mecque, puis Tawaf et Sa’i à l’arrivée.") },
         { day: 8, title: day("Makkah ziyarah", "মক্কা জিয়ারত", "Ziyarah à La Mecque"), text: day("Mina, Arafat, Jabal al-Nour and Jabal Thawr viewpoints by coach.", "কোচে মিনা, আরাফাত, জাবালে নূর ও জাবালে সাওর ভিউপয়েন্ট।", "Mina, Arafat, Jabal al-Nour et Jabal Thawr en autocar.") },
         { day: 11, title: day("Second Umrah (optional)", "দ্বিতীয় ওমরাহ (ঐচ্ছিক)", "Seconde Omra (facultatif)"), text: day("Ihram from Masjid Aisha for those who want to perform Umrah again.", "যারা আবার ওমরাহ করতে চান তাদের জন্য মসজিদে আয়েশা থেকে ইহরাম।", "Ihram depuis la mosquée Aïcha pour ceux qui souhaitent refaire l’Omra.") },
         { day: 13, title: day("Farewell Tawaf", "বিদায়ী তাওয়াফ", "Tawaf d’adieu"), text: day("Tawaf al-Wada, packing and a group dinner before the last night.", "তাওয়াফুল বিদা, গোছগাছ এবং শেষ রাতের আগে গ্রুপ ডিনার।", "Tawaf al-Wada, bagages et dîner de groupe avant la dernière nuit.") },
         { day: 14, title: day("Return to Dhaka", "ঢাকায় প্রত্যাবর্তন", "Retour à Dhaka"), text: day("Coach to Jeddah airport and the group flight home.", "কোচে জেদ্দা এয়ারপোর্ট এবং দেশে ফেরার গ্রুপ ফ্লাইট।", "Autocar vers l’aéroport de Djeddah et vol retour du groupe.") },
      ],
      terms: day(
         "Prices are indicative and confirmed after inquiry, since airfare and hotel rates move with the season. A deposit becomes non-refundable once visa processing starts. Ramadan departures cost more and fill up months ahead.",
         "মূল্য নির্দেশক এবং অনুসন্ধানের পর নিশ্চিত হয়, কারণ এয়ারফেয়ার ও হোটেল রেট সিজন অনুযায়ী বদলায়। ভিসা প্রক্রিয়া শুরু হলে ডিপোজিট আর ফেরতযোগ্য নয়। রমজানের ডিপার্চার ব্যয়বহুল এবং কয়েক মাস আগেই পূর্ণ হয়ে যায়।",
         "Les prix sont indicatifs et confirmés après votre demande, les vols et hôtels variant selon la saison. L’acompte devient non remboursable dès le début du traitement du visa. Les départs pendant le Ramadan sont plus chers et se remplissent des mois à l’avance."
      ),
   },
   {
      slug: "premium-umrah-10",
      thumb: kaaba,
      title: day("Premium Umrah 10 Days", "প্রিমিয়াম ওমরাহ ১০ দিন", "Omra premium 10 jours"),
      location: day("5-star Makkah & Madinah", "৫-স্টার মক্কা ও মদিনা", "5 étoiles La Mecque et Médine"),
      days: 10,
      price: 245000,
      tag: day("Premium", "প্রিমিয়াম", "Premium"),
      summary: day(
         "Ten days for travellers who would rather pay for proximity than for extra nights. Both hotels are inside the Haram courtyard ring, transfers are private rather than shared coaches, and the group is capped so nobody waits in a lobby.",
         "দশ দিন — যাঁরা বাড়তি রাতের চেয়ে হারামের কাছাকাছি থাকাকে গুরুত্ব দেন তাঁদের জন্য। দুই হোটেলই হারাম প্রাঙ্গণের বলয়ের ভেতরে, ট্রান্সফার শেয়ার্ড কোচ নয় বরং প্রাইভেট, আর গ্রুপ ছোট রাখা হয় যাতে কাউকে লবিতে অপেক্ষা করতে না হয়।",
         "Dix jours pour ceux qui préfèrent payer la proximité plutôt que des nuits supplémentaires. Les deux hôtels bordent l’esplanade du Haram, les transferts sont privés et le groupe reste limité."
      ),
      includes: [
         day("Return air ticket with flexible dates", "নমনীয় তারিখে রিটার্ন এয়ার টিকিট", "Billet aller-retour à dates flexibles"),
         day("Umrah visa and processing", "ওমরাহ ভিসা ও প্রসেসিং", "Visa Omra et traitement du dossier"),
         day("9 nights in 5-star Haram-view hotels", "৫-স্টার হারাম-ভিউ হোটেলে ৯ রাত", "9 nuits en hôtels 5 étoiles vue Haram"),
         day("Double or triple rooms, not shared", "ডাবল বা ট্রিপল রুম, শেয়ার্ড নয়", "Chambres doubles ou triples, non partagées"),
         day("Breakfast and dinner buffet", "ব্রেকফাস্ট ও ডিনার বুফে", "Petit-déjeuner et dîner en buffet"),
         day("Private car transfers throughout", "পুরো সময় প্রাইভেট কার ট্রান্সফার", "Transferts en voiture privée"),
         day("Ziyarah with a dedicated guide", "নিজস্ব গাইড সহ জিয়ারত", "Ziyarah avec guide dédié"),
      ],
      excludes: [
         day("Extra nights before or after", "আগে বা পরে অতিরিক্ত রাত", "Nuits supplémentaires avant ou après"),
         day("Lunch", "লাঞ্চ", "Déjeuner"),
         day("Laundry and room service", "লন্ড্রি ও রুম সার্ভিস", "Blanchisserie et service en chambre"),
         day("Travel insurance", "ট্রাভেল ইনস্যুরেন্স", "Assurance voyage"),
      ],
      highlights: [
         day("5-star hotels closer to Haram", "হারামের কাছাকাছি ৫-স্টার হোটেল", "Hôtels 5 étoiles plus proches du Haram"),
         day("Smaller family group and VIP transfers", "ছোট পারিবারিক গ্রুপ ও ভিআইপি ট্রান্সফার", "Petit groupe famille et transferts VIP"),
         day("Flexible flight dates after inquiry", "অনুসন্ধানের পর নমনীয় ফ্লাইট তারিখ", "Dates de vol flexibles après demande"),
      ],
      gallery: [kaaba, des4, plane],
      itinerary: [
         { day: 1, title: day("Arrive in Jeddah", "জেদ্দায় আগমন", "Arrivée à Djeddah"), text: day("Private car from the airport straight to your Makkah hotel, ihram on the way.", "এয়ারপোর্ট থেকে সরাসরি মক্কার হোটেলে প্রাইভেট কার, পথেই ইহরাম।", "Voiture privée de l’aéroport à votre hôtel de La Mecque, ihram en route.") },
         { day: 2, title: day("Umrah with a guide", "গাইড সহ ওমরাহ", "Omra accompagnée"), text: day("Tawaf and Sa’i at a calm hour, chosen to avoid the heaviest crowd.", "ভিড় এড়িয়ে শান্ত সময়ে তাওয়াফ ও সাঈ।", "Tawaf et Sa’i à une heure calme, choisie pour éviter la foule.") },
         { day: 4, title: day("Makkah ziyarah", "মক্কা জিয়ারত", "Ziyarah à La Mecque"), text: day("Half-day private tour of Mina, Arafat and the Jabal al-Nour viewpoint.", "মিনা, আরাফাত ও জাবালে নূর ভিউপয়েন্টে হাফ-ডে প্রাইভেট ট্যুর।", "Demi-journée privée : Mina, Arafat et le belvédère de Jabal al-Nour.") },
         { day: 6, title: day("Transfer to Madinah", "মদিনায় ট্রান্সফার", "Transfert vers Médine"), text: day("Haramain high-speed train or private car, then check-in facing the Prophet’s Mosque.", "হারামাইন হাই-স্পিড ট্রেন বা প্রাইভেট কার, এরপর মসজিদে নববীর সামনে চেক-ইন।", "Train à grande vitesse Haramain ou voiture privée, puis installation face à la mosquée du Prophète.") },
         { day: 8, title: day("Madinah ziyarah", "মদিনা জিয়ারত", "Ziyarah à Médine"), text: day("Quba Mosque, Mount Uhud and the date market with your guide.", "গাইড সহ কুবা মসজিদ, উহুদ পাহাড় ও খেজুরের বাজার।", "Mosquée Quba, mont Uhud et marché aux dattes avec votre guide.") },
         { day: 10, title: day("Return flight", "ফিরতি ফ্লাইট", "Vol retour"), text: day("Private transfer to Madinah airport for the flight home.", "মদিনা এয়ারপোর্টে প্রাইভেট ট্রান্সফার, এরপর দেশে ফেরার ফ্লাইট।", "Transfert privé vers l’aéroport de Médine pour le vol retour.") },
      ],
      terms: day(
         "Haram-view rooms are limited and confirmed only when the hotel releases the allocation, usually 3–4 weeks out. Tell us if you need adjoining rooms; we hold them at booking rather than at check-in.",
         "হারাম-ভিউ রুম সীমিত এবং হোটেল অ্যালোকেশন ছাড়লে তবেই নিশ্চিত হয়, সাধারণত ৩–৪ সপ্তাহ আগে। পাশাপাশি রুম দরকার হলে জানান; আমরা চেক-ইনের সময় নয়, বুকিংয়ের সময়েই ধরে রাখি।",
         "Les chambres vue Haram sont limitées et confirmées à la libération de l’allotement, en général 3 à 4 semaines avant. Signalez-nous un besoin de chambres communicantes : nous les bloquons dès la réservation."
      ),
   },
   {
      slug: "hajj-group-2026",
      thumb: kaaba,
      title: day("Hajj Group 2026", "হজ গ্রুপ ২০২৬", "Groupe Hajj 2026"),
      location: day("Makkah, Madinah & Mina", "মক্কা, মদিনা ও মিনা", "La Mecque, Médine et Mina"),
      days: 28,
      price: 620000,
      tag: day("Hajj", "হজ", "Hajj"),
      summary: day(
         "A 28-day Hajj under the official Bangladesh quota, with an experienced mutawwif who has led the rites for over a decade. Two pre-departure training sessions in Dhaka cover the rituals, the camp routine and what to pack — so the five days of Hajj feel familiar rather than frightening.",
         "বাংলাদেশের সরকারি কোটায় ২৮ দিনের হজ, সাথে এক দশকের বেশি অভিজ্ঞ মুতাওয়াফ। ঢাকায় যাত্রার আগে দুটি প্রশিক্ষণ সেশনে আহকাম, ক্যাম্পের রুটিন ও কী নিতে হবে তা শেখানো হয় — যাতে হজের পাঁচ দিন ভীতিকর নয়, পরিচিত মনে হয়।",
         "Un Hajj de 28 jours sous quota officiel bangladais, avec un mutawwif expérimenté depuis plus de dix ans. Deux sessions de préparation à Dhaka couvrent les rites, la vie au camp et les bagages."
      ),
      includes: [
         day("Hajj visa under the official quota", "সরকারি কোটায় হজ ভিসা", "Visa Hajj sous quota officiel"),
         day("Return flights from Dhaka", "ঢাকা থেকে রিটার্ন ফ্লাইট", "Vols aller-retour depuis Dhaka"),
         day("Hotels in Makkah and Madinah", "মক্কা ও মদিনায় হোটেল", "Hôtels à La Mecque et Médine"),
         day("Mina and Arafat camp (Category B)", "মিনা ও আরাফাত ক্যাম্প (ক্যাটাগরি বি)", "Camp Mina et Arafat (catégorie B)"),
         day("All meals during the five Hajj days", "হজের পাঁচ দিন সব বেলার খাবার", "Tous les repas pendant les cinq jours du Hajj"),
         day("Mutawwif and Bangla-speaking guides", "মুতাওয়াফ ও বাংলাভাষী গাইড", "Mutawwif et guides bangladais"),
         day("Two training sessions before departure", "যাত্রার আগে দুটি প্রশিক্ষণ সেশন", "Deux sessions de préparation avant le départ"),
      ],
      excludes: [
         day("Qurbani (booked as an add-on)", "কুরবানি (অ্যাড-অন হিসেবে)", "Qurbani (en supplément)"),
         day("Meals outside the Hajj days", "হজের দিনগুলোর বাইরে খাবার", "Repas hors des jours du Hajj"),
         day("Camp upgrade to Category A", "ক্যাটাগরি এ ক্যাম্পে আপগ্রেড", "Surclassement camp catégorie A"),
         day("Personal medical costs", "ব্যক্তিগত চিকিৎসা খরচ", "Frais médicaux personnels"),
         day("Extra luggage beyond airline limit", "এয়ারলাইন সীমার বাইরে অতিরিক্ত লাগেজ", "Bagages excédentaires"),
      ],
      highlights: [
         day("Official quota group Hajj from Bangladesh", "বাংলাদেশ থেকে সরকারি কোটা গ্রুপ হজ", "Hajj de groupe avec quota officiel depuis le Bangladesh"),
         day("Mina and Arafat camp with meals on Hajj days", "হজের দিনে মিনা ও আরাফাত ক্যাম্প এবং খাবার", "Camp Mina et Arafat avec repas les jours du Hajj"),
         day("Experienced mutawwif throughout the rites", "সমস্ত রুকনে অভিজ্ঞ মুতাওয়াফ", "Mutawwif expérimenté pendant tous les rites"),
      ],
      gallery: [kaaba, des4, plane],
      itinerary: [
         { day: 1, title: day("Departure from Dhaka", "ঢাকা থেকে যাত্রা", "Départ de Dhaka"), text: day("Final briefing at the airport, group check-in and the flight to Jeddah.", "এয়ারপোর্টে চূড়ান্ত ব্রিফিং, গ্রুপ চেক-ইন এবং জেদ্দার ফ্লাইট।", "Briefing final à l’aéroport, enregistrement du groupe et vol vers Djeddah.") },
         { day: 2, title: day("Settle in Makkah", "মক্কায় অবস্থান", "Installation à La Mecque"), text: day("Umrah on arrival, then daily prayers at the Haram while the group settles.", "পৌঁছেই ওমরাহ, এরপর গ্রুপ থিতু হওয়া পর্যন্ত হারামে নিয়মিত নামাজ।", "Omra à l’arrivée, puis prières quotidiennes au Haram pendant l’installation.") },
         { day: 6, title: day("Rites revision", "আহকাম পুনরালোচনা", "Révision des rites"), text: day("The mutawwif walks the group through each Hajj day, hour by hour.", "মুতাওয়াফ ঘণ্টা ধরে হজের প্রতিটি দিনের ধাপ বুঝিয়ে দেন।", "Le mutawwif détaille chaque journée du Hajj, heure par heure.") },
         { day: 8, title: day("Mina — 8 Dhul-Hijjah", "মিনা — ৮ জিলহজ", "Mina — 8 Dhul-Hijja"), text: day("Move to the Mina camp in ihram and spend the day and night in prayer.", "ইহরাম অবস্থায় মিনা ক্যাম্পে যাত্রা, দিন ও রাত ইবাদতে।", "Départ au camp de Mina en ihram, journée et nuit en prière.") },
         { day: 9, title: day("Arafat and Muzdalifah", "আরাফাত ও মুজদালিফা", "Arafat et Muzdalifah"), text: day("The day of Arafat, then the open night at Muzdalifah collecting pebbles.", "আরাফাতের দিন, এরপর মুজদালিফায় খোলা আকাশের নিচে রাত ও কঙ্কর সংগ্রহ।", "Journée d’Arafat, puis nuit à la belle étoile à Muzdalifah pour ramasser les cailloux.") },
         { day: 10, title: day("Stoning, Qurbani and Tawaf", "রমি, কুরবানি ও তাওয়াফ", "Lapidation, Qurbani et Tawaf"), text: day("Jamarat, sacrifice, head shaving and Tawaf al-Ifadah with the group.", "গ্রুপের সাথে জামারাত, কুরবানি, মাথা মুণ্ডন এবং তাওয়াফুল ইফাদা।", "Jamarat, sacrifice, rasage et Tawaf al-Ifadah avec le groupe.") },
         { day: 13, title: day("Back to Makkah", "মক্কায় প্রত্যাবর্তন", "Retour à La Mecque"), text: day("Final stoning days complete, then rest and prayers back at the hotel.", "শেষ রমির দিনগুলো সম্পন্ন, এরপর হোটেলে বিশ্রাম ও ইবাদত।", "Derniers jours de lapidation, puis repos et prières à l’hôtel.") },
         { day: 20, title: day("Madinah stay", "মদিনায় অবস্থান", "Séjour à Médine"), text: day("Transfer to Madinah for eight days of prayer at Masjid an-Nabawi and ziyarah.", "মদিনায় ট্রান্সফার, আট দিন মসজিদে নববীতে নামাজ ও জিয়ারত।", "Transfert à Médine : huit jours de prière à la mosquée du Prophète et ziyarah.") },
         { day: 28, title: day("Return to Dhaka", "ঢাকায় প্রত্যাবর্তন", "Retour à Dhaka"), text: day("Farewell gathering and the group flight home.", "বিদায়ী সমাবেশ এবং দেশে ফেরার গ্রুপ ফ্লাইট।", "Rassemblement d’adieu et vol retour du groupe.") },
      ],
      terms: day(
         "Hajj pricing follows the official quota and airline allotment announced each year, so the figure above is last season’s indicative rate. Registration usually closes several months before departure and requires a medical certificate and vaccination card.",
         "হজের মূল্য প্রতি বছর ঘোষিত সরকারি কোটা ও এয়ারলাইন অ্যালটমেন্ট অনুসরণ করে, তাই উপরের অঙ্কটি গত মৌসুমের নির্দেশক দর। নিবন্ধন সাধারণত যাত্রার কয়েক মাস আগেই বন্ধ হয় এবং মেডিকেল সার্টিফিকেট ও টিকা কার্ড লাগে।",
         "Le tarif du Hajj suit le quota officiel et l’allotement aérien annoncés chaque année ; le montant ci-dessus correspond à la saison précédente. Les inscriptions ferment plusieurs mois avant le départ et exigent un certificat médical et un carnet de vaccination."
      ),
   },
   {
      slug: "family-umrah",
      thumb: des4,
      title: day("Family Umrah Package", "পারিবারিক ওমরাহ প্যাকেজ", "Forfait Omra famille"),
      location: day("Makkah & Madinah", "মক্কা ও মদিনা", "La Mecque et Médine"),
      days: 12,
      price: 189000,
      tag: day("Family", "পরিবার", "Famille"),
      summary: day(
         "Twelve days built around travelling with children and elderly parents. One family room instead of separate beds, ziyarah scheduled after the afternoon nap rather than at dawn, and a wheelchair on request at both Harams.",
         "শিশু ও বয়স্ক বাবা-মাকে নিয়ে ভ্রমণের কথা ভেবে সাজানো বারো দিন। আলাদা বিছানার বদলে একটি ফ্যামিলি রুম, ভোরের বদলে দুপুরের বিশ্রামের পর জিয়ারত, আর দুই হারামেই অনুরোধে হুইলচেয়ার।",
         "Douze jours pensés pour voyager avec enfants et parents âgés. Une chambre familiale au lieu de lits séparés, ziyarah après la sieste plutôt qu’à l’aube, et fauteuil roulant sur demande dans les deux Harams."
      ),
      includes: [
         day("11 nights in one family room", "একটি ফ্যামিলি রুমে ১১ রাত", "11 nuits en chambre familiale"),
         day("Umrah visa and return tickets", "ওমরাহ ভিসা ও রিটার্ন টিকিট", "Visa Omra et billets aller-retour"),
         day("Breakfast and dinner daily", "প্রতিদিন ব্রেকফাস্ট ও ডিনার", "Petit-déjeuner et dîner quotidiens"),
         day("Private transfers with child seats", "চাইল্ড সিট সহ প্রাইভেট ট্রান্সফার", "Transferts privés avec siège enfant"),
         day("Afternoon ziyarah in both cities", "দুই শহরেই বিকেলের জিয়ারত", "Ziyarah l’après-midi dans les deux villes"),
         day("Wheelchair assistance on request", "অনুরোধে হুইলচেয়ার সহায়তা", "Assistance en fauteuil roulant sur demande"),
      ],
      excludes: [
         day("Infant ticket and cot if required", "প্রয়োজনে শিশু টিকিট ও কট", "Billet bébé et lit d’appoint si besoin"),
         day("Lunch", "লাঞ্চ", "Déjeuner"),
         day("Extra bed for a fifth guest", "পঞ্চম অতিথির জন্য অতিরিক্ত বেড", "Lit supplémentaire pour un 5e occupant"),
         day("Personal expenses", "ব্যক্তিগত খরচ", "Dépenses personnelles"),
      ],
      highlights: [
         day("Family rooms in Makkah and Madinah", "মক্কা ও মদিনায় ফ্যামিলি রুম", "Chambres familiales à La Mecque et Médine"),
         day("Child policy explained before you pay", "পেমেন্টের আগে শিশু পলিসি স্পষ্ট", "Politique enfants clarifiée avant paiement"),
         day("Ziyarah timing adjusted for the family", "পরিবারের জন্য জিয়ারত সময় সমন্বয়", "Horaires ziyarah adaptés à la famille"),
      ],
      gallery: [des4, kaaba, plane],
      itinerary: [
         { day: 1, title: day("Arrive in Jeddah", "জেদ্দায় আগমন", "Arrivée à Djeddah"), text: day("Family transfer with child seats straight to the Makkah hotel.", "চাইল্ড সিট সহ পারিবারিক ট্রান্সফারে সরাসরি মক্কার হোটেলে।", "Transfert familial avec sièges enfants directement vers l’hôtel de La Mecque.") },
         { day: 2, title: day("Umrah at a calm hour", "শান্ত সময়ে ওমরাহ", "Omra à une heure calme"), text: day("Tawaf and Sa’i scheduled late evening when the courtyard is cooler and quieter.", "সন্ধ্যার শেষে তাওয়াফ ও সাঈ, যখন প্রাঙ্গণ ঠান্ডা ও শান্ত থাকে।", "Tawaf et Sa’i en fin de soirée, quand l’esplanade est plus fraîche et calme.") },
         { day: 4, title: day("Slow days in Makkah", "মক্কায় ধীর দিনগুলো", "Journées tranquilles à La Mecque"), text: day("Prayers, rest and short walks — no fixed programme for the children.", "নামাজ, বিশ্রাম ও অল্প হাঁটা — শিশুদের জন্য কোনো বাঁধা প্রোগ্রাম নেই।", "Prières, repos et courtes promenades — aucun programme imposé aux enfants.") },
         { day: 6, title: day("Makkah ziyarah", "মক্কা জিয়ারত", "Ziyarah à La Mecque"), text: day("Afternoon coach tour of Mina, Arafat and the historic viewpoints.", "বিকেলে কোচে মিনা, আরাফাত ও ঐতিহাসিক ভিউপয়েন্ট।", "Tour en autocar l’après-midi : Mina, Arafat et points de vue historiques.") },
         { day: 8, title: day("Move to Madinah", "মদিনায় যাত্রা", "Départ vers Médine"), text: day("Daytime transfer so nobody travels overnight, then check-in near the Mosque.", "দিনের বেলায় ট্রান্সফার যাতে রাতে ভ্রমণ করতে না হয়, এরপর মসজিদের কাছে চেক-ইন।", "Transfert de jour pour éviter de voyager la nuit, puis installation près de la mosquée.") },
         { day: 10, title: day("Madinah ziyarah", "মদিনা জিয়ারত", "Ziyarah à Médine"), text: day("Quba Mosque, Mount Uhud and the date market at an easy pace.", "ধীর গতিতে কুবা মসজিদ, উহুদ পাহাড় ও খেজুরের বাজার।", "Mosquée Quba, mont Uhud et marché aux dattes, à un rythme tranquille.") },
         { day: 12, title: day("Return home", "দেশে ফেরা", "Retour"), text: day("Breakfast, packing help and transfer to Madinah airport.", "ব্রেকফাস্ট, গোছগাছে সহায়তা এবং মদিনা এয়ারপোর্টে ট্রান্সফার।", "Petit-déjeuner, aide aux bagages et transfert vers l’aéroport de Médine.") },
      ],
      terms: day(
         "Child rates depend on age at the travel date, not at booking: under 2 travels as an infant, 2–11 shares the family room at a reduced rate. Send everyone’s date of birth with your inquiry and we will price each traveller separately.",
         "শিশুদের রেট নির্ভর করে ভ্রমণের তারিখে বয়সের উপর, বুকিংয়ের সময়ের নয়: ২ বছরের কম ইনফ্যান্ট, ২–১১ বছর ফ্যামিলি রুমে কম রেটে। অনুসন্ধানের সময় সবার জন্মতারিখ পাঠালে আমরা প্রত্যেকের দাম আলাদা করে দেব।",
         "Le tarif enfant dépend de l’âge à la date du voyage : moins de 2 ans en bébé, 2 à 11 ans en chambre familiale à tarif réduit. Envoyez les dates de naissance et nous chiffrons chaque voyageur."
      ),
   },
];

export const tourPackages: PackageItem[] = [
   {
      slug: "europe-highlights",
      thumb: des1,
      title: day("Europe Highlights 10 Days", "ইউরোপ হাইলাইটস ১০ দিন", "Europe incontournables 10 jours"),
      location: day("France · Italy · Switzerland", "ফ্রান্স · ইতালি · সুইজারল্যান্ড", "France · Italie · Suisse"),
      days: 10,
      price: 198000,
      tag: day("Europe", "ইউরোপ", "Europe"),
      category: "group",
      region: "europe",
      summary: day(
         "Three countries in ten days, built around slow mornings and guided afternoons. You travel with one coach and one tour leader from Paris to the Swiss Alps, so there is no re-booking or luggage juggling between cities.",
         "দশ দিনে তিনটি দেশ — সকালটা ধীরে, বিকেলটা গাইডেড ট্যুরে। প্যারিস থেকে সুইস আল্পস পর্যন্ত একই কোচ ও একজন ট্যুর লিডার, তাই শহর বদলালেও নতুন বুকিং বা লাগেজ ঝামেলা নেই।",
         "Trois pays en dix jours, avec des matinées tranquilles et des après-midi guidées. Un seul autocar et un seul accompagnateur de Paris aux Alpes suisses : aucune réservation à refaire entre les villes."
      ),
      highlights: [
         day("Seine river cruise on your first evening", "প্রথম সন্ধ্যায় সেইন নদীতে ক্রুজ", "Croisière sur la Seine dès le premier soir"),
         day("Skip-the-line entry at the Colosseum", "কোলোসিয়ামে লাইন এড়িয়ে প্রবেশ", "Entrée coupe-file au Colisée"),
         day("Vatican Museums with a local guide", "স্থানীয় গাইড সহ ভ্যাটিকান মিউজিয়াম", "Musées du Vatican avec guide local"),
         day("Cogwheel train up to the Alpine viewpoint", "আল্পাইন ভিউপয়েন্টে কগহুইল ট্রেন", "Train à crémaillère vers le belvédère alpin"),
         day("Bangla-speaking tour leader for the full trip", "পুরো ট্যুরে বাংলাভাষী ট্যুর লিডার", "Accompagnateur bangladais pendant tout le circuit"),
         day("Maximum 24 travellers per departure", "প্রতি ডিপার্চারে সর্বোচ্চ ২৪ জন", "24 voyageurs maximum par départ"),
      ],
      includes: [
         day("9 nights in 3-star central hotels", "৩-স্টার সেন্ট্রাল হোটেলে ৯ রাত", "9 nuits en hôtels 3 étoiles centraux"),
         day("Daily breakfast, 4 set dinners", "প্রতিদিন ব্রেকফাস্ট, ৪টি সেট ডিনার", "Petit-déjeuner quotidien, 4 dîners"),
         day("Private coach between all cities", "সব শহরের মধ্যে প্রাইভেট কোচ", "Autocar privé entre toutes les villes"),
         day("English and Bangla speaking guide", "ইংরেজি ও বাংলাভাষী গাইড", "Guide anglophone et bangladais"),
         day("Airport pickup and drop-off", "এয়ারপোর্ট পিকআপ ও ড্রপ", "Transferts aéroport aller-retour"),
         day("Entry tickets listed in the day plan", "দিনভিত্তিক পরিকল্পনায় উল্লেখিত টিকিট", "Billets d’entrée indiqués au programme"),
      ],
      excludes: [
         day("International airfare unless quoted", "আন্তর্জাতিক এয়ারফেয়ার (কোট না করা হলে)", "Vol international sauf devis"),
         day("Schengen visa fee and appointment", "শেঞ্জেন ভিসা ফি ও অ্যাপয়েন্টমেন্ট", "Frais et rendez-vous visa Schengen"),
         day("Travel insurance", "ট্রাভেল ইনস্যুরেন্স", "Assurance voyage"),
         day("Lunches and personal shopping", "লাঞ্চ ও ব্যক্তিগত কেনাকাটা", "Déjeuners et achats personnels"),
         day("Optional Eiffel Tower summit ticket", "ঐচ্ছিক আইফেল টাওয়ার সামিট টিকিট", "Billet sommet Tour Eiffel en option"),
      ],
      itinerary: [
         { day: 1, title: day("Arrive in Paris", "প্যারিসে আগমন", "Arrivée à Paris"), text: day("Airport pickup, hotel check-in and a relaxed Seine river cruise in the evening.", "এয়ারপোর্ট পিকআপ, হোটেল চেক-ইন এবং সন্ধ্যায় আরামদায়ক সেইন রিভার ক্রুজ।", "Transfert, enregistrement à l’hôtel et croisière tranquille sur la Seine en soirée.") },
         { day: 2, title: day("Paris city tour", "প্যারিস সিটি ট্যুর", "Visite de Paris"), text: day("Eiffel Tower photo stop, Louvre courtyard, Champs-Élysées and free time at Montmartre.", "আইফেল টাওয়ারে ফটো স্টপ, লুভর প্রাঙ্গণ, শঁজেলিজে এবং মমার্তে অবসর সময়।", "Arrêt photo Tour Eiffel, cour du Louvre, Champs-Élysées et temps libre à Montmartre.") },
         { day: 3, title: day("Paris to Lucerne", "প্যারিস থেকে লুসার্ন", "Paris – Lucerne"), text: day("Morning coach through the French countryside, arriving Lucerne for a lakeside walk.", "সকালে ফরাসি গ্রামের মধ্য দিয়ে কোচ যাত্রা, লুসার্নে পৌঁছে লেকের পাশে হাঁটা।", "Route matinale à travers la campagne française, arrivée à Lucerne et balade au bord du lac.") },
         { day: 4, title: day("Swiss Alps day", "সুইস আল্পস দিন", "Journée dans les Alpes"), text: day("Cogwheel train to a mountain viewpoint, then free afternoon in Lucerne old town.", "কগহুইল ট্রেনে পাহাড়ের ভিউপয়েন্ট, এরপর লুসার্ন পুরনো শহরে অবসর বিকেল।", "Train à crémaillère vers un belvédère, puis après-midi libre dans la vieille ville.") },
         { day: 6, title: day("Milan and on to Venice", "মিলান হয়ে ভেনিস", "Milan puis Venise"), text: day("Duomo square stop in Milan, then evening arrival in the Venice area.", "মিলানের দুওমো স্কয়ারে বিরতি, সন্ধ্যায় ভেনিস এলাকায় পৌঁছানো।", "Arrêt sur la place du Duomo à Milan, arrivée en soirée près de Venise.") },
         { day: 7, title: day("Venice to Rome", "ভেনিস থেকে রোম", "Venise – Rome"), text: day("St Mark’s Square in the morning, then the long drive south to Rome.", "সকালে সেন্ট মার্কস স্কয়ার, এরপর দক্ষিণে রোমের দিকে দীর্ঘ যাত্রা।", "Place Saint-Marc le matin, puis longue route vers Rome.") },
         { day: 8, title: day("Rome highlights", "রোম হাইলাইটস", "Rome incontournable"), text: day("Skip-the-line Colosseum, Roman Forum and the Trevi Fountain on foot.", "লাইন এড়িয়ে কোলোসিয়াম, রোমান ফোরাম ও হেঁটে ট্রেভি ফাউন্টেন।", "Colisée coupe-file, Forum romain et fontaine de Trevi à pied.") },
         { day: 9, title: day("Vatican City", "ভ্যাটিকান সিটি", "Cité du Vatican"), text: day("Guided Vatican Museums and St Peter’s Basilica, free afternoon for shopping.", "গাইডেড ভ্যাটিকান মিউজিয়াম ও সেন্ট পিটার্স ব্যাসিলিকা, বিকেলে কেনাকাটার সময়।", "Musées du Vatican guidés et basilique Saint-Pierre, après-midi libre.") },
         { day: 10, title: day("Departure", "প্রস্থান", "Départ"), text: day("Breakfast, check-out and airport transfer for your return flight.", "ব্রেকফাস্ট, চেক-আউট এবং ফিরতি ফ্লাইটের জন্য এয়ারপোর্ট ট্রান্সফার।", "Petit-déjeuner, départ de l’hôtel et transfert aéroport.") },
      ],
      terms: day(
         "Group departures run monthly from Dhaka; private groups of 8 or more can pick their own dates. Apply for the Schengen visa at least 8 weeks before departure — we send the document checklist as soon as you inquire.",
         "ঢাকা থেকে প্রতি মাসে গ্রুপ ডিপার্চার; ৮ জন বা বেশি হলে নিজেদের তারিখ বেছে নেওয়া যায়। যাত্রার অন্তত ৮ সপ্তাহ আগে শেঞ্জেন ভিসার আবেদন করুন — অনুসন্ধান করলেই আমরা ডকুমেন্ট চেকলিস্ট পাঠাই।",
         "Départs groupés mensuels depuis Dhaka ; les groupes privés de 8 personnes choisissent leurs dates. Déposez la demande de visa Schengen au moins 8 semaines avant le départ — la check-list vous est envoyée dès votre demande."
      ),
      gallery: [des1, listing7, listing3],
   },
   {
      slug: "dubai-family",
      thumb: des2,
      title: day("Dubai Family Holiday", "দুবাই পারিবারিক ছুটি", "Vacances famille Dubaï"),
      location: day("Dubai, UAE", "দুবাই, ইউএই", "Dubaï, EAU"),
      days: 5,
      price: 89000,
      tag: day("Family", "পরিবার", "Famille"),
      category: "family",
      region: "dubai",
      summary: day(
         "A five-day trip paced for children and grandparents, not for a checklist. Mornings stay free, tours run in the late afternoon when the heat drops, and the hotel sits close to a metro station so you can head out on your own.",
         "পাঁচ দিনের ট্রিপ, চেকলিস্টের জন্য নয় — শিশু ও বয়স্কদের কথা ভেবে সাজানো। সকাল ফাঁকা থাকে, গরম কমলে বিকেলে ট্যুর, আর হোটেল মেট্রো স্টেশনের কাছেই যাতে নিজেরাও ঘুরতে পারেন।",
         "Cinq jours au rythme des enfants et des grands-parents. Matinées libres, visites en fin d’après-midi quand la chaleur retombe, et un hôtel proche du métro pour sortir à votre guise."
      ),
      highlights: [
         day("Evening desert safari with BBQ dinner", "সন্ধ্যায় ডেজার্ট সাফারি ও বিবিকিউ ডিনার", "Safari désert le soir avec dîner barbecue"),
         day("Dhow dinner cruise on Dubai Marina", "দুবাই মেরিনায় ধাও ডিনার ক্রুজ", "Dîner-croisière en dhow sur la Marina"),
         day("Burj Khalifa level 124 entry", "বুর্জ খলিফা লেভেল ১২৪ প্রবেশ", "Accès Burj Khalifa niveau 124"),
         day("Free mornings for late family breakfasts", "পরিবারের দেরি ব্রেকফাস্টের জন্য ফাঁকা সকাল", "Matinées libres pour des petits-déjeuners tardifs"),
         day("Hotel within walking distance of a metro stop", "মেট্রো স্টেশন হেঁটে যাওয়ার দূরত্বে হোটেল", "Hôtel à quelques pas d’une station de métro"),
         day("Child rates for under-12s in the same room", "একই রুমে ১২ বছরের কম শিশুদের জন্য বিশেষ রেট", "Tarif enfant (-12 ans) dans la même chambre"),
      ],
      includes: [
         day("4 nights in a 4-star family room", "৪-স্টার ফ্যামিলি রুমে ৪ রাত", "4 nuits en chambre familiale 4 étoiles"),
         day("Daily breakfast buffet", "প্রতিদিন ব্রেকফাস্ট বুফে", "Petit-déjeuner buffet quotidien"),
         day("Airport pickup and drop-off", "এয়ারপোর্ট পিকআপ ও ড্রপ", "Transferts aéroport aller-retour"),
         day("Half-day city tour with guide", "গাইড সহ হাফ-ডে সিটি ট্যুর", "Demi-journée de visite guidée"),
         day("Desert safari and marina dinner cruise", "ডেজার্ট সাফারি ও মেরিনা ডিনার ক্রুজ", "Safari désert et dîner-croisière"),
         day("Burj Khalifa timed entry ticket", "বুর্জ খলিফা টাইমড এন্ট্রি টিকিট", "Billet horodaté Burj Khalifa"),
      ],
      excludes: [
         day("Air ticket unless quoted together", "একসাথে কোট না করলে এয়ার টিকিট", "Billet d’avion sauf devis groupé"),
         day("UAE visa fee", "ইউএই ভিসা ফি", "Frais de visa EAU"),
         day("Theme park tickets", "থিম পার্ক টিকিট", "Billets parcs d’attractions"),
         day("Lunches and dinners not listed", "উল্লেখ না থাকা লাঞ্চ ও ডিনার", "Repas non mentionnés"),
         day("Tourism Dirham paid at the hotel", "হোটেলে প্রদেয় ট্যুরিজম দিরহাম", "Tourism Dirham réglé à l’hôtel"),
      ],
      itinerary: [
         { day: 1, title: day("Arrive in Dubai", "দুবাই আগমন", "Arrivée à Dubaï"), text: day("Airport pickup, hotel check-in and a slow first evening around Dubai Marina.", "এয়ারপোর্ট পিকআপ, হোটেল চেক-ইন এবং দুবাই মেরিনায় নিরিবিলি প্রথম সন্ধ্যা।", "Transfert, enregistrement et première soirée tranquille à Dubai Marina.") },
         { day: 2, title: day("Old and new Dubai", "পুরনো ও নতুন দুবাই", "Dubaï ancien et moderne"), text: day("Afternoon city tour: Al Fahidi lanes, gold souk, abra crossing and Palm Jumeirah drive.", "বিকেলে সিটি ট্যুর: আল ফাহিদি গলি, গোল্ড সুক, আবরা পারাপার ও পাম জুমেইরাহ ড্রাইভ।", "Visite l’après-midi : ruelles d’Al Fahidi, souk de l’or, traversée en abra et Palm Jumeirah.") },
         { day: 3, title: day("Desert safari", "ডেজার্ট সাফারি", "Safari dans le désert"), text: day("Pickup at 15:30 for dune drive, camel photos and a BBQ dinner with live show at camp.", "১৫:৩০-এ পিকআপ, ডিউন ড্রাইভ, উটের ছবি এবং ক্যাম্পে লাইভ শো সহ বিবিকিউ ডিনার।", "Départ à 15h30 : dunes, photos à dos de chameau et dîner barbecue avec spectacle au camp.") },
         { day: 4, title: day("Burj Khalifa and fountain", "বুর্জ খলিফা ও ফাউন্টেন", "Burj Khalifa et fontaine"), text: day("Free morning, timed entry to level 124 in the afternoon, then the Dubai Fountain show.", "সকাল ফাঁকা, বিকেলে লেভেল ১২৪-এ টাইমড এন্ট্রি, এরপর দুবাই ফাউন্টেন শো।", "Matinée libre, accès au niveau 124 l’après-midi, puis spectacle de la fontaine.") },
         { day: 5, title: day("Departure", "প্রস্থান", "Départ"), text: day("Breakfast, late check-out where available, and airport transfer.", "ব্রেকফাস্ট, সম্ভব হলে লেট চেক-আউট এবং এয়ারপোর্ট ট্রান্সফার।", "Petit-déjeuner, départ tardif si possible et transfert aéroport.") },
      ],
      terms: day(
         "Rates change with season and room type; December to February is peak. Children under 12 sharing the parents’ room get a reduced rate — send their ages with your inquiry and we will price it exactly.",
         "সিজন ও রুম টাইপ অনুযায়ী রেট বদলায়; ডিসেম্বর–ফেব্রুয়ারি পিক সিজন। বাবা-মায়ের রুমে থাকা ১২ বছরের কম শিশুদের জন্য কম রেট — অনুসন্ধানের সময় বয়স জানালে আমরা সঠিক দাম দেব।",
         "Les tarifs varient selon la saison et la chambre ; décembre à février est la haute saison. Réduction pour les moins de 12 ans dans la chambre des parents — indiquez leur âge dans votre demande."
      ),
      gallery: [des2, listing2],
   },
   {
      slug: "turkey-honeymoon",
      thumb: des3,
      title: day("Turkey Honeymoon 7 Days", "তুরস্ক হানিমুন ৭ দিন", "Lune de miel Turquie 7 jours"),
      location: day("Istanbul & Cappadocia", "ইস্তাম্বুল ও ক্যাপাডোকিয়া", "Istanbul et Cappadoce"),
      days: 7,
      price: 156000,
      tag: day("Honeymoon", "হানিমুন", "Lune de miel"),
      category: "honeymoon",
      region: "turkey",
      summary: day(
         "Seven private days for two — no group coach, no fixed wake-up call. Four nights in an Istanbul boutique hotel and two in a Cappadocia cave room, connected by a domestic flight and a driver who meets you at every door.",
         "দুজনের জন্য সাত দিনের প্রাইভেট ট্রিপ — কোনো গ্রুপ কোচ নেই, নির্দিষ্ট সময়ে ওঠার তাড়া নেই। ইস্তাম্বুলের বুটিক হোটেলে চার রাত, ক্যাপাডোকিয়ার কেভ রুমে দুই রাত, মাঝে ডোমেস্টিক ফ্লাইট আর প্রতিটি দরজায় অপেক্ষমাণ ড্রাইভার।",
         "Sept jours privés à deux — sans autocar ni réveil imposé. Quatre nuits en hôtel boutique à Istanbul, deux en chambre troglodyte en Cappadoce, reliées par un vol intérieur et un chauffeur qui vous attend à chaque porte."
      ),
      highlights: [
         day("Two nights in a real cave room", "আসল কেভ রুমে দুই রাত", "Deux nuits en vraie chambre troglodyte"),
         day("Private Bosphorus sunset cruise", "প্রাইভেট বসফরাস সানসেট ক্রুজ", "Croisière privée au coucher du soleil"),
         day("Honeymoon room setup on arrival", "আগমনে হানিমুন রুম সাজানো", "Chambre décorée à l’arrivée"),
         day("Balloon viewpoint breakfast at sunrise", "সূর্যোদয়ে বেলুন ভিউপয়েন্টে ব্রেকফাস্ট", "Petit-déjeuner au lever du soleil face aux montgolfières"),
         day("Private car and driver, no shared tours", "প্রাইভেট গাড়ি ও ড্রাইভার, শেয়ার্ড ট্যুর নয়", "Voiture et chauffeur privés, aucune visite partagée"),
         day("Domestic flight and all transfers arranged", "ডোমেস্টিক ফ্লাইট ও সব ট্রান্সফার ব্যবস্থা", "Vol intérieur et transferts organisés"),
      ],
      includes: [
         day("6 nights: 4 Istanbul, 2 Cappadocia", "৬ রাত: ইস্তাম্বুলে ৪, ক্যাপাডোকিয়ায় ২", "6 nuits : 4 à Istanbul, 2 en Cappadoce"),
         day("Daily breakfast at both hotels", "দুই হোটেলেই প্রতিদিন ব্রেকফাস্ট", "Petit-déjeuner quotidien dans les deux hôtels"),
         day("Istanbul–Cappadocia domestic flight", "ইস্তাম্বুল–ক্যাপাডোকিয়া ডোমেস্টিক ফ্লাইট", "Vol intérieur Istanbul–Cappadoce"),
         day("Private airport and intercity transfers", "প্রাইভেট এয়ারপোর্ট ও আন্তঃশহর ট্রান্সফার", "Transferts privés aéroport et intervilles"),
         day("Guided old city and Bosphorus cruise", "গাইডেড পুরনো শহর ও বসফরাস ক্রুজ", "Vieille ville guidée et croisière sur le Bosphore"),
         day("Cappadocia valley tour with driver", "ড্রাইভার সহ ক্যাপাডোকিয়া ভ্যালি ট্যুর", "Tour des vallées de Cappadoce avec chauffeur"),
      ],
      excludes: [
         day("International airfare unless quoted", "আন্তর্জাতিক এয়ারফেয়ার (কোট না করা হলে)", "Vol international sauf devis"),
         day("Turkey e-visa fee", "তুরস্ক ই-ভিসা ফি", "Frais d’e-visa turc"),
         day("Hot air balloon flight (add-on)", "হট এয়ার বেলুন ফ্লাইট (অ্যাড-অন)", "Vol en montgolfière (en option)"),
         day("Lunches and dinners", "লাঞ্চ ও ডিনার", "Déjeuners et dîners"),
         day("Museum pass for extra sites", "অতিরিক্ত সাইটের জন্য মিউজিয়াম পাস", "Pass musées pour sites supplémentaires"),
      ],
      itinerary: [
         { day: 1, title: day("Arrive in Istanbul", "ইস্তাম্বুলে আগমন", "Arrivée à Istanbul"), text: day("Private transfer to your boutique hotel, honeymoon room setup and a free evening.", "বুটিক হোটেলে প্রাইভেট ট্রান্সফার, হানিমুন রুম সাজানো এবং অবসর সন্ধ্যা।", "Transfert privé vers l’hôtel boutique, chambre décorée et soirée libre.") },
         { day: 2, title: day("Old city on foot", "পায়ে হেঁটে পুরনো শহর", "Vieille ville à pied"), text: day("Blue Mosque, Hagia Sophia, Topkapı Palace and tea in the Grand Bazaar.", "ব্লু মস্ক, হায়া সোফিয়া, তোপকাপি প্যালেস এবং গ্র্যান্ড বাজারে চা।", "Mosquée Bleue, Sainte-Sophie, palais de Topkapı et thé au Grand Bazar.") },
         { day: 3, title: day("Bosphorus and Asian side", "বসফরাস ও এশীয় পাড়", "Bosphore et rive asiatique"), text: day("Private sunset cruise, then dinner in the Kadıköy food streets.", "প্রাইভেট সানসেট ক্রুজ, এরপর কাদিকয় ফুড স্ট্রিটে ডিনার।", "Croisière privée au coucher du soleil, puis dîner dans les rues gourmandes de Kadıköy.") },
         { day: 4, title: day("Fly to Cappadocia", "ক্যাপাডোকিয়ায় ফ্লাইট", "Vol vers la Cappadoce"), text: day("Morning flight, cave hotel check-in and a quiet terrace sunset over the valleys.", "সকালের ফ্লাইট, কেভ হোটেলে চেক-ইন এবং টেরেসে নিরিবিলি সূর্যাস্ত।", "Vol le matin, installation à l’hôtel troglodyte et coucher de soleil sur les vallées.") },
         { day: 5, title: day("Valleys and pottery town", "ভ্যালি ও মৃৎশিল্পের শহর", "Vallées et village de poterie"), text: day("Sunrise balloon viewpoint, Göreme open-air museum and Avanos in the afternoon.", "সূর্যোদয়ে বেলুন ভিউপয়েন্ট, গোরেমে ওপেন-এয়ার মিউজিয়াম এবং বিকেলে আভানোস।", "Lever du soleil face aux montgolfières, musée en plein air de Göreme et Avanos l’après-midi.") },
         { day: 6, title: day("Free day in Cappadocia", "ক্যাপাডোকিয়ায় অবসর দিন", "Journée libre en Cappadoce"), text: day("Optional balloon flight at dawn, otherwise a slow day and an evening return flight.", "ভোরে ঐচ্ছিক বেলুন ফ্লাইট, নয়তো আরামের দিন এবং সন্ধ্যায় ফিরতি ফ্লাইট।", "Vol en montgolfière en option à l’aube, sinon journée tranquille et vol retour le soir.") },
         { day: 7, title: day("Departure", "প্রস্থান", "Départ"), text: day("Breakfast in Istanbul and private transfer to the airport.", "ইস্তাম্বুলে ব্রেকফাস্ট এবং এয়ারপোর্টে প্রাইভেট ট্রান্সফার।", "Petit-déjeuner à Istanbul et transfert privé vers l’aéroport.") },
      ],
      terms: day(
         "Balloon flights are weather-dependent and are booked separately once you arrive. Tell us your wedding date at inquiry — most partner hotels add a room decoration and cake at no cost.",
         "বেলুন ফ্লাইট আবহাওয়ার উপর নির্ভরশীল এবং পৌঁছানোর পর আলাদাভাবে বুক করা হয়। অনুসন্ধানের সময় বিয়ের তারিখ জানালে বেশিরভাগ পার্টনার হোটেল বিনামূল্যে রুম ডেকোরেশন ও কেক দেয়।",
         "Les vols en montgolfière dépendent de la météo et se réservent sur place. Indiquez votre date de mariage : la plupart de nos hôtels partenaires offrent décoration et gâteau."
      ),
      gallery: [des3, listing2, listing6, listing3],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd65723463%3A0x3db5c9871ebbc7b2!2sIstanbul!5e0!3m2!1sen!2str",
   },
   {
      slug: "ksa-short",
      thumb: des4,
      title: day("KSA Short Break", "সৌদি শর্ট ব্রেক", "Escapade Arabie saoudite"),
      location: day("Riyadh & Jeddah", "রিয়াদ ও জেদ্দা", "Riyad et Djeddah"),
      days: 6,
      price: 112000,
      tag: day("KSA", "সৌদি", "KSA"),
      category: "group",
      region: "ksa",
      summary: day(
         "Six days across the two faces of Saudi Arabia: Riyadh’s desert edge and museums, then Jeddah’s Red Sea corniche and coral-stone old town. A domestic flight links them, so you unpack twice and travel light in between.",
         "ছয় দিনে সৌদি আরবের দুই রূপ: রিয়াদের মরুপ্রান্ত ও জাদুঘর, এরপর জেদ্দার লোহিত সাগর কর্নিশ ও প্রবাল-পাথরের পুরনো শহর। মাঝে ডোমেস্টিক ফ্লাইট, তাই মাত্র দুইবার ব্যাগ খুলতে হবে।",
         "Six jours entre les deux visages de l’Arabie saoudite : le désert et les musées de Riyad, puis la corniche de la mer Rouge et la vieille ville de Djeddah. Un vol intérieur relie les deux étapes."
      ),
      highlights: [
         day("Edge of the World cliff drive from Riyadh", "রিয়াদ থেকে এজ অব দ্য ওয়ার্ল্ড ক্লিফ ট্রিপ", "Excursion au « Bout du monde » depuis Riyad"),
         day("Diriyah mud-brick heritage district", "দিরিয়াহ মাটির ইটের ঐতিহ্য এলাকা", "Quartier historique en pisé de Diriyah"),
         day("Al-Balad old town walk in Jeddah", "জেদ্দায় আল-বালাদ পুরনো শহরে হাঁটা", "Balade dans la vieille ville d’Al-Balad"),
         day("Sunset on the Jeddah Corniche", "জেদ্দা কর্নিশে সূর্যাস্ত", "Coucher de soleil sur la corniche de Djeddah"),
         day("Optional Umrah day trip from Jeddah", "জেদ্দা থেকে ঐচ্ছিক ওমরাহ ডে ট্রিপ", "Excursion Omra en option depuis Djeddah"),
         day("Domestic flight and all transfers included", "ডোমেস্টিক ফ্লাইট ও সব ট্রান্সফার অন্তর্ভুক্ত", "Vol intérieur et transferts inclus"),
      ],
      includes: [
         day("5 nights: 2 Riyadh, 3 Jeddah", "৫ রাত: রিয়াদে ২, জেদ্দায় ৩", "5 nuits : 2 à Riyad, 3 à Djeddah"),
         day("4-star hotels with breakfast", "ব্রেকফাস্ট সহ ৪-স্টার হোটেল", "Hôtels 4 étoiles avec petit-déjeuner"),
         day("Riyadh–Jeddah domestic flight", "রিয়াদ–জেদ্দা ডোমেস্টিক ফ্লাইট", "Vol intérieur Riyad–Djeddah"),
         day("Airport and intercity transfers", "এয়ারপোর্ট ও আন্তঃশহর ট্রান্সফার", "Transferts aéroport et intervilles"),
         day("Edge of the World 4x4 excursion", "এজ অব দ্য ওয়ার্ল্ড ফোর-হুইল এক্সকারশন", "Excursion 4x4 au « Bout du monde »"),
         day("Guided Diriyah and Al-Balad tours", "গাইডেড দিরিয়াহ ও আল-বালাদ ট্যুর", "Visites guidées de Diriyah et Al-Balad"),
      ],
      excludes: [
         day("International airfare unless quoted", "আন্তর্জাতিক এয়ারফেয়ার (কোট না করা হলে)", "Vol international sauf devis"),
         day("KSA visa if not e-visa eligible", "ই-ভিসা যোগ্য না হলে সৌদি ভিসা", "Visa saoudien si e-visa non éligible"),
         day("Lunches and dinners", "লাঞ্চ ও ডিনার", "Déjeuners et dîners"),
         day("Umrah transport and guide (add-on)", "ওমরাহ পরিবহন ও গাইড (অ্যাড-অন)", "Transport et guide Omra (en option)"),
         day("Travel insurance", "ট্রাভেল ইনস্যুরেন্স", "Assurance voyage"),
      ],
      itinerary: [
         { day: 1, title: day("Arrive in Riyadh", "রিয়াদে আগমন", "Arrivée à Riyad"), text: day("Airport pickup and hotel check-in, with a free evening at Boulevard City if you still have energy.", "এয়ারপোর্ট পিকআপ ও হোটেল চেক-ইন; শক্তি থাকলে সন্ধ্যায় বুলেভার্ড সিটি ঘোরার সুযোগ।", "Transfert, enregistrement à l’hôtel et soirée libre à Boulevard City si vous en avez l’énergie.") },
         { day: 2, title: day("Riyadh city and Diriyah", "রিয়াদ শহর ও দিরিয়াহ", "Riyad et Diriyah"), text: day("National Museum and Masmak Fort in the morning, mud-brick Diriyah lit up after dark.", "সকালে ন্যাশনাল মিউজিয়াম ও মাসমাক ফোর্ট, সন্ধ্যায় আলোকিত মাটির ইটের দিরিয়াহ।", "Musée national et fort Masmak le matin, Diriyah illuminée à la tombée de la nuit.") },
         { day: 3, title: day("Edge of the World", "এজ অব দ্য ওয়ার্ল্ড", "Le Bout du monde"), text: day("Half-day 4x4 trip to the escarpment, then the evening flight to Jeddah.", "হাফ-ডে ফোর-হুইল ড্রাইভে পাহাড়ের কিনারা, এরপর সন্ধ্যায় জেদ্দার ফ্লাইট।", "Demi-journée en 4x4 jusqu’à la falaise, puis vol du soir vers Djeddah.") },
         { day: 4, title: day("Al-Balad and the corniche", "আল-বালাদ ও কর্নিশ", "Al-Balad et la corniche"), text: day("Coral-stone houses and souks by day, Red Sea corniche and fish dinner at sunset.", "দিনে প্রবাল-পাথরের বাড়ি ও সুক, সূর্যাস্তে লোহিত সাগর কর্নিশ ও মাছের ডিনার।", "Maisons en pierre de corail et souks le jour, corniche et dîner de poisson au coucher du soleil.") },
         { day: 5, title: day("Free day or Umrah trip", "অবসর দিন বা ওমরাহ ট্রিপ", "Journée libre ou Omra"), text: day("Beach and mall day in Jeddah, or an add-on road trip to Makkah for Umrah.", "জেদ্দায় সৈকত ও মলের দিন, অথবা ওমরাহর জন্য মক্কায় অ্যাড-অন রোড ট্রিপ।", "Plage et centres commerciaux à Djeddah, ou excursion à La Mecque pour l’Omra.") },
         { day: 6, title: day("Departure", "প্রস্থান", "Départ"), text: day("Breakfast, check-out and transfer to Jeddah airport.", "ব্রেকফাস্ট, চেক-আউট এবং জেদ্দা এয়ারপোর্টে ট্রান্সফার।", "Petit-déjeuner, départ de l’hôtel et transfert vers l’aéroport de Djeddah.") },
      ],
      terms: day(
         "Best suited to passports eligible for the Saudi e-visa, which usually lands within 48 hours. If yours needs an embassy application, tell us early — we will build the extra two weeks into your dates.",
         "সৌদি ই-ভিসার যোগ্য পাসপোর্টের জন্য সবচেয়ে উপযোগী, যা সাধারণত ৪৮ ঘণ্টায় আসে। দূতাবাসে আবেদন লাগলে আগেভাগে জানান — আমরা তারিখে অতিরিক্ত দুই সপ্তাহ ধরে নেব।",
         "Idéal pour les passeports éligibles à l’e-visa saoudien, délivré en général sous 48 heures. Si une demande consulaire est nécessaire, prévenez-nous : nous ajoutons deux semaines au calendrier."
      ),
      gallery: [des4, kaaba],
   },
];

export const hotelPackages: PackageItem[] = [
   {
      slug: "paris-city-hotel",
      thumb: listing5,
      title: day("Paris City Hotel", "প্যারিস সিটি হোটেল", "Hôtel centre Paris"),
      location: day("Paris, France", "প্যারিস, ফ্রান্স", "Paris, France"),
      days: 1,
      price: 145,
      tag: day("Hotel", "হোটেল", "Hôtel"),
      hotelName: day("4-star city hotel", "৪-স্টার সিটি হোটেল", "Hôtel 4 étoiles centre-ville"),
      summary: day(
         "A 4-star hotel two metro stops from the Louvre, on a quiet side street rather than a boulevard. Rooms are compact by Paris standards but the location saves you an hour of travel a day, and breakfast runs until 10:30.",
         "লুভর থেকে দুই মেট্রো স্টপ দূরে ৪-স্টার হোটেল, বড় রাস্তার বদলে শান্ত গলিতে। প্যারিসের হিসেবে রুম ছোট, তবে লোকেশনের কারণে দিনে এক ঘণ্টা যাতায়াত বাঁচে, আর ব্রেকফাস্ট চলে সকাল ১০:৩০ পর্যন্ত।",
         "Hôtel 4 étoiles à deux stations du Louvre, dans une rue calme. Les chambres sont compactes pour Paris, mais l’emplacement fait gagner une heure de trajet par jour et le petit-déjeuner est servi jusqu’à 10h30."
      ),
      highlights: [
         day("2 metro stops from the Louvre", "লুভর থেকে ২ মেট্রো স্টপ", "À deux stations du Louvre"),
         day("Breakfast served until 10:30", "সকাল ১০:৩০ পর্যন্ত ব্রেকফাস্ট", "Petit-déjeuner jusqu’à 10h30"),
         day("Quiet side-street rooms", "শান্ত গলির দিকের রুম", "Chambres sur rue calme"),
         day("Free cancellation up to 48 hours", "৪৮ ঘণ্টা আগে পর্যন্ত ফ্রি ক্যান্সেলেশন", "Annulation gratuite jusqu’à 48 h"),
      ],
      includes: [
         day("Room and buffet breakfast", "রুম ও বুফে ব্রেকফাস্ট", "Chambre et petit-déjeuner buffet"),
         day("VAT and service charge", "ভ্যাট ও সার্ভিস চার্জ", "TVA et service"),
         day("Wi-Fi and luggage storage", "ওয়াই-ফাই ও লাগেজ স্টোরেজ", "Wi-Fi et consigne à bagages"),
      ],
      excludes: [
         day("City tourist tax, paid on site", "সিটি ট্যুরিস্ট ট্যাক্স, হোটেলে প্রদেয়", "Taxe de séjour, réglée sur place"),
         day("Airport transfer", "এয়ারপোর্ট ট্রান্সফার", "Transfert aéroport"),
         day("Lunch and dinner", "লাঞ্চ ও ডিনার", "Déjeuner et dîner"),
      ],
      itinerary: [],
      terms: day(
         "Paris hotel rates move daily and are only locked once we confirm your booking. Fashion week and September trade fairs can double the nightly rate, so book those dates as early as you can.",
         "প্যারিসের হোটেল রেট প্রতিদিন বদলায় এবং বুকিং নিশ্চিত করলেই কেবল লক হয়। ফ্যাশন উইক ও সেপ্টেম্বরের ট্রেড ফেয়ারে রাতের ভাড়া দ্বিগুণ হতে পারে, তাই ওই তারিখগুলো যত আগে সম্ভব বুক করুন।",
         "Les tarifs parisiens changent chaque jour et ne sont bloqués qu’à la confirmation. La Fashion Week et les salons de septembre peuvent doubler le prix : réservez ces dates au plus tôt."
      ),
      gallery: [listing5, listing1, listing3],
      facilities: [
         day("Wi-Fi", "ওয়াই-ফাই", "Wi-Fi"),
         day("Breakfast", "ব্রেকফাস্ট", "Petit-déjeuner"),
         day("Air conditioning", "এসি", "Climatisation"),
         day("24h reception", "২৪ ঘণ্টা রিসেপশন", "Réception 24 h"),
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr",
   },
   {
      slug: "makkah-haram-view",
      thumb: kaaba,
      title: day("Makkah Haram View", "মক্কা হারাম ভিউ", "Vue Haram La Mecque"),
      location: day("Makkah, KSA", "মক্কা, সৌদি আরব", "La Mecque, KSA"),
      days: 1,
      price: 210,
      hotelName: day("Haram-side hotel", "হারাম পাশের হোটেল", "Hôtel côté Haram"),
      summary: day(
         "Roughly a seven-minute walk to the King Abdulaziz gate, which matters most at Fajr and during Ramadan. Ask for a Haram-view room if you want the Kaaba in sight; the courtyard-view rooms are quieter and cost noticeably less.",
         "কিং আবদুল আজিজ গেট পর্যন্ত প্রায় সাত মিনিটের হাঁটা পথ — যা ফজরে ও রমজানে সবচেয়ে কাজে লাগে। কাবা দেখতে চাইলে হারাম-ভিউ রুম চান; কোর্টইয়ার্ড-ভিউ রুম বেশি শান্ত এবং দামও লক্ষণীয়ভাবে কম।",
         "Environ sept minutes à pied de la porte du Roi Abdulaziz, ce qui compte surtout au Fajr et pendant le Ramadan. Demandez une chambre vue Haram pour voir la Kaaba ; les chambres côté cour sont plus calmes et nettement moins chères."
      ),
      highlights: [
         day("About 7 minutes on foot to the Haram", "হারাম পর্যন্ত প্রায় ৭ মিনিটের হাঁটা", "Environ 7 minutes à pied du Haram"),
         day("Haram-view rooms available on request", "অনুরোধে হারাম-ভিউ রুম", "Chambres vue Haram sur demande"),
         day("Family rooms sleeping four", "চারজনের ফ্যামিলি রুম", "Chambres familiales pour quatre"),
         day("24-hour reception in Bangla and Urdu", "বাংলা ও উর্দুতে ২৪ ঘণ্টা রিসেপশন", "Réception 24 h en bangla et ourdou"),
      ],
      includes: [
         day("Room only or with breakfast", "রুম অনলি বা ব্রেকফাস্ট সহ", "Chambre seule ou avec petit-déjeuner"),
         day("VAT and municipality fee", "ভ্যাট ও মিউনিসিপ্যালিটি ফি", "TVA et taxe municipale"),
         day("Wi-Fi and prayer mat in room", "রুমে ওয়াই-ফাই ও জায়নামাজ", "Wi-Fi et tapis de prière en chambre"),
      ],
      excludes: [
         day("Haram shuttle if placed in a far wing", "দূরের উইংয়ে রুম হলে হারাম শাটল", "Navette Haram si aile éloignée"),
         day("Airport transfer from Jeddah", "জেদ্দা থেকে এয়ারপোর্ট ট্রান্সফার", "Transfert depuis l’aéroport de Djeddah"),
         day("Meals other than breakfast", "ব্রেকফাস্ট ছাড়া অন্য খাবার", "Repas hors petit-déjeuner"),
      ],
      itinerary: [],
      terms: day(
         "Ramadan, the last ten nights especially, and the Hajj season are peak periods when rates can triple and minimum-stay rules apply. Room category is confirmed only after the hotel releases its allocation.",
         "রমজান — বিশেষ করে শেষ দশ রাত — এবং হজ মৌসুম পিক সময়; তখন ভাড়া তিন গুণ পর্যন্ত হতে পারে এবং ন্যূনতম রাত থাকার শর্ত প্রযোজ্য। হোটেল অ্যালোকেশন ছাড়লে তবেই রুম ক্যাটাগরি নিশ্চিত হয়।",
         "Le Ramadan — surtout les dix dernières nuits — et la saison du Hajj sont des périodes de pointe : tarifs pouvant tripler et durée minimale de séjour. La catégorie de chambre n’est confirmée qu’à la libération de l’allotement."
      ),
      gallery: [kaaba, des4, plane],
      facilities: [
         day("Haram walking access", "হারামে হেঁটে যাওয়া", "Accès Haram à pied"),
         day("Family rooms", "ফ্যামিলি রুম", "Chambres familiales"),
         day("Wi-Fi", "ওয়াই-ফাই", "Wi-Fi"),
         day("Prayer area", "নামাজের জায়গা", "Espace prière"),
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.3!2d39.8262!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4cedc061bb%3A0x4e76aa1aec541e72!2sMasjid%20al-Haram!5e0!3m2!1sen!2s",
   },
   {
      slug: "dhaka-business-hotel",
      thumb: listing7,
      title: day("Dhaka Business Hotel", "ঢাকা বিজনেস হোটেল", "Hôtel affaires Dhaka"),
      location: day("Gulshan, Dhaka", "গুলশান, ঢাকা", "Gulshan, Dhaka"),
      days: 1,
      price: 95,
      hotelName: day("Gulshan business hotel", "গুলশান বিজনেস হোটেল", "Hôtel affaires Gulshan"),
      summary: day(
         "A Gulshan business hotel about 40 minutes from Hazrat Shahjalal airport outside rush hour. Built for short stays: fast desk Wi-Fi, a meeting room you can book by the hour, and early check-in when a red-eye lands you at dawn.",
         "গুলশানের বিজনেস হোটেল, রাশ আওয়ারের বাইরে হযরত শাহজালাল এয়ারপোর্ট থেকে প্রায় ৪০ মিনিট। স্বল্প থাকার জন্য উপযোগী: দ্রুত ডেস্ক ওয়াই-ফাই, ঘণ্টা হিসেবে বুক করা যায় এমন মিটিং রুম, আর ভোরের ফ্লাইটে নামলে আর্লি চেক-ইন।",
         "Hôtel d’affaires à Gulshan, à environ 40 minutes de l’aéroport hors heures de pointe. Pensé pour les courts séjours : Wi-Fi rapide au bureau, salle de réunion à l’heure et enregistrement anticipé après un vol de nuit."
      ),
      highlights: [
         day("About 40 minutes from the airport", "এয়ারপোর্ট থেকে প্রায় ৪০ মিনিট", "À environ 40 minutes de l’aéroport"),
         day("Meeting room bookable by the hour", "ঘণ্টা হিসেবে মিটিং রুম বুকিং", "Salle de réunion réservable à l’heure"),
         day("Early check-in for dawn arrivals", "ভোরে পৌঁছালে আর্লি চেক-ইন", "Enregistrement anticipé pour arrivées matinales"),
         day("Walking distance to Gulshan offices", "গুলশানের অফিসপাড়া হেঁটে যাওয়ার দূরত্বে", "À pied des bureaux de Gulshan"),
      ],
      includes: [
         day("Room with breakfast", "ব্রেকফাস্ট সহ রুম", "Chambre avec petit-déjeuner"),
         day("High-speed Wi-Fi and work desk", "হাই-স্পিড ওয়াই-ফাই ও ওয়ার্ক ডেস্ক", "Wi-Fi haut débit et bureau"),
         day("VAT and service charge", "ভ্যাট ও সার্ভিস চার্জ", "TVA et service"),
      ],
      excludes: [
         day("Airport transfer (bookable separately)", "এয়ারপোর্ট ট্রান্সফার (আলাদা বুকিং)", "Transfert aéroport (réservable à part)"),
         day("Meeting room hire", "মিটিং রুম ভাড়া", "Location de salle de réunion"),
         day("Laundry and minibar", "লন্ড্রি ও মিনিবার", "Blanchisserie et minibar"),
      ],
      itinerary: [],
      terms: day(
         "Local guests may be asked for a national ID at check-in and foreign guests for a passport. Rooms are held until 18:00 unless you tell us the flight number for a late arrival.",
         "চেক-ইনে স্থানীয় অতিথিদের কাছে জাতীয় পরিচয়পত্র এবং বিদেশি অতিথিদের কাছে পাসপোর্ট চাওয়া হতে পারে। দেরিতে পৌঁছানোর ফ্লাইট নম্বর না জানালে রুম সন্ধ্যা ৬টা পর্যন্ত ধরে রাখা হয়।",
         "Une pièce d’identité nationale peut être demandée aux résidents et un passeport aux visiteurs étrangers. Les chambres sont conservées jusqu’à 18h00, sauf si vous nous communiquez votre numéro de vol."
      ),
      gallery: [listing7, listing5, listing1],
      facilities: [
         day("Wi-Fi", "ওয়াই-ফাই", "Wi-Fi"),
         day("Restaurant", "রেস্টুরেন্ট", "Restaurant"),
         day("Meeting room", "মিটিং রুম", "Salle de réunion"),
         day("Airport desk", "এয়ারপোর্ট ডেস্ক", "Bureau aéroport"),
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1!2d90.4152!3d23.7806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c103a8093%3A0xd660a2d8ed1a6d32!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd",
   },
   {
      slug: "istanbul-bosphorus",
      thumb: listing2,
      title: day("Istanbul Bosphorus Stay", "ইস্তাম্বুল বসফরাস স্টে", "Séjour Bosphore Istanbul"),
      location: day("Istanbul, Turkey", "ইস্তাম্বুল, তুরস্ক", "Istanbul, Turquie"),
      days: 1,
      price: 120,
      hotelName: day("Bosphorus hotel", "বসফরাস হোটেল", "Hôtel Bosphore"),
      summary: day(
         "A mid-size hotel on the European bank where the ferries pass close enough to hear. Breakfast is served on the terrace facing the water, and the tram to Sultanahmet stops a five-minute walk away.",
         "ইউরোপীয় তীরের মাঝারি আকারের হোটেল, যেখানে ফেরিগুলো এত কাছ দিয়ে যায় যে শব্দ শোনা যায়। পানির দিকে মুখ করা টেরেসে ব্রেকফাস্ট, আর সুলতানাহমেতগামী ট্রাম পাঁচ মিনিটের হাঁটা দূরত্বে।",
         "Hôtel de taille moyenne sur la rive européenne, assez près pour entendre passer les ferries. Petit-déjeuner en terrasse face à l’eau et tramway pour Sultanahmet à cinq minutes à pied."
      ),
      highlights: [
         day("Terrace breakfast facing the water", "পানির দিকে মুখ করা টেরেসে ব্রেকফাস্ট", "Petit-déjeuner en terrasse face à l’eau"),
         day("5 minutes to the Sultanahmet tram", "সুলতানাহমেত ট্রাম ৫ মিনিটে", "À 5 minutes du tramway de Sultanahmet"),
         day("Sea-view rooms on upper floors", "উপরের তলায় সি-ভিউ রুম", "Chambres vue mer aux étages supérieurs"),
         day("Cruise and city tours bookable at reception", "রিসেপশনে ক্রুজ ও সিটি ট্যুর বুকিং", "Croisières et visites réservables à la réception"),
      ],
      includes: [
         day("Room and terrace breakfast", "রুম ও টেরেস ব্রেকফাস্ট", "Chambre et petit-déjeuner en terrasse"),
         day("VAT and city taxes", "ভ্যাট ও সিটি ট্যাক্স", "TVA et taxes locales"),
         day("Wi-Fi and luggage storage", "ওয়াই-ফাই ও লাগেজ স্টোরেজ", "Wi-Fi et consigne à bagages"),
      ],
      excludes: [
         day("Bosphorus cruise ticket", "বসফরাস ক্রুজ টিকিট", "Billet de croisière sur le Bosphore"),
         day("Airport transfer (paid add-on)", "এয়ারপোর্ট ট্রান্সফার (পেইড অ্যাড-অন)", "Transfert aéroport (en supplément)"),
         day("Meals other than breakfast", "ব্রেকফাস্ট ছাড়া অন্য খাবার", "Repas hors petit-déjeuner"),
      ],
      itinerary: [],
      terms: day(
         "Only a handful of rooms actually face the sea, so request one at inquiry rather than at check-in. Istanbul charges an accommodation tax that is already included in the rate we quote.",
         "সত্যিকারের সি-ভিউ রুম মাত্র কয়েকটি, তাই চেক-ইনের সময় নয়, অনুসন্ধানের সময়েই চেয়ে নিন। ইস্তাম্বুলের অ্যাকোমোডেশন ট্যাক্স আমাদের দেওয়া দরেই অন্তর্ভুক্ত।",
         "Seules quelques chambres donnent réellement sur la mer : demandez-la dès votre demande. La taxe de séjour d’Istanbul est déjà comprise dans notre tarif."
      ),
      gallery: [listing2, listing6, listing3],
      facilities: [
         day("Bosphorus view rooms", "বসফরাস ভিউ রুম", "Chambres vue Bosphore"),
         day("Breakfast", "ব্রেকফাস্ট", "Petit-déjeuner"),
         day("Wi-Fi", "ওয়াই-ফাই", "Wi-Fi"),
         day("Airport transfer (paid)", "এয়ারপোর্ট ট্রান্সফার (পেইড)", "Transfert aéroport (payant)"),
      ],
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009!2d29.012!3d41.039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd65723463%3A0x3db5c9871ebbc7b2!2sBosphorus!5e0!3m2!1sen!2str",
   },
];

export type BusRoute = {
   slug: string;
   from: LText;
   to: LText;
   type: "domestic" | "international";
   duration: LText;
   fromPrice: number;
};

export const busRoutes: BusRoute[] = [
   { slug: "dhaka-chittagong", from: day("Dhaka", "ঢাকা", "Dhaka"), to: day("Chattogram", "চট্টগ্রাম", "Chattogram"), type: "domestic", duration: day("6–7 hours", "৬–৭ ঘণ্টা", "6–7 h"), fromPrice: 1200 },
   { slug: "dhaka-sylhet", from: day("Dhaka", "ঢাকা", "Dhaka"), to: day("Sylhet", "সিলেট", "Sylhet"), type: "domestic", duration: day("5–6 hours", "৫–৬ ঘণ্টা", "5–6 h"), fromPrice: 1100 },
   { slug: "dhaka-coxsbazar", from: day("Dhaka", "ঢাকা", "Dhaka"), to: day("Cox’s Bazar", "কক্সবাজার", "Cox’s Bazar"), type: "domestic", duration: day("9–10 hours", "৯–১০ ঘণ্টা", "9–10 h"), fromPrice: 1800 },
   { slug: "dhaka-kolkata", from: day("Dhaka", "ঢাকা", "Dhaka"), to: day("Kolkata", "কলকাতা", "Kolkata"), type: "international", duration: day("12 hours", "১২ ঘণ্টা", "12 h"), fromPrice: 2500 },
   { slug: "paris-brussels", from: day("Paris", "প্যারিস", "Paris"), to: day("Brussels", "ব্রাসেলস", "Bruxelles"), type: "international", duration: day("4 hours", "৪ ঘণ্টা", "4 h"), fromPrice: 35 },
   { slug: "paris-amsterdam", from: day("Paris", "প্যারিস", "Paris"), to: day("Amsterdam", "আমস্টারডাম", "Amsterdam"), type: "international", duration: day("6 hours", "৬ ঘণ্টা", "6 h"), fromPrice: 45 },
];

export type VisaType = {
   slug: string;
   thumb: StaticImageData;
   title: LText;
   summary: LText;
   destinations: LText;
   documents: LText[];
   processing: LText;
};

export const visaTypes: VisaType[] = [
   {
      slug: "tourist",
      thumb: visaTourist,
      title: day("Tourist Visa", "টুরিস্ট ভিসা", "Visa touristique"),
      summary: day("Holiday and sightseeing visas for Schengen, UK, Turkey, Malaysia and more.", "ছুটি ও ভ্রমণের জন্য শেঞ্জেন, যুক্তরাজ্য, তুরস্ক, মালয়েশিয়াসহ অন্যান্য ভিসা।", "Visas loisirs pour Schengen, Royaume-Uni, Turquie, Malaisie et plus."),
      destinations: day("Schengen, UK, Turkey, Malaysia, Thailand, UAE", "শেঞ্জেন, যুক্তরাজ্য, তুরস্ক, মালয়েশিয়া, থাইল্যান্ড, ইউএই", "Schengen, RU, Turquie, Malaisie, Thaïlande, EAU"),
      documents: [
         day("Passport (6+ months validity)", "পাসপোর্ট (৬ মাসের বেশি মেয়াদ)", "Passeport (validité 6 mois +)"),
         day("Photos as per embassy spec", "দূতাবাসের স্পেক অনুযায়ী ছবি", "Photos selon consulat"),
         day("Bank statements", "ব্যাংক স্টেটমেন্ট", "Relevés bancaires"),
         day("Itinerary / invitation", "ইটিনারেডি / আমন্ত্রণপত্র", "Itinéraire / invitation"),
      ],
      processing: day("Usually 7–21 working days after file complete", "ফাইল সম্পূর্ণ হলে সাধারণত ৭–২১ কর্মদিবস", "En général 7–21 jours ouvrés une fois le dossier complet"),
   },
   {
      slug: "visit",
      thumb: visaVisit,
      title: day("Visit / Family Visa", "ভিজিট / পরিবার ভিসা", "Visa visite / famille"),
      summary: day("Visiting relatives in Europe, the UK or the Gulf with invitation support.", "আমন্ত্রণপত্র সহ ইউরোপ, যুক্তরাজ্য বা গালফে আত্মীয় দেখতে যাওয়া।", "Visite famille en Europe, au Royaume-Uni ou au Golfe avec invitation."),
      destinations: day("Schengen, UK, KSA, UAE, Qatar", "শেঞ্জেন, যুক্তরাজ্য, সৌদি, ইউএই, কাতার", "Schengen, RU, KSA, EAU, Qatar"),
      documents: [
         day("Invitation / sponsorship", "আমন্ত্রণ / স্পন্সরশিপ", "Invitation / parrainage"),
         day("Host ID / residence proof", "হোস্ট আইডি / রিসিডেন্স প্রুফ", "Pièce d’identité / justificatif d’hôte"),
         day("Applicant financials", "আবেদনকারীর আর্থিক কাগজ", "Justificatifs financiers"),
      ],
      processing: day("Depends on embassy appointment slots", "দূতাবাসের অ্যাপয়েন্টমেন্ট স্লটের উপর নির্ভর করে", "Selon les créneaux consulaires"),
   },
   {
      slug: "business",
      thumb: visaBusiness,
      title: day("Business Visa", "বিজনেস ভিসা", "Visa affaires"),
      summary: day("Meetings, fairs and short company visits with invitation letter guidance.", "মিটিং, মেলা ও স্বল্পকালীন কোম্পানি ভিজিট — ইনভিটেশন লেটার গাইডেন্স সহ।", "Réunions, salons et visites d’entreprise avec aide à la lettre d’invitation."),
      destinations: day("Schengen, UK, USA, China, UAE", "শেঞ্জেন, যুক্তরাজ্য, যুক্তরাষ্ট্র, চীন, ইউএই", "Schengen, RU, USA, Chine, EAU"),
      documents: [
         day("Company documents", "কোম্পানি ডকুমেন্ট", "Documents société"),
         day("Invitation from host company", "হোস্ট কোম্পানির আমন্ত্রণ", "Invitation de l’entreprise hôte"),
         day("Cover letter", "কভার লেটার", "Lettre de motivation"),
      ],
      processing: day("Often faster when documents are complete", "ডকুমেন্ট সম্পূর্ণ হলে প্রায়ই দ্রুত", "Souvent plus rapide si le dossier est complet"),
   },
   {
      slug: "student",
      thumb: visaStudent,
      title: day("Student Visa Support", "স্টুডেন্ট ভিসা সহায়তা", "Accompagnement visa étudiant"),
      summary: day("File checklist and appointment guidance for study applications. We do not guarantee visa outcome.", "পড়াশোনার আবেদনের ফাইল চেকলিস্ট ও অ্যাপয়েন্টমেন্ট গাইডেন্স। ভিসা ফলাফল গ্যারান্টি নয়।", "Checklist et rendez-vous pour dossiers étudiants. Aucune garantie de visa."),
      destinations: day("France, UK, Canada, Malaysia", "ফ্রান্স, যুক্তরাজ্য, কানাডা, মালয়েশিয়া", "France, RU, Canada, Malaisie"),
      documents: [
         day("Offer / CAS / acceptance", "অফার / সিএএস / একসেপ্টেন্স", "Offre / CAS / acceptation"),
         day("Financial proof", "আর্থিক প্রমাণ", "Preuves financières"),
         day("Academic certificates", "একাডেমিক সনদ", "Diplômes"),
      ],
      processing: day("Follows university and embassy timelines", "বিশ্ববিদ্যালয় ও দূতাবাসের সময়সূচি অনুসরণ করে", "Selon calendrier université et consulat"),
   },
];

export const findHajj = (slug: string) => hajjPackages.find((item) => item.slug === slug);
export const findTour = (slug: string) => tourPackages.find((item) => item.slug === slug);
export const findHotel = (slug: string) => hotelPackages.find((item) => item.slug === slug);
export const findVisa = (slug: string) => visaTypes.find((item) => item.slug === slug);
