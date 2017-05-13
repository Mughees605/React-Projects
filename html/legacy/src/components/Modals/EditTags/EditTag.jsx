import React from 'react';
import { Modal} from 'react-bootstrap';

import './EditTag.css'

const EditTagModal = React.createClass({
    render() {
        return (
            <Modal className='editTagModel' {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton className='header'>
                    <Modal.Title className='title'>
                        <span className="glyphicon glyphicon-list-alt icon"></span>Edit Your Tags
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className='body'>
                    <div className='inputBox'>
                        <input className='input' type="text" placeholder='Search tag name…'/>
                    </div>

                    <div className="tag-container">
                        My Tags
                    </div>

                    <div className="mytags">
                        <ul>
                            <li>#full-stack <span>x</span></li>
                            <li>#graphics <span>x</span></li>
                            <li>#mobile <span>x</span></li>
                            <li>#php <span>x</span></li>
                        </ul>
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

export default EditTagModal;