import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type EbtButtonVariant =
   | "primary"
   | "secondary"
   | "outline"
   | "ghost"
   | "text"
   | "danger"
   | "whatsapp"
   | "on-brand";

export type EbtButtonSize = "sm" | "md" | "lg";

type Shared = {
   variant?: EbtButtonVariant;
   size?: EbtButtonSize;
   block?: boolean;
   iconOnly?: boolean;
   round?: boolean;
   className?: string;
   children?: ReactNode;
};

const classNames = (
   { variant = "primary", size = "md", block, iconOnly, round, className }: Shared,
   extra?: string,
) =>
   [
      "ebt-btn",
      `ebt-btn--${variant}`,
      size === "md" ? "" : `ebt-btn--${size}`,
      block ? "ebt-btn--block" : "",
      iconOnly ? "ebt-btn--icon" : "",
      round ? "ebt-btn--round" : "",
      extra || "",
      className || "",
   ]
      .filter(Boolean)
      .join(" ");

type EbtButtonProps = Shared &
   Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
      loading?: boolean;
      /** Announced while `loading` is true; the visible label is replaced. */
      loadingLabel?: string;
   };

const EbtButton = ({
   variant,
   size,
   block,
   iconOnly,
   round,
   className,
   loading = false,
   loadingLabel,
   disabled,
   children,
   type = "button",
   ...rest
}: EbtButtonProps) => (
   <button
      {...rest}
      type={type}
      className={classNames({ variant, size, block, iconOnly, round, className }, loading ? "is-loading" : "")}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
   >
      {loading && <span className="ebt-btn-spinner" aria-hidden="true" />}
      {loading && loadingLabel ? loadingLabel : children}
   </button>
);

type EbtLinkProps = Shared &
   Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
      href: string;
      /** Renders a plain anchor instead of a client-routed link. */
      external?: boolean;
   };

export const EbtButtonLink = ({
   variant,
   size,
   block,
   iconOnly,
   round,
   className,
   href,
   external = false,
   children,
   ...rest
}: EbtLinkProps) => {
   const cls = classNames({ variant, size, block, iconOnly, round, className });

   if (external) {
      return (
         <a {...rest} href={href} className={cls}>
            {children}
         </a>
      );
   }

   return (
      <Link {...rest} href={href} className={cls}>
         {children}
      </Link>
   );
};

export default EbtButton;
