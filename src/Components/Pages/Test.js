import {useEffect, useState} from 'react';

export default function Test() {
  const [coords, setCoords] = useState({x: 0, y: 0});

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div>
      {/* 👇️ Get mouse coordinates relative to element */}
      <div
        onMouseMove={handleMouseMove}
        style={{padding: '3rem', backgroundColor: 'lightgray'}}
      >
        <h2>
          Coords: {coords.x} {coords.y}
        </h2>
      </div>

      <hr />

      <h2>
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>
    </div>
  );
}