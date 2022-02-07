import HtmlHead from "../../components/html-head";
import DrawerHeader from "../../components/drawer-header";
import FoodOverview from "../../components/food/food-overview";
import RawSelection from "../../components/food/food-selection";

import styles from "./pet-food.module.scss";

const PetFood = () => {
  return (
    <div className={styles.petFood}>
      <HtmlHead
        pageTitle="Pet Food"
        content="Dog Door Pet Food offers several pet food options for dogs. Meats
        and seasonal vegetables are sourced from local farms and businesses."
      />
      <DrawerHeader showHeader={"show"} />
      <FoodOverview />
      <RawSelection />
    </div>
  );
};

export default PetFood;
