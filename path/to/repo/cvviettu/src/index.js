import React from 'react';
import reactDom from 'react-dom';
// import './styles/style.scss'
import Home from './components/Home';

const App = () => {
    return (
        <Home />
    );
}

reactDom.render(<App />, document.getElementById('root'));