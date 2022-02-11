import { Component } from "react";
import Link from "next/link";
import cn from "classnames";
import DrawerHeader from "../components/drawer-header";
import AboutSection from "../components/home/about-section";
import TryOurProducts from "../components/home/try-our-products";
import WhereToPurchase from "../components/home/where-to-purchase";
import GetInTouch from "../components/home/get-in-touch";
import HtmlHead from "../components/html-head";
import ShopTab from "../components/shop-tab/shop-tab";

import styles from "./home.module.scss";

class Home extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    showHeader: "",
  };

  handleScroll = () => {
    const mainRefPosition = 
      this.mainRef.getBoundingClientRect().bottom;
    if (mainRefPosition <= 300) {
      this.setState({ showHeader: "show" });
    } else {
      this.setState(prevState => ({
        showHeader:
          prevState.showHeader === "show" ? "hide" : prevState.showHeader
      }));
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo({
      top: 0,
      left: 0
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className={styles.container}>
       <ShopTab />
      <HtmlHead pageTitle="Dog Door" content="Dog Door Pet Food is Durham's premier Farm-To-Fido pet food company. We offer pet food, dog brews, and other products made with simple, locally sourced ingredients."/> 
        <DrawerHeader showHeader={this.state.showHeader} />
        <div className={styles.main} ref={node => this.mainRef = node}>
          <div className={styles.logoContainer}>
              <span className={styles.logoBase}>
              <img
              src="/new-logo-no-paw-white.svg"
              alt="dog door logo"
            />
              </span>
            <img className={cn(styles.paw,  styles.slam)}  src="/paw-logo-white-perfect.svg"     
             alt="dog door logo" />
          </div>
        </div>
        <div className={styles.orderOnlineSection}>
        <h1 className={styles.orderOnlineSection__link}>
            <Link href="https://dog-door-pet-food.square.site/">
            <a target="_blank">Order Online</a>
            </Link>
          </h1>
        </div>
        <AboutSection />
        <TryOurProducts />
        <WhereToPurchase />
        <GetInTouch />
      </ div>
    );
  }
}

export default Home;
