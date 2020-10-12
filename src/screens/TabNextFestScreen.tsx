import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
 import { Countdown } from 'react-native-countdown-text';

import actions from '../store/actions/calendarActions'
import { Text, View } from '../components/Themed';

const { selectFestRequestAction } = actions;

export default function TabNextFestScreen({navigation}) {
    const dispatch = useDispatch();
    const { nextFest } = useSelector(state=> state.calendarReducers);

    if(!nextFest){
        return  (
            <View style={styles.container}>
                <Text style={styles.title}>Fest not found</Text>
            </View>)
    }
    const date = `${nextFest.date.datetime.day}/${nextFest.date.datetime.month}/${nextFest.date.datetime.year}`

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                dispatch(selectFestRequestAction(nextFest))
                navigation.navigate({ name: 'TabSelectedHolidayScreen' });
            }}>
                <Text style={styles.title}>{nextFest.name}</Text>
                <Text style={styles.date}>Date: {date}</Text>
            </TouchableOpacity>
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
    date: {
        color: '#cbcaca',
    }
});
