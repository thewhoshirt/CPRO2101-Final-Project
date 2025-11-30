import React from "react"; // import React
import { BodyContainer, BooyahLogo, Image, ImageDiv, Graphic1, Graphic2, PinkHeading, FAQ, Seperator } from "../styles/HomeElements"; // import styled components from HomeElements file
const Home = () => {
   return( 
    <BodyContainer>
        <Graphic1 src="Booyah Assets\Graphics\Squiggle14_Swell.png" alt="squiggle"/>
        <BooyahLogo src="/Booyah Assets/GIFS/Booyah Bagels Logo_hero.gif" alt="Booyah Logo"/>
        <Graphic2 src="Booyah Assets\Graphics\Squiggle11_Sunshine.png" alt="squiggle"/>
        <ImageDiv>
            <Image src="Booyah Assets\Brand images\Bagels on wall.jpg" alt="Bagels on the wall"/>
            <Image src="Booyah Assets\Brand images\bag with box.jpg" alt="Bagels with a box"/>
            <Image src="Booyah Assets\Brand images\Hand roll 1.jpg" alt="Hand roll"/>
        </ImageDiv>
        <h1>RIDICULOUSLY DELICIOUS</h1>
        <Seperator>----------------------</Seperator>
        <FAQ>
            <h1>Frequently Asked Questions</h1>
            <div>
                <PinkHeading>Q: What is a New York-style bagel?</PinkHeading>
                <p>A:  Our bagels are New York inspired - we substitute the boiling stage by steam-injecting our bagels in our oven, however we use traditional NY bagel ingredients (including barley malt syrup). NY-style bagels are typically crispy on the outside and chewy on the inside!</p>
            </div>
            <div>
                <PinkHeading>Q: What types of beverages are you selling?</PinkHeading>
                <p>A: We are keeping it traditional to a New York bagel shop, so there will be no fancy lattes here! We do have hot drip coffee, bottled cold brew, a  variety of hot tea + chai, freshly squeezed orange juice (juiced in-house), and a variety of bottled beverages.</p>
            </div>
            <div>
                <PinkHeading>Q: Is Booyah Bagels a franchise?</PinkHeading>
                <p>A: It is not a franchise! Booyah Bagels started from the nostalgia of the Great Canadian Bagel in Red Deer and the owners' love for New York City. After extensive research at home and training in New York, Booyah Bagels was born.</p>
            </div>
            <div>
                <PinkHeading>Q: How often do you change your bagel flavors?</PinkHeading>
                <p>A: We always have our staple flavours, but we rotate our flavours (offering 9 a day!) Check out our social media to see which flavours we will have each day! </p>
            </div>
            <div>
                <PinkHeading>Q: Do you have any gluten-free bagels?</PinkHeading>
                <p>A: No, the risk of cross contamination is too high in our kitchen to guarantee that the bagel would be gluten-free. However, people who have a mild gluten intolerance have found that our bagels do not upset their stomach! They're gut-friendly (no bleaching agents, bromides, or preservatives!)</p>
            </div>
            <div>
                <PinkHeading>Q: Do you have any bagels that are vegan friendly?</PinkHeading>
                <p>A: Yes! Any bagel that does not contain cheese or chocolate is vegan friendly! We do carry peanut butter and jams to spread on bagels which are also vegan friendly options.</p>
            </div>
            <div>
                <PinkHeading>Q: Do you deliver or offer catering/pre-orders?</PinkHeading>
                <p>A: Pre-orders for bulk bagels can be made! Sorry, we do not deliver at this time.</p>
            </div>
            <div>
                <PinkHeading>Q: How can I pay for my food?</PinkHeading>
                <p>A: We will gladly take your cash, credit, debit and Booyah Bagels gift cards. We do not accept AMEX.</p>
            </div>
        </FAQ>
    </BodyContainer>
   );
};
export default Home;