import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../firebase'
import {getDoc, doc} from 'firebase/firestore'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


function MusicDetails() {

    const id = useParams().idMusic;
    const [music, setMusic] = useState({})
    const [fetch, setFetch] = useState(false)
    
    useEffect(() => {
        const getMusic = async () => {
            let d = doc(db, "music", id)
            let result = await getDoc(d)
            setFetch(true)
            setMusic(result.data());
            console.log(result.data())
        }
        if (!fetch) {
            getMusic();
        }
    }, [])



  return (
    <div id="music-details" style={{backgroundImage: `url(/static/${music.thumb})`}}>
        <div>
            <div>
                <h1>{music.title}</h1>
                <h2>By {music.artist}</h2>
                <p>{music.description}</p>
            </div>
            <a href={music.link} target="_blank">
               <PlayCircleFilledWhiteIcon color="white" sx={{ fontSize: 70 }}/>
            </a>
        </div>
    </div>
  );
}

export default MusicDetails;