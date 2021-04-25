import React, {useState} from 'react';
import { View, Text, StyleSheet,Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmedState] = useState(false); 
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ' '));
    };


    const confirmInputHandler = () => {
        const chosenNumber= parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number', 
                'Number has to be a number between 1 and 99', 
                [{text: 'Okay', 
                style:'destructive', 
                onPress: resetInputHandler}]);
            return;
        }
        setConfirmedState(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmedState(false);
    } 

    let confirmedOutput;

    if (confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} /> 
            </Card>
        );
        Keyboard.dismiss();
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        AutoCorrect={false} 
                        keyboardType="number-pad"
                        maxLength= {2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.inputButton}>
                            <Button 
                                title="Reset" 
                                color={colors.accent} 
                                onPress={resetInputHandler} 
                            />
                        </View> 
                        <View style={styles.inputButton}>
                            <Button 
                                color={colors.primary} 
                                title="Confirm" 
                                onPress={confirmInputHandler} 
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },
    input: {
        width: 30,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;