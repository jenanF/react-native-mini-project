import { View, Text, FlatList, Image, Button } from "react-native"
import { StyleSheet } from "react-native";

const ItemDetail = (props) => {
    return (
        <View>
            <Image></Image>
            <Text>{props.name}</Text>

            <View>
                <Text>Description</Text>
                <Text>{props.description}</Text>
            </View>

            <Text></Text>
            <Text>{props.price}</Text>
        </View>
    )
}

export default ItemDetail
