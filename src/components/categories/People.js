import React, { useState, useEffect } from 'react'
import MainGallery from '../homepage/MainGallery'
import {db} from '../../firebase'
function People() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').where("tag", "==", "People").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
      })
    }, [])
  

    return (
      <div className="App">
          <div className="category_headline">
            <h1 class="catergory_title">People</h1>
             <p class="catergory_description">Real people, captured. Photography has the power to reflect the world around us, give voice to individuals and groups within our communities — and most importantly — tell their story.</p>
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
  
  export default People;
  