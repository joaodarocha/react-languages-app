import React from 'react';
import AppHeader from './components/appHeader.jsx';
import ButtonContainer from './components/buttonContainer.jsx';
import './App.css';
/* 
class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader>Languages App</AppHeader>
                <ButtonContainer />
            </div>
        );
    }
} */

const App = () => (
    <div className="App">
        <AppHeader>Languages App</AppHeader>
        <ButtonContainer />
    </div>
);

export default App;
