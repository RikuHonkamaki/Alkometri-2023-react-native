import { useState } from 'react';
import { Button, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { lightStyle, darkStyle } from './styles/Styles.js';
import NumericInput from "react-native-numeric-input";
import {RadioButton} from "react-native-paper";
import { useFonts } from 'expo-font';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [switcher, setSwitcher] = useState(false);
  const myStyle = switcher ? darkStyle : lightStyle;
  const [result, setResult] = useState(0);
  const [drinks, setDrinks] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("");
  const radioStyle = {flexDirection: "row", alignItems: "center"}

  const litra = drinks * 0.33;
  const gramma = litra * 8 * 4.5;
  const polttaa = weight / 10;
  const veressä = gramma - (polttaa * hours);
  const tulosM = veressä / (weight * 0.7);
  const tulosN = veressä / (weight * 0.6);

  const [loaded] = useFonts({
    frijole: require("./fonts/Frijole-Regular.ttf"),
    tulos: require("./fonts/PressStart2P-Regular.ttf")
  });

  if(!loaded) {
    return <Text>Loading fonts...</Text>
  }

  function calculate() {
    if (gender == "male") {
      return (
        setResult(tulosM)
      );
    }

    else if (gender == "female") {
      return (
        setResult(tulosN)
      );
    }
  }

  function resultcolor(){
    if(result < 0.5 && result <1){
      return{
        color: '#00c90a'
      }
    }

    if(result > 0.5 && result <1){
      return{
        color: '#ffa600'
      }
    }

    if(result>=1){
      return{
        color: 'red'
      }
    }
  }
  
  return (
    <ScrollView style={myStyle.background}>

        <View style={myStyle.header}>
          <Switch 
          style={myStyle.Switch}
          thumbColor={darkStyle.mySwitchButtonColor}
          trackColor={{false: lightStyle.buttonbackground, true: darkStyle.buttonbackground}}
          value={switcher}
          onValueChange={() => setSwitcher(!switcher)}
          ></Switch>
          <Text style={myStyle.header}>Alcometer</Text>
        </View>

        <View style={myStyle.container}>
            <TextInput style={myStyle.textInput} value={Number} keyboardType = "number-pad" placeholder='Enter your WEIGHT here' placeholderTextColor = {"#a86d00"}
            onChangeText = {text => setWeight(text)}/>
        </View>

        <View style={myStyle.määrät}>
            <Text style= {myStyle.text}>Drinks</Text>
            <View style={myStyle.väli}>
              <NumericInput
              style = {myStyle.väli}
              value = {drinks}
              onChange = {drinks => setDrinks(drinks)}
              leftButtonBackgroundColor={"#2b2721"}
              rightButtonBackgroundColor={"#2b2721"}
              containerStyle={{backgroundColor: "#ffe8c5", borderColor: "#000000"}}
              iconStyle={{color: "white"}}
              minValue = {0}
              ></NumericInput>
            </View>

            <Text style= {myStyle.text}>Hours</Text>
            <View style={myStyle.väli}>
              <NumericInput
              style = {myStyle.väli}
              value = {hours}
              onChange = {hours => setHours(hours)}
              leftButtonBackgroundColor={"#2b2721"}
              rightButtonBackgroundColor={"#2b2721"}
              containerStyle={{backgroundColor: "#ffe8c5", borderColor: "#000000"}}
              iconStyle={{color: "white"}}
              minValue = {0}
              ></NumericInput>
            </View>

            
              <RadioButton.Group onValueChange={gender => setGender(gender)} value = {gender}>
                <View style = {radioStyle}> 
                  <RadioButton value='male'/>
                  <Text style={myStyle.text}>Male</Text>
                </View>
                <View style = {radioStyle}> 
                  <RadioButton value='female'/>
                  <Text style={myStyle.text}>Female</Text>
                </View>
              </RadioButton.Group>
        </View>

        <View style = {myStyle.buttonStyle}>
          <Button onPress={calculate} title='Calculate' color={"#a86d00"}></Button>
          <Text style = {[myStyle.result,resultcolor()]}>{result.toFixed(2)}</Text>
        </View>

    </ScrollView>
  );
}
