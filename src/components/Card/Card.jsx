import React from 'react';
import './Card.scss';
import CardButton from '../Button/CardButton';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {productName, label,imageSrc, rating, feature, actualPrice, discountPercentage,descriptionPageId } = props.cardData;
    
  return (
     <li className='card'>
        <Link className="card__media" to={`feature/${descriptionPageId}`}>
            <img src={imageSrc} alt={productName+ ' Watch Image'}/>
            <span className="card__media-label">{label}</span>
         </Link>
        <div className="card__content">
            <span className="card__content-feature">{feature}</span>
            <div className="card__content-rating"><i className="fa-solid fa-star"></i> {rating}</div>
            <div className="card__content__detail">
                <div className="card__content__detail-text">
                    <h3>{productName}</h3>
                    <div className="price-detail">
                        <span className="price-detail__current">₹2,599</span>
                        <span className="price-detail__actual">₹{actualPrice}</span>
                        <span className="price-detail__discount">{discountPercentage}%</span>
                    </div>
                </div>
               <CardButton></CardButton>
            </div>
        </div>
        
    </li>
  )
}

export default Card;