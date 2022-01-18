import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {getDoc, doc} from 'firebase/firestore'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Artist() {

    const [artist, setArtist] = useState({})
    const [images, setImages] = useState([])
    useEffect(() => {
        const getArtist = async () => {
            const data = doc(db, "artist", 'Fv70yV24Wd1Pb6IkUzVV');
            let result = await getDoc(data)
            setArtist(result.data())
            setImages(result.data().image)
        }
        getArtist()
    }, [])

    return (
        <div>
            <div className="artist">
                <div>
                    <h1>{artist.name}</h1>
                    <span>
                        <h2><strong>{artist.job}</strong> </h2>
                        <span>{artist.age} years old</span>
                    </span>
                    <p>{artist.description}</p>
                </div>
                <img src={"/static/" + images[1]} />
            </div>
            
        </div>
    )
}
