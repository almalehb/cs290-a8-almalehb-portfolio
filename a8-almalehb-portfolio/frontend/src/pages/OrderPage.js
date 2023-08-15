import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage() {

    const [selectedProduct, setSelectedProduct] = useState('Spinning Cat Scratcher Ball');

    useEffect(() => {
    }, []);

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
                            <table>
                                <caption>Select a Product</caption>
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AGYM</td>
                                        <td>
                                            <label for="agymProduct">
                                                <input type="radio" id="agymProduct" name="product" required
                                                    checked={selectedProduct === 'Spinning Cat Scratcher Ball'}
                                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                                    value="Spinning Cat Scratcher Ball" />
                                                Spinning Cat Scratcher Ball
                                            </label>
                                        </td>
                                        <td>52.99</td>
                                    </tr>

                                    <tr>
                                        <td>Jasonwell</td>
                                        <td>
                                            <label for="jasonProduct">
                                                <input type="radio" id="jasonProduct" name="product"
                                                    checked={selectedProduct === 'Foldable Dog Pool'}
                                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                                    value="Foldable Dog Pool" />
                                                Foldable Dog Pool
                                            </label>
                                        </td>
                                        <td>27.25</td>
                                    </tr>

                                    <tr>
                                        <td>Expawlorer</td>
                                        <td>
                                            <label for="expawProduct">
                                                <input type="radio" id="expawProduct" name="product"
                                                    checked={selectedProduct === 'Dog Fence Window'}
                                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                                    value="Dog Fence Window" />
                                                Dog Fence Window
                                            </label>
                                        </td>
                                        <td>30.50</td>
                                    </tr>

                                    <tr>
                                        <td>Lollimeow</td>
                                        <td>
                                            <label for="lolliProduct">
                                                <input type="radio" id="lolliProduct" name="product"
                                                    checked={selectedProduct === 'Capsule Pet Travel Backpack'}
                                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                                    value="Capsule Pet Travel Backpack" />
                                                Capsule Pet Travel Backpack
                                            </label>
                                        </td>
                                        <td>59.00</td>
                                    </tr>

                                    <tr>
                                        <td>Drool'd</td>
                                        <td>
                                            <label for="droolProduct">
                                                <input type="radio" id="droolProduct" name="product"
                                                    checked={selectedProduct === 'Cat Hamster Wheel'}
                                                    onChange={(e) => setSelectedProduct(e.target.value)}
                                                    value="Cat Hamster Wheel" />
                                                Cat Hamster Wheel
                                            </label>
                                        </td>
                                        <td>349.75</td>
                                    </tr>
                                </tbody>
                            </table>

                            <label for="amount">Please enter a quantity between 1 and 35:</label>
                            <input
                                placeholder="Quantity"
                                type="number"
                                name="amount"
                                id="amount"
                                maxlength="2"
                                minlength="1"
                                max="35"
                                required
                            />

                            <p>Click submit when ready to place the order.</p>
                            <label for="submit">
                                <button type="submit" id="submit" name="submission">Submit Order</button>
                            </label>

                        </fieldset>
                    </form>
                </article>
            </div>
        </>
    );
}

export default OrderPage;