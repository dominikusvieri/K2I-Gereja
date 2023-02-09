import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/components/Navigation/Navigation'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App