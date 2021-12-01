import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Clients, Worker, Payments, Support } from "./pages/export-pages";
import { AdminLogin } from "./component/export-component";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Worker" element={<Worker />} />
            <Route path="/Payments" element={<Payments />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/AdminLogin" element={AdminLogin} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
