import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import clock730 from '../images/icons/clock-730.svg'
import clock230 from '../images/icons/clock-230.svg'
import makeAWish from '../images/MAW-supporting.svg'
import {graphql} from 'gatsby'
import 'react-image-lightbox/style.css'


const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
};

class TicketPage extends Component {

    render() {
        return (
            <Layout
                headData={headData}
                headerImage={this.props.data.headerImage.childImageSharp.fluid}
                headerImageTablet={this.props.data.headerImageTablet.childImageSharp.fluid}
                headerImageMobile={this.props.data.headerImageMobile.childImageSharp.fluid}
                headerTitle="Ticket Information"
                displayLogo={true}
            >
                <section className="page HomePage">
                    <div className="HomePage__content">

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

                        <Container fluid={true} className="py-4">
                        <Container className="no-padding-x-xs">
                        <ul className="footer__buttons py-2">
                        <li><a href="https://goo.gl/maps/RB2bUcecTkR2" target="_blank" rel="noreferrer noopener"
                        className="btn btn--dark-gray">Getting here</a></li>
                        <li><a
                        href="https://www.nederlander.co.uk/dominion-theatre/plan-your-visit-dominion-theatre/frequently-asked-questions"
                        target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">FAQ</a></li>
                        <li><a href="https://www.nederlander.co.uk/dominion-theatre/plan-your-visit-dominion-theatre"
                        target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">Access Information</a>
                        </li>
                        <li><a href="https://www.nederlander.co.uk/dominion-theatre/vip-hospitality" target="_blank"
                        rel="noreferrer noopener" className="btn btn--dark-gray">VIP & Hospitality</a></li>
                        </ul>
                        </Container>
                        </Container>
                    </div>
                </section>
            </Layout>
        );

    }
}

export default TicketPage

export const GalleryPageQuery = graphql`
query {
    
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
