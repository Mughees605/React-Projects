import React, {Component} from 'react';
import './Templates.css';
import {Col, Panel, Row} from "react-bootstrap"
import {Link} from "react-router";

const title = (
  <h1 className='panel-heading'>Premium Templates</h1>
);
const secondTitle = (
  <h1 className='panel-heading'>My Templates</h1>
);
var primaryTemplates = [
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

        <div style={{
          width: "100%"
        }}>
          <h1 className='template-heading'>Templates</h1>
          
            <button
              className="btn btn-default pull-right template-button"
              style={{
              marginRight: "15px"
            }}>New Template</button>
        </div>

        <div className="container">
          <Row>
            <Col md={6} sm={12} xs={12} className="Grid1"> 
              <div className="first-col">
                <h1 className="panel-heading">Premium Templates</h1>
              </div>
              <Panel className="panel main-panel">
                <div>
                  {primaryTemplates.map((val, i) => {
                    return (
                      <div className="panel-list" key={i}>
                        <span className="list-value">{val}</span>
                        <button className="btn pull-right btn-sm">View</button>
                      </div>
                    )
                  })}
                </div>
              </Panel>
            </Col>

            <Col md={6} sm={12} xs={12} className="Grid2">
              <div className="first-col">
                <h1 className="panel-heading">Personal Templates</h1>
              </div>
              <Panel className="panel main-panel">
                {personalTemplates.map((val, i) => {
                  return (
                    <div className="panel-list" key={i}>
                      <span className="list-value">{val}</span>
                      <button className="btn pull-right btn-sm">View</button>
                    </div>
                  )
                })}
              </Panel>
            </Col>
          </Row>

        </div>
      </div>

    );
  }
}

export default Templates;