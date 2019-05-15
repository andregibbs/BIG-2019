import React from 'react'
import {Link} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import DominionLogo from 'images/Logo-DominionTheatre.svg'

const Footer = () => (
    <footer className="footer">
        <Container>

        <p className="text--smaller">“BIG” Written by Gary Ross and Anne Spielberg. A Twentieth Century Fox Film.<br/><br className="d-sm-none"/><br className="d-sm-none"/>Book by <span className="text--basic text-uppercase">John Weidman</span> Music by <span className="text--basic text-uppercase">David Shire</span> Lyrics by <span className="text--basic text-uppercase">Richard Maltby</span></p>

            <p className="py-2">
                <a href="https://www.nederlander.co.uk/whats-on/white-christmas/dates" target="_blank"
                   rel="noopener noreferrer">
                    <img src={DominionLogo} alt="logo" className="dominion-logo img-fluid"/>
                </a>
            </p>
            <ul className="footer__links py-2">
                <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy/">Cookie Policy</Link></li>
                <li>Designed and built by <a href="https://www.dewynters.com/"
                                             target="_blank"
                                             rel="noopener noreferrer">Dewynters</a></li>
            </ul>
        </Container>
    </footer>
);

export default Footer