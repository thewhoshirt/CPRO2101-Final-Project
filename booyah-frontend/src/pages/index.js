import React from "react";
import { BodyContainer, BooyahLogo, Image, ImageDiv, Graphic1, Graphic2 } from "../styles/HomeElements";

const Home = () => {
   return( 
    <BodyContainer>
        <Graphic1 src="Booyah Assets\Graphics\Squiggle14_Swell.png" alt="squiggle"/>
        <BooyahLogo src="/Booyah Assets/GIFS/Booyah Bagels Logo_hero.gif" alt="Booyah Logo"/>
        <Graphic2 src="Booyah Assets\Graphics\Squiggle11_Sunshine.png" alt="squiggle"/>
        <ImageDiv>
            <Image src="Booyah Assets\Brand images\Bagels on wall.jpg" alt="Bagels on the wall"/>
            <Image src="Booyah Assets\Brand images\bag with box.jpg" alt="Bagels on the wall"/>
            <Image src="Booyah Assets\Brand images\Hand roll 1.jpg" alt="Bagels on the wall"/>
        </ImageDiv>
        <h1>RIDICULOUSLY DELICIOUS</h1>
    </BodyContainer>

   );

};

export default Home;