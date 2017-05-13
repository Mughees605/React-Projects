import React, { Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import './SalesSteps.css';

class SalesSteps extends Component {

  state = {
    salesSteps: [
      {
        providerName: 'Patrick Mcconnell',
        title: 'Follow Up'
      },
      {
        providerName: 'Phillip Kim',
        title: 'Social '
      },
      {
        providerName: 'Jon VerLee',
        title: 'Follow Up'
      },
      {
        providerName: 'Phillip Kim',
        title: 'Leave Voicemail'
      },
      {
        providerName: 'Will Martin',
        title: 'Social'
      }
    ]
  };

  render() {

    var salesCards = (
      this.state.salesSteps.map(function (salesObj, key) {
        return (
          <Panel key={key}>
            <Row className="show-grid">
              <Col xs={12} md={4} sm={9}>
                <Col xs={6} md={4} sm={3}>
                  <img src='http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
                    className="thumbnail-img" alt="thumbnail" />
                </Col>
                <Col xs={6} md={8} sm={9}>
                  <h2 className='name'>{salesObj.providerName}</h2>
                  <h1 className='title'>{salesObj.title}</h1>
                </Col>
              </Col>
              <Col xs={12} sm={3} md={8} style={{ marginTop: '35px' }} className="action-btn-group">
                <button type="button" className="btns btn contact-btn"> Lead Won</button>
                <button type="button" className="btns btn contact-btn"> Lead Lost</button>
                <div className='Line'></div>
                <button type="button" className="btns btn contact-btn"> Skip Step</button>
                <button type="button" className="btns btn contact-btn-green"> Completed</button>
              </Col>
            </Row>
          </Panel>
        )
      })
    );

    return (
      <div>

        <div className='sales-steps'>
          <div className="title-container">
            <h2 className='sales-Steps-title'>Sales Steps</h2>
        </div>
          <Panel style={{ backgroundColor: '#f8f8f8' }}>
            {salesCards}
          </Panel>
        </div>
      </div>

    );
  }
}

export default SalesSteps;