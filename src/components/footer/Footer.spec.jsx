import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './Footer';

const mockStore = configureStore([]);

describe('Footer', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            admin: {
                isAdmin: false
            }
        })
    });
    it('should render without crashing', () => {
        const wrapper = render(<Provider store={store}><Router><Footer/></Router></Provider>);
        const copyRight = wrapper.getByText(/©/i);
        expect(copyRight).toBeInTheDocument
    })
});
