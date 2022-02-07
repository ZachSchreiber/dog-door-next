import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import pawSvg from "../assets/paw-logo-blue-perfect.svg";
import Drawer from "../drawer";

import styles from "./drawer-header.module.scss";

const DrawerHeader = ({ showHeader }) => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        onClose={onToggle}
        titleElementId={"fun"}
        setFocusOnOpen={true}
        position="end"
      >
        <div>
        <div className={styles.closeDrawer}>
          <div className={styles.closeDrawer__titleContainer}>
            <span className={styles.closeDrawer__titleText}>Menu</span>
            <div>
            <Image className={styles.closeDrawer__logo} src={pawSvg} alt="drawer logo"  />
            </div>
          <button className={styles.closeDrawer__button}>
            <FontAwesomeIcon icon={faTimes} onClick={onToggle} />
          </button>
          </div>
        </div>
        </div>
        <section className={styles.links}>
          <Link href={"/"}>
          <a className={cn(styles[`links__item${pathname === "/" ? "--active" : ""}`])}><span className={styles.links__text}>HOME</span></a>
          </Link>
          <Link
            href={"/pet-food"}
          >
             <a  className={cn(
              styles[`links__item${pathname === "/pet-food" ? "--active" : ""}`]
            )}><span className={styles.links__text}>PET FOOD</span></a>
          </Link>
          <Link
         
            href={"/dog-brews"}
  
          >
           <a    className={cn(
              styles[`links__item${pathname === "/dog-brews" ? "--active" : ""}`]
            )}><span className={styles.links__text}>DOG BREWS</span></a>
          </Link>
          <Link
            className={cn(
              styles[`links__item${pathname === "/meet-the-pack" ? "--active" : ""}`]
            )}
            href={"/meet-the-pack"}
          >
            <a   className={cn(
              styles[`links__item${pathname === "/meet-the-pack" ? "--active" : ""}`]
            )}><span className={styles.links__text}>MEET THE PACK</span></a>
          </Link>
          <Link
            className={cn(
              styles[`links__item${pathname === "/order-online" ? "--active" : ""}`]
            )}
            href={"/local-suppliers"}
          >
           <a   className={cn(
              styles[`links__item${pathname === "/order-online" ? "--active" : ""}`]
            )}><span className={styles.links__text}>LOCAL SUPPLIERS</span></a>
          </Link>
          {/* <Link
            className={cn(
              styles[`links__item${pathname === "/order-online" ? "--active" : ""}`]
            )}
            href={"/order-online"}
          >
           <a   className={cn(
              styles[`links__item${pathname === "/order-online" ? "--active" : ""}`]
            )}><span className={styles.links__text}>ORDER ONLINE</span></a>
          </Link> */}
        </section>
      </Drawer>
      <button className={styles.menu} onClick={onToggle}>
        <span className={styles.menu__text}>Menu</span>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className={cn(
          styles.header,
          showHeader === "show" && styles["header--show"],
          showHeader === "hide" && styles["header--hide"]
        )}
      >
        <div className={styles.header__content}>
          <Link href={"/"}>
            <a>
            <h1 className={styles.header__text}>Dog Door Pet Food</h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DrawerHeader;
