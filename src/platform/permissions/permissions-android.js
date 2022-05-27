import { PermissionsAndroid } from "react-native";

const checkLocationPermissions = async ()=> {
    const result = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION);
    return result;
}

const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Figo App needs access to your location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
}

export {
    checkLocationPermissions,
    requestLocationPermission
}