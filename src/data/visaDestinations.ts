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

export type VisaDocGroupId = "job" | "business" | "student" | "family";

export type VisaDestination = {
   id: string;
   name: LText;
   visaType: LText;
   processing: LText;
   image: StaticImageData;
   summary: LText;
   notes: LText[];
   docExtras?: Partial<Record<VisaDocGroupId, LText[]>>;
};

export const visaDocGroups: { id: VisaDocGroupId; titleKey: string; items: LText[] }[] = [
   {
      id: "job",
      titleKey: "visaDetail.docsJob",
      items: [
         day("Passport with at least 6 months’ validity and two blank pages", "পাসপোর্ট — কমপক্ষে ৬ মাস মেয়াদ ও দুটি খালি পাতা", "Passeport valable 6 mois minimum, deux pages vierges"),
         day("Recent photos to the embassy or VFS specification", "দূতাবাস বা VFS স্পেক অনুযায়ী সাম্প্রতিক ছবি", "Photos récentes selon le spec consulat / VFS"),
         day("Bank statements for the last 6 months", "গত ৬ মাসের ব্যাংক স্টেটমেন্ট", "Relevés bancaires des 6 derniers mois"),
         day("Job letter or NOC on company letterhead", "কোম্পানি লেটারহেডে জব লেটার বা NOC", "Attestation d’emploi ou NOC à en-tête"),
         day("Recent payslips or salary proof", "সাম্প্রতিক পেস্লিপ বা বেতনের প্রমাণ", "Fiches de paie ou preuve de salaire"),
         day("Visiting card, if you have one", "ভিজিটিং কার্ড থাকলে", "Carte de visite si vous en avez une"),
      ],
   },
   {
      id: "business",
      titleKey: "visaDetail.docsBusiness",
      items: [
         day("Passport, photos and 6-month bank statements", "পাসপোর্ট, ছবি ও ৬ মাসের ব্যাংক স্টেটমেন্ট", "Passeport, photos et relevés sur 6 mois"),
         day("Valid trade licence", "বৈধ ট্রেড লাইসেন্স", "Licence commerciale valide"),
         day("Company letterhead, TIN or memorandum as the mission asks", "কোম্পানি লেটারহেড, TIN বা মেমোরেন্ডাম — মিশন যা চায়", "Papier à en-tête, NIF ou statuts selon la mission"),
         day("Cover letter stating the purpose of travel", "ভ্রমণের উদ্দেশ্যসহ কভার লেটার", "Lettre expliquant le motif du voyage"),
      ],
   },
   {
      id: "student",
      titleKey: "visaDetail.docsStudent",
      items: [
         day("Passport and embassy-spec photos", "পাসপোর্ট ও দূতাবাসের স্পেক অনুযায়ী ছবি", "Passeport et photos selon le consulat"),
         day("Student ID and current enrolment letter", "স্টুডেন্ট আইডি ও চলতি ভর্তির চিঠি", "Carte étudiant et attestation d’inscription"),
         day("Birth certificate", "জন্ম নিবন্ধন", "Acte de naissance"),
         day("Parents’ bank statements or consent letter if they sponsor you", "অভিভাবকের ব্যাংক স্টেটমেন্ট বা সম্মতিপত্র — তারা স্পন্সর হলে", "Relevés ou autorisation des parents s’ils financent"),
      ],
   },
   {
      id: "family",
      titleKey: "visaDetail.docsFamily",
      items: [
         day("Relationship proof — marriage or birth certificate as relevant", "সম্পর্কের প্রমাণ — বিবাহ বা জন্ম সনদ", "Preuve de lien — mariage ou naissance"),
         day("Sponsor or host documents if you are visiting family", "পরিবার দেখতে গেলে স্পন্সর বা হোস্টের কাগজ", "Pièces du sponsor ou de l’hôte pour une visite famille"),
         day("Shared financial proof if someone else funds the trip", "অন্য কেউ খরচ করলে তাদের আর্থিক প্রমাণ", "Justificatifs financiers du financeur"),
      ],
   },
];

const notesCore: LText[] = [
   day(
      "Do not buy non-refundable flights or hotels until the visa is decided.",
      "ভিসার সিদ্ধান্ত না হওয়া পর্যন্ত নন-রিফান্ডেবল ফ্লাইট বা হোটেল কিনবেন না।",
      "N’achetez pas de vols ou hôtels non remboursables avant la décision visa."
   ),
   day(
      "Euro Bangla Travels does not issue visas and cannot guarantee approval. The embassy, consulate or VFS decides.",
      "ইউরো বাংলা ট্রাভেলস ভিসা ইস্যু করে না এবং অনুমোদন গ্যারান্টি দিতে পারে না। সিদ্ধান্ত দূতাবাস, কনস্যুলেট বা VFS-এর।",
      "Euro Bangla Travels n’émet pas de visa et ne garantit pas l’accord. La décision reste au consulat ou au VFS."
   ),
   day(
      "Passports usually need at least six months’ validity from the planned travel date.",
      "পরিকল্পিত ভ্রমণের তারিখ থেকে পাসপোর্টে সাধারণত কমপক্ষে ছয় মাস মেয়াদ লাগে।",
      "Le passeport doit en général rester valable six mois après la date de voyage."
   ),
   day(
      "Times on this page are indicative. Peak season, biometrics and incomplete files add days.",
      "এই পাতার সময় নির্দেশক। পিক সিজন, বায়োমেট্রিক্স ও অসম্পূর্ণ ফাইলে দিন বাড়ে।",
      "Les délais ici sont indicatifs. Haute saison, biométrie et dossier incomplet allongent."
   ),
   day(
      "Embassy, VFS/VAC and insurance fees are paid to those offices — we quote our guidance after we see your file.",
      "দূতাবাস, VFS/VAC ও ইনস্যুরেন্স ফি সেই অফিসেই যায় — ফাইল দেখে আমাদের গাইডেন্স কোট করি।",
      "Frais consulat, VFS/VAC et assurance se paient là-bas — nous cotons notre accompagnement après le dossier."
   ),
];

const schengenExtra = day(
   "Schengen files need travel insurance covering the stay and a day-by-day plan that matches hotel or host proof.",
   "শেঞ্জেন ফাইলে অবস্থান কভার করে এমন ট্রাভেল ইনস্যুরেন্স এবং হোটেল বা হোস্ট প্রুফের সাথে মিলে এমন দিনভিত্তিক প্ল্যান লাগে।",
   "Les dossiers Schengen exigent une assurance couvrant le séjour et un plan jour par jour aligné sur l’hôtel ou l’hôte."
);

export const visaDestinations: VisaDestination[] = [
   {
      id: "australia",
      name: day("Australia", "অস্ট্রেলিয়া", "Australie"),
      visaType: day("Visitor, family, student", "ভিজিটর, পরিবার, স্টুডেন্ট", "Visiteur, famille, étudiant"),
      processing: day("15 – 30 working days", "১৫ – ৩০ কার্যদিবস", "15 – 30 jours ouvrés"),
      image: australia,
      summary: day(
         "Visitor, family and student files for Australia from Dhaka. We prepare the ImmiAccount checklist and review scans before you lodge — Home Affairs decides.",
         "ঢাকা থেকে অস্ট্রেলিয়ার ভিজিটর, পরিবার ও স্টুডেন্ট ফাইল। ইমিঅ্যাকাউন্ট চেকলিস্ট ও স্ক্যান রিভিউ করে জমার আগে সাজাই — সিদ্ধান্ত হোম অ্যাফেয়ার্সের।",
         "Dossiers visiteur, famille et étudiant pour l’Australie depuis Dhaka. Check-list ImmiAccount et relecture des scans avant dépôt — Home Affairs décide."
      ),
      notes: notesCore,
      docExtras: {
         job: [day("ImmiAccount details if you already started an application", "ইমিঅ্যাকাউন্ট শুরু করে থাকলে সেই তথ্য", "Identifiants ImmiAccount si déjà commencé")],
      },
   },
   {
      id: "canada",
      name: day("Canada", "কানাডা", "Canada"),
      visaType: day("Visitor, family, student", "ভিজিটর, পরিবার, স্টুডেন্ট", "Visiteur, famille, étudiant"),
      processing: day("20 – 45 working days", "২০ – ৪৫ কার্যদিবস", "20 – 45 jours ouvrés"),
      image: canada,
      summary: day(
         "Visitor, family and study files for Canada. We line up the IRCC list and biometrics notes before you submit — IRCC decides.",
         "কানাডার ভিজিটর, পরিবার ও স্টাডি ফাইল। সাবমিটের আগে IRCC লিস্ট ও বায়োমেট্রিক্স নোট সাজাই — সিদ্ধান্ত IRCC-এর।",
         "Dossiers visiteur, famille et études pour le Canada. Liste IRCC et notes biométrie avant envoi — IRCC décide."
      ),
      notes: notesCore,
      docExtras: {
         job: [day("Biometrics letter if IRCC has already issued one", "IRCC বায়োমেট্রিক্স লেটার ইস্যু করলে", "Lettre biométrie IRCC si déjà émise")],
      },
   },
   {
      id: "uk",
      name: day("United Kingdom", "যুক্তরাজ্য", "Royaume-Uni"),
      visaType: day("Standard visitor, family, student", "স্ট্যান্ডার্ড ভিজিটর, পরিবার, স্টুডেন্ট", "Visiteur standard, famille, étudiant"),
      processing: day("15 – 30 working days", "১৫ – ৩০ কার্যদিবস", "15 – 30 jours ouvrés"),
      image: uk,
      summary: day(
         "Standard visitor, family and student support for the UK. We check the GOV.UK list and VFS appointment notes before you pay the visa fee — UKVI decides.",
         "যুক্তরাজ্যের স্ট্যান্ডার্ড ভিজিটর, পরিবার ও স্টুডেন্ট। ফি দেওয়ার আগে GOV.UK লিস্ট ও VFS অ্যাপয়েন্টমেন্ট দেখি — সিদ্ধান্ত UKVI-এর।",
         "Visiteur standard, famille et étudiant pour le RU. Liste GOV.UK et notes VFS avant paiement — UKVI décide."
      ),
      notes: notesCore,
      docExtras: {
         job: [day("VFS / VAC appointment confirmation if already booked", "VFS / VAC অ্যাপয়েন্টমেন্ট থাকলে কনফার্মেশন", "Confirmation VFS / VAC si déjà réservée")],
      },
   },
   {
      id: "usa",
      name: day("United States", "যুক্তরাষ্ট্র", "États-Unis"),
      visaType: day("B1/B2 visitor, business", "B1/B2 ভিজিটর, বিজনেস", "Visiteur B1/B2, affaires"),
      processing: day("2 – 4 months (interview wait in Dhaka)", "২ – ৪ মাস (ঢাকায় ইন্টারভিউ অপেক্ষা)", "2 – 4 mois (attente entretien à Dhaka)"),
      image: usa,
      summary: day(
         "B1/B2 visitor and related files from Bangladesh. We review DS-160 wording and interview document order — the consular officer decides.",
         "বাংলাদেশ থেকে B1/B2 ভিজিটর ফাইল। DS-160 ওয়ার্ডিং ও ইন্টারভিউ ডকুমেন্ট সাজাই — সিদ্ধান্ত কনস্যুলার অফিসারের।",
         "Dossiers visiteur B1/B2 depuis le Bangladesh. Relecture DS-160 et ordre des pièces d’entretien — l’officier consulaire décide."
      ),
      notes: [
         ...notesCore,
         day(
            "Interview wait times in Dhaka can run several months. Start the file early; we never promise a slot date.",
            "ঢাকায় ইন্টারভিউ অপেক্ষা কয়েক মাস হতে পারে। আগে ফাইল শুরু করুন; স্লটের তারিখ প্রতিশ্রুতি নয়।",
            "L’attente d’entretien à Dhaka peut durer des mois. Commencez tôt ; aucun créneau promis."
         ),
      ],
      docExtras: {
         job: [day("DS-160 confirmation page if already filled", "DS-160 কনফার্মেশন পেজ থাকলে", "Page de confirmation DS-160 si déjà remplie")],
      },
   },
   {
      id: "france",
      name: day("France", "ফ্রান্স", "France"),
      visaType: day("Schengen tourist, visit, business", "শেঞ্জেন টুরিস্ট, ভিজিট, বিজনেস", "Schengen tourisme, visite, affaires"),
      processing: day("15 – 30 working days", "১৫ – ৩০ কার্যদিবস", "15 – 30 jours ouvrés"),
      image: france,
      summary: day(
         "Schengen short-stay when France is the main destination. We map the TLS/VFS checklist and appointment windows from Dhaka — France decides.",
         "ফ্রান্স মূল গন্তব্য ধরে শেঞ্জেন শর্ট-স্টে। ঢাকা থেকে TLS/VFS চেকলিস্ট ও অ্যাপয়েন্টমেন্ট উইন্ডো সাজাই — সিদ্ধান্ত ফ্রান্সের।",
         "Court séjour Schengen si la France est la destination principale. Check-list TLS/VFS et créneaux depuis Dhaka — la France décide."
      ),
      notes: [...notesCore, schengenExtra],
      docExtras: {
         job: [day("Travel insurance covering the Schengen dates", "শেঞ্জেন তারিখ কভার করে এমন ট্রাভেল ইনস্যুরেন্স", "Assurance voyage couvrant les dates Schengen")],
      },
   },
   {
      id: "germany",
      name: day("Germany", "জার্মানি", "Allemagne"),
      visaType: day("Schengen tourist, visit, business", "শেঞ্জেন টুরিস্ট, ভিজিট, বিজনেস", "Schengen tourisme, visite, affaires"),
      processing: day("15 – 30 working days", "১৫ – ৩০ কার্যদিবস", "15 – 30 jours ouvrés"),
      image: germany,
      summary: day(
         "Schengen tourist, visit and short business files when Germany is the main stay. We review the VFS list before you book a slot — the mission decides.",
         "জার্মানি মূল অবস্থান হলে শেঞ্জেন টুরিস্ট, ভিজিট ও শর্ট বিজনেস। স্লট বুকের আগে VFS লিস্ট দেখি — সিদ্ধান্ত মিশনের।",
         "Tourisme, visite et court séjour affaires Schengen si l’Allemagne est le séjour principal. Liste VFS avant le créneau — la mission décide."
      ),
      notes: [...notesCore, schengenExtra],
      docExtras: {
         job: [day("Hotel booking or host invitation in Germany", "জার্মানিতে হোটেল বুকিং বা হোস্ট আমন্ত্রণ", "Réservation d’hôtel ou invitation d’hôte en Allemagne")],
      },
   },
   {
      id: "qatar",
      name: day("Qatar", "কাতার", "Qatar"),
      visaType: day("Visit, family, Hayya where eligible", "ভিজিট, পরিবার, যোগ্য হলে Hayya", "Visite, famille, Hayya si éligible"),
      processing: day("5 – 15 working days", "৫ – ১৫ কার্যদিবস", "5 – 15 jours ouvrés"),
      image: qatar,
      summary: day(
         "Visit and family files for Qatar, including Hayya or host-sponsored routes where they apply. We check sponsor papers and photo specs before you apply.",
         "কাতারের ভিজিট ও পরিবার ফাইল — প্রয়োজনে Hayya বা হোস্ট-স্পন্সর রুট। আবেদনের আগে স্পন্সর কাগজ ও ছবির স্পেক দেখি।",
         "Visite et famille pour le Qatar, y compris Hayya ou parrainage. Pièces du sponsor et photos avant dépôt."
      ),
      notes: [
         ...notesCore,
         day(
            "Qatar entry rules change with events and Hayya seasons. We confirm the live path after your dates.",
            "ইভেন্ট ও Hayya সিজন অনুযায়ী কাতারের এন্ট্রি নিয়ম বদলায়। তারিখের পর লাইভ পথ নিশ্চিত করি।",
            "Les règles d’entrée au Qatar changent selon les événements et Hayya. Nous confirmons le parcours après vos dates."
         ),
      ],
      docExtras: {
         family: [day("Sponsor or Hayya documents if the host route applies", "হোস্ট রুট হলে স্পন্সর বা Hayya ডকুমেন্ট", "Pièces sponsor ou Hayya si le parcours hôte s’applique")],
      },
   },
   {
      id: "switzerland",
      name: day("Switzerland", "সুইজারল্যান্ড", "Suisse"),
      visaType: day("Schengen tourist, visit", "শেঞ্জেন টুরিস্ট, ভিজিট", "Schengen tourisme, visite"),
      processing: day("15 – 30 working days", "১৫ – ৩০ কার্যদিবস", "15 – 30 jours ouvrés"),
      image: switzerland,
      summary: day(
         "Schengen short-stay when Switzerland is the main destination. We align the VFS checklist and stay plan before the appointment — the consulate decides.",
         "সুইজারল্যান্ড মূল গন্তব্য হলে শেঞ্জেন শর্ট-স্টে। অ্যাপয়েন্টমেন্টের আগে VFS চেকলিস্ট ও অবস্থান পরিকল্পনা মিলাই — সিদ্ধান্ত কনস্যুলেটের।",
         "Court séjour Schengen si la Suisse est la destination principale. Check-list VFS et plan de séjour avant le rendez-vous — le consulat décide."
      ),
      notes: [...notesCore, schengenExtra],
      docExtras: {
         job: [day("Proof of stays in Switzerland (hotel or host)", "সুইজারল্যান্ডে অবস্থানের প্রমাণ (হোটেল বা হোস্ট)", "Preuve de séjour en Suisse (hôtel ou hôte)")],
      },
   },
];

export const findVisaDestination = (id: string) => visaDestinations.find((item) => item.id === id);

export const visaDocItemsFor = (dest: VisaDestination, groupId: VisaDocGroupId) => {
   const base = visaDocGroups.find((group) => group.id === groupId)?.items ?? [];
   return [...base, ...(dest.docExtras?.[groupId] ?? [])];
};
