import React, { useState } from 'react';
function PreorderForm(){
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            Name,
            email,
            phone,
            date,
            notes
        );
    };
    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setNotes("");
    };
    return (
        <div>
            <img src="..\..\public\Booyah Assets\Logo Horizontal\Bi-Color\Web\BooyahBagels-Logo-Horizontal-Windbreaker and pretty in pink.png" alt="Booyah Logo"/>
            <h2>Thanks for pre-ordering our bagels! A few things to note:</h2>
            <ul>
                <li> We require a minimum 3 days' notice for all pre-orders. Pre-orders are for pick up only (no delivery option available).</li>
                <li>Pre-orders can be picked up during store hours after 8:00 AM on weekdays and after 10:00 AM on weekends. We are closed Tuesdays.</li>
                <li>Please note we do have a maximum number of bagels we can allocate to pre-orders per day. If required, we will contact you to go over details and availability before the order is complete.</li>
                <li>If you need to cancel an order, it must be done prior to 2:00 PM the day before pick up. All orders cancelled after the cut off will not be refunded</li>
            </ul>
            <form>
                <label for="name">Name* </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={Name}
                    onChange={(e) => setName(e.target.value) }
                    placeholder="Name"
                    required
                />
                <label for="email">Email* </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                    placeholder="Email"
                    required
                />
                <label for="phone">Phone*</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value) }
                    placeholder="Phone"
                    required
                />
                <label for="date">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder='Date'
                    required
                />
                <label for="notes">Notes</label>
                <textarea
                    type="text"
                    name="notes"
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder='Notes'
                    required
                />
                <button type="reset" value="reset" onClick={() => handleReset()} > Reset </button>
                <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>
            </form>
        </div>
  );
}
export default PreorderForm;