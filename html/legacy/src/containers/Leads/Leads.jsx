import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';
import EditTagModel from '../../components/Modals/EditTags/EditTag';
import { LeadsItem } from '../../components'
import './Leads.css';

class Leads extends Component {

  state = {
    editTagModal: false,
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
    var _self = this;
      let closeEditTagModal = () => this.setState({ editTagModal: false });
      const title = (
      <div className='header'>
        <ul className="tags-list list-inline">
          <li>#full-stack</li>
          <li>#graphics</li>
          <li>#mobile</li>
          <li>#php</li>
        </ul>
        <button className="btn edit-tags"  onClick={()=>_self.setState({ editTagModal: true })}>Edit Tags</button>
      </div>
    );
    return (
      <div className='lead-container'>
        <div className="title-container">
          <h2>My Leads</h2>
          <p>View All | View Archived</p>
        </div>
        <Panel header={title} className="main-panel">
         
          <EditTagModel show={this.state.editTagModal} onHide={closeEditTagModal} />
          <LeadsItem jobList={this.state.jobList}></LeadsItem>
        </Panel>
      </div>
    );
  }
}

export default Leads;