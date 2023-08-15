import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({ product, index }) {

    const identifier = `product-${index}`;

    return (
        <div>
            <tr>
                <td>{product.company}</td>
                <td>
                    <label for={identifier}>
                        <input type="radio" id={identifier} name="product" required
                            checked={selectedProduct === products.product}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            value={product.product} />
                        {product.product}
                    </label>
                </td>
                <td>{product.price.toLocaleString()}</td>
                <td><ProductQuantity /></td>
            </tr>
        </div>
    );
}

export default ProductRow;
