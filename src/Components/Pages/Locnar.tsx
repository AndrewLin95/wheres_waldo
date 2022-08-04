import { FC } from "react";
import { useEffect, useState } from "react";

const Locnar:FC = () => {
    const [coords, setCoords] = useState({x: 0, y:0});

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setCoords({
                x: e.clientX,
                y: e.clientY
            })
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])
    
    return (
        <img className="playImg" src={require('../../Assets/the-loc-nar.jpg')} alt="playarea"></img>
    )
}

export default Locnar;