import { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { v4 } from 'uuid';
import AddTask from './AddTask';

export default function ToDoList({itemTitles}) {
    const newItems = itemTitles.map((itemTitle) => createItem(itemTitle));
    const [items, setItems] = useState(newItems)

    function addToDo(title) {
        setItems((oldItems) => [...oldItems, createItem(title)])
    }

    function removeToDo(id) {
        setItems((oldItems) => {
            const index = oldItems.findIndex((item) => {
                return item?.id == id;
            });
            return index == -1 ? oldItems : oldItems.splice(index, 1);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.items}>
                {
                    items.map(item => (<Text key={item.id}>{item.title}</Text>))
                }
            </View>
            <AddTask onAddTask={addToDo} style={styles.add}></AddTask>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 50,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
    },
    items: {
        // width: '100%',
        // height: '100%',
        fontSize: 20
    },
    add: {
        // width: '100%',
        // height: '100%',
    }
});

function createItem(title) {
    return ({
        id: v4(),
        title: title,
    });
}