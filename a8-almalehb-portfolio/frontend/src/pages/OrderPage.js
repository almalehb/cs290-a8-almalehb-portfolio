import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductRow from '../components/ProductRow.js';
import products from '../data/products.js';

function OrderPage() {

    return (
        <>
            <div>
                <h2>Order</h2>
                <article>
                    <h3>Ready for your next order?</h3>
                    <p>Please fill out your details below.</p>

                    <form action="/orderResults" method="POST">
                        <fieldset>
                            <legend>Pet Products for Sale</legend>
                            <table id="productTable">
                                <caption>Select a Product</caption>
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => (
                                            <ProductRow product={product} key={index} index={index} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </fieldset>
                    </form>
                </article>
            </div>
        </>
    );
}

export default OrderPage;