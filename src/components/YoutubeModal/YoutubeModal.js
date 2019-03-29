import React from 'react'
import {Modal, ModalBody} from 'reactstrap'

const YoutubeModal = (props) => (
    <Modal isOpen={props.isOpen} className="youtube-modal" toggle={props.toggleModal}
           centered={true}>
        <button className="youtube-modal__close" onClick={props.toggleModal}>
            <div className="sr-only">Close</div>
        </button>
        <ModalBody>
            <div className="video-wrapper">
                <iframe className="video-frame" width="100%" src={`https://www.youtube.com/embed/${props.videoId}?rel=0&amp;autoplay=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </ModalBody>
    </Modal>
);

export default YoutubeModal