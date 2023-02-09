import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../../context/AuthContext'

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const context = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>{context}</Text>
                <TextInput
                    placeholder='Enter Email'
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <Button title='Login' onPress={() => navigation.navigate('BottomNavigation')} />

                <View style={styles.registerStyle}>
                    <Text>
                        Dont have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    link: {
        color: 'blue'
    },
    registerStyle: {
        flexDirection: 'row',
        marginTop: 20
    }
})

export default LoginScreen