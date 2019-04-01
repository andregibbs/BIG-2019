import React, {Component} from 'react'
import {Link} from 'gatsby'
import YoutubeModal from 'components/YoutubeModal/YoutubeModal'

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
                                <li><div className="btn btn--red btn--short"><a href="https://www.nederlander.co.uk/whats-on/big" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                <li><div onClick={() => this.setState({ videoId: "A_O5CTAPZ3o", modalOpen: true })} className="btn btn--red btn--short">Watch trailer</div></li>
                            </ul>
                        </div>

                        <div className="d-sm-none">
                            <ul className="header__button-list mobile">
                                <li><div className="btn btn--red btn--short"><a href="https://www.nederlander.co.uk/whats-on/big" target="_blank" rel="noreferrer noopener">Book Tickets</a></div></li>
                                <li><div onClick={() => this.setState({ videoId: "A_O5CTAPZ3o", modalOpen: true })} className="btn btn--red btn--short"><span className="play-icon"/>trailer</div></li>
                            </ul>
                        </div>
                        <ul className="header__links--social">
                            <li>
                                <a href="https://www.facebook.com/Big-The-Musical-645434252586654/" target="_blank"
                                   rel="noopener noreferrer" className="icon icon-facebook">
                                    <div>
                                        <span className="sr-only">Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/BigTheMusical" target="_blank" rel="noopener noreferrer"
                                   className="icon icon-twitter">
                                    <div>
                                        <span className="sr-only">Twitter</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/bigthemusicaluk/" target="_blank" rel="noopener noreferrer"
                                   className="icon icon-instagram">
                                    <div>
                                        <span className="sr-only">Instagram</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <button
                            className={`nav-toggle ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''} d-none`}
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

                 {/*<nav id="navbarSupportedContent"*/}
                     {/*className={`nav ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>*/}
                    {/*<ul className="nav__btns">*/}
                        {/*<li className="nav__btns-book-now">*/}
                            {/*<a href="https://ticket.southbankcentre.co.uk/single/PSDetail.aspx?psn=107322&_ga=2.109661829.1005360625.1542208280-543344915.1540213337&tnewq=00000000-0000-0000-0000-000000000000&tnewp=fd89e6f9-919c-4e4f-a957-e296df94da62&tnewts=1542208375&tnewc=southbankcentre&tnewe=myscqueue017&tnewrt=Disabled&tnewh=b0fb3eb67743bef96b27f70616aa9676"*/}
                               {/*target="_blank"*/}
                               {/*rel="noreferrer noopener"*/}
                               {/*aria-label="Book Now"*/}
                               {/*className="btn btn--pink">Book Now</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<Link activeClassName="active" to="/" className="link">Home</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<ul className="header__links--social mobile">*/}
                                {/*<li>*/}
                                    {/*<a href="https://www.twitter.com/whitexmasshow" target="_blank" rel="noopener noreferrer"*/}
                                       {/*className="icon icon-twitter">*/}
                                        {/*<div>*/}
                                            {/*<span className="sr-only">Twitter</span>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<a href="https://www.facebook.com/pg/White-Christmas-Musical-2318076281591209" target="_blank"*/}
                                       {/*rel="noopener noreferrer" className="icon icon-facebook">*/}
                                        {/*<div>*/}
                                            {/*<span className="sr-only">Facebook</span>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<a href="https://www.instagram.com/whitexmasshow" target="_blank" rel="noopener noreferrer"*/}
                                       {/*className="icon icon-instagram">*/}
                                        {/*<div>*/}
                                            {/*<span className="sr-only">Instagram</span>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</nav>*/}
                <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId} />
            </>
        );
    }
}

export default Header;