import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import appFirebase from "../../credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AppLoader from "./Loader";
import Colores from '../constants/Colores';
import Background from './BackgroundGradient';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPending, setLoginPending] = useState(false);
  const navigation = useNavigation();
  const auth = getAuth(appFirebase);

  const handleLogin = async () => {
    Keyboard.dismiss();
    try {
      setLoginPending(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user && !user.emailVerified) {
        setLoginPending(false);
        Alert.alert("Error", "Por favor verifica tu correo electrónico antes de iniciar sesión.");
        return; 
      }
      setLoginPending(false);
      navigation.navigate("Inicio");
    } catch (error) {
      Alert.alert("Error", "Usuario o contraseña incorrecta");
      setLoginPending(false);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Background />
        <View style={styles.blueSection}>
          <Text style={styles.title}>Iniciar Sesión</Text>
        </View>
        <View style={styles.whiteSection}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            onSubmitEditing={() => {}}
            inputMode='email'
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            returnKeyType="go"
            onSubmitEditing={handleLogin}
          />
          <TouchableOpacity 
            style={[styles.button, (!email || !password || loginPending) && styles.buttonDisabled]} 
            onPress={handleLogin}
            disabled={!email || !password || loginPending}
          >
            <Text style={styles.buttonText}>INGRESAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>
              ¿No tienes una cuenta? Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {loginPending ? <AppLoader/> : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
  },
  blueSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  whiteSection: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  registerLink: {
    marginTop: 50,
    textAlign: 'center',
    color: 'blue',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center'
},
buttonText: {
    color: 'white',
    fontSize: 18,
},
});

export default Login;
