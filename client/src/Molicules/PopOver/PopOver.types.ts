import { ReactNode } from "react";

export interface PopOverProps {
  open: boolean;
  closePopover: () => void;
  ref?: React.ForwardedRef<HTMLDivElement>;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  className?: string;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}
