import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';

const deviceWidth = Dimensions.get("window").width;

class Main extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                    <View>
                        <Text>WELCOME TO PLAYGROUND</Text>
                        <TouchableOpacity style={styles.button} onPress={() => Actions.SecondPage()}>
                            <Text style={styles.text}>
                                go to second page
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => Actions.ThirdPage()}>
                            <Text style={styles.text}>
                                go to third page
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5CFCF',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 5,
        margin: 2,
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});
export default Main;