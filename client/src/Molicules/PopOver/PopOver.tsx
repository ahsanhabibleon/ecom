import classNames from "classnames";
import { PopOverProps } from "./PopOver.types";
import "./PopOver.scss";
import { forwardRef, RefObject, useRef } from "react";
import { useOutsideClickHandler } from "../../hooks";

const PopOver = forwardRef<HTMLDivElement, PopOverProps>(
  ({ open, closePopover, header, body, footer, className, position }, ref) => {
    const popoverClasses = classNames({
      popover: true,
      [`${className}`]: className,
    });

    const popoverRef = useRef<HTMLDivElement>(null);

    useOutsideClickHandler(ref as RefObject<HTMLDivElement>, () => {
      closePopover();
    });

    if (!open) return null;

    return (
      <div
        ref={ref || popoverRef}
        className={popoverClasses}
        style={{
          top: position?.top || "auto",
          right: position?.right || "auto",
          bottom: position?.bottom || "auto",
          left: position?.left || "auto",
        }}
      >
        <div className="popover-header">{header}</div>
        <div className="popover-body">{body}</div>
        <div className="popover-footer">{footer}</div>
      </div>
    );
  }
);

export default PopOver;
