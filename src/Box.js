import React, { useState } from "react";

const Box = ({ id, color, width, height, removeBox }) => {

    const handleClick = evt => {
        const id = evt.target.id
        removeBox(id)
    }

    return (
        <div>
            <div
            style={{
                backgroundColor: color,
                width: width,
                height: height
            }}
            id = {id}
            onClick={handleClick}    
            ></div>
        </div>
    )
}








export default Box;
