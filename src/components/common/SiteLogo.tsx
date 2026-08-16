import Image from "next/image";
import logo from "@/assets/img/logo/euro-bangla-logo.png";

const LOGO_RATIO = 2172 / 724;

type SiteLogoProps = {
   height?: number;
   className?: string;
   priority?: boolean;
};

const SiteLogo = ({ height = 52, className, priority = false }: SiteLogoProps) => {
   const width = Math.round(height * LOGO_RATIO);

   return (
      <Image
         src={logo}
         alt="Euro Bangla Travels"
         width={width}
         height={height}
         className={className}
         priority={priority}
         style={{ width: "auto", height: `${height}px` }}
      />
   );
};

export default SiteLogo;
