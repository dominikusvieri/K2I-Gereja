import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

const DetailEventScreen = ({ route }) => {
    const data = route.params.param
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", position: 'relative' }}>
            <ScrollView style={{ paddingHorizontal: '20px', paddingTop: '10px' }}>
                <Image
                    source={{
                        uri: data.image
                    }}
                    style={{ width: '100%', height: '18rem', }}
                />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginVertical: '10px' }}>
                    {data?.title}
                </Text>
                <Text style={{ textAlign: 'justify', marginTop: '10px' }}>
                    {data?.description}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailEventScreen