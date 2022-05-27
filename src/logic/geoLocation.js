import { getDistance }  from 'geolib';
import * as Location from 'expo-location';

const getOneTimeLocation = async (point, callback) => {

    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      Location.setGoogleApiKey('AIzaSyD25Zwq_eXj_1VJT7g632aFZ00PNl5obUA');

      let myLocation = await Location.getCurrentPositionAsync({});
      
      callback(getDistance(myLocation.coords, point));
  };

  export {
      getOneTimeLocation
  }