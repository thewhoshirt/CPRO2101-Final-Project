import React, { useState } from 'react';
function ContactForm(){
  const handleSubmit = (event) => {
    event.preventDefault();
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
        <form onSubmit={handleSubmit}>
        </form>
    </div>
  );
}
export default ContactForm;