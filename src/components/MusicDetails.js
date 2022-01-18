import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../firebase'
import {getDoc, doc} from 'firebase/firestore'
import VideoPop from './VideoPop';


function MusicDetails(props) {

    const id = useParams().idMusic || props.id;
    const [music, setMusic] = useState({})
    const [fetch, setFetch] = useState(false)
    const [vid, setVid] = useState('')
    
    useEffect(() => {
        const getMusic = async () => {
            let d = doc(db, "music", id)
            let result = await getDoc(d)
            let vlink = result.data().link.split('/')
            setVid(vlink[3])
            setFetch(true)
            await setMusic(result.data());
        }
        if (!fetch) {
            getMusic();
        }
    })
    



  return (
    <div className="music-details" style={{backgroundImage: `url(/static/${music.thumb})`}}>
        <div>
            <div>
                {props.id && <h3 className="highlighted">Featured</h3>}
                <h1>{music.title}</h1>
                <h2>By {music.artist}</h2>
                <p>{music.description}</p>
            </div>
               <VideoPop vid={vid} />
        </div>
    </div>
  );
}

export default MusicDetails;