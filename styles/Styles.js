import { StyleSheet } from "react-native";

const lightStyle = StyleSheet.create({

    background : {
        backgroundColor:"#ffe8c5",
        flex: 1
    },

    header : {
        alignItems:"center",
        marginTop: 30,
        fontSize: 43,
        color: "#2b2721",
        fontFamily: "frijole"
    },

    Switch :{
        marginLeft:250,
        marginTop: 30
    }, 

    textInput :{
        borderWidth: 3,
        borderColor: "#2b2721",
        width: 250,
        color:"#2b2721",
        fontWeight:"bold",
        textAlign:"center",
    },

    text : {
        color: "#2b2721",
        fontSize:20,
        fontWeight: "bold",
        textAlign:"center"
    }, 

    container: {
        marginTop:20,
        alignItems:"center"
    },  
   
    määrät: {
        alignItems: "center",
        marginTop: 20,
    }, 

    väli: {
        marginBottom:20
    }, 

    buttonStyle:{
        alignItems: "center",
        marginTop: 30,
    },

    result: {
        color: "#2b2721",
        fontSize:50,
        fontFamily: "tulos",
        textAlign:"center",
        marginTop: 40
    }, 


    buttonbackground: ("#2b2721"),
});

const darkStyle = StyleSheet.create({

    background : {
        backgroundColor:"#2b2721",
        flex: 1
    },

    header : {
        alignItems:"center",
        marginTop: 30,
        fontSize: 43,
        color: "#ffe8c5",
        fontFamily: "frijole"
    },

    Switch :{
        marginLeft:250,
        marginTop: 30
    }, 

    textInput :{
        borderWidth: 3,
        borderColor: "#ffe8c5",
        width: 250,
        color:"#ffe8c5",
        fontWeight:"bold",
        textAlign:"center"

    },
    
    text : {
        color: "#ffe8c5",
        fontSize:20,
        fontWeight: "bold",
        textAlign:"center",
    }, 

    container: {
        marginTop:20,
        alignItems:"center"
    },  

    määrät: {
        alignItems: "center",
        marginTop: 20
    }, 

    väli: {
        marginBottom:20
    }, 

    buttonStyle:{
        alignItems: "center",
        marginTop: 30
    },

    result: {
        color: "#ffe8c5",
        fontSize:50,
        fontFamily: "tulos",
        textAlign:"center",
        marginTop: 40
    }, 


    mySwitchButtonColor: "#a86d00",
    buttonbackground: ("#ffe8c5"),
});
  
export {lightStyle, darkStyle};



