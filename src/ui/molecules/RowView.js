import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import RateView from '../atoms/RateView';
import { getOneTimeLocation } from '../../logic/geoLocation';


export default function RowView({navigation, placeData}){

    const [getLocation, setLocation] = useState(null)
    const placeLocation = { latitude: placeData.Latitude, longitude: placeData.Longitude };

    useEffect(()=>{
        getOneTimeLocation( placeLocation, (loc) =>{
            setLocation(loc / 1000)
        })
    },[getLocation])

    function onClicked(){
        navigation.navigate('DetailScreen', {location: placeLocation, data: placeData});
    }
    
    return(
        <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                    <Image
                        resizeMode="center"
                        style={{
                            borderRadius: 8,
                            margin: 4,
                            height: 100,
                            width: 100,
                        }}
                        source={{uri: placeData.Thumbnail }}
                    />
                </View>
                <View style={{marginLeft: 12}}>
                    <Text style={{marginTop: 15}}>{placeData.PlaceName}</Text>
                    <RateView rating={placeData.Rating}/>
                    <View style={{marginBottom: 16}}>
                        <Text style={styles.Gray}>{placeData.Address}</Text>
                        <Text style={styles.Gray}>{placeData.Category}</Text>
                    </View>
                </View>
                <View style={styles.Location} onStartShouldSetResponder={onClicked}>
                    <Text>{getLocation? getLocation : "Distancia..." } km</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    Gray: {
        color: '#a1a1a1'
    },

    Location: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 4
    }

})