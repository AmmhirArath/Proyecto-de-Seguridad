import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Colores from '../../constants/Colores';
import TouchableModulo from '../../components/Aprendizaje/TouchableModulo';

const HomeNiños = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        try {
            if (sound) {
                await sound.replayAsync(); 
            } else {
                const { sound } = await Audio.Sound.createAsync(
                    require('../../assets/Img/Niños/Bienvenida.mp3')
                );
                setSound(sound);
                await sound.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('Error playing sound: ', error);
        }
    }

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
                setSound(null);
                setIsPlaying(false);
            }
        };
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ProSecure</Text>
                <Text style={styles.subHeaderText}>Technologies</Text>
            </View>
            <Text style={styles.description}>
                Aprende y edúcate con estas historias sobre ataques cibernéticos
            </Text>
            <TouchableOpacity onPress={playSound}>
                <Image
                    source={require('../../assets/Img/ProSecure.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <View style={styles.rowContainer}>
                <TouchableModulo icon={'laptop-house'} color={Colores.verde} name='Max contra el Cyberbullyng' handleButton={() => console.log('Max pelotudo')} styleContainer={styles.modulo1} styleText={styles.textomodulo} />
                <TouchableModulo icon={'question'} color={Colores.rosa} name='El Misterio de Luna' handleButton={() => console.log('Luna')} styleContainer={styles.modulo2} styleText={styles.textomodulo} />
                <TouchableModulo icon={'theater-masks'} color={Colores.azuloscuro} name='El Hacker Desconocido' handleButton={() => console.log('Hacker')} styleContainer={styles.modulo3} styleText={styles.textomodulo} />
                <TouchableModulo icon={'gamepad'} color={Colores.purpura} name='Sofía y el Juego Malicioso' handleButton={() => console.log('Sofia')} styleContainer={styles.modulo4} styleText={styles.textomodulo} />
                <TouchableModulo icon={'user-tie'} color={Colores.rojo} name='Misión Rescate' handleButton={() => console.log('Mision')} styleContainer={styles.modulo5} styleText={styles.textomodulo} />
                <TouchableModulo icon={'skull-crossbones'} color={Colores.fondo} name='La trampa del Capitan Phish' handleButton={() => console.log('Capitan Pshis')} styleContainer={styles.modulo6} styleText={styles.textomodulo} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colores.azulniños,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    headerText: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold',
        color: Colores.azuloscuro,
    },
    subHeaderText: {
        fontSize: 16,
        color: Colores.azuloscuro,
    },
    logo: {
        width: 150,
        height: 200,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: Colores.azuloscuro,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    modulo1: {
        borderColor: Colores.verde,
    },
    modulo2: {
        borderColor: Colores.rosa,
    },
    modulo3: {
        borderColor: Colores.azuloscuro,
    },
    modulo4: {
        borderColor: Colores.purpura,
    },
    modulo5: {
        borderColor: Colores.rojo,
    },
    modulo6: {
        borderColor: Colores.fondo,
    },
    textomodulo: {
        fontSize: 12
    }
});

export default HomeNiños;
