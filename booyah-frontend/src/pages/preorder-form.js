import React, { useState, useEffect } from 'react';
import {
    BodyContainer,
    FormBody,
    Input,
    TextArea,
    BooyahLogo,
    List,
    ListItems,
    Headers,
    Selector,
    Item
} from "../styles/PreorderElements";

function PreorderForm(){
    // Form state variables
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", date: "", notes: "", bagel: "", product: "" });
    
    // Order state variables
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('Initial');
    const [orderItems, setOrderItems] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [bagelQuantities, setBagelQuantities] = useState({});
    const [creamCheeseSelections, setCreamCheeseSelections] = useState({});
    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        // Fetch products from backend API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
            } 
            catch (err) {
                console.log(err.message);
            }
        };
        fetchProducts();
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: "", email: "", phone: "", date: "", notes: "" };
        let isValid = true;

        // Basic validation for required fields
        if (Name.trim() === "") {
            formErrors.name = "Name is required.";
            isValid = false;
        }
        if (email.trim() === "" || !email.match(/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm)) {
            formErrors.email = "Email is required.";
            isValid = false;
        }
        if (phone.trim() === "" || !phone.match(/^(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/)) {
            formErrors.phone = "Phone is required.";
            isValid = false;
        }
        if(date.trim() === ""){
            formErrors.date = "Date is required";
            isValid = false;
        }
        if (notes.trim() === "") {
            formErrors.notes = "Notes are required.";
            isValid = false;
        }
        if (orderTotal === 0) {
            formErrors.product = "At least one product must be selected.";
            isValid = false;
        }

        // Validate bagel quantities for each order item
        const bagelItems = orderItems.filter(item => item.orderType === 'Box' || item.orderType === 'Sleeve');
        
        for (let item of bagelItems) {
            const requiredQty = item.orderType === 'Box' ? 15 : 5;
            const actualQty = bagelQuantities[item.id] || 0;
            // Validate: must have exactly the required quantity
            if (actualQty !== requiredQty) {
                formErrors.bagel = `${item.orderType} requires exactly ${requiredQty} bagels.`;
                isValid = false;
                break;
            }
        }

        // Validate that all three cream cheese selections are made for each Box order
        const boxItems = orderItems.filter(item => item.orderType === 'Box');
        for (let item of boxItems) {
            const selections = creamCheeseSelections[item.id];
            // Check if selections exist and none are 'Initial'
            if (selections && (selections[0] === 'Initial' || selections[1] === 'Initial' || selections[2] === 'Initial')) {
                formErrors.bagel = 'Each Box must have all three cream cheese flavors selected.';
                isValid = false;
                break;
            }
        }

        // If validation fails, set errors and abort submission
        if (!isValid) {
            setErrors(formErrors);
            return;
        }

        // If validation passes, show success alert
        alert(`Thank you for your order, ${Name}! \n Your total is $${orderTotal.toFixed(2)}.`);
        
        // If validation passes, reset form
        setOrderItems([]);
        setBagelQuantities({});
        setOrderTotal(0);
        setSelectedProduct('Initial');
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
        setDate("");
        setErrors({
            name: "",
            email: "",
            phone: "",
            date: "",
            notes: "",
            bagel: "",
            product: ""
        });
    };

    // Filter out cream cheese products for bagel selection
    const filteredProducts =  products.filter(p => !p.ProductName || !p.ProductName.includes('Cream Cheese'));
        
    // Recalculate total whenever orderItems changes
    useEffect(() => {
        let total = 0;
        orderItems.forEach(item => {
            if (item.orderType === 'Box') total += 63.50;
            else if (item.orderType === 'Sleeve') total += 14.00;
            else if (item.orderType && item.orderType.includes('Cream Cheese')) total += 8.75;
        });
        setOrderTotal(total);
    }, [orderItems, products]);

    // Update bagelQuantities for the current active item whenever itemQuantities change
    useEffect(() => {
        const bagelItems = orderItems.filter(item => item.orderType === 'Box' || item.orderType === 'Sleeve');
        if (bagelItems.length > 0) {
            const currentItemId = bagelItems[bagelItems.length - 1].id;
            const currentItemQtys = itemQuantities[currentItemId];
            const totalBagels = Object.values(currentItemQtys).reduce((sum, qty) => sum + (Number(qty) || 0), 0);
            setBagelQuantities(prev => ({ ...prev, [currentItemId]: totalBagels }));
        }
    }, [itemQuantities, orderItems]);
    

    // Functions to increase quantity for a specific item
    const increase = (productId, itemId, maxItems) => {
        setItemQuantities(prev => {
            // get current quantities for the given itemId
            const itemQtys = prev[itemId] || {};
            const current = itemQtys[productId] || 0;
            const total = Object.values(itemQtys).reduce((s, v) => s + (Number(v) || 0), 0);
            // Check if adding one more exceeds limits
            if (current >= 5 || total >= maxItems)
                return prev;
            return { ...prev, [itemId]: { ...itemQtys, [productId]: current + 1 } };
        });
    };

    // Function to decrease quantity for a specific item
    const decrease = (productId, itemId) => {
        setItemQuantities(prev => {
            // get current quantities for the given itemId
            const itemQtys = prev[itemId] || {};
            const current = itemQtys[productId] || 0;
            // Check if current quantity is already zero
            if (current <= 0)
                return prev;
            return { ...prev, [itemId]: { ...itemQtys, [productId]: current - 1 } };
        });
    };

    // Handle cream cheese selection changes for Box orders
    const handleCreamCheeseChange = (itemId, index, value) => {
        setCreamCheeseSelections(prev => {
            // get current selections for the given itemId
            const current = Array.isArray(prev[itemId]) ? prev[itemId].slice() : ['Initial', 'Initial', 'Initial'];
            // update the selection at the given index
            current[index] = value;
            return { ...prev, [itemId]: current };
        });
    };

    return (
        <BodyContainer>
             <FormBody>
                 <BooyahLogo src="Booyah Assets\Logo Horizontal\Bi-Color\Web\BooyahBagels-Logo-Horizontal-Windbreaker and pretty in pink.png" alt="Booyah Logo"/>
                 <h2>Thanks for pre-ordering our bagels! A few things to note:</h2>
                 <List>
                     <ListItems>We require a minimum 3 days' notice for all pre-orders. Pre-orders are for pick up only (no delivery option available).</ListItems>
                     <ListItems>Pre-orders can be picked up during store hours after 8:00 AM on weekdays and after 10:00 AM on weekends. We are closed Tuesdays.</ListItems>
                     <ListItems>Please note we do have a maximum number of bagels we can allocate to pre-orders per day. If required, we will contact you to go over details and availability before the order is complete.</ListItems>
                     <ListItems>If you need to cancel an order, it must be done prior to 2:00 PM the day before pick up. All orders cancelled after the cut off will not be refunded</ListItems>
                 </List>
                 <Headers>Your info</Headers>
                 <form>
                      <Input
                          type="text"
                          name="name"
                          id="name"
                          value={Name}
                          onChange={(e) => setName(e.target.value) }
                          placeholder="Name"
                          required
                      />
                      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                      <br/>
                      <Input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value) }
                          placeholder="Email"
                          required
                      />
                      {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                      <br/>
                      <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value) }
                          placeholder="Phone"
                          required
                      />
                      {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                      <br/>
                      <TextArea
                          type="text"
                          name="notes"
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder='Notes'
                          required
                      />
                      {errors.notes && <div style={{ color: 'red' }}>{errors.notes}</div>}
                      <br/>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder='Date'
                        required
                      />
                      {errors.date && <div style={{ color: 'red' }}>{errors.date}</div>}
                      <br/>
                      <Headers>Your order</Headers>
                      <Selector 
                        id="productSelect"
                        value={selectedProduct}
                        onChange={(e) => {
                            const val = e.target.value;
                            // Add new order item based on selection
                            if (val !== 'Initial') {
                                const id = Date.now().toString()+Math.random().toString(36);
                                setOrderItems(prev => [...prev, { id, orderType: val }]);
                                // Initialize cream cheese state for Box orders
                                if (val === 'Box') {
                                    setCreamCheeseSelections(prev => ({...prev, [id]: ['Initial', 'Initial', 'Initial']}));
                                }
                                // Initialize empty quantities for the new item
                                if (val === 'Box' || val === 'Sleeve') {
                                    setItemQuantities(prev => ({ ...prev, [id]: {} }));
                                }
                                setSelectedProduct('Initial');
                            }
                        }}
                    >
                        <option value="Initial">Add a product</option>
                        <option value="Box">Box of bagels</option>
                        <option value="Sleeve">Sleeve of bagels</option>
                        {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                            <option key={product._id} value={product.ProductName}>{product.ProductName}</option>
                          ))}
                    </Selector>
                        {/* displays new order item when selection changes */}
                        {orderItems.length > 0 && orderItems.map(item => {
                        // determine max items based on order type
                        const maxItems = item.orderType === 'Box' ? 15 : item.orderType === 'Sleeve' ? 5 : 0;
                        // Render appropriate form component based on order type
                        if (item.orderType === 'Box' || item.orderType === 'Sleeve') {
                            return (
                                // item for box or sleeve order
                                <Item key={item.id} >
                                    <strong>{item.orderType} of Bagels</strong>
                                    <span> - ${item.orderType === 'Box' ? '63.50' : item.orderType === 'Sleeve' ? '14.00' : ''}</span>
                                    <p>A total of {maxItems} bagels, and no more than 5 per flavour.</p>
                                    {/* display list of bagels and buttons */}
                                    {filteredProducts && filteredProducts.length > 0 ? (
                                        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                            {filteredProducts.map((product) => (
                                                <li key={product._id}>
                                                    <b><span >{(itemQuantities[item.id] && itemQuantities[item.id][product._id]) || 0} </span> {product.ProductName}</b>
                                                    <button type="button" onClick={() => decrease(product._id, item.id)} >-</button>
                                                    <button type="button" onClick={() => increase(product._id, item.id, maxItems)} >+</button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No products available</p>
                                    )}
                                    {/* Cream cheese selection for box orders */}
                                    {item.orderType === 'Box' ? (
                                            <Selector
                                                value={(creamCheeseSelections[item.id] && creamCheeseSelections[item.id][0]) || 'Initial'}
                                                onChange={(e) => handleCreamCheeseChange(item.id, 0, e.target.value)}
                                            >
                                                <option value="Initial">Add a cream cheese</option>
                                                {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                                                    <option key={product._id} value={product.ProductName}>{product.ProductName}</option>
                                                ))}
                                            </Selector>
                                    ): null}
                                    {item.orderType === 'Box' ? (
                                            <Selector
                                                value={(creamCheeseSelections[item.id] && creamCheeseSelections[item.id][1]) || 'Initial'}
                                                onChange={(e) => handleCreamCheeseChange(item.id, 1, e.target.value)}
                                            >
                                                <option value="Initial">Add a cream cheese</option>
                                                {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                                                    <option key={product._id} value={product.ProductName}>{product.ProductName}</option>
                                                ))}
                                            </Selector>
                                    ): null}
                                    {item.orderType === 'Box' ? (
                                            <Selector
                                                value={(creamCheeseSelections[item.id] && creamCheeseSelections[item.id][2]) || 'Initial'}
                                                onChange={(e) => handleCreamCheeseChange(item.id, 2, e.target.value)}
                                            >
                                                <option value="Initial">Add a cream cheese</option>
                                                {products.filter(product => product.ProductName.includes('Cream Cheese')).map((product) => (
                                                    <option key={product._id} value={product.ProductName}>{product.ProductName}</option>
                                                ))}
                                            </Selector>
                                    ): null}
                                    <div>   
                                        <button type="button" onClick={() => setOrderItems(prev => prev.filter(x => x.id !== item.id))}>Remove Item</button>
                                    </div>
                                </Item>
                            );
                        } else if (item.orderType.includes('Cream Cheese')) {
                            const creamCheese = products.find(p => p.ProductName === item.orderType);
                            return (
                                // item for cream cheese order
                                <Item key={item.id} >
                                    <span><strong>{creamCheese ? creamCheese.ProductName : 'Cream Cheese'}</strong> - $8.75</span>
                                    <div>   
                                        <button type="button" onClick={() => setOrderItems(prev => prev.filter(x => x.id !== item.id))}>Remove Item</button>
                                    </div>
                                </Item>
                            );
                        }
                    return null;
                })}
                {errors.product && <div style={{ color: 'red' }}>{errors.product}</div>}
                {errors.bagel && <div style={{ color: 'red' }}>{errors.bagel}</div>}
                <span>Total: ${orderTotal}</span>
                <br/>
                <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>
            </form>
        </FormBody>
    </BodyContainer>
  );
}
export default PreorderForm;