import React from "react";
import StandardContainer from "../../standard-container/standard-container";
import useScroll from "../../../utils/use-scroll";

import styles from  "./carolina-chillsner.module.scss";

const block = "carolina-chillsner";

const CarlolinaChillsner = () => {
  const [bbox, ref] = useScroll();

  return (
     <StandardContainer
     title={"CAROLINA CHILLSNER"}
     image="/carolina-chillsner.svg"
     imageClassName={styles[`${block}__image`]}
     imageRight
   >
     <>
     <p className={`${block}__description`}>
            Carolina Chillsner is made with chicken from Little Way Farm in
            Siler City and locally grown, seasonal vegetables. There is
            absolutely no alcohol or hops, which are toxic to dogs.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            This brew is an excellent source of:
          </p>
          <ul className={styles[`${block}__description`]}>
            <li>
              Vitamins, minerals, and nutrients such as calcium, magnesium,
              phosphorus, silicon.
            </li>
            <li>
              Gelatin, collagen, glucosamine, and chondroitin to promote healthy
              joints.
            </li>
            <li>
              Chamomile which will calm anxiety, reduce inflammation, and sooth
              an upset stomach.
            </li>
          </ul>
          <br />
          <p className={styles[`${block}__description`]}> Ingredients:</p>
          <p className={styles[`${block}__description`]}>
            Chicken Broth (Filtered Water, Chicken Bones, Carrot, Celery,
            Chamomile, Turmeric, Rosemary), Apple Cider Vinegar
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

export default CarlolinaChillsner;
