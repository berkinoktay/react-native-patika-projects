import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/screens/Products';
import ProductDetail from './src/screens/ProductDetail';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();
// ref

const Routes = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            options={{
              title: 'Products',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerShadowVisible: false,

              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <TouchableOpacity onPress={handlePresentModalPress}>
                  <Icon
                    name="filter"
                    size={26}
                    color="#fff"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          >
            {(props) => <Products {...props} modalRef={bottomSheetModalRef} />}
          </Stack.Screen>
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              title: 'Product Detail',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default Routes;
