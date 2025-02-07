import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { User } from './User';


export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            fetch("https://dummyjson.com/users")
                .then((resp) => resp.json())
                .then((json) => setUsers(json.users))
                .finally((e) => setLoading(false))

        }

        )()
    }, [])
    return (
        <View
            style={{ width: "90%" }}
        >
            {
                loading ? (
                    <ActivityIndicator size={'large'} color='purple' />
                ) :
                    (
                        <FlatList
                            data={users}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <User data={item} />}
                            showsVerticalScrollIndicator={false} // Dikey kaydırma çubuğunu gizler

                        />
                    )
            }

        </View>
    )
}
