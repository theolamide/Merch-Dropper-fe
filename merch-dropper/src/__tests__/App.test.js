import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import App from '../App';


describe("renders without crashing", () => {
  it("renders app without errors", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
