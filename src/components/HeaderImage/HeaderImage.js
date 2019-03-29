import React, {Component} from 'react';
import Img from 'gatsby-image'

class HeaderImage extends Component {
    render() {

        const { headerImage, headerImageTablet, headerImageMobile, headerClasses, display } = this.props

        return(
            <div className="headerImage">
                <p className="text--smaller">Michael Rose, Damien Sanders & Paul Gregg<br/>
                For Encore Theatre Productions Limited Presents<br/>
                A Theatre Royal Plymouth Production</p>
                <h1 className="text-uppercase text--huge">The Musical based on the smash-hit film</h1>
                {headerImage &&
                    <Img fluid={headerImage} className="d-none d-lg-block"/>
                }
                {headerImageTablet &&
                    <Img fluid={headerImageTablet} className="d-none d-sm-block d-md-block d-lg-none"/>
                }
                {headerImageMobile &&
                    <Img fluid={headerImageMobile} className="d-block d-sm-none"/>
                }
                <h2 className="d-none d-sm-block text--huge">
                    <span className="text--red text--bold">STRICTLY LIMITED SEASON</span> <br className="d-xl-none"/> FROM 6 SEPTEMBER 2019<br/><span className="text--big text--bold">FOR 9 WEEKS ONLY<br className="d-xl-none"/> AT THE DOMINION THEATRE</span>
                </h2>

                <h2 className="d-block d-sm-none text--big">
                    <span className="text--red text--bold">STRICTLY LIMITED SEASON</span><br/>FROM 6 SEPTEMBER 2019<br/><span className="text--basic letter-spacing--1">FOR 9 WEEKS ONLY AT THE DOMINION THEATRE</span>
                </h2>
            </div>
        )
    }
}

export default HeaderImage;