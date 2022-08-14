import { FC } from 'react';
import { Link } from 'react-router-dom'

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
                        <Link to='/wheres_waldo/' id='restartBtn'>Restart</Link>
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