import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import {db} from '../../firebase'
function Fashion() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
      })
    }, [])
  

    return (
      <div className="App">
          <div className="category_headline">
            <h1 class="catergory_title">Fashion</h1>
             <p class="catergory_description">From street-style shots to editorial photography — find the latest trends in beauty and fashion.</p>
          </div>

        <div  >
          <div className="category_column">
            {
              posts.map(({ id, post }) => (
                post.tag === "Fashion" ?
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
  
  export default Fashion;
  