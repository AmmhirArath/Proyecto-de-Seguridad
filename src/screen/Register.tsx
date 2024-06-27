import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../credentials';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colores from '../constants/Colores';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const auth = getAuth(appFirebase);

  const handleRegister = async () => {
    if (password === confirmPassword) {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(auth.currentUser);
        Alert.alert('Registro exitoso', 'Cuenta creada con éxito. Por favor, verifica tu correo electrónico.');
        navigation.navigate('Login');
      } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use')
          Alert.alert('Error en el registro', 'Correo electrónico ya está registrado');
        else if (errorCode === 'auth/invalid-email')
          Alert.alert('Error en el registro', 'Correo electrónico no es válido');
        else if (errorCode === 'auth/weak-password')
          Alert.alert('Error en el registro', 'La contraseña debe tener al menos 6 caracteres');
        else
          Alert.alert('Error en el registro', error.message);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Error', 'Las contraseñas no coinciden');
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
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
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Registrarse" onPress={handleRegister} />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginLink: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Register;
