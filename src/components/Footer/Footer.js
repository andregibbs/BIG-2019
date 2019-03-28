import React from 'react'
import {Link} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import DominionLogo from 'images/Logo-DominionTheatre.svg'

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row>
                <Col xs={12} className="footer__column">
                    <ul className="footer__buttons">
                        <li><a href="https://goo.gl/maps/RB2bUcecTkR2" target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">Getting here</a></li>
                        <li><a href="https://www.nederlander.co.uk/dominion-theatre/plan-your-visit-dominion-theatre/frequently-asked-questions" target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">FAQ</a></li>
                        <li><a href="https://www.nederlander.co.uk/dominion-theatre/plan-your-visit-dominion-theatre" target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">Access Information</a></li>
                        <li><a href="https://www.nederlander.co.uk/dominion-theatre/vip-hospitality" target="_blank" rel="noreferrer noopener" className="btn btn--dark-gray">VIP & Hospitality</a></li>
                    </ul>
                </Col>
                <Col xs={12} className="footer__column">
                    <a href="https://www.nederlander.co.uk/whats-on/white-christmas/dates" target="_blank"
                       rel="noopener noreferrer">
                        <img src={DominionLogo} alt="logo" className={`DominionLogo`}/>
                    </a>
                </Col>
                <Col xs={12} className="footer__column">
                    <ul className="footer__links">
                        <li><Link to="/privacy/">Privacy Policy</Link></li>
                        <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                        <li>Designed and built by <a href="https://www.dewynters.com/"
                                                     target="_blank"
                                                     rel="noopener noreferrer">Dewynters</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer