import {View} from 'react-native';
import MapView from 'react-native-maps';

export default function DetailScreen({navigation, route}){
    const location = route.params.location;

    return(
        <View style={{width: 100, height: 100}}>
            <MapView
                initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            />
      </View>
    )
}