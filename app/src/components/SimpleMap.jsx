import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488,
    },
    zoom: 13,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '80vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBfpqmDPxr6KmJNxYZDp7CfJmjZ5ChPenE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Mettre un logo ou le nom de l'appartement en variable ici"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
