import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity  } from 'react-native';
import Colores from '../constants/Colores';

const ProQuiz = () => {
    return(
        <View style={titles.container}>
            <Text style={titles.titulo}>ProSecure</Text>
            <Text style={titles.subtitulo}>Technologies</Text>
            <Text style={titles.welcome}>! Bienvendo a ProQuiz Seguridad Informatica para Adultos Mayores !</Text>
            <Image style = {titles.image} source ={require('../assets/Img/mobile-phone.png')}></Image>
            <Text style={titles.texto}>En este divertido y educativo minijuego, aprenderas a protegerte en el mundo digital de manera facil y entretenida. La seguridad informatica es crucial en la era digital, y queremos ayudarte a navegar por internet con confianza y seguridad.</Text>
            <TouchableOpacity
          style={titles.button}
        >
          <Text style={titles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        </View>
    )
}


const titles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,
    },
    titulo:{
        fontSize: 24,
        color: Colores.azuloscuro,
    },
    subtitulo:{
        fontSize: 12,
        color: Colores.azuloscuro,
        paddingBottom: 20,
    },
    welcome:{
        fontSize: 20,
        color: Colores.azuloscuro,
        paddingBottom: 15,
        alignItems: 'center',
    },
    texto:{
        fontSize: 21,
        color: Colores.azuloscuro,
        marginLeft: 10,
        marginRight: 10,
    },
    image:{
        width: 250,
        height: 250,
        marginBottom: 30,
        marginTop: 10,   
    },
    button: {
        backgroundColor: Colores.azuloscuro,
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 30,
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Bold",
      },
})

export default ProQuiz;
