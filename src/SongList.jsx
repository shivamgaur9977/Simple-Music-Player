import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { useRef, useState } from 'react';



export default function SongList ({audioRef, setPlayingSong, songs, setIsPlay, isPlay, playingIndex, setPlayingIndex}) {


    

    const handlePlay= (index) => {
        let selectedSong = songs.filter((song) => song.index === index);
        audioRef.current.src = selectedSong[0].filePath;
        audioRef.current.play();
        selectedSong[0].isPlaying = !selectedSong[0].isPlaying;
        if(selectedSong[0].isPlaying == true) {
            audioRef.current.play();
        }else {
            audioRef.current.pause();
        }
        setIsPlay(isPlay = false);
        setPlayingSong(selectedSong[0]);
        setPlayingIndex(index);
    };

    let pauseButton = (index) => {
        audioRef.current.pause();
        if(playingIndex === index) {
            setPlayingIndex(playingIndex = null)
            setIsPlay(isPlay = !isPlay);
        }
    }

    return (
        <div className=''>
            {songs.map((song, index) =>
                <div className='songitem' key={index}>
                    <img src={song.coverPath} style={{borderRadius: '50%'}} alt="img"/>
                    <span>{song.songName}</span>
                    <span className='songlistplay'>
                        <span className='timestamp'>{audioRef.current.duration ? audioRef.current.duration : "00:00"}</span>
                        <div>
                            {playingIndex === index ? <PauseCircleOutlineIcon onClick={() => pauseButton(index)} className='play-btn' style={{fontSize:"28px"}} /> :<PlayCircleOutlineIcon onClick={() =>handlePlay(index)} className='play-btn' style={{fontSize:"28px"}}/>}
                        </div>
                        <audio rel={audioRef} src={song.filePath}/>
                    </span>
                </div>
            )} 
        </div>
    )
}