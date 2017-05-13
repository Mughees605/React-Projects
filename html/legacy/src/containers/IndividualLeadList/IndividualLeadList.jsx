import React, { Component } from 'react';
import { Panel} from 'react-bootstrap';
import { LeadsItem } from '../../components';
import { browserHistory } from 'react-router';
import './IndividualLeadList.css';

class IndividualLeadList extends Component {
    state = {
        jobList: [
            {
                providerName: 'Will Martin', providerEmail: 'wmartin@pitch2sell.com', timestamp: 'Feb 25th', thumbnailUrl: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
                desc: 'Front end AngularJS developers: We are looking for front end AngularJS developers to work on projects to help build out our…'
            },
            {
                providerName: 'Phillip Kim', providerEmail: 'pek@impekable.com', timestamp: 'Feb 25th', thumbnailUrl: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
                desc: 'Front-End Developer: We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on…'
            },
            {
                providerName: 'Patrick Mcconnell', providerEmail: 'patrick.mcconnell@semanticbits.com', timestamp: 'Feb 25th', thumbnailUrl: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
                desc: 'Full-stack Engineer (Python, ReactJS, ElasticSearch, Node.js, AWS): SemanticBits is looking for a full-stack engineer to help us…'
            },
            {
                providerName: 'Will Martin', providerEmail: 'wmartin@pitch2sell.com', timestamp: 'Feb 25th', thumbnailUrl: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
                desc: 'Front end AngularJS developers: We are looking for front end AngularJS developers to work on projects to help build out our…'
            }

        ]
    };

    render() {
        return (
            <div className='individualLeadList'>
                <div className="title-container">
                    <h2>
                        <span className='cursorPointer' onClick={() => browserHistory.push('/dashboard/leadsLists')}>Lead Lists <i className="fa fa-caret-right icon" aria-hidden="true"></i> </span>
                        <span className="nameTitle"> Projects Requiring Collaboration</span>
                    </h2>
                </div>
                <Panel className="main-panel">
                    <LeadsItem jobList={this.state.jobList}></LeadsItem>
                </Panel >
            </div>

        );
    }
}

export default IndividualLeadList;