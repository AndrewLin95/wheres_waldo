import { FC, useEffect, useState } from "react";
import WhatsLeftPopup from "./WhatsLeftPopup";

interface Props{
    clickStatusBender: boolean,
    clickStatusTotoro: boolean,
    clickStatusJake: boolean
}

const WhatsLeft:FC<Props> = ({
    clickStatusBender,
    clickStatusTotoro,
    clickStatusJake
}) => {
    const [numRemaining, setNumRemaining] = useState(4);
    const [toggleWhatsLeft, setToggleWhatsLeft] = useState(false);

    useEffect(() => {
        setNumRemaining(numRemaining - 1);
    }, [clickStatusBender, clickStatusTotoro, clickStatusJake])

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
                clickStatusBender={clickStatusBender}
                clickStatusTotoro={clickStatusTotoro}
                clickStatusJake={clickStatusJake}
            />
        </>
    )
}

export default WhatsLeft;