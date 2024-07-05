import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import Colores from '../constants/Colores';
import Background from './BackgroundGradient';
import TouchableButton from '../components/Buttons/TouchableButton';

const SeleccionarEdad = () => {
    const navigation = useNavigation();
    const [selectedAge, setSelectedAge] = React.useState(29);
    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

    const handleNavigate = () => {
        if (selectedAge <= 17) {
            navigation.navigate('NiñosStack'); 
        } else if (selectedAge <= 49) {
            navigation.navigate('Login');
        } else {
            navigation.navigate('Inicio');
        }
    };

    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.blueSection}>
                <Text style={styles.title}>¡Queremos Conocerte!</Text>
                <View style={styles.iconContainer}>
                    <Image
                        resizeMode="cover"
                        style={styles.imagen}
                        source={require('../assets/Img/Logosptm.png')}
                    />
                </View>
            </View>
            <View style={styles.whiteSection}>
                <Text style={styles.subtitle}>Selecciona tu edad para preparar todos los detalles de la aplicación</Text>
                <Picker
                    selectedValue={selectedAge}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedAge(itemValue)}
                >
                    {ageOptions.map(age => (
                        <Picker.Item key={age} label={`${age}`} value={age} />
                    ))}
                </Picker>
                <TouchableButton
                    name='Continuar'
                    handleButton={handleNavigate}
                    styleContainer={styles.button}
                    styleText={styles.buttonText} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    blueSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    whiteSection: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    iconContainer: {
        width: 150,
        height: 150,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: '100%',
        height: '100%',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    picker: {
        height: 150,
        width: 100,
        marginBottom: 20,
    },
    button: {
        backgroundColor: Colores.azuloscuro,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default SeleccionarEdad;
