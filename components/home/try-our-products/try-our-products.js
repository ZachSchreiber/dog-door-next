import Link from "next/link";
import cn from "classnames";
import Article from "../../article";
import bluePaw from "../../assets/paw-logo-blue-perfect.svg";
import beerBottle from "../../assets/beer-bottle-perfect.svg";
import dogBowl from "../../assets/dog-bowl-perfect.svg";

import styles from "./try-our-products.module.scss";

const block = "try-our-products";

const TryOurProducts = () => {
  return (
    <div className={styles[block]}>
      <h2 className={styles[`${block}__title`]}>OUR PRODUCTS</h2>
      <div className={cn(styles[`${block}__article-container`], styles[`${block}--show`])}>
        <Link href={"/pet-food"}>
          <a className={styles[`${block}__link`]}>
          <Article
            image="/dog-bowl-perfect.svg"
            title={"PET FOOD"}
            content={
              "Support your pet's health by feeding them a healthy diet."
            }
          />
          </a>
        </Link>
        <Link href={"/dog-brews"}>
          <a className={styles[`${block}__link`]}>
          <Article
            image="/beer-bottle-perfect.svg"
            title={"DOG BREWS"}
            content={
              "A refreshing and healthy treat made exclusively for your furry friend."
            }
          />
          </a>
        </Link>
        <Article
          image="/paw-logo-blue-perfect.svg"
          title={"AND MORE..."}
          content={"Treats, pet care products, toys, and more!"}
          isPaw={true}
        />
      </div>
    </div>
  );
};

export default TryOurProducts;
