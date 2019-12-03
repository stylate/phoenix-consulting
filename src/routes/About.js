import React from 'react';
import BlockTexts from '../components/BlockTexts';
import '../layout/About.css'

// include header comp?
// replace texts later with imported json
// construct new component with hover/box shadows + text for current sponsors

const About = () => {
    const aboutText = [
        {"header": "Who We Are", "body": ["Founded in 2016, Phoenix Consulting Group has quickly emerged as a trusted partner for healthcare firms large and small. What gives our consultancy strength is the expertise of our consultants: Phoenix members are Berkeley’s best undergraduate entrepreneurs, researchers, and computer scientists. Simultaneously, we draw these consultants because of the strength of our training: Phoenix alumni graduate with unparalleled experience and a powerful network."]},
        {"header": "my header", "body": ["my body"]},
        {"header": "my header", "body": ["my body"]},
        {"header": "my header", "body": ["my body"]},
    ];
    return (
        <div>
            <header>ABOUT</header>
            <BlockTexts
                className="mt"
                texts={aboutText}
            />
            <br/><br/><br/>
            <header>SPONSORS</header>
            <BlockTexts
                className="mt"
                texts={[
                    {"header": "my header", "body": ["my body"]},
                    {"header": "my header", "body": ["my body"]},
                    {"header": "my header", "body": ["my body"]},
                    {"header": "my header", "body": ["my body"]},
                ]}
            />
            <header>CURRENT SPONSORS</header>
        </div>
    );
};


export default About;
