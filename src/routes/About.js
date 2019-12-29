import React from 'react';
import BlockTexts from '../components/BlockTexts';
import '../layout/About.css'

// import images
import Beghou from '../assets/beghou.png';
import Canopy from '../assets/extreme-canopy.png';
import PhoenixLogo from '../assets/phoenixlogo.png';

const About = () => {
    const aboutText = [
        {
            "header": "Who We Are",
            "body": ["Founded in 2016, Phoenix Consulting Group has quickly emerged as a trusted partner for healthcare firms large and small. What gives our consultancy strength is the expertise of our consultants: Phoenix members are Berkeley’s best undergraduate entrepreneurs, researchers, and computer scientists. Simultaneously, we draw these consultants because of the strength of our training: Phoenix alumni graduate with unparalleled experience and a powerful network.", "What unites us as a community, however, is the fact that business problems in healthcare are inherently close to human lives. Powerful recommendations for healthcare firms directly impact the livelihoods of the customers they serve. Ultimately, Phoenix Consulting Group is an organization fiercely committed to improving lives on a massive scale."],
        },
        {
            "header": "Culture",
            "body": ["At Phoenix, we offer rigorous professional development workshops for members to prepare for future careers. Our new analysts are guided through a diligent training program, learning to become the future leaders of the organization as well as beyond. However, we also believe that every student needs to take a breath from the stress of university. Our dedicated committee plans exciting socials for members to foster everlasting friendships. Near the end of semesters, our club throws a celebratory banquet for all the hard work completed by our teams. Last semester, we had the opportunity to celebrate on a yacht as we sailed across the Golden Gate Bridge.", "Riding the bay’s small waves with friends is one thing; with family, another. In Phoenix Consulting, every member is both a mentor and a mentee, creating a unique sense of community where all are invested in each other’s success. Our close-knit family embraces each other’s successes and mistakes. We do not cower to our failures; we admit, learn, and succeed. During recruitment season, everyone prepares together, whether that’s editing resumes, preparing cases, or simply being there for each other during stressful times. None of us are perfect, but every member has a story, something that makes them truly special and full of potential. We want to hear your story and help write your chapter at Phoenix."],
        },
        {
            "header": "Impact",
            "body": ["Each semester, Phoenix takes on four carefully chosen projects, with scopes ranging from digital strategy to pharmaceutical viability analysis. In recent years, we have been fortunate to have far more business than we can afford to take on. As a result, we work not only on those projects we feel will be most meaningful for our organization, but also on where we feel we will be able to do the most good. Please see below for a selected list of past client engagements."],
        }
    ];
    const sponsorText = [
        {
            "header": "Beghou Consulting",
            "body": ["Beghou Consulting is a data-driven life science consulting firm that specializes in sales force design, forecasting, advanced analytics, and marketing strategy. They are a rapidly growing boutique firm which, for the past 25 years, has offered expert insights into the pharmaceutical and biotech industries. In addition to consulting services, Beghou couples their tailored solutions with custom data analytics platforms in order to foster long term client partnerships."],
            "image": {Beghou}
        },
        {
            "header": "ZS Associates",
            "body": ["ZS Associates is a premier management consulting firm with a primary focus on biotech and healthcare. They offer end-to-end sales and marketing solutions, business operational transformation, and pharmaceutical pipeline launch strategy, among other solutions. Three native software products addressing marketing, strategy implementation, and data analytics are offered to clients. Since 1983, they have served the largest names in biotech and pharmaceuticals, including Roche, Pfizer, Boehringer Ingelheim, and Abbvie."],
            "image": {Canopy}
        },
        {
            "header": "Extreme Canopy",
            "body": ["Extreme Canopy, a leader in their industry, is committed to delivering premium products at low, affordable prices to help support their community. Extreme Canopy has helped us elevate our brand to new heights. Their unparalleled customer support consistently helped us deliver a perfect product. We are grateful for their continued support and partnership. Phoenix Consulting Group exclusively uses Extreme Canopy’s canopy tents for all public events and recruitment cycles."],
            "image:": {PhoenixLogo}
        }
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
                    {
                        "header": "Beghou Consulting",
                        "body": ["Beghou Consulting is a data-driven life science consulting firm that specializes in sales force design, forecasting, advanced analytics, and marketing strategy. They are a rapidly growing boutique firm which, for the past 25 years, has offered expert insights into the pharmaceutical and biotech industries. In addition to consulting services, Beghou couples their tailored solutions with custom data analytics platforms in order to foster long term client partnerships."],
                    },
                    {
                        "header": "ZS Associates",
                        "body": ["ZS Associates is a premier management consulting firm with a primary focus on biotech and healthcare. They offer end-to-end sales and marketing solutions, business operational transformation, and pharmaceutical pipeline launch strategy, among other solutions. Three native software products addressing marketing, strategy implementation, and data analytics are offered to clients. Since 1983, they have served the largest names in biotech and pharmaceuticals, including Roche, Pfizer, Boehringer Ingelheim, and Abbvie."],
                    },
                    {
                        "header": "Extreme Canopy",
                        "body": ["Extreme Canopy, a leader in their industry, is committed to delivering premium products at low, affordable prices to help support their community. Extreme Canopy has helped us elevate our brand to new heights. Their unparalleled customer support consistently helped us deliver a perfect product. We are grateful for their continued support and partnership. Phoenix Consulting Group exclusively uses Extreme Canopy’s canopy tents for all public events and recruitment cycles."],
                    },
                ]}
            />
        </div>
    );
};


export default About;
