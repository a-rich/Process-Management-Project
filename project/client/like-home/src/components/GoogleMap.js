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
          lat: window.store.getState().selectedHotel.h,
          lng: window.store.getState().selectedHotel.h,
          name: window.store.getState().selectedHotel.h.name
        }
      }

    static defaultProps = {
      center: {
        lat: null,
        lng: null
      },
      zoom: 15
    };

    componentWillMount() {
        this.setState({ lat: window.store.getState().selectedHotel.h.coordinates.latitude,
            lng: window.store.getState().selectedHotel.h.coordinates.longitude,
            name: window.store.getState().selectedHotel.h.name
          });

      }

    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '500px'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAhKIWtI4AG_BvzKo9MkIuVx6Iz5tM6e40"}}
            defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
              text={this.state.name}
            />
          </GoogleMapReact>
        </div>
      );
    }
  }

export default GoogleMap;
