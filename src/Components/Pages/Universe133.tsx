import { FC } from "react";
import { useEffect, useState } from "react";
import debounce from "../Utilities/debounce";
import Timer from "./MapComponentUniverse/Timer"
import Popup from "./MapComponentUniverse/Popup"
import Instructions from "./MapComponentUniverse/Instructions"
import WhatsLeft from "./MapComponentUniverse/WhatsLeft"

import { query, collection, getDocs } from 'firebase/firestore';
import db from "../../Firebase/firebase-config";

interface firebaseCoords{
    key: string;
    x: number;
    y: number;
}

const Universe133:FC = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [firebaseCoords, setFirebaseCoords] = useState<firebaseCoords[]>([]);
    const [benderCoords, setBenderCoords] = useState({x: 0, y: 0});
    const [totoroCoords, setTotoroCoords] = useState({x: 0, y: 0});
    const [jakeCoords, setJakeCoords] = useState({x: 0, y: 0});
    const [initialize, setInitialize] = useState (false);
    const [clickDetect, setClickDetect] = useState(false);
    const [clickFail, setClickFail] = useState(false);

    const [clickStatusBender, setClickStatusBender] = useState(false);
    const [clickStatusTotoro, setClickStatusTotoro] = useState(false);
    const [clickStatusJake, setClickStatusJake] = useState(false);
    const [endGame, setEndGame] = useState(false);

    const [feedbackPopup, setFeedbackPopup] = useState(false);
    const [textDisplay, setTextDisplay] = useState('');

    //https://firebase.google.com/docs/firestore/query-data/get-data
    async function getLocation(){
        try{
            const q = query(collection(db, "locationUniverse"));

            const querySnapshop = await getDocs(q);
            querySnapshop.forEach((doc) => {
                let newKeyValue:{key: string, x: number, y: number} = {key: doc.data()[`id`], x: doc.data()[`coordsX`], y: doc.data()[`coordsY`]}; 
                let tempArray = firebaseCoords;
                tempArray.push(newKeyValue);
                setFirebaseCoords(tempArray);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    // On mouseclick, update Coords with the clicked
    useEffect(() => {
        const handleMouseClick = (e: any) => {
            setCoords({
                x: e.clientX,
                y: e.pageY, 
            })
            setClickDetect(true);
            if (clickDetect){
                setClickDetect(false);
            }
        };
        const playImg = document.querySelector('#playImg');
        playImg?.addEventListener('mousedown', handleMouseClick);
        return () => {
            playImg?.removeEventListener('mousedown', handleMouseClick);
        }
    })

    // to detect window size and update coordinates of items.
    useEffect(() =>{
        const deHandleResize = debounce(function handleResize(){
            const updateXCoords = (xCords: number) => {
                return (xCords * (window.innerWidth / 1920))
            };
            const updateYCoords = (yCords: number) => {
                return (yCords * ((window.innerWidth/(1920/2715)) / 2715))
            }
            console.log('resize');
            setBenderCoords({
                x: updateXCoords(firebaseCoords[0].x),
                y: updateYCoords(firebaseCoords[0].y)
            })
            setTotoroCoords({
                x: updateXCoords(firebaseCoords[2].x),
                y: updateYCoords(firebaseCoords[2].y)
            })
            setJakeCoords({
                x: updateXCoords(firebaseCoords[1].x),
                y: updateYCoords(firebaseCoords[1].y)
            })
        }, 1000);
        deHandleResize();
        window.addEventListener('resize', deHandleResize);
        return () => {
            window.removeEventListener('resize', deHandleResize);
        }
    }, [initialize, firebaseCoords])

    // checks if the item was clicked
    const updateClickDetect = ( itemName: string ) =>{
        const checkClick = (clickX: number, clickY: number, itemX: number, itemY: number, xleniency: number, yleniency: number) => {
            if (itemX > (clickX - clickX*xleniency) && itemX < (clickX + clickX*xleniency) && itemY > (clickY - clickY*yleniency) && itemY < (clickY + clickY*yleniency)){
                setFeedbackPopup(true);
                setTextDisplay(itemName);
                setTimeout(()=>{
                    setFeedbackPopup(false);
                }, 2000)
                return true;
            } 
            setClickFail(true);
            setTimeout(()=>{
                setClickFail(false);
            }, 2000)
            return false;
        };

        switch (itemName){
            case 'Bender':
                if (checkClick(coords.x, coords.y, benderCoords.x, benderCoords.y, 0.007, 0.009)) {
                    setClickStatusBender(true);
                } else{
                    console.log('try again');
                }
                break;
            case 'Totoro':
                if (checkClick(coords.x, coords.y, totoroCoords.x, totoroCoords.y, 0.016, 0.031)) {
                    setClickStatusTotoro(true);
                } else{
                    console.log('try again');
                }
                break;
            case 'Jake':
                if (checkClick(coords.x, coords.y, jakeCoords.x, jakeCoords.y, 0.037, 0.022)) {
                    setClickStatusJake(true);
                } else{
                    console.log('try again');
                }
                break;
            default:
                console.log('default');
        }
        setClickDetect(false);
    }

    const startGame = () => {
        getLocation();
        setInitialize(true);
    }

    useEffect(() => {
        if (clickStatusBender && clickStatusTotoro && clickStatusJake){
            setEndGame(true);
        }
    }, [clickStatusBender, clickStatusTotoro, clickStatusJake])

    return (
        <>
            <Timer initialize={initialize} endGame={endGame}/>
            <img id="playImg" src={require('../../Assets/universe-113.jpg')} alt="playarea"></img>
            <Instructions initialize={initialize} startGame={startGame}/>
            <WhatsLeft
                clickStatusBender={clickStatusBender}
                clickStatusTotoro={clickStatusTotoro}
                clickStatusJake={clickStatusJake}
            />
            <Popup 
                coords={coords} 
                clickDetect={clickDetect} 
                updateClickDetect={updateClickDetect} 
                clickFail={clickFail} 
                feedbackPopup={feedbackPopup} 
                textDisplay={textDisplay} 
                clickStatusBender={clickStatusBender}
                clickStatusTotoro={clickStatusTotoro}
                clickStatusJake={clickStatusJake}
            />
        </>
    )
}

export default Universe133;