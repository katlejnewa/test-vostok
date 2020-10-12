import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


import { Text, View } from '../components/Themed';

export default function TabSelectedHolidayScreen() {
    const { selectedFest } = useSelector(state=> state.calendarReducers);

    if(!selectedFest){
     return  (
         <View style={styles.container}>
            <Text style={styles.title}>Fest is not selected</Text>
        </View>)
    }

    const date = `${selectedFest.date.datetime.day}/${selectedFest.date.datetime.month}/${selectedFest.date.datetime.year}`
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedFest.name}</Text>
            <Text style={styles.description}>{selectedFest.description}</Text>
            <Text style={styles.date}>Date: {date}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 20,
        marginBottom: 20
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
