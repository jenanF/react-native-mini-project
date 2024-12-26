import { View, Text, FlatList, Image } from "react-native"
import { StyleSheet } from "react-native";


function ListItem(props) {
    return (
        <View style={styles.container}>
            {/* <Image source={uri(props.image)}></Image> */}
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1
    },
});

export default ListItem
