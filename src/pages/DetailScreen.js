import { Link } from '@react-navigation/native';
import {View, Text, StyleSheet, Linking} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RateView from '../ui/atoms/RateView';

export default function DetailScreen({navigation, route}){
    const location = route.params.location;
    const data = route.params.data;
    console.log(data);

    return(
        <View style={styles.mapcontainer}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }}
            >
                <Marker coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}  />
            </MapView>
            <View style={styles.infoCard}>
                <Text style={styles.title}>
                    {data.PlaceName}({data.Category})
                </Text>
                <Text>
                    Address: {data.Address}
                </Text>
                <Text>
                    Phone: {data.PhoneNumber}
                </Text>
                <RateView rating={data.Rating}/>
                <Text style={styles.link} onPress={()=> Linking.openURL(data.Site)}>
                    {data.Site}
                </Text>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    mapcontainer: {
          height: 600,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
    },
    map: {
        width: 400,
        height: '100%'
    },

    infoCard: {
        height: 100
    },

    title:{
        fontWeight: 'bold'
    },

    link: {
        color: 'blue'
    }
})