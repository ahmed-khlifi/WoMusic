import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

const  Navbar = () => {
    return (
        <nav>
            <Link to={"/"}>
                <HomeIcon color="white" />
            </Link>
        </nav>
    )
}

export default Navbar;
