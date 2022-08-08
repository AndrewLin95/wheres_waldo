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
                    <div>Preview Image on Left</div>
                    <div>
                        <div>Description + what you need to find + start button</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;