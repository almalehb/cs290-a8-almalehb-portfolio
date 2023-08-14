import { React } from 'react';

function ThankYouPage({ contactForm }) {
    return (
        <>
            <section >
                <h2>Thank You</h2>
                <article>
                    <h3>Hi there, <strong>{contactForm.fullName}</strong></h3>
                    <p>Your message was well-received. We greatly appreciate your feedback! Thank you for giving us a rating of <strong>{contactForm.rating}</strong>. We understand that you prefer using <strong>{contactForm.mode}</strong> while browsing online. </p>
                    <p>We will get in touch with you at <strong>{contactForm.email}</strong> if we have more questions.</p>
                    <p>Your full message was noted: {contactForm.message}</p>
                </article>
            </section>
        </>
    );
}

export default ThankYouPage;