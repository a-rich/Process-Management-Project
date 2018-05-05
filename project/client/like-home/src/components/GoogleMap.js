import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => (
    <div style={{
      position: 'relative', color: 'white', background: 'red',
      height: 40, width: 60, top: -20, left: -30,    
    }}>
      {text}
    </div>
  );

  class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          lat: null,
          lng: null,
        }
      }

    static defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };

    componentWillMount() {
        this.setState({ lat: window.store.getState().selectedHotel.selectedHotel.h.coordinates.latitude, 
            lng: window.store.getState().selectedHotel.selectedHotel.h.coordinates.longitude});
      }
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAhKIWtI4AG_BvzKo9MkIuVx6Iz5tM6e40"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      );
    }
  }

export default GoogleMap;