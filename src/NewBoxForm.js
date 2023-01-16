import React, { useState } from "react";

const INITIAL_STATE = {
    color: '#38FF33',
    width: 20,
    height: 20
}


const NewBoxForm = ({ addBox }) => {

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE)

    };

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='color'>Color: </label>
            <input 
                id='color'
                type='text'
                name='color'
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor='width'>Width: </label>
            <input
                id='width'
                type='number'
                name='width'
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor='height'>Height: </label>
            <input
                id='height'
                type='number'
                name='height'
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add Box</button>

        </form>
    )
}







export default NewBoxForm;
