import { FooterContainer, Logo, SocialLogos } from '../../styles/FooterElements'; // import the styled components from the footerelements file
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Logo src="Booyah Assets\Monogram\Bi-Color\Web\BooyahBagels-Monogram-Windbreaker and Pretty in pink.png" alt="Booyah Bagels Logo" /> {/*Add the business logo to the footer*/}
                {/**
                 * Add the logos for social media presences as well as make the logos links to the respective pages
                 */}
                <div>
                    <h1>Spread the good stuff.</h1>
                    <a href="https://www.facebook.com/people/Booyah-Bagels/100091819339135/"><SocialLogos src='/Facebook.avif' alt="facebook Logo"/></a>
                    <a href="https://www.instagram.com/booyahbagels/"><SocialLogos src='/Instagram.avif' alt="instagram Logo"/></a>
                    <a href="https://www.tiktok.com/@booyahbagels"><SocialLogos src='/TikTok.avif' alt="tiktok Logo"/></a>
                </div>
                {/**
                 * Add the address and contact info to the footer
                 */}
                <div>
                    <p>#180, 5441 45 ST, RED DEER, AB</p>
                    <p>HELLO@BOOYAHBAGELS.CA</p>
                </div>
            </FooterContainer>
        </>
    );
};
export default Footer;