import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import { db } from '../../firebase'
import { useParams } from 'react-router-dom';

function Search() {
    const { search } = useParams();
    const searchFix = search.charAt(0).toUpperCase() + search.substring(1,search.length);

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').where("tag", "==", searchFix).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
        })
    }, [searchFix])


    return (

        <div className="App">
            <div className="category_headline">
                <h1 class="catergory_title"> "{search}"</h1>
                <p class="catergory_description">Showing results for your query...</p>
            </div>

            <div  >
                <div className="category_column">
                    {
                    posts.length !== 0 ?
                        posts.map(({ id, post }) => (

                                <MainGallery key={id} username={post.username} tag={post.tag} timestamp={post.timestamp} imageUrl={post.imageUrl} />

                        ))
                        :

                        <div>
                            <br /><br /><br />
                            <img className="search_notfound_img" src="/site_elements/notfound.png" alt="" />
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default Search;
