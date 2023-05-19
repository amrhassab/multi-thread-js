import './App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'


function IframeExample() {

    useEffect(() => {
        let iframe = document.getElementById("myiframe");
        const iframeWin = iframe.contentWindow || iframe;
        const iframeDoc = iframe.contentDocument || iframeWin.document;

        var script = iframeDoc.createElement("script");
        script.append(`
            window.onmessage = function(e) {
                console.log('Iframe: Task received', e);
                const result = e.data[0] + e.data[1];
                if (isNaN(result)) {
                  window.top.postMessage('Please write two numbers');
                } else {
                  const iframeResult = 'Result: ' + result;
                  console.log('Worker: Posting message back to main script');
                  window.top.postMessage(iframeResult);
                }
              }
        `);
        iframeDoc.documentElement.appendChild(script);

        window.onmessage = function(e) {
            console.log("Main thread received result from window", e);
        };
        
    }, [])

    const runExample = () => {
        let iframe = document.getElementById("myiframe");
        console.log("running example")
        iframe.contentWindow.postMessage([7, 3], '*');
        console.log("Message posted to Iframe");
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>Hidden Iframe Example</h3>
                <button onClick={runExample} type="button">Add 7 and 3 on Iframe Thread</button>
                <br />
                <Link to="/">Back To Home</Link>
                <iframe style={{ display: 'none' }} id="myiframe" />
            </header >


        </div>
    );
}

export default IframeExample;