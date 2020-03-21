import React, { Component } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import axios from "axios";

export default class App extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    search: "",
    isTyping: false,
    timer: null
  };

  componentDidMount = () => {
    axios
      .get("/api/contacts")
      .then(result => {
        this.setState({
          contacts: result.data,
          filteredContacts: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    // filter only 2 seconds AFTER user has finished typing
    // every new input will reset the timer
    clearTimeout(this.state.timer);

    let value = event.target.value;

    this.setState({
      isTyping: true,
      search: value,
      timer: setTimeout(() => {
        this.setState({ isTyping: false });
        this.filterContacts(value);
      }, 2000)
    });
  };

  filterContacts = value => {
    if (this.state.isTyping) {
      return;
    }
    let searchStr = value.toLowerCase();
    let filtered = this.state.contacts.filter(contact => {
      return contact.name?.toLowerCase().includes(searchStr);
    });
    this.setState({
      filteredContacts: filtered
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
        {this.state.filteredContacts &&
          this.state.filteredContacts.map(contact => {
            return <ContactCard contact={contact} key={contact._id} />;
          })}
      </div>
    );
  }
}
