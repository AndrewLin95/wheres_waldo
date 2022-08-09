import { FC } from "react";

interface Props{
    toggleWhatsLeft: boolean;
}

const WhatsLeftPopup:FC<Props> = ({ toggleWhatsLeft }) => {
    if (toggleWhatsLeft){
        return (
            <div id="whatsLeftPopup">
                <div className="characterHalf">
                    <img className="characterPreview" src={require("../../../Assets/yubabaPreviewHalf.png")} alt="yubabaPreview"></img>
                    <div className="characterText">
                        <div className="characterName">Yubaba</div>
                        <div>Spirited Away</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview" src={require("../../../Assets/ryukPreviewHalf.png")} alt="ryukPreview"></img>
                    <div className="characterText">
                        <div className="characterName">Ryuk</div>
                        <div>Death Note</div>
                    </div>
                </div>
                <div className="characterHalf">
                    <img className="characterPreview" src={require("../../../Assets/patrickPreviewHalf.png")} alt="patrickPreview"></img>
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