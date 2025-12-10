import React, { useState } from "react"
// importing style components to use on the contact page
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


const Contact = () => {
    // setting the constant and their setter methods. then using useState to initially set them as " "
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const [moreNotes, setMoreNotes] = useState("");

    const [errors, setErrors] = useState({ firstName: "",lastName:"", email: "", phone: "", notes: "", moreNotes:"" });
    const [Contact, setContact] = useState([]);
    // setting the location marker for the map with latitude and longitude to show the location of the shop 
    const [markerLocation] = useState({
            lat:52.264775,
            lng:-113.825777
        });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // setting isValid to true, and formErrors as "". This way once the page loads the validation will read true until the user presses the submit button. It will then run the form validation checking errors or empty fields. 
        let formErrors = { firstName: "",lastName:"", email: "", phone: "", notes: "", moreNotes:"" };
        let isValid = true;
        
        // validation for name, email, phone and note fields: if empty, or if they so not follow the format an error message will show
        if (FirstName.trim() === "") {
            formErrors.firstName = "First name is required.";
            isValid = false;
        }
        if (LastName.trim() === "") {
            formErrors.lastName = "Last name is required.";
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
        if (notes.trim() === "") {
            formErrors.notes = "Notes are required.";
            isValid = false;
        }
        if (moreNotes.trim() === "") {
            formErrors.moreNotes = "More Notes are required.";
            isValid = false;
        }
        // if there are no errors the form submits, if not the isValid property is set to false and any of the fields that have errors display an error message 

        if (!isValid) {
            setErrors(formErrors);
            return;
        }

  try {
            const res = await fetch('http://localhost:5000/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: FirstName,
                    lastName: LastName,
                    email,
                    phone,
                    notes,
                    additionalNote: moreNotes
                })
            });
            if (!res.ok) throw new Error('Failed to submit contact');
            const saved = await res.json();
            // optional: keep a local copy of submissions
            setContact(prev => [saved, ...prev]);
            alert(`Thank you for contacting us, ${FirstName}!`);
            // reset fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setNotes("");
            setMoreNotes("");
            setErrors({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                notes: "",
                moreNotes: ""
            });
        } catch (err) {
            console.error('Submit error', err);
            alert('There was a problem submitting your message. Please try again later.');
        }
    };  

     return(
        // this returns the contact page layout with the form, map, social links and other formatting elements 
        <BodyContainer>
            <Heading>
                <BooyahGraphic1 src="Booyah Assets/Graphics/Squiggle11_Windbreaker.png" alt="Squiggle"/>
                <BooyahLogo src="Booyah Assets/Logo Horizontal/Bi-Color/Web/BooyahBagels-Logo-Horizontal-Windbreaker and pretty in pink.png" alt="Booyah Logo"/>
                <BooyahGraphic2 src="Booyah Assets/Graphics/Squiggle02_Sunshine.png" alt="Squiggle"/>
            </Heading>
            <FormBody>
            <br />
            <h1>Contact</h1>
            <br />
            
                {/* contact form   */}
                <form onSubmit={handleSubmit}>
                    {/* Each input follows similar logic, sets type, name, id, value and place holder text to the correct variable. on change the getter method takes the input value and changes the constant that is set at the beginning of the file. */}
                     <Input
                         type="text"
                         name="firstName"
                         id="firstName"
                         value={FirstName}
                         onChange={(e) => setFirstName(e.target.value) }
                         placeholder="First Name"
                         required
                     />
                     {/* if there are any errors this will display the error message under the corresponding field */}
                     {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                     <br/>
                     {/* Each input follows similar logic, sets type, name, id, value and place holder text to the correct variable. on change the getter method takes the input value and changes the constant that is set at the beginning of the file. */}
                     <Input
                         type="text"
                         name="lastName"
                         id="lastName"
                         value={LastName}
                         onChange={(e) => setLastName(e.target.value) }
                         placeholder="Last Name"
                         required
                     />
                     {/* if there are any errors this will display the error message under the corresponding field */}
                     {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
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
                     <TextArea
                         type="text"
                         name="moreNotes"
                         id="moreNotes"
                         value={moreNotes}
                         onChange={(e) => setMoreNotes(e.target.value)}
                         placeholder='More notes'
                         required
                     />
                     {errors.moreNotes && <div style={{ color: 'red' }}>{errors.moreNotes}</div>}
                     <br/>
                     {/* submits the responses from the user */}
                     <button type="submit">Submit</button>
                     <br />
                     <br />
                </form>
            </FormBody>
            <Info>
                <InfoHours>
                    <HourHeaderMain>
                        <h2>HOURS</h2>
                    </HourHeaderMain>
                    <HourHeaderSec>
                        <h3 className="accentHeader">UNLESS SOLD OUT</h3>
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
                    {/* displays the email along with Booyah's social media links  */}
                    <a href="mailto:HELLO@BOOYAHBAGELS.CA"><p>HELLO@BOOYAHBAGELS.CA</p></a>
                    <a href="https://www.facebook.com/people/Booyah-Bagels/100091819339135/"><SocialLogos src='/Facebook.avif' alt="facebook Logo"/></a>
                     <a href="https://www.instagram.com/booyahbagels/"><SocialLogos src='/Instagram.avif' alt="instagram Logo"/></a>
                     <a href="https://www.tiktok.com/@booyahbagels"><SocialLogos src='/TikTok.avif' alt="tiktok Logo"/></a>
                </InfoHours>
                <InfoLoc>
                    <Address>#180 - 5441 45 ST | RED DEER, AB | T4N 1L2</Address>
                    {/* displaying the map api */}
                    <MapContainer>
                        {/* gets the api key anf allows the map to be displayed */}
                        <APIProvider apiKey={process.env.REACT_APP_Google_Api}>
                            <Map
                                // gives the map a border
                                style={{ borderRadius: "20px" }}
                                // sets the zoom on the map                            
                                defaultZoom={19}
                                // makes the center the lat & lgn that was set at the beginning of the document 
                                defaultCenter={markerLocation}
                                // this property is defines how the user can interact with the map. 
                                gestureHandling={"greedy"}
                            >
                            <Marker 
                            // sets the marker location on map and if the user hovers over the business name appears 
                            position={markerLocation}
                            title={"Booyah Bagels"}
                            />
                            </Map>
                        </APIProvider>
                    </MapContainer>
                </InfoLoc>
            </Info>
        </BodyContainer>
    )
}
export default Contact;