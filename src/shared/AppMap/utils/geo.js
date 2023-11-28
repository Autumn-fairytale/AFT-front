const defaultCenter = {
  lat: 50.45,
  lng: 30.52,
};

export const getBrowserLocation = () => {
  return new Promise((res, rej) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          res({ lat, lng });
        },
        () => res(defaultCenter)
      );
    } else {
      rej(defaultCenter);
    }
  });
};
