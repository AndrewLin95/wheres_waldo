import { FC, useEffect, useState } from 'react';

interface Props{
    initialize: boolean;
}

const Timer:FC<Props> = ({ initialize }) => {
    const [timer, setTimer] = useState(0);
    const [displayTime, setDisplayTime] = useState('0:00')

    if (initialize){
        setTimeout(() => {
            setTimer(timer + 1)
        }, 1000);
    }

    useEffect(()=>{
        let seconds = 0;
        let minutes = 0;
        if (timer < 60){
            seconds = timer;
        } else if (timer >= 60){
            seconds = timer % 60
            minutes = Math.floor(timer / 60)
        }
        if (seconds < 9){
            setDisplayTime(`${minutes}:0${seconds}`)
        } else if (seconds >= 10){
            setDisplayTime(`${minutes}:${seconds}`)
        }
    }, [timer])

    return (
        <div id="timerContainer">
            {displayTime}
        </div>
    )
}

export default Timer;