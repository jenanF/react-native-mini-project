import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';
//import { Button } from 'react-native-paper';


const Add = () => {
    const [text, onChangeText] = useState('');

    const [selectedValue, setSelectedValue] = useState('Option 1');
    return (
        <View>
            <Text style={styles.title}>Add An Item</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter description"

            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Price"

            />


            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter ImageURL"

            />

            <View style={styles.radiobuttons}>
                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Option 1"
                        status={selectedValue === 'Option 1' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Option 1')}
                    />
                    <Text style={styles.optionText}>Option 1</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Option 2"
                        status={selectedValue === 'Option 2' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Option 2')}
                    />
                    <Text style={styles.optionText}>Option 2</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Option 3"
                        status={selectedValue === 'Option 3' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Option 3')}
                    />
                    <Text style={styles.optionText}>Option 3</Text>
                </View>
            </View>

            <Button title="Submit" style={styles.submit}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 380,
        textAlign: 'left',
        alignSelf: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',

        marginLeft: 20
    },
    optionText: {
        fontSize: 16,
    },

    selectedValue: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',

    },

    radiobuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 50,
        alignSelf: 'center'

    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 0
    },
    submit: {
        backgroundColor: 'grey',
        color: 'white'
    }
});

export default Add
