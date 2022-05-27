import React, { useState, useEffect} from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import { getPlacesFromApiAsync } from '../../api/network'
import RowView from '../molecules/RowView';


export default function PlacesList({navigation}){

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlacesFromApiAsync((json)=>{
            setPlaces(json)
        });
      }, []);

    return (
        <View style={styles.container}>
        <FlatList
            data={places}
            renderItem={({item, index, separators  }) => (
                <View>
                <RowView navigation={navigation}  placeData={item}/>
                </View>
            )}
            keyExtractor={item => item.PlaceId}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 0,
      paddingTop: 0,
    }
  });