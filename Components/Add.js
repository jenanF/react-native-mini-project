import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';
import items from '../data'
//import { Button } from 'react-native-paper';


const Add = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const [selectedValue, setSelectedValue] = useState('Food');



    const handleSubmit = (name, description, price, image, category) => {

        let id = items.length + 1;
        const newItem = { name, description, price, image, category, id }

        items.push(newItem);

        console.log(newItem);
        console.log(items)

    }
    return (
        <View>
            <Text style={styles.title}>Add An Item</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Enter description"

            />

            <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}

                placeholder="Enter Price"

            />


            <TextInput
                style={styles.input}
                onChangeText={setImage}
                value={image}
                placeholder="Enter ImageURL"

            />

            <View style={styles.radiobuttons}>
                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Food"
                        status={selectedValue === 'Food' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Food')}
                    />
                    <Text style={styles.optionText}>Food</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Personal Care"
                        status={selectedValue === 'Personal Care' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Personal Care')}
                    />
                    <Text style={styles.optionText}>Personal Care</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Clothing"
                        status={selectedValue === 'Clothing' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Clothing')}
                    />
                    <Text style={styles.optionText}>Clothing</Text>
                </View>
            </View>

            <Button title="Submit" style={styles.submit} onPress={() => handleSubmit(name, description, price, image, selectedValue)}>Submit</Button>
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
