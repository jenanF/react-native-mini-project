import { View, Text, Image, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native";


function ListItem(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                {/* <Image source={uri(props.image)}></Image> */}
                <Text>{props.name}</Text>
                <Text>{props.price} $</Text>
            </View>
        </TouchableOpacity>
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
