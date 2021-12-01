import React from "react";
import { Link } from "react-router-dom";
import "./navigation.component.css";
export class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="menu-bars">
          <Link to="/Support">
            <button type="button" className="support-btn">
              SUPPORT
            </button>
          </Link>
          <Link to="/Payments">
            <button type="button" className="payment-btn">
              PAYMENT
            </button>
          </Link>
          <Link to="/Worker">
            <button type="button" className="worker-btn">
              WORKER
            </button>
          </Link>
          <Link to="/Clients">
            <button type="button" className="client-btn">
              CLIENTS
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;
