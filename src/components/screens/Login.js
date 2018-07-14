import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from '../common/LoginForm';

//color format: #00a8ff blue

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../../assets/icons/logo.png')}
                    />

                    <Text style={styles.title}>An app made for finding travel partners.</Text>
                </View>

                <View style={styles.formContainer}>
                    <LoginForm
                    onSubmit={this.props.onSubmitLogin}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#00a8ff'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 170,
        height: 170
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center', 
        opacity: 0.8
    }
});