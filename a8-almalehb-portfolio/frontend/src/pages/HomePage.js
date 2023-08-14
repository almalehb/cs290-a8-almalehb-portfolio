import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    useEffect(() => {
    }, []);

    return (
        <>
            <div>
                <h2>Home</h2>
                <article>
                    <h3>Welcome to my website!</h3>
                    <p>This website was part of a project that helped me learn and understand various web technologies.
                    </p>
                    <p>My career goals as of 2023 include becoming a domain expert in Computer Science, specializing in iOS mobile app development, utilizing my skills to solve real-world problems, and helping more people get into the industry through mentorship and sharing my knowledge.</p>

                    <p>This website was built primiarly using the MERN stack, which includes:</p>
                    <dl>
                        <dt><strong>MongoDB</strong></dt>
                        <dd>This is a noSQL database that stores data in a flexible JSON-like format, allowing for quick retrieval and storage of data without having a fixed schema. It is scalable and adaptable to various data requirements.</dd>
                        <dt><strong>Express</strong></dt>
                        <dd>A minimal and flexible JavaScript back-end framework that provides a robust set of features for web applications, including managing routes, handling requests and responses, and integrating with a database.</dd>
                        <dt><strong>React</strong></dt>
                        <dd>A front-end JavaScript library intended for building user interfaces. It allows developers to create reusable UI components and manage the view layer for web applications in an efficient manner.</dd>
                        <dt><strong>Node</strong></dt>
                        <dd>This is a JavaScript back-end runtime environment that lets developers write server-side code in an efficient and lightweight manner.</dd>
                    </dl>
                </article>
            </div>
        </>
    );
}

export default HomePage;