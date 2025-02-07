import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export const User = ({ data }) => {
    const nav = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => {
                nav.navigate("profile", { userID: data.id })
                //alert(data.id);
            }}
        >
            <View
                style={{
                    width: "95.5%",
                    height: 100,
                    //backgroundColor: "#EAEAEA",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 3,
                    paddingRight: 8
                }}
            >
                <View
                    style={{ flex: 1 }}>
                    <Image
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 34,
                            borderWidth: 2,
                            bottom: 12
                        }}
                        source={{ uri: data.image }}
                    />
                </View>
                <View
                    style={{ flex: 4 }}>
                    <View style={{
                        left: 30,
                        justifyContent: "flex-start",
                        bottom: 10,

                    }}>
                        <Text
                            style={{
                                fontSize: 19,
                                fontWeight: "bold"
                            }}
                        >
                            {`${data.firstName} ${data.lastName}`}
                        </Text>
                        <Text
                        >
                            {data.email}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", left: 20 }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            //backgroundColor: "#edede9",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: 10,
                            left: 10

                        }}>
                        <Text style={{ fontFamily: "Tangerine" }}>
                            {data.age}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
