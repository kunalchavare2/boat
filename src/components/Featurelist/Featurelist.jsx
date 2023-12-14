import React from 'react';
import './Featurelist.scss';
import Card from '../Card/Card';
// import SectionHeader from '../SectionHeader/SectionHeader';

const Featurelist = (props) => {
   return( 
    <React.Fragment>
        <ul className="feature-list">            {
                props.cardData.map((item) => {
                    return ( <Card cardData={item} />)
                })
            }        
        </ul> 
    </React.Fragment>
   )
};


export default Featurelist;



