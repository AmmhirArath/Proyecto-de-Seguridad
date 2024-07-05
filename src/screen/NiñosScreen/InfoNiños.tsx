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
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FMax.mp3?alt=media&token=ab616042-a367-4b99-b1f9-cb61afc31be3'};
            case 2:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FLuna.mp3?alt=media&token=db080a86-5150-4dd5-8508-94aeef95530b'};
            case 3:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FLeo.mp3?alt=media&token=1600d267-15ce-4db7-ad8f-47f806acaa67'};
            case 4:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FSofia.mp3?alt=media&token=6ac922b4-b5df-48bd-8b2c-6133e6b07df1'};
            case 5:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FPablo.mp3?alt=media&token=bdf2e690-d49e-40d1-80bb-a586dd439837'};
            case 6:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FAudios%2FAna.mp3?alt=media&token=96e1ebf3-5bf8-47f7-92e0-7afa0c5c39a7'};
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
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FMax.png?alt=media&token=d46cb198-e07c-49ac-a593-e028caee6659' };
            case 2:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FLuna.png?alt=media&token=c449e4ec-9c61-4d35-a723-c35194df7bfa' };
            case 3:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FLeo.png?alt=media&token=37d31292-b4bb-4d42-9a3d-209f567071da' };
            case 4:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FSofia.png?alt=media&token=bab5b951-aad4-4008-87e6-2d7cbd340566' };
            case 5:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FAlex.png?alt=media&token=47a25fc2-0a08-4fa3-a7a3-2088b8daf057' };
            case 6:
                return { uri: 'https://firebasestorage.googleapis.com/v0/b/wandis-pet.appspot.com/o/seguridad%2FFotos%2FNi%C3%B1os%2FBarbara.png?alt=media&token=7221857d-a83c-4cd9-a8b7-9fd718bd4593'};
            default:
                return require('../../assets/Img/ProSecure.png');
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
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};
            case 2:
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};
            case 3:
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};            
            case 4:
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};
            case 5:
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};        
            case 6:
                return null; // Borras el Null descomentas y pones el url dentro de las comillas{ uri: ''};            
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
