import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from "react-router-dom";
import Welcome from "./Welcome";

describe('Welcome.jsx', () => {
    it('Renders without crashing', () => {
        const wrapper = render(<Router><Welcome/></Router>);
        const welcome = wrapper.getByText(/founder grants/i);
        expect(welcome).toBeInTheDocument;
    })
});
