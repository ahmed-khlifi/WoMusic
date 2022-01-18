import React from 'react'

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            By Ahmed Khelifi {year} &copy; ahmed22khelifi@gmail.com
        </footer>
    )
}

export default Footer