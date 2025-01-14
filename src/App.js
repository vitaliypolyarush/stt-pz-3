import './App.css';
import { getBooks } from './api/anapioficeandfire';
import { useState, useEffect } from "react";

function App() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getBooks().then(data => {
            if (Array.isArray(data)) {
                const formattedList = data.reduce((acc, item) => {
                    acc[item.name] = item.url;
                    return acc;
                }, {});
                setList(formattedList);
            }
        });
    }, []);
    
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
                    {
                        Object.keys(list).length > 0 ?
                            (
                                Object.keys(list).map(key => (
                                    <li className="app-list-item" key={key}>
                                        <b>{key}</b>:
                                        <a
                                            className="app-link"
                                            href={list[key]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {list[key]}
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )
                    }
                </ul>
            </section>
        </div>
    );
};


export default App;