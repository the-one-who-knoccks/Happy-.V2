import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from '../src/pages/OrphanagesMap/index';
import OrphanagesDetails from '../src/pages/OrphanagesDetails/index';
import SelectMapPosition from '../src/pages/CreateOrphanages/SelectMapPosition/index'
import OrphanageData from '../src/pages/CreateOrphanages/OrphanageData/index'

import Header from '../src/components/Header/index';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'} }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />
        <Screen
          name="OrphanagesDetails"
          component={OrphanagesDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato"/>
          }}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa"/>
          }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados"/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;