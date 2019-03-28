import React, {Component} from 'react'
import {Link} from 'gatsby'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navToggled: false,
            collapsed: false,
            isOpen: false,
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

    toggleNav = () => {
        this.setState({
            navToggled: !this.state.navToggled
        });
    };

    render() {
        const {navToggled, collapsed} = this.state;
        const blueWithoutScroll = this.props.blueWithoutScroll;

        return (
            <>
                <header className={`header ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
                    <div className="header__container">
                        <ul className="header__button-list">
                            <li><a href="#" target="_blank" rel="noreferrer noopener" className="btn btn--red btn--short">On sale 2 April</a></li>
                            <li><a href="tel:+443452007892" target="_blank" rel="noreferrer noopener" className="btn btn--red btn--short">Watch trailer</a></li>
                        </ul>
                        <ul className="header__links--social">
                            <li>
                                <a href="https://www.facebook.com/pg/White-Christmas-Musical-2318076281591209" target="_blank"
                                   rel="noopener noreferrer" className="icon icon-facebook">
                                    <div>
                                        <span className="sr-only">Facebook</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/whitexmasshow" target="_blank" rel="noopener noreferrer"
                                   className="icon icon-twitter">
                                    <div>
                                        <span className="sr-only">Twitter</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/whitexmasshow" target="_blank" rel="noopener noreferrer"
                                   className="icon icon-instagram">
                                    <div>
                                        <span className="sr-only">Instagram</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <button
                            className={`d-none nav-toggle ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}
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
            </>
        );
    }
}

export default Header;