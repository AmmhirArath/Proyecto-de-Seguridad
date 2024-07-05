
//Importacion de los audios
//import PhishingAudio from "./src/assets/audio/audioAdul/Phishing.mp3";
//import MalwareAudio from "./src/assets/audio/audioAdul/Malware.mp3";
//import DoSYDDoSAudio from "./src/assets/audio/audioAdul/DoSYDDoS.mp3"
//import AtaqueIntermeAudio from "./src/assets/audio/audioAdul/AtaqueInterme.mp3"
//import InyeccionSQLAudio from "./src/assets/audio/audioAdul/InyeccionSQL.mp3"
//import CrossSiteScriptingAudio from "./src/assets/audio/audioAdul/CrossSiteScripting.mp3"
///import AtaqueDeFuerzaAudio from "./src/assets/audio/audioAdul/AtaqueDeFuerza.mp3"
//import LaIngenieríaSocialAudio from "./src/assets/audio/audioAdul/LaIngenieríaSocial.mp3"
//import AtaqueDeDíaCeroAudio from "./src/assets/audio/audioAdul/AtaqueDeDíaCero.mp3"

//Importacion de Videos
//import PhishingVideo from "./src/assets/videos/videosAdul/Phishing.webm";
//import MalwareVideo from "./src/assets/videos/videosAdul/Malware.webm";
//import DDoSVideo from "./src/assets/videos/videosAdul/DDoS.webm";
//mport interVideo from "./src/assets/videos/videosAdul/inter.webm";
//import SQLVideo from "./src/assets/videos/videosAdul/SQL.webm";
//import BrutaVideo from "./src/assets/videos/videosAdul/Bruta.webm";
//import SocialVideo from "./src/assets/videos/videosAdul/Social.webm";
//import ZeroDayVideo from "./src/assets/videos/videosAdul/ZeroDay.webm";
//Importacion de Imagenes
//import PhishingImage1 from "./src/assets/Img/ImgAdul/Phishing1.png";
//import MalwareImage1 from "./src/assets/Img/ImgAdul/Malware.png";
//import CrossImage1 from "./src/assets/Img/ImgAdul/Cross.png";
//import DDoSImage1 from "./src/assets/Img/ImgAdul/DDoS.png";
//import fuerzabruImage1 from "./src/assets/Img/ImgAdul/fuerzabru.png";
//import ingeneriaImage1 from "./src/assets/Img/ImgAdul/ingeneria.png";
//import injeccioImage1 from "./src/assets/Img/ImgAdul/injeccio.png";
//import IntermediarioImage1 from "./src/assets/Img/ImgAdul/Intermediario.png";
//import ZeroDayImage1 from "./src/assets/Img/ImgAdul/ZeroDay.png";

/*const data = [
    {

        id: "1",
        title: "Phishing",
        description: "Phishing es un término informático que describe técnicas diseñadas para engañar a una víctima haciéndose pasar por una persona, empresa o servicio de confianza. El objetivo es manipularla para que realice acciones indebidas, como revelar información confidencial o hacer clic en enlaces maliciosos. Se utiliza la ingeniería social, aprovechando el deseo de ayudar, la eficiencia o explotando la vanidad, la baja autoestima o la búsqueda de empleo. Por ejemplo, se envían correos electrónicos o se muestran anuncios falsos que prometen premios ficticios para incitar a la víctima a hacer clic en un enlace malicioso. A veces se aprovechan vulnerabilidades informáticas para robar información, instalar malware o cometer fraudes. El phishing es una de las técnicas más comunes para el robo de contraseñas.",
        image: PhishingImage, 
        video: PhishingVideo,
        audio: PhishingAudio,
    },
    {
        id: "2",
        description: "Malware, es un programa malicioso, también conocido como malware, es cualquier tipo de software que realiza acciones dañinas en un sistema informático de manera intencionada y sin el conocimiento del usuario. A diferencia del software defectuoso, el malware tiene la intención explícita de causar daño. Ejemplos comunes de actividades maliciosas incluyen el robo de información a través de troyanos, el daño o mal funcionamiento del sistema (como en los casos de Stuxnet, Shamoon o Chernobyl), la provocación de pérdidas económicas, el chantaje mediante ransomware, la facilitación de acceso no autorizado, la molestia deliberada o una combinación de estas actividades.",
        image: MalwareImage1,
        video: MalwareVideo,
        audio: MalwareAudio,
      },
    {
        id: "3",
        title: "Ataques de DoS Y DDoS",
        description: "Un ataque de denegación de servicio, conocido como ataque DoS , consiste en una acción dirigida contra un sistema informático o una red que tiene como resultado la inaccesibilidad de un servicio o recurso para usuarios legítimos. Este tipo de ataque generalmente causa la pérdida de conectividad con la red al consumir el ancho de banda disponible o sobrecargar los recursos computacionales del sistema objetivo.",
        image: DDoSImage1,
        video: DDoSVideo,
        audio: DoSYDDoSAudio,
      },
    {
        id: "4",
        title: "Ataques de intermediario",
        description: "Un ataque de intermediario, es cuando un atacante puede leer, insertar y modificar información a su voluntad. El atacante debe poder observar e interceptar mensajes entre dos víctimas sin que estas se den cuenta de que la comunicación ha sido comprometida. Este tipo de ataque es especialmente significativo en el protocolo original de intercambio de claves de Diffie-Hellman cuando no se utiliza autenticación. En situaciones como estar dentro del alcance de un punto de acceso Wi-Fi sin cifrar, un atacante puede insertarse como intermediario de manera relativamente sencilla..",
       image: IntermediarioImage1,
        video: interVideo,
        audio: AtaqueIntermeAudio,
      },
 
    {
        id: "5",
        title: "Inyección SQL",
        description: "La inyección SQL es un método para infiltrar código malicioso aprovechando una vulnerabilidad informática en una aplicación, específicamente en el proceso de validación de entradas, con el fin de ejecutar operaciones en una base de datos. Esta vulnerabilidad se debe a la incorrecta comprobación o filtrado de las variables utilizadas en un programa que contiene o genera código SQL. Este tipo de error es parte de una clase más amplia de vulnerabilidades que pueden presentarse en cualquier lenguaje de programación o script integrado en otro sistema.",
        image: injeccioImage1,
        video: SQLVideo,
        audio: InyeccionSQLAudio,
      },
    {
        id: "6",
        title: "Cross-Site Scripting ",
        description: "Es un tipo de ataque informático que permite a un actor malintencionado ejecutar código malicioso en el navegador de otro usuario. El atacante no dirige directamente sus acciones hacia la víctima, sino que explota una vulnerabilidad en un sitio web que la víctima visita. Desde la perspectiva del navegador, el código malicioso, comúnmente escrito en JavaScript, parece ser parte legítima del sitio web, lo que involucra al sitio como un colaborador involuntario del atacante.",
        image: CrossImage1,
        video: PhishingVideo,
        audio: CrossSiteScriptingAudio,
    },
    {
        id: "7",
        title: "Ataques de día cero",
        description: "Un ataque de día cero, es un tipo de ataque contra una aplicación o sistema informático que busca ejecutar código malicioso aprovechando vulnerabilidades desconocidas tanto para los usuarios como para el fabricante del producto. Estas vulnerabilidades aún no han sido corregidas. Es común que los exploits que aprovechan estas vulnerabilidades se vendan en el mercado negro, donde su precio se determina según su impacto y la cantidad de dispositivos vulnerables. Un ataque de día cero se considera uno de los instrumentos más peligrosos en la guerra cibernética.",
        image: ZeroDayImage1 ,
        video: ZeroDayVideo,
        audio: AtaqueDeDíaCeroAudio,
    },

    {
        id: "8",
        title: "Ataques de ingeniería social",
        description: "La ingeniería social es la práctica ilegítima de obtener información confidencial manipulando a usuarios legítimos. Consiste en un conjunto de técnicas que ciertas personas utilizan para obtener información, acceso o permisos en sistemas de información, con el fin de causar daños a la persona u organización comprometidas. Se utiliza en diversas formas de estafas y suplantación de identidad. El principio subyacente de la ingeniería social es que, en cualquier sistema, los usuarios son el 'eslabón débil'.",
        image: ingeneriaImage1,
        video: SocialVideo,
        audio: LaIngenieríaSocialAudio,
    },

    {
        id: "9",
        title: "Ataques de fuerza bruta",
        description: "Un ataque de fuerza bruta es un método para recuperar una clave probando todas las combinaciones posibles hasta encontrar aquella que permite el acceso. En otras palabras, es el proceso mediante el cual, conociendo el algoritmo de cifrado utilizado y teniendo un par de texto claro y texto cifrado, se cifra (o descifra) uno de los elementos del par utilizando cada posible combinación de clave hasta obtener el otro elemento del par.",
        image: fuerzabruImage1,
        video: BrutaVideo ,
        audio: AtaqueDeFuerzaAudio,
    },
];

export default data;*/