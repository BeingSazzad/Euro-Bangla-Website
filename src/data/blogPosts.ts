import type { StaticImageData } from "next/image";
import type { LText } from "./localized";
import blog_1 from "@/assets/img/blog/blog-2/blog-1.jpg";
import blog_2 from "@/assets/img/blog/blog-2/blog-2.jpg";
import blog_3 from "@/assets/img/blog/blog-2/blog-3.jpg";
import blog_4 from "@/assets/img/blog/blog-1.jpg";
import blog_5 from "@/assets/img/blog/blog-2.jpg";
import blog_6 from "@/assets/img/blog/blog-3.jpg";

const copy = (en: string, bn: string, fr: string): LText => ({ en, bn, fr });

export type BlogPost = {
   id: number;
   slug: string;
   thumb: StaticImageData;
   tagKey: string;
   titleKey: string;
   textKey: string;
   dateKey: string;
   readKey: string;
   href: string;
   ctaHref: string;
   body: LText[];
   tips: LText[];
};

/** Full blog listing (home shows first 3). */
export const blogPosts: BlogPost[] = [
   {
      id: 1,
      slug: "umrah-preparation",
      thumb: blog_1,
      tagKey: "home.blog1Tag",
      titleKey: "home.blog1Title",
      textKey: "home.blog1Text",
      dateKey: "home.blog1Date",
      readKey: "home.blog1Read",
      href: "/blog/umrah-preparation",
      ctaHref: "/inquiry?service=hajj",
      body: [
         copy(
            "A clear Umrah inquiry starts with a valid passport, preferred travel month and how many people will travel together. We use that to check group seats, hotel distance from Haram and visa timing.",
            "স্পষ্ট ওমরাহ অনুসন্ধানের জন্য পাসপোর্ট মেয়াদ, পছন্দের মাস এবং কতজন যাবেন — এই তথ্য দিয়ে গ্রুপ সিট, হারামের দূরত্ব ও ভিসার সময় যাচাই করি।",
            "Une demande Omra claire commence par un passeport valide, le mois souhaité et le nombre de voyageurs. Nous vérifions alors les sièges groupe, l’hôtel et le délai visa."
         ),
         copy(
            "Tell us if you want economy or closer hotels, family rooms, and whether you already have tickets. Prices on the website are indicative until we confirm dates and room type.",
            "ইকোনমি না হারামের কাছের হোটেল, ফ্যামিলি রুম, এবং টিকিট আগে থেকে আছে কিনা জানান। তারিখ ও রুম নিশ্চিত হওয়ার আগে ওয়েবসাইটের মূল্য নির্দেশক।",
            "Précisez hôtel économique ou plus proche, chambres familiales, et si vous avez déjà des billets. Les prix du site restent indicatifs jusqu’à confirmation."
         ),
         copy(
            "After you send the inquiry we reply with a reference number and the next documents we need. No online payment is taken on this website.",
            "অনুসন্ধান পাঠালে রেফারেন্স নম্বর এবং পরবর্তী কাগজপত্র জানাই। এই ওয়েবসাইটে অনলাইন পেমেন্ট নেওয়া হয় না।",
            "Après votre demande, nous envoyons une référence et la liste des documents. Aucun paiement en ligne n’est pris sur ce site."
         ),
      ],
      tips: [
         copy("Passport valid at least 6 months", "পাসপোর্ট কমপক্ষে ৬ মাস মেয়াদি", "Passeport valable au moins 6 mois"),
         copy("Preferred dates or month", "পছন্দের তারিখ বা মাস", "Dates ou mois souhaités"),
         copy("Number of adults and children", "প্রাপ্তবয়স্ক ও শিশুর সংখ্যা", "Nombre d’adultes et d’enfants"),
         copy("Hotel preference (economy / closer)", "হোটেল পছন্দ (ইকোনমি / কাছাকাছি)", "Préférence hôtel (éco / plus proche)"),
      ],
   },
   {
      id: 2,
      slug: "visa-documents",
      thumb: blog_2,
      tagKey: "home.blog2Tag",
      titleKey: "home.blog2Title",
      textKey: "home.blog2Text",
      dateKey: "home.blog2Date",
      readKey: "home.blog2Read",
      href: "/blog/visa-documents",
      ctaHref: "/inquiry?service=visa",
      body: [
         copy(
            "Visa files often stall on bank statements, photo size, or an invitation letter that does not match the embassy checklist. We review these before you book an appointment.",
            "ভিসা ফাইল প্রায়ই ব্যাংক স্টেটমেন্ট, ছবির সাইজ বা আমন্ত্রণপত্রের ঘাটতিতে আটকে যায়। অ্যাপয়েন্টমেন্টের আগে আমরা চেকলিস্ট মিলিয়ে দেখি।",
            "Les dossiers visa bloquent souvent sur les relevés, le format photo ou une invitation incomplète. Nous les vérifions avant le rendez-vous."
         ),
         copy(
            "Share destination, visa type (tourist, visit, business or student) and travel month. Embassy rules differ — we never promise approval.",
            "গন্তব্য, ভিসার ধরন (টুরিস্ট, ভিজিট, বিজনেস বা স্টুডেন্ট) এবং মাস জানান। দূতাবাসের নিয়ম আলাদা — অনুমোদনের প্রতিশ্রুতি দিই না।",
            "Indiquez destination, type de visa et mois de voyage. Les règles varient — nous ne promettons jamais l’approbation."
         ),
         copy(
            "Send an inquiry with your checklist questions. We reply with the gaps to fix and the next step for that country.",
            "চেকলিস্ট নিয়ে অনুসন্ধান পাঠান। কোন ঘাটতি ঠিক করতে হবে এবং পরবর্তী ধাপ জানাব।",
            "Envoyez vos questions de checklist. Nous indiquons les lacunes et l’étape suivante pour ce pays."
         ),
      ],
      tips: [
         copy("Destination and visa type", "গন্তব্য ও ভিসার ধরন", "Destination et type de visa"),
         copy("Recent bank statements if required", "প্রয়োজনে সাম্প্রতিক ব্যাংক স্টেটমেন্ট", "Relevés récents si requis"),
         copy("Passport scan and photo", "পাসপোর্ট স্ক্যান ও ছবি", "Scan passeport et photo"),
         copy("Invitation or hotel plan if asked", "চাইলে আমন্ত্রণ বা হোটেল প্ল্যান", "Invitation ou hôtel si demandé"),
      ],
   },
   {
      id: 3,
      slug: "flight-inquiry-tips",
      thumb: blog_3,
      tagKey: "home.blog3Tag",
      titleKey: "home.blog3Title",
      textKey: "home.blog3Text",
      dateKey: "home.blog3Date",
      readKey: "home.blog3Read",
      href: "/blog/flight-inquiry-tips",
      ctaHref: "/inquiry?service=flight",
      body: [
         copy(
            "For a useful flight quote, tell us one way or round trip, cities, dates and how many passengers. Cabin class helps if you already know it.",
            "কাজের ফ্লাইট কোটের জন্য ওয়ান ওয়ে না রাউন্ড, শহর, তারিখ ও যাত্রী সংখ্যা জানান। ক্লাস জানা থাকলে সেটাও দিন।",
            "Pour un devis vol utile, précisez aller simple ou aller-retour, villes, dates et passagers. La classe cabine aide si vous la connaissez."
         ),
         copy(
            "Fares change until we confirm the booking. We send options first — you choose, then we lock the ticket with the airline.",
            "বুকিং নিশ্চিত হওয়ার আগে ভাড়া বদলাতে পারে। আগে অপশন পাঠাই — আপনি বেছে নিলে এয়ারলাইনে লক করি।",
            "Les tarifs bougent jusqu’à confirmation. Nous envoyons d’abord des options — vous choisissez, puis nous bloquons le billet."
         ),
         copy(
            "Use the flight tab on the homepage or the inquiry form. You will get a reference number to continue on WhatsApp or email.",
            "হোমপেজের ফ্লাইট ট্যাব বা ইনকয়্যারি ফর্ম ব্যবহার করুন। হোয়াটসঅ্যাপ বা ইমেইলে চালিয়ে যেতে রেফারেন্স পাবেন।",
            "Utilisez l’onglet vol ou le formulaire. Vous recevez une référence pour continuer sur WhatsApp ou par e-mail."
         ),
      ],
      tips: [
         copy("From and to cities / airports", "কোথা থেকে কোথায় / এয়ারপোর্ট", "Villes / aéroports de départ et d’arrivée"),
         copy("One way or round trip", "ওয়ান ওয়ে বা রাউন্ড ট্রিপ", "Aller simple ou aller-retour"),
         copy("Travel dates and flexibility", "তারিখ ও নমনীয়তা", "Dates et flexibilité"),
         copy("Adults, children and infants", "প্রাপ্তবয়স্ক, শিশু ও শিশুশিশু", "Adultes, enfants et bébés"),
      ],
   },
   {
      id: 4,
      slug: "europe-family-tour",
      thumb: blog_4,
      tagKey: "home.blog4Tag",
      titleKey: "home.blog4Title",
      textKey: "home.blog4Text",
      dateKey: "home.blog4Date",
      readKey: "home.blog4Read",
      href: "/blog/europe-family-tour",
      ctaHref: "/inquiry?service=tour",
      body: [
         copy(
            "Europe family tours work best when you name the cities, travel month and whether you want a group departure or a private plan.",
            "ইউরোপ ফ্যামিলি ট্যুরে শহর, ভ্রমণের মাস এবং গ্রুপ না প্রাইভেট — এগুলো জানালে পরিকল্পনা সহজ হয়।",
            "Un circuit Europe en famille est plus simple si vous citez les villes, le mois et un départ groupe ou un plan privé."
         ),
         copy(
            "Hotel category and Schengen visa timing affect the quote. We send an indicative package first, then confirm after dates are locked.",
            "হোটেল ক্যাটাগরি ও শেঞ্জেন ভিসার সময় কোটকে প্রভাবিত করে। আগে নির্দেশক প্যাকেজ, তারিখ লক হলে নিশ্চিত করি।",
            "Catégorie d’hôtel et délai Schengen influencent le devis. Nous envoyons d’abord un forfait indicatif."
         ),
         copy(
            "Browse featured tours on the homepage, then inquire with passenger count and preferred month.",
            "হোমপেজের ফিচার্ড ট্যুর দেখে যাত্রী সংখ্যা ও মাসসহ অনুসন্ধান পাঠান।",
            "Consultez les circuits en vedette, puis demandez avec le nombre de voyageurs et le mois."
         ),
      ],
      tips: [
         copy("Cities you want to visit", "যে শহরগুলো দেখতে চান", "Villes à visiter"),
         copy("Travel month", "ভ্রমণের মাস", "Mois de voyage"),
         copy("Group or private", "গ্রুপ বা প্রাইভেট", "Groupe ou privé"),
         copy("Hotel preference", "হোটেল পছন্দ", "Préférence hôtel"),
      ],
   },
   {
      id: 5,
      slug: "dubai-hotel-quote",
      thumb: blog_5,
      tagKey: "home.blog5Tag",
      titleKey: "home.blog5Title",
      textKey: "home.blog5Text",
      dateKey: "home.blog5Date",
      readKey: "home.blog5Read",
      href: "/blog/dubai-hotel-quote",
      ctaHref: "/inquiry?service=hotel",
      body: [
         copy(
            "Dubai hotel quotes change with room type, dates and breakfast. Share check-in, check-out and how many rooms you need.",
            "দুবাই হোটেল কোট রুম, তারিখ ও ব্রেকফাস্ট অনুযায়ী বদলায়। চেক-ইন, চেক-আউট ও কত রুম লাগবে জানান।",
            "Les devis hôtels à Dubaï varient selon chambre, dates et petit-déjeuner. Donnez arrivée, départ et nombre de chambres."
         ),
         copy(
            "Family rooms and location (marina, downtown or airport) change the price. We confirm the rate only after the hotel holds the room.",
            "ফ্যামিলি রুম ও লোকেশন (মেরিনা, ডাউনটাউন বা এয়ারপোর্ট) মূল্য বদলায়। হোটেল রুম ধরে রাখলে রেট নিশ্চিত হয়।",
            "Chambres familiales et quartier changent le prix. Le tarif est confirmé une fois la chambre bloquée."
         ),
         copy(
            "Use the hotel inquiry with your dates. You can add airport transfer in the message field.",
            "তারিখসহ হোটেল অনুসন্ধান পাঠান। মেসেজে এয়ারপোর্ট ট্রান্সফার যোগ করতে পারেন।",
            "Demandez l’hôtel avec vos dates. Ajoutez un transfert aéroport dans le message."
         ),
      ],
      tips: [
         copy("Check-in and check-out dates", "চেক-ইন ও চেক-আউট", "Dates d’arrivée et de départ"),
         copy("Number of rooms and guests", "রুম ও অতিথির সংখ্যা", "Nombre de chambres et d’hôtes"),
         copy("Area preference", "এলাকার পছন্দ", "Quartier souhaité"),
         copy("Breakfast yes or no", "ব্রেকফাস্ট চাই কি না", "Petit-déjeuner oui / non"),
      ],
   },
   {
      id: 6,
      slug: "bus-ticket-inquiry",
      thumb: blog_6,
      tagKey: "home.blog6Tag",
      titleKey: "home.blog6Title",
      textKey: "home.blog6Text",
      dateKey: "home.blog6Date",
      readKey: "home.blog6Read",
      href: "/blog/bus-ticket-inquiry",
      ctaHref: "/inquiry?service=bus",
      body: [
         copy(
            "A bus ticket inquiry only needs from/to cities, travel date and passenger count. We check domestic and selected international coach routes.",
            "বাস অনুসন্ধানে শহর থেকে শহর, তারিখ ও যাত্রী সংখ্যাই যথেষ্ট। ডোমেস্টিক ও কিছু আন্তর্জাতিক রুট দেখি।",
            "Pour un bus, villes de départ/arrivée, date et passagers suffisent. Nous vérifions les lignes nationales et quelques internationales."
         ),
         copy(
            "Seat type and departure time are confirmed after we hear back from the operator. Share if you prefer day or night coaches.",
            "সিট ও ছাড়ার সময় অপারেটর নিশ্চিত করলে জানাই। দিন না রাতের কোচ পছন্দ লিখুন।",
            "Type de siège et horaire sont confirmés par l’opérateur. Indiquez jour ou nuit."
         ),
         copy(
            "Send the inquiry from the bus page or the homepage form. Keep the reference for WhatsApp follow-up.",
            "বাস পেজ বা হোমপেজ ফর্ম থেকে অনুসন্ধান পাঠান। হোয়াটসঅ্যাপ ফলোআপের জন্য রেফারেন্স রাখুন।",
            "Envoyez la demande depuis la page bus ou l’accueil. Gardez la référence pour WhatsApp."
         ),
      ],
      tips: [
         copy("From and to cities", "কোথা থেকে কোথায়", "Villes de départ et d’arrivée"),
         copy("Travel date", "ভ্রমণের তারিখ", "Date de voyage"),
         copy("Number of passengers", "যাত্রী সংখ্যা", "Nombre de passagers"),
         copy("Day or night coach if you care", "দিন বা রাতের কোচ", "Autocar jour ou nuit"),
      ],
   },
];

export const homeBlogPosts = blogPosts.slice(0, 3);

export const findBlog = (slug: string) => blogPosts.find((item) => item.slug === slug);
