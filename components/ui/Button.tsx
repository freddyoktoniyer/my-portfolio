import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const baseStyles =
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[color,background-color,border-color] duration-200";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-background hover:bg-accent-strong",
  secondary:
    "border border-line-strong bg-surface/70 text-fg hover:border-fg-faint hover:bg-elevated",
  ghost: "text-fg-secondary hover:text-fg",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions = {}): string {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

interface CommonProps extends ButtonStyleOptions {
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    /** Opens in a new tab with safe `rel` attributes. */
    external?: boolean;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  if (typeof props.href === "string") {
    const { variant, size, className, children, external, ...anchorProps } =
      props;
    return (
      <a
        className={buttonStyles({ variant, size, className })}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const {
    variant,
    size,
    className,
    children,
    type = "button",
    ...buttonProps
  } = props;
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
