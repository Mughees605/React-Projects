import React from 'react';
import { Modal ,FormGroup, Checkbox } from 'react-bootstrap';

import './AddtoList.css'

const AddtoListModal = React.createClass({
    render() {
        return (
            <Modal className='addtoListModel' {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton className='header'>
                    <Modal.Title className='title'>
                        <span className="glyphicon glyphicon-list-alt icon"></span>Add to List
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className='body'>
                    <div className='inputBox'>
                        <input className='input' type="text" placeholder='New list...'/>
                    </div>

                    <div className="or-container">
                        OR
                    </div>    

                    <FormGroup className="checkbox-ul">
                        <Checkbox >
                             <span className="checkbox-text">ReactJS Projects</span>
                        </Checkbox>
                        <Checkbox >
                            <span className="checkbox-text">New York City Local Design Projects</span>
                        </Checkbox>
                        <Checkbox>
                            <span className="checkbox-text">Projects Requiring Collaboration</span>
                        </Checkbox>
                        <Checkbox>
                            <span className="checkbox-text">Funded Startups</span>
                        </Checkbox>
                    </FormGroup>

                    <Modal.Footer className='footer'>
                        <div>
                            <button type="button" className="btns btn contact-btn" onClick={this.props.onHide}>Cancel</button>
                            <button type="button" className="btns btn contact-btn-green" onClick={this.props.onHide}>Add</button>
                        </div>
                    </Modal.Footer>

                </Modal.Body>
            </Modal>
        );
    }
});

export default AddtoListModal;