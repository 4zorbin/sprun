

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-css-only";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      email: "",
      errors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    var errors = [];

    //firstname
    if (this.state.firstname === "") {
      errors.push("firstname");
    }

    //email
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.email).toLowerCase());

    if (!validEmail) {
      errors.push("email");
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
      alert("everything good. submit form!");
    }
  }

  render() {
    return (
      // <div className = "wrapper" >
      //   <div className = "leftbar">
      //     <p>sdflkjadlfaj</p>
        // </div>
      <form className="row">
        <div className="col-md-3">
          <label htmlFor="firstname">First Name</label>
          <input
            autoComplete="off"
            className={
              this.hasError("firstname")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleInputChange}
          />
          <div
            className={
              this.hasError("firstname") ? "inline-errormsg" : "hidden"
            }
          >
            Please enter a value
          </div>
        </div>

        <div className="col-md-3">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            className={
              this.hasError("email")
                ? "form-control is-invalid"
                : "form-control"
            }
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <div
            className={this.hasError("email") ? "inline-errormsg" : "hidden"}
          >
            Email is invalid or missing
          </div>
        </div>

        <div className="col-lg-0  padd-top">
          <button className="btn btn-success" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      // </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
