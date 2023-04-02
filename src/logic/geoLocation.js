import { getDistance }  from 'geolib';
import * as Location from 'expo-location';
import api_key from '../../api_key';

const getOneTimeLocation = async (point, callback) => {

    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      Location.setGoogleApiKey(api_key);

      let myLocation = await Location.getCurrentPositionAsync({});
      
      callback(getDistance(myLocation.coords, point));
  };

  export {
      getOneTimeLocation
  }