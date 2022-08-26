import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { query, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import db from "../../../Firebase/firebase-config";
import uniqid from 'uniqid';

interface Props{
    endGame: boolean;
    displayTime: string;
    timer: number;
}

interface Score{
    name: string; 
    time: string;
    timer: number;
}

const WinScreen:FC<Props> = ({ endGame, displayTime, timer }) => {
    const [playerName, setPlayerName] = useState('');
    const [scores, setScores] = useState<Score[]>([]);
    const [checkSubmit, getCheckSubmit] = useState(false);

    const updateName = (e: string) => {
        let tempName = e;
        setPlayerName(tempName);
    }

    async function saveScore() {  
        await setDoc(doc(db, "scores", `${playerName} ${uniqid()}`), {
            name: playerName,
            time: displayTime,
            timer: timer
        });
    }

    async function getScores(){
        if (!checkSubmit){
            getCheckSubmit(true);

            try{
                const q = query(collection(db, "scores"));
                const querySnapshop = await getDocs(q);
                querySnapshop.forEach((doc) => {
                    let eachScore:{name: string, time: string, timer: number} = {name: doc.data()[`name`], time: doc.data()[`time`], timer: doc.data()[`timer`]}; 
                    let tempArray = scores;
                    tempArray.push(eachScore);
                    setScores([...tempArray]);
                })
            }
            catch(err){
                console.log(err);
            }
            console.log(scores);
        }

        let tempScore = scores;
        tempScore.sort(function(a, b){return a.timer - b.timer})
        setScores([...tempScore]); 
    }

    useEffect(() => {
        if (endGame) {
            getScores()
        }
    }, [endGame])

    if (endGame){
        return(
            <div id='winPopup'>
                <div id='winContainer'>
                    <div id='highScore'>
                        High Scores
                        Name | Time
                        {Object.entries(scores).map(([key, value]) => {
                            return (
                                <div key={key}>
                                    {value.name} | {value.time}
                                </div>
                            )
                        })}
                    </div>
                    <div id='scoreContainer'>
                        <div>Time</div>
                        <div>{displayTime}</div>
                        <input className="scoreName" placeholder='Name' maxLength={10} onChange={(e)=>{updateName(e.target.value)}}></input>
                        <button onClick={getScores}>Submit Score</button>
                        <Link to='/wheres_waldo/' id='restartBtn'>Restart</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <>
        </>
    )
}

export default WinScreen;