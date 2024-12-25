import React from "react";

interface TypographyProps {
  children: React.ReactNode;
}

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface TypographyProps {
  children: React.ReactNode;
  variant: Variant;
  className?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, variant, className } = props;
  const Tag = variant as keyof React.JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
};
export default Typography;
