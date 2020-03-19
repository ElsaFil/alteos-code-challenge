import React, { Component } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import axios from "axios";

export default class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount = () => {
    axios
      .get("/api/contacts")
      .then(result => {
        this.setState({
          contacts: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Contacts</p>
        </header>
        {this.state.contacts &&
          this.state.contacts.map(contact => {
            return <ContactCard contact={contact} key={contact._id} />;
          })}
      </div>
    );
  }
}
