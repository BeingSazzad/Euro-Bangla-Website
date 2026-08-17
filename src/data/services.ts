import type { StaticImageData } from "next/image";
import type { LText } from "./localized";

import listing1 from "@/assets/img/listing/listing-1.jpg";
import listing2 from "@/assets/img/listing/listing-2.jpg";
import listing3 from "@/assets/img/listing/listing-3.jpg";
import listing4 from "@/assets/img/listing/listing-4.jpg";
import listing5 from "@/assets/img/listing/listing-5.jpg";
import listing6 from "@/assets/img/listing/listing-6.jpg";
import listing7 from "@/assets/img/listing/listing-8.jpg";
import des1 from "@/assets/img/destination/des.jpg";
import des2 from "@/assets/img/destination/des-2.jpg";
import des3 from "@/assets/img/destination/des-3.jpg";
import des4 from "@/assets/img/destination/des-4.jpg";
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
   mapEmbed?: string;
   hotelName?: LText;
};

const day = (en: string, bn: string, fr: string): LText => ({ en, bn, fr });

export const hajjPackages: PackageItem[] = [
   {
      slug: "economy-umrah-14",
      thumb: listing1,
      title: day("Economy Umrah 14 Days", "ইকোনমি ওমরাহ ১৪ দিন", "Omra économique 14 jours"),
      location: day("Makkah & Madinah", "মক্কা ও মদিনা", "La Mecque et Médine"),
      days: 14,
      price: 145000,
      tag: day("Popular", "জনপ্রিয়", "Populaire"),
      summary: day(
         "Shared hotel near Haram, group flights from Dhaka, visa, transport and ziyarah included.",
         "হারামের কাছে শেয়ার্ড হোটেল, ঢাকা থেকে গ্রুপ ফ্লাইট, ভিসা, পরিবহন ও জিয়ারত অন্তর্ভুক্ত।",
         "Hôtel partagé près du Haram, vols de groupe depuis Dhaka, visa, transport et ziyarah inclus."
      ),
      includes: [
         day("Return air ticket", "রিটার্ন এয়ার টিকিট", "Billet d’avion aller-retour"),
         day("Umrah visa", "ওমরাহ ভিসা", "Visa Omra"),
         day("Hotel in Makkah & Madinah", "মক্কা ও মদিনায় হোটেল", "Hôtel à La Mecque et Médine"),
         day("Ground transport", "গ্রাউন্ড ট্রান্সপোর্ট", "Transport terrestre"),
         day("Ziyarah tours", "জিয়ারত ট্যুর", "Visites ziyarah"),
      ],
      excludes: [
         day("Personal expenses", "ব্যক্তিগত খরচ", "Dépenses personnelles"),
         day("Travel insurance upgrade", "ট্রাভেল ইনস্যুরেন্স আপগ্রেড", "Assurance voyage supérieure"),
      ],
      itinerary: [
         { day: 1, title: day("Arrival Jeddah / Madinah", "জেদ্দা / মদিনা আগমন", "Arrivée Djeddah / Médine"), text: day("Airport pickup and hotel check-in.", "এয়ারপোর্ট পিকআপ ও হোটেল চেক-ইন।", "Transfert aéroport et enregistrement à l’hôtel.") },
         { day: 2, title: day("Umrah rites", "ওমরাহ আদায়", "Rites de l’Omra"), text: day("Ihram, Tawaf and Sa’i with group guidance.", "ইহরাম, তাওয়াফ ও সাঈ গ্রুপ গাইডেন্স সহ।", "Ihram, Tawaf et Sa’i avec accompagnement.") },
         { day: 8, title: day("Travel to Makkah", "মক্কায় যাত্রা", "Départ vers La Mecque"), text: day("Coach transfer and Haram stay.", "কোচ ট্রান্সফার ও হারাম স্টে।", "Transfert en autocar et séjour près du Haram.") },
      ],
      terms: day("Prices are indicative and confirmed after inquiry. Non-refundable deposits apply after visa processing.", "মূল্য নির্দেশক; অনুসন্ধানের পর নিশ্চিত হবে। ভিসা প্রক্রিয়ার পর ডিপোজিট ফেরতযোগ্য নয়।", "Prix indicatifs, confirmés après demande. Acompte non remboursable après traitement du visa."),
   },
   {
      slug: "premium-umrah-10",
      thumb: listing2,
      title: day("Premium Umrah 10 Days", "প্রিমিয়াম ওমরাহ ১০ দিন", "Omra premium 10 jours"),
      location: day("5-star Makkah & Madinah", "৫-স্টার মক্কা ও মদিনা", "5 étoiles La Mecque et Médine"),
      days: 10,
      price: 245000,
      tag: day("Premium", "প্রিমিয়াম", "Premium"),
      summary: day(
         "Closer hotels, smaller group and flexible flight dates for families.",
         "হারামের কাছাকাছি হোটেল, ছোট গ্রুপ এবং পরিবারের জন্য নমনীয় ফ্লাইট তারিখ।",
         "Hôtels plus proches, petit groupe et dates de vol flexibles pour les familles."
      ),
      includes: [
         day("Return air ticket", "রিটার্ন এয়ার টিকিট", "Billet d’avion aller-retour"),
         day("Umrah visa", "ওমরাহ ভিসা", "Visa Omra"),
         day("5-star hotels", "৫-স্টার হোটেল", "Hôtels 5 étoiles"),
         day("Private transfers", "প্রাইভেট ট্রান্সফার", "Transferts privés"),
      ],
      excludes: [day("Extra nights", "অতিরিক্ত রাত", "Nuits supplémentaires")],
      itinerary: [
         { day: 1, title: day("Arrival", "আগমন", "Arrivée"), text: day("VIP transfer to hotel.", "ভিআইপি ট্রান্সফার।", "Transfert VIP vers l’hôtel.") },
         { day: 2, title: day("Umrah", "ওমরাহ", "Omra"), text: day("Guided Umrah.", "গাইডেড ওমরাহ।", "Omra accompagnée.") },
      ],
      terms: day("Room type and dates are subject to availability.", "রুম টাইপ ও তারিখ সাপ্লাই সাপেক্ষে।", "Type de chambre et dates selon disponibilité."),
   },
   {
      slug: "hajj-group-2026",
      thumb: listing3,
      title: day("Hajj Group 2026", "হজ গ্রুপ ২০২৬", "Groupe Hajj 2026"),
      location: day("Makkah, Madinah & Mina", "মক্কা, মদিনা ও মিনা", "La Mecque, Médine et Mina"),
      days: 28,
      price: 620000,
      tag: day("Hajj", "হজ", "Hajj"),
      summary: day(
         "Government quota group Hajj with camp, meals during Hajj days and experienced mutawwif.",
         "সরকারি কোটা গ্রুপ হজ, ক্যাম্প, হজের দিনগুলোতে খাবার এবং অভিজ্ঞ মুতাওয়াফ।",
         "Hajj de groupe avec quota, camp, repas pendant les jours du Hajj et mutawwif expérimenté."
      ),
      includes: [
         day("Hajj visa & quota", "হজ ভিসা ও কোটা", "Visa Hajj et quota"),
         day("Flights", "ফ্লাইট", "Vols"),
         day("Mina / Arafat camp", "মিনা / আরাফাত ক্যাম্প", "Camp Mina / Arafat"),
         day("Mutawwif guidance", "মুতাওয়াফ গাইডেন্স", "Accompagnement mutawwif"),
      ],
      excludes: [day("Qurbani extra package", "কুরবানি অতিরিক্ত প্যাকেজ", "Pack qurbani supplémentaire")],
      itinerary: [
         { day: 1, title: day("Departure Dhaka", "ঢাকা থেকে যাত্রা", "Départ de Dhaka"), text: day("Group briefing and flight.", "গ্রুপ ব্রিফিং ও ফ্লাইট।", "Briefing du groupe et vol.") },
         { day: 8, title: day("Hajj days", "হজের দিনগুলো", "Jours du Hajj"), text: day("Mina, Arafat and Muzdalifah with the group.", "গ্রুপের সাথে মিনা, আরাফাত ও মুজদালিফা।", "Mina, Arafat et Muzdalifah avec le groupe.") },
      ],
      terms: day("Hajj prices depend on official quota and airline allotment.", "হজের মূল্য সরকারি কোটা ও এয়ারলাইন অ্যালটমেন্টের উপর নির্ভর করে।", "Les tarifs Hajj dépendent du quota officiel et des compagnies."),
   },
   {
      slug: "family-umrah",
      thumb: listing4,
      title: day("Family Umrah Package", "পারিবারিক ওমরাহ প্যাকেজ", "Forfait Omra famille"),
      location: day("Makkah & Madinah", "মক্কা ও মদিনা", "La Mecque et Médine"),
      days: 12,
      price: 189000,
      summary: day("Family rooms, child policy and flexible ziyarah timing.", "ফ্যামিলি রুম, শিশু পলিসি এবং নমনীয় জিয়ারত সময়।", "Chambres familiales, politique enfants et ziyarah flexible."),
      includes: [
         day("Family room", "ফ্যামিলি রুম", "Chambre familiale"),
         day("Visa & ticket", "ভিসা ও টিকিট", "Visa et billet"),
      ],
      excludes: [day("Infant ticket if required", "প্রয়োজনে শিশু টিকিট", "Billet bébé si requis")],
      itinerary: [
         { day: 1, title: day("Arrival", "আগমন", "Arrivée"), text: day("Family transfer.", "পারিবারিক ট্রান্সফার।", "Transfert famille.") },
      ],
      terms: day("Child discounts confirmed at inquiry.", "শিশু ছাড় অনুসন্ধানে নিশ্চিত।", "Réductions enfants confirmées sur demande."),
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
      summary: day("Paris, Rome and Swiss Alps with guided sightseeing and 3-star hotels.", "প্যারিস, রোম ও সুইস আল্পস গাইডেড সাইটসিয়িং ও ৩-স্টার হোটেল সহ।", "Paris, Rome et Alpes suisses avec visites guidées et hôtels 3 étoiles."),
      includes: [
         day("Hotels & breakfast", "হোটেল ও ব্রেকফাস্ট", "Hôtels et petit-déjeuner"),
         day("Coach & guide", "কোচ ও গাইড", "Autocar et guide"),
         day("Airport transfers", "এয়ারপোর্ট ট্রান্সফার", "Transferts aéroport"),
      ],
      excludes: [day("Schengen visa fee", "শেঞ্জেন ভিসা ফি", "Frais de visa Schengen"), day("International airfare unless quoted", "আন্তর্জাতিক এয়ারফেয়ার (যদি কোট না করা হয়)", "Vol international sauf devis")],
      itinerary: [
         { day: 1, title: day("Paris arrival", "প্যারিস আগমন", "Arrivée à Paris"), text: day("Hotel check-in and Seine evening.", "হোটেল চেক-ইন ও সেইন সন্ধ্যা।", "Enregistrement et soirée sur la Seine.") },
         { day: 4, title: day("Rome", "রোম", "Rome"), text: day("Colosseum and Vatican area.", "কোলোসিয়াম ও ভ্যাটিকান এলাকা।", "Colisée et quartier du Vatican.") },
         { day: 7, title: day("Swiss Alps", "সুইস আল্পস", "Alpes suisses"), text: day("Mountain panorama day.", "পর্বত প্যানোরামা দিন।", "Journée panorama en montagne.") },
      ],
      terms: day("Group departures monthly. Private groups on request.", "মাসিক গ্রুপ ডিপার্চার। প্রাইভেট গ্রুপ অনুরোধে।", "Départs groupés mensuels. Groupes privés sur demande."),
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
      summary: day("Desert safari, marina cruise and city tour — ideal for first-time visitors.", "ডেজার্ট সাফারি, মেরিনা ক্রুজ ও সিটি ট্যুর — প্রথমবারের দর্শকদের জন্য।", "Safari désert, croisière marina et city tour — idéal pour une première visite."),
      includes: [day("Hotel 4-star", "৪-স্টার হোটেল", "Hôtel 4 étoiles"), day("Airport transfers", "এয়ারপোর্ট ট্রান্সফার", "Transferts aéroport"), day("Selected tours", "নির্বাচিত ট্যুর", "Visites sélectionnées")],
      excludes: [day("Theme park tickets", "থিম পার্ক টিকিট", "Billets parcs d’attractions")],
      itinerary: [
         { day: 1, title: day("Arrive Dubai", "দুবাই আগমন", "Arrivée à Dubaï"), text: day("Marina evening.", "মেরিনা সন্ধ্যা।", "Soirée à la marina.") },
         { day: 3, title: day("Desert safari", "ডেজার্ট সাফারি", "Safari désert"), text: day("BBQ dinner in camp.", "ক্যাম্পে বিবিকিউ ডিনার।", "Dîner barbecue au camp.") },
      ],
      terms: day("Rates vary by season and room type.", "সিজন ও রুম টাইপ অনুযায়ী রেট পরিবর্তন হয়।", "Tarifs selon saison et type de chambre."),
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
      summary: day("Bosphorus cruise, balloon optional and cave hotel night.", "বসফরাস ক্রুজ, ঐচ্ছিক বেলুন এবং কেভ হোটেল রাত।", "Croisière Bosphore, montgolfière en option et nuit en hôtel troglodyte."),
      includes: [day("Boutique hotels", "বুটিক হোটেল", "Hôtels boutique"), day("Domestic flight", "ডোমেস্টিক ফ্লাইট", "Vol intérieur"), day("Private transfers", "প্রাইভেট ট্রান্সফার", "Transferts privés")],
      excludes: [day("Hot air balloon", "হট এয়ার বেলুন", "Montgolfière")],
      itinerary: [
         { day: 1, title: day("Istanbul", "ইস্তাম্বুল", "Istanbul"), text: day("Old city walk.", "পুরনো শহর হাঁটা।", "Balade dans la vieille ville.") },
         { day: 4, title: day("Cappadocia", "ক্যাপাডোকিয়া", "Cappadoce"), text: day("Valley viewpoints.", "ভ্যালি ভিউপয়েন্ট।", "Points de vue des vallées.") },
      ],
      terms: day("Couple extras can be added at inquiry.", "কাপল এক্সট্রা অনুসন্ধানে যোগ করা যায়।", "Extras couple ajoutables sur demande."),
   },
   {
      slug: "ksa-short",
      thumb: des4,
      title: day("KSA Short Break", "সৌদি শর্ট ব্রেক", "Escapade Arabie saoudite"),
      location: day("Riyadh & Jeddah", "রিয়াদ ও জেদ্দা", "Riyad et Djeddah"),
      days: 6,
      price: 112000,
      category: "group",
      region: "ksa",
      summary: day("Modern cities, Red Sea corniche and easy weekend-style itinerary.", "আধুনিক শহর, লোহিত সাগর কর্নিশ এবং সহজ উইকএন্ড ইটিনারেডি।", "Villes modernes, corniche de la mer Rouge et itinéraire week-end."),
      includes: [day("Hotels", "হোটেল", "Hôtels"), day("Internal flight", "অভ্যন্তরীণ ফ্লাইট", "Vol intérieur")],
      excludes: [day("KSA visa if not e-visa eligible", "ই-ভিসা যোগ্য না হলে সৌদি ভিসা", "Visa saoudien si e-visa non éligible")],
      itinerary: [
         { day: 1, title: day("Riyadh", "রিয়াদ", "Riyad"), text: day("City highlights.", "সিটি হাইলাইটস।", "Points forts de la ville.") },
      ],
      terms: day("Best for e-visa eligible passports.", "ই-ভিসা যোগ্য পাসপোর্টের জন্য উপযোগী।", "Idéal pour passeports éligibles e-visa."),
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
      summary: day("Central 4-star stay with breakfast. Quote by room type and dates.", "সেন্ট্রাল ৪-স্টার, ব্রেকফাস্ট সহ। রুম ও তারিখ অনুযায়ী কোট।", "4 étoiles central avec petit-déjeuner. Devis selon chambre et dates."),
      includes: [day("Room & breakfast", "রুম ও ব্রেকফাস্ট", "Chambre et petit-déjeuner"), day("Taxes", "ট্যাক্স", "Taxes")],
      excludes: [day("City tax if extra", "অতিরিক্ত সিটি ট্যাক্স", "Taxe de séjour si extra")],
      itinerary: [],
      terms: day("Hotel rates change daily until confirmed.", "নিশ্চিত হওয়ার আগে হোটেল রেট প্রতিদিন বদলাতে পারে।", "Tarifs hôteliers variables jusqu’à confirmation."),
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
      thumb: listing6,
      title: day("Makkah Haram View", "মক্কা হারাম ভিউ", "Vue Haram La Mecque"),
      location: day("Makkah, KSA", "মক্কা, সৌদি আরব", "La Mecque, KSA"),
      days: 1,
      price: 210,
      hotelName: day("Haram-side hotel", "হারাম পাশের হোটেল", "Hôtel côté Haram"),
      summary: day("Walking distance to Haram. Room category confirmed after inquiry.", "হারামে হেঁটে যাওয়া যায়। রুম ক্যাটাগরি অনুসন্ধানের পর নিশ্চিত।", "À pied du Haram. Catégorie de chambre confirmée après demande."),
      includes: [day("Room only or BB", "রুম অনলি বা বিবি", "Chambre seule ou PDJ")],
      excludes: [day("Haram shuttle if far wing", "দূর উইং হলে শাটল", "Navette Haram si aile éloignée")],
      itinerary: [],
      terms: day("Ramadan and Hajj dates are peak season.", "রমজান ও হজ পিক সিজন।", "Ramadan et Hajj sont des hautes saisons."),
      gallery: [listing6, listing2, listing4],
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
      summary: day("Airport transfer optional. Suitable for transit and meetings.", "ঐচ্ছিক এয়ারপোর্ট ট্রান্সফার। ট্রানজিট ও মিটিংয়ের জন্য।", "Transfert aéroport en option. Idéal transit et réunions."),
      includes: [day("Wi-Fi & breakfast", "ওয়াই-ফাই ও ব্রেকফাস্ট", "Wi-Fi et petit-déjeuner")],
      excludes: [day("Airport transfer", "এয়ারপোর্ট ট্রান্সফার", "Transfert aéroport")],
      itinerary: [],
      terms: day("Local ID may be required at check-in.", "চেক-ইনে স্থানীয় আইডি লাগতে পারে।", "Pièce d’identité locale éventuellement requise."),
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
      summary: day("Bosphorus-side hotel with optional cruise add-on.", "বসফরাস পাশের হোটেল, ঐচ্ছিক ক্রুজ অ্যাড-অন।", "Hôtel côté Bosphore, croisière en option."),
      includes: [day("Breakfast", "ব্রেকফাস্ট", "Petit-déjeuner")],
      excludes: [day("Cruise ticket", "ক্রুজ টিকিট", "Billet croisière")],
      itinerary: [],
      terms: day("Sea-view rooms are limited.", "সি-ভিউ রুম সীমিত।", "Chambres vue mer limitées."),
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
