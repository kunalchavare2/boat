import React, {useState} from 'react';
import './ProductCategories.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import CategoriesHeader from '../CategoriesHeader/CategoriesHeader';
import Featurelist from '../Featurelist/Featurelist';
import categoryData from '../../data/homePageCategoryData'; //json data


const ProductCategories = () => {
    console.log(categoryData.bestSeller);
    const [featurelistData, setfeaturelistData ] = useState('bestSeller');
    
    const receivedIdFromChild = (props) => {
        setfeaturelistData(props);
    }

    return (
        <div className="product-categories">
            <SectionHeader headerLight={"Best of"} headerbold={"boAt"}/>
            <CategoriesHeader sendDataToParent={receivedIdFromChild} />
            <Featurelist cardData={categoryData[featurelistData]} />
        </div>
    )
}

export default ProductCategories;