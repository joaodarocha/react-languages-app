import React from 'react';
import AppHeader from './appHeader.jsx';
import MenuBar from './menuBar.jsx';

const HomePage = () => (
    <div>
        <MenuBar />
        <AppHeader
            icon="comments"
            title="React App"
            subtitle="Powered by <Academia de Código_> @ EY Portugal"
        />
    </div>
);

export default HomePage;
