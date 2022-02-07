import React from "react";
import cn from "classnames";

import styles from "./article.module.scss";

const block = "article";

const Article = ({ image, title, content, isPaw = false, imageStyleName, customStyles = {} }) => {
  return (
    <div className={styles[block]}>
      <div className={cn(styles[`${block}__image-container`], customStyles.imageContainer)}>
        <img
          src={image}
          className={cn(
            styles[`${block}__image`],
            isPaw && styles[`${block}__image--paw`],
            imageStyleName
          )}
          alt={title}
        />
      </div>
      <h3 className={cn(styles[`${block}__title`], customStyles.title)}>{title}</h3>
      <p className={cn(styles[`${block}__content`], customStyles.content)}>{content}</p>
    </div>
  );
};

export default Article;
