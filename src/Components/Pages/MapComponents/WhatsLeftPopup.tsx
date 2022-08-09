import { FC, useEffect, useState } from "react";

interface Props{
    toggleWhatsLeft: boolean;
    clickStatusBaba: boolean,
    clickStatusRyuk: boolean,
    clickStatusPatrick: boolean
}

const WhatsLeftPopup:FC<Props> = ({ 
    toggleWhatsLeft,    
    clickStatusBaba,
    clickStatusRyuk,
    clickStatusPatrick 
}) => {

    const [hide, setHide] = useState({baba: 'Half', ryuk: "Half", pat: "Half"})

    useEffect(() => {
        if (clickStatusBaba){
            setHide(prevState => ({
                ...prevState, baba: 'Hide'
            }))
        }
        if (clickStatusRyuk){
            setHide(prevState => ({
                ...prevState, ryuk: 'Hide'
            }))
        }
        if (clickStatusPatrick){
            setHide(prevState => ({
                ...prevState, pat: 'Hide'
            }))
        }
    }, [clickStatusBaba, clickStatusRyuk, clickStatusPatrick])

    if (toggleWhatsLeft){
        return (
            <div id="whatsLeftPopup">
                <div className="characterHalf">
                    <img className="characterPreview" src={require(`../../../Assets/yubabaPreview${hide.baba}.png`)} alt="yubabaPreview"></img>
                    <div className="characterText">
                        <div className="characterName">Yubaba</div>
                        <div>Spirited Away</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview" src={require(`../../../Assets/ryukPreview${hide.ryuk}.png`)} alt="ryukPreview"></img>
                    <div className="characterText">
                        <div className="characterName">Ryuk</div>
                        <div>Death Note</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview" src={require(`../../../Assets/patrickPreview${hide.pat}.png`)} alt="patrickPreview"></img>
                    <div className="characterText">
                        <div className="characterName">Patrick</div>
                        <div>Spongebob</div>
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