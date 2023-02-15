import { React } from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Button } from "react-native-paper";

const Login = () => {
  return (


    <SafeAreaView styles={styles.view}>

<View style={styles.cardLogin} >

<Image
style={styles.imageLogin}
source={
    require('../../../../assets/SupConnect.png')
}
/>

<Text style={styles.titleLogin} >   
Connectez-vous
</Text>

<Text style={styles.messageLogin}>
Nous sommes heureux de vous revoir. Vous pouvez vous connecter pour consulter vos données
</Text>

<Text style={styles.textInput22} > Identifiant </Text>
<TextInput
    style={styles.inputMail}
    value={Text}
placeholder={"exemple@Gmail.com"}

    />
</View>        
<View>
    <Text style={styles.textInput22} > Mot de passe </Text>
    <TextInput
        style={styles.inputPassword}
        value={Text}
    placeholder={"****"}
        />
</View>

<Button style={styles.buttonLogin} >
    <Text style={styles.textButton} >  
        Connexion
    </Text>
</Button>

<Text style={styles.textMdp}>
Mot de passe oublié ?
</Text>
<Text style={styles.compteLogin}>
Vous n’avez pas de compte ?
</Text>
</SafeAreaView>

  );
};



const styles = StyleSheet.create({


    view:{
        flex:1,
        backgroundColor:'#FFF',
    },

    inputMail: {
      flex: 1,
      height: 50,
      width:300,
      margin: 12,
      marginBottom:25,
      borderWidth: 1,
      padding: 25,
      borderRadius:10,
      color:"#fff",
      backgroundColor:"#F3F3F3",
      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
    },
   
    inputPassword: {
      flex: 1,
      height: 50,
      width:300,
      margin: 12,
      borderWidth: 1,
      padding: 25,
      borderRadius:10,
      color:"black",
      backgroundColor:"#F3F3F3",
      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
    },

    textInput22: {

        marginBottom:-10,
    marginLeft:63,
    fontSize:15,
    },

    imageLogin: {
        width:200,
        height:200,
        justifyContent:"center",
        alignSelf:"center",

        marginTop:30,
        marginBottom:20,
    },

    titleLogin: {
        fontStyle: 'normal',
        fontSize:35,
        marginBottom:20,
        fontWeight:'bold',

      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
        
    },
    
    messageLogin:{
        fontStyle:'normal',
        fontSize:18,
        color: '#A8A8A8',
        paddingLeft:30,
        paddingRight:30,
        textAlign:'center',
        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",
        alignItems:"center",

       
        marginBottom:30,
    },


    buttonLogin:{
        backgroundColor:'#595FFF',
        borderRadius:7,
        width:360,
        height:50,
        marginTop:50,

        justifyContent:"center",
        alignSelf:"center",
        alignContent:"center",
        alignItems:"center",

    },



    textButton:{
        color:'#FFFFFF',
        fontSize: 15,

    },

    textMdp:{
        color:'#595FFF',
        fontSize:12,

        marginTop:12,
        justifyContent:'center',
        alignSelf:'center',
    },

    compteLogin:{
        fontSize:15,
        color: '#A8A8A8',
        justifyContent:'center',
        alignSelf:'center',
       
    }


  });



export default Login;
