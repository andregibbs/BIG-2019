import React, {Component} from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Layout from 'components/Layout'
import {Container, Row, Col} from 'reactstrap'
import Casts from 'components/CustomCollapse/Casts'
import Ensemble from 'components/CustomCollapse/Ensemble'
import Creatives from 'components/CustomCollapse/Creatives'

const headData = {
    title: 'BIG The Musical | Official Site',
    description: 'The official website Big The Musical. Based on the smash-hit film BIG opens September 2019 at the Dominion Theatre for 9 weeks only starring Jay McGuiness.',
};

const CastAndCreativePage = ({data}) => (

    <Layout
        headData={headData}
        // headerTitle="Cast & Creatives"
        displayLogo={true}
    >
        <section className="page CastAndCreativePage">
            <div className="page-container">
                <Container fluid={true}>

                    <h2 className="text--red text-uppercase">Cast & Creatives</h2>
                    
                    <Container>
                        {/* <h2 className="title pt-0 text-uppercase text--red smaller-header">Cast</h2> */}
                        <Row className="justify-content-center">
                            <Casts data={data.allCastJson.edges} type="cast"/>
                        </Row>

                        <h2 className="title pt-0 text-uppercase text--red smaller-header">Josh and Billy’s Friends </h2>
                        <Row className="justify-content-center">
                            <Ensemble data={data.allEnsembleJson.edges} type="cast"/>
                        </Row>

                    </Container>

                    {/* <Container className="py-5">
                        <h2 className="title py-0 text-uppercase text--red smaller-header">Creative</h2>
                        <Row className="justify-content-center">
                            <Creatives data={data.allCreativeJson.edges} type="creative"/>
                        </Row>
                    </Container> */}
                </Container>
            </div>
        </section>
    </Layout>
);

export default props => (
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
        render={data => <CastAndCreativePage data={data} {...props} />}
    />
)
