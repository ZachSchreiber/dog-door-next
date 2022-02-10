import { useEffect } from "react";
import cn from "classnames";
import HtmlHead from "../../components/html-head";
import DrawerHeader from "../../components/drawer-header";

import styles from "./local-suppliers.module.scss";

const block = "local-suppliers";

const LocalSuppliers = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }, []);

  return (
    <>
      <HtmlHead
        pageTitle="Local Suppliers"
        content="Local farms that supply the majority of our ingredients."
      />
     
          <div className={block}>
      <DrawerHeader showHeader={"show"} />
      <div className={styles[`${block}__container`]}>
      <div className={cn(styles[`${block}__container-left`], styles[`${block}--show`])}>
          <div className={cn(styles[`${block}__article`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/little-way-new.png"}
                className={cn(styles[`${block}__article--image`])}
                alt="Razzo"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              LITTLE WAY FARM
            </h3>
            <p className={styles[`${block}__article--content`]}>
            Michelle and Joe provide for us pasture raised and rotationally grazed meat.
            </p>
          </div>
          <div className={cn(styles[`${block}__article`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/first-hand.jpeg"}
                className={cn(styles[`${block}__article--image`])}
                alt="Zach"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              FIRSTHAND FOODS
            </h3>
            <p className={styles[`${block}__article--content`]}>
            Firsthand Foods is a women-owned food hub that sells local meats from North Carolina farms.
            </p>
          </div>
        </div>
        <div className={styles[`${block}__title-container`]}>
        <h2 className={styles[`${block}__title-container--title`]}>LOCAL SUPPLIERS</h2>
        <div className={cn(styles[`${block}__article`], styles[`${block}__title-container--article-left`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/home-farm.jpeg"}
                className={cn(styles[`${block}__article--image`])}
                alt="Zach"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              OUR OWN BACKYARD GARDEN
            </h3>
            <p className={styles[`${block}__article--content`]}>
            We incorporate vegetables and herbs grown in our own backyard. Our small flock of hens provides eggs and endless compost to enhance our soil.
            </p>
          </div>
          <div className={cn(styles[`${block}__article`], styles[`${block}__title-container--article-right`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/fickle-creek.png"}
                className={cn(styles[`${block}__article--image`])}
                alt="Razzo"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              FICKLE CREEK FARM
            </h3>
            <p className={styles[`${block}__article--content`]}>
            Providing &ldquo;healthy food to our community through careful environmental stewardship, sustainable practices, and humane animal treatment.&ldquo;
            </p>
          </div>
        </div>
        <div className={cn(styles[`${block}__container-left`], styles[`${block}--show`])}>
          <div className={cn(styles[`${block}__article`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/carolina-pastures.jpeg"}
                className={cn(styles[`${block}__article--image`])}
                alt="Razzo"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              CAROLINA PASTURES
            </h3>
            <p className={styles[`${block}__article--content`]}>
            Pasture raised meat: &ldquo;beyond organic and sustainable (regenerative) standards using no chemicals, antibiotics or GMO’s...&ldquo;
            </p>
          </div>
          <div className={cn(styles[`${block}__article`])}>
            <div className={styles[`${block}__article--image-container`]}>
              <img
                src={"/locals-seafood-2.png"}
                className={cn(styles[`${block}__article--image`])}
                alt="Razzo"
              />
            </div>
            <h3 className={styles[`${block}__article--title`]}>
              LOCALS SEAFOOD
            </h3>
            <p className={styles[`${block}__article--content`]}>
            Fresh seafood from North Carolina fisherfolk.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LocalSuppliers;
