import React from 'react';
import watchImg from '../../assets/images/watch-img.jpg'
import '../../components/FeatureDescription/FeatureDescription.scss'


const FeatureDescription = () => {
    return (
        <ul className="feature-container">
        <li class="feature-item">
           <div className="feature-item__text">
            <h2>Unparalleled Clarity</h2>
            <p>See your day unfold on a bigger and brighter 2.01” HD display, that makes every swipe, every notification, and every activity, a seamless viewing experience.</p>
           </div>
           <div className="feature-item__media">
            <img src={watchImg} alt="flashplus" />
            </div>
        </li>
    </ul>
    )

}

    

export default FeatureDescription;
