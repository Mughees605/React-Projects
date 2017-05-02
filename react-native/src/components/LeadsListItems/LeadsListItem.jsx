import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './LeadsListItem.css'

class LeadsListItem extends Component{
  render(){
    return (
      <div className='lead-container'>
         <Row className="show-grid">
                <Col xs={12} md={6} sm={12}>
                  <h3 className="list-name">{this.props.listName}</h3>
                </Col>
              <Col xs={12} md={6} sm={12}  className="action-btn-group">

                <Col xs={12} sm={12} md={6} className="action-btn-edit-group">
                    <button className='btn btns edit-btn '>Edit</button>
                  </Col>
                   <Col xs={12} sm={12} md={6} className="action-btn-view-group">
                    <button className='btn btns view-btn'>View</button>
                  </Col>
              </Col>
            </Row>
      </div>
    )
  }
}

export default LeadsListItem;