import React from "react";

// "_id": "5dfa53840a722838d4af9e6d",
// "age": 37,
// "eyeColor": "brown",
// "name": "Moses Reid",
// "gender": "male",
// "company": "EXOZENT",
// "email": "mosesreid@exozent.com",
// "phone": "+1 (836) 526-2950",
// "address": "634 Elizabeth Place, Why, District Of Columbia, 2218"

function ContactCard() {
  const contact = this.props.contact;
  return (
    <div className="contact-card">
      <h4>{contact.name}</h4>
    </div>
  );
}

export default ContactCard;
