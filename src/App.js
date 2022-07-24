import "./App.css";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                Slideshow App
            </header>
            <div className="App-buttons">
                <button className="btn btn-primary">Restart</button>
                <button className="btn btn-primary">Preview</button>
                <button className="btn btn-primary">Next</button>
            </div>
        </div>
    );
}

export default App;
