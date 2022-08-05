import { FC } from "react";

interface Props{
    coords: {x: number, y: number},
    clickDetect: boolean,
    updateClickDetect: () => void,
}

const Popup:FC<Props> = ({ coords, clickDetect, updateClickDetect }) => {
    return (
        <div
            className='popup'
            style={{
                position:'absolute', 
                top: `${coords.y + 68}px`,
                left: `${coords.x + 50}px`,
                display: `${clickDetect ? "flex" : "none"}`
            }}
        >
            <div className="itemTxt" onClick={updateClickDetect}>
                Yababa
            </div>
            <div className="itemTxt" onClick={updateClickDetect}>
                Item 2
            </div>
            <div className="itemTxt" onClick={updateClickDetect}>
                Item 3
            </div>
        </div>
    )
}

export default Popup;