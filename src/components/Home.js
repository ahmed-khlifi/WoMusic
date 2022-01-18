import React from 'react'
import MusicList from './MusicList'
import Featured from './Featured'
import Artist from './Artist'
import Footer from './Footer'
import { motion } from "framer-motion"

class Home extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <div id="home" style={{backgroundImage: 'url("/static/bg.png")'}}>
                        <h1> Welcom to WoMusic</h1> 
                </div>
                <MusicList />
                <Artist />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;