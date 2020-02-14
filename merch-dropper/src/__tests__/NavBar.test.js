import React from 'react';
import NavBar from '../components/NavBar';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";


describe('<NavBar />', () => {
    it('renders without errors', () => {
        render(
        <Router>
            <NavBar />
        </Router>
        );
    });
});