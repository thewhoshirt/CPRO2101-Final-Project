import React, { useState } from 'react';
function ContactForm(){
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
      </form>
    </div>
  );
}
export default ContactForm;