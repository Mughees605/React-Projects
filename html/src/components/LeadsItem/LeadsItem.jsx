import React, {Component} from 'react'
import {Col, Panel, Row} from 'react-bootstrap'
import AddtoListModel from '../Modals/AddtoList/AddtoList'
import {browserHistory} from 'react-router'
import s from './LeadsItem.scss'
import cn from 'classnames'

class LeadsItem extends Component {
  state = {
    addtoListModal: false,
    jobList: this.props.jobList,
  };

  render() {
    var _self = this
    let closeAddtoListModal = () => this.setState({addtoListModal: false})
    var jobCards = (
      this.state.jobList.map(function(jobObj, key) {
        return (
          <Panel key={key}>
            <Row className='show-grid'>
              <Col
                xs={12}
                md={10}
                sm={9}>
                <Col
                  xs={4}
                  md={2}
                  sm={3}>
                  <img
                    src={jobObj.thumbnailUrl}
                    className='thumbnail-img'
                    alt='thumbnail'/>
                </Col>
                <Col
                  xs={8}
                  md={10}
                  sm={9}>
                  <h3
                    className='green-text'
                    onClick={() => browserHistory.push('/dashboard/leads/' + key)}>{jobObj.providerName}</h3>
                  <h5>{jobObj.providerEmail} | www.wfh.io | {jobObj.timestamp}</h5>
                  <p className='des'> {jobObj.desc} <a
                    href=''
                    className='green-text'>read more</a>
                  </p>
                </Col>
              </Col>
              <Col
                xs={12}
                sm={3}
                md={2}
                className='action-btn-group'>
                <div
                  className={cn(s.btn, 'btns green-bg')}
                  onClick={() => browserHistory.push('/dashboard/leads/' + key)}>View lead
                </div>
                <div
                  className={cn(s.btn, 'btns')}
                  style={{backgroundColor: 'gray'}}
                  onClick={() => _self.setState({addtoListModal: true})}>Add to List
                </div>
                <div
                  className={cn(s.btn, 'btns')}
                  style={{backgroundColor: 'gray'}}>Archive
                </div>
              </Col>
            </Row>
          </Panel>
        )
      })
    )

    return (
      <div>
        <AddtoListModel
          show={this.state.addtoListModal}
          onHide={closeAddtoListModal}/>
        {jobCards}
      </div>
    )
  }
}

export default LeadsItem
