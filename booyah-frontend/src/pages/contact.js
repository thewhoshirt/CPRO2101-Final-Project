import React, { useState } from "react"
import {
    BodyContainer,
    SocialLogos,
    HourHeaderMain,
    HourHeaderSec,
    Hours,
    Separator,
} from "../styles/ContactElements";
const Contact = () => {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            Name,
            email,
            phone,
            notes
        );
        alert(`Thank you for contacting us ${Name}!`)
    };
    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
    };
    return(
        <BodyContainer>
            <h1>Contact Page</h1>
            <div>
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
                     <br/>
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
                     <br/>
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
                     <br/>
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
                     <br/>
                     <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>
                     <button type="reset" value="reset" onClick={() => handleReset()} > Reset </button>
                </form>
            </div>
            <div>
                <div>
                    <HourHeaderMain>
                        <h2>HOURS</h2>
                    </HourHeaderMain>
                    <HourHeaderSec>
                        <h3>UNLESS SOLD OUT</h3>
                    </HourHeaderSec>
                    <Hours>
                         <p>MON - 7AM - 2PM</p>
                         <p>TUES - CLOSED</p>
                         <p>WED - 7AM - 2PM</p>
                         <p>THURS - 7AM - 2PM</p>
                         <p>FRI - 7AM - 2PM</p>
                         <p>SAT - 9AM - 3PM</p>
                         <p>SUN - 9AM - 3PM</p>
                    </Hours>
                    <Separator>
                        <h2>----------------------</h2>
                    </Separator>
                    <a href="mailto:HELLO@BOOYAHBAGELS.CA"><p>HELLO@BOOYAHBAGELS.CA</p></a>
                    <a href="https://www.facebook.com/people/Booyah-Bagels/100091819339135/"><SocialLogos src='/Facebook.avif' alt="facebook Logo"/></a>
                     <a href="https://www.instagram.com/booyahbagels/"><SocialLogos src='/Instagram.avif' alt="instagram Logo"/></a>
                     <a href="https://www.tiktok.com/@booyahbagels"><SocialLogos src='/TikTok.avif' alt="tiktok Logo"/></a>
                </div>
                <div>
                    <p>#180 - 5441 45 ST | RED DEER, AB | T4N 1L2</p>
                </div>
            </div>
        </BodyContainer>
    )
}
export default Contact;