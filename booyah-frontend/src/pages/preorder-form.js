import React, { useState } from 'react';
import {
    BodyContainer,
    FormBody,
    Input,
    TextArea,
    BooyahLogo,
    List,
    ListItems,
    Headers
} from "../styles/PreorderElements";
function PreorderForm(){
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", date: "", notes: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: "", email: "", phone: "", date: "", notes: "" };
        let isValid = true;

        if (Name.trim() === "") {
            formErrors.name = "Name is required.";
            isValid = false;
        }
        if (email.trim() === "") {
            formErrors.email = "Email is required.";
            isValid = false;
        }
        if (phone.trim() === "") {
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

        if (!isValid) {
            setErrors(formErrors);
            return;
        }

        console.log(Name, email, phone,date, notes);
        
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
            notes: ""
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
                      <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>
                    </form>
                </FormBody>
             </BodyContainer>
  );
}
export default PreorderForm;