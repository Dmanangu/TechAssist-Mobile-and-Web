import React from "react";
import "./adminlogin.css";

export class AdminLogin extends React.Component {
  render() {
    return (
      <div className="base-container">
        <div className="admin_login">
          <label htmlFor="username">USERNAME:</label>
          <input
            type="text"
            required
            className="admin_input"
            placeholder="admin"
          />
        </div>
        <div className="admin_pass">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            required
            className="admin_password"
            placeholder="password"
          />
        </div>
        <div className="admin_footer">
          <button type="button" className="admin-btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
