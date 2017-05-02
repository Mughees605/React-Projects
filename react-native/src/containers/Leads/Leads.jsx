import React, { Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './Leads.css';

class Leads extends Component {

  state = {
    jobList: [
      {
        providerName: 'Phillip Kim', providerEmail: 'pek@impekable.com', timestamp: 'Feb 25th', thumbnailUrl:'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
        desc: 'Front-End Developer: We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on…'
      },
      {
        providerName: 'Patrick Mcconnell', providerEmail: 'patrick.mcconnell@semanticbits.com', timestamp: 'Feb 25th', thumbnailUrl:'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
        desc: 'Full-stack Engineer (Python, ReactJS, ElasticSearch, Node.js, AWS): SemanticBits is looking for a full-stack engineer to help us…'
      },
      {
        providerName: 'Will Martin', providerEmail: 'wmartin@pitch2sell.com', timestamp: 'Feb 25th', thumbnailUrl:'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
        desc: 'Front end AngularJS developers: We are looking for front end AngularJS developers to work on projects to help build out our…'
      }
    ]
  };

  render() {
    const title = (
      <div className='header'>
        <ul className="tags-list list-inline">
          <li>#full-stack</li>
          <li>#graphics</li>
          <li>#mobile</li>
          <li>#php</li>
        </ul>
        <button className="btn edit-tags">Edit Tags</button>
      </div>
    );

    var jobCards = (
      this.state.jobList.map(function (jobObj, key) {
        return (
          <Panel key={key} onClick={() => browserHistory.push('/dashboard/leads/'+key)}>
            <Row className="show-grid">
              <Col xs={12} md={10} sm={9}>
                <Col xs={4} md={2} sm={3}>
                  <img src={jobObj.thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
                </Col>
                <Col xs={8} md={10} sm={9}>
                  <h3 className="green-text">{jobObj.providerName}</h3>
                  <h5>{jobObj.providerEmail} | www.wfh.io | {jobObj.timestamp}</h5>
                  <p className='des'> {jobObj.desc} <a href="javascript:void(0)" className="green-text">read more</a>
                  </p>
                </Col>
              </Col>
              <Col xs={12} sm={3} md={2} className="action-btn-group">
                <div className='btn btns green-bg'>View lead</div>
                <div className='btn btns' style={{ backgroundColor: 'gray' }}>Add to List</div>
                <div className='btn btns' style={{ backgroundColor: 'gray' }}>Archive</div>
              </Col>
            </Row>
          </Panel>
        )
      })
    );

    return (
      <div className='lead-container'>
        <div className="title-container">
          <h2>My Leads</h2>
          <p>View All | View Archived</p>
        </div>
        <Panel header={title} className="main-panel">
          {jobCards}
        </Panel>
      </div>
    );
  }
}

export default Leads;