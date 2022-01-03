import React from 'react'
import MusicList from './MusicList'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <h1> Welcom to TMT</h1> 
                    <p>Find the best music that suits you best for 2022 !</p>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} size="3x"/>
                </div>
                <MusicList />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;