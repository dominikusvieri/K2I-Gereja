import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <TouchableOpacity style={{ backgroundColor: '#F92525', width: '100%', padding: 10, alignItems: 'center', borderRadius: 5 }} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>
          LOG OUT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen