import { useState } from 'react'
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native'
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
                return item?.id === id;
            });
            if (index !== -1) {
                oldItems.splice(index, 1)
            }
            return [...oldItems]
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.items}>
                {
                    items.map(item => (
                        <View style={styles.item} key={item.id}>
                            <Text style={styles.itemText}>{item.title}</Text>
                            <Button
                                color={'#F44'}
                                title='remove'
                                onPress={() => removeToDo(item.id)}
                            >
                            </Button>
                        </View>
                    ))
                }
            </ScrollView>
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      flexGrow: 1
    },
    items: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        flexGrow: 1,
        marginBottom: 40,
    },
    item: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10
    },
    itemText: {
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 10
    }
});

function createItem(title) {
    return ({
        id: v4(),
        title: title,
    });
}