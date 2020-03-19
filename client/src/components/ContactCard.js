import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    const contact = this.props.contact;

    return (
      <div className="contact-card">
        <h3>{contact.name}</h3>
        <section className="general-info">
          <div>
            <span className="title">Age: </span>
            <span className="value">{contact.age}</span>
          </div>
          <div>
            <span className="title">Gender: </span>
            <span className="value">{contact.gender}</span>
          </div>
          <div>
            <span className="title">Eye color: </span>
            <span className="value">{contact.eyeColor}</span>
          </div>
        </section>
        <hr className="separator" />
        <section className="contact-info">
          <div>
            <span className="title">Company: </span>
            <span className="value">{contact.company}</span>
          </div>
          <div>
            <span className="title">Email: </span>
            <span className="value">{contact.email}</span>
          </div>
          <div>
            <span className="title">Phone: </span>
            <span className="value">{contact.phone}</span>
          </div>
          <div>
            <span className="title">Address: </span>
            <span className="value">{contact.address}</span>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactCard;
