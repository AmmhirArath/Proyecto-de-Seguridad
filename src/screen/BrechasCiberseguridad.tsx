import * as React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Colores from '../constants/Colores';


const info = [
    { id: '1', content: 'WannaCry', year: 2017, image: require('../assets/Img/wannacry.jpg') },
    { id: '2', content: 'Stuxnet', year: 2010, image: require('../assets/Img/stuxnet.jpg') },
    { id: '3', content: 'Yahoo Data Breaches', year: 2013, image: require('../assets/Img/yahoo.jpg') },
    { id: '4', content: 'Target Data Breach', year: 2013, image: require('../assets/Img/target.jpg') },
    { id: '5', content: 'Sony PlayStation Network Hack', year: 2011, image: require('../assets/Img/playstation.jpg') },
    { id: '6', content: 'Operation Aurora', year: 2009, image: require('../assets/Img/aurora.jpg') },
    { id: '7', content: 'SolarWinds Hack', year: 2020, image: require('../assets/Img/solarwind.jpg') },
    { id: '8', content: 'Equifax Data Breach', year: 2017, image: require('../assets/Img/equifax.jpg') },
    { id: '9', content: 'NotPetya', year: 2017, image: require('../assets/Img/notpetya.jpg') },
    { id: '10', content: 'ILOVEYOU Virus', year: 2000, image: require('../assets/Img/iloveyou.jpg') },
];

info.sort((a, b) => a.year - b.year);

const EventosHistoricos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>
                Se muestran los eventos históricos de ciberseguridad y los años en los que ocurrieron.
            </Text>
            <FlatList
                data={info}
                keyExtractor={(item) => item.id}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.itemTitle}>{item.content}</Text>
                            <Text style={styles.itemYear}>Año: {item.year}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buyButton}
                            onPress={() => navigation.navigate("BrechasHackeos", { id: item.id, content: item.content })}
                        >
                            <Text style={styles.buyButtonText}>Leer Más</Text>
                        </TouchableOpacity>
                    </View>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        color: Colores.azuloscuro,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        marginTop: 200,
        paddingHorizontal: 20,
    },
    flatListContent: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    card: {
        backgroundColor: Colores.azuloscuro,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 8,
        width: 280, 
        alignItems: 'center',
        height: 320,
        justifyContent: 'center',
        shadowColor: Colores.purpura,
        borderColor: Colores.azulpuro,
        borderWidth: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    itemTitle: {
        color: Colores.blanco,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    itemYear: {
        color: Colores.blanco,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
    },
    itemImage: {
        width: 250,
        height: 200, 
        marginTop: 10,
        resizeMode: 'contain',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    buyButton: {
        backgroundColor: Colores.verde,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    buyButtonText: {
        color: Colores.blanco,
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default EventosHistoricos;
