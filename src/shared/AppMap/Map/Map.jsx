import { useCallback, useRef } from 'react';

import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { MapPropTypes } from './Map.props';
import { defaultTheme } from './map.theme';

const Map = ({ center, mapProps }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: true,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullScreenControl: false,
    styles: defaultTheme,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapProps.containerStyle}
      center={center}
      zoom={mapProps.zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};
Map.propTypes = MapPropTypes;

Map.defaultProps = {
  center: { lat: 50.45, lng: 30.52 },
  containerStyle: {
    width: '500px',
    height: '500px',
  },
  zoom: 13,
};

export default Map;
