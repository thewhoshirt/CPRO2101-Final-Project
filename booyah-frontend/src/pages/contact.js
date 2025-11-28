import React, { useState } from "react"
import {
    BodyContainer,
    SocialLogos,
    HourHeaderMain,
    HourHeaderSec,
    Hours,
    Separator,
    FormBody,
    Input,
    TextArea,
    BooyahLogo,
    Info,
    Address,
    InfoHours,
    InfoLoc,
    MapContainer,
    Heading,
    BooyahGraphic2,
    BooyahGraphic1
} from "../styles/ContactElements";
import {Map, Marker, APIProvider} from "@vis.gl/react-google-maps";

import { Form } from "react-router-dom";
import { Graphic1 } from "../styles/HomeElements";
const Contact = () => {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", notes: "" });
    const [markerLocation, setMarkerLocation] = useState({
            lat:52.264775,
            lng:-113.825777
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: "", email: "", phone: "", notes: "" };
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
        if (notes.trim() === "") {
            formErrors.notes = "Notes are required.";
            isValid = false;
        }

        if (!isValid) {
            setErrors(formErrors);
            return;
        }

        console.log(Name, email, phone, notes);
        alert(`Thank you for contacting us, ${Name}!`);
        
        setName("");
        setEmail("");
        setPhone("");
        setNotes("");
        setErrors({
            name: "",
            email: "",
            phone: "",
            notes: ""
        });
    };  
    
    const CustomMap = () =>{
        
    };
     return(
        <BodyContainer>
            <Heading>
                <BooyahGraphic1 src="Booyah Assets/Graphics/Squiggle11_Windbreaker.png" alt="Squiggle"/>
                <BooyahLogo src="Booyah Assets/Logo Horizontal/Bi-Color/Web/BooyahBagels-Logo-Horizontal-Windbreaker and pretty in pink.png" alt="Booyah Logo"/>
                <BooyahGraphic2 src="Booyah Assets/Graphics/Squiggle02_Sunshine.png" alt="Squiggle"/>
            </Heading>
            <FormBody>
            <h1>Contact</h1>
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
                     <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>
                </form>
            </FormBody>
            <Info>
                <InfoHours>
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
                </InfoHours>
                <InfoLoc>
                    <Address>#180 - 5441 45 ST | RED DEER, AB | T4N 1L2</Address>
                    <MapContainer>
                        <APIProvider apiKey={process.env.REACT_APP_Google_Api}>
                            <Map
                                style={{ borderRadius: "20px" }}
                                defaultZoom={19}
                                defaultCenter={markerLocation}
                                gestureHandling={"greedy"}
                                disableDefaultUI
                            >
                            <Marker position={markerLocation} />

                            </Map>
                        </APIProvider>
                    </MapContainer>
                </InfoLoc>
            </Info>
        </BodyContainer>
    )
}
export default Contact;