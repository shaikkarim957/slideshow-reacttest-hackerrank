import "./App.css";
import logo from "./logo.svg";

import Slides from "./components/Slides";

const App = ({ slides }) => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Slideshow App
            </header>
            <div className="App">
                <Slides slides={slides} />
            </div>
        </div>
    );
};

export default App;
