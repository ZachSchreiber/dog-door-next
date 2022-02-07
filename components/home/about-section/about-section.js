import useScroll from "../../../utils/use-scroll";
import StandardContainer from "../../standard-container/standard-container";

import styles from "./about-section.module.scss";

const block = "about-section";

const About = () => {
  const [bbox, ref] = useScroll();

  return (
    <StandardContainer
      title="WHAT WE DO"
      image="/we-are-brown-dog.png"
      imageRight
      imageClassName={styles[`${block}__image`]}
    >
      <>
        <p className={styles[`${block}__description`]}>
          Dog Door Pet Food is Durham&lsquo;s premier Farm-To-Fido pet food
          company.
        </p>
        <p className={styles[`${block}__description`]}>
          We offer pet food, dog brews, and other products made with simple,
          locally sourced ingredients.
        </p>
      </>
    </StandardContainer>
  );
};

export default About;
