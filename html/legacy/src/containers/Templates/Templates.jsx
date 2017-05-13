import React, { Component } from 'react';
import { Col, Panel, Row } from "react-bootstrap"
// import { Link } from "react-router";
import { browserHistory } from 'react-router'
import './Templates.css';

var premiumTemplates = [
  "Intro Email",
  "Follow up#1",
  "Follow up#2",
  "Follow up#3",
  "Project Qualifier",
  "Deal Closer",
  "Refferal Generator",
  "Refferal Generator",
  "Refferal Generator"
]
var personalTemplates = [
  "About Me",
  "Portfolio overview",
  "Team project Intro",
  "Status Update",
  "Summary",
  "Deal Closer(Copy)"
]

class Templates extends Component {
  render() {
    return (
      <div className="template-container">

        <Row className="new-template-row">
          <Col md={6} sm={6} xs={6}>
            <h1 className='template-heading'>Templates</h1>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <button
              className="btn btn-default pull-right template-button"
              style={{
                marginRight: "15px"
              }}>New Template</button>
          </Col>
        </Row>

        <div className="container1">
          <Col md={6} sm={12} xs={12}>
            <div className="first-col">
              <h1 className="panel-heading">Premium Templates</h1>
            </div>
            <Panel className="panel main-panel">
              <div>
                {premiumTemplates.map((val, i) => {
                  return (
                    <div className="panel-list" key={i}>
                      <span className="list-value">{val}</span>
                      <button className="btn pull-right btn-sm"  onClick={() => browserHistory.push('/dashboard/templateEditor')}>View</button>
                    </div>
                  )
                })}
              </div>
            </Panel>
          </Col>

          <Col md={6} sm={12} xs={12}>
            <div className="first-col">
              <h1 className="panel-heading">Personal Templates</h1>
            </div>
            <Panel className="panel main-panel">
              {personalTemplates.map((val, i) => {
                return (
                  <div className="panel-list" key={i}>
                    <span className="list-value">{val}</span>
                    <button className="btn pull-right btn-sm" onClick={() => browserHistory.push('/dashboard/templateEditor')}>View</button>
                  </div>
                )
              })}
            </Panel>
          </Col>

        </div>
      </div>

    );
  }
}

export default Templates;