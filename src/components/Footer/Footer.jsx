import React from 'react';
import './Footer.scss';
import SocialMedia from './SocialMedia';
import boatLogo from '../../assets/images/boAt_logo.png'

const Footer = () => {
    return(
        <footer className='footer-wrapper'>
            <div className="footer">
               <nav className="footer__top">    
                    <ul className="footer__top__column">
                        <li className='footer__top__column-heading'>Categories</li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Smartwatch</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Wireless earbuds</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Neckbands</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Headphones</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Wireless Speakers</a></li>
                    </ul>

                    <ul className="footer__top__column">
                        <li className='footer__top__column-heading'>Company</li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>About boAt</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>News</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Careers</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Security</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Investor Relations</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Social Responsibility</a></li>
                    </ul>

                    <ul className="footer__top__column">
                        <li className='footer__top__column-heading'>Help</li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Track Order</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>About Us</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Contact Us</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Return Policy</a></li>
                        <li><a href="https://www.boat-lifestyle.com/" className='footer__top__column-link'>Terms of Usage</a></li>
                    </ul>

                    <ul className="footer__top__column social-connect">
                        <div className="footer__top__column-logo">
                            <img src={boatLogo} alt="Boat Logo" />
                        </div>
                        <form action="" className='footer__subscribe-form'>
                            <input type="email" name="email" placeholder='Enter your email' required className='footer__subscribe-form-input' />
                            <input type="submit" className='footer__subscribe-form-btn' value="Subscribe"/>
                        </form>
                        <SocialMedia/>
                    </ul>                   
                </nav>

                <div className='footer__bottom'>
                    <span> &copy; 2023 boAt. All Rights Reserved.</span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
