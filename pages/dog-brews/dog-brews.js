import HtmlHead from "../../components/html-head";
import DrawerHeader from "../../components/drawer-header";
import BrewsOverview from "../../components/dog-brews/brews-overview";
import BarkticPorter from "../../components/dog-brews/barktic-porter";
import CarlolinaChillsner from "../../components/dog-brews/carolina-chillsner";
import MaltLicker from "../../components/dog-brews/malt-licker";

import styles from "./dog-brews.module.scss";

const DogBrews = () => {
  return (
    <div className={styles[`dog-brews`]}>
      <HtmlHead
        pageTitle="Dog Brews"
        content="Dog Door Pet Food offers several NONALCOHOLIC brews formulated
        specifically for your furry friend."
      />
      <DrawerHeader showHeader={"show"} />
      <BrewsOverview />
      <BarkticPorter />
      <CarlolinaChillsner />
      <MaltLicker />
    </div>
  );
};

export default DogBrews;
