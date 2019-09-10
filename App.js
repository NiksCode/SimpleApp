import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

   const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

   const addGoalHandler = () => {
       setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
   };

    return (
        <View style={styles.screen}>
            <View style={styles.inputcontainer}>
                <TextInput placeholder="Goal"
                           style={styles.input}
                           onChangeText={goalInputHandler}
                           value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler}/>
            </View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
       borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    }
});
