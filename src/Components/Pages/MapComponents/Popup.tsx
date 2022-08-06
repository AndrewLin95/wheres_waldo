import { FC } from "react";

interface Props{
    coords: {x: number, y: number},
    clickDetect: boolean,
    updateClickDetect: (item: string) => void,
    feedbackPopup: boolean,
    textDisplay: string,
    clickFail: boolean,
    clickStatusBaba: boolean,
    clickStatusRyuk: boolean,
    clickStatusPatrick: boolean
}

const Popup:FC<Props> = ({ 
    coords, 
    clickDetect, 
    updateClickDetect,
    feedbackPopup,
    textDisplay,
    clickFail,
    clickStatusBaba,
    clickStatusRyuk,
    clickStatusPatrick
}) => {

    return (
        <>
            <div
                className='popup'
                style={{
                    position:'absolute', 
                    top: `${coords.y + 68}px`,
                    left: `${coords.x + 30}px`,
                    display: `${clickDetect ? "flex" : "none"}`
                }}
            >
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusBaba ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Yababa')}}
                >
                    Yababa
                </div>
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusRyuk ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Ryuk')}}
                >
                    Ryuk
                </div>
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusPatrick ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Patrick')}}
                >
                    Patrick
                </div>
            </div>

            <div
                className="clickAlert"
                style={{
                    position: 'fixed',
                    top: '10vh',
                    display: `${feedbackPopup ? "flex" : "none"}`,
                    color: "white"
                }}
            >
                You found {textDisplay}!
            </div>

            <div
                className="clickAlertFail"
                style={{
                    position: 'fixed',
                    top: '10vh',
                    display: `${clickFail ? "flex" : "none"}`,
                    color: "white"
                }}
            >
                Try again!
            </div>
        </>
    )
}

export default Popup;