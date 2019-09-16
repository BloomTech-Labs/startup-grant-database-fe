import React from 'react';
import GrantList from './GrantList';
import Filters from './Filters';

const Home = () => {
    return (
        <div>
            <GrantList />
            {/* Grant Showcase component*/}
            <Filters />
            
        </div>
    );
};

export default Home;