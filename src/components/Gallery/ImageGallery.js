import React, { Component } from 'react'
import Layout from 'components/Layout'
import { Container, Row, Col } from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import { graphql } from 'gatsby'
import 'react-image-lightbox/style.css'
import Img from 'gatsby-image'
import Slider from "react-slick"


const settings = {
  dots: false,
  infinite: true,
  focusOnSelect: true,
  speed: 500,
  slidesToScroll: 1,
  draggable: true,
  slidesToShow: 1,
  swipeToSlide: true,
  variableWidth: true,
  touchThreshold: 200,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        focusOnSelect: false,
        centerMode: true,
        arrows: true
      }
    }
  ]
};

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      modalOpen: false,
      slideIndex: 0,
      maxIndex: 1,
      videoId: 'A_O5CTAPZ3o'
    }
  }

  componentDidMount() {

    this.setState({
      maxIndex: this.props.data.allRehearsalJson.edges.length - 1
    })
  }

  toggleModal = (e) => {
    e.preventDefault();

    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  changeSliders = (next) => {
    setTimeout(() => {
      this.carousel.slickGoTo(next)
    }, 200)

    this.setState({
      slideIndex: next
    })
  }

  imgClick = (id) => {
    this.setState({
      slideIndex: id
    })
    this.changeSliders(id)
  }

  leftClick = () => {
    this.imgClick(this.state.slideIndex === 0 ? this.state.maxIndex : (this.state.slideIndex - 1))
  }

  rightClick = () => {
    this.imgClick(this.state.slideIndex === this.state.maxIndex ? 0 : (this.state.slideIndex + 1))
  }

  render() {
    const { isOpen, photoIndex } = this.state

    const allRehearsalJson = this.props.data.allRehearsalJson.edges


    let images = []

    const rehearsalItems = allRehearsalJson.map((item, i) => {
      images.push(item.node.image.childImageSharp.fluid.src)
      return (
        <Col key={i}>

          <div
            tabIndex={i} role="button" aria-pressed="false"
            className={`photo-wrapper`}
            data-name={`${item.node.name}`}
            onClick={() => this.setState({ photoIndex: i, isOpen: true })}
            onKeyDown={() => this.setState({ photoIndex: i, isOpen: true })}
            key={i}
          >
            <Img
              fixed={item.node.thumb.childImageSharp.fixed}
              alt=""
              className="photo-wrapper__img d-sm-block"
            />
            <div className="photo-wrapper__bg" />
          </div>
          {/*<p className="promo-title">{`${item.node.name}`}</p>*/}
        </Col>
      )
    })



    return (
      <div>


        <section className="page HomePage">
          <div className="HomePage__content">


            <Container fluid={true} className="py-4 container--dark-gray">
              <Container className="no-padding-x-xs">
                <h3 className="text-uppercase mb-4">Show Photography<br />Theatre Royal Plymouth Cast 2016</h3>
                <div className="gallery">
                  <Slider
                    {...settings}
                    ref={slider => (this.carousel = slider)}
                  >
                    {rehearsalItems}
                  </Slider>
                </div>
                {/* <ImageGallery /> */}
              </Container>
            </Container>
          </div>
        </section>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageCaption={''}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );

  }
}

export default ImageGallery

export const GalleryPageQuery = graphql`
query {
    allRehearsalJson {
        edges {
            node {
                id
                name
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                thumb {
                    childImageSharp {
                        fixed(width: 300) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
  
  
    
    headerImage: file(relativePath: { eq: "keyboard-xl.jpg" }) {
    	...fluidImage
	}
	headerImageTablet: file(relativePath: { eq: "keyboard-md.jpg" }) {
        ...fluidImageTablet
    }
    headerImageMobile: file(relativePath: { eq: "keyboard-sm.jpg" }) {
        ...fluidImageMobile
    }
}`
