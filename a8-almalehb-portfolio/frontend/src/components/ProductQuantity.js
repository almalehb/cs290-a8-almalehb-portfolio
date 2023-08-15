import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

function ProductQuantity() {

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <FaAngleUp className='faIconButton quantityButton' onClick={increaseQuantity} />
            <FaAngleDown className='faIconButton quantityButton' onClick={decreaseQuantity} />
        </div>
    );
}

export default ProductQuantity;
