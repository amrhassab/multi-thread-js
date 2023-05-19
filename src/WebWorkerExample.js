import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function WebWorkerExample() {

    const [currentWorker, setCurrentWorker] = useState(null);

    useEffect(() => {
        let worker = new Worker(new URL("./addingWorker.js", import.meta.url));
        worker.onmessage = (e) => {
            console.log("Message received from worker", e);
          };

        setCurrentWorker(worker)

        return () => {
            if (currentWorker) {
                currentWorker.terminate();
                setCurrentWorker(null);
            }
        }
    }, [])

    const runExample = () => {
        console.log("running example")
        currentWorker.postMessage([7, 3]);
        console.log("Message posted to worker");
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>WebWorker Example</h3>
                <button onClick={runExample} type="button">Add 7 and 3 on Web Worker Thread</button>
                <br />
                <Link to="/">Back To Home</Link>

            </header>
        </div>
    );
}

export default WebWorkerExample;