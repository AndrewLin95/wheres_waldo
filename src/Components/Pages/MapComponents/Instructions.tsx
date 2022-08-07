import { FC } from "react";

interface Props{
    initialize: boolean;
    startGame: () => void;
}

const Instructions:FC<Props> = ( {initialize, startGame} ) => {

    if (initialize === false){
        return(
            <div id="instructionPopup">
                <div id="instructionContainer">
                    <img className="instructionImg" src={require("../../../Assets/locnarPreview.jpg")} alt="locnar Preview"></img>
                    <div className="instructionTxt">
                        <div className="instructionTitle">The Loc Nar</div>
                        <div> by Egor Klyuchnyk </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/yubabaPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Yubaba</div>
                                <div>Spirited Away</div>
                            </div>
                        </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/ryukPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Ryuk</div>
                                <div>Death Note</div>
                            </div>
                        </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/patrickPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Patrick</div>
                                <div>Spongebob</div>
                            </div>
                        </div>
                        <button onClick={startGame} className="startBtn">Start</button>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <>
        </>
    )
}

export default Instructions;