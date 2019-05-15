import React, {Component} from 'react';
import Img from 'gatsby-image'
import headerCopyXs from "images/top-billing-sm.svg"
import headerCopySm from "images/top-billing-md.svg"
import headerCopyLg from "images/top-billing-lg.svg"

class HeaderImage extends Component {
    render() {

        const { headerTitle, headerImage, headerCopy, headerImageTablet, headerImageMobile, headerClasses, display } = this.props

        return(
            <div className="headerImage">
                {headerTitle &&
                <h1 className="text-uppercase smaller-header">{headerTitle}</h1>
                }
                
                {headerCopy &&
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
                    <Img fluid={headerImageTablet} className="d-none d-sm-block d-md-block d-lg-none"/>
                }
                {headerImageMobile &&
                    <Img fluid={headerImageMobile} className="d-block d-sm-none"/>
                }
            </div>
        )
    }
}

export default HeaderImage;