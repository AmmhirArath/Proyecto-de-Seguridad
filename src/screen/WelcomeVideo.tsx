import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

// Importa el video localmente
const videoSource = require('../assets/videos/Animacion-inicio.mp4');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const video = useRef(null);

  const handleVideoEnd = () => {
    navigation.navigate('Bienvenida'); 
  };

  useEffect(() => {
    if (video.current) {
      video.current.playAsync();
    }
  }, []);


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={videoSource} 
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping={false}
        onPlaybackStatusUpdate={status => {
          if (status.didJustFinish) {
            handleVideoEnd();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default WelcomeScreen;
