import React from "react";
import useScroll from "../../../utils/use-scroll";
import StandardContainer from "../../standard-container/standard-container";

import styles from  "./barktic-porter.module.scss";

const block = "barktic-porter";

const BarkticPorter = () => {
  const [bbox, ref] = useScroll();


  return (
    <StandardContainer
      title={ <>SALTY SEA DOG
         BARKTIC PORTER</>}
      image="/barktic-porter.svg"
      imageClassName={styles[`${block}__image`]}
    >
      <>
      <p className={styles[`${block}__description`]}>
            Salty Sea Dog is made with NC caught fish and locally grown seasonal
            vegetables. There is absolutely no alcohol or hops, which are toxic
            to dogs. Cats also love our Barktic Porter.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            This brew is an excellent source of:{" "}
          </p>
          <ul className={styles[`${block}__description`]}>
            <li>Calcium for healthy bones and teeth</li>
            <li>Iodine for improved thyroid function</li>
            <li>Omega 3 fatty acids to support a healthy skin and coat</li>
          </ul>
          <br />
          <p className={styles[`${block}__description`]}> Ingredients:</p>
          <p className={styles[`${block}__description`]}>
            Fish Broth (Filtered Water, Fish Bones, Carrot, Celery, Fennel,
            Atlantic Kelp, Bay Leaf, Thyme), Apple Cider Vinegar
          </p>
          <br />
          <p className={styles[`${block}__description`]}>Guaranteed Analysis:</p>
          <p className={styles[`${block}__description`]}>
            Crude Protein (min) 2%, Crude Fat (min) 0%, Crude Fiber (max) 1%,
            Moisture (max) 97%
          </p>
      </>
    </StandardContainer>
  );
};

export default BarkticPorter;
