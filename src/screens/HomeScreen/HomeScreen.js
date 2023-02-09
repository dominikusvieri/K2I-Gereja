import { View, Text, SafeAreaView, StyleSheet, FlatList, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import NewsView from './NewsView';
import EventView from './EventView'

import { BASE_URL } from '../../config'

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'news', title: 'News' },
    { key: 'event', title: 'Event' },
  ]);
  

  const renderScene = SceneMap({
    news: NewsView,
    event: EventView,
  });

  const layout = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyle}>
        <View style={{ marginVertical: '10px' }}>
          <Text style={styles.textHeaderTitle}>
            Selamat Datang di
          </Text>
          <Text style={styles.textHeaderTitle}>
            Pusat Informasi Gereja Jemaat Purwodadi
          </Text>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route, color})=>(
              <Text style={{color:'#fff'}}>
                {route.title}
              </Text>
            )}
            style={{backgroundColor:'#0885F8'}}
          />
        )}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  headerStyle: {
    flexDirection: 'column',
    paddingHorizontal: '20px',
    paddingTop: '10px',
    backgroundColor: '#0885F8'
  },
  textHeaderTitle: {
    fontWeight: '600',
    color: '#fff',
    fontSize: '16px'
  },
  subHeaderStyle: {
    paddingHorizontal: '20px',
    marginTop: '10px'
  },
  subHeaderTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    borderBottomWidth: '2px',
    borderBottomColor: '#b1b1b1'
  },
  newsListStyle: {
    flexDirection: 'column',
    paddingHorizontal: '20px',
    marginTop: '10px',
    backgroundColor: '#fff'
  },
  btnTab: {
    flexDirection: 'row', justifyContent: 'center'
  },
  btnTabActive: {
    backgroundColor: '#000'
  },
  textTab: {
    borderWidth: 0.5, borderColor: '#000', padding: '5px', borderRadius: '10px', marginHorizontal: '5px'
  },
  textTabActive: {
    backgroundColor: '#000',
    color: '#fff'
  },
  itemStyle: {
    padding: 10,
  },
  scene: {
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
})

export default HomeScreen