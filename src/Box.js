import React, { useState } from "react";

const Box = ({ color, width, height }) => {

    return (
        <div>
            <div style={{
                backgroundColor: color,
                width: width,
                height: height}}></div>
        </div>
    )
}








export default Box;
