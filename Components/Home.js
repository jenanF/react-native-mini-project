import { View, Text, FlatList, Image, Button, TextInput } from "react-native"
import React from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../apis/items";
import ListItem from "./ListItem";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { RadioButton } from 'react-native-paper';
import { useState } from "react";
import items from "../data";


const clickTest = () => {
    getAllItems();
}

const Home = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState('first');
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedValue, setSelectedValue] = useState('Option 1');

    const filteredData = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );



    // const { data, isFetching, isSuccess } = useQuery({
    //     queryKey: ["listItems"],
    //     queryFn: getAllItems,
    //     enabled: true
    // });

    // const list = data?.map(item => <ListItem name={item.name} />);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
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

            {/* <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            /> */}
            {/* <FlatList
                data={data}
                renderItem={({ item }) => <View>
                    {/* <Image source={require(item.image)}></Image> */}
            {/* <Text>{item?.name}</Text>
                </View>}
                keyExtractor={item => item.id} > </FlatList> */}

            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ListItem name={item.name} price={item.price} image={item.image} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchBar: {
        height: 40,
        width: 380,
        textAlign: 'left',
        marginRight: 100,
        marginLeft: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },

    item: {
        fontSize: 18,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 5,
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
        marginRight: 65

    }
});

export default Home
