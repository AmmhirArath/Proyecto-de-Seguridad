import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colores from '../../constants/Colores'; 
interface ButtonModulo {
    handleButton?: () => void;
    name: string;
    styleContainer?: any;
    styleText?: any;
    icon?: any;
    color?: any;
}

const TouchableModulo = ({ name, icon,color, handleButton, styleContainer, styleText }: ButtonModulo) => {
    return (
        <TouchableOpacity onPress={handleButton} style={[styleContainer, styles.gridItem]}>
            <Icon name={icon} size={40} color={color} />
            <Text style={[styles.buttonText, styleText]}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        color: Colores.azuloscuro,
    },
    gridItem: {
        backgroundColor: Colores.blanco,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 2,
    },
});

export default TouchableModulo;
