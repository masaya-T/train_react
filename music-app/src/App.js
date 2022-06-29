import logo from './logo.svg';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';
import './index.css';

function Player(props) {
  return (
    <AudioPlayer
      autoPlay
      src={props.value}
      onPlay={e => console.log("onPlay")}
    // other props here
    />
  );
}


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Hello World
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer>
          <Player
            value={"path"}
          />
        </footer>
      </div>
    );
  }
}

export default App;
