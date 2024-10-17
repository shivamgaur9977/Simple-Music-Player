import Buttons from "./Buttons";
import ProgressBar from "./ProgressBar";

export default function Bottom ({playingSong, time, progress, audioRef, setTime, myAudioFile, handlePlay, playingIndex, setPlayingIndex, songs, setIsPlay, isPlay }) {
    return (
        <div className='bottom'>
        <ProgressBar time={time} progress={progress} audioRef={audioRef} setTime={setTime}/>
        <Buttons songs={songs} setIsPlay={setIsPlay} isPlay={isPlay} audioRef={audioRef} myAudioFile={myAudioFile} handlePlay={handlePlay} playingIndex={playingIndex} setPlayingIndex={setPlayingIndex} />
        <div className='songInfo'>
          <img src='https://i.gifer.com/5uwq.gif' width='42px' alt='Sound-ringing' style={isPlay ? {opacity:0, transition: '0.3s ease-in'}: {opacity:1, transition: '0.3s ease-in'}}/>
          <p>{playingSong ? playingSong.songName : "Millionaire - Honey Singh"}</p>
        </div>
      </div>
    )
}