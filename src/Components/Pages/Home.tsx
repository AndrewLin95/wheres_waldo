import { FC } from "react";
import { Link } from 'react-router-dom';

const Home:FC = () => {
    return (
        <div id="homePage">
            <div id="selectLevelTxt">Select Your Level</div>
            <div id="levelContainer">
                <div className="levelCards">
                    <img className="imgPreview" src={require("../../Assets/locnarPreview.jpg")} alt="locnar"></img>
                    <div className="levelTxt">
                        <div className="instructionTitle">The Loc Nar</div>
                        <div>By: Egor Klyuchnyk</div>
                        <div>Difficulty: Hard</div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/yubabaPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Yubaba</div>
                                <div>Spirited Away</div>
                            </div>
                        </div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/ryukPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Ryuk</div>
                                <div>Death Note</div>
                            </div>
                        </div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/patrickPreview.png")} alt="yubabaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Patrick</div>
                                <div>Spongebob</div>
                            </div>
                        </div>
                        <Link className="startLevel" to='/wheres_waldo/locnar' style={{textDecoration: 'none'}}>Start Loc Nar!</Link>
                    </div>
                </div>
                <div className="levelCards">
                <img className="imgPreview" src={require("../../Assets/universe-113Preview.jpg")} alt="universe-133"></img>
                    <div className="levelTxt">
                        <div className="instructionTitle">Universe 133</div>
                        <div>By: Egor Klyuchnyk</div>
                        <div>Difficulty: Medium</div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/benderPreview.png")} alt="benderaPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Bender</div>
                                <div>Futurama</div>
                            </div>
                        </div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/totoroPreview.png")} alt="totoroPreview"></img>
                            <div className="characterText">
                                <div className="characterName">Totoro</div>
                                <div>My Neightbor Toroto</div>
                            </div>
                        </div>
                        <div className="character small">
                            <img className="characterPreview" src={require("../../Assets/jakePreview.png")} alt="jakePreview"></img>
                            <div className="characterText">
                                <div className="characterName">Jake</div>
                                <div>Adventure Time</div>
                            </div>
                        </div>
                        <Link className="startLevel" to='/wheres_waldo/universe_133' style={{textDecoration: 'none'}}>Start Universe 133!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;