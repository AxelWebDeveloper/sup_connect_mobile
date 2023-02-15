import { React } from "react";
import { View, StyleSheet, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";



const dateProfil = [
    {
        idPorfil: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        IoniconProfil: <Ionicons name="calendar-sharp" size={30} color="#EAAA6F" />,
        textProfil: "Informations",
        IoniconProfil2: <Ionicons name="chevron-forward"  size={30} color="grey" />,
    },
    {
        idProfil: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        IoniconProfil: <Ionicons name="calendar-sharp"  size={30} color="#EAAA6F" />,
        textProfil: "Absences",
        IoniconProfil2: <Ionicons name="chevron-forward"  size={30} color="grey" />,
    },
    {
        idProfil: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        IoniconProfil: <Ionicons name="calendar-sharp"  size={30} color="#EAAA6F" />,
        textProfil: "Retards",
        IoniconProfil2: <Ionicons name="chevron-forward"  size={30} color="grey" />,
    },
    {
        idProfil: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        IoniconProfil: <Ionicons name="calendar-sharp"  size={30} color="#EAAA6F" />,
        textProfil: "Déconnexion",
        IoniconProfil2: <Ionicons name="chevron-forward"  size={30} color="grey" />,
    },
    
    
    
    
] 


const Item = ({ item }) => (
    <View style={styles.cardProfil1} > 
        <View style={styles.textProfil} >
            <View style={styles.CardLogo}>
                {item.IoniconProfil}
            </View>
                <Text style={styles.tileCardProfil}> {item.textProfil} </Text>
                <View style={styles.arrowProfil} >
                    {item.IoniconProfil2}
                </View>
        </View>
    </View>

  );


const Profil = () => {
  return (
    <>
        <View style={styles.container}>
            <SafeAreaView>
                    <Button style={styles.buttonModifier}>
                        <Text style={styles.textModifier} >Modifier le profil</Text>
                    </Button>
        <View  style={styles.viewProfil} >    
            <Image 
                style={styles.imageProfil}
                source={
                    require('../../../../assets/profil2.png')
                }
            />
                <Text style={styles.nameProfil} > LING LONG </Text>
                <Text style={styles.classProfil} > L3 Paris </Text>
        </View> 

        <ScrollView style={styles.infosProfil}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={dateProfil}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </ScrollView >
         
      

            </SafeAreaView>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(234, 170, 111, 0.8)',
    },


    buttonModifier:{
        backgroundColor:'rgba(234, 170, 111, 0.95)',
        borderRadius:10,
        width:190,
        marginRight: 15 ,
        marginTop:15,

        justifyContent:'flex-end',
        alignSelf:'flex-end',
    },


    textModifier:{
        color: '#FFF',
        fontSize:14,
    },

    viewProfil:{
        justifyContent:'center',
        alignSelf:'center',
    },

    imageProfil:{
        marginTop:50,
        borderRadius: 75 ,
        width:150,
        height:150,
        justifyContent:"center",
        alignSelf:"center",

    },

    nameProfil: {
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#FFF',
        marginTop:10,
    },
    
    classProfil: {
        justifyContent:'center',
        alignSelf:'center',
        marginTop:8,
        fontSize:17,
        color:'#FFF',
    },

    infosProfil:{

        height:925, 
        marginBottom: 300,
        backgroundColor: '#FFF',
        borderRadius:40,
        marginTop:25,
    },

    cardProfil1:{
        width:350,
        height:80,
        backgroundColor:'rgba(234, 170, 111, 0.2)',
        borderRadius:15,
        marginTop:25,

        justifyContent:'center',
        alignSelf:'center',
    },


    textProfil:{
        flexDirection: "row",
        flexWrap: "wrap",
    },

    CardLogo:{
        width:50,
        height:50,
        borderRadius:10,
        marginLeft:15,
        backgroundColor:"rgba(234, 170, 111, 0.25)",

        justifyContent: "center",
        alignItems: "center",
    },


    tileCardProfil:{
        justifyContent:"center",
        alignSelf:"center",
        fontSize:17,
        marginLeft:20,
        marginRight:50,
    },

    arrowProfil:{
        marginTop:10,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        flex:1,
        marginRight:20,


    },

   

});

export default Profil;
