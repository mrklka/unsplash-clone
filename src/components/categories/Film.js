import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import {db} from '../../firebase'
function Film() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').where("tag", "==", "Film").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
      })
    }, [])
  

    return (
      <div className="App">
          <div className="category_headline">
            <h1 class="catergory_title">Film</h1>
             <p class="catergory_description">Through the use of unlikely textures, intriguing subject matter, and new formats — photography has the power to challenge our perspectives and push creativity forward.
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
  
  export default Film;
  