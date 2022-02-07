import { useEffect } from "react";
import cn from "classnames";
import DrawerHeader from "../../components/drawer-header";
import HtmlHead from "../../components/html-head";

import styles from "./meet-the-pack.module.scss";

const block = "meet-the-pack";

const MeetThePack = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <HtmlHead
        pageTitle="Meet The Pack"
        content="Dog Door Pet Food offers several NONALCOHOLIC brews formulated
            specifically for your furry friend."
      />
      <div className={block}>
        <DrawerHeader showHeader={"show"} />
        <div className={styles[`${block}__container`]}>
          <h2 className={styles[`${block}__title`]}>MEET THE PACK</h2>
          <div className={cn(styles[`${block}__main-article`])}>
            <div className={styles[`${block}__main-article--image-container`]}>
              <img
                src={"/stacy.svg"}
                className={cn(styles[`${block}__main-article--image`])}
                alt="Stacy"
              />
            </div>
            <h3 className={styles[`${block}__main-article--title`]}>
              STACY GRAY, OWNER
            </h3>
            <p className={styles[`${block}__main-article--content`]}>
              A former nurse turned business owner, Stacy brings her love of
              healthy food and pets together with advocacy for quality, locally
              sourced food.
            </p>
          </div>
          <div
            className={cn(
              styles[`${block}__article-container`],
              styles[`${block}--show`],
            )}
          >
            <div className={cn(styles[`${block}__article`])}>
              <div className={styles[`${block}__article--image-container`]}>
                <img
                  src={"/razzo.svg"}
                  className={cn(styles[`${block}__article--image`])}
                  alt="Razzo"
                />
              </div>
              <h3 className={styles[`${block}__article--title`]}>
                RAZZO, QUALITY CONTROL <br /> DEPARTMENT
              </h3>
              <p className={styles[`${block}__article--content`]}>
                Razzo is our newest recruit from DAPS. He is terrible at quality
                control because he loves all the foods. Fetch is his favorite
                team building activity.
              </p>
            </div>
            <div className={cn(styles[`${block}__article`])}>
              <div className={styles[`${block}__article--image-container`]}>
                <img
                  src={"/zach.png"}
                  className={cn(styles[`${block}__article--image`])}
                  alt="Zach"
                />
              </div>
              <h3 className={styles[`${block}__article--title`]}>
                ZACH SCHREIBER, TECH SUPPORT
              </h3>
              <p className={styles[`${block}__article--content`]}>
                A talented developer, Zach keeps the crew virtually connected to
                our customers. He is an amazing cook and the world&lsquo;s most
                patient and supportive husband.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetThePack;
