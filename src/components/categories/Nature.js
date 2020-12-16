import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import {db} from '../../firebase'
function Nature() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').where("tag", "==", "Nature").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
      })
    }, [])
  

    return (
      <div className="App">
          <div className="category_headline">
            <h1 class="catergory_title">Nature</h1>
             <p class="catergory_description">Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.</p>
          </div>

        <div  >
          <div className="category_column">
            {
              posts.map(({ id, post }) => (
                post  ?
                  <MainGallery key={id} username={post.username} tag={post.tag} timestamp={post.timestamp} imageUrl={post.imageUrl} />
                  :
                  console.log()
              ))
            }
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Nature;
  