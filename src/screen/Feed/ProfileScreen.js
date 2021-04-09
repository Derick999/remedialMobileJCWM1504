import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import pic from '../../picture/user.png'

const ProfileScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={pic}
            style={styles.imageStyle}
            PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.textStyle}>{username}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 0,
        marginBottom: 10
    },
    textStyle: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '500'
    }
})

export default ProfileScreen
