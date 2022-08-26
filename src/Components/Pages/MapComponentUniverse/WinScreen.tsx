import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { query, collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import db from "../../../Firebase/firebase-config";
import uniqid from 'uniqid';

interface Props{
    endGame: boolean;
    displayTime: string;
    timer: number;
}

interface Score{
    name: string; 
    id: string;
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

    function saveScore() {  
        let lowScore = scores[scores.length - 1].timer;
        if (scores.length < 10 && !checkSubmit){
            updateScore();
            getCheckSubmit(true);
        } else if (timer < lowScore  && !checkSubmit){
            updateScore();
            getCheckSubmit(true);
        } 
    }

    async function updateScore(){
        let uniqID = uniqid();
        await setDoc(doc(db, "scoresUniverse", `${playerName} ${uniqID}`), {
            name: playerName,
            id: `${playerName} ${uniqID}`,
            time: displayTime,
            timer: timer
        });
        let tempScore = scores;
        let tempObj = {
            name: playerName,
            id: `${playerName} ${uniqID}`,
            time: displayTime,
            timer: timer
        }
        tempScore.push(tempObj);
        tempScore.sort(function(a, b){return a.timer - b.timer});
        setScores([...tempScore]);
    }

    async function getScores(){
        try{
            const q = query(collection(db, "scoresUniverse"));
            const querySnapshop = await getDocs(q);
            querySnapshop.forEach((doc) => {
                let eachScore:{name: string, id: string, time: string, timer: number} = {name: doc.data()[`name`], id: doc.data()[`id`], time: doc.data()[`time`], timer: doc.data()[`timer`]}; 
                let tempArray = scores;
                tempArray.push(eachScore);
                setScores([...tempArray]);
            })
        }
        catch(err){
            console.log(err);
        }

        if (scores.length > 9){
            try{
                await deleteDoc(doc(db, "scoresUniverse", `${scores[scores.length - 1].id}`))
            }
            catch (err){
                console.log(err);
            }
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
                        <button onClick={saveScore}>Submit Score</button>
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