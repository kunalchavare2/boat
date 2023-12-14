import './SectionHeader.scss'

const SectionHeader = (props) => {
   return(
     <div className="section-header">
        <h3 className="section-header__title">
            <span className="section-header__title-light">{props.headerLight}</span>&nbsp;
            <span className="section-header__title-bold">{props.headerbold}</span>
        </h3>
        <a href="https:www.google.com" className='section-header__link'>View All</a>
    </div>
   )
}       

export default SectionHeader;