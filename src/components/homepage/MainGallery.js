import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"
function MainGallery({ username, imageUrl, timestamp }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showInfo, setShowInfo] = useState(false);

    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    return (
        <div>
            <span>
                <a href="# " onClick={handleShow}>
                    <img alt="homepage" src={imageUrl} />
                </a>

            </span>


            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <img src="/site_elements/nav_avatar.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />

                    <Modal.Title className="gallery_modal_username">{username}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <img className="gallery_model_image" alt="homepage" src={imageUrl} />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {window.open(`mailto:insertemail@example.com?subject=${imageUrl}&body=check out this picture!`);}} variant="outline-dark">Share</Button>
                    <Button onClick={handleShowInfo} variant="outline-dark">Info</Button>

                </Modal.Footer>
            </Modal>


            <Modal className="gallery_modal_info"show={showInfo} onHide={handleCloseInfo} size='md' centered>
                <Modal.Header closeButton>

                    <h5>Info</h5>

                </Modal.Header>
                <Modal.Body>
                    <p className="gallery_modal_info_date"><br /><br />Published on {timestamp.toDate().toString()}</p>

                </Modal.Body>
                <Modal.Footer>
                    
                    <div className="gallery_modal_info_row">
                        <div className="gallery_modal_info_column">
                            <p>Camera Make</p>
                            <p>--</p>
                            <p>Aperture</p>
                            <p>--</p>
                        </div>
                        <div className="gallery_modal_info_column">
                            <p>Camera Model</p>
                            <p>--</p>
                            <p>Shutter</p>
                            <p>--</p>
                        </div>
                        <div className="gallery_modal_info_column">
                            <p>Focal Length</p>
                            <p>--</p>
                            <p>ISO</p>
                            <p>--</p>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>





        </div>




    )
}

export default MainGallery
