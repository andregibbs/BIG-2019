import React, {Component} from 'react'
import {Container} from 'reactstrap'
import Img from 'gatsby-image'
import triggerBtn from '../images/icons/btn-open.svg'

class CustomCollapse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeId: "",
            contentHeight: 0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e, id, type, bio) {

        if (bio === "")
            return true;

        if (this.state.activeId === id) {
            this.setState({
                activeId: "",
                contentHeight: 0
            });
        } else {
            const trigger = e.currentTarget;
            const container = trigger.parentElement;
            const content = trigger.nextSibling;
            const inner = content.children[0];
            const height = inner.offsetHeight;
            this.setState({
                activeId: id,
                contentHeight: height
            });

            const collapseItem = document.getElementById(`collapse${id}${type}`)

            // Wait for previous to close, the scroll to
            setTimeout(() => {
                window.scrollTo({
                    top: collapseItem.offsetTop - 80,
                    behavior: "smooth"
                })
            }, 500);
        }
    }

    render() {
        const items = this.props.data

        const collapseItems = items.map((item, i) => {
            return <CustomCollapseItem
                key={i}
                id={i}
                data={item}
                clickHandler={this.clickHandler}
                type={this.props.type}
                activeId={this.state.activeId}
                contentHeight={this.state.activeId === i ? this.state.contentHeight : 0}
                activeClass={this.state.activeId === i ? 'active' : ''}
            />
        });

        return (
            <Container fluid className="c-collapse">
                {collapseItems}
            </Container>
        )
    }
}

export default CustomCollapse

class CustomCollapseItem extends Component {
    render() {
        const element = this.props.data.node;
        let image = ""

        if (typeof element.image !== 'undefined') {
            image = <Img fluid={element.image.childImageSharp.fluid} alt={element.title} className="c-collapse__item-trigger-img" />
        }

        return (
            <div
                className={`c-collapse__item ${this.props.activeClass}`}
                style={{marginBottom: this.props.contentHeight + "px"}}
                id={`collapse${this.props.id}${this.props.type}`}>
                   
                <div tabIndex={this.props.id} role="button" aria-pressed="false"
                     className="c-collapse__item-trigger"
                     onClick={(e) => this.props.clickHandler(e, this.props.id, this.props.type, element.bio)}
                     onKeyDown={(e) => this.props.clickHandler(e, this.props.id, this.props.type, element.bio)}
                > 
                <div className="casts-wrapper">
                    {image}
                    
                    <div className="c-collapse__item-trigger-title">
                        <p className="mt-2 mb-2 text--black text-uppercase">{element.name}</p>
                        <p className="mb-0 text--bold text--red text-uppercase">{element.role}</p>
                    </div>

                    {/* {element.bio !== "" &&
                        <div className={`c-collapse__item-trigger-btn ${this.props.activeClass}`}>
                            <img src={triggerBtn} alt="Toggle" className="img-fluid"/>
                            <span className="sr-only">Toggle</span>
                        </div>
                    } */}
                </div>
                </div>
                {element.bio !== "" &&
                    <div
                        className="c-collapse__item-content"
                        style={{height: this.props.contentHeight + "px"}}
                        id={`collapseContent${this.props.id}${this.props.type}`}
                    >
                        <div className="c-collapse__item-content-inner">
                            <Container>
                                <div className="c-collapse__item-content-inner-bg"
                                     dangerouslySetInnerHTML={{__html: element.bio}}/>
                            </Container>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
