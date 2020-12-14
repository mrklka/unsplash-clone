import React, { useState } from 'react'
import { storage, db } from '../../firebase'
import firebase from "firebase";
import { Button } from "react-bootstrap"

function UploadComp({ username }) {
    const [image, setImage] = useState(null)
    const [tag, setTag] = useState('')

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        const uploadNewImage = storage.ref(`images/${image.name}`).put(image);


        uploadNewImage.on(
            "state_changed",
            (snapshot) => {
                
                switch (snapshot.state) {
                    case firebase.storage.TaskState.SUCCESS: 
                      alert('Upload complete');
                      break;
                    case firebase.storage.TaskState.ERROR: 
                      alert('Upload error encountered!');
                      break;
                    default:
                      console.log("waiting...");
                }
            },
            (error) => {
                alert(error.message)
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL().then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        tag: tag,
                        imageUrl: url,
                        username: username
                    })

                    setTag("");
                    setImage(null)
                })
            }
        )
    }

    return (
        <div className="imageupload">
                <div className="upload_modal_body">
                    <div className="upload_modal_body_prompt">
                        <img src="/site_elements/upload_modal_icon.png" alt="" />
                        <p>By clicking below, you can <br /> <span>Browse</span> to choose a file.</p>
                        <input type="file" onChange={handleChange} />
                        <br /><br />
                        <input type="text" placeholder="Enter Image Tag" onChange={event => setTag(event.target.value)} value={tag} />
                        <br /><br />
                        <Button onClick={handleUpload}>Upload</Button>
                    </div>
                </div>


        </div>
    )
}

export default UploadComp
