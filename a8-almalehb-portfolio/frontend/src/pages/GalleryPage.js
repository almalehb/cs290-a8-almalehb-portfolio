import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GalleryPage() {

    useEffect(() => {
    }, []);

    return (
        <>
            <div>
                <h2>Gallery</h2>
                <article class="gallery">
                    <figure>
                        <img
                            src="images/the-vancouver-house-building.jpeg"
                            alt="An iconic new building in downtown Vancouver, Canada."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            This iconic building is called Vancouver House. It is located in downtown Vancouver, British Columbia, Canada.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/skiing-in-quebec.jpeg"
                            alt="Skiers going downhill at Mont Tremblant, Quebec, Canada."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I took this photo while snowboarding at Mont Tremblent in Quebec, Canada. This photo shows the village at the bottom of the mountain.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/redwoods-in-california.jpeg"
                            alt="Tall redwood trees surrouned by vegetation in California."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I took this picture while hiking near Redwood City in the San Francisco Bay Area, California.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/mount-kilimanjaro.jpeg"
                            alt="The summit of mount Kilimanjaro in Tanzania, Africa."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I took this selfie after reaching the summit of Mount Kilimanjaro in Tanzania, as part of a 6-day trek.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/monet-exhibition.jpeg"
                            alt="An art exhibition projecting Monet's famous art on the walls."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            This was a Monet art exhibition in Montreal, where Monet's art was projected and animated on the walls around us.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/fog-in-montreal.jpeg"
                            alt="A foggy park in downtown Montreal."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I took this picture on an early morning in Montreal that was particularly foggy.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/lion-search-it-application.jpg"
                            alt="A screenshot of a macOS application that looks up employee information."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I built this macOS application while working in IT to help look up useful information about employees that we are trying to assist.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/instaweather-ios-app.jpg"
                            alt="A weather iOS application built for iPhone."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            This is a weather application called InstaWeather that I built for iOS while learning the Swift programming language.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/draw-with-math-ios-app.jpg"
                            alt="An iOS educational game to help learn arithmetic."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            I built this iOS game to help kids practice arithmetic on an iPhone or iPad.
                        </figcaption>
                    </figure>

                    <figure>
                        <img
                            src="images/barjees-ipad-app.jpg"
                            alt="An iPad board game based on a traditional middle-eastern game called Barjees."
                            title="© 2023 Besher Al Maleh"
                        />
                        <figcaption>
                            This iPad board game was modeled after a traditional middle-eastern game called Barjees.
                        </figcaption>
                    </figure>
                </article>
            </div>
        </>
    );
}

export default GalleryPage;