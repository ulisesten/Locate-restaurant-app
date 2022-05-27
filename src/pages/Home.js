import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PlacesList from '../ui/organisms/PlacesList';

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
          <PlacesList navigation={navigation}/>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });