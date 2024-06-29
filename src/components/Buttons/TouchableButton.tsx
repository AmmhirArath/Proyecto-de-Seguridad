import * as React from 'react';
import Colores from '../../constants/Colores';
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

interface ButtonSiguiente {
    handleButton: () => void,
    name: string,
    styleContainer?: any,
    styleText?: any
}

const TouchableButton = ({name, handleButton, styleContainer, styleText}: ButtonSiguiente) =>{
    return(
        <TouchableOpacity onPress={handleButton} style={[styleContainer, styles.button]}>
            <Text style={[styles.buttonText, styleText]}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 10,
        marginBottom: 20,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: "Bold",
      },
  });

export default TouchableButton
