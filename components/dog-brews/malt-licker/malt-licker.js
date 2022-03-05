import React from "react";
import useScroll from "../../../utils/use-scroll";
import StandardContainer from "../../standard-container/standard-container";

import styles from  "./malt-licker.module.scss";

const block = "malt-licker";

const MaltLicker = () => {
  const [bbox, ref] = useScroll();

  return (
       <StandardContainer
       title={"LOWRIDER MALT LICKER"}
       image="/malt-licker.svg"
       imageClassName={styles[`${block}__image`]}
     >
       <>
        <p className={styles[`${block}__description`]}>
            Lowrider Malt Licker is made with beef from Firsthand Foods farmers
            and locally grown, seasonal vegetables. There is absolutely no
            alcohol or hops, which are toxic to dogs.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            This brew is an excellent source of:
          </p>
          <ul className={styles[`${block}__description`]}>
            <li>
              Bone marrow which contains adiponectin that has been shown to
              reduce the risk of heart disease and certain cancers. Marrow also
              supports kidney and digestive function, it can aid in repairing
              wounds, and will help generate new red and white blood cells.
            </li>
            <li>
              Amino acids like glycine and glutamine that aids digestion and
              promotes gut health.
            </li>
          </ul>
          <br />
          <p className={styles[`${block}__description`]}> Ingredients:</p>
          <p className={styles[`${block}__description`]}>
            Beef Broth (Filtered Water, Beef Bones, Carrot, Celery, Spinach,
            Ginger, Thyme), Apple Cider Vinegar
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

export default MaltLicker;
