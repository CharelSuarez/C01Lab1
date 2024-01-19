import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import AddTask from './components/AddTask';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.top}> */}
        <Text style={styles.title}>To-Do List</Text>
        <ToDoList style={styles.list} itemTitles={["ur mom", "ur dad"]}></ToDoList>
      {/* </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  // top: {
  //   width: '100%',
  //   height: '100%'
  // },
  title: {
    fontSize: 40,
    width: '100%',
    height: 'auto'
  },
  list: {
    width: '100%',
    height: '100%'
  }
});
