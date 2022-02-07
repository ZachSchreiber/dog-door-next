import React from "react";
import cn from "classnames";
import useScroll from "../../../utils/use-scroll";
import StandardContainer from "../../standard-container/standard-container";

import styles from "./get-in-touch.module.scss";

const block = "get-in-touch";

const WhereToPurchase = () => {
  const [bbox, ref] = useScroll();

  return (
    <StandardContainer title="GET IN TOUCH" image="/get-in-touch.png" imageRight={true}   imageClassName={styles[`${block}__image`]}>
        <dl className={styles[`${block}__description`]}>
          <dt>SOCIAL MEDIA</dt>
          <dd>
            <img
              src="/twitter-brands.svg"
              className={styles[`${block}__social-icon`]}
              alt="yellow circle"
            />
            <img
              src="/instagram-brands.svg"
              className={styles[`${block}__social-icon`]}
              alt="yellow circle"
            />
          </dd>
          <dt>EMAIL</dt>
          <dd>
            <a  className={styles[`${block}__email`]} href="mailto:dogdoorpetfood@gmail.com">
              dogdoorpetfood@gmail.com
            </a>
          </dd>
          <dt>PHONE NUMBER</dt>
          <dd>
            <a href="tel:9198082545">(919) 808-2545</a>
          </dd>
        </dl>
    </StandardContainer>
  )
};

export default WhereToPurchase;
