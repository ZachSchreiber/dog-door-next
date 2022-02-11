import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./shop-tab.module.scss";

const ShopTab = () => {
  const [isTabOpen, setIsTabOpen] = useState(false);

   const toggleTab = () => {
      setIsTabOpen(!isTabOpen)
  };

  return (
    <div
      onClick={toggleTab}
      className={cn(styles.shopTab, isTabOpen && styles["shopTab--open"])}
    >
      <div className={styles.shopTab__openTab}>
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
      <div className={styles.shopTab__button}>
        <Link href="https://dog-door-pet-food.square.site/">
          <a target="_blank">Order Online</a>
        </Link>
      </div>
    </div>
  );
};

export default ShopTab;
