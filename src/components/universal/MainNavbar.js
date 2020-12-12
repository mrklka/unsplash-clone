import React from 'react'
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.min.js";



class MainNavbar extends React.Component {

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                    <a className="navbar-brand" href="#  ">
                        <img src="/site_elements/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    </a>
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
                                <a className="nav-link dropdown-toggle" href="# " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ...</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="# ">Blog</a>
                                    <a className="dropdown-item" href="# ">Topics</a>
                                    <a className="dropdown-item" href="# ">Collections</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button type="button" class="navbar-submit-modal btn btn-outline-dark">Submit A Photo</button>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="#  ">
                                    <img src="/site_elements/nav_avatar.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="# ">Editorial</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span>View Tags</span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="# ">Wallpapers</a>
                            <a class="nav-item nav-link" href="# ">Nature</a>
                            <a class="nav-item nav-link" href="# ">People</a>
                            <a class="nav-item nav-link" href="# ">Architecture</a>
                            <a class="nav-item nav-link" href="# ">Current Events</a>
                            <a class="nav-item nav-link" href="# ">Experimental</a>
                            <a class="nav-item nav-link" href="# ">Fashion</a>
                            <a class="nav-item nav-link" href="# ">Film</a>
                            <a class="nav-item nav-link" href="# ">Health & Wellness</a>
                            <a class="nav-item nav-link" href="# ">Interiors</a>
                            <a class="nav-item nav-link" href="# ">Street Photography</a>
                            <a class="nav-item nav-link" href="# ">Technology</a>
                            <a class="nav-item nav-link" href="# ">Travel</a>
                            <a class="nav-item nav-link" href="# ">Textures & Patterns</a>
                            <a class="nav-item nav-link" href="# ">Business & Work</a>
                            <a class="nav-item nav-link" href="# ">Animals</a>
                            <a class="nav-item nav-link" href="# ">Food & Drink</a>
                            <a class="nav-item nav-link" href="# ">Athletics</a>

                        </div>
                    </div>

                </nav>





            </div>
        )
    }
}

export default MainNavbar

