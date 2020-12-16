import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import { Button, FormControl } from 'react-bootstrap'

function MainJumbotron() {

    const [searchTerm, setSearchTerm] = useState('')



    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="jumbotron_container container">
                    <h1 className="jumbotron_brand display-4">Unsplash</h1>
                    <p className="jumbotron_lead lead">The internet's source of free-usable images.</p>
                    <p className="jumbotron_lead lead">Powered by no one...</p>



                    <div className="jumbotron_search">
                        <nav class="navbar navbar-light">

                            <form className=" form-inline my-2 my-lg-0">


                                <FormControl onChange={event => setSearchTerm(event.target.value)} value={searchTerm} className="jumbotron_search_input form-control mr-sm-2" placeholder="Search free high-resolution photos" aria-label="Search" aria-describedby="basic-addon1" />

                                <Link to={{ pathname: `/image/${searchTerm}` }}  >
                                    <Button className="jumbotron_search_icon" variant="light">
                                        <img src="/site_elements/nav_search_icon.png" width="18" height="18" alt="" />
                                    </Button>

                                </Link>

                            </form>

                        </nav>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default MainJumbotron
