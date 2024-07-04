import * as React from 'react';
import { StyleSheet,View, Text, Image } from 'react-native';
import Colores from '../constants/Colores';

const Prueba = () => {
    return(
        <View style = {styles.container}> 
        <Text style= {styles.titulo}>Wanna Cry - 2017 </Text>
        <Image resizeMode="stretch" style={styles.images} source={{ uri: "https://i2.cdn.turner.com/money/dam/assets/170322171653-cyber-security-misconceptions-1024x576.jpg",
        }}>
        </Image>
        <View style = {styles.container2}>
            <Text style = {styles.texto}>
                Descripción: WannaCry fue un ataque de ransomware que se propagó a través de una vulnerabilidad en el sistema operativo Windows. Utilizaba el exploit EternalBlue, desarrollado por la Agencia de Seguridad Nacional de Estados Unidos (NSA) y filtrado por el grupo de hackers Shadow Brokers.</Text>
            <Text></Text>
            <Text style = {styles.texto}>Impacto: Afectó a más de 230,000 computadoras en 150 países, incluyendo sistemas del Servicio Nacional de Salud (NHS) en el Reino Unido, FedEx, y otras grandes corporaciones. Los atacantes exigían pagos en Bitcoin para liberar los sistemas infectados.</Text>
        </View>
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
    titulo:{
        fontSize: 24,
        color: Colores.azuloscuro,
    },
    images:{
        borderRadius:30,
        width: 250,
        height: 250,
        marginBottom: 30,
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'rgba(400, 400, 400, 0.8)'
    },
    container2:{
        flex: 1,
        backgroundColor: 'rgba(400, 400, 400, 0.8)',
        borderRadius: 30,
        overflow: "hidden",
        width: 370,
        padding: 15,
        marginTop: 25,
        marginBottom: 15
    },
    texto:{
        fontSize: 18.7,
        color: Colores.azuloscuro,
    }
})

export default Prueba