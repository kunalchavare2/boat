import React from 'react';
import './VideoCarousel.scss';
import HeadPhones from "../../assets/videos/headphones.mp4"
import neckband from "../../assets/videos/neckbands.mp4"
import smartwatches from "../../assets/videos/smartwatches.mp4"
import earbuds from "../../assets/videos/wireless-earbuds.mp4"
import speakers from "../../assets/videos/wireless-speakers.mp4"
import VideoCarouselItem from "../VideoCarousel/VideoCarouselItem"
import SectionHeader from '../SectionHeader/SectionHeader';

function VideoCarousel() {
    return (
        <React.Fragment>
            <SectionHeader headerLight={"Best"} headerbold={"Sellers"}/>
            <div className='video-carousel'>
                <VideoCarouselItem src={smartwatches} heading={"smart watches"}/>
                <VideoCarouselItem src={earbuds} heading={"wireless earbuds"}/>
                <VideoCarouselItem src={neckband} heading={"neckbands"}/>
                <VideoCarouselItem src={HeadPhones} heading={"head phones"}/>
                <VideoCarouselItem src={speakers} heading={"wireless speakers"}/>
            </div>
        </React.Fragment>
    )
}

export default VideoCarousel;