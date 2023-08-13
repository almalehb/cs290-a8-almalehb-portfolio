import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {

    useEffect(() => {
    }, []);

    return (
        <>
            <div>
                <h2>Contact</h2>
                <article>

                    <h3>We would love to hear what you think about our website. Your feedback matters to us.</h3>
                    <p>Please fill out all fields marked by *</p>
                    <form action="/formResults" method="POST">

                        <fieldset>
                            <legend>Your contact information.</legend>

                            <label for="fullName" class="required">Your first and last name </label>
                            <input type="text" name="fullName" id="fullName" size="35" required
                                placeholder="Please enter your first and last name." autofocus />

                            <label for="email" class="required">Email </label>
                            <input type="text" name="email" id="email" size="35" required
                                placeholder="Please enter your email address." />

                            <label for="message" class="required">Do you have any specific feedback? </label>
                            <textarea name="message" minlength="3" maxlength="500" required
                                placeholder="Your feedback..."></textarea>
                        </fieldset>

                        <fieldset>
                            <legend>Help us further improve this website.</legend>


                            <div id="ratings">
                                <p>Please rate this website from 1 to 10:</p>

                                <input type="radio" id="rate1" name="rating" value="1" />
                                <label for="rate1">1</label>

                                <input type="radio" id="rate2" name="rating" value="2" />
                                <label for="rate2">2</label>

                                <input type="radio" id="rate3" name="rating" value="3" />
                                <label for="rate3">3</label>

                                <input type="radio" id="rate4" name="rating" value="4" />
                                <label for="rate4">4</label>

                                <input type="radio" id="rate5" name="rating" value="5" />
                                <label for="rate5">5</label>

                                <input type="radio" id="rate6" name="rating" value="6" />
                                <label for="rate6">6</label>

                                <input type="radio" id="rate7" name="rating" value="7" />
                                <label for="rate7">7</label>

                                <input type="radio" id="rate8" name="rating" value="8" />
                                <label for="rate8">8</label>

                                <input type="radio" id="rate9" name="rating" value="9" />
                                <label for="rate9">9</label>

                                <input type="radio" id="rate10" name="rating" value="10" checked />
                                <label for="rate10">10</label>
                            </div>

                            <label id="modeLabel" for="mode">What is your usual preferred mode?</label>
                            <select id="mode" name="mode">
                                <option value="Light Mode">Light Mode</option>
                                <option value="Dark Mode">Dark Mode</option>
                                <option value="customized colors">I prefer to customize the colors</option>
                            </select>

                            <p>Select up to 6 possible improvements to this website:</p>

                            <div class="improvements">
                                <input type="checkbox" id="performance" name="improvements" value="Performance" />
                                <label for="performance">Performance</label>
                            </div>

                            <div class="improvements">
                                <input type="checkbox" id="design" name="improvements" value="Design" />
                                <label for="design">Design</label>
                            </div>

                            <div class="improvements">
                                <input type="checkbox" id="utility" name="improvements" value="Utility" />
                                <label for="utility">Utility</label>
                            </div>

                            <div class="improvements">
                                <input type="checkbox" id="content" name="improvements" value="Content" />
                                <label for="content">Content</label>
                            </div>

                            <div class="improvements">
                                <input type="checkbox" id="mobile" name="improvements" value="Mobile-friendliness" />
                                <label for="mobile">Mobile-friendliness</label>
                            </div>

                            <div class="improvements">
                                <input type="checkbox" id="Accessibility" name="improvements" value="accessibility" />
                                <label for="accessibility">Accessibility</label>
                            </div>

                            <label for="submit">
                                <button type="submit" id="submit" name="submission">Submit your feedback</button>
                            </label>

                        </fieldset>

                    </form>

                </article>
            </div>
        </>
    );
}

export default ContactPage;