import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'
import EditListModel from '../Modals/EditList/EditList'
import {browserHistory} from 'react-router'
import s from './LeadsListItem.scss'
import cn from 'classnames'

class LeadsListItem extends Component {
  state = {
    editListModal: false,
  }

  render() {
    let closeEditListModal = () => this.setState({editListModal: false})
    const {Index,onUpdate,listName} = this.props
    return (
      <div className='lead-container'>
        <EditListModel
          listName={listName}
          Index={Index}
          onUpdate={onUpdate}
          onShow={this.state.editListModal}
          onHide={closeEditListModal}/>
        <Row className='show-grid'>
          <Col
            xs={12}
            md={6}
            sm={12}>
            <h3 className='list-name'>{listName}</h3>
          </Col>
          <Col
            xs={12}
            md={6}
            sm={12}
            className='action-btn-group'>

            <Col
              xs={12}
              sm={12}
              md={6}
              className='action-btn-edit-group'>
              <button
                className={cn(s.btn, 'btns edit-btn')}
                onClick={() => this.setState({editListModal: true})}>Edit
              </button>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              className='action-btn-view-group'>
              <button
                className={cn(s.btn, 'btns view-btn')}
                onClick={() => browserHistory.push('/dashboard/individualLeadList')}>View
              </button>
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LeadsListItem
