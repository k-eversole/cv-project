import React from "react";

class GeneralInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      email: '',
      isEditable: false
    };
  }

  toggleEdit = () => {
    const prevState = this.state.isEditable
      this.setState({
        isEditable:!prevState
      })
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleStateChange = (e) => {
    this.setState({
      state: e.target.value
    })
  }

  handleZipcodeChange = (e) => {
    this.setState({
      zipcode: e.target.value
    })
  }

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    const { firstName, lastName, address, city, state, zipcode, phone, email, isEditable } = this.state;

    if (!isEditable) {
      return (
        <div className="Component">
          <div>Name: { firstName } { lastName }</div>
          <div>Address: { address }, { city }, {state} { zipcode }</div>
          <div>Phone: { phone }</div>
          <div>Email: { email }</div>

          <button onClick={ this.toggleEdit }>Edit</button>
        </div>
      )
    }

    else return (
      <div className="Component">
        <header className="Sub-header">
            General Information
        </header>
        <form>
          <label>
            First Name:
            <input
              id="firstName"
              type="text"
              placeholder="Charlie"
              value={ firstName }
              onChange={ this.handleFirstNameChange }
              />
          </label>

          <label>
            Last Name:
            <input
              id="lastName"
              type="text"
              placeholder="Chaplin"
              value={ lastName }
              onChange={ this.handleLastNameChange }
              />
          </label>

          <label>
            Address:
            <input
              id="address"
              type="text"
              placeholder="6147 Temple Hill Dr"
              value= { address }
              onChange={ this.handleAddressChange}
              />
          </label>

          <label>
            City:
            <input
              id="city"
              type="text"
              placeholder="Los Angeles"
              value= { city }
              onChange={ this.handleCityChange }
              />
          </label>

          <label>
            State:
            <input
              id="state"
              type="text"
              placeholder="CA"
              value= { state }
              onChange={ this.handleStateChange }
              />
          </label>

          <label>
            Zip Code:
            <input
              id="zipCode"
              type="number"
              placeholder="90068"
              value= { zipcode }
              onChange={ this.handleZipcodeChange }
              />
          </label>

          <label>
            Phone Number:
            <input
              id="phoneNumber"
              type="number"
              placeholder="020-416-1889"
              value= { phone }
              onChange={ this.handlePhoneChange }
              />
          </label>

          <label>
            Email:
            <input
              id="email"
              type="email"
              placeholder="cchaplin@citylights.com"
              value={ email }
              onChange={ this.handleEmailChange }
              />
          </label>

          <button onClick={ this.toggleEdit }>Submit</button>
        </form>
      </div>
    );
  }
}
export default GeneralInfo;