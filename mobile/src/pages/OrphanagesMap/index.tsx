import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons';
import mapMarker from '../../images/map-marker.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api'; 

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  });

  const navigation = useNavigation();

  const handleNavigateToOrphanagesDetails = (id: number) => {
    navigation.navigate('OrphanagesDetails', { id });
  }

  const handleNavigateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -21.7653664,
          longitude: -42.5387307,
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
        }}
      >
        {orphanages.map(orphanage => {

          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 3.4,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToOrphanagesDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}

      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}> {orphanages.length} orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_600SemiBold',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15C3D6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }

});


export default OrphanagesMap;