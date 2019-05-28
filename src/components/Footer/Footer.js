import React from 'react'
import {Link} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import DominionLogo from 'images/Logo-DominionTheatre.svg'

const Footer = () => (
    <footer className="footer">
        <Container>

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

            <p className="text--smaller">“BIG” Written by Gary Ross and Anne Spielberg. A Twentieth Century Fox Film.<br/>Book by <span className="text--basic text-uppercase">John Weidman</span> Music by <span className="text--basic text-uppercase">David Shire</span> Lyrics by <span className="text--basic text-uppercase">Richard Maltby</span></p>

            <p className="py-2">
                <a href="https://www.nederlander.co.uk/whats-on/white-christmas/dates" target="_blank"
                   rel="noopener noreferrer">
                    <img src={DominionLogo} alt="logo" className="dominion-logo img-fluid"/>
                </a>
            </p>
            <ul className="footer__links py-2">
                <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                <li><a href="https://www.dewynters.com/"
                             target="_blank"
                             rel="noopener noreferrer">Designed and built by Dewynters</a></li>
            </ul>
        </Container>
    </footer>
);

export default Footer