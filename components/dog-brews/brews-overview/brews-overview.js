import React, { useEffect } from "react";
import StandardContainer from "../../standard-container/standard-container";

import styles from  "./brews-overview.module.scss";

const block = "brews-overview";

const BrewsOverview = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);


  return (
    <StandardContainer
      title="DOG BREWS"
      imageClassName={styles[`${block}__image`]}
      image="/brews-overview.png"
      imageRight
    >
      <>
      <p className={styles[`${block}__description`]}>
            Dog Door Pet Food offers several NONALCOHOLIC brews formulated
            specifically for your furry friend.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            All brews contain absolutely no alcohol or hops, no mad scientist
            list of chemicals, no artificial flavors or colors.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            Serve our brews on their own as a refreshing treat or pour over
            boring dry kibbles for a boost of flavor.
          </p>
          <br />
          <p className={styles[`${block}__description`]}>
            Don&lsquo;t be fooled, cats love our delicious brews too!
          </p>
      </>
    </StandardContainer>
  );
};

export default BrewsOverview;
