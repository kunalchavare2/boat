import React from 'react';
import './VideoCarousel.scss';
function VideoCarouselItem(props) {
    return (

        <div className="carousel-item">
            <video src={props.src} type="video/mp4" class="carousel-item__video"
                muted
                loop
                onMouseOver={(event) => event.target.play()}>
            </video>
            <h3 className='carousel-item__heading'>{props.heading}</h3>
        </div>
    )
}
export default VideoCarouselItem;