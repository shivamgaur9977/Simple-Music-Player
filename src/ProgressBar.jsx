import {useState} from 'react';

export default function ProgressBar ({time=0, progress=0, audioRef, setTime}) {


  const formatTime = (seconds) => {
    if(isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  let updateSeekBar = (event) => {
    audioRef.current.currentTime = (event.target.value*audioRef.current.duration/100);
    setTime(time = Math.floor(progress*audioRef.current.duration/100));
  }

  return (
      <div className='inputTime'>
        <p style={{color:'white'}}>{formatTime(time)}</p>
        <input type='range' value={progress} name='range' id='myProgressBar'min='0' max='100' onChange={updateSeekBar}/>
        <p style={{color:'white'}}>{audioRef.current && !isNaN(audioRef.current.duration) 
          ? formatTime(audioRef.current.duration) 
          : '0:00'}</p>
      </div>
  )
}