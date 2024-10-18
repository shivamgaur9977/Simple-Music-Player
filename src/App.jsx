import { useEffect, useRef, useState } from 'react'
import './App.css'
import SongList from './SongList';
import myAudioFile from './assets/songs/11.mp3';

import song1 from './assets/songs/1.mp3';
import song2 from './assets/songs/2.mp3';
import song3 from './assets/songs/3.mp3';
import song4 from './assets/songs/4.mp3';
import song5 from './assets/songs/5.mp3';
import song6 from './assets/songs/6.mp3';
import song7 from './assets/songs/7.mp3';
import song11 from './assets/songs/11.mp3';
import Bottom from './Bottom';
import { Route, Router, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './About';

function App() {

  let songs = [
    {songName: "Time-pass-tone", filePath:song1, coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHLAp239yNfVoG2TU47tNCGacoUtc098S7w&s", index:0, isPlaying : false},
    {songName: "One-More", filePath:song2, coverPath: "https://eavf3cou74b.exactdn.com/wp-content/uploads/2024/05/15124513/Tones-Diagram.webp?strip=all&lossy=1&ssl=1", index:1, isPlaying : false},
    {songName: "Cielo", filePath:song3, coverPath: "https://www.guillenphoto.com/data/blog/2019/037-chronique-pourquoi-maitriser-la-tonalite-en-photographie/images/gelada-sitting-on-a-rock-in-ethiopia-amar-guillen-photographer.jpg", index:2, isPlaying : false},
    {songName: "Add", filePath:song4, coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevabXOCtcyQVlXJkICneW2ylWHi43gWs8HA&s", index:3, isPlaying : false},
    {songName: "Janji-Heroes Tonight", filePath:song5, coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtHXxTO--zCd4DFtVAj28-jxnxxKZQI9XNvIWBeP4_Lr1NEM5CLUMZJypJFVD9Anwc7w&usqp=CAU", index:4, isPlaying : false},
    {songName: "janji-Herioes Today", filePath:song6, coverPath: "https://www.shutterstock.com/shutterstock/photos/1849407694/display_1500/stock-vector-music-neon-sign-glowing-neon-light-signboard-of-musical-note-sign-of-music-star-with-colorful-1849407694.jpg", index:5,  isPlaying : false},
    {songName: "Nice", filePath:song7, coverPath: "https://png.pngtree.com/png-clipart/20230717/ourmid/pngtree-3d-symbol-note-icon-music-tone-logo-png-image_7870712.png", index:6, isPlaying : false},
    {songName: "Milionaire - Honey Singh", filePath:song11, coverPath: "https://c.saavncdn.com/173/GLORY-Hindi-2024-20240926151002-500x500.jpg", index:7, isPlaying : false},        
]

  let [isPlay, setIsPlay] = useState(false);
  let [time, setTime] = useState(0);
  let [progress, setProgress] = useState(0);
  let audioRef = useRef(0);
  let [playingSong, setPlayingSong] = useState(null);
  let [playingIndex, setPlayingIndex] = useState(0);



  let handlePlay = () => {
    let newTime = Math.floor(audioRef.current.currentTime);
    setTime(()=> {
      return time = newTime;
    })

    setIsPlay(isPlay => !isPlay);
    if (audioRef.current) {
      if(isPlay == true) {
        audioRef.current.play();
      }else {
        audioRef.current.pause();
      }
    }
  }

  
  let updateTime = () => {
    if (audioRef.current){ 
      setTime(Math.floor(audioRef.current.currentTime));
      setProgress(Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100));
    }
  }

  useEffect(() => {
    let audioEvent = audioRef.current;
    if(audioEvent) {
      audioEvent.addEventListener("timeupdate", updateTime);
    }
    handlePlay();
  },[])


  return (
    <>
      <nav style={{display:"flex", justifyContent:'space-between', flexaWrap: 'wrap'}}>
        <ul>
          <li className='brand'><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="spotify" />Spotify</li>
          <li>Home</li>
          <li>About</li>
        </ul>
        <button className='add-music-btn'>Add Music</button>
      </nav>

      {/* List of songs */}
      <div className='container'>
        <div className='songList'>
          <h1>Best of NCS - No Copyright Sounds</h1>
          <div className='songitem-container'>
            <SongList songs={songs} audioRef={audioRef} setPlayingSong={setPlayingSong} setIsPlay={setIsPlay} isPlay={isPlay} playingIndex={playingIndex} setPlayingIndex={setPlayingIndex}/>
          </div>
        </div>
        <div className='songBanner'></div>
      </div>

      {/* Bottom-  */}
      <Bottom playingSong={playingSong} time={time} progress={progress} audioRef={audioRef} setTime={setTime} myAudioFile={myAudioFile} handlePlay={handlePlay} playingIndex={playingIndex} setPlayingIndex={setPlayingIndex} songs={songs} setIsPlay={setIsPlay} isPlay={isPlay}/>
    </>
  )
}

export default App
