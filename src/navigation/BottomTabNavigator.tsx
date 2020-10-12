import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabAllFestsScreen from '../screens/TabAllFestsScreen';
import TabNextFestScreen from '../screens/TabNextFestScreen';
import TabSelectedHolidayScreen from '../screens/TabSelectedHolidayScreen'
import TabSettingsScreen from '../screens/TabSettingsScreen';
import {
    BottomTabParamList,
    TabAllFestsParamList,
    TabSettingsParamList,
    TabNextFestParamList,
    TabSelectedHolidayParamList

} from '../../types';

// @ts-ignore
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

    return (
    <BottomTab.Navigator
      initialRouteName="NextFest"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
            // @ts-ignore
            name="Next fest"
            component={TabNextFestNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
            }}
        />
      <BottomTab.Screen
          // @ts-ignore
        name="All fests"
        component={TabAllFestsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />

      <BottomTab.Screen
          // @ts-ignore
          name="Settings"
          component={TabSettingsNavigator}
          options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabAllFestsStack = createStackNavigator<TabAllFestsParamList>();

function TabAllFestsNavigator() {
  return (
    <TabAllFestsStack.Navigator>
      <TabAllFestsStack.Screen
        name="TabAllFestsScreen"
        component={TabAllFestsScreen}
        options={{ headerTitle: 'All fests' }}
      />
    <TabNextFestStack.Screen
        name="TabSelectedHolidayScreen"
        component={TabSelectedHolidayScreen}
        options={{ headerTitle: 'Selected fest' }}
    />
    </TabAllFestsStack.Navigator>
  );
}
const TabNextFestStack = createStackNavigator<TabNextFestParamList>();

function TabNextFestNavigator() {
  return (
    <TabNextFestStack.Navigator>
      <TabNextFestStack.Screen
        name="TabNextFestScreen"
        component={TabNextFestScreen}
        options={{ headerTitle: 'Next fest' }}
      />
      <TabNextFestStack.Screen
          name="TabSelectedHolidayScreen"
          component={TabSelectedHolidayScreen}
          options={{ headerTitle: 'Selected fest' }}
      />
    </TabNextFestStack.Navigator>
  );
}

const TabSettingsStack = createStackNavigator<TabSettingsParamList>();

function TabSettingsNavigator() {
  return (
    <TabSettingsStack.Navigator>
      <TabSettingsStack.Screen
        name="TabSettingsScreen"
        component={TabSettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </TabSettingsStack.Navigator>
  );
}
