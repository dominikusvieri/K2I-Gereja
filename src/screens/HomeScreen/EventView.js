import { View, Text, StyleSheet, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCardNews from '../../components/HomeScreen/ItemCardNews'
import { useNavigation } from '@react-navigation/native'




const EventView = () => {
  const [newsData, setNewsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()


  useEffect(() => {
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setNewsData(json))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.sectionHeader}>
        Event Terkini Gereja
      </Text>
      {
        isLoading ?
          <View className="items-center justify-center">
            <ActivityIndicator size="large" color="#0885F8" />
          </View> :
          <FlatList
            data={newsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailEvent', { param: item })}
                style={{ flexDirection: 'row', marginBottom: '5px', padding: '5px', marginTop: 10 }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: '50px', height: '50px' }}
                />
                <View style={{ marginLeft: '5px' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {item.title.length > 20 ? `${item.title.slice(0, 20)}..` : item.title}
                  </Text>
                  <Text style={{ fontWeight: '500', color: '#b1b1b1', fontSize: '10px' }}>
                    {item.category}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                  }}
                />
              );
            }}
          />

      }

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 16
  },
  itemCard: {
    marginTop: 10,

  }

})

export default EventView