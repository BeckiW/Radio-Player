import React from 'react';
import StationList from "./station";




  class App extends React.Component {
    render() {
      return (
        <div className="app">
          <header>
            <h1>Sverige Radio Stations</h1>
          </header>
          <StationList />
        </div>
      );
    }
  }

export default App
