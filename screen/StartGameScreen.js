import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, ViewPropTypes} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Colors from '../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start A New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.inputButton}>
                        <Button title="Reset" color={colors.accent} onPress={() =>{}} />
                    </View> 
                    <View style={styles.inputButton}>
                        <Button style={styles.inputButton} color={colors.primary} title="Confirm" onPress={() =>{}} />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title:{
        fontSize:20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    inputButton:{
        width: '40%',
        borderRadius: 40,
        overflow: 'hidden'
    }
});

export default StartGameScreen;