import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    const contact = this.props.contact;

    return (
      <div className="contact-card">
        <h4>{contact.name}</h4>
      </div>
    );
  }
}

export default ContactCard;
