import React from 'react'

class MainJumbotron extends React.Component {

    render() {

        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="jumbotron_container container">
                        <h1 className="jumbotron_brand display-4">Unsplash</h1>
                        <p className="jumbotron_lead lead">The internet's source of free-usable images.</p>
                        <p className="jumbotron_lead lead">Powered by no one...</p>



                        <div className="jumbotron_search">
                            <form className=" form-inline my-2 my-lg-0">
                                <button className="btn my-2 my-sm-0" type="submit">
                                    <img src="/site_elements/nav_search_icon.png" width="18" height="18" alt="" />

                                </button>
                                <input className="jumbotron_search_input form-control mr-sm-2" type="search" placeholder="Search free high-resolution photos" aria-label="Search"></input>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default MainJumbotron
