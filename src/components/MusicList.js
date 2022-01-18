import React from 'react'
import {collection, getDocs, db} from '../firebase'
import { Link } from 'react-router-dom'
import Featured from './Featured';

class MusicList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AllMusic : []
        }
    }

    componentDidMount(){
        const fetchMusic = async () => {
            const data = await getDocs(collection(db, 'music'))
            let music = data.docs.map((e) => {
                return {...e.data(), id: e.id}
            })
            
            this.setState({ AllMusic: 
                // don't display featured music on music list 
                music
                /* music.filter(m => {return m.featured !== true} ) */
            })
        }
        fetchMusic();
    }

    render() {
        return (
            <>
           {/*  <h1 style={{textAlign: 'center'}}>We recommend for you</h1> */}
            <div id="MusicList">
            {
                this.state.AllMusic.map(music => {
                    if(music.featured){
                        return <div style={{width: '100vw'}}><Featured id={music.id} /></div> 
                    }
                    return (
                        <React.Fragment key={music.id}>
                    <div className="music-card"  style={{backgroundImage: `url(/static/${music.thumb})`}}>
                        <div>
                            <Link to={"/" + music.id}>
                                <h1>{music.title}</h1>
                            </Link>
                        </div>
                    </div>
                    </React.Fragment>
                    )
                }
                    
                
                
            )
            }
            </div></>
        )
    }
}

export default MusicList;