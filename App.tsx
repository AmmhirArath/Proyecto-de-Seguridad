import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bienvenida from './src/screen/Bienvenida';
import Colores from './src/constants/Colores';

function App() {
  return (
    <View style={styles.container}>
      <Bienvenida/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;