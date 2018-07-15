import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const userImage = 'https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg'
const userName = 'omegaLul'
const userAge = '69'
const userGender = 'male'

export default class TripCard extends Component {
    render() {
        return(
            <View style={styles.card}>
                <Image
                style={{flex:1}}
                    source={{uri:userImage}}
                />
            <View style={{margin:20}}>
                <Text style={{fontSize:20}}>kek, 69</Text>
                <Text style={{fontSize:15, color:'darkgrey'}}>fluid</Text>
            </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    card : {
        flex: 1,
        overflow:'hidden',
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8
    },
    body : {
        flex : 5,
    },
});