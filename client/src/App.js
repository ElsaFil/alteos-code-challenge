import React, { Component } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import axios from "axios";

export default class App extends Component {
  state = {
    contacts: [],
    search: ""
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Contacts</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>
        </header>
        {this.state.contacts &&
          this.state.contacts.map(contact => {
            return <ContactCard contact={contact} key={contact._id} />;
          })}
      </div>
    );
  }
}
