import React from "react";
import { useReducer } from "react";

function AngryButton(props) {


  const [anger, dispatch] = useReducer((anger, action) => {
    // if (anger < 1) {
    //  return anger + action;
    // } else {
    //   return 0;
    // }
    return anger > 1 ? 0 : anger + action;
  }, 0);

  return (
    <button style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={() => dispatch(0.1)} className="AngryButton">
    {/* When the threshold is not reached */}
    {anger < 1 && <span>Don't click me too much! </span>}
    {/* When the threshold is not reached */}
    {anger > 1 && <span>Rawr!</span>}
    </button>
  )
}

export default AngryButton;