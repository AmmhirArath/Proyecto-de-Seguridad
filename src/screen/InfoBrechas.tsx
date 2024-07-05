
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Colores from '../constants/Colores';
import { brechas } from '../../brechas.js';

const BrechasInfo = ({ route } : any) => {
    const { id, content } = route.params;
    const info = brechas[id];
    

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source = {require('../assets/Img/nubeGrande.png')}/>
            <View style={styles.containertitle}>
            <Text style={styles.title}>{content}</Text>
            </View>
            <Image source={info.source} style={styles.images} />
            <View style = {styles.container2}>
            <Text style={styles.info}>{info.description}</Text>
            <Text style={styles.info}>{info.description2}</Text>
            <Text style={styles.info}>{info.description3}</Text>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20
    },
    title:{
        fontSize: 32,
        color: Colores.azuloscuro,
        textAlign: 'center',
        fontFamily: 'Bold'
    },
    info:{
        fontSize: 17,
        textAlign: 'center',
        color: Colores.negro,
        fontFamily: 'Bold'
    },
    images:{
        justifyContent:'flex-start',
        alignContent:'center',
        borderRadius:30,
        width: 350,
        height: 260,
        marginBottom: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'rgba(100, 100, 100, 0.9)'
    },
    container2:{
        flex: 1,
        backgroundColor: 'rgba(400, 400, 400, 0.9)',
        borderRadius: 15,
        borderWidth: 1,
        overflow: "hidden",
        width: 370,
        padding: 15,
        marginTop: 10,
        marginBottom: 15,
    },
    containertitle:{
        marginTop:10,
        backgroundColor: 'rgba(500, 500, 500, 0.6)',
        borderRadius: 10,
        width: 280,
    },
    image:{
        position:'absolute',
        zIndex:-1,
        height:1000
    },
});

export default BrechasInfo;