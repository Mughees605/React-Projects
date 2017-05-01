import React, { Component } from "react";
import "./TemplateEditor.css";
import { Col, Panel, Row, FormGroup, FormControl } from "react-bootstrap";

import Editor from "./Editor.jsx"
const Variables = [
    {
        name: "{{first_name}}",
        text: "Connor"
    }, {
        name: "{{last_name}}",
        text: "Black"
    }, {
        name: "{{job_title}}",
        text: "Mobli Development"
    }, {
        name: "{{Company_name}}",
        text: "Digital Freelancer"
    }, {
        name: "{{phone_number}}",
        text: "+1 555-5555-555"
    }, {
        name: "{{job_link}}",
        text: "https://google"
    }
];
class TemplateEditor extends Component {

    render() {
        return (
            <div className="editor-container">
                <Row>
                    <div className="title-container">
                        <h2>
                            <span>Templates<span />
                                <i className="fa fa-caret-right icon" aria-hidden="true"></i>
                            </span>
                            <span className="nameTitle">
                                Intro Email</span>
                        </h2>
                        <Col md={12} offset={12}>
                            <button className="btn  pull-right">New template</button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    {/*first coloumn start*/}
                    <Col lg={8} className="first-col">
                        <div className="first-col-head">
                            <h1 className='template-editor'>TemplateEditor</h1>
                        </div>
                        <Panel className="panel">
                            <Col md={11} mdOffset={1}>
                                <h3 className='title'>Select template</h3>
                                <FormGroup controlId="formControlsSelect">
                                    <FormControl className='dropdown' componentClass="select" placeholder="select">
                                        <option value="select">Into Email</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                    <span>
                                        <p className='notice'>Note: for internal use only</p>
                                    </span>
                                </FormGroup>
                                <h3 className='title'>Subject:</h3>
                                <FormGroup>
                                    <FormControl
                                        className='subject-editor'
                                        type="text"
                                        placeholder="Hi {{first_name}}, I want to help {{company_name}} launch your mobile app" />
                                </FormGroup>
                                <h3 className='title'>Content:</h3>

                                {/*Editor*/}
                                <div
                                    style={{
                                        backgroundColor: "#fff"
                                    }}>
                                    <Editor placeholder="" />
                                </div>
                                {/*Editor End*/}

                                <div className="btn-group">
                                    <button
                                        className="btn pull-right save"
                                        style={{
                                            borderRadius: "5px"
                                        }}>Save</button>
                                    <button
                                        className="btn pull-right"
                                        style={{
                                            borderRadius: "5px"
                                        }}>Cancel</button>
                                </div>
                            </Col>
                        </Panel>
                    </Col>
                    {/*first coloumn end*/}

                    <Col lg={4} className="second-col">
                        <div className="second-col-head">
                            <h1 className='template-editor'>Variables</h1>
                        </div>
                        <Panel className="panel">
                            <Col md={12} offset={2}>
                                <p className="second-col-text">Use the vairables below in the emails (subject
                                    and content). They will be replaced by the corresponding value.
                                </p>
                                <p className="second-col-text">
                                    You can specify a default vaule for each variable, like this:
                                </p>
                                <p className="second-col-boldText">
                                    Hi {"{{first_name | default: there }}"},
                                </p>
                                <Col md={14} offset={1} className="second-col-lists">
                                    {Variables.map((val, i) => {
                                        return (
                                            <div className="lists" key={i}>
                                                <button className="btn btn-default pull-right">Insert</button>
                                                <div style={{
                                                    margin: '10px'
                                                }} >
                                                    <span>{val.name}</span>
                                                    <br />
                                                    <span
                                                        className='list-name'
                                                    >{val.text}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Col>
                            </Col>

                        </Panel>
                    </Col>

                </Row>
            </div>
        )
    }
}
export default TemplateEditor;