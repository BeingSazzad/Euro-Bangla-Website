export const COMPANY = {
   name: "Euro Bangla Travels",
   phone: "+880 1711-234567",
   phoneTel: "+8801711234567",
   whatsapp: "8801711234567",
   whatsapp1: "8801711234567",
   whatsapp1Display: "+880 1711-234567",
   whatsapp1Label: "Inquiry & Booking",
   whatsapp2: "8801712987654",
   whatsapp2Display: "+880 1712-987654",
   whatsapp2Label: "Support & Customer Care",
   email: "info@eurobanglatravels.com",
   address: "House 12, Road 5, Dhanmondi, Dhaka 1209, Bangladesh",
   addressLine1: "House 12, Road 5, Dhanmondi",
   addressLine2: "Dhaka 1209, Bangladesh",
   mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902441234!2d90.3742!3d23.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffcc3f%3A0x4eb7b82e34d59d11!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000",
   mapLink: "https://www.google.com/maps/search/?api=1&query=Dhanmondi+Dhaka+Bangladesh",
   website: "www.eurobanglatravels.com",
   facebook: "https://facebook.com/EuroBanglaTravels",
   instagram: "https://instagram.com/EuroBanglaTravels",
   youtube: "https://youtube.com/@EuroBanglaTravels",
} as const;

export const whatsappLink = (numberOrText?: string, text?: string) => {
   let num = COMPANY.whatsapp;
   let msg = "Hello Euro Bangla Travels, I would like help with a trip.";

   if (numberOrText) {
      // If it looks like a phone number (digits only or starts with 880/+880)
      if (/^(\+?880|\d{10,15})/.test(numberOrText)) {
         num = numberOrText.replace(/\D/g, "");
         if (text) msg = text;
      } else {
         msg = numberOrText;
      }
   }

   return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
};
