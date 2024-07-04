
import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity,Image } from 'react-native';
import Colores from '../constants/Colores';


const info = [
    { id: '1', content: 'WannaCry (2017)'},
    { id: '2', content: 'Stuxnet (2010)'},
    { id: '3', content: 'Yahoo Data Breaches (2013-2014)'},
    { id: '4', content: 'Target Data Breach (2013)'},
    { id: '5', content: 'Sony PlayStation Network Hack (2011)' },
    { id: '6', content: 'Operation Aurora (2009-2010)'},
    { id: '7', content: 'SolarWinds Hack (2020)'},
    { id: '8', content: 'Equifax Data Breach (2017)'},
    { id: '9', content: 'NotPetya (2017)'},
    { id: '10', content: 'ILOVEYOU Virus (2000)'},
];

const EventosHistoricos = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source = {require('../assets/Img/nubeGrande.png')}/>
            <FlatList
                data={info}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.shadowBox,styles.button]}
                        onPress={() => navigation.navigate("BrechasHackeos", { id: item.id, content: item.content })}
                    >
                    <Text style={styles.buttonText}>{item.content}</Text>
                    </TouchableOpacity>
                 
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,
    },
    button: {
        backgroundColor: '#8AC4FF',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        marginTop:30,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#19297C',
        fontSize: 16,
        fontFamily: 'Bold'
    },
    image:{
        position:'absolute',
        zIndex:-1,
        height:1000
    },
    shadowBox: {
shadowColor: "blue",
shadowOffset: {width: 0,height: 7,},
shadowOpacity:  0.21,
shadowRadius: 7.68,
elevation: 4
      },
});

export default EventosHistoricos;