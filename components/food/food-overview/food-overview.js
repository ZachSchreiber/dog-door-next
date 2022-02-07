import { useEffect } from "react";
import StandardContainer from "../../standard-container/standard-container";


import styles from  "./food-overview.module.scss";

const block = "food-overview";

const FoodOverview = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

  return (
       <StandardContainer
       title="PET FOOD"
       imageClassName={styles[`${block}__image`]}
       image="/raw-bowl-2.png"
     >
       <>
       <p className={`${block}__description`}>
          We source as many ingredients as possible from local farms and businesses.
          </p>
          <br />
          <p className={`${block}__description`}>
          Our single ingredient, real meat treats are slowly dehydrated with <span className={styles[`${block}__underline`]}>no</span> additives, preservatives, grains, or gluten. 
          </p>
          <br />
          <p className={`${block}__description`}>
          We do not supplement all nutritional needs in one meal, therefore our meals are marketed as &ldquo;toppers&ldquo; according to AAFCO guidelines. We believe a fully balanced diet is achieved by consuming a variety of foods across several meals. 
          </p>
       </>
     </StandardContainer>
  );
};

export default FoodOverview;
