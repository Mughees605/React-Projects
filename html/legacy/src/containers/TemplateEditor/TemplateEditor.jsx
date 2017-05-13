import React, {Component} from "react";
import {Col, Panel, Row, FormGroup, FormControl} from "react-bootstrap";
import { browserHistory } from 'react-router'
// import {Link} from "react-router";
import Editor from "./Editor.jsx"
import "./TemplateEditor.css";

const Variables = [
    {
        name: "{{ First name }}",
        text: "Connor"
    }, {
        name: "{{ Last name }}",
        text: "Black"
    }, {
        name: "{{ Job title }}",
        text: "Mobli Dev"
    }, {
        name: "{{ name }}",
        text: "Freelancer"
    }, {
        name: "{{ number }}",
        text: "+1 555-5555-555"
    }, {
        name: "{{ Job link }}",
        text: "https://google"
    }
];
class TemplateEditor extends Component {

    render() {
        return (
            <div className="editor-container">
                <Row>
                    {/*title-container*/}
                    <div className="title-container">
                        <h2>
                            <span className="name cursorPointer"  onClick={() => browserHistory.push('/dashboard/templates')}>Templates<span/>
                                <i className="fa fa-caret-right icon" aria-hidden="true"></i>
                            </span>
                            <span className="nameTitle">
                                Intro Email</span>
                        </h2>
                        <Col md={12} offset={12}>
                            <button className="btn  pull-right">New template</button>
                        </Col>
                    </div>
                    {/*title container end*/}
                </Row>

                <Row>
                    {/*first coloumn start*/}
                    <Col lg={8} className="first-col">

                        {/*first-coloumn-head*/}
                        <div className="first-col-head">
                            <h1 className='template-editor'>Template Editor</h1>
                        </div>
                        {/*first-coloumn-head-end*/}

                        <Panel className="panel">
                            <Col md={11} className="panel-col">
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
                                        placeholder="Hi {{first_name}}, I want to help {{company_name}} launch your mobile app"/>
                                </FormGroup>
                                <h3 className='title'>Content:</h3>

                                {/*Editor*/}
                                <div
                                    style={{
                                    backgroundColor: "#fff"
                                }}>
                                    <Editor/>
                                </div>
                                {/*Editor End*/}

                                <div className="btn-group">
                                    <button className="btn pull-right save both">Save</button>
                                    <button className="btn pull-right both">Cancel</button>
                                </div>
                            </Col>
                        </Panel>
                    </Col>
                    {/*first coloumn end*/}

                    {/*SECOND coloumn start*/}

                    <Col lg={4} className="second-col">

                        {/*second coloumn head*/}
                        <div className="second-col-head">
                            <h1 className='template-editor'>Variables</h1>
                        </div>
                        {/*second-coloumn-head-end*/}

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
                                                <div >
                                                    <span>{val.name}</span>
                                                    <br/>
                                                    <span className='list-name'>{val.text}</span>
                                                    <button className="btn btn-default pull-right">Insert</button>

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