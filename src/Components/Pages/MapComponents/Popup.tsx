import { FC } from "react";

interface Props{
    coords: {x: number, y: number},
    clickDetect: boolean,
    updateClickDetect: (item: string) => void,
}

const Popup:FC<Props> = ({ coords, clickDetect, updateClickDetect }) => {
    return (
        <div
            className='popup'
            style={{
                position:'absolute', 
                top: `${coords.y + 68}px`,
                left: `${coords.x + 30}px`,
                display: `${clickDetect ? "flex" : "none"}`
            }}
        >
            <div className="itemTxt" onClick={() => {updateClickDetect('yababa')}}>
                Yababa
            </div>
            <div className="itemTxt" onClick={() => {updateClickDetect('ryuk')}}>
                Ryuk
            </div>
            <div className="itemTxt" onClick={() => {updateClickDetect('patrick')}}>
                Patrick
            </div>
        </div>
    )
}

export default Popup;