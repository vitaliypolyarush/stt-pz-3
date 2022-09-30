import './App.css';
import {getListOfRestEndPoint} from './api/anapioficeandfire'
import {useState, useEffect} from "react";

function App() {
    const [list, setList] = useState({});
    useEffect(() => {
        getListOfRestEndPoint().then(data => {
            setList(data.entity);
        })
    });
    return (
        <div className="app">
            <section className="app-main">
                <h1>
                    <a
                        className="app-link"
                        href="https://www.anapioficeandfire.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn An API of Ice And Fire
                    </a>
                </h1>
                <ul className="app-list">
                    {Object.keys(list).map(key =>
                        <li className="app-list-item" key={key}><b>{key}</b>:
                            <a className="app-link"
                               href="{item[key]}"
                               target="_blank"
                               rel="noopener noreferrer"
                            > {list[key]}</a>
                        </li>)}
                </ul>
            </section>
        </div>
    );
}

export default App;
