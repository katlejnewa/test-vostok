import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../store/actions/calendarActions';
import { Text, View } from '../components/Themed';

const types = [ 'national', 'local', 'religious', 'observance' ]
const { setHolidaysTypeAction, getHolidaysRequestAction } = actions;

export default function TabSettingsScreen() {
  const dispatch = useDispatch();
  const { type } = useSelector(state=> state.calendarReducers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Type holidays
      </Text>
      {types.map(item =>
          (<TouchableOpacity
              onPress={()=>{
               dispatch(setHolidaysTypeAction(item))}}
              key={item}>
             <Text
                 style={styles[item === type ? 'selected' : '']}>
               {item}
             </Text>
          </TouchableOpacity>)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  selected: {
    textDecorationLine: 'underline'
  }
});
