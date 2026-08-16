export type TermsBlock =
   | { type: "p"; text: string }
   | { type: "ul"; items: string[] }
   | { type: "ol"; items: string[] };

export type TermsSection = {
   title: string;
   blocks: TermsBlock[];
};

export const TERMS_UPDATED = "17 August 2026";

export const TERMS_INTRO = [
   "Welcome to Euro Bangla Travel. These Terms & Conditions govern your use of our website and the travel services provided by Euro Bangla Travel.",
   "By accessing our website, submitting an inquiry, requesting a quotation, or making a booking through us, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
] as const;

export const TERMS_SECTIONS: TermsSection[] = [
   {
      title: "1. General Terms",
      blocks: [
         {
            type: "p",
            text: "Euro Bangla Travel provides travel-related services including air tickets, Hajj & Umrah services, hotel bookings, bus tickets, and visa assistance.",
         },
         {
            type: "p",
            text: "Our services may involve third-party providers such as airlines, hotels, transportation companies, embassies, consulates, government authorities, payment providers, and other travel suppliers.",
         },
         {
            type: "p",
            text: "Additional terms and conditions imposed by these third-party providers may apply to your booking.",
         },
      ],
   },
   {
      title: "2. Website Information",
      blocks: [
         {
            type: "p",
            text: "We make reasonable efforts to ensure that the information published on our website is accurate and up to date.",
         },
         {
            type: "p",
            text: "However, travel-related information can change without notice. Prices, availability, schedules, visa requirements, hotel information, transportation details, and other information may change at any time.",
         },
         {
            type: "p",
            text: "Information displayed on the website does not constitute a guaranteed offer or confirmation unless expressly confirmed by Euro Bangla Travel.",
         },
         {
            type: "p",
            text: "We reserve the right to correct errors, update information, or modify website content when necessary.",
         },
      ],
   },
   {
      title: "3. Flight Services",
      blocks: [
         {
            type: "p",
            text: "Flight bookings are subject to airline availability, applicable fares, airline rules, and ticket conditions.",
         },
         {
            type: "p",
            text: "A flight search, inquiry, or quotation does not constitute a confirmed booking.",
         },
         {
            type: "p",
            text: "A flight booking will be considered confirmed only after the applicable availability and fare have been confirmed, required payment has been received, and confirmation or ticket documentation has been issued.",
         },
         {
            type: "p",
            text: "Airline policies govern matters including:",
         },
         {
            type: "ul",
            items: [
               "Ticket changes",
               "Cancellation",
               "Refunds",
               "Rebooking",
               "Baggage allowance",
               "No-show",
               "Schedule changes",
            ],
         },
         {
            type: "p",
            text: "Airline schedules and fares may change before confirmation.",
         },
         {
            type: "p",
            text: "Where an airline cancels, delays, or changes a flight, the applicable airline rules and available alternatives will apply.",
         },
      ],
   },
   {
      title: "4. Hajj & Umrah Services",
      blocks: [
         {
            type: "p",
            text: "Hajj and Umrah services may include accommodation, flights, visa assistance, transportation, meals, and other services depending on the selected package.",
         },
         {
            type: "p",
            text: "The exact services included and excluded from a package will be specified in the applicable package information or quotation.",
         },
         {
            type: "p",
            text: "Package availability, accommodation, transportation, flight schedules, visa arrangements, and other services may be subject to availability and applicable regulations.",
         },
         {
            type: "p",
            text: "Customers must provide accurate personal information and submit required documents within the specified timeframe.",
         },
         {
            type: "p",
            text: "Visa approval is solely determined by the relevant government or authorized authority. Euro Bangla Travel does not guarantee visa approval.",
         },
         {
            type: "p",
            text: "Cancellation, amendment, and refund conditions may vary depending on the selected package and the policies of the relevant suppliers.",
         },
      ],
   },
   {
      title: "5. Hotel Bookings",
      blocks: [
         {
            type: "p",
            text: "Hotel bookings are subject to availability and confirmation by the relevant hotel or booking provider.",
         },
         {
            type: "p",
            text: "Hotel information may include room types, facilities, prices, location, check-in and check-out times, and cancellation conditions.",
         },
         {
            type: "p",
            text: "Such information may vary according to the hotel's policies.",
         },
         {
            type: "p",
            text: "Hotel cancellations, modifications, refunds, deposits, additional charges, and other conditions are subject to the applicable hotel's terms.",
         },
         {
            type: "p",
            text: "Customers are responsible for reviewing the applicable hotel conditions before confirming a booking.",
         },
      ],
   },
   {
      title: "6. Bus Ticket Services",
      blocks: [
         {
            type: "p",
            text: "Bus services are subject to availability, schedules, routes, fares, seating arrangements, and the policies of the relevant transport operator.",
         },
         {
            type: "p",
            text: "Submitting a bus inquiry or request does not guarantee availability or a seat.",
         },
         {
            type: "p",
            text: "A bus booking becomes confirmed only after availability has been confirmed and the required payment has been completed.",
         },
         {
            type: "p",
            text: "Changes, cancellations, refunds, and schedule modifications are subject to the transport operator's applicable policies.",
         },
      ],
   },
   {
      title: "7. Visa Services",
      blocks: [
         {
            type: "p",
            text: "Euro Bangla Travel may provide visa information, consultation, documentation guidance, appointment assistance, and application support.",
         },
         {
            type: "p",
            text: "Visa applications are subject to the requirements and decisions of the relevant embassy, consulate, immigration authority, or government authority.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel does not guarantee:",
         },
         {
            type: "ul",
            items: [
               "Visa approval",
               "Appointment availability",
               "Processing time",
               "Entry permission",
               "Immigration approval",
            ],
         },
         {
            type: "p",
            text: "Customers are responsible for providing accurate, complete, and genuine information and documentation.",
         },
         {
            type: "p",
            text: "Any false, incomplete, or misleading information provided by a customer may result in delays, refusal, cancellation, or other consequences.",
         },
         {
            type: "p",
            text: "Government fees, visa fees, application fees, and applicable service charges may be non-refundable.",
         },
      ],
   },
   {
      title: "8. Customer Information",
      blocks: [
         {
            type: "p",
            text: "Customers are responsible for providing accurate and complete information when submitting an inquiry or booking.",
         },
         {
            type: "p",
            text: "Depending on the service, this may include:",
         },
         {
            type: "ul",
            items: [
               "Full name",
               "Date of birth",
               "Nationality",
               "Passport details",
               "Contact information",
               "Travel dates",
               "Destination",
               "Number of travelers",
               "Visa information",
               "Required supporting documents",
            ],
         },
         {
            type: "p",
            text: "Customers must carefully review all information before submitting it.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel shall not be responsible for losses, delays, cancellations, or other issues caused by incorrect or incomplete information provided by the customer.",
         },
      ],
   },
   {
      title: "9. Prices and Quotations",
      blocks: [
         {
            type: "p",
            text: "All prices are subject to availability and may change before confirmation.",
         },
         {
            type: "p",
            text: "Depending on the service, the quoted price may or may not include:",
         },
         {
            type: "ul",
            items: [
               "Taxes",
               "Airline charges",
               "Baggage charges",
               "Hotel charges",
               "Visa or government fees",
               "Service charges",
               "Transportation charges",
               "Payment processing fees",
               "Other applicable third-party charges",
            ],
         },
         {
            type: "p",
            text: "The applicable price and conditions will be communicated to the customer before confirmation where reasonably possible.",
         },
         {
            type: "p",
            text: "A quotation does not guarantee a price or availability until the booking has been confirmed.",
         },
      ],
   },
   {
      title: "10. Payment",
      blocks: [
         {
            type: "p",
            text: "Where payment is required, customers must make payment using the payment method and instructions provided by Euro Bangla Travel.",
         },
         {
            type: "p",
            text: "A service or booking will not be considered confirmed until the required payment has been successfully received and confirmation has been issued.",
         },
         {
            type: "p",
            text: "Customers should retain payment receipts and booking documentation.",
         },
         {
            type: "p",
            text: "If payment is delayed, unsuccessful, incomplete, or received after a quoted fare or availability has expired, the price or availability may change.",
         },
      ],
   },
   {
      title: "11. Booking Confirmation",
      blocks: [
         {
            type: "p",
            text: "Submitting an inquiry, requesting a quotation, communicating through WhatsApp, or searching for a service does not automatically create a confirmed booking.",
         },
         {
            type: "p",
            text: "A booking is confirmed only when:",
         },
         {
            type: "ol",
            items: [
               "Availability has been confirmed;",
               "Required customer information has been received;",
               "Required payment has been successfully completed; and",
               "Euro Bangla Travel or the relevant service provider has issued confirmation.",
            ],
         },
         {
            type: "p",
            text: "Customers should not make non-refundable arrangements based solely on an inquiry or quotation.",
         },
      ],
   },
   {
      title: "12. Cancellation, Changes and Refunds",
      blocks: [
         {
            type: "p",
            text: "Cancellation, amendment, and refund conditions vary depending on the service and supplier.",
         },
         {
            type: "p",
            text: "Applicable conditions may be determined by:",
         },
         {
            type: "ul",
            items: [
               "Airline",
               "Hotel",
               "Bus operator",
               "Hajj or Umrah package provider",
               "Visa authority",
               "Other third-party supplier",
            ],
         },
         {
            type: "p",
            text: "Refunds may be subject to supplier penalties, cancellation charges, government fees, visa fees, service charges, payment processing fees, or other applicable deductions.",
         },
         {
            type: "p",
            text: "Certain services or fees may be completely non-refundable.",
         },
         {
            type: "p",
            text: "Where a refund is applicable, processing time may depend on the relevant supplier or payment provider.",
         },
         {
            type: "p",
            text: "The applicable cancellation and refund conditions will be communicated to the customer where applicable.",
         },
      ],
   },
   {
      title: "13. Changes to Bookings",
      blocks: [
         {
            type: "p",
            text: "Requests to change travel dates, passenger details, accommodation, transportation, or other booking information are subject to availability and the applicable supplier's rules.",
         },
         {
            type: "p",
            text: "Additional charges may apply.",
         },
         {
            type: "p",
            text: "A requested change is not considered confirmed until Euro Bangla Travel provides confirmation.",
         },
      ],
   },
   {
      title: "14. Travel Documents and Entry Requirements",
      blocks: [
         {
            type: "p",
            text: "Customers are responsible for obtaining and maintaining all documents required for their journey.",
         },
         {
            type: "p",
            text: "Depending on the destination and service, these may include:",
         },
         {
            type: "ul",
            items: [
               "Valid passport",
               "Visa",
               "Flight ticket",
               "Hotel confirmation",
               "Travel insurance",
               "Health or vaccination documents",
               "Immigration documents",
               "Other destination-specific documents",
            ],
         },
         {
            type: "p",
            text: "Travel and entry requirements may change.",
         },
         {
            type: "p",
            text: "Customers should verify the applicable requirements with the relevant authorities before travelling.",
         },
      ],
   },
   {
      title: "15. Third-Party Providers",
      blocks: [
         {
            type: "p",
            text: "Euro Bangla Travel may arrange services provided by independent third parties, including airlines, hotels, bus operators, visa authorities, payment providers, and other travel suppliers.",
         },
         {
            type: "p",
            text: "These providers operate independently and may have their own terms, conditions, cancellation policies, refund rules, and service standards.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel cannot control decisions, schedules, availability, or policies established by independent third-party providers.",
         },
      ],
   },
   {
      title: "16. Delays, Cancellations and Service Disruptions",
      blocks: [
         {
            type: "p",
            text: "Travel services may be affected by circumstances including airline cancellations, flight delays, hotel changes, transportation disruptions, visa delays, government restrictions, or other events beyond our control.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel will provide reasonable assistance where possible.",
         },
         {
            type: "p",
            text: "However, we cannot guarantee the actions, decisions, schedules, or availability of airlines, hotels, transport operators, government authorities, embassies, consulates, or other third parties.",
         },
      ],
   },
   {
      title: "17. Customer Responsibilities",
      blocks: [
         {
            type: "p",
            text: "Customers agree to:",
         },
         {
            type: "ul",
            items: [
               "Provide accurate information;",
               "Submit required documents within the requested timeframe;",
               "Review booking details carefully;",
               "Make required payments on time;",
               "Follow applicable airline, hotel, transport, visa, immigration, and government requirements;",
               "Notify Euro Bangla Travel promptly of any relevant change in their information.",
            ],
         },
         {
            type: "p",
            text: "Customers are responsible for ensuring that all information supplied to us is accurate.",
         },
      ],
   },
   {
      title: "18. Website Use",
      blocks: [
         {
            type: "p",
            text: "You agree to use this website only for lawful purposes.",
         },
         {
            type: "p",
            text: "You must not:",
         },
         {
            type: "ul",
            items: [
               "Submit fraudulent or misleading information;",
               "Attempt unauthorized access to the website or its systems;",
               "Interfere with website functionality;",
               "Upload malicious or harmful content;",
               "Abuse booking or inquiry systems;",
               "Use the website for unlawful activities.",
            ],
         },
         {
            type: "p",
            text: "Euro Bangla Travel reserves the right to restrict or terminate access where misuse or unauthorized activity is identified.",
         },
      ],
   },
   {
      title: "19. Privacy and Personal Information",
      blocks: [
         {
            type: "p",
            text: "We may collect and process personal information necessary to respond to inquiries, process bookings, provide travel services, and communicate with customers.",
         },
         {
            type: "p",
            text: "Where necessary, relevant information may be shared with airlines, hotels, transport providers, visa authorities, payment providers, or other service providers for the purpose of delivering the requested service.",
         },
         {
            type: "p",
            text: "Your personal information will be handled in accordance with our Privacy Policy.",
         },
      ],
   },
   {
      title: "20. Intellectual Property",
      blocks: [
         {
            type: "p",
            text: "All content available on this website, including but not limited to text, graphics, logos, photographs, designs, branding, and interface elements, is owned by or licensed to Euro Bangla Travel unless otherwise stated.",
         },
         {
            type: "p",
            text: "You may not reproduce, copy, modify, distribute, publish, or commercially use website content without prior written permission.",
         },
      ],
   },
   {
      title: "21. Website Availability",
      blocks: [
         {
            type: "p",
            text: "We make reasonable efforts to maintain the availability and functionality of our website.",
         },
         {
            type: "p",
            text: "However, we do not guarantee that the website will always be uninterrupted, error-free, secure, or available.",
         },
         {
            type: "p",
            text: "Temporary interruption may occur because of maintenance, technical problems, hosting issues, security updates, network failures, or other circumstances beyond our reasonable control.",
         },
      ],
   },
   {
      title: "22. Force Majeure",
      blocks: [
         {
            type: "p",
            text: "Euro Bangla Travel shall not be responsible for failure or delay in providing services caused by circumstances beyond our reasonable control.",
         },
         {
            type: "p",
            text: "Such circumstances may include:",
         },
         {
            type: "ul",
            items: [
               "Natural disasters",
               "Severe weather",
               "War",
               "Civil unrest",
               "Government restrictions",
               "Pandemics or public health emergencies",
               "Strikes",
               "Transportation disruptions",
               "Major technical failures",
               "Other extraordinary circumstances",
            ],
         },
      ],
   },
   {
      title: "23. Limitation of Liability",
      blocks: [
         {
            type: "p",
            text: "To the extent permitted by applicable law, Euro Bangla Travel shall not be liable for losses arising from circumstances beyond our reasonable control or from actions, decisions, delays, cancellations, or failures of independent third-party providers.",
         },
         {
            type: "p",
            text: "This includes matters relating to airlines, hotels, transport operators, visa authorities, immigration authorities, government agencies, and other suppliers.",
         },
         {
            type: "p",
            text: "Nothing in these Terms & Conditions excludes or limits liability that cannot legally be excluded or limited under applicable law.",
         },
      ],
   },
   {
      title: "24. Changes to These Terms",
      blocks: [
         {
            type: "p",
            text: "Euro Bangla Travel may update these Terms & Conditions from time to time.",
         },
         {
            type: "p",
            text: "Any updated version will be published on this page with a revised Last Updated date.",
         },
         {
            type: "p",
            text: "You should review these Terms & Conditions before using our services.",
         },
      ],
   },
   {
      title: "25. Governing Law",
      blocks: [
         {
            type: "p",
            text: "These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of Bangladesh, unless otherwise required by applicable law or a specific written agreement.",
         },
         {
            type: "p",
            text: "Any dispute should first be brought to the attention of Euro Bangla Travel so that the parties may attempt to resolve the matter amicably.",
         },
      ],
   },
   {
      title: "26. Contact Us",
      blocks: [
         {
            type: "p",
            text: "If you have any questions regarding these Terms & Conditions or our services, please contact Euro Bangla Travel through the official contact details published on our website.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel — Dhaka, Bangladesh.",
         },
         {
            type: "p",
            text: "For current contact information, please visit our Contact page.",
         },
      ],
   },
   {
      title: "Acceptance of Terms",
      blocks: [
         {
            type: "p",
            text: "By accessing this website, submitting an inquiry, requesting a quotation, or using any service provided by Euro Bangla Travel, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
         },
         {
            type: "p",
            text: "Euro Bangla Travel — Your trusted travel partner.",
         },
      ],
   },
];
