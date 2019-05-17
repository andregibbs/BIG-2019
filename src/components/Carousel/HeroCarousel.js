import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import HeroCarouselItem from 'components/Carousel/HeroCarouselItem'

const HeroCarousel = ({data}) => (
    <div className="container-content-max heroCarousel">
        <HeroCarouselItem data={data.allCarouselJson.edges}/>
    </div>
);