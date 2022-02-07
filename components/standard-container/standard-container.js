import React from "react";
import cn from "classnames";
import useScroll from "../../utils/use-scroll";

import styles from "./standard-container.module.scss";

const block = "standard-container";

const StandardContainer = ({
  classNames,
  image,
  title,
  imageClassName,
  imageRight = false,
  children,
}) => {
  const [bbox, ref] = useScroll();

  return (
    <div
      ref={ref}
      className={
        cn(styles[block], imageRight && styles[`${block}--right`])
      }
    >
      <img
        src={image}
        className={cn(styles[`${block}__image`], imageClassName)}
        alt="brown dog"
      />
      <div
        className={cn(
          styles[`${block}__text-container`],
          bbox.top < 680 ? styles[`${block}--show`] : styles[`${block}--hide`],
        )}
      >
        <h2 className={styles[`${block}__title`]}>{title}</h2>
        <span className={styles[`${block}__description`]}>{children}</span>
      </div>
    </div>
  );
};

export default StandardContainer;
