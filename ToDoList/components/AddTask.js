import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function AddTask({onAddTask}) {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.text}
                placeholder="type something"
                value={input}
                onChangeText={(text) => setInput(text)}
            >
            </TextInput>
            <Button style={styles.text}
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
        height: '100%'
    },
    text: {
      fontSize: 30,
      width: '100%',
    }
});