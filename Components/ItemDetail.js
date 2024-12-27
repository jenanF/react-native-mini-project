import { View, Text, FlatList, Image, Button } from "react-native"
import { StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import items from "../data";

const ItemDetail = ({ route }) => {

    const { id } = route.params;

    const item = items.find((item) => {
        return item.id == id
    })

    return (
        <View>
            <Image></Image>
            <Text>{item.name}</Text>

            <View>
                <Text>Description</Text>
                <Text>{item.description}</Text>
            </View>

            <Text></Text>
            <Text>{item.price}</Text>
        </View>
    )
}

export default ItemDetail
