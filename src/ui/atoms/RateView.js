import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RateView({rating}){
    const [starRating, setStarRating] = useState(rating);

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        
          <View style={styles.stars}>
            <TouchableOpacity onPress={() => setStarRating(1)}>
                <MaterialIcons
                name={'star'}
                size={32}
                style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(2)}>
                <MaterialIcons
                name={'star'}
                size={32}
                style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(3)}>
                <MaterialIcons
                name={'star'}
                size={32}
                style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(4)}>
                <MaterialIcons
                name={'star'}
                size={32}
                style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(5)}>
                <MaterialIcons
                name={'star'}
                size={32}
                style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      minHeight: 35
    },
    stars: {
      display: 'flex',
      flexDirection: 'row',
    },
    starSelected: {
        color: '#e1ad01',
    },
    starUnselected: {
        color: '#aaa'
    },
  });