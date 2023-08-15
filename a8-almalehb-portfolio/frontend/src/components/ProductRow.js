import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({ product, index, selectedProduct, setSelectedProduct }) {

    const identifier = `product-${index}`;

    const [quantity, setQuantity] = useState(0);

    return (
        <tr>
            <td><strong>{product.company}</strong></td>
            <td>
                <p>{product.product}</p>
            </td>
            <td>${product.price.toLocaleString()}</td>
            <td>{quantity}</td>
            <td><ProductQuantity quantity={quantity} setQuantity={setQuantity} /></td>
        </tr>
    );
}

export default ProductRow;
