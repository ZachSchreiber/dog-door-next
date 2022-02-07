import cn from "classnames";
import Article from "../../article";

import styles from "./food-selection.module.scss";

const block = "food-selection";

const FoodSelection = () => {
  const customStyles = {
    imageContainer: styles[`${block}__image-container`],
    title: styles[`${block}__article-title`],
    content: styles[`${block}__article-content`],
  };
  return (
    <div className={styles[block]}>
      <h2 className={styles[`${block}__title`]}>OUR PET FOOD</h2>
      <div
        className={cn(
          styles[`${block}__article-container`],
          styles[`${block}--show`],
        )}
      >
        <Article
          image={"/bull-perfect.svg"}
          title={"BEEFY BUDDY"}
          content={
            "Beef, Eggs, Beef Liver, Beef Heart, Spinach, Kale, Shiitake Mushrooms, Eggshell powder, Hemp seed, Wheat germ oil, Sunflower seeds, Himalayan pink salt, Kelp Powder"
          }
          imageStyleName={styles[`${block}__bull-image`]}
          customStyles={customStyles}
        />
        <Article
          image={"/pig-perfect.svg"}
          title={"THIS LITTLE PIGGY"}
          content={
            "Pork, Pork Heart, Pork Liver, Broccoli, Spinach, Egg, Eggshell Powder, Pumpkin Seed, Hemp Seed, Ginger, Himalayan pink Salt, kelp powder"
          }
          imageStyleName={styles[`${block}__pig-image`]}
          customStyles={customStyles}
        />
        <Article
          image={"/chicken-perfect.svg"}
          title={"CACKALAKY CHICKEN"}
          content={
            "Chicken, Chicken Hearts, Chicken Liver, Whole Eggs, Spinach, Shiitake Mushrooms, Sesame Seeds, Eggshell Powder, Hemp Seeds, Wheat Germ Oil, Himalayan Pink Salt, Kelp Powder"
          }
          imageStyleName={styles[`${block}__chicken-image`]}
          customStyles={customStyles}
        />
        <Article
          image={"/oyster-perfect.svg"}
          title={"SURF'S UP"}
          content={
            "Oyster, Tilapia, Broccoli, Parsley Carrot, Sunflower Oil, Balance IT® Canine Plus Supplement"
          }
          imageStyleName={styles[`${block}__oyster-image`]}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default FoodSelection;
