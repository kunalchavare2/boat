import React from "react";
import './SocialMedia.scss'

const SocialMedia = () => {
    return (
        <div class="social-media">
            <h3 class="social-media__title ">Connect with us</h3>
            <ul class="social-media__icons">
                <li>
                    <a href="https://www.linkedin.com/" class="social-media__icons-item">
                        <span class="social-media__icons-item--icon-1"><i class="fa-brands fa-linkedin-in"></i></span>
                        <span class="social-media__icons-item--icon-2"><i class="fa-brands fa-linkedin-in"></i></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/" class="social-media__icons-item">
                        <span class="social-media__icons-item--icon-1"><i class="fa-brands fa-facebook-f"></i></span>
                        <span class="social-media__icons-item--icon-2"><i class="fa-brands fa-facebook-f"></i></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/" class="social-media__icons-item">
                        <span class="social-media__icons-item--icon-1"><i class="fa-brands fa-google-plus-g"></i></span>
                        <span class="social-media__icons-item--icon-2"><i class="fa-brands fa-google-plus-g"></i></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/" class="social-media__icons-item">
                        <span class="social-media__icons-item--icon-1"><i class="fa-brands fa-twitter"></i></span>
                        <span class="social-media__icons-item--icon-2"><i class="fa-brands fa-twitter"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;