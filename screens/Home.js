import { View, Text } from 'react-native'
import React from 'react'
import { UserList } from '../UserList'


export const Home = () => {
    return (
        <View
            style={{
                justifyContent: "center", alignItems: "center",
                right: 15
            }}
        >
            <UserList />
        </View>
    )
}