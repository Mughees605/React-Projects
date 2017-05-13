import React, {Component} from 'react'
import {Panel} from 'react-bootstrap'
import CreateNewListModel from 'components/Modals/CreateNewList'
import s from './LeadsLists.scss'
import cn from 'classnames'
import LeadsListItems from 'components/LeadsListItems'

class LeadsLists extends Component {

  componentWillMount() {
    this.props.getLeadsListsAttempt()
  }
 
  state = {
    createNewListModal: false
  };

  closeCreateNewListModal() {
    this.setState({createNewListModal: false})
  }

  render() {
    const {leadsLists} = this.props

    let listCards = (
      leadsLists && leadsLists.map(listItem => {
        return (
          <Panel key={listItem.key}>

            {/*{console.log(listItem.key,"listItem")}*/}
            <LeadsListItems listName={listItem.value.name} Index={listItem.key} onUpdate={this.props.updateLeadsListAttempt}/>
          </Panel>
        )
      }
    ))
    
    return (
      <div className='lead-container'>
        <div className='title-container'>
          <h2>Leads Lists</h2>
          <div className='new-list-container'>
            <button
              className={cn(s.btn, 'btns new-list')}
              onClick={() => this.setState({createNewListModal: true})}>New List
            </button>
          </div>
        </div>
        <Panel className='main-panel'>
          <CreateNewListModel
            show={this.state.createNewListModal}
            onHide={this.closeCreateNewListModal.bind(this)}/>
          {listCards}
        </Panel>
      </div>
    )
  }
}

export default LeadsLists
