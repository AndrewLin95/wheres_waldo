import { FC } from "react";

interface Props{
    coords: {x: number, y: number},
    clickDetect: boolean,
    updateClickDetect: (item: string) => void,
    feedbackPopup: boolean,
    textDisplay: string,
    clickFail: boolean,
    clickStatusBender: boolean,
    clickStatusTotoro: boolean,
    clickStatusJake: boolean
}

const Popup:FC<Props> = ({ 
    coords, 
    clickDetect, 
    updateClickDetect,
    feedbackPopup,
    textDisplay,
    clickFail,
    clickStatusBender,
    clickStatusTotoro,
    clickStatusJake
}) => {

    return (
        <>
            <div
                className='popup'
                style={{
                    position:'absolute', 
                    top: `${coords.y}px`,
                    left: `${coords.x + 30}px`,
                    display: `${clickDetect ? "flex" : "none"}`
                }}
            >
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusBender ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Bender')}}
                >
                    Bender
                </div>
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusTotoro ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Totoro')}}
                >
                    Totoro
                </div>
                <div 
                    className="itemTxt" 
                    style={{display:`${clickStatusJake ? "none" : "flex"}`}}
                    onClick={() => {updateClickDetect('Jake')}}
                >
                    Jake
                </div>
            </div>

            <div
                className="clickAlert"
                style={{
                    position: 'fixed',
                    top: '10vh',
                    display: `${feedbackPopup ? "flex" : "none"}`,
                }}
            >
                You found {textDisplay}!
            </div>

            <div
                className="clickAlert fail"
                style={{
                    position: 'fixed',
                    top: '10vh',
                    display: `${clickFail ? "flex" : "none"}`,
                }}
            >
                Try again!
            </div>
        </>
    )
}

export default Popup;