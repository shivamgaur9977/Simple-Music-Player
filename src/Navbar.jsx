import React from 'react';

export default function Navbar() {

    return (
        <nav style={{display:"flex", justifyContent:'space-between', flexaWrap: 'wrap'}}>
            <ul>
                <li className='brand'><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="spotify" />Spotify</li>
                <li>Home</li>
                <li>About</li>
            </ul>
            <button className='add-music-btn'>Add Music</button>
        </nav>
    )
}