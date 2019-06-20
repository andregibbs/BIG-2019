import React, {Component} from 'react';
import {Container} from 'reactstrap'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import headerCopyXs from "images/top-billing-sm.svg"
import headerCopySm from "images/top-billing-md.svg"
import headerCopyLg from "images/top-billing-lg.svg"

class HeaderImage extends Component {
    render() {

        const { headerTitle, headerImage, headCopy, headerRoundal, headerImageTablet, headerImageMobile, headerClasses, display } = this.props

        return(
            <div className="headerImage">
                {headerTitle &&
                <h1 className="text-uppercase smaller-header">{headerTitle}</h1>
                }

                {headCopy &&
                <>
                <img src={headerCopyXs} className="d-block d-sm-none img-fluid mx-auto" />
                <img src={headerCopySm} className="d-none d-sm-block d-lg-none img-fluid mx-auto" />
                <img src={headerCopyLg} className="d-none d-lg-block img-fluid mx-auto" />
                </>
                }
               
                {headerImage &&
                    <Img fluid={headerImage} className="d-none d-lg-block"/>
                }
                {headerImageTablet &&
                    <Img fluid={headerImageTablet} className="d-none d-sm-block d-md-block d-lg-none tablet-img headerimage-live"  />
                }
                {headerImageMobile &&
                    <Img fluid={headerImageMobile} className="d-block d-sm-none mobile-img"/>
                }
               
               {headerRoundal &&
                <Container fluid={true} className="roundal py-5 d-none d-lg-block">
                  <Container>
                        <div className="btn  btn--red-roundal"><Link className="btn-book-tickets" to="/ticket-information/" target="_blank" rel="noreferrer noopener">SEE IT FIRST<br /> AND SAVE<br/><span className="text--grey">£29.50 - £69<br /> Mon - Fri, 6 - 20 Sep</span><br/>Book Now</Link></div>
                        </Container>
                </Container>
               }
            </div>
        )
    }
}

export default HeaderImage;