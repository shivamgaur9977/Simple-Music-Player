import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

export default function Buttons ({songs, setIsPlay, isPlay, audioRef, myAudioFile, handlePlay, playingIndex, setPlayingIndex}) {

  let playNextSong = (playingIndex) => {
    let nextSongIndex = playingIndex + 1;
    if(nextSongIndex > songs.length - 1) {
      nextSongIndex = 0;
    }
    let nextSong = songs.filter((song) => song.index == nextSongIndex);
    audioRef.current.src = nextSong[0].filePath;
    audioRef.current.play();
    setPlayingIndex(nextSongIndex);
    setIsPlay(false);
  }

  let playPreviousSong = (playingIndex) => {
    let previousSongIndex = playingIndex -1;
    if(previousSongIndex < 0) {
      previousSongIndex = songs.length - 1;
    }
    let previousSong = songs.filter((song) => song.index === previousSongIndex);
    audioRef.current.src = previousSong[0].filePath;
    audioRef.current.play();
    setPlayingIndex(previousSongIndex);
    setIsPlay(false);
  } 
  
  return (
      <div className='icons'>
        <SkipPreviousIcon onClick={()=>playPreviousSong(playingIndex)} className='play-btn'/>
        <div>
          {isPlay == true ? <PlayCircleOutlineIcon className='play-btn' style={{fontSize:"35px"}} onClick={handlePlay}/> : <PauseCircleOutlineIcon className='play-btn' style={{fontSize:"35px"}} onClick={handlePlay}/>}
          <div>
            <audio ref={audioRef} src={myAudioFile}/>
          </div>
        </div>
        <SkipNextIcon onClick={() => playNextSong(playingIndex)} className='play-btn'/>
      </div>
    )
}