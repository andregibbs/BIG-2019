import React, {Component} from 'react'
import {Link} from 'gatsby'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'
import Pagelogo from 'images/big-logo-40px.png'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToggled: false,
            collapsed: false,
            modalOpen: false,
            isOpen: false,
            videoId: 'A_O5CTAPZ3o'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        window.addEventListener('resize', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
        window.removeEventListener('resize', this.handleScroll, true);
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

    toggleNav = () => {
        this.setState({
            navToggled: !this.state.navToggled
        });
    };

    render() {
        const {navToggled, collapsed, modalOpen, videoId} = this.state;
        const blueWithoutScroll = this.props.blueWithoutScroll;

        return (
            <>
                <header className={`header ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
                    <div className="header__container">
                        <div className="d-none d-sm-block">
                            <ul className="header__button-list">
                                <li><div className="btn btn--red btn--short btn-book-tickets-in-nav"><a href="https://www.nederlander.co.uk/whats-on/big/dates" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                <li><div onClick={() => this.setState({ videoId: "A_O5CTAPZ3o", modalOpen: true })} className="btn btn--red btn--short btn-watch-trailer">Watch trailer</div></li>
                                <li><div className="btn btn--red btn--short btn-book-tickets-in-nav"><a href="https://big-the-musical.myshopify.com" target="_blank" rel="noreferrer noopener">MERCH STORE</a></div></li>
                            </ul>
                        </div>

                        <div className="d-lg-none">
                            <ul className="header__button-list mobile">
                                <li><div className="btn btn--red btn--short btn-book-tickets-in-nav"><a href="https://www.nederlander.co.uk/whats-on/big" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                <li><div onClick={() => this.setState({ videoId: "A_O5CTAPZ3o", modalOpen: true })} className="btn btn--red btn--short btn-watch-trailer"><span className="play-icon"/>trailer</div></li>
                                <li><div className="btn btn--red btn--short btn-book-tickets-in-nav"><a href="https://big-the-musical.myshopify.com" target="_blank" rel="noreferrer noopener">STORE</a></div></li>
                            </ul>
                        </div>

                        <div className="d-none d-md-block w-100 text-center position-absolute small-logo">
                            <Link to="/">
                            <img src={Pagelogo} className={`${!this.props.displayLogo && 'd-none'}`} alt="" />
                            </Link>
                        </div>

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
                                <a href="https://www.instagram.com/bigthemusicaluk/" target="_blank" rel="noopener noreferrer"
                                   className="icon icon-instagram">
                                    <div className="btn-social instagram">
                                        <span className="sr-only">Instagram</span>
                                    </div>
                                </a>
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
                            <Link activeClassName="active" to="/ticket-information/" className="link">Ticket Information</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/find-out-more/" className="link">Find Out More</Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/cast-creative/" className="link">Cast & Creative</Link>
                        </li>
                        {/*<li>
                            <Link activeClassName="active" to="/" className="link">Shop</Link>
                        </li>*/}
                        {/*<li>*/}
                            {/*<ul className="header__links--social mobile">*/}
                {/*<li>*/}
                {/*    <a href="https://www.facebook.com/Big-The-Musical-645434252586654/" target="_blank"*/}
                {/*       rel="noopener noreferrer" className="icon icon-facebook">*/}
                {/*        <div className="btn-social facebook">*/}
                {/*            <span className="sr-only">Facebook</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://twitter.com/BigTheMusical" target="_blank" rel="noopener noreferrer"*/}
                {/*       className="icon icon-twitter">*/}
                {/*        <div className="btn-social twitter">*/}
                {/*            <span className="sr-only">Twitter</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="https://www.instagram.com/bigthemusicaluk/" target="_blank" rel="noopener noreferrer"*/}
                {/*       className="icon icon-instagram">*/}
                {/*        <div className="btn-social instagram">*/}
                {/*            <span className="sr-only">Instagram</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
                <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId} />
            </>
        );
    }
}

export default Header;