
import React, { useEffect, useState } from 'react'
import { GrLinkNext } from 'react-icons/gr'
import './Button.css'
export default function Button({ active, action, text }) {
    //<div className="next-icon">
    //<GrLinkNext size={15} className="underlying-icon" />
    //</div>
    const handleChange = () => {
        action()
    }
    if (text === "GO") {
        return (
            <div className={active ? "button-container isActivated" : "button-container"} onClick={() => handleChange()}>
                <div className="button-text">
                    {text}
                </div>

            </div>
        )
    } else if (text === "STOP") {
        return (
            <div className={active ? "button-container isActivated red" : "button-container red"} onClick={() => handleChange()}>
                <div className="button-text">
                    {text}
                </div>

            </div>
        )
    }

}