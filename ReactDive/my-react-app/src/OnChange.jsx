
import React, { useState } from 'react'

function OnChange() {

    const [name, setName] = useState('GUEST');
    const [text, setText] = useState('Enter Comments here!');
    const [payment, setPayment] = useState("select an option");
    const [shipping, setShipping] = useState('Delivery');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }


    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <textarea name="" id="" onChange={handleTextChange} placeholder='Write Here' />
            <p>Comments: {text}</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="MPESA Global">MPESA Global</option>
                <option value="Paypal">Paypal</option>
            </select>
            <br />

            <label>
                <input type="radio" value='PickUp' checked={shipping === "PickUp"} onChange={handleShippingChange} />
                PickUp
            </label> <br />

            <label>
                <input type="radio" value='Delivery' checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label> 

            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default OnChange