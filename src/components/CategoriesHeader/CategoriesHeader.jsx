import './CategoriesHeader.scss';

const CategoriesHeader = (props) => {

    const sendIdToParent = (event) => {
        const previousActivBtn = document.querySelector('.categories-header__list .active');
        previousActivBtn.classList.remove('active');
        const id = event.target.getAttribute("data-category");
        props.sendDataToParent(id);
        event.target.classList.add('active');
    }

    
    return (
        <nav className="categories-header">
           <ul className="categories-header__list">
                <li><button onClick={sendIdToParent} data-category="bestSeller" className='active'>Best Sellers</button></li>
                <li><button onClick={sendIdToParent} data-category="topEarBuds">Top Earbuds</button></li>
                <li><button onClick={sendIdToParent} data-category="topWatches">Top Watches</button></li>
                <li><button onClick={sendIdToParent} data-category="trendingWireLess">Trending Wireless</button></li>
           </ul>
        </nav>
    )
}

export default CategoriesHeader;