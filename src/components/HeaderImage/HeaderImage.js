import React, {Component} from 'react';
import Img from 'gatsby-image'

class HeaderImage extends Component {
    render() {

        const { headerImage, headerImageTablet, headerImageMobile, headerClasses, display } = this.props

        return(
            <div className={`headerImage`}>
                {headerImage &&
                    <Img fluid={headerImage} className="d-none d-lg-block"/>
                }
                {headerImageTablet &&
                    <Img fluid={headerImageTablet} className="d-none d-sm-block d-md-block d-lg-none"/>
                }
                {headerImageMobile &&
                    <Img fluid={headerImageMobile} className="d-block d-sm-none"/>
                }
                <div className={`blue-rail ${headerClasses ? headerClasses : ''} ${display ? display : ''}`}></div>
            </div>
        )
    }
}

export default HeaderImage;