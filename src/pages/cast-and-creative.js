import React, { Component } from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import classnames from 'classnames';
import {
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CustomCollapse from 'components/CustomCollapse'

const headData = {
    title: 'White Christmas | Cast & Creative',
    description: 'The official cast and creative page for Irving Berlin’s WHITE CHRISTMAS The Musical at the Dominion Theatre. Starring Danny Mac and Dan Burton, directed by Curve, Leicester’s artistic director Nikolai Foster, choreographed by Stephen Mear.',
};

class CastCollapse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab, e) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Layout
                headData={headData}
            >
                <section className="page CastCreativePage">
                    <div className="CastAndCreativePage--content">
                        <Container fluid={true}>
                            <Container>
                                <Nav tabs className="c-collapse-nav">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={(e) => {
                                                this.toggle('1', e);
                                            }}
                                        >
                                            CAST
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={(e) => {
                                                this.toggle('2', e);
                                            }}
                                        >
                                            CREATIVE
                                        </NavLink>
                                    </NavItem>
                                    <div className={`c-collapse-nav nav--scale-bg ${this.state.activeTab === '1' ? 'active' : ''}`}></div>
                                    <div className={`c-collapse-nav nav--bg ${this.state.activeTab === '2' ? 'active' : ''}`}></div>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <CastItems
                                        clickHandler={this.clickHandler}
                                        activeId={this.state.activeId}
                                        contentHeight={this.state.contentHeight}
                                    />
                                </TabContent>
                            </Container>
                        </Container>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default CastCollapse

const CastItems = (props) => (
    // Query all sites
    <StaticQuery
        query={graphql`
                query {
                allCastJson {
                    edges {
                        node {
                            id
                            name
                            role
                            bio
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 283) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                allEnsembleJson {
                    edges {
                        node {
                            id
                            name
                            role
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 283) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
                allCreativeJson {
                    edges {
                        node {
                            id
                            name
                            role
                            bio
                        }
                    }
                }
            }`}
        render={data => (
            <>
                <TabPane tabId="1" key={`cast`}>
                    <CustomCollapse data={data.allCastJson.edges} type="cast" />
                    
                    <h2 className="title pt-5 text-uppercase text--red smaller-header">Josh and Billy’s Friends </h2>s
                    <CustomCollapse data={data.allEnsembleJson.edges} type="ensemble" title="Ensemble" />
                </TabPane>
                <TabPane tabId="2" key={`creative`}>
                    <CustomCollapse data={data.allCreativeJson.edges} type="creative" title="Creative" />
                </TabPane>

            </>
        )}
    />
)