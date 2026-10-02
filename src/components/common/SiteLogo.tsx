import Image from "next/image";

type SiteLogoProps = {
   height?: number;
   className?: string;
   priority?: boolean;
   variant?: "color" | "white";
};

const SiteLogo = ({ height = 72, className, priority = false }: SiteLogoProps) => {
   const width = height; // 1:1 ratio for round logo

   return (
      <Image
         src="/assets/img/logo/euro-bangla-logo-round.jpg"
         alt="Euro Bangla Travels"
         width={width}
         height={height}
         className={className}
         priority={priority}
         style={{
            width: "auto",
            height: `${height}px`,
            maxWidth: "100%",
            borderRadius: "50%",
         }}
      />
   );
};

export default SiteLogo;
