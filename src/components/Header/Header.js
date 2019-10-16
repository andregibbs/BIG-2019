import React, {Component} from 'react'
import {Link} from 'gatsby'
import YoutubeModal from '../YoutubeModal/YoutubeModal'
import PopUpModal from '../PopUpModal/PopUpModal'
import Pagelogo from '../../images/big-logo-40px.png'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const COOKIE_DOMAIN = "bigthemusical.co.uk";
let expiry = new Date();
expiry = new Date(expiry.setMonth(expiry.getMonth() + 1))

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToggled: false,
            collapsed: false,
            modalOpen: false,
            modalOpenTwo: false,
            isOpen: false,
            videoId: 'A_O5CTAPZ3o'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        window.addEventListener('resize', this.handleScroll, true);
        
        if (!cookies.get('popup')) {
            this.setState({
                modalOpenTwo: true,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
        window.removeEventListener('resize', this.handleScroll, true);

        this.setState({
            modalOpenTwo: false,
        });
    }

    handleScroll = () => {
        // let scrollPosition = document.documentElement.scrollTop
        let scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        let collapsed = scrollPosition < 20 ? false : true;
        this.setState({
            collapsed
        });
    };

    toggleModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    togglePopModal = (e) => {
        e.preventDefault();

        cookies.set('popup', true, {
            expires: expiry,
            domain: COOKIE_DOMAIN
        });

        this.setState({
            modalOpenTwo: !this.state.modalOpenTwo
        });
    };

    toggleNav = () => {
        this.setState({
            navToggled: !this.state.navToggled
        });
    };

    render() {
        const {navToggled, collapsed, modalOpen, modalOpenTwo, videoId} = this.state;
        const blueWithoutScroll = this.props.blueWithoutScroll;

        return (
            <>
                <header className={`header ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
                    <div className="header__container">
                        <div className="d-none d-md-block">
                            <ul className="header__button-list">
                                <li>
                                    <div className="btn btn--red btn--short btn-book-tickets-in-nav"><a
                                        href="https://www.nederlander.co.uk/whats-on/big/dates" target="_blank"
                                        rel="noreferrer noopener">Book Tickets</a></div>
                                </li>
                                <li>
                                    <div onClick={() => this.setState({videoId: "A_O5CTAPZ3o", modalOpen: true})}
                                         className="btn btn--red btn--short btn-watch-trailer">Watch trailer
                                    </div>
                                </li>
                                <li>
                                    <div className="btn btn--red btn--short btn-book-tickets-in-nav"><a
                                        href="https://shop.bigthemusical.co.uk/" target="_blank"
                                        rel="noreferrer noopener">MERCH STORE</a></div>
                                </li>
                            </ul>
                        </div>

                        <div className="d-md-none">
                            <ul className="header__button-list mobile">
                                <li>
                                    <div className="btn btn--short btn-book-tickets-in-nav"><a
                                        href="https://www.nederlander.co.uk/whats-on/big" target="_blank"
                                        rel="noreferrer noopener">Tickets</a></div>
                                </li>
                                <li>
                                    <div onClick={() => this.setState({videoId: "A_O5CTAPZ3o", modalOpen: true})}
                                         className="btn btn--short btn-watch-trailer"><span className="play-icon"/>trailer
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="d-none d-lg-block w-100 text-center position-absolute small-logo">
                            <Link to="/">
                            <img src={Pagelogo} className={`${!this.props.displayLogo && 'd-none'}`} alt="" />
                            </Link>
                        </div> */}

                        <ul className="header__links--social">
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
                                <a href="https://www.instagram.com/bigthemusicaluk/" target="_blank"
                                   rel="noopener noreferrer"
                                   className="icon icon-instagram">
                                    <div className="btn-social instagram">
                                        <span className="sr-only">Instagram</span>
                                    </div>
                                </a>
                            </li>
                            <li className="d-none d-lg-inline-block small-logo">
                                <Link to="/">
                                    <img src={Pagelogo} className="small-logo" alt=""/>
                                </Link>
                            </li>
                        </ul>

                        <button
                            className={`nav-toggle ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}
                            onClick={this.toggleNav}
                            aria-expanded="false"
                            aria-controls="navbarSupportedContent"
                            type="button"
                            aria-label="Toggle navigation"
                        >
                            <span className="nav-toggle__burger"/>
                        </button>

                    </div>
                </header>

                <nav id="navbarSupportedContent"
                     className={`nav ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
                    <ul className="nav__btns">
                        <li className="nav__btns-book-now">
                            <a href="https://www.nederlander.co.uk/whats-on/big/dates"
                               target="_blank"
                               rel="noreferrer noopener"
                               aria-label="Book Now"
                               className="btn btn--pink btn-book-tickets-in-nav">Book Now</a>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/ticket-information/" className="link">Ticket
                                Information</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/find-out-more/" className="link">Find Out More</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/cast-creative/" className="link">Cast & Creative</Link>
                        </li>
                        <li>
                            <a href="https://shop.bigthemusical.co.uk/" className="link" target="_blank"
                               rel="noreferrer noopener">Shop</a>
                        </li>
                    </ul>
                </nav>
                <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId}/>
                <PopUpModal isOpen={modalOpenTwo} togglePopModal={this.togglePopModal}/>
            </>
        );
    }
}

export default Header;