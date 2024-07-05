import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colores from '../constants/Colores';
import { brechas } from '../../brechas.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import Background from './BackgroundGradient';

const BrechasInfo = ({ route }) => {
    const { id, content } = route.params;
    const info = brechas[id];
    const [fontSize, setFontSize] = React.useState(17);

    const increaseFontSize = () => {
        setFontSize(fontSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(fontSize - 2);
    };

    return (
        <View style={{ flex: 1 }}>
            <Background/>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                    <View style={styles.containertitle}>
                        <Text style={styles.title}>{content}</Text>
                    </View>
                    </View>

                    <Image source={info.source} style={styles.images} />
                    <View style={styles.container2}>
                        <Text style={[styles.info, { fontSize }]}>{info.description}</Text>
                        <Text style={[styles.info, { fontSize }]}>{info.description2}</Text>
                        <Text style={[styles.info, { fontSize }]}>{info.description3}</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={increaseFontSize}
                style={[styles.floatingButton, styles.increaseButton]}
            >
                <Icon name="plus" size={20} color={Colores.verde} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={decreaseFontSize}
                style={[styles.floatingButton, styles.decreaseButton]}
            >
                <Icon name="minus" size={20} color={Colores.rojo} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 10,
        alignItems: 'center',
        paddingTop: 20,
    },
    backIcon: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: Colores.azuloscuro,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    info: {
        fontSize: 17,
        textAlign: 'center',
        color: Colores.negro,
        fontFamily: 'Bold',
    },
    images: {
        justifyContent: 'flex-start',
        alignContent: 'center',
        borderRadius: 30,
        width: 350,
        height: 260,
        marginBottom: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'rgba(100, 100, 100, 0.9)',
    },
    container2: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        borderWidth: 1,
        overflow: 'hidden',
        width: 370,
        padding: 15,
        marginTop: 10,
        marginBottom: 15,
    },
    containertitle: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: Colores.azulclaro,
        borderRadius: 10,
        width: 280,
        padding: 10,
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        height: 1000,
    },
    relatedContainer: {
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    relatedTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    relatedItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    relatedItem: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
    },
    relatedText: {
        fontSize: 14,
        color: '#494C6B',
        textAlign: 'center',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    increaseButton: {
        right: 80,
    },
    decreaseButton: {
        right: 20,
    },
});

export default BrechasInfo;
