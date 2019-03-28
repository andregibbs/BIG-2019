import React, {Component} from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './Header/Header'
import HeaderImage from './HeaderImage/HeaderImage'
import Footer from './Footer/Footer'
import CookieConsent from "react-cookie-consent";
import 'stylesheets/main.scss';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    render() {
        const {children, headData, headerImage, headerImageTablet, headerImageMobile, headerClasses, display, displayLogo,} = this.props;
        return (
            <>

                <CookieConsent
                    location="bottom"
                    disableStyles={true}
                    buttonText="Continue"
                    cookieName="bcookie"
                    containerClasses="cookie"
                    contentClasses="cookieContent"
                    buttonClasses="WhiteBtn"
                    expires={150}
                >
                    <p>We use cookies to help make this website better. For more information on cookies and how we use
                        them, please see our <Link className="link link--pink" to="/cookie-policy/">cookies page</Link>.<br/>
                        Otherwise, we’ll assume you’re OK to continue.</p>
                </CookieConsent>

                <Helmet htmlAttributes={
                    {"lang": "en"}
                }>
                    <title>{headData.title}</title>
                    <meta name="description" content={headData.description}/>
                    <meta name="keywords"
                          content=""/>
                    <meta name="author" content="Dewynters Ltd"/>

                    {/* Facebook tags */}
                    <meta property="og:locale" content="en_GB"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={headData.title}/>
                    <meta property="og:description" content={headData.description}/>
                    <meta property="og:url" content="https://www.whitechristmasthemusical.co.uk"/>
                    <meta property="og:site_name" content="BIG | Official London Site"/>
                    <meta property="og:image" content="/favicons/big-share-image.jpg"/>
                    <meta name="google-site-verification" content="1iIfO-WhKRmhuqB-EHbtGW13R7Fy92GojEhHU-1kkkA"/>


                    {/* Twitter tags */}
                    <meta name="twitter:card" content="summary"/>
                    <meta name="twitter:title" content={headData.title}/>
                    <meta name="twitter:description" content={headData.description}/>

                    {/* Favicon */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicons/site.webmanifest"/>
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>

                </Helmet>
                <noscript className="no-js">Javascript is required to view the full experience of this site.</noscript>

                <div className="outdated-browser" id="outdated-browser"></div>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                function get_browser() {
                  var ua = navigator.userAgent || navigator.vendor || window.opera, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || [];
                  if (/trident/i.test(M[1])) {
                    tem = /\\brv[ :]+(\\d+)/g.exec(ua) || [];
                    return { name: 'IE', version: (tem[1] || '') };
                  }
                  if (M[1] === 'Chrome') {
                    tem = ua.match(/\\bOPR\\/(\\d+)/)
                    if (tem != null) { return { name: 'Opera', version: tem[1] }; }
                  }
                  if (window.navigator.userAgent.indexOf("Edge") > -1) {
                    tem = ua.match(/\\Edge\\/(\\d+)/)
                    if (tem != null) { return { name: 'Edge', version: tem[1] }; }
                  }
                  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
                  if ((tem = ua.match(/version\\/(\\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
                  return {
                    name: M[0],
                    version: +M[1]
                  };
                }

                var browser = get_browser()

                function isSupported(browser) {
                  var supported = false;
                  if (browser.name === "Chrome" && browser.version > 38) {
                    supported = true;
                  } else if ((browser.name === "MSIE" || browser.name === "IE") && browser.version > 10) {
                    supported = true;
                  } else if (browser.name === "Firefox" || browser.name === "Edge" || browser.name === "Opera" || browser.name === "Safari") {
                    supported = true;
                  }
                  return supported;
                }

                function isFacebookOrInstagramApp() {
                    var ua = navigator.userAgent || navigator.vendor || window.opera;
                    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1 || ua.indexOf('Instagram') > -1 || ua.indexOf('Twitter') > -1);
                }

                var isSupported = isSupported(browser);

                if (isFacebookOrInstagramApp()) {
                    isSupported = true;
                }

                if (browser.name === "IE") {
                    document.body.className += 'ie';
                }

                if (!isSupported) {
                setTimeout(function(){
                document.getElementById("outdated-browser").innerHTML = '<p>You are using an outdated browser. <a href="http://outdatedbrowser.com" class="link" target="_blank" rel="noreferrer noopener">More information</a></p>';
                 }, 1500);
                }
                `,
                    }}
                />
                <Header displayLogo={displayLogo}/>
                <HeaderImage headerImage={headerImage} headerImageTablet={headerImageTablet}
                             headerImageMobile={headerImageMobile} headerClasses={headerClasses} display={display}/>
                <div className="bg-container"/>
                {children}
                <Footer/>


            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


Layout.defaultProps = {
    headData: {
        title: '',
        description: '',
    },
    headerImage: false,
    headerClasses: false,
    display: false,
};

export default Layout
