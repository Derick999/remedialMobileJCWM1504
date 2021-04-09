import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action';
import pic from '../../picture/user.png';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const loginBtn = () => {
        if(username !== ''){
            dispatch(loginAction(username));
        }else{
            alert('Please fill your username');
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Image source={pic} style={{ height: 200, width: 200 }} />
            </View>
            <View style={{ paddingHorizontal: 35, paddingBottom: 50 }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'green'
                }}>
                    Login
                </Text>
            </View>
            <View style={{ paddingHorizontal: 35}}>
                <Text style={{ color: 'white' }}>Username</Text>
                <Input 
                    placeholder="username"
                    style={{ color: 'white' }}
                    onChangeText={(e) => setUsername(e)}
                />
                <Button
                    title="Login"
                    onPress={loginBtn}
                    buttonStyle={{ backgroundColor: 'green' }}
                />
            </View>
        </View>
    );
}
 
export default LoginScreen;