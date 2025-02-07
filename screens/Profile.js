import { View, Text, Alert, ActivityIndicator, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'



export const Profile = () => {
    const route = useRoute();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (() => {
            //alert(route.params.userID);
            const userID = route.params.userID;
            fetch("https://dummyjson.com/users/" + userID)
                .then(resp => resp.json())
                .then(json => setUser(json))
                .finally((e) => setLoading(false))
        })();
    }, [])
    return (

        <View
            style={{
                // justifyContent: "center",
                // alignItems: "center",
                flex: 1
            }}>
            {
                loading ? (<Loading />) :
                    (
                        <UserInfo data={user} />
                    )
            }
        </View>
    )
}
const Loading = () => {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                flex: 1
            }}
        >
            <ActivityIndicator size={'large'} color={"red"} />
        </View>
    )
}

const UserInfo = ({ data }) => {
    return (

        <View
            style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: "center", justifyContent: "center",

                }}
            >
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 125,
                        borderWidth: 3,
                        borderColor: "black",
                        marginBottom: 3,
                        marginTop: 10

                    }}
                    source={{ uri: data.image }} />
                <Text
                    style={{
                        fontWeight: "bold", fontSize: 23,
                        fontFamily: "Calibri",
                    }}
                >{data.firstName} {data.lastName}</Text>
                <Text>{data.email}</Text>
                <Text>{data.phone}</Text>

                <Text>{data.age} years old</Text>
                <Text>{data.gender}</Text>
                <Text>{data.birthDate}</Text>
                <Text>{data.address.address}, {data.address?.city}, {data.address?.state}</Text>

                <View style={{ marginTop: 20, backgroundColor: "#e0e0e0", padding: 10, borderRadius: 10, marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 2 }}>Company:</Text>
                    <Text>{data.company.name}</Text>
                    <Text>{data.company.department}</Text>
                    <Text>{data.company.title}</Text>
                </View>

                <View style={{ marginTop: 20, backgroundColor: "#e0e0e0", padding: 10, borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Bank Info:</Text>
                    <Text>Card Type: {data.bank.cardType}</Text>
                    <Text>Card Expiry: {data.bank.cardExpire}</Text>
                </View>

                <View style={{
                    marginTop: 1, backgroundColor: "#e0e0e0", padding: 10, borderRadius: 25,
                    width: "80%",

                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Crypto:</Text>
                    <Text>Coin: {data.crypto.coin}</Text>
                    <Text>Wallet: {data.crypto.wallet}</Text>
                </View>
            </View>

        </View>

    );
};
