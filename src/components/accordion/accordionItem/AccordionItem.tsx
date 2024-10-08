import { useEffect, useId, useRef, useState } from "react";
import { ReactComponent as ChevronLeft } from "../assets/chevron_left.svg";
import styles from "./AccordionItem.module.scss";
import { IAccordionItemProps } from "./IAccordionItemProps";
import { style } from "../../../core/utils/style";

export const AccordionItem: React.FC<IAccordionItemProps> = (props) => {
  const [childHeight, setChildHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const height = ref.current?.clientHeight ?? 0;
    console.log(height);
    setChildHeight(height);
  }, [props.isOpen]);

  return (
    <div className={styles.accordionItem}>
      <div
        className={style(
          styles.header,
          props.headerClassName,
          props.isOpen ? styles.headerIsOpen : ""
        )}
        onClick={props.onClick}
      >
        <label
          htmlFor={id}
          className={style(styles.title, props.titleClassName)}
        >
          {props.title}
        </label>
        <ChevronLeft
          className={props.isOpen ? styles.chevronUp : styles.chevronDown}
        />
      </div>
      <article
        id={id}
        className={style(
          styles.content,
          props.contentClassName,
          props.isOpen ? styles.contentIsOpen : ""
        )}
        style={{
          height: props.isOpen ? `${childHeight}px` : "0px",
        }}
      >
        <div ref={ref} className={style(styles.childWrapper)}>
          {props.children}
        </div>
      </article>
    </div>
  );
};
