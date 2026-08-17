import Image from "next/image";
import logo from "@/assets/img/logo/euro-bangla-logo.png";
import logoWhite from "@/assets/img/logo/euro-bangla-logo-white.png";

const LOGO_RATIO = 2172 / 724;

type SiteLogoProps = {
   height?: number;
   className?: string;
   priority?: boolean;
   variant?: "color" | "white";
};

const SiteLogo = ({ height = 52, className, priority = false, variant = "color" }: SiteLogoProps) => {
   const width = Math.round(height * LOGO_RATIO);

   return (
      <Image
         src={variant === "white" ? logoWhite : logo}
         alt="Euro Bangla Travels"
         width={width}
         height={height}
         className={className}
         priority={priority}
         style={{ width: "auto", height: `${height}px`, maxWidth: "100%" }}
      />
   );
};

export default SiteLogo;
