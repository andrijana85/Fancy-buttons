import React from "react";
import { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);
  return (
    <button className="AngryButton" style={{backgroundColor: `rgba(255,0,0,${anger})`}}>
    {/* When the threshold is not reached */}
    {anger < 1 && <span>Don't click me too much! </span>}
    {/* When the threshold is not reached */}
    {anger > 1 && <span>Rawr!</span>}
    </button>
  )
}

export default AngryButton;