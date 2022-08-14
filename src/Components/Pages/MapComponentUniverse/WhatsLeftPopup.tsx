import { FC, useEffect, useState } from "react";

interface Props{
    toggleWhatsLeft: boolean;
    clickStatusBender: boolean,
    clickStatusTotoro: boolean,
    clickStatusJake: boolean
}

const WhatsLeftPopup:FC<Props> = ({ 
    toggleWhatsLeft,    
    clickStatusBender,
    clickStatusTotoro,
    clickStatusJake 
}) => {

    const [hide, setHide] = useState({bender: 'Half', totoro: "Half", jake: "Half"})

    useEffect(() => {
        if (clickStatusBender){
            setHide(prevState => ({
                ...prevState, bender: 'Hide'
            }))
        }
        if (clickStatusTotoro){
            setHide(prevState => ({
                ...prevState, totoro: 'Hide'
            }))
        }
        if (clickStatusJake){
            setHide(prevState => ({
                ...prevState, jake: 'Hide'
            }))
        }
    }, [clickStatusBender, clickStatusTotoro, clickStatusJake])

    if (toggleWhatsLeft){
        return (
            <div id="whatsLeftPopup">
                <div className="characterHalf">
                    <img className="characterPreview PU" src={require(`../../../Assets/benderPreview${hide.bender}.png`)} alt="benderPreview"></img>
                    <div className="characterText PUtext">
                        <div className="characterName">Bender</div>
                        <div>Futurama</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview PU" src={require(`../../../Assets/totoroPreview${hide.totoro}.png`)} alt="totoroPreview"></img>
                    <div className="characterText PUtext">
                        <div className="characterName">Totoro</div>
                        <div>My Neightbour Totoro</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview PU" src={require(`../../../Assets/jakePreview${hide.jake}.png`)} alt="jakePreview"></img>
                    <div className="characterText PUtext">
                        <div className="characterName">Jake</div>
                        <div>Adventure Time</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}

export default WhatsLeftPopup;