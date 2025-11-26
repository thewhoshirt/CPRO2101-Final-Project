import React, { useState, useEffect } from "react"; 
import { Image, BodyContainer, Div, ProductHeading1, ProductHeading2 } from "../styles/MenuElements";

const Menu = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            
            <Div>
                <Image src="Booyah Assets/Brand images/Zakk with bagels.jpg" alt="Zakk with bagels" />
                <div>
                    <h1>Menu</h1>
                    <p>What's at Booyah Bagels, you ask?</p>
                    <p>Bagels that will make your taste buds do a happy dance! Every bite is a crafty blend of natural, thoughtfully-sourced ingredients, baked to perfection. Our NY-inspired bagels are crispy on the outside, chewy on the inside.</p>
                    <p>Our sourdough bagels are produced with a unique process using flour without bleaching agents or bromides. We source our ingredients locally when possible.</p>
                    <p>Here are some of our incredible local vendors:</p>
                    <ul>
                        <li>Coffee + cold brew from <b>Dose Coffee Co.</b></li>
                        <li>Kombucha from <b>Wild Brewing Co</b></li>
                        <li>Chai from <b>Chai Wallahs</b></li>
                        <li>Microgreens from the <b>Red Deer Food Bank Society</b></li>
                        <li>Meats + cheeses from <b>Nossack Food Group</b></li>
                    </ul>
                </div>
            </Div>
            <Div>
                <Image src="Booyah Assets/Brand images/Box of bagels.jpg" alt="Bagel close up" />
                <div>
                    <ProductHeading1>Bagels</ProductHeading1>
                    <ProductHeading2>Single bagel | Sleeve of 5 bagels | Box of 15 bagels + 3 tubs of cream cheese</ProductHeading2>
                
                    {loading && <p>Loading bagels...</p>}
                    {error && <p style={{color: 'red'}}>Error: {error}</p>}
                    {products.length > 0 ? (
                        <ul>
                            {products.filter(product => !product.ProductName.includes('Cream Cheese')).map((product) => (
                                <li key={product._id}>
                                    <strong>{product.ProductName}</strong> - ${product.ProductPrice.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        !loading && <p>No Bagels available</p>
                    )}
                </div>
            </Div>
            <Div>
                <div>
                    <ProductHeading1>Spreads</ProductHeading1>
                    <ProductHeading2>Cream cheeses prepared in-house
                        Other: peanut butter |  jam | nutella | honey</ProductHeading2>
                    {loading && <p>Loading spreads...</p>}
                    {error && <p style={{color: 'red'}}>Error: {error}</p>}
                    {products.length > 0 ? (
                        <ul>
                            {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                                <li key={product._id}>
                                    <strong>{product.ProductName}</strong> - ${product.ProductPrice.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        !loading && <p>No Spreads available</p>
                    )}
                </div>
                <Image src="Booyah Assets\Stock images\SpreadBagels-Stock-Imagery15.jpg" alt="Cream cheese close up" />

            </Div>
            
        </BodyContainer>
    )
};

export default Menu;