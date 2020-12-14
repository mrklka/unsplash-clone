import React, { useState, useEffect } from 'react'
import './App.css';
import MainJumbotron from "./components/homepage/MainJumbotron"
import MainGallery from "./components/homepage/MainGallery"
import { db } from './firebase'

function HomePage() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
    })
  }, [])

  return (
    <div className="App">
      <MainJumbotron />
      <div className="maingallery_row" >
        <div className="maingallery_column">
          {
            posts.map(({ id, post }) => (
              post.tag === "Nature" ?
                <MainGallery key={id} username={post.username} tag={post.tag} timestamp={post.timestamp} imageUrl={post.imageUrl} />
                :
                console.log()
            ))
          }
        </div>
        <div className="maingallery_column">
          {
            posts.map(({ id, post }) => (
              post.tag === "Architecture" ?
                <MainGallery key={id} username={post.username} tag={post.tag} timestamp={post.timestamp} imageUrl={post.imageUrl} />
                :
                console.log()))
          }
        </div>
        <div className="maingallery_column">
          {
            posts.map(({ id, post }) => (
              post.tag === "People" ?
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

export default HomePage;
