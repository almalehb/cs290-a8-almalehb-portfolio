import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage() {

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
                            <legend>Your contact information.</legend>

                            <label for="fullName" class="required">Your first and last name </label>
                            <input type="text" name="fullName" id="fullName" size="35" required
                                placeholder="Please enter your first and last name." autofocus />

                            <label for="email" class="required">Email </label>
                            <input type="text" name="email" id="email" size="35" required
                                placeholder="Please enter your email address." />

                            <label for="address" class="required">Address </label>
                            <input type="text" name="address" id="address" size="35" required
                                placeholder="Address, city, state, zip code." />

                            <label for="instructions" class="required">Delivery Instructions </label>
                            <textarea name="instructions" minlength="3" maxlength="500" required
                                placeholder="Please enter any special instructions here."></textarea>
                        </fieldset>


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
                                                <input type="radio" id="agymProduct" name="product" required checked
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