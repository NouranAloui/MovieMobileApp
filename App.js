import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from './Componants/Favourite';
import Home from './Componants/Home';
import routes from './routes';
import styles from './Style'
import { ScrollView } from 'react-native';
import FavouriteContextProvider from './FavouriteContextProvider';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <View style={{ flex: 1, backgroundColor: '#2C303A' }}>
      <View style={{ marginTop: 30, flex: 1 }}>
        <FavouriteContextProvider>
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                drawerStyle: {
                  backgroundColor: '#2C303A',
                },
                drawerActiveTintColor: '#F1E9DB', // Font color for the active drawer item
                drawerInactiveTintColor: '#F1E9DB', // Font color for inactive drawer items
              }}
            >
              <Drawer.Screen name={routes.Home} component={Home}
                options={{
                  title: 'Home',
                  headerTintColor: '#F1E9DB',
                  headerStyle:
                  {
                    backgroundColor: '#2C303A'
                  }
                }} />
              <Drawer.Screen name={routes.Favorite} component={Favourite}
                options={{
                  title: 'Favourite',
                  headerTintColor: '#F1E9DB',
                  headerStyle:
                  {
                    backgroundColor: '#2C303A'
                  }
                }} />
            </Drawer.Navigator>
          </NavigationContainer>
        </FavouriteContextProvider >
      </View>
    </View>
  );
}

