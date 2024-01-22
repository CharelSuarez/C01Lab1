import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function AddTask({onAddTask}) {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="type a new to-do here..."
                value={input}
                onChangeText={(text) => setInput(text)}
            >
            </TextInput>
            <Button style={styles.button}
                title="add to-do"
                onPress={() => {
                    if (input.trim() === "") return;
                    onAddTask(input);
                    setInput("");
                }}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    input: {
      fontSize: 20,
      width: '100%',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#000'
    },
    button: {
        fontSize: 30,
        width: '100%',
        borderCurve: 10
    }
});