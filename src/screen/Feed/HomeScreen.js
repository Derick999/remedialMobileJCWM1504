import React, { useEffect } from 'react';
import {Image, View } from 'react-native';
import { Header } from 'react-native-elements';
import { useDispatch} from 'react-redux';
import { fetchCatData } from '../../redux/action/catAction';

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatData())
    }, [dispatch]);
    
    return (
        <View style={{ flex: 1 }}>
            <Header
                leftComponent={{ icon: 'menu', color:"black", size: 30, onPress: () => navigation.toggleDrawer()}}
                centerComponent={{ style: { color:"#fff", fontSize: 23 } }}
                rightComponent={{ icon: 'notifications', color: '#fff', size: 30 }}
                backgroundColor="green"
            />
                <View style={{ flex: 2 }}>
                    <Image source={{ url: 'https://docs.thecatapi.com/api-reference/images/images-search' }} />
                </View>
            </View>
    );
}
 
export default HomeScreen;