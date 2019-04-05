import React from 'react'
import {Link} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import DominionLogo from 'images/Logo-DominionTheatre.svg'

const Footer = () => (
    <footer className="footer">
        <Container>
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
            <ul className="footer__links--social">
                <li>
                    <a href="https://www.facebook.com/Big-The-Musical-645434252586654/" target="_blank"
                       rel="noopener noreferrer" className="icon icon-facebook">
                        <div className="btn-social facebook">
                            <span className="sr-only">Facebook</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/BigTheMusical" target="_blank" rel="noopener noreferrer"
                       className="icon icon-twitter">
                        <div className="btn-social twitter">
                            <span className="sr-only">Twitter</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/bigthemusicaluk/" target="_blank" rel="noopener noreferrer"
                       className="icon icon-instagram">
                        <div className="btn-social instagram">
                            <span className="sr-only">Instagram</span>
                        </div>
                    </a>
                </li>
            </ul>
            <p className="py-2">
                <a href="https://www.nederlander.co.uk/whats-on/white-christmas/dates" target="_blank"
                   rel="noopener noreferrer">
                    <img src={DominionLogo} alt="logo" className="dominion-logo img-fluid"/>
                </a>
            </p>
            <ul className="footer__links py-2">
                <li><Link to="/privacy/">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                <li>Designed and built by <a href="https://www.dewynters.com/"
                                             target="_blank"
                                             rel="noopener noreferrer">Dewynters</a></li>
            </ul>
        </Container>
    </footer>
);

export default Footer