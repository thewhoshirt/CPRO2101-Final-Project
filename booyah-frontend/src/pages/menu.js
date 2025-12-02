import React, { useState, useEffect } from "react"; // import required React functions
import { Image, BodyContainer, MenuHeading, Div, ProductHeading1, ProductHeading2, TextDiv } from "../styles/MenuElements"; // import styled components from MenuElements file
const Menu = () => {
    /**
     * Set the values for the variables used
     */
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    /**
     * Run the useEffect function when the page is loaded, this function will try to get the products from the backend via json at the specified route
     * and then store the products in the products variable.
     * Otherwise set the error to the specified message which is display on the page.
     * Finally the loading is set to false once a response either successful or not is recieved
     */
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return(
        <BodyContainer>
            <br />
            <Div>
                <Image src="Booyah Assets/Brand images/Zakk with bagels.jpg" alt="Zakk with bagels" />
                <MenuHeading>
                    <h1>Menu</h1>
                    <p className="accentHeader">What's at Booyah Bagels, you ask?</p>
                    <p>Bagels that will make your taste buds do a happy dance! Every bite is a crafty blend of natural, thoughtfully-sourced ingredients, baked to perfection. Our NY-inspired bagels are crispy on the outside, chewy on the inside.</p>
                    <p>Our sourdough bagels are produced with a unique process using flour without bleaching agents or bromides. We source our ingredients locally when possible.</p>
                    <p>Here are some of our incredible local vendors:</p>
                    <ul style={{listStyleType:'none'}}>
                        <li>Coffee + cold brew from <b>Dose Coffee Co.</b></li>
                        <li>Kombucha from <b>Wild Brewing Co</b></li>
                        <li>Chai from <b>Chai Wallahs</b></li>
                        <li>Microgreens from the <b>Red Deer Food Bank Society</b></li>
                        <li>Meats + cheeses from <b>Nossack Food Group</b></li>
                    </ul>
                </MenuHeading>
            </Div>
            <Div>
                <Image src="Booyah Assets/Brand images/Box of bagels.jpg" alt="Bagel close up" />
                <TextDiv>
                    <ProductHeading1>Bagels</ProductHeading1>
                    <ProductHeading2>Single bagel | Sleeve of 5 bagels | Box of 15 bagels + 3 tubs of cream cheese</ProductHeading2>
                    {loading && <p>Loading bagels...</p>} {/* set the text content to the specified message while the backend response is being fetched */}
                    {error && <p style={{color: 'red'}}>Error: {error}</p>} {/* set the text content to the error if one is returned */}
                    {/**
                     * Check if the length of the products list is greater than 0, if true create an html list of the products with the name and price as the content
                     * for the list item, filtering to only show the bagel products
                     */}
                    {products.length > 0 ? (
                        <ul style={{listStyleType:'none'}}>
                            {products.filter(product => !product.ProductName.includes('Cream Cheese')).map((product) => (
                                <li key={product._id}>
                                    <strong>{product.ProductName}</strong> - ${product.ProductPrice.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : ( !loading && <p>No Bagels available</p>)} {/* if there was no error received from the backend but the products list is empty, show the specified message*/}
                </TextDiv>
            </Div>
            <Div>
                <TextDiv>
                    <ProductHeading1>Spreads</ProductHeading1>
                    <ProductHeading2>Cream cheeses prepared in-house</ProductHeading2>
                       <ProductHeading2>Other: peanut butter |  jam | nutella | honey</ProductHeading2>
                    {loading && <p>Loading spreads...</p>} {/* set the text content to the specified message while the backend response is being fetched */}
                    {error && <p style={{color: 'red'}}>Error: {error}</p>} {/* set the text content to the error if one is returned */}
                    {/**
                     * Check if the length of the products list is greater than 0, if true create an html list of the products with the name and price as the content
                     * for the list item, filtering to only show the cream cheese products
                     */}
                    {products.length > 0 ? (
                        <ul style={{listStyleType:'none'}}>
                            {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                                <li key={product._id}>
                                    <strong>{product.ProductName}</strong> - ${product.ProductPrice.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : ( !loading && <p>No Spreads available</p> )} {/* if there was no error received from the backend but the products list is empty, show the specified message*/}
                </TextDiv>
                <Image src="Booyah Assets\Stock images\SpreadBagels-Stock-Imagery15.jpg" alt="Cream cheese close up" />
            </Div>
            <Div>
                <Image src="Booyah Assets/Brand images/Cold brew.jpg" alt="Booyah Bagels Cold Brew" />
                <TextDiv>
                    <ProductHeading1>Announcements</ProductHeading1>
                    <ProductHeading2>Important announcements and seasonal flavours</ProductHeading2>
                    <p>This months Seasonal Flavor is <em>Apple Cinnamon</em></p>
                    <p>⋆꙳❅*❆Closing December 22nd till January 5th For the Holidays.⋆꙳❅*❆</p>
                </TextDiv>
            </Div>
        </BodyContainer>
    )
};
export default Menu;