import { FC } from "react";
import { useEffect, useState } from "react";
import debounce from "../Utilities/debounce";
import Popup from "./MapComponents/Popup";
import Instructions from "./MapComponents/Instructions";

// on click, setstate coordinates. -> popup choosebox.
// if item was clicked, change state of item to true. 
// in popup, if they then choose the correct item, mark that item as done, keep state true. 
// If they do not click the correct item, clear coordinate state, close choosebox.
// Should put this login in App. since it can be passed down into each map.
// Have a state that stores the click status of each item. If one of them was clicked, remove them from the popup.

import { query, collection, getDocs } from 'firebase/firestore';
import db from "../../Firebase/firebase-config";

interface firebaseCoords{
    key: string;
    x: number;
    y: number;
}

const Locnar:FC = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [firebaseCoords, setFirebaseCoords] = useState<firebaseCoords[]>([]);
    const [babaCoords, setBabaCoords] = useState({x: 0, y: 0});
    const [ryukCoords, setRyukCoords] = useState({x: 0, y: 0});
    const [patrickCoords, setPatrickCoords] = useState({x: 0, y: 0});
    const [initialize, setInitialize] = useState (false);
    const [clickDetect, setClickDetect] = useState(false);
    const [clickFail, setClickFail] = useState(false);

    const [clickStatusBaba, setClickStatusBaba] = useState(false);
    const [clickStatusRyuk, setClickStatusRyuk] = useState(false);
    const [clickStatusPatrick, setClickStatusPatrick] = useState(false);
    const [feedbackPopup, setFeedbackPopup] = useState(false);
    const [textDisplay, setTextDisplay] = useState('');

    //https://firebase.google.com/docs/firestore/query-data/get-data
    async function getLocation (){
        try{
            const q = query(collection(db, "location"));

            const querySnapshop = await getDocs(q);
            querySnapshop.forEach((doc) => {
                let newKeyValue:{key: string, x: number, y: number} = {key: doc.data()[`id`], x: doc.data()[`coordsX`], y: doc.data()[`coordsY`]}; 
                let tempArray = firebaseCoords;
                console.log(tempArray);
                tempArray.push(newKeyValue);
                setFirebaseCoords(tempArray);
            })
        }
        catch(err){
            console.log(err);
        }
        console.log(firebaseCoords);
    }

    // On mouseclick, update Coords with the clicked
    useEffect(() => {
        const handleMouseClick = (e: any) => {
            setCoords({
                x: e.clientX,
                y: e.pageY - 68, // 68 is the offset in piexels from the header
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
                return (Math.round((xCords * (window.innerWidth / 2000))*100)/100)
            };
            const updateYCoords = (yCords: number) => {
                return (Math.round((yCords * ((window.innerWidth/0.237) / 8433))*100)/100)
            }
            console.log('resize');
            setBabaCoords({
                x: updateXCoords(1030),
                y: updateYCoords(481)
            })
            setRyukCoords({
                x: updateXCoords(345),
                y: updateYCoords(3868)
            })
            setPatrickCoords({
                x: updateXCoords(1314),
                y: updateYCoords(6487)
            })
        }, 1000);
    
        window.addEventListener('resize', deHandleResize);
        return () => {
            window.removeEventListener('resize', deHandleResize);
        }
    })

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
            case 'Yubaba':
                if (checkClick(coords.x, coords.y, babaCoords.x, babaCoords.y, 0.03, 0.10)) {
                    console.log('clicked Yubaba');
                    setClickStatusBaba(true);
                } else{
                    console.log('try again');
                }
                break;
            case 'Ryuk':
                if (checkClick(coords.x, coords.y, ryukCoords.x, ryukCoords.y, 0.10, 0.017)) {
                    console.log('clicked Ryuk');
                    setClickStatusRyuk(true);
                } else{
                    console.log('try again');
                }
                break;
            case 'Patrick':
                if (checkClick(coords.x, coords.y, patrickCoords.x, patrickCoords.y, 0.017, 0.0055)) {
                    console.log('clicked Patrick');
                    setClickStatusPatrick(true);
                } else{
                    console.log('try again');
                }
                break;
            default:
                console.log('default');
        }
        console.log(coords);
        setClickDetect(false);
    }

    const startGame = () => {
        setInitialize(true);
    }

    return (
        <>
            <img id="playImg" src={require('../../Assets/the-loc-nar.jpg')} alt="playarea"></img>
            <Instructions initialize={initialize} startGame={startGame}/>
            <Popup 
                coords={coords} 
                clickDetect={clickDetect} 
                updateClickDetect={updateClickDetect} 
                clickFail={clickFail} 
                feedbackPopup={feedbackPopup} 
                textDisplay={textDisplay} 
                clickStatusBaba={clickStatusBaba}
                clickStatusRyuk={clickStatusRyuk}
                clickStatusPatrick={clickStatusPatrick}
            />
        </>
    )
}

export default Locnar;