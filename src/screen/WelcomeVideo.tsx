import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, useWindowDimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const videoSource = require('../assets/videos/Animacion-inicio.mp4');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const video = useRef(null);

  const { width, height } = useWindowDimensions();
  const scaleFactor = 1.5;

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
        style={[styles.video, { width: width * scaleFactor, height: height * scaleFactor }]}
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
  },
});

export default WelcomeScreen;
