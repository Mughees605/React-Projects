import React from 'react';
import { Modal} from 'react-bootstrap';

import './CreateNewList.css'

const CreateNewListModal = React.createClass({
    render() {
        return (
            <Modal className='createNewListModel' {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton className='header'>
                    <Modal.Title className='title'>
                        <span className="glyphicon glyphicon-list-alt icon"></span>Create New List
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className='body'>
                    <div className='inputBox'>
                        <input className='input' type="text" placeholder='New list...'/>
                    </div>
                    <Modal.Footer className='footer'>
                        <div>
                            <button type="button" className="btns btn contact-btn" onClick={this.props.onHide}>Cancel</button>
                            <button type="button" className="btns btn contact-btn-green" onClick={this.props.onHide}>Save</button>
                        </div>
                    </Modal.Footer>

                </Modal.Body>
            </Modal>
        );
    }
});

export default CreateNewListModal;