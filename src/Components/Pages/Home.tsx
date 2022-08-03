import { FC } from "react";
import { Link } from 'react-router-dom';

const Home:FC = () => {
    return (
        <div id="homePage">
            <div id="selectLevelTxt">Select Your Level</div>
            <div id="levelContainer">
                <div className="levelCards">
                    <img className="imgPreview" src={require("../../Assets/locnarPreview.jpg")}></img>
                    <div className="levelTxt">
                        <div>The Loc Nar</div>
                        <div>By: Egor Klyuchnyk</div>
                        <div>Difficulty: Hard</div>
                        <Link to='/wheres_waldo/locnar'>Start Loc Nar!</Link>
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