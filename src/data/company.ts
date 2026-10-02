/** Single source of truth for Euro Bangla Travels contact data. */
export const COMPANY = {
   name:    "Euro Bangla Travels",
   email:   "eurobanglatravel@yahoo.com",
   website: "www.eurobanglatravel.com",

   // WhatsApp + IMO booking numbers (from business card)
   wa1: "+33 7 58 80 35 16",
   wa1Tel: "33758803516",
   wa2: "+33 7 53 90 18 13",
   wa2Tel: "33753901813",

   // Direct call numbers
   landline:    "+33 9 60 41 94 87",
   landlineTel: "+33960419487",
   mobile:      "+33 6 95 71 82 64",
   mobileTel:   "+33695718264",

   // Address
   address:     "65 Rue Louis Blanc, 75010 Paris, France",
   addressLine1: "65 Rue Louis Blanc",
   addressLine2: "75010 Paris, France",
   mapLink:     "https://www.google.com/maps/search/?api=1&query=65+Rue+Louis+Blanc+75010+Paris+France",
   mapEmbed:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.750567150961!2d2.3653158768783457!3d48.88040777133596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0691508db9%3A0x6b29c9efd978a3c8!2s65%20Rue%20Louis%20Blanc%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1710000000000!5m2!1sen!2sfr",

   // Hours
   hours: "7/7",

   // Social
   facebook:  "https://facebook.com/EuroBanglaTravels",
   instagram: "https://instagram.com/EuroBanglaTravels",
   youtube:   "https://youtube.com/@EuroBanglaTravels",
} as const;

/** Build a wa.me link. Pass a number string or a message. */
export const whatsappLink = (numOrMsg?: string, msg?: string) => {
   let num = COMPANY.wa1Tel;
   let text = "Hello Euro Bangla Travels, I would like help with a trip.";
   if (numOrMsg) {
      if (/^\+?\d{10,16}/.test(numOrMsg)) {
         num = numOrMsg.replace(/\D/g, "");
         if (msg) text = msg;
      } else {
         text = numOrMsg;
      }
   }
   return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
};
