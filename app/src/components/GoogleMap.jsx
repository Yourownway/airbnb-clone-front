import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="GoogleMap">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.8534} lng={2.3488} text="Votre appartement" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
