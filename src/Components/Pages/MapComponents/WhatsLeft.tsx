import { FC, useEffect, useState } from "react";
import WhatsLeftPopup from "./WhatsLeftPopup";

interface Props{
    clickStatusBaba: boolean,
    clickStatusRyuk: boolean,
    clickStatusPatrick: boolean
}

const WhatsLeft:FC<Props> = ({
    clickStatusBaba,
    clickStatusRyuk,
    clickStatusPatrick
}) => {
    const [numRemaining, setNumRemaining] = useState(4);
    const [toggleWhatsLeft, setToggleWhatsLeft] = useState(false);

    useEffect(() => {
        setNumRemaining(numRemaining - 1);
    }, [clickStatusBaba, clickStatusRyuk, clickStatusPatrick])

    const toggleWhatsLeftClick = () => {
        setToggleWhatsLeft(!toggleWhatsLeft);
    }

    return (
        <>
            <div id="whatsLeftContainer" onClick={toggleWhatsLeftClick}>
                {numRemaining}
            </div>
            <WhatsLeftPopup 
                toggleWhatsLeft={toggleWhatsLeft}
                clickStatusBaba={clickStatusBaba}
                clickStatusRyuk={clickStatusRyuk}
                clickStatusPatrick={clickStatusPatrick}
            />
        </>
    )
}

export default WhatsLeft;