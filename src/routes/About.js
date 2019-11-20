import React from 'react';
import BlockTexts from '../components/BlockTexts';
import '../layout/About.css'

// include header comp?
// replace texts later with imported json
// construct new component with hover/box shadows + text for current sponsors

const About = () => (
    <div>
        <header>ABOUT</header>
        <BlockTexts
            className="mt"
            texts={[
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
            ]}
        />
        <header>SPONSORS</header>
        <BlockTexts
            className="mt"
            texts={[
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
            ]}
        />
        <header>CURRENT SPONSORS</header>
    </div>
);


export default About;
