import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Colores from '../../constants/Colores';
import TouchableModulo from '../../components/Aprendizaje/TouchableModulo';
import { Modules } from '../../../ModuloNiños';
import { useNavigation } from '@react-navigation/native';

const HomeNiños = () => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigation = useNavigation();

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

    const getStyleById = (id) => {
        switch (id) {
            case 1:
                return styles.modulo1;
            case 2:
                return styles.modulo2;
            case 3:
                return styles.modulo3;           
            case 4:
                return styles.modulo4;            
            case 5:
                return styles.modulo5;
            case 6:
                return styles.modulo6;    
            default:
                return styles.defaultModulo;
        }
    };
    const getStyleIconById = (id) => {
        switch (id) {
            case 1:
                return Colores.verde;
            case 2:
                return Colores.rosa;
            case 3:
                return Colores.azuloscuro;
            case 4:
                return Colores.purpura;
            case 5:
                return Colores.rojo;
            case 6:
                return Colores.fondo
            default:
                return styles.defaultModulo;
        }
    };
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
                {Modules.Historias.map((Module) => (
                    <TouchableModulo
                        icon={Module.Icon}
                        color={getStyleIconById(Module.id)}
                        name={Module.titulo}
                        handleButton={() => navigation.navigate('InfoNiños', { Module })}
                        styleContainer={getStyleById(Module.id)}
                        styleText={styles.textomodulo}
                        key={Module.id}
                    />
                ))}
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
        color: Colores.verde,
        borderColor: Colores.verde,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    modulo2: {
        color: Colores.rosa,
        borderColor: Colores.rosa,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    modulo3: {
        borderColor: Colores.azuloscuro,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    modulo4: {
        borderColor: Colores.purpura,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    modulo5: {
        borderColor: Colores.rojo,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    modulo6: {
        borderColor: Colores.fondo,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    defaultModulo: {
        borderColor: Colores.negro,
        width: 120,
        height: 120,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    textomodulo: {
        fontSize: 12
    }
});

export default HomeNiños;
