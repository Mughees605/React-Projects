import React, { Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import './LeadDetails.css';

class leadDetails extends Component {
    render() {
        return (
            <div className='lead-detail'>
                <div className="title-container">
                    <h2>
                        <span>My Leads <i className="fa fa-caret-right icon" aria-hidden="true"></i> </span>
                        <span className="nameTitle"> Phillip Kim</span>
                    </h2>
                </div>
                <Panel className="main-panel">
                    <Panel >
                        <Row className="show-grid">
                            <Col xs={12} md={7} sm={10}>
                                <Col xs={4} md={3} sm={3}>
                                    <img src='http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png' className="thumbnail-img" />
                                </Col>
                                <Col xs={8} md={9} sm={9}>
                                    <h2 className='name'>Phillip Kim</h2>
                                    <div className='des_label'>
                                        <span>Company: </span> <span className='des_value'>Impekable, Inc</span>
                                    </div>
                                    <div className='des_label'>
                                        <span>Email:</span> <span className='des_value'>pek@impekable.com</span>
                                    </div>
                                    <div className='des_label'>
                                        <span>Phone: </span> <span className='des_value'>+1 555-555-5555</span>
                                    </div>
                                    <div className='des_label'>
                                        <span>Source: </span> <span className='des_value'> www.wfh.io</span>
                                    </div>
                                </Col>
                            </Col>
                            <Col xs={12} sm={2} md={5} className="action-btn-group">
                                <div>
                                    <button type="button" className="btn btns btn-lg btn-fb"> <span className="fa fa-facebook"></span></button>
                                    <button type="button" className="btn btns btn btn-lg btn-tw"> <span className="fa fa-twitter"></span></button>
                                    <button type="button" className="btn btns btn btn-lg btn-li"> <span className="fa fa-linkedin"></span></button>
                                </div>
                                <div>
                                    <button type="button" className="btns btn contact-btn-email"> Email</button>
                                    <button type="button" className="btns btn contact-btn"> Add to List</button>
                                </div>
                                <div>

                                </div>
                            </Col>
                        </Row>
                    </Panel>
                    <h1 className='Front-End-Developer'>Front-End Developer</h1>
                    <Panel className='details'>

                        We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user
                        <br/>
                        <br/>
                        interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that
                        <br/>
                        <br/>
                        these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on
                        <br/>
                        <br/>
                        different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and
                        quality product is important.
                        <br/>
                        <br/>

                        Responsibilities

                        <ul>
                            <li>- Developing new user-facing features using React.js </li>
                            <li>- Building reusable components and front-end libraries for future use </li>
                            <li>- Translating designs and wireframes into high quality code </li>
                            <li>- Optimizing components for maximum performance across a vast array of web-capable devices and browsers</li>
                        </ul>
                    </Panel>
                </Panel>
            </div>
        );
    }
}

export default leadDetails;