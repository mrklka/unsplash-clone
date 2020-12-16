import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import {db} from '../../firebase'
function Architecture() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').where("tag", "==", "Architecture").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
      })
    }, [])
  

    return (
      <div className="App">
          <div className="category_headline">
            <h1 class="catergory_title">Architecture</h1>
             <p class="catergory_description">Explore exteriors from around the world — from brutalist buildings to minimalist structures that will give you a new appreciation for the art of architecture.
</p>
          </div>

        <div  >
          <div className="category_column">
            {
              posts.map(({ id, post }) => (
                post ?
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
  
  export default Architecture;
  