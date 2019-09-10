import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import {graphql} from 'gatsby'
import 'react-image-lightbox/style.css'
import Img from 'gatsby-image'
import Slider from "react-slick"
import HeroCarousel from 'components/Carousel/HeroCarousel'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'
import playIcon from 'images/icons/play.png'

const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
};

const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToScroll: 1,
    draggable: true,
    slidesToShow:1,
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

class FindOutMore extends Component {
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
            maxIndex: this.props.data.allGalleryJson.edges.length - 1
        })
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
        const {isOpen, photoIndex, modalOpen, videoId} = this.state

        const allGalleryJson = this.props.data.allGalleryJson.edges

        const allRehearsalJson = this.props.data.allRehearsalJson.edges

        const allVideosJson = this.props.data.allVideosJson.edges

        let images = this.node.thumb.childImageSharp.fixed

        const galleryItems = allGalleryJson.map((item, i) => {
            images.push(item.node.image.childImageSharp.fluid.src)
            return (
              <Col key={i}>
            
                <div
                    tabIndex={i} role="button" aria-pressed="false"
                    className={`photo-wrapper`}
                    data-name={`${item.node.name}`}
                    onClick={() => this.setState({photoIndex: i, isOpen: true})}
                    onKeyDown={() => this.setState({photoIndex: i, isOpen: true})}
                    key={i}
                >
                    <Img
                        fixed={item.node.thumb.childImageSharp.fixed}
                        alt=""
                        className="photo-wrapper__img d-sm-block"
                    />
                  <div className="photo-wrapper__bg"/>
                </div>
                {/*<p className="promo-title">{`${item.node.name}`}</p>*/}
              </Col>
            )
        })

        const rehearsalItems = allRehearsalJson.map((item, i) => {
            images.push(item.node.image.childImageSharp.fluid.src)
            return (
              <Col key={i}>

                <div
                    tabIndex={i} role="button" aria-pressed="false"
                    className={`photo-wrapper`}
                    data-name={`${item.node.name}`}
                    onClick={() => this.setState({photoIndex: i, isOpen: true})}
                    onKeyDown={() => this.setState({photoIndex: i, isOpen: true})}
                    key={i}
                >
                    <Img
                        fixed={item.node.thumb.childImageSharp.fixed}
                        alt=""
                        className="photo-wrapper__img d-sm-block"
                    />
                  <div className="photo-wrapper__bg"/>
                </div>
                {/*<p className="promo-title">{`${item.node.name}`}</p>*/}
              </Col>
            )
        })

         const videoItems = allVideosJson.map((item, i) => {
            return (
              <Col md={6} lg={3} className="video" key={i}>
                <div 
                    tabIndex={i} role="button" aria-pressed="false"
                    className={`videoimg-wrapper`}
                    data-name={`${item.node.name}`}
                    onClick={() => this.setState({ videoId: item.node.video, modalOpen: true })}
                    onKeyDown={() => this.setState({photoIndex: i, isOpen: true})}
                    key={i}
                >
                    <Img
                        fixed={item.node.image.childImageSharp.fixed}
                        alt=""
                        className="image-wrapper__img w-100"
                    />

                    <img onClick={() => this.setState({ videoId: item.node.video, modalOpen: true })} src={playIcon} alt="" className="play-icon" />
                    <div className="photo-wrapper__bg"/>
                </div>

                 <p className="promo-title">{`${item.node.name}`}</p>
               </Col>
            )
        })

        return (
            <Layout
                headData={headData}
                headerImage={this.props.data.headerImage.childImageSharp.fluid}
                headerImageTablet={this.props.data.headerImageTablet.childImageSharp.fluid}
                headerImageMobile={this.props.data.headerImageMobile.childImageSharp.fluid}
                headerTitle="Find out more"
                headerClasses={true}
                displayLogo={true}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">


                    <Container fluid={true} className="py-4">
                            <Container className="no-padding-x-xs">
                                <div className="video">
                                    <div className="video-wrapper">
                                        <iframe className="video-frame" width="100%" src="https://www.youtube.com/embed/A_O5CTAPZ3o?rel=0"
                                                frameBorder="0"
                                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen/>
                                    </div>
                                </div>
                            </Container>
                        </Container>

                        <Container fluid={true} className="container--gray py-4">
                            <Container>
                                <p className="narrow-container bigger-lh-xs">
                                    Don’t miss the West End musical for the big kid in all of us, <strong>BIG!</strong>
                                </p>

                                <p className="narrow-container bigger-lh-xs my-3">
                                    Based on the smash hit movie, this heart-warming musical is full of some of the best talent in the West End with a cast and orchestra of over 50, packed with BIG fun for everyone. Starring&nbsp;<strong>Jay McGuiness&nbsp;</strong>(<em>Strictly</em>&nbsp;champion,&nbsp;<em>Rip it Up</em>,&nbsp;<em>The Wanted</em>) as Josh alongside some of TV&rsquo;s most popular stars:&nbsp;<strong>Wendi Peters</strong> (<em>Coronation Street</em>,&nbsp;<em>Hetty Feather</em>,&nbsp;<em>White Christmas</em>),<strong>&nbsp;Kimberley Walsh</strong>&nbsp;(<em>Shrek the Musical</em>,&nbsp;<em>Elf the Musical</em>,&nbsp;<em>Strictly Come Dancing</em>&nbsp;and&nbsp;<em>Girls Aloud</em>) and the Olivier Award-winning actor&nbsp;<strong>Matthew Kelly</strong>&nbsp;(<em>Waiting for Godot</em>,&nbsp;<em>Of Mice and Men</em>&nbsp;and TV&rsquo;s&nbsp;<em>Stars in Their Eyes</em>).
                                </p>
                                <p className="narrow-container bigger-lh-xs">
                                    Josh Baskin is twelve and life sucks, until one night at a carnival his wish to be big is granted. Now, trapped in an adult body in a grown-up world, he’s asking: is being big all it’s cracked up to be? 
                                </p>
                            </Container>
                        </Container>

                        <Container className="py-5">
                          <h3 className="text--red text-uppercase mb-4">Video Gallery</h3>
                          <Row className="justify-content-center">
                             {videoItems}
                           </Row>
                        </Container>

                        <Container fluid={true} className="py-4 container--dark-gray">
                            <Container className="no-padding-x-xs">
                                <h3 className="text-uppercase mb-4">Show Photography<br/>Theatre Royal Plymouth Cast 2016</h3>
                                <div className="gallery">
                                    <Slider
                                        {...settings}
                                        ref={slider => (this.carousel = slider)}
                                    >
                                        {galleryItems}
                                    </Slider>
                                </div>
                                <h3 className="text-uppercase my-5">LONDON REHEARSALS – AUGUST 2019</h3>
                                <div className="gallery">
                                    <Slider
                                        {...settings}
                                        ref={slider => (this.carousel = slider)}
                                    >
                                        {rehearsalItems}
                                    </Slider>
                                </div>
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
                        onCloseRequest={() => this.setState({isOpen: false})}
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
                <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId} />
            </Layout>
        );

    }
}

export default FindOutMore

export const GalleryPageQuery = graphql`
query {
    allGalleryJson {
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
    allVideosJson {
        edges {
            node {
                id
                name
                video
                image {
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
