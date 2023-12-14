import React from "react";
import ProductImg from "../../assets/images/product-img1.png";
import Paytm from "../../assets/images/paytm.svg";
import gpay from "../../assets/images/gpay.svg";
import phonepe from "../../assets/images/phonepe.svg";
import mobwik from "../../assets/images/mobiwik.webp";
import "../../components/FeatureHeroBanner/FeatureHeroBanner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faCartShopping} from "@fortawesome/free-solid-svg-icons";

const FeatureHeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__left">
        <img src={ProductImg}></img>
      </div>
      <div className="hero-banner__right">
        <div className="hero-banner__right-desc">
          <span>
            <FontAwesomeIcon icon={faStar} />
            Be first to review
          </span>
          <h2>Wave Sigma</h2>
          <p>
            Smartwatch with 2.01" HD Display, BT Calling, Powered by Crest+ OS,
            700+ Active Modes
          </p>
        </div>
        <div className="hero-banner__right-price">
          <span className="hero-banner__right-price__highlight">₹1,499</span>
          <span className="hero-banner__right-price__striked">7,499.00</span>
          <span className="hero-banner__right-price__discount">80% Off</span>
        </div>
        <div className="hero-banner__payment">
          <div className="hero-banner__payment__top offer">
            <div className="hero-banner__payment__top-desc offer-desc">
              <h3>₹15 off on All UPI Payments</h3>
            </div>
            <div className="hero-banner__payment__top-icons offer-icons">
              <a href="#">
                <img src={Paytm} alt="payTM" />
              </a>
              <a href="#">
                <img src={gpay} alt="gpay" />
              </a>
              <a href="#">
                <img src={phonepe} alt="phonepe" />
              </a>
            </div>
          </div>
          <div className="hero-banner__payment__bottom offer">
            <div className="hero-banner__payment__bottom-desc offer-desc">
              <h3>Flat 5% cashback upto ₹75 on orders above ₹1499</h3>
            </div>
            <div className="hero-banner__payment__bottom-icons offer-icons">
              <a href="#">
                <img src={mobwik} alt="mobwik" />
              </a>
            </div>
          </div>
          <div className="hero-banner__right-btn">
            <a class="hero-banner__right-btn__addtocart" href="#"><FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureHeroBanner;
