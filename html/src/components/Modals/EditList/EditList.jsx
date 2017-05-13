import React from 'react'
import {Modal} from 'react-bootstrap'
import s from './EditList.scss'
import cn from 'classnames'

const CreateNewListModal = React.createClass({
  updateList(){
    var {Index,onHide,onUpdate} = this.props;
    var text = this.refs.text.value;
    onUpdate(Index,text);
    onHide();
  },
  render() {
    const {onShow,onHide,listName} = this.props;
    return (
      
      <Modal
        className='editListModel'
        show={onShow}
        bsSize='large'
        aria-labelledby='contained-modal-title-lg'>
        <Modal.Header
          closeButton
          className='header'>
          <Modal.Title className='title'>
            <span className='glyphicon glyphicon-list-alt icon'></span>
            Edit List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='body'>
          <div className='inputBox'>
            <input
               ref="text"
              className='input'
              type='text'
              placeholder={listName}/>
          </div>
          <Modal.Footer className='footer'>
            <div>
              <button
                type='button'
                className={cn(s.btn, 'btns contact-btn')}
                onClick={onHide}>Cancel
              </button>
              <button
                type='button'
                className={cn(s.btn, 'btns contact-btn-red')}
                onClick={onHide}>Delete
              </button>
              <button
                type='button'
                className={cn(s.btn, 'btns contact-btn-green')}
                onClick={this.updateList}>Save
              </button>
            </div>
          </Modal.Footer>

        </Modal.Body>
      </Modal>
    )
  },
})

export default CreateNewListModal
