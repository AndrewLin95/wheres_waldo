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
                    <img className="instructionImg" src={require("../../../Assets/universe-113Preview.jpg")} alt="universe-113Preview"></img>
                    <div className="instructionTxt">
                        <div className="instructionTitle">Universe 133</div>
                        <div> by Egor Klyuchnyk </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/benderPreview.png")} alt="benderPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Bender</div>
                                <div>Futurama</div>
                            </div>
                        </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/totoroPreview.png")} alt="totoroPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Totoro</div>
                                <div>My Neighbour Totoro</div>
                            </div>
                        </div>
                        <div className="character">
                            <img className="characterPreview" src={require("../../../Assets/jakePreview.png")} alt="jakePreview"></img>
                            <div className="characterText">
                                <div className="characterName">Jake</div>
                                <div>Adventure Time</div>
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