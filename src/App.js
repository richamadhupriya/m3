import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      email: '',
      mobile: '',
      address: '',
      purpose: '',
      date: ''
    } // initialization of the value of the form variables
  }

  //State after a user clicks the Log in button
  login = (event) => {
    event.preventDefault();
    this.setState({ isLoggedIn: true })
  }

  //State after a user clicks the Delete button
  delete = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: false,
      username: '',
      password: '',
      email: '',
      mobile: '',
      address: '',
      purpose: '',
      date: ''
    })
  }

  // Changing the value of all the variables after the user clicks Log in button.The changed value is displayed on the click of the button.
  setUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  setMobile = (event) => {
    this.setState({ mobile: event.target.value })
  }

  setAddress = (event) => {
    this.setState({ address: event.target.value })
  }

  setPurpose = (event) => {
    this.setState({ purpose: event.target.value })
  }

  setDate = (event) => {
    this.setState({ date: event.target.value })
  }

  //Rendering the information on a html web page
  render() {
    return (

      <div className='formApp'>

        <h2>MAGIC HOUSE INC.</h2>
        { 
          //When the user has not logged in, it displays the registration form
          (!this.state.isLoggedIn ? (
            <div className="LoggedOut" class="form">
              <h4>Customer Registration Form</h4>
              <form onSubmit={this.login}>
                <table class="table table-hover">
                  <tr>
                    <td><input type='text' class="form-control" placeholder='Username' value={this.state.username} onChange={this.setUsername} required /></td>
                  </tr>

                  <tr>
                    <td><input type='email' class="form-control" placeholder='Email Id' value={this.state.email} onChange={this.setEmail} required /></td>
                  </tr>

                  <tr>
                    <td><input type='text' class="form-control" placeholder='Mobile Number' value={this.state.mobile} onChange={this.setMobile} pattern="[0-9]{10}" required /></td>
                  </tr>

                  <tr>
                    <td><input type='text' class="form-control" placeholder='Address' value={this.state.address} onChange={this.setAddress} required /></td>
                  </tr>

                  <tr>
                    <td><select class="form-control" value={this.state.purpose} onChange={this.setPurpose} required >
                      <option>Purpose of Visit</option>
                      <option>Looking for 4 BHK home</option>
                      <option>Looking for 3 BHK home</option>
                      <option>Looking for 2 BHK home</option>
                      <option>Looking for 1 BHK home</option>
                      <option>Looking for studio apartment</option>
                    </select>
                    </td>
                  </tr>

                  <tr>
                    <td><input type='date' class="form-control" placeholder='Date of Visit' value={this.state.date} onChange={this.setDate} required /></td>
                  </tr>

                  <tr>
                    <center><input class="btn btn-success form-control" type='submit' value='Log in' /></center>
                  </tr>

                </table>
              </form>
            </div>
          )
            :
            ( 
              //After the user clicks the Log in button, the data is displayed
              <div className="LoggedIn">
                <h4>Customers Visit Information</h4>
                <table class="table">
                  <tr>
                    <td><strong>Name: {this.state.username}</strong></td>
                  </tr>

                  <tr>
                    <td><strong>Email id: {this.state.email}</strong></td>
                  </tr>

                  <tr>
                    <td><strong>Mobile Number: {this.state.mobile}</strong></td>
                  </tr>

                  <tr>
                    <td><strong>Address: {this.state.address}</strong></td>
                  </tr>

                  <tr>
                    <td><strong>Description: {this.state.purpose}</strong></td>
                  </tr>

                  <tr>
                    <td><strong>Date of Visit: {this.state.date}</strong></td>
                  </tr>

                  <tr>
                    <td><center><button onClick={this.delete} class="btn btn-success">Delete</button></center></td>
                  </tr>
                </table>


              </div>
            ))}
      </div>
    );
  }
}

export default App;
