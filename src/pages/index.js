import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import clock730 from '../images/icons/clock-730.svg'
import clock230 from '../images/icons/clock-230.svg'
import makeAWish from '../images/maw.svg'
import Lightbox from 'react-image-lightbox'
import {graphql} from 'gatsby'
import 'react-image-lightbox/style.css'
import Img from 'gatsby-image'
import Slider from "react-slick"
import {fluidImage, fluidImageTablet, fluidImageMobile} from 'components/GatsbyImage/GatsbyImage'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'

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
    slidesToShow: 1,
    variableWidth: true,
    touchThreshold: 200,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                focusOnSelect: false,
                centerMode: false,
                arrows: false
            }
        }
    ]
};

class IndexPage extends Component {
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

        console.log("max", this.props.data.allGalleryJson.edges.length - 1)
        this.setState({
            maxIndex: this.props.data.allGalleryJson.edges.length - 1
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

        const items = this.props.data.allGalleryJson.edges

        let images = []

        const galleryItems = items.map((item, i) => {
            images.push(item.node.image.childImageSharp.fluid.src)
            return (
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
                        className="photo-wrapper__img d-none d-sm-block"
                    />
                    <Img
                        fixed={item.node.thumbMobile.childImageSharp.fixed}
                        alt=""
                        className="photo-wrapper__img d-block d-sm-none"
                    />
                    <div className="photo-wrapper__bg"/>
                </div>
            )
        })

        return (
            <Layout
                headData={headData}
                headerImage={this.props.data.headerImage.childImageSharp.fluid}
                headerImageTablet={this.props.data.headerImageTablet.childImageSharp.fluid}
                headerImageMobile={this.props.data.headerImageMobile.childImageSharp.fluid}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">
                        <Container fluid={true} className="container--gray py-4">
                            <Container>
                                <p className="text--smaller">“BIG” Written by Gary Ross and Anne Spielberg. A Twentieth
                                    Century Fox Film.<br/><br className="d-sm-none"/><br className="d-sm-none"/>
                                    Book by <span className="text--basic text-uppercase">John Weidman</span> Music
                                    by <span className="text--basic text-uppercase">David Shire</span> Lyrics by <span
                                        className="text--basic text-uppercase">Richard Maltby</span></p>

                                <p className="narrow-container bigger-lh-xs">
                                    Josh Baskin is twelve and life sucks, until one night at a carnival his wish to be
                                    big is granted. Now, trapped in an adult body in a grown-up world, he’s asking: is
                                    being big all it’s cracked up to be?
                                    Don’t miss the hilarious, heartwarming big-hearted musical as it lights up London’s
                                    Dominion Theatre for nine weeks only this Autumn.
                                </p>
                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4">
                            <Container>
                                <h3 className="text--red text-uppercase">Performance times</h3>

                                <ul className="clock__list flex">
                                    <li>
                                        <img src={clock730} alt="7:30 PM" className="img-fluid"/>
                                        <p>
                                            <span className="text-uppercase">Monday - Saturday</span>
                                            <br/>
                                            <span className="text--bold">7.30pm</span>
                                        </p>
                                    </li>
                                    <li>
                                        <img src={clock230} alt="2:30 PM" className="img-fluid"/>
                                        <p>
                                            <span className="text-uppercase">Thursday & Saturday</span>
                                            <br/>
                                            <span className="text--bold">2.30pm</span>
                                        </p>
                                    </li>
                                </ul>
                            </Container>
                        </Container>

                        <Container fluid={true} className="container--dark-gray py-4">
                            <Container>
                                <ul className="button-list">
                                    <li><div className="btn btn--red"><a className="btn-book-tickets" href="https://www.nederlander.co.uk/whats-on/big" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                    <li><a href="tel:+443452007892" target="_blank" rel="noreferrer noopener"
                                           className="btn btn--red">call 0345 200 7892</a></li>
                                    <li><a
                                        href="https://www.google.com/maps/place/Dominion+Theatre/@51.5167185,-0.1323594,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b2d6954b527:0xa11d7ff34a8e1347!8m2!3d51.5167185!4d-0.1301707"
                                        target="_blank" rel="noreferrer noopener" className="btn btn--red">Book in
                                        person*</a></li>
                                </ul>

                                <p>Dominion Theatre, 268-269 Tottenham Court Road, London, W1T 7AQ
                                    <br/>
                                    <span className="text--basic">*Tickets booked in person at the theatre do not incur a booking fee</span>
                                </p>

                                <a href="https://www.make-a-wish.org.uk/" target="_blank" rel="noreferrer noopener"><img src={makeAWish} className="img-fluid makeAWish" alt="Make a Wish"/></a>

                                <p className="text--small narrower-container">
                                    All tickets include a £1 donation to Make-A-Wish Foundation® UK
                                    <br/>
                                    <span className="text--smaller">Donations will be made via Make-A-Wish Promotions Limited, which passes all its taxable profits to Make-A-Wish Foundation UK. Charity Nos. 295672 (England & Wales). SCO37479 (Scotland).</span>
                                </p>

                                <ul className="button-list mt-4">
                                    <li>
                                        <h3 className="text-uppercase">Groups save!</h3>
                                        <p className="text-uppercase">BOOK AND PAY BY 23 JULY </p>
                                        <p><span className="text--bold">10+ tickets:</span> £37.50 each<br/> <span
                                            className="text--bold">25+ tickets:</span> £32.50 each </p>
                                        <p className="text-uppercase">From 24 July</p>
                                        <p><span className="text--bold">10+ tickets:</span> £42.50, <span
                                            className="text--bold">25+ tickets:</span> £37.50 each</p>
                                        <div className="mt-4">
                                            <div className="btn btn--red btn-book-now groups-save"><a href="https://www.nederlander.co.uk/group-bookings-contact?event=big" target="_blank" rel="noreferrer noopener">Book Now</a></div>
                                        </div>
                                    </li>
                                    <li>
                                        <h3 className="text-uppercase">Schools save!</h3>

                                        <p><span className="text--bold">10+ tickets:</span></p>
                                        <p>£25 each (tickets usually £74 / £64 / £54)*</p>
                                        <p><span className="text--bold">10+ tickets:</span></p>
                                        <p>£17.50 each (tickets usually £41 / £31)*</p>
                                        <p className="text-uppercase">PLUS 11<sup
                                            className="text-lowercase">th</sup> TICKET IS FREE FOR TEACHERS</p>

                                        <div className="mt-4">
                                          <div className="btn btn--red btn-book-now schools-save"><a href="https://www.nederlander.co.uk/group-bookings-contact?event=big" target="_blank" rel="noreferrer noopener">Book Now</a></div>
                                        </div>
                                    </li>
                                </ul>
                                <p className="text--basic">*Groups and Schools ticket offer valid Monday - Thursday 7.30pm and Thursday matinee 2.30pm. Excluding w/c 21 October 2019</p>
                            </Container>
                        </Container>

                        {/*<Container fluid={true} className="py-4">*/}
                        {/*    <Container className="no-padding-x-xs">*/}
                        {/*        <h3 className="text--red text-uppercase mb-4">View Trailer</h3>*/}
                        {/*        <div className="video">*/}
                        {/*            <div className="video-wrapper">*/}
                        {/*                <iframe className="video-frame" width="100%" src="https://www.youtube.com/embed/A_O5CTAPZ3o?rel=0"*/}
                        {/*                        frameBorder="0"*/}
                        {/*                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"*/}
                        {/*                        allowFullScreen/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </Container>*/}
                        {/*</Container>*/}
                        <Container fluid={true} className="py-4">
                            <Container className="no-padding-x-xs">
                                <h3 className="text--red text-uppercase mb-4">Production Gallery</h3>
                                <div className="gallery">
                                    <Slider
                                        {...settings}
                                        ref={slider => (this.carousel = slider)}
                                    >
                                        {galleryItems}
                                    </Slider>
                                    <div className="scroll-btn-wrapper">
                                        <div className="btn btn--red scroll-btn">
                                            <button
                                                className="arrow arrow--left"
                                                type="button"
                                                aria-label="Previous"
                                                aria-pressed="false"
                                                tabIndex={0}
                                                role="button"
                                                onKeyDown={this.leftClick}
                                                onClick={this.leftClick}
                                            >
                                                <span className="sr-only">Previous</span>
                                            </button>
                                            Scroll
                                            <button
                                                className="arrow arrow--right"
                                                type="button"
                                                aria-label="Next"
                                                aria-pressed="false"
                                                tabIndex={1}
                                                role="button"
                                                onKeyDown={this.rightClick}
                                                onClick={this.rightClick}
                                            >
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </div>
                                    </div>
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

export default IndexPage

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
                        fixed(width: 200) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                thumbMobile {
                    childImageSharp {
                        fixed(width: 136) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
    
    headerImage: file(relativePath: { eq: "bg-header-xl.jpg" }) {
    	...fluidImage
	}
	headerImageTablet: file(relativePath: { eq: "bg-header-md.jpg" }) {
        ...fluidImageTablet
    }
    headerImageMobile: file(relativePath: { eq: "bg-header-sm.jpg" }) {
        ...fluidImageMobile
    }
}`
