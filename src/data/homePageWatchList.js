import flashPlus from '../assets/images/flash-plus.webp';
import waveSigma from '../assets/images/wave-sigma.webp';
import stormPlus from '../assets/images/storm-plus.webp';
import lunarSpace from '../assets/images/lunar-space.webp';

const homePageFeatureListJson = {
    featureList : [
      {
        id:1,
        productName: 'Flash Plus',
        label: 'New Launch',
        imageSrc: flashPlus,
        rating: '4.2',
        feature: 'AMOLED Display',
        actualPrice: '6499',
        discountPercentage: '72',
        descriptionPageId:'flashPlus'
      },
      {
        id:2,
        productName: 'Wave Sigma',
        label: 'Best Seller',
        imageSrc: waveSigma,
        rating: '4.5',
        feature: 'BT Calling',
        actualPrice: '7499',
        discountPercentage: '80',
        descriptionPageId:'waveSigma'
      },
      {
        id:3,
        productName: 'Storm Plus',
        label: 'Trending',
        imageSrc: stormPlus,
        rating: '5',
        feature: 'AMOLED Display',
        actualPrice: '8999',
        discountPercentage: '74',
        descriptionPageId:'stormPlus'
      },
      {
        id:4,
        productName: 'Lunar Space',
        label: 'New Launch',
        imageSrc: lunarSpace,
        rating: '4.8',
        feature: 'BT Calling',
        actualPrice: '5990',
        discountPercentage: '68',
        descriptionPageId:'lunarSpace'
      }
    ]   
};

export default homePageFeatureListJson;