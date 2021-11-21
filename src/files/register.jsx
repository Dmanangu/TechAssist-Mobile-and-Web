import React from "react";
import logoImg from "./Pictures/logo.PNG";
import Input from 'react-phone-input-2';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render (){
    return <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={logoImg}/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <input type="tel" id="phone" placeholder="+63" country={'ph'}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password"/>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">Register</button>
      </div>
    </div>
  }
}