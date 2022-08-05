import { FC } from "react";
import { useEffect, useState } from "react";
import debounce from "../Utilities/useDebounce"

// on click, setstate coordinates. -> popup choosebox.
// if item was clicked, change state of item to true. 
// in popup, if they then choose the correct item, mark that item as done, keep state true. 
// If they do not click the correct item, clear coordinate state, close choosebox.
// Should put this login in App. since it can be passed down into each map.
//https://stackoverflow.com/questions/32870568/how-to-recalculate-x-y-coordinates-based-on-screensize
//https://stackoverflow.com/questions/35286099/position-x-y-coordinates-update-on-page-resize

const Locnar:FC = () => {
    const [coords, setCoords] = useState({x: 0, y:0});
    const [babaCoords, setBabaCoords] = useState({x: 1030, y: 481})

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
    
    useEffect(() => {
        console.log(coords);
        // eslint-disable-next-line no-restricted-globals
        console.log(`test: ${window.innerWidth}`);
    }, [coords] )

    // to detect window size and update coordinates of items.
    useEffect(() =>{
        const deHandleResize = debounce(function handleResize(){
            console.log("resized");
        }, 1000);

        window.addEventListener('resize', deHandleResize);
        return () => {
            window.removeEventListener('resize', deHandleResize);
        }
    })

    return (
        <img id="playImg" src={require('../../Assets/the-loc-nar.jpg')} alt="playarea"></img>
    )
}

export default Locnar;