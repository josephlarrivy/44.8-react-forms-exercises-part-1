import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from './Box'

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), color: 'red', width: 20, height: 30}
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuidv4()}])
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }



    return (
        <>
            <NewBoxForm addBox={addBox}/>
            <h3>Your boxes: </h3>
            <div>
                {boxes.map(({id, color, width, height, handleClick}) => 
                <Box id={id} color={color} width={parseInt(width)} height={parseInt(height)} key={id} handleClick={handleClick} removeBox={removeBox}/>
                )}
            </div>
        </>
    )
}



export default BoxList;