export type PrivacyBlock =
   | { type: "p"; text: string }
   | { type: "ul"; items: string[] };

export type PrivacySection = {
   title: string;
   blocks: PrivacyBlock[];
};

export const PRIVACY_UPDATED = "17 August 2026";

export const PRIVACY_INTRO = [
   "At Euro Bangla Travel, we respect your privacy and are committed to protecting the personal information you provide when using our website and services.",
   "This Privacy Policy explains what information we collect, how we use it, and how we protect it.",
] as const;

export const PRIVACY_SECTIONS: PrivacySection[] = [
   {
      title: "1. Information We Collect",
      blocks: [
         {
            type: "p",
            text: "When you contact us, submit an inquiry, or request a travel service, we may collect information such as:",
         },
         {
            type: "ul",
            items: [
               "Full name",
               "Phone number",
               "Email address",
               "Nationality",
               "Travel destination",
               "Travel dates",
               "Number of travelers",
               "Passport or travel document information where required",
               "Visa-related information where required",
               "Messages and other information you choose to provide",
            ],
         },
         {
            type: "p",
            text: "We may also collect basic technical information such as browser type, device information, IP address, and website usage data.",
         },
      ],
   },
   {
      title: "2. How We Use Your Information",
      blocks: [
         {
            type: "p",
            text: "We use your information to:",
         },
         {
            type: "ul",
            items: [
               "Respond to your inquiries",
               "Provide requested travel services",
               "Process bookings and quotations",
               "Assist with flights, hotels, bus travel, Hajj & Umrah, and visa services",
               "Communicate booking or service updates",
               "Provide customer support",
               "Improve our website and services",
               "Prevent fraud, misuse, and security issues",
               "Comply with applicable legal requirements",
            ],
         },
         {
            type: "p",
            text: "We only use information for legitimate business and service-related purposes.",
         },
      ],
   },
   {
      title: "3. Sharing Your Information",
      blocks: [
         {
            type: "p",
            text: "We may share relevant information with trusted third parties when necessary to provide the requested service.",
         },
         {
            type: "p",
            text: "These may include:",
         },
         {
            type: "ul",
            items: [
               "Airlines",
               "Hotels",
               "Bus operators",
               "Visa authorities",
               "Embassies or consulates",
               "Payment providers",
               "Other travel service providers",
            ],
         },
         {
            type: "p",
            text: "We only share information that is reasonably necessary for the relevant service or legal requirement.",
         },
         {
            type: "p",
            text: "We do not sell your personal information.",
         },
      ],
   },
   {
      title: "4. Payments",
      blocks: [
         {
            type: "p",
            text: "Where online payment services are used, payment information may be processed directly by the relevant payment provider.",
         },
         {
            type: "p",
            text: "We do not intend to store complete payment card details on our website unless specifically required and securely supported by the applicable payment system.",
         },
         {
            type: "p",
            text: "Payment providers may have their own privacy policies and terms.",
         },
      ],
   },
   {
      title: "5. Cookies",
      blocks: [
         {
            type: "p",
            text: "Our website may use cookies and similar technologies to:",
         },
         {
            type: "ul",
            items: [
               "Keep the website functioning properly",
               "Remember preferences such as language",
               "Understand website usage",
               "Improve performance",
               "Support analytics and security",
            ],
         },
         {
            type: "p",
            text: "You may manage or disable cookies through your browser settings, although some website functions may not work properly as a result.",
         },
      ],
   },
   {
      title: "6. Data Security",
      blocks: [
         {
            type: "p",
            text: "We take reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.",
         },
         {
            type: "p",
            text: "However, no method of transmitting or storing information online can be guaranteed to be completely secure.",
         },
      ],
   },
   {
      title: "7. Data Retention",
      blocks: [
         {
            type: "p",
            text: "We retain personal information only for as long as reasonably necessary to provide services, maintain business records, resolve disputes, meet legal obligations, and protect our legitimate business interests.",
         },
         {
            type: "p",
            text: "When information is no longer required, it may be securely deleted or anonymized where appropriate.",
         },
      ],
   },
   {
      title: "8. Your Rights",
      blocks: [
         {
            type: "p",
            text: "Depending on applicable law, you may have the right to:",
         },
         {
            type: "ul",
            items: [
               "Request access to your personal information",
               "Ask us to correct inaccurate information",
               "Request deletion where legally permitted",
               "Withdraw certain communications or consent",
               "Ask questions about how your information is used",
            ],
         },
         {
            type: "p",
            text: "To make a privacy-related request, please contact us through our official contact channels.",
         },
      ],
   },
   {
      title: "9. Third-Party Links",
      blocks: [
         {
            type: "p",
            text: "Our website may contain links to third-party websites or services.",
         },
         {
            type: "p",
            text: "We are not responsible for the privacy practices or content of those websites.",
         },
         {
            type: "p",
            text: "We recommend reviewing their privacy policies before providing personal information.",
         },
      ],
   },
   {
      title: "10. Children's Privacy",
      blocks: [
         {
            type: "p",
            text: "Our website and services are not intentionally designed to collect personal information from children without appropriate consent.",
         },
         {
            type: "p",
            text: "If you believe a child has provided personal information to us without appropriate authorization, please contact us so we can take appropriate action.",
         },
      ],
   },
   {
      title: "11. Changes to This Privacy Policy",
      blocks: [
         {
            type: "p",
            text: "We may update this Privacy Policy when necessary.",
         },
         {
            type: "p",
            text: "Any changes will be published on this page with an updated Last Updated date.",
         },
      ],
   },
   {
      title: "12. Contact Us",
      blocks: [
         {
            type: "p",
            text: "If you have questions about this Privacy Policy or how we handle your information, please contact:",
         },
         {
            type: "p",
            text: "Euro Bangla Travel — Dhaka, Bangladesh.",
         },
         {
            type: "p",
            text: "For our current phone number, email address, and other contact information, please visit our Contact page.",
         },
      ],
   },
];

export const PRIVACY_CLOSING =
   "By using our website or submitting your information to Euro Bangla Travel, you acknowledge this Privacy Policy.";
