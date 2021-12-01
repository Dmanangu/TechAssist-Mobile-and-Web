import React from "react";
import { Navigation } from "../../component/export-component";
import "./payment.component.css";
export class Payments extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <Navigation />
        <div className="body-container">
          <h2 className="word">TechAssist</h2>
          <div className="payment-container">
            <button type="button" className="history-btn">
              PAYMENT
              <br></br>
              HISTORY
            </button>
            <div>
              <button type="button" className="withdrawal-btn">
                REQUEST
                <br></br>
                WITHDRAWAL
              </button>
            </div>
            <button type="button" className="cpay-btn">
              CLIENT'S
              <br></br>
              PAYMENT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Payments;
