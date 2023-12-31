import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';

import EditableTimer from './components/EditableTimer';

import ToggleableTimerForm from './components/ToggleableTimerForm';

export default class App extends React.Component{
   render() {
     return (
         <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
               <Text style={styles.title}>Pomodoro</Text>
            </View>
            <ScrollView style={styles.timerList}>
               <ToggleableTimerForm isOpen={false} />
                <EditableTimer id="1"
                title= "Water the plants"
                project="House Chores"
                elapsed="8986300"
                isRunning
                />

             <EditableTimer id="2"
                title= "Day 29 of Lose Belly Fat"
                project="Living Fit"
                elapsed="8986300"
                editFormOpen
             />
            
            </ScrollView>
         </View>
     );
   }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  timerList: {
    paddingBottom: 15,
  }
});
