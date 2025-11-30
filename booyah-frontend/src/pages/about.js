import React from 'react';
// importing styled components to use on the about page
import {
    BodyContainer,
    BooyahLogo,
    Heading,
    HeadingText,
    PinkHeading,
    IntroText,
    Image,
    PurposeDiv,
    AboutPurpose,
    PillarsDiv,
    AboutPillars,
    BlueHeading,
    PinkText
} from "../styles/AboutElements";

const About = () => {
    return(
        // returning the layout of the about page & text
        <BodyContainer>
            <Heading>
                <BooyahLogo src="/Booyah Assets/GIFS/Rotating Booyah Blue.gif" alt="Booyah Logo"/>
                <HeadingText>
                    <h1>About Us</h1>
                    <h3>Our Story</h3>
                </HeadingText>
            </Heading>
             
            <IntroText>
                <h2>Hi, we're Kortney + Zakk </h2>
                <p>We're the owners + operators of Booyah Bagels - but more importantly, <br/>
                        we're a couple of Red Deer locals looking to spread a little L O V E in our community. </p>
                <h2>Why bagels, you ask?</h2>
                <p>Inspired by the bustling beat of the Big Apple, <br/> 
                    we craved creating a central hangout for our community to come + kick it. </p>
                <h2>The heart of it all? Bangin' good bagels. </h2>
                <p>Over the past year, we've travelled + trained with world renowned bagel expert,<br/>
                        Beth George of BYOB Bagels so we can bring YOU a taste of NYC-style staples, right here in Red Deer. </p>
                <PinkHeading>Curious what all the buzz is about?  POP IN FOR A BITE!</PinkHeading>
            </IntroText>
            
            <PurposeDiv>
                <Image src="/Booyah Assets/Brand images/Z and K on case.jpg" alt="Z and K on case"/>
                <AboutPurpose>
                    <PinkHeading>Our Purpose</PinkHeading>
                    <BlueHeading>We're here to uplift our community by spreading good vibes and better bites, made with only the best ingredients.</BlueHeading>
                    <p>Here's the scoop—Booyah Bagels is in the biz of mind-blowing bagels that'll make your taste buds do a happy dance. Every bite is a crafty blend of natural, thoughtfully-sourced ingredients, baked to perfection by the best in the biz. We're talking NYC-style staples, made with steam-injected magic that locks in that oh-so-sweet-succulence. And you bet Mother Earth is treated with the same respect as each recipe, using eco-friendly packaging to seal the deal. Afterall this is bigger than bagels. It's about spreading the good stuff in the city of Red Deer.</p>
                </AboutPurpose>
            </PurposeDiv>
            
            <PillarsDiv>
                <AboutPillars>
                    <PinkHeading>Our Pillars</PinkHeading>
                    <BlueHeading>STAY TRUE, BE INTENTIONAL, AND LET THE GOOD VIBES ROLL.</BlueHeading>
                    <PinkText>TRUE // Refreshingly real philosophy</PinkText>
                    <p><b>Be any flavour you want to be.</b> Booyah Bagels runs a bold, no-BS business—because we believe showing up authentic makes for moments that keep you coming back for more. Cut the politics and performance…ours is a place built for belonging.</p>
                    <PinkText>VIBE // Ridiculously delicious experience</PinkText>
                    <p><b>Come on in and take a beat. </b> Booyah Bagels is a one-of-a-kind community corner that's got buzzin' energy and bussin' bites. With the bar set high and the vibes higher, we're the local spot for anyone and everyone to connect over mutual cravings.</p>
                    <PinkText>INTENTION // Radically for the people connection</PinkText>
                    <p><b>Find like-minded, no-fuss foodies. </b> Booyah Bagels cultivates long-term ties with transparent, no-surprise practices you can trust. Our bread and butter? Simple recipes, thoughtfully-sourced ingredients, and ecofriendly ops aligned to our unconventional outlook.</p>
                </AboutPillars>
                <Image src="/Booyah Assets/Brand images/moving bagels 2.jpg" alt="moving bagels"/>
            </PillarsDiv>
        </BodyContainer>
    );
};

export default About;