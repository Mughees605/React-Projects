import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './LeadsLists.css';
import { LeadsListItem } from '../../components'

class LeadsLists extends Component {

  state = {
    leadsList: [
      {
        listName: 'ReactJS Projects',
      },
      {
        listName: 'New York City Local Design Projects',
      },
      {
        listName: 'Projects Requiring Collaboration',
      },
      {
        listName: 'Funded Startups',
      }
    ]
  };

  render() {
    var listCards = (
      this.state.leadsList.map(function (jobObj, key) {
        return (
          <Panel key={key} >
                <LeadsListItem listName={jobObj.listName}></LeadsListItem>
          </Panel>
        )
      })
    );

    return (
      <div className='lead-container'>
        <div className="title-container">
          <h2>Leads Lists</h2>
          <div className='new-list-container'>
            <button  className="btn btns new-list">New List</button>
          </div>
        </div>
        <Panel className="main-panel">
          {listCards}
        </Panel>
      </div>
    );
  }
}

export default LeadsLists;