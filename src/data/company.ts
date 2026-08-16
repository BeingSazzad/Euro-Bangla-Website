export const COMPANY = {
   name: "Euro Bangla Travels",
   phone: "+880 1711-234567",
   phoneTel: "+8801711234567",
   whatsapp: "8801711234567",
   email: "info@eurobanglatravels.com",
   address: "House 12, Road 5, Dhanmondi, Dhaka 1209, Bangladesh",
   mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902441234!2d90.3742!3d23.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffcc3f%3A0x4eb7b82e34d59d11!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000",
   mapLink: "https://www.google.com/maps/search/?api=1&query=Dhanmondi+Dhaka+Bangladesh",
   website: "www.eurobanglatravels.com",
   facebook: "#",
   instagram: "#",
   youtube: "#",
} as const;

export const whatsappLink = (text?: string) => {
   const message = encodeURIComponent(text || "Hello Euro Bangla Travels, I would like help with a trip.");
   return `https://wa.me/${COMPANY.whatsapp}?text=${message}`;
};
