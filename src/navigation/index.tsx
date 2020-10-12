import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import actions from '../store/actions/calendarActions';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const { getHolidaysRequestAction } = actions;

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const dispatch = useDispatch();
    const { type } = useSelector(state=> state.calendarReducers);

    useEffect(() => {
        dispatch(getHolidaysRequestAction())
    },[]);

    useEffect(() => {
        dispatch(getHolidaysRequestAction())
    },[type]);

    return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
