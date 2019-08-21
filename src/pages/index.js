import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container} from 'reactstrap'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import 'react-image-lightbox/style.css'
import offer from "images/BIG_offer_Block.jpg"

const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
};

class IndexPage extends Component {

    render() {
        return (
            <Layout
                headData={headData}
                headerImage={this.props.data.headerImage.childImageSharp.fluid}
                headerImageTablet={this.props.data.headerImageTablet.childImageSharp.fluid}
                headerImageMobile={this.props.data.headerImageMobile.childImageSharp.fluid}
                headCopy={true}
                headerRoundal={true}
                displayLogo={false}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">
                      
                        <h2 className="d-none d-sm-block text--huge">
                            <span className="text--red text--bold letter-spacing--1">DO NOT MISS THIS STRICTLY LIMITED SEASON FROM 10 SEPTEMBER</span> <br className="d-xl-none"/><br className="d-md-none d-xl-block" /><span className="text--big text--bold letter-spacing--1">SEE THE LONDON PREMIERE EARLY AND SAVE</span>
                        </h2>
                        <h2 className="d-block d-sm-none text--big">
                            <span className="text--red text--bold letter-spacing--1">DO NOT MISS THIS STRICTLY LIMITED SEASON FROM 10 SEPTEMBER</span><br/><br/><span className="text--bold letter-spacing--1"> SEE THE LONDON PREMIERE<br className="d-md-none" /> EARLY AND SAVE</span>
                        </h2>
                        <p>Tickets from just £29.50. <br className="d-md-none" />To save book Mon-Fri performances<br className="d-md-none" /> from 10-20 September</p>

                        {/* <Container fluid={true} className="d-lg-none py-4">
                            <Container>
                             <Link className="btn-book-tickets" to="/ticket-information/" target="_blank" rel="noreferrer noopener">
                              <img src={offer} className="img-fluid offer-img"/>
                             </Link>
                            </Container>
                        </Container> */}

                        <Container fluid={true} className="py-4">
                            <Container>
                                    <ul className="button-list">
                                    <li><div className="btn btn--red"><a className="btn-book-tickets" href="https://www.nederlander.co.uk/whats-on/big/dates" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                    <li><a href="tel:+443452007892" target="_blank" rel="noreferrer noopener"
                                           className="btn btn--red">call 0345 200 7892</a></li>
                                </ul>
                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4">
                            <Container className="no-padding-x-xs">
                                <div className="video">
                                    <div className="video-wrapper">
                                        <iframe className="video-frame" width="100%" src="https://www.youtube.com/embed/YSOnOMZWaBw?rel=0"
                                                frameBorder="0"
                                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen/>
                                    </div>
                                </div>
                            </Container>
                        </Container>
                    </div>
                </section>
            </Layout>
        );

    }
}

export default IndexPage

export const GalleryPageQuery = graphql`
query {
    
    headerImage: file(relativePath: { eq: "big-header-1920.jpg" }) {
        ...fluidImage
    }
    headerImageTablet: file(relativePath: { eq: "big-header-992.jpg" }) {
        ...fluidImageTablet
    }
    headerImageMobile: file(relativePath: { eq: "big-header-576.jpg" }) {
        ...fluidImageMobile
    }
}`
