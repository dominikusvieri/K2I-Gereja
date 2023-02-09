import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

const DetailNewsScreen = ({ route }) => {
    const data = route.params.param
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", position: 'relative' }}>
            <ScrollView style={{ paddingHorizontal: '20px', paddingTop: '10px' }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', marginVertical: '10px' }}>
                    {data?.title}
                </Text>
                <Image
                    source={{
                        uri: data.url
                    }}
                    style={{ width: '100%', height: '18rem', }}
                />
                <Text style={{ textAlign: 'justify', marginTop: '10px' }}>
                    {data?.thumbnailUrl}
                    jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                    jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailNewsScreen