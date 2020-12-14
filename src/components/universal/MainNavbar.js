import React, { useState, useEffect } from 'react'
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { auth } from '../../firebase'
import { Button, Modal, Form } from "react-bootstrap"
import UploadComp from '../homepage/UploadComp';
import {

    Link
} from "react-router-dom";



function MainNavbar() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    //Main Modal Handle
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //LoginIn Modal Handle
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    //Upload Modal Handle
    const [showUploadModal, setUploadModal] = useState(false);
    const handleCloseUploadModal = () => setUploadModal(false);
    const handleShowUploadModal = () => setUploadModal(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser)
            } else {
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [user, username])

    const signUp = (event) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => alert(error.message))

        setShow(false)
    }

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))
        setShowLogin(false)
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <Link to="/" className="navbar-brand"  >
                    <img src="/site_elements/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn  my-2 my-sm-0" type="submit">
                            <img src="/site_elements/nav_search_icon.png" width="18" height="18" alt="" />

                        </button>
                        <input className="mainnavbar_search form-control mr-sm-2" type="search" placeholder="Search free high-resolution photos" aria-label="Search"></input>
                    </form>

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="# ">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="# ">Brands</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="# " id="dropdown-basic" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ...</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="# ">Blog</a>
                                <a className="dropdown-item" href="# ">Topics</a>
                                <a className="dropdown-item" href="# ">Collections</a>
                            </div>
                        </li>
                        {
                            user ? (
                                <div>
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <button type="button" onClick={handleShowUploadModal} class="navbar-submit-modal btn btn-outline-dark">Submit A Photo</button>
                                        </li>
                                        <li id="dropdown-basic" className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="# " id="dropdown-basic" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="/site_elements/nav_avatar.jpg" width="30" height="30" className="login_avatar" alt="" /></a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                                <a className="dropdown-item" onClick={() => auth.signOut()} href="# ">Logout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                    <div>
                                        <ul className="navbar-nav mr-auto">

                                            <li className="nav-item">
                                                <hr />
                                            </li>
                                            <li className="nav-item">
                                                <Button onClick={handleShowLogin} variant="light">Login</Button>
                                            </li>
                                            <li className="nav-item">
                                                <Button onClick={handleShow} variant="success">Join free</Button>{' '}
                                            </li>


                                        </ul>
                                    </div>
                                )
                        }


                    </ul>
                </div>
            </nav>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-nav">
                    <Link to="/" class="nav-item nav-link" >Editorial</Link>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span>View Tags</span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/nature" class="nav-item nav-link" >Nature</Link>
                        <Link to="/people" class="nav-item nav-link" >People</Link>
                        <Link to="/architecture" class="nav-item nav-link" >Architecture</Link>
                        <Link to="/experimental" class="nav-item nav-link" >Experimental</Link>
                        <Link to="/fashion" class="nav-item nav-link" >Fashion</Link>
                        <Link to="/film" class="nav-item nav-link" >Film</Link>
                    </div>
                </div>

            </nav>



            <Modal centered show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>

                    <Modal.Title className="gallery_modal_username">Join Unsplash</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button size="lg" onClick={signUp} block variant="dark" type="submit">Join</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Modal centered show={showLogin} onHide={handleCloseLogin} size='lg'>
                <Modal.Header closeButton>

                    <Modal.Title className="gallery_modal_username">Login</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button size="lg" onClick={signIn} block variant="dark" type="submit">Sign in</Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Modal centered show={showUploadModal} onHide={handleCloseUploadModal} size='lg'>
                <Modal.Header closeButton>

                    <Modal.Title className="gallery_modal_username">Submit to Unsplash</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    {
                        user ?
                            <div>
                                <UploadComp username={user.displayName} />

                            </div> :
                            <div>
                                <h1>Please login or register to upload an image.</h1>
                            </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className="upload_modal_info_row">
                        <div className="upload_modal_info_column">
                            <ul>
                                <li>High quality photos (at least 5MP)</li>
                                <li>Photos are clear & original</li>
                            </ul>
                        </div>
                        <div className="upload_modal_info_column">
                            <ul>
                                <li>Only upload photos you own the rights to</li>
                                <li>Zero tolerance for nudity, violence or hate</li>
                            </ul>
                        </div>
                        <div className="upload_modal_info_column">
                            <ul>
                                <li>Respect the intellectual property of others</li>
                                <li>Read the Unsplash Terms</li>
                            </ul>
                        </div>
                    </div>

                </Modal.Footer>
            </Modal>


        </div>
    )
}


export default MainNavbar

