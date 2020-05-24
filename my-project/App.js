import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);

  return (
    <View style={styles.container}>
      {/*

        Note: FLatList is better than mapping people const (people.map(item => { return (jsx ELement) })) 
        beacuse it needs to be wrapped by <ScrollView> </ScrollView> and also it has some performance issue
        as the this will render all the elemnts in contrast to <FlatList />
        where the elements are renderd as you scroll down in the app
        
        */}
      <FlatList
        numColumns={2} //splits data on columns, you may need to update some style to make it looks better such as marginHorizontal
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/*
        
        Note: this FlatList component automatically checks the key in each item in the people object item: { name: 'asd', key: '53' },
        however if you want to identify another key if key property is not found you may use keyExtractor prop in the FlatList component,
        this in case that each item looks like this item: { name: 'asd', id: '53' }

        */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
