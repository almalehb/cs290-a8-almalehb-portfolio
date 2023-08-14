import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactPage({ setContactForm }) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        rating: '10',
        mode: 'Light Mode',
        improvements: [],
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                improvements: e.target.checked
                    ? [...formData.improvements, value]
                    : formData.improvements.filter((improvement) => improvement !== value),
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setContactForm(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/formResults', formData);
            navigate('/thank-you'); 
        } catch (error) {
            console.error('An error was encountered while submitting the form', error)
        }
    };

    return (
        <>
            <div>
                <h2>Contact</h2>
                <article>
                    <h3>We would love to hear what you think about our website. Your feedback matters to us.</h3>
                    <p>Please fill out all fields marked by *</p>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Your contact information.</legend>
                            <label htmlFor="fullName" className="required">Your first and last name </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                size="35"
                                required
                                placeholder="Please enter your first and last name."
                                autoFocus
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <label htmlFor="email" className="required">Email </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                size="35"
                                required
                                placeholder="Please enter your email address."
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="message" className="required">Do you have any specific feedback? </label>
                            <textarea
                                name="message"
                                minLength="3"
                                maxLength="500"
                                required
                                placeholder="Your feedback..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Help us further improve this website.</legend>
                            <div id="ratings">
                                <p>Please rate this website from 1 to 10:</p>
                                {[...Array(10)].map((_, index) => (
                                    <span key={index}>
                                        <input
                                            type="radio"
                                            id={`rate${index + 1}`}
                                            name="rating"
                                            value={index + 1}
                                            checked={formData.rating === `${index + 1}`}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor={`rate${index + 1}`}>{index + 1}</label>
                                    </span>
                                ))}
                            </div>
                            <label id="modeLabel" htmlFor="mode">What is your usual preferred mode?</label>
                            <select
                                id="mode"
                                name="mode"
                                value={formData.mode}
                                onChange={handleChange}
                            >
                                <option value="Light Mode">Light Mode</option>
                                <option value="Dark Mode">Dark Mode</option>
                                <option value="customized colors">I prefer to customize the colors</option>
                            </select>
                            <p>Select up to 6 possible improvements to this website:</p>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="performance"
                                    name="improvements"
                                    value="Performance"
                                    onChange={handleChange}
                                />
                                <label htmlFor="performance">Performance</label>
                            </div>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="design"
                                    name="improvements"
                                    value="Design"
                                    onChange={handleChange}
                                />
                                <label htmlFor="design">Design</label>
                            </div>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="utility"
                                    name="improvements"
                                    value="Utility"
                                    onChange={handleChange}
                                />
                                <label htmlFor="utility">Utility</label>
                            </div>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="content"
                                    name="improvements"
                                    value="Content"
                                    onChange={handleChange}
                                />
                                <label htmlFor="content">Content</label>
                            </div>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="mobile"
                                    name="improvements"
                                    value="Mobile-friendliness"
                                    onChange={handleChange}
                                />
                                <label htmlFor="mobile">Mobile-friendliness</label>
                            </div>
                            <div className="improvements">
                                <input
                                    type="checkbox"
                                    id="Accessibility"
                                    name="improvements"
                                    value="accessibility"
                                    onChange={handleChange}
                                />
                                <label htmlFor="accessibility">Accessibility</label>
                            </div>
                            <label htmlFor="submit">
                                <button type="submit" id="submit" name="submission">
                                    Submit your feedback
                                </button>
                            </label>
                        </fieldset>
                    </form>
                </article>
            </div>
        </>
    );
}

export default ContactPage;