import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {collection, getDocs, db} from '../firebase'
import { Link } from 'react-router-dom'


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
            console.log(data.docs[0].data())
            let music = data.docs.map((e) => {
                return {...e.data(), id: e.id}
            })

            this.setState({ AllMusic: music })
        }
        fetchMusic();
    }

    render() {
        return (
            <>
            <h1 style={{textAlign: 'center'}}>We recommend for you</h1>
            <div id="MusicList">
            {
                this.state.AllMusic.map(music => 
                    <Card sx={{ width: 345 }} key={music.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={"/static/" + music.thumb}
                            alt="green iguana"
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {music.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">{music.artis}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={"/" + music.id}><Button size="small">Details</Button></Link>
                            <a href={music.link} target="_blank"><Button size="small">See on youtube</Button></a>
                        </CardActions>
                    </Card>                  
                
                
            )
            }
            </div></>
        )
    }
}

export default MusicList;