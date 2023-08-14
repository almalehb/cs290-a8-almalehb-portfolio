import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

function GalleryPage() {

    useEffect(() => {
    }, []);

    const images = [
        {
            original: 'images/the-vancouver-house-building.jpeg',
            thumbnail: 'images/the-vancouver-house-building.jpeg',
            description: 'This iconic building is called Vancouver House. It is located in downtown Vancouver, British Columbia, Canada.',
            originalHeight: '450px',
            alt: 'An iconic new building in downtown Vancouver, Canada.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/skiing-in-quebec.jpeg',
            thumbnail: 'images/skiing-in-quebec.jpeg',
            description: 'I took this photo while snowboarding at Mont Tremblent in Quebec, Canada. This photo shows the village at the bottom of the mountain.',
            originalHeight: '450px',
            alt: 'Skiers going downhill at Mont Tremblant, Quebec, Canada.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/redwoods-in-california.jpeg',
            thumbnail: 'images/redwoods-in-california.jpeg',
            description: 'I took this picture while hiking near Redwood City in the San Francisco Bay Area, California.',
            originalHeight: '450px',
            alt: 'Tall redwood trees surrouned by vegetation in California.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/mount-kilimanjaro.jpeg',
            thumbnail: 'images/mount-kilimanjaro.jpeg',
            description: 'I took this selfie after reaching the summit of Mount Kilimanjaro in Tanzania, as part of a 6-day trek.',
            originalHeight: '450px',
            alt: 'The summit of mount Kilimanjaro in Tanzania, Africa.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/monet-exhibition.jpeg',
            thumbnail: 'images/monet-exhibition.jpeg',
            description: 'This was a Monet art exhibition in Montreal, where Monet\'s art was projected and animated on the walls around us.',
            originalHeight: '450px',
            alt: 'An art exhibition projecting Monet\'s famous art on the walls.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/fog-in-montreal.jpeg',
            thumbnail: 'images/fog-in-montreal.jpeg',
            description: 'I took this picture on an early morning in Montreal that was particularly foggy.',
            originalHeight: '450px',
            alt: 'A foggy park in downtown Montreal.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/lion-search-it-application.jpg',
            thumbnail: 'images/lion-search-it-application.jpg',
            description: 'I built this macOS application while working in IT to help look up useful information about employees that we are trying to assist.',
            originalHeight: '450px',
            alt: 'A screenshot of a macOS application that looks up employee information.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/instaweather-ios-app.jpg',
            thumbnail: 'images/instaweather-ios-app.jpg',
            description: 'This is a weather application called InstaWeather that I built for iOS while learning the Swift programming language.',
            originalHeight: '450px',
            alt: 'A weather iOS application built for iPhone.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/draw-with-math-ios-app.jpg',
            thumbnail: 'images/draw-with-math-ios-app.jpg',
            description: 'I built this iOS game to help kids practice arithmetic on an iPhone or iPad.',
            originalHeight: '450px',
            alt: 'An iOS educational game to help learn arithmetic.',
            title: '© 2023 Besher Al Maleh',
        },
        {
            original: 'images/barjees-ipad-app.jpg',
            thumbnail: 'images/barjees-ipad-app.jpg',
            description: 'This iPad board game was modeled after a traditional middle-eastern game called Barjees.',
            originalHeight: '450px',
            alt: 'An iPad board game based on a traditional middle-eastern game called Barjees.',
            title: '© 2023 Besher Al Maleh',
        },
    ];
    

    return (
        <>
            <div>
                <h2>Gallery</h2>
                <article>
                    <ImageGallery items={images} />
                </article>
            </div>
        </>
    );
}

export default GalleryPage;