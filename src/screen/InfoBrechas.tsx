
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Colores from '../constants/Colores';


const information = {
    '1' : {
        description: "WannaCry fue un ataque de ransomware que se propagó a través de una vulnerabilidad en el sistema operativo Windows. Utilizaba el exploit EternalBlue, desarrollado por la Agencia de Seguridad Nacional de Estados Unidos (NSA) y filtrado por el grupo de hackers Shadow Brokers.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssnpx  ",
        description2:"Inicio: El ataque comenzó el viernes, 12 de mayo de 2017 y ha sido descrito como sin precedentes en tamaño, infectando más de 230.000 computadoras en más de 150 países. Los países más afectados fueron Rusia, India y Taiwán, así como partes del servicio nacional de salud de Gran Bretaña (NHS),8 FedEx, Deutsche Bahn, y las aerolíneas LATAM.",
        url: "https://imgs.search.brave.com/A4wmEqqURG4GGaIXz1kz5jq5IFkrcT98BLDgk42S7GM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMi5j/ZG4udHVybmVyLmNv/bS9tb25leS9kYW0v/YXNzZXRzLzE3MDMy/MjE3MTY1My1jeWJl/ci1zZWN1cml0eS1t/aXNjb25jZXB0aW9u/cy0xMDI0eDU3Ni5q/cGc"
    },
    '2' : {
        description: "Se utilizó un gusano informático muy sofisticado conocido como Stuxnet para atacar las instalaciones nucleares de Irán, específicamente la planta de enriquecimiento de Natanz. El ataque fue un acontecimiento importante en la historia de la guerra cibernética y se cree que fue una operación conjunta entre Estados Unidos e Israel.",
        description2:"Stuxnet era un gusano complejo que utilizaba cuatro exploits de día cero para infectar ordenadores en las instalaciones de Natanz. Fue diseñado para apuntar a sistemas de control industrial (ICS) específicos y manipular las centrífugas utilizadas en el proceso de enriquecimiento. El gusano pudo evadir la detección del software de seguridad y pudo propagarse a través de unidades USB infectadas.",
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu230z1dFffi5DC03gqmwWe9T3FMAlOHkjDaAqATEPYpsp0uThQcvOAo-iDVkfevOcQX7t2E2ooE2srh2x9_9skNacCjzUiSIuGXK8_KLsPF5OChVL87t3a3yslS5pn5qTK2xZ3xozfUKe/s640/Snowden+Confirms+Stuxnet+Malware+developed+by+NSA+and+Israel+Together.jpg"
    },
    '3' : {
        description: "En 2013, Yahoo sufrió una filtración masiva de datos que afectó a sus tres mil millones de cuentas de usuarios. La violación no se hizo pública hasta septiembre de 2016. Los datos robados no incluían contraseñas en texto claro.",
        description2:"Durante noviembre o diciembre de 2014 un hacker. Ruso llamdo Alexey Belan, copió una copia de seguridad de noviembre de 2014 de la base de datos de cuentas de usuarios de Yahoo. La base de datos de cuentas incluía datos de más de 500 millones de cuentas de usuarios, incluidos datos muy importantes y, en algunos casos, respuestas cifradas a través de cookies web manipuladas.",
        url: "https://imgs.search.brave.com/sjP0HE_U3idqLgLLaoZwCEErpngmvAAs861rPaNagaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0VF/a3NOem11dkNqTWlY/bkg5OHhWRGotMzIw/LTgwLmpwZw"
    },
    '4' : {
        description: "La violación de datos de Target, que ocurrió en 2013, fue una de las violaciones de datos minoristas más grandes e importantes de la historia. La infracción afectó a más de 41 millones de cuentas de tarjetas de pago de clientes y 70 millones de registros de clientes, incluidos nombres, números de teléfono, direcciones de correo electrónico y otra información confidencial.",
        description2:"La brecha se produjo cuando los hackers obtuvieron acceso al portal informático de Target mediante credenciales robadas de un proveedor externo. Luego, los atacantes explotaron las debilidades del sistema de Target, instalaron malware y capturaron datos confidenciales.",
        url: "https://imgs.search.brave.com/3vO1NJs-hf-8Rhnd2YtCOhAgJ-D9EZGqFzirbSVguLc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMzBl/MTc4ZThmOGJhNjE3/NjA0Yi04YWVkZDc4/MmI3ZDIyY2ZlMGQx/MTQ2ZGE2OWE1MjQz/Ni5zc2wuY2YxLnJh/Y2tjZG4uY29tL3Rh/cmdldC1icmVhY2gt/d2hhdC1oYXBwZW5l/ZC1zaG93Y2FzZV9p/bWFnZS05LWEtNjMx/Mi5qcGc"
    },
    '5' : {
        description: "En 2011, PlayStation Network (PSN) sufrió una violación masiva de datos, exponiendo la información personal de aproximadamente 77 millones de usuarios. El hack, que ocurrió entre el 17 de abril y el 19 de abril de 2011, fue una de las mayores violaciones de seguridad de datos en la historia.",
        description2:"El hack se atribuyó a una “intrusión externa” en los servicios PSN y Qriocity de Sony. Los atacantes robaron datos personales, incluidos nombres, direcciones, direcciones de correo electrónico, fechas de nacimiento, contraseñas y más. La infracción se descubrió el 20 de abril de 2011 y la PSN se cerró de inmediato.",
        url: "https://imgs.search.brave.com/ohbkIDpQ1HmWjGNln_nO5ssIfN4ZEdb_ETbLRrLbSH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI1NzY3/NTEuanBn"
    },
    '6' : {
        description: "La Operación Aurora fue una serie de ataques cibernéticos realizados por amenazas persistentes avanzadas como el Grupo Elderwood con sede en Beijing, China, con asociaciones con el Ejército Popular de Liberación. Los ataques comenzaron a mediados de 2009 y continuaron hasta diciembre de 2009.",
        description2:"El ataque se dirigió a docenas de otras organizaciones, de las cuales Adobe Systems, Akamai Technologies, Juniper Networks y Rackspace han confirmado públicamente que fueron atacados. Según los informes de los medios, Yahoo, Symantec, Northrop Grumman, Morgan Stanley y Dow Chemical también estuvieron entre los objetivos.",
        url: "https://imgs.search.brave.com/N_KMHqYVJHRYRSFQDA3D51bzMNCyux8Yn97qtwavFMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jeXN0/b3J5LWltYWdlcy5z/My5hbWF6b25hd3Mu/Y29tL2NoaW5hLWFy/bXktMS5qcGc"
    },
    '7' : {
        description: "",
        description2:"",
        url: "https://imgs.search.brave.com/EBaf4T6kB32TbkDuK3Wz5WF5Atu56Ggzn7N3ImMqYN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXJzdGVjaG5pY2Eu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEyL0dldHR5/SW1hZ2VzLTEzMjcz/NTQzOTUtODAweDUz/My5qcGc"
    },
    '8' : {
        description: "",
        description2:"",
        url: ""
    },
    '9' : {
        description: "",
        description2:"",
        url: ""
    },
    '10' : {
        description: "",
        description2:"",
        url: ""
    },
}


const BrechasInfo = ({ route } : any) => {
    const { id, content } = route.params;
    const info = information[id];

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source = {require('../assets/nubeGrande.png')}/>
            <View style={styles.containertitle}>
            <Text style={styles.title}>{content}</Text>
            </View>
            <Image style={styles.images} source={{uri:info.url}} />
            <View style = {styles.container2}>
            <Text style={styles.info}>{info.description}</Text>
            <Text style={styles.info}>{info.description2}</Text>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colores.azulclaro,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20
    },
    title:{
        fontSize: 32,
        color: Colores.azuloscuro,
        textAlign: 'center',
        fontFamily: 'Bold'
    },
    info:{
        fontSize: 17,
        textAlign: 'center',
        color: Colores.negro,
        fontFamily: 'Bold'
    },
    images:{
        justifyContent:'flex-start',
        alignContent:'center',
        borderRadius:30,
        width: 350,
        height: 260,
        marginBottom: 10,
        marginTop: 15,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: 'rgba(100, 100, 100, 0.9)'
    },
    container2:{
        flex: 1,
        backgroundColor: 'rgba(400, 400, 400, 0.6)',
        borderRadius: 15,
        borderWidth: 1,
        overflow: "hidden",
        width: 370,
        padding: 15,
        marginTop: 10,
        marginBottom: 15,
    },
    containertitle:{
        marginTop:10,
        backgroundColor: 'rgba(500, 500, 500, 0.6)',
        borderRadius: 10,
        width: 280,
    },
    image:{
        position:'absolute',
        zIndex:-1,
        height:1000
    },
});

export default BrechasInfo;