import React from 'react'
import {Modal, ModalBody} from 'reactstrap'

const PopUpModal = (props) => (
    <Modal isOpen={props.isOpen} className="popup-modal" toggle={props.togglePopModal}
           centered={true}>
        <button className="popup-modal__close" onClick={props.togglePopModal}>
            <div className="sr-only">Close</div>
        </button>
        <ModalBody className="py-5">
        <h2 className="text--dark-grey text--bold">ADDITIONAL HALF TERM MATINEES</h2>
        <h3 className="text--red text--bold">Extra matinees on Tuesdays 22nd and 29th October at 2.30pm</h3>
        <p className="text--black text--bold">Tickets selling fast!</p>
        <div className="btn btn--red"><a className="btn-book-tickets" href="https://www.nederlander.co.uk/whats-on/big/dates" target="_blank" rel="noreferrer noopener">Book Tickets</a></div>

        </ModalBody>
    </Modal>
);

export default PopUpModal