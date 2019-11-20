import React from 'react';
import BlockTexts from '../components/BlockTexts';

const About = () => (
    <div>
        <BlockTexts
            className=""
            texts={[
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
                {"header": "my header", "body": "my body"},
            ]}
        />
    </div>
);


export default About;
