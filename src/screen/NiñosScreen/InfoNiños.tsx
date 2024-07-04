import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Video, Audio } from 'expo-av';
import Colores from '../../constants/Colores';
import TouchableModulo from '../../components/Aprendizaje/TouchableModulo';
import TouchableButton from '../../components/Buttons/TouchableButton';
import { useNavigation } from '@react-navigation/native';

const InfoNiños = () => {
    const route = useRoute();
    const { Module } = route.params;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoVisible, setVideoVisible] = useState(false);
    const navigation = useNavigation();

    //Logica para mapear los audios se deben cambiar todos ya que son musicas
    const handleAudioPress = async (moduleId) => {
        switch (moduleId) {
            case 1:
                return require('../../assets/Audio/Max.mp3');
            case 2:
                return require('../../assets/Audio/Luna.mp3');
            case 3:
                return require('../../assets/Audio/Leo.mp3');
            case 4:
                return require('../../assets/Audio/Sofia.mp3');
            case 5:
                return require('../../assets/Audio/Pablo.mp3');
            case 6:
                return require('../../assets/Audio/Ana.mp3');
            default:
                return null;
        }
    };

    async function playSound(moduleId) {
        try {
            if (sound) {
                await sound.stopAsync();
                setIsPlaying(false);
                setSound(null);
            }

            const audioFile = await handleAudioPress(moduleId);
            const { sound } = await Audio.Sound.createAsync(audioFile);
            setSound(sound);
            await sound.playAsync();
            setIsPlaying(true);
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
    }, [sound]);
    //Logica para mapear las fotos por id ya esta completo
    const getImageForModule = (moduleId) => {
        switch (moduleId) {
            case 1:
                return require('../../assets/Img/Niños/Max.png');
            case 2:
                return require('../../assets/Img/Niños/Luna.png');
            case 3:
                return require('../../assets/Img/Niños/Leo.png');
            case 4:
                return require('../../assets/Img/Niños/Sofia.png');
            case 5:
                return require('../../assets/Img/Niños/Alex.png');
            case 6:
                return require('../../assets/Img/Niños/Barbara.png');
            default:
                return require('../../assets/Img/Niños/Leo.png');
        }
    };

    const handleVideoPress = async () => {
        if (sound) {
            await sound.stopAsync();
            setIsPlaying(false);
        }
        setVideoVisible(true);
    };

    const closeVideoModal = () => {
        setVideoVisible(false);
    };
    //Logica para mapear los videos por id se debe hacer todo pinche peter webea
    const videoUrlForModule = (moduleId) => {
        switch (moduleId) {
            case 1:
                return require('../../assets/videos/Max.mp4');
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image 
                    source={getImageForModule(Module.id)} 
                    style={styles.image} 
                />
                <Text style={styles.title}>{Module.titulo}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableModulo
                        icon={'volume-up'}
                        name='Audio'
                        styleText={styles.textomodulo}
                        handleButton={() => playSound(Module.id)}
                        styleContainer={styles.containersound}
                    />
                    <TouchableModulo
                        icon={'play'}
                        name='Video'
                        color={Colores.rojo}
                        styleContainer={styles.containersound}
                        styleText={styles.textomodulo}
                        handleButton={handleVideoPress}
                    />
                </View>
                <Text style={styles.description}>{Module.historia}</Text>
                <TouchableButton 
                    handleButton={() => navigation.navigate('TriviaNiños', { Module })}
                    name={'Juguemos'}
                    styleContainer={styles.button}
                    styleText={styles.buttonText}
                />
            </ScrollView>
            
            <Modal
                visible={videoVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={closeVideoModal}>
                        <View style={styles.modalBackground} />
                    </TouchableWithoutFeedback>
                    <View style={styles.videoContainer}>
                        <Video
                            source={videoUrlForModule(Module.id)}
                            shouldPlay
                            style={styles.video}
                            resizeMode="contain"
                        />
                        <TouchableWithoutFeedback onPress={closeVideoModal}>
                            <View style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Cerrar</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.azulclaro,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
    },
    textomodulo: {
        fontSize: 15,
        color: Colores.negro,
        fontWeight: 'bold',
    },
    containersound: {
        width: 110,
        height: 110,
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
    button: {
        backgroundColor: Colores.azuloscuro,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    videoContainer: {
        backgroundColor: Colores.azulclaro,
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (26 / 20),
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: Colores.rojo,
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default InfoNiños;
