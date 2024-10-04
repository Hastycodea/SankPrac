import React, { useState } from 'react';

function Food() {

    const [foods, setFoods] = useState(['Apple', 'Mango', 'Banana']);

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods( f => [...f, newFood]);

    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_,i) => i !== index));
    }


    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type='text' id='foodInput' placeholder='Enter food Item' about />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );

}

export default Food