import React, {Component} from 'react'
import Layout from 'components/Layout'
import {Container} from 'reactstrap'

const headData = {
    title: '',
    description: '',
};


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout
                headData={headData}
            >
                <section className="page HomePage">
                    <div className="HomePage--content">
                        <Container fluid={true} className="container--grey py-4">
                            <Container>
                                <p className="text--small">“BIG” Written by Gary Ross and Anne Spielberg. A Twentieth Century Fox Film.<br/>
                                    Book by <span className="text--small-big">John Weidman</span>   Music by <span className="text--small-big">David Shire</span>   Lyrics by <span className="text--small-big">Richard Maltby</span></p>

                                <p className="narrow-container">
                                    Josh Baskin is twelve and life sucks, until one night at a carnival his wish to be big is granted. Now, trapped in an adult body in a grown-up world, he’s asking: is being big all it’s cracked up to be?
                                    Don’t miss the hilarious, heartwarming big-hearted musical as it lights up London’s Dominion Theatre for nine weeks only this Autumn.
                                </p>
                            </Container>
                        </Container>

                        <Container fluid={true} className="py-4">
                            <Container>
                                <h2 className="text--red text-uppercase">Performance times</h2>
                            </Container>
                        </Container>
                    </div>
                </section>
            </Layout>
        );

    }
}

export default IndexPage
