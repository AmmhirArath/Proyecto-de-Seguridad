import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Colores from '../../constants/Colores';
import TouchableModulo from '../../components/Aprendizaje/TouchableModulo';
import TouchableButton from '../../components/Buttons/TouchableButton';

const InfoNiños = () => {
    const route = useRoute();
    const { Module } = route.params;
    
    const getImageForModule = (moduleId) => {
        switch (moduleId) {
            case 1:
                return require('../../assets/Img/Niños/Max.png');
            case 2:
                return require('../../assets/Img/Niños/Luna.png');
            default:
                return require('../../assets/Img/Niños/Leo.png');
        }
    };

    const handleAudioPress = () => {
    };

    const handleVideoPress = () => {
    };

    const handlePlayPress = () => {

    };

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={getImageForModule(Module.id)} 
                style={styles.image} 
            />
            <ScrollView>
            <Text style={styles.title}>{Module.titulo}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableModulo
                        icon={'volume-up'}
                        name='Audio'
                        styleText={styles.textomodulo}
                        handleButton={handleAudioPress}
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
                    handleButton={()=>console.log('hola')}
                    name={'Juguemos'}
                    styleContainer={styles.button}
                    styleText={styles.buttonText}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
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
    playButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    playButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },    
    textomodulo: {
        fontSize: 15,
        color: Colores.negro,
        fontWeight: 'bold',
    },
    containersound:{
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
    
});

export default InfoNiños;
