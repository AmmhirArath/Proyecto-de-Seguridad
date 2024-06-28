import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import appFirebase from "../../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colores from "../constants/Colores";
import AppLoader from "./Loader";
import Background from "./BackgroundGradient";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const auth = getAuth(appFirebase);
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleRegister = async () => {
    Keyboard.dismiss();
    setRegisterLoading(true);
    if (password === confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await sendEmailVerification(auth.currentUser);
        Alert.alert(
          "Registro exitoso",
          "Cuenta creada con éxito. Por favor, verifica tu correo electrónico."
        );
        navigation.navigate("Login");
      } catch (error) {
        setRegisterLoading(false);
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use")
          Alert.alert(
            "Error en el registro",
            "Correo electrónico ya está registrado"
          );
        else if (errorCode === "auth/invalid-email")
          Alert.alert(
            "Error en el registro",
            "Correo electrónico no es válido"
          );
        else if (errorCode === "auth/weak-password")
          Alert.alert(
            "Error en el registro",
            "La contraseña debe tener al menos 6 caracteres"
          );
        else Alert.alert("Error en el registro", error.message);
      } finally {
        setRegisterLoading(false);
      }
    } else {
      setRegisterLoading(false);
      Alert.alert("Error", "Las contraseñas no coinciden");
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
          <Text style={styles.title}>Registro</Text>
        </View>
        <View style={styles.whiteSection}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            inputMode="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={[
              styles.button,
              (!email || !password || !confirmPassword || registerLoading) &&
                styles.buttonDisabled,
            ]}
            onPress={handleRegister}
            disabled={
              !email || !password || !confirmPassword || registerLoading
            }
          >
            <Text style={styles.buttonText}>REGISTRATE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>
              ¿Ya tienes una cuenta? Inicia sesión
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {registerLoading ? <AppLoader /> : null}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  whiteSection: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 50,
    padding: 40,
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    color: "#fff",
    fontFamily: 'Bold'
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  loginLink: {
    marginTop: 40,
    textAlign: "center",
    color: "blue",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  button: {
    backgroundColor: "#4682b4",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Regular'
  },
});

export default Register;
