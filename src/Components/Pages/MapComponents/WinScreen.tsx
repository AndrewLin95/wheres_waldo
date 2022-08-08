import { FC } from 'react';

interface Props{
    endGame: boolean;
    displayTime: string;
}

const WinScreen:FC<Props> = ({ endGame, displayTime }) => {
    
    if (endGame){
        return(
            <div id='winPopup'>
                <div id='winContainer'>
                    <div id='highScore'>
                        HIGH SCORE TBD
                    </div>
                    <div id='scoreContainer'>
                        <div>Time</div>
                        <div>{displayTime}</div>
                        <button id='restartBtn'>Restart</button>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <>
        </>
    )
}

export default WinScreen;