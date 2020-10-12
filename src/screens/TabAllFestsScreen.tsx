import * as React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../store/actions/calendarActions'
import { Text, View } from '../components/Themed';

const { selectFestRequestAction } = actions;


interface Item {
  title:string;
  date:any
}

const Item = ({ title, date, onPress }) => {
  const holidayDate = `${date.datetime.day}/${date.datetime.month}/${date.datetime.year}`;
  return (
      <TouchableOpacity
        onPress={onPress}
          style={styles.item}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{holidayDate}</Text>
      </TouchableOpacity>
  )
};

export default function TabAllFestsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { allFests } = useSelector(state=> state.calendarReducers);
  const navigateToPage =(holiday) => {
    dispatch(selectFestRequestAction(holiday))
    navigation.navigate({ name: 'TabSelectedHolidayScreen' });

  }
  return (
    <View style={styles.container}>
     <FlatList
         data={allFests}
         style={styles.list}
         showsHorizontalScrollIndicator={false}
         renderItem={({ item }) =>
             <Item
                 key={item.date.iso}
                 title={item.name} date={item.date}
                 onPress={()=>navigateToPage(item)}
             />}
         keyExtractor={(item)=>item.date.iso}
     />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 1,
  },
  title: {
    fontSize: 16,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    height: 50,
    alignContent: 'center',
    padding: 12
  },
  date: {
    color: '#cbcaca',
    marginLeft: 5
  }
});
