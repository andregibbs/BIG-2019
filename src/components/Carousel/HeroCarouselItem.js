import React, {Component} from 'react'
import Slider from 'react-slick'
import "stylesheets/vendor/slick.scss"
import "stylesheets/vendor/slick-theme.scss";

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: true,
    autoplay: true
};

class HeroCarouselItem extends Component {
    render() {

        const items = this.props.data;

        const collapseItems = items.map((item, i) => {
            return (
                <div className="carousel__item" key={i}>
                    <div className="carousel__item-content">
                        <img src={item.node.image.childImageSharp.fluid.src} alt=""
                             className="d-none d-lg-inline-block"/>
                        <img src={item.node.imageTablet.childImageSharp.fluid.src} alt=""
                             className="d-none d-sm-inline-block d-lg-none"/>
                        <img src={item.node.imageMobile.childImageSharp.fluid.src} alt=""
                             className="d-sm-none"/>
                    </div>
                </div>
            )
        });


        return (
            <Slider {...settings}>
                {collapseItems}
            </Slider>
        )
    }
}

export default HeroCarouselItem