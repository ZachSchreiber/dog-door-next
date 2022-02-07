import React from "react";
import useScroll from "../../../utils/use-scroll";
import StandardContainer from "../../standard-container";

import styles from "./where-to-purchase.module.scss";

const block = "where-to-purchase";

const WhereToPurchase = () => {
  const [bbox, ref] = useScroll();

  return (
    <StandardContainer image="/where-to-purchase.png" title="WHERE TO PURCHASE" imageClassName={styles[`${block}__image`]}>
      <dl className={styles[`${block}__description`]}>
        <dt>FARMERS MARKET</dt>
        <dd>TBD</dd>
        {/* <dt>BARNES SUPPLY CO</dt>
          <dd>9th Street Durham, NC</dd> */}
        <dt>ONLINE ORDERS</dt>
        <dd>
          Check out our online store for more information. We offer free limited
          local delivery with a minimum order of $50
        </dd>
      </dl>
    </StandardContainer>
  );
};

export default WhereToPurchase;
