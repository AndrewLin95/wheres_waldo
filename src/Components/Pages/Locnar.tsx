import { FC } from "react";
import { useEffect, useState } from "react";
import debounce from "../Utilities/debounce"

// on click, setstate coordinates. -> popup choosebox.
// if item was clicked, change state of item to true. 
// in popup, if they then choose the correct item, mark that item as done, keep state true. 
// If they do not click the correct item, clear coordinate state, close choosebox.
// Should put this login in App. since it can be passed down into each map.
//https://stackoverflow.com/questions/32870568/how-to-recalculate-x-y-coordinates-based-on-screensize
//https://stackoverflow.com/questions/35286099/position-x-y-coordinates-update-on-page-resize

const Locnar:FC = () => {
    const [coords, setCoords] = useState({x: 0, y:0});
    const [babaCoords, setBabaCoords] = useState({x: 0, y: 0})

    // On mouseclick, update Coords with the clicked
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setCoords({
                x: e.clientX,
                y: e.pageY - 68, // 68 is the offset in piexels from the header
            })
        };
        const playImg = document.querySelector('#playImg');
        playImg?.addEventListener('mousedown', handleMouseMove);
        return () => {
            playImg?.removeEventListener('mousedown', handleMouseMove);
        }
    }, [])
    
    // whenever coords updates (a click was detected), check if item was clicked
    useEffect(() => {
        const checkClick = (clickX: number, clickY: number, itemX: number, itemY: number, xleniency: number, yleniency: number) => {
            if (itemX > (clickX - clickX*xleniency) && itemX < (clickX + clickX*xleniency) && itemY > (clickY - clickY*yleniency) && itemY < (clickY + clickY*yleniency)){
                return true;
            } 
            return false;
        };

        if (checkClick(coords.x, coords.y, babaCoords.x, babaCoords.y, 0.03, 0.10)) {
            console.log('clicked Baba');
        }
        console.log(coords);
    }, [coords])

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
        }, 1000);

        window.addEventListener('resize', deHandleResize);
        return () => {
            window.removeEventListener('resize', deHandleResize);
        }
    })

    useEffect(() => {
        console.log(babaCoords);
    }, [babaCoords])

    return (
        <img id="playImg" src={require('../../Assets/the-loc-nar.jpg')} alt="playarea"></img>
    )
}

export default Locnar;