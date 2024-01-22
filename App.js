import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>To-Do List</Text>
        <ToDoList itemTitles={["First todo", "Second todo"]}></ToDoList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 40,
    width: '100%',
    marginBottom: 40
  }
});
