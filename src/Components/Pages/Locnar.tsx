import { FC } from "react";
import { useEffect, useState } from "react";
import debounce from "../Utilities/debounce";
import Popup from "./MapComponents/Popup";

// on click, setstate coordinates. -> popup choosebox.
// if item was clicked, change state of item to true. 
// in popup, if they then choose the correct item, mark that item as done, keep state true. 
// If they do not click the correct item, clear coordinate state, close choosebox.
// Should put this login in App. since it can be passed down into each map.
// Have a state that stores the click status of each item. If one of them was clicked, remove them from the popup.


const Locnar:FC = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [babaCoords, setBabaCoords] = useState({x: 0, y: 0});
    const [ryukCoords, setRyukCoords] = useState({x: 0, y: 0});
    const [patrickCoords, setPatrickCoords] = useState({x: 0, y: 0});
    const [clickDetect, setClickDetect] = useState(false);

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
                return true;
            } 
            return false;
        };

        switch (itemName){
            case 'yababa':
                if (checkClick(coords.x, coords.y, babaCoords.x, babaCoords.y, 0.03, 0.10)) {
                    console.log('clicked Yababa');
                } else{
                    console.log('try again');
                }
                break;
            case 'ryuk':
                if (checkClick(coords.x, coords.y, ryukCoords.x, ryukCoords.y, 0.10, 0.017)) {
                    console.log('clicked Ryuk');
                } else{
                    console.log('try again');
                }
                break;
            case 'patrick':
                if (checkClick(coords.x, coords.y, patrickCoords.x, patrickCoords.y, 0.017, 0.0055)) {
                    console.log('clicked Patrick');
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

    return (
        <>
            <img id="playImg" src={require('../../Assets/the-loc-nar.jpg')} alt="playarea"></img>
            <Popup coords={coords} clickDetect={clickDetect} updateClickDetect={updateClickDetect}/>
        </>
    )
}

export default Locnar;