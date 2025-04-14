import React, { useState, useContext } from "react";

import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput, 
    ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn(){

    const { signIn, loadingAuth } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){

        if(email === '' || password === ''){
            return;
        }

        await signIn({ email, password })
        
    }


    return(
        <View style={styles.container}>
            <Text style={styles.logoText}>Task List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor='#718096'
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    placeholderTextColor='#718096'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    { loadingAuth ? (
                        <ActivityIndicator size={30} color='#FFF'/>
                    ) : (
                        <Text style={styles.textButton}>Sign In</Text>
                    )}
                </TouchableOpacity>
                
                <View>
                    <TouchableOpacity style={styles.buttonSignUp}>
                        <Text style={styles.textSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F7FA"
    },
    logo:{
        marginBottom: 18
    },
    logoText:{
        fontSize: 32,
        color: '#2D3748',
        fontWeight: 700 
    },
    inputContainer:{
        width: '95%',
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 22,
    },
    input: {
        width: '95%',
        backgroundColor: '#FFF',
        marginBottom: 12,
        borderRadius: 13,
        paddingHorizontal: 10,
        color: '#2D3748',
        fontWeight: 400,
        fontSize: 14
    },
    button:{
        backgroundColor: '#3B82F6',
        height: 48,
        paddingHorizontal: 25,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        margin: 12

    },
    textButton:{
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF'
    },
    buttonSignUp:{
        margin: 12,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    textSignUp:{
        fontSize: 16,
        fontWeight: 600,
        color: '#3B82F6',
    }

})