/**
 * ************************************
 *
 * @module  App.jsx
 * @author Timothy Mai
 * @date 9/21/19
 * @description the main body of the app
 *
 * ************************************
 */

import React, { Component } from 'react';
import MapContainer from './components/map.jsx';
// import GoogleApiWrapper from './components/map.jsx';
import Header from './Header';
import Nav from './Nav';
import Map from './Map';

// IMPORT CHILD COMPONENTS HERE

class App extends Component {
  constructor(props) {
    super(props);

    // state components
    this.state = {
      // ADD STATE COMPONENTS HERE
      position: {}
    };

    // binding functions to our object here
    this.changePosition = this.changePosition.bind(this);
  }

  componentDidMount() {
    // check if we need this
  }

  componentWillUnmount() {
    // check if we need this
  }

  // add class methods here
  changePosition(position) {
    this.setState(prev => ({
      ...prev,
      position
    }));
    console.log(position);
  };

  render() {
    // do stuff then return the app

    return (
      <div>
        <Header />
        {/* add things inside this div */}
        <div id="mapContainer">
          <Map changePosition={this.changePosition} />
        </div>

        <Nav position={this.state.position} />
      </div>
    );
  }

}

export default App;
