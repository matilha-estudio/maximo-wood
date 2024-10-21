import { cn } from "@/lib/utils";

interface TextProps {
    children: React.ReactNode;
    className?: string;
}

export function H1({ className, children }: TextProps) {
    return (
        <h1 className={cn("font-bold text-[44px] leading-[52.8px] md:font-extrabold md:text-[56px] md:leading-[67.2px]", className)}>
            {children}
        </h1>
    )
}

export function H2({ children, className }: TextProps) {
    return (
        <h2 className={cn("font-bold text-[40px] leading-[48px] md:font-extrabold md:text-[48px] md:leading-[57.6px]", className)}>
            {children}
        </h2>
    )
}

export function H3({ children, className }: TextProps) {
    return (
        <h2 className={cn("font-bold text-[32px] leading-[38.4px] md:font-extrabold md:text-[40px] md:leading-[48px]", className)}>
            {children}
        </h2>
    )
}

export function H4({ children, className }: TextProps) {
    return (
        <h2 className={cn("font-extrabold text-[32px] leading-[40.96px]", className)}>
            {children}
        </h2>
    )
}

export function H5({ children, className }: TextProps) {
    return (
        <h2 className={cn("font-extrabold text-[24px] leading-[40px]", className)}>
            {children}
        </h2>
    )
}

export function H6({ children, className }: TextProps) {
    return (
        <h2 className={cn("font-extrabold text-[20px] leading-[25.6px]", className)}>
            {children}
        </h2>
    )
}

export function SubtitleXL({ children, className }: TextProps) {
    return (
        <span className={cn("font-extrabold text-[36px] leading-[43.52px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleLarge({ children, className }: TextProps) {
    return (
        <span className={cn("font-medium text-[32px] leading-[43.52px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleMediumBold({ children, className }: TextProps) {
    return (
        <span className={cn("font-bold text-[24px] leading-[32.64px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleMediumNormal({ children, className }: TextProps) {
    return (
        <span className={cn("font-normal text-[24px] leading-[32.64px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleSmall({ children, className }: TextProps) {
    return (
        <span className={cn("font-bold text-[20px] leading-[34px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleSmallMedium({ children, className }: TextProps) {
    return (
        <span className={cn("font-medium text-[16px] leading-[19.2px]", className)}>
            {children}
        </span>
    )
}

export function SubtitleSmallBold({ children, className }: TextProps) {
    return (
        <span className={cn("font-bold text-[16px] leading-[21.76px]", className)}>
            {children}
        </span>
    )
}

export function ParagraphLarge({ children, className }: TextProps) {
    return (
        <span className={cn("font-normal text-[18px] leading-[33.82px]", className)}>
            {children}
        </span>
    )
}

export function ParagraphMedium({ children, className }: TextProps) {
    return (
        <span className={cn("font-normal text-[16px] leading-[28.48px]", className)}>
            {children}
        </span>
    )
}

export function Caption({ children, className }: TextProps) {
    return (
        <span className={cn("font-medium text-[12px] leading-[14.4px]", className)}>
            {children}
        </span>
    )
}

export function Overline({ children, className }: TextProps) {
    return (
        <span className={cn("font-semibold text-[12px] leading-[14.4px] uppercase", className)}>
            {children}
        </span>
    )
}

export function TextLink({ children, className }: TextProps) {
    return (
        <span className={cn("font-bold text-[18px] leading-[21px]", className)}>
            {children}
        </span>
    )
}

export function InputText({ children, className }: TextProps) {
    return (
        <span className={cn("font-medium text-[16px] leading-[19.2px]", className)}>
            {children}
        </span>
    )
}