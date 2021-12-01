import React from "react";
import { Navigation } from "../../component/export-component";
import "./support.component.css";

export class Support extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <Navigation />
        <div className="supportbody-container">
          <h2 className="supportword">TechAssist</h2>
          <div className="support-container">
            <h1 className="settings-word">SETTINGS</h1>
            <h1>_________________________________________</h1>
            <button type="button" className="accsett-btn">
              ACCOUNT SETTINGS
            </button>
            <div>
              <button type="button" className="delete-btn">
                DELETE
              </button>
            </div>
            <div>
              <button type="button" className="update-btn">
                UPDATE
              </button>
            </div>
            <button type="button" className="logout-btn">
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Support;
