import React from 'react';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {db} from '../firebase'
import {getDoc, doc} from 'firebase/firestore'
import MusicDetails from './MusicDetails'

export default class Featured extends React.Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <MusicDetails id="KpczdPiyTCbDSK4kHaqg" />
            </>
        )
    }

}