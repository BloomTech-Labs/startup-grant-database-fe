import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {render} from '@testing-library/react';
import FGLogo from './FGLogo';

describe('FGLogo Component', () => {
    it('Should have render Founder Grants', async () => {
        const wrapper = render(<Provider store={store}><FGLogo/></Provider>);
        const title = wrapper.getByText(/Founder Grants/i);
        expect(title).toBeInTheDocument;
    })
});
