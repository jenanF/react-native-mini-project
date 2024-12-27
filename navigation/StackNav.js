import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetail from '../Components/ItemDetail';
import Home from '../Components/Home';

const Stack = createStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default StackNav
