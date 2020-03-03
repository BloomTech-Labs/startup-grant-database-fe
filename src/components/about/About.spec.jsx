import React from 'react';
import {render} from '@testing-library/react';
import About from './About';

describe('About.jsx', () => {
    it('renders without crashing', () => {
        const wrapper = render(<About/>);
        const lambda = wrapper.getAllByText(/lambda/i);
        expect(lambda).toBeInTheDocument
    })
});
